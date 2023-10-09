const express = require('express');
const router = express.Router();
const axios = require('axios');
const fetch = require('node-fetch');
const CryptoJS = require('crypto-js');
const crypto = require('crypto');
const { get } = require('http');
const { WALLETADDRESS } = require('../../constants');
const { NETWORKDATA,  tokenbalancearraymoralis } = require('../../constants');
const testData = tokenbalancearraymoralis
router.get('/', async (req, res) => {
    res.send("cefi-transactions")
});



// @route    GET /api/cefi/transactions/cb
// @desc     Get all coinbase USD transactions (buys (purchases, not trades),sells,deposits,withdrawals)
// @access   Private
router.get('/cb', async (req, res) => {
    console.log("------START OF COINBASE TRANSACTIONS /cb ROUTE------")
    console.log("1 REQ QUERY apiKey", req.query.apiKey)
    console.log("2 REQ QUERY apiSecret", req.query.apiSecret)
    console.log("3 REQ HEADERS coinbase_access_token", req.headers.access_token)
    console.log("4 REQ QUERY API KEY", req.query.apiKey)
    console.log("5 REQ QUERY API", req.query)
    
    const access_token = process.env.NODE_ENV==='development' ? process.env.COINBASE_DEVELOPER_ACCESS_TOKEN : req.headers.access_token;
    const myHeaders = {
        Authorization: `Bearer ${access_token}`,
        'CB-VERSION': "2017-10-02"
      }
    
    let BUYDATA = []
    const baseUrl = 'https://api.coinbase.com';
    const defaultDate = new Date("2022-08-01").toISOString();
    const filterDate = defaultDate;


    const fetchAccountData = async () => {
        const endpoint = '/v2/accounts?limit=99&order=asc'
        const response = await fetch(`${baseUrl}${endpoint}`, {
            method: 'GET',
            headers: myHeaders,
        });

        const responseData = await response.json();
        const allAccounts = responseData.data;
        if (!allAccounts || !Array.isArray(allAccounts)) {
         //   console.error("Invalid or empty responseData.data:", responseData.data);
            return []; // Return an empty array or handle the error accordingly
        }
        const filteredAccounts = allAccounts.filter((account) => Number(account.balance.amount) > 0);
      //  console.log("FILTERED ACCOUNTS: ", filteredAccounts);
        return filteredAccounts.map((account) => ({
            ...account,
            logoURI: `https://assets.coincap.io/assets/icons/${account.currency.code.toLowerCase()}@2x.png`

        })
        )
    }

    const fetchTransactionData = async (endpoint) => {
        const response = await fetch(`${baseUrl}${endpoint}`, {
            method: 'GET',
            headers: myHeaders,
        });
        const responseData = await response.json();
        return responseData.data;
    };

    const fetchPaymentMethodData = async (paymentMethodId) => {
        const response = await fetch(`${baseUrl}/v2/payment-methods/${paymentMethodId}`, {
            method: 'GET',
            headers: myHeaders,
        });
        const responseData = await response.json();
        return responseData.data;
    };

    // Helper function to get payment method data for each transaction
    const getPaymentMethodData = async (transaction) => {
        const paymentMethodId = transaction.payment_method.id;
        const paymentMethodData = await fetchPaymentMethodData(paymentMethodId);
        return paymentMethodData;
    };


    try {
        // Fetch all accounts
        const allAccounts = await fetchAccountData();

        // Fetch transactions for each account and format the data
        const formattedData = await Promise.all(
            allAccounts.map(async (account) => {
                const buyTransactions = await fetchTransactionData(`/v2/accounts/${account.currency.code}/buys`); // USE THIS TO CHECK FOR TOKEN BUYS WITH CARD OR BANK          

                return {
                    ...account,
                    buyTransactions: await Promise.all(
                        buyTransactions
                            .filter((transaction) => {

                                return transaction.created_at >= filterDate;
                            })
                            .map(async (transaction) => ({
                                ...transaction,
                                total_amount: { 'amount': transaction.amount.amount, 'currency': transaction.amount.currency },
                                payment_method: await getPaymentMethodData(transaction),
                                dollar_amount: transaction.total.amount,
                                platform: "coinbase"
                            }))

                    ),
                    platform: "coinbase"


                };
            })
        );



        const usdDeposits = await fetchTransactionData(`/v2/accounts/USD/deposits`); // USE THIS TO CHECK FOR USD BANK DEPOSITS (NOT CRYPTO DEPOSITS)

        const USDDEPOSITS = await Promise.all(
            usdDeposits.map(async (transaction) => ({
                ...transaction,
                total_amount: { 'amount': transaction.amount.amount, 'currency': transaction.amount.currency },
                payment_method: await getPaymentMethodData(transaction),
                dollar_amount: transaction.amount.amount,
                resource: 'deposit',
                platform: "coinbase"
            }))
        )

        const usdWithdrawals = await fetchTransactionData(`/v2/accounts/USD/withdrawals`);
        const USDWITHDRAWALS = await Promise.all(
            usdWithdrawals.map(async (transaction) => ({
                ...transaction,
                total_amount: { 'amount': transaction.amount.amount, 'currency': transaction.amount.currency },
                payment_method: await getPaymentMethodData(transaction),
                dollar_amount: transaction.amount.amount,
                resource: 'withdrawal',
                platform: "coinbase"
            }))
        )

        const filterDataWithTransactions = formattedData.filter((account) => {
            return account.buyTransactions.length > 0;
        });
        filterDataWithTransactions.forEach((account) => {
            account.buyTransactions.forEach((transaction) => {
                BUYDATA.push({
                    ...transaction
                })
            })
        })

        const ALLTRANSACTIONS = [...USDDEPOSITS, ...USDWITHDRAWALS, ...BUYDATA]
        console.log("ALLTRANSACTIONS", ALLTRANSACTIONS)
        console.log("END OF COINBASE TRANSACTIONS /cb ROUTE")
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(ALLTRANSACTIONS);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error occurred.' });
    }
});


