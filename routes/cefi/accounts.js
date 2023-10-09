const crypto = require('crypto');
const axios = require('axios');
const express = require('express');
const router = express.Router();
const CryptoJS = require('crypto-js');
const fetch = require('node-fetch');



router.get('/cb', async (req, res) => {
    console.log("------START OF COINBASE ACCOUNTS /cb ROUTE------")
    console.log("1 REQ QUERY apiKey", req.query.apiKey)
    console.log("2 REQ QUERY apiSecret", req.query.apiSecret)
    console.log("3 REQ HEADERS coinbase_access_token", req.headers.access_token)
    console.log("4 REQ QUERY API KEY", req.query.apiKey)
    console.log("5 REQ QUERY API", req.query)


    const access_token = process.env.NODE_ENV === 'development' ? process.env.COINBASE_DEVELOPER_ACCESS_TOKEN : req.headers.access_token;

    const myHeaders = {
        Authorization: `Bearer ${access_token}`,
        'CB-VERSION': "2017-10-02"
    }

    let allAccountData = [];
    let index = 0;


    const url = 'https://api.coinbase.com/v2/accounts?limit=100&order=asc';
    const response = await fetch(url, {
        method: 'GET',
        headers: myHeaders,
    });

    let nextURI = "";

    const getRemainingData = async (accountPagination, arrPriceData, accountData) => {
        let remainingPriceData = arrPriceData;
        // console.log("SECOND REQUEST")
        nextURI = accountPagination.next_uri
        // const timestamp = Math.floor(Date.now() / 1000);
        const path = nextURI.replace("https://api.coinbase.com", "");
        // const str = timestamp + "GET" + path;
        // const sig = await sign(str, secret);
        let accessTypeTest = ''

        // if (access_token !== null || access_token !== undefined) {
        //     console.log("SETTING HEADERS WITH COINBASE ACCESS TOKEN", access_token)
        //     accessTypeTest = "access_token"
        //     myHeaders = {
        //         Authorization: `Bearer ${access_token}`,
        //         'CB-VERSION': "2017-10-02"
        //     }
        // }
        console.log(`---using ${accessTypeTest} -----`)
        const url = "https://api.coinbase.com" + path;
        // console.log(`url:2 ${url}`);

        const response = await fetch(url, {
            method: 'GET',
            headers: myHeaders,
        });

        await response.json()
            .then((remData) => {
                let allAccountData = [];
                if (remData.data) {
                    remData.data.forEach(element => {
                        if (element.balance.amount.replace(/[,]/g, ".") > 0) { // IF AMOUNT IS GREATER THAN 0
                            allAccountData.push(element)
                        }

                    })
                }

                return allAccountData;
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const responseData = await response.json()
        .then(async (res) => {
            let allPriceData = [];
            let finalPriceData = [];
            const arrAccountData = res.data;
            await Promise.all(arrAccountData.map(async (element, index) => {


                if (element.balance && element.balance.amount && element.balance.amount.replace(/[,]/g, ".") > 0) {
                    const price = await getPrice(element.balance.currency, arrAccountData);
                    allPriceData.push(price);
                }
            }));

            nextURI = res.pagination.next_uri;
            if (nextURI) {
                //    console.log("getting remaining data...")

                const remainingData = await getRemainingData(res.pagination, allPriceData, res.data);
                allPriceData.push(remainingData);
            }


            const veryFinalData = allPriceData.filter(data => (data != null || data != undefined)).
                map(data => ({
                    ...data,
                    platform: "coinbase",
                    logoURI: "https://cryptoicons.org/api/color/" + (data.currency).toLowerCase() + "/200.png"
                }));

            return veryFinalData;
        })
        .catch((err) => {
            console.log("error: ", err)
        });


    async function getPrice(symbol, userAccountData) {

        let returnData = [];
        let varObj;
        const url = `https://api.coinbase.com/v2/prices/${symbol}-USD/spot`;
        const response = await fetch(url, { method: 'GET' });
        const priceData = await response.json()
            .then((res) => {
                if (res.data && res.data.amount) {
                    returnData = res.data;
                    //  console.log("IS THiS PRICE DATA? ", res.data)
                    varObj = new formatPriceData(res.data.base, res.data.amount, symbol, userAccountData);
                }
            })
            .catch((err) => {
                console.log(err)
            });

        function formatPriceData(base, amount, symbol, userData) {

            this.price = amount;
            this.currency = symbol;
            this.balance = userData.filter(element => { return element.balance.currency == symbol })[0].balance.amount;
            this.amount = userData.filter(element => { return element.balance.currency == symbol })[0].balance.amount;
            this.logoURI = "https://cryptoicons.org/api/icon/" + (symbol).toLowerCase() + "/200"
            this.platform = "coinbase";
        }

        return varObj
    }
    console.log("responsedata", responseData)
    console.log("END OF COINBASE ACCOUNTS /cb ROUTE")
    res.json(responseData);


});


router.get('/bin1', async (req, res) => {
    const api_url = 'https://api.binance.us';
    // get binanceus signature


    const uri_path = '/api/v3/account';
    const api_key = process.env.BINANCE_API_KEY;
    const secret_key = process.env.BINANCE_API_SECRET;


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
        timestamp: timestamp
    };

    const signature = await get_binanceus_signature({ ...data, timestamp }, secret_key);

    // Attaches auth headers and returns results of a GET request
    async function binanceus_request(uri_path, data, api_key, api_sec) {
        console.log("GETTING BINANCE PRICES")
        const binPrices = await fetch("https://api.binance.us/api/v3/ticker/price");
        const binPricesResult = await binPrices.json();
        const usdTokenPrices = binPricesResult.filter(element => {
            return (element.symbol.includes("USDT"));
        })
        console.log("USDTTOKENPRICES", usdTokenPrices)
        let pricesAccounts = [];
        let accountBalances = [];
        const params = { ...data, timestamp, signature };

        const url = new URL(api_url + uri_path);
        url.search = new URLSearchParams(params).toString();
        console.log(params)
        console.log(url)
        const headers = {
            'X-MBX-APIKEY': process.env.BINANCE_API_KEY
        }


        const response = await fetch(url, { headers });
        const result = await response.json()
            .then(async (res) => {
                console.log("THIS IS RES ", res)
                console.log("THIS IS RES BALANCES ", res.balances)
                accountBalances = res.balances
            })

        accountBalances.forEach(element => {
            console.log("ACCOUNT BALANCE ELEMENT ASSET", element.asset);
            console.log("ELEMENT", element)
            const filteredTokenPrices = usdTokenPrices.filter(tokenPrice => tokenPrice.symbol.includes(element.asset));
            if (filteredTokenPrices.length > 0) {



                pricesAccounts.push({
                    currency: element.asset,
                    price: filteredTokenPrices[0].price,
                    balance: element.free,
                    amount: element.free,
                    locked: element.locked,
                    logoURI: "https://cryptoicons.org/api/icon/" + (element.asset).toLowerCase() + "/200",
                    platform: "binance"


                });
            }
        })

        return pricesAccounts;
    }



    const binanceData = await binanceus_request(uri_path, data, api_key, secret_key);


    res.send(binanceData);

})



router.get('/bin', async (req, res) => {
    console.log("------START OF BINANCE ACCOUNTS /bin ROUTE------")
    console.log("1 REQ QUERY apiKey", req.query.apiKey)
    console.log("2 REQ QUERY apiSecret", req.query.apiSecret)
    const api_url = 'https://api.binance.us';
    const api_key = req.query.apiKey;
    const secret_key = req.query.apiSecret;
    const uri_path = '/api/v3/account';



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
        timestamp: timestamp
    };

    const signature = await get_binanceus_signature({ ...data, timestamp }, secret_key);

    // Attaches auth headers and returns results of a GET request
    async function binanceus_request(uri_path, data, api_key, secret_key) {
        console.log("GETTING BINANCE PRICES")
        const binPrices = await fetch("https://api.binance.us/api/v3/ticker/price");
        const binPricesResult = await binPrices.json();
        const usdTokenPrices = binPricesResult.filter(element => {
            return (element.symbol.includes("USDT"));
        })
        console.log("USDTTOKENPRICES", usdTokenPrices)
        let pricesAccounts = [];
        let accountBalances = [];
        const params = { ...data, timestamp, signature };

        const url = new URL(api_url + uri_path);
        url.search = new URLSearchParams(params).toString();
        console.log(params)
        console.log(url)
        const headers = {
            'X-MBX-APIKEY': api_key
        }


        const response = await fetch(url, { headers });
        const result = await response.json()
            .then(async (res) => {
                console.log("THIS IS RES ", res)
                console.log("THIS IS RES BALANCES ", res.balances)
                accountBalances = res.balances
            })

        accountBalances.forEach(element => {
            console.log("ACCOUNT BALANCE ELEMENT ASSET", element.asset);
            console.log("ELEMENT", element)
            const filteredTokenPrices = usdTokenPrices.filter(tokenPrice => tokenPrice.symbol.includes(element.asset));
            if (filteredTokenPrices.length > 0) {



                pricesAccounts.push({
                    currency: element.asset,
                    price: filteredTokenPrices[0].price,
                    balance: element.free,
                    amount: element.free,
                    locked: element.locked,
                    logoURI: "https://cryptoicons.org/api/icon/" + (element.asset).toLowerCase() + "/200",
                    platform: "binance"


                });
            }
        })

        return pricesAccounts;
    }



    const binanceData = await binanceus_request(uri_path, data, api_key, secret_key);
    console.log("binanceData", binanceData)
    console.log("END OF BINANCE ACCOUNTS /bin ROUTE")
    res.send(binanceData);


})



router.get('/cb1', async (req, res) => {

    const apiKey = process.env.COINBASE_API_KEY;
    const secret = process.env.COINBASE_API_SECRET;
    let allAccountData = [];
    let index = 0;
    //console.log("allPriceData starting: ", allPriceData)

    function sign(str, secret) {
        const hash = CryptoJS.HmacSHA256(str, secret);
        return hash.toString();
    }


    const timestamp = Math.floor(Date.now() / 1000);
    const str = timestamp + 'GET' + '/v2/accounts?limit=100&order=asc';
    const sig = await sign(str, secret);
    const myHeaders = {
        'CB-ACCESS-KEY': process.env.COINBASE_API_KEY,
        'CB-ACCESS-TIMESTAMP': timestamp,
        'CB-ACCESS-SIGN': sig,
        'CB-VERSION': "2017-10-02"
    };
    const url = 'https://api.coinbase.com/v2/accounts?limit=100&order=asc';

    const response = await fetch(url, {
        method: 'GET',
        headers: myHeaders,
    });

    let nextURI = "";

    const getRemainingData = async (accountPagination, arrPriceData, accountData) => {
        let remainingPriceData = arrPriceData;
        console.log("SECOND REQUEST")
        nextURI = accountPagination.next_uri
        const timestamp = Math.floor(Date.now() / 1000);
        const path = nextURI.replace("https://api.coinbase.com", "");
        const str = timestamp + "GET" + path;
        const sig = await sign(str, secret);
        const myHeaders = {
            'CB-ACCESS-KEY': process.env.COINBASE_API_KEY,
            'CB-ACCESS-TIMESTAMP': timestamp,
            'CB-ACCESS-SIGN': sig,
            'CB-VERSION': "2017-10-02"
        };

        const url = "https://api.coinbase.com" + path;
        console.log(`url:2 ${url}`);

        const response = await fetch(url, {
            method: 'GET',
            headers: myHeaders,
        });

        await response.json()
            .then((remData) => {
                let allAccountData = [];
                if (remData.data) {
                    remData.data.forEach(element => {
                        if (element.balance.amount.replace(/[,]/g, ".") > 0) { // IF AMOUNT IS GREATER THAN 0
                            allAccountData.push(element)
                        }

                    })
                }
                console.log("allAccountData Length 2: ", allAccountData.length);
                console.log("getRemainingData allAccountData", allAccountData)
                return allAccountData;
            })
            .catch((err) => {
                console.log(err)
            })
    };

    const responseData = await response.json()
        .then(async (res) => {
            let allPriceData = [];
            let finalPriceData = [];
            const arrAccountData = res.data;
            console.log("FIRST ELEMENT ACCOUNT DATA arrAccountData = res.data: ", arrAccountData[0])
            await Promise.all(arrAccountData.map(async (element, index) => {
                console.log("index", index)
                console.log("res.data.element.balance.amount: ", element.balance.amount);

                if (element.balance && element.balance.amount && element.balance.amount.replace(/[,]/g, ".") > 0) {
                    const price = await getPrice(element.balance.currency, arrAccountData);
                    console.log("price: ", price)
                    allPriceData.push(price);
                }
            }));

            nextURI = res.pagination.next_uri;
            if (nextURI) {
                console.log("getting remaining data...")

                const remainingData = await getRemainingData(res.pagination, allPriceData, res.data);
                allPriceData.push(remainingData);
            }


            finalPriceData = allPriceData;
            // function getLogoURI(currency, logos) {
            //   const foundItem = logos.find(item => item.symbol === currency);
            //   return foundItem ? foundItem.logoURI : null;
            // }


            const veryFinalData = finalPriceData.
                filter(data => (data != null || data != undefined)).
                map(data => ({
                    ...data,
                    logoURI: "",
                    //  logoURI:  "https://assets.coincap.io/assets/icons/" + (data.currency).toLowerCase() + "@2x.png",
                    platform: "coinbase"
                    // logoURI:  "https://cryptoicons.org/api/color/" + (data.currency).toLowerCase() + "/200.png"


                }));

            // const foundItem = logos.find(item => item.symbol === element.asset);
            //   this.logoURI = foundItem ? foundItem.logoURI : null
            console.log("veryfonaldat", veryFinalData)
            return veryFinalData;//res.data;
        })
        .catch((err) => {
            console.log("error: ", err)
        }

        );


    async function getPrice(symbol, userAccountData) {

        let returnData = [];
        let varObj;
        const url = `https://api.coinbase.com/v2/prices/${symbol}-USD/spot`;
        const response = await fetch(url, { method: 'GET' });
        const responseData = await response.json()
            .then((res) => {
                console.log("res.data.base: ", res.data.amount);

                if (res.data && res.data.amount) {
                    returnData = res.data;
                    console.log("IS THiS PRICE DATA? ", res.data)
                    varObj = new PriceData(res.data.base, res.data.amount, symbol, userAccountData);
                }
            })
            .catch((err) => {
                console.log(err)
            });
        function PriceData(base, amount, symbol, userData) {
            console.log("USERDATA  ", userData[0]);
            console.log("base - ", base, "amount - ", amount, "symbol - ", symbol)

            {
                this.price = amount;
                this.currency = symbol;
                this.balance = userData.filter(element => {
                    return element.balance.currency == symbol;
                })[0].balance.amount;
                //  this.logoURI = "https://cryptoicons.org/api/icon/" + (symbol).toLowerCase() + "/200",
                //   this.logoURI = "https://assets.coincap.io/assets/icons/" + (symbol).toLowerCase() + "@2x.png"
                this.logoURI = ""

            }
            console.log("filterdata", userData.filter(element => {
                return element.balance.currency == symbol;
            })[0].balance.amount)



        }

        return varObj
        //return returnData
    }



    res.json(responseData);
});


router.get('/balances', async (req, res) => {
    const url = "https://prod-104.westus.logic.azure.com:443/workflows/7742d927a927474e8cc453593676c751/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=qMwoCDXppV7xsAAtp0Chk0Dwva8Y_VarUTqoRCi8qXg"
    const headers = {
        'Content-Type': 'application/json',
    };

    const getData = () => axios.get(url, { headers })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('THIS IS THE Error:', error);
        });
    const binanceData = await getData();
    const serializeData = JSON.stringify(binanceData);
    res.setHeader('Content-Type', 'application/json');
    res.send(serializeData);
});




module.exports = router;