// @route    GET /api/cefi/transactions/bin
// @desc     Get all binance USD transactions (buys (purchases, not trades),sells,deposits,withdrawals)
// @access   Private

router.get('/bin', async (req, res) => {
    console.log("------START OF BINANCE TRANSACTIONS /bin ROUTE------")
    console.log("1 REQ QUERY apiKey", req.query.apiKey)
    console.log("2 REQ QUERY apiSecret", req.query.apiSecret)
    const api_url = 'https://api.binance.us';
    const api_key = req.query.apiKey;
    const api_secret = req.query.apiSecret
 
    try {

 
        const defaultDate = new Date("2020-08-01").toISOString();
        // const filterDate = req.query.filterDate ? req.query.filterDate : defaultDate;
        const filterDate = defaultDate;


        let allTransactions = [];
        let USDDEPOSITS = []
        let USDWITHDRAWALS = [];
        let loops = 0;
        const recvWindow = 5000; // Adjust this value as needed

        const og_year = getTheYear(filterDate);
        const og_month = getTheMonth(filterDate);
        const og_start_time = getFirstDayOfMonth(og_year, og_month); // 2022-04-01 // 2022-05-01 // 2022-06-01 // 2022-07-01
        const og_end_time = getLastDayOfMonth(og_year, og_month); //  2022-04-31 //  2022-05-31 // 2022-06-30 // 2022-07-31


        function getFirstDayOfMonth(yearNo, monthNo) {
            return yearNo + "-" + monthNo + "-01"
        }


        function getLastDayOfMonth(yearNo, monthNo) {
            return new Date(yearNo, monthNo, 0).toISOString().slice(0, 10);
        }


        function getTheMonth(dateString) {
            const monthNo = new Date(dateString);     // Parse the input date string to a Date object
            monthNo.setMonth(monthNo.getMonth());
            const month = monthNo.toISOString().slice(5, 7);
            return Number(month);
        }


        function getTheYear(dateString) {
            const yearNo = new Date(dateString).getFullYear();
            return Number(yearNo)
        }



        const convertToUnixTimestamp = (dateString) => {
            const date = new Date(dateString);
            return date.getTime();
        };

        const convertToISODate = (unixTimestamp) => {
            const date = new Date(unixTimestamp);
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const year = date.getFullYear();
            let hour = date.getHours();
            const minute = String(date.getMinutes()).padStart(2, "0");
            const ampm = hour >= 12 ? "PM" : "AM";
            // Convert to 12-hour format
            hour = hour % 12 || 12;
            const formattedDate = `${month}-${day}-${year} ${hour}:${minute}${ampm}`;

            console.log("FORMATTED DATE: ", formattedDate); // Output: 12-31-2023 1:45PM
            return formattedDate;
        }

        let arrTimePeriods = []
        // Attaches auth headers and returns results of a GET request
        async function binanceus_request(uri_path, api_key, loopStartTime, loopEndTime, transactionType) {
            const varTimestamp = Math.round(new Date().getTime());
            const binanceServerTime = await fetch('https://api.binance.us/api/v3/time');
            const varServerTime = await binanceServerTime.json();
            const varTimeDifference = varTimestamp - varServerTime.serverTime;
            const timestamp = varTimestamp - (varTimestamp - varServerTime.serverTime);


            async function get_binanceus_signature(data, secret) {
                const postdata = new URLSearchParams(data).toString();
                const message = Buffer.from(postdata, 'utf-8');
                const byte_key = Buffer.from(secret, 'utf-8');
                const key = crypto.createHmac('sha256', byte_key);
                const signature = key.update(message).digest('hex');
                return signature;
            }
            const data = {
                //coin,
                timestamp: timestamp,
                startTime: convertToUnixTimestamp(loopStartTime),
                endTime: convertToUnixTimestamp(loopEndTime),
            };
            const signature = await get_binanceus_signature({ ...data, timestamp }, api_secret);
            console.log("SIGNATURE: ", signature)
            const params = { ...data, timestamp, signature };
            const url = new URL(api_url + uri_path);
            url.search = new URLSearchParams(params).toString();

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'X-MBX-APIKEY': api_key
                }
            });
            const result = await response.json();
            if (Array.isArray(result.assetLogRecordList)) {

                const transaction = result.assetLogRecordList
                    .filter((transaction) => {
                        return new Date(transaction.createTime).toISOString() >= filterDate;
                    })
                    .map((transaction) => {

                        return {
                            id: transaction.orderId,
                            total_amount: { 'amount': transaction.amount, 'currency': transaction.fiatCurrency },
                            dollar_amount: transaction.amount,
                            status: transaction.orderStatus,
                            payment_method: {
                                type: transaction.paymentMethod,
                            },
                            payout_at: new Date(transaction.createTime).toISOString(),
                            createTimeISO: convertToISODate(transaction.createTime),
                            created_at: new Date(transaction.createTime).toISOString(),
                            resource: transactionType,
                            fee: {
                                amount: transaction.transactionFee,
                                currency: transaction.fiatCurrency
                            },
                            amount: {
                                amount: transaction.amount,
                                currency: transaction.fiatCurrency
                            },
                            subtotal: {
                                amount: (transaction.amount - transaction.transactionFee).toString(),
                                currency: transaction.fiatCurrency
                            },
                            loopStartTime,
                            loopEndTime,
                            timeAddedToArray: new Date().toISOString(),
                            platform: "binance",
                            transaction,
                        }
                    });
                return transaction;
            } else {
                return []
            }

        }


        const addOneMonth = (dateString, startOrEnd) => {
            const date = new Date(dateString);     // Parse the input date string to a Date object
            const monthNo = getTheMonth(date)
            const newMonth = monthNo == 12 ? 1 : monthNo + 1 // if month number is 12, set back to 1, esle add 1
            const yearNo = getTheYear(date)
            const newYear = monthNo === 12 ? yearNo + 1 : yearNo // if month number is 12, add 1 to year, esle keep year the same
            const finalDate = startOrEnd == "start" ? getFirstDayOfMonth(newYear, newMonth) : getLastDayOfMonth(newYear, newMonth);

            return finalDate
        }


        const binanceData = async () => {
            const current_time = new Date().toISOString().slice(0, 10);
            let start_time = new Date(og_start_time).toISOString().slice(0, 10);
            let end_time = new Date(og_end_time).toISOString().slice(0, 10);
            let loop_StartTime = getFirstDayOfMonth(getTheYear(start_time), getTheMonth(start_time));
            let loop_EndTime = getLastDayOfMonth(getTheYear(end_time), getTheMonth(end_time));

            const firstDay_of_NextMonth = getFirstDayOfMonth(getTheYear(current_time), getTheMonth(current_time) + 1);// First of Next Month



            for (loop_StartTime = og_start_time; loop_StartTime < firstDay_of_NextMonth; loop_StartTime = addOneMonth(loop_StartTime, "start")) {

                arrTimePeriods.push({ loop_StartTime, loop_EndTime })
                const usdDeposits = await binanceus_request('/sapi/v1/fiatpayment/query/deposit/history', api_key, loop_StartTime, loop_EndTime, "deposit");
                const usdWithdrawals = await binanceus_request('/sapi/v1/fiatpayment/query/withdraw/history', api_key, loop_StartTime, loop_EndTime, "withdrawal");
                usdDeposits ? USDDEPOSITS.push(...usdDeposits) : null;
                usdWithdrawals ? USDWITHDRAWALS.push(...usdWithdrawals) : null;
                loop_EndTime = addOneMonth(loop_EndTime, "end");
                start_time = addOneMonth(start_time, "start");
                end_time = addOneMonth(end_time, "end");
                loops++
            }
            allTransactions = [...USDDEPOSITS, ...USDWITHDRAWALS];

            return allTransactions;
        };



        const data = await binanceData();
        console.log("SETTING THE HEADER NOW")
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(data));
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;