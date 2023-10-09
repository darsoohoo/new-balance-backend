const express = require('express');
const router = express.Router();
const axios = require('axios');

const { NETWORKDATA, tokenbalancetestdata } = require('../../constants');


const apiKey = process.env.MORALIS_API_KEY;

router.get('/ens', async (req, res) => {
    console.log("------START OF DEFI ACCOUNTS GET ENS /defi ROUTE------")
    console.log("1 REQ QUERY walletAddress", req.query.walletAddress)


    const web3ApiKey = apiKey;
    const headers = { accept: 'application/json', 'X-API-Key': web3ApiKey };
    const address = req.query.walletAddress ? req.query.walletAddress : '';
    console.log("2. address ", address)
    let ens;

    try {
        console.log("2.1: About to make API request");

        const response = await axios.get(`https://deep-index.moralis.io/api/v2/resolve/${address}/reverse` , { headers });
        console.log("2.3: made request");

        const ensResponse =  await response.data;
        console.log("3. ens: ", ensResponse)
        ens = ensResponse;
        console.log("4. GOING TO SEND ens: ", ens)
        res.send(ensResponse)
    } catch (error) {
        console.log("3.5 there is an error", error)
        res.send(error)
    }

   
  

});


router.get('/tokenbalances/crosschain', async (req, res) => {
    console.log("------START OF DEFI ACCOUNTS GET BALANCES /defi ROUTE------")
    console.log("1 REQ QUERY walletAddress", req.query.walletAddress)
    const test = !true;

    if (test) {

        res.send(
            tokenbalancetestdata)

    } else {


        //------ 1 GET TOKEN BALANCES FOR ALL NETWORKS------//
        const web3ApiKey = apiKey;
        const headers = { accept: 'application/json', 'X-API-Key': web3ApiKey };
        const networkData = NETWORKDATA;
        const address = req.query.walletAddress ? req.query.walletAddress : WALLETADDRESS;

        let result = [];

        for (const network of networkData) {
            try {
                console.log("NETOWRK!!! ", network)
                const tokenBalanceResponse = await axios.get('https://deep-index.moralis.io/api/v2/' + address + '/erc20?chain=' + network.id, { headers });

                tokenBalanceData = tokenBalanceResponse.data;
                console.log("tokenBalanceData: ", tokenBalanceData)
                result.push({
                    tokenBalanceData,
                    'NetworkName': network.name,
                    'TokenName': tokenBalanceData.name,
                    'TokenDecimals': tokenBalanceData.decimals,
                    'TokenSymbol': tokenBalanceData.symbol,
                    'Platform': network.name,
                    'ChainId': network.id,
                    'ChainName': network.name
                });

            } catch (error) {
                console.error('Error thoug!:', error);
            }
        }

        console.log("WALLET ADDRESS", address)
        console.log("apikey", web3ApiKey)
        console.log("RESULT", result)
        const transformedArray = result.flatMap(item =>
            item.tokenBalanceData.map(data => ({
                ...data,
                NetworkName: item.NetworkName,
                TokenName: data.name,
                TokenDecimals: data.decimals,
                // WalletBalanceOld: (data.balance / 1e18),
                WalletBalance: (data.balance / Number('1e' + data.decimals)),
                Balance: data.balance,
                TokenSymbol: data.symbol,
                Platform: item.name,
                'ChainId': item.ChainId,
                'ChainName': item.ChainName,
            }))
        );



        //--------- 2 GET TOKENS FROM ACCOUNT  -----------//
        // list of token addresses to query
        const tokens = transformedArray.map(item => {
            return { "token_address": item.token_address }
        }) // MAKE SURE TO CHANGE THIS LATER!!!!

        //----------------- 3 GET TOKEN PRICES ----------------//
        console.log("tokens length", tokens.length)
        const transformedDataForNetworks = [];
        const mergedTokenPriceData = [];
        const tokenPriceData = [];

        try {



            // Iterate through each chain
            // for (const network of networkData.slice(0, 1)) {
                for (const network of networkData) {
                console.log("NETOWRK!!! ", network);

                // Filter tokens for the current network
                const tokensForNetwork = transformedArray.filter(item => item.ChainId === network.id);

                // Divide tokens into batches of 1-25 tokens for the current network
                for (let i = 0; i < tokensForNetwork.length; i += 25) {
                    const tokenBatch = tokensForNetwork.slice(i, i + 25);
                    const tokens = tokenBatch.map(item => {
                        return { "token_address": item.token_address, "ChainId": network.id };
                    });

                    const config = {
                        method: 'post',
                        url: `https://deep-index.moralis.io/api/v2/erc20/prices?chain=${network.id}&include=percent_change`,
                        headers: {
                            accept: 'application/json',
                            'X-API-Key': web3ApiKey
                        },
                        data: {
                            tokens: tokens
                        }
                    };

                    const tokenPricesResponse = await axios(config);
                    const tokenPrices = tokenPricesResponse.data;



                    // Push transformed data for the current network
                    transformedDataForNetworks.push(...tokensForNetwork);
                    tokenPriceData.push(...tokenPrices);


                    // Merge token price data and transformed data for the current network
                    const mergedDataForNetwork = tokensForNetwork.map(token => {
                        const matchingPriceData = tokenPrices.filter(item => item).find(price => price.tokenAddress.toLowerCase() === token.token_address.toLowerCase());
                        return {
                            ...token,
                            priceData: matchingPriceData ? {
                                ...matchingPriceData,
                                nativePrice: matchingPriceData.nativePrice.value,
                                usdPriceFormatted: matchingPriceData.usdPriceFormatted
                            } : null
                        };
                    });

                    mergedTokenPriceData.push(...mergedDataForNetwork);
                }

                // Merge token price data and transformed data for all networks

            }
            // console.log("transformedDataForNetworks", transformedDataForNetworks)
        } catch (error) {
            console.log("error", error);
        }

        // Continue with your existing code
        let transformedArrayWithPrices = mergedTokenPriceData.map(item => {
            return {
                ...item,
                TokenPrice: item.priceData ? item.priceData.usdPrice : null,
                NativePrice: item.priceData ? item.priceData.nativePrice : null,
                ExchangeName: item.priceData ? item.priceData.exchangeName : null,
                ExchangeAddress: item.priceData ? item.priceData.exchangeAddress : null,
                '24hrPercentChange': item.priceData ? item.priceData['24hrPercentChange'] : null,
                PossibleSpam: item.possible_spam
            }
        })

console.log("transformedArrayWithPrices", transformedArrayWithPrices)

        // if (transformedArrayWithPrices.length === 0) {
        //     transformedArrayWithPrices = tokenbalancearraymoralis.map((item) => {
        //         return {
        //             ...item,
        //             PossibleSpam: item.possible_spam,
        //         }
        //     })
        // }


        res.send( transformedArrayWithPrices)


    }



}
);




router.get('/wallets/balances', async (req, res) => {

    const url = `https://deep-index.moralis.io/api/v2/wallets/balances?chain=polygon&wallet_addresses=${WALLETADDRESS}`
    const headers = {
        'x-api-key': apiKey,
        'Content-Type': 'application/json'
    };

    const getData = () => axios.get(url, { headers })
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.error('THIS IS THE Error:', error);
        });

    res.json(await getData())

});


router.get('/nativebalances/crosschain', async (req, res) => {
    try {
        const web3ApiKey = apiKey;
        const headers = { accept: 'application/json', 'X-API-Key': web3ApiKey };
        const networkData = NETWORKDATA;
        const address = req.query.walletAddress ? req.query.walletAddress : WALLETADDRESS;

        async function invokeAll() {
            let tokenPriceData;
            let result = [];

            for (const network of networkData) {
                try {
                    const balanceResponse = await axios.get('https://deep-index.moralis.io/api/v2/' + address + '/balance?chain=' + network.id, { headers });
                    const balanceData = balanceResponse.data;


                    const tokenPriceResponse = await axios.get('https://deep-index.moralis.io/api/v2/erc20/' + network.wrappedTokenAddress + '/price?chain=' + network.id, { headers });
                    tokenPriceData = tokenPriceResponse.data;
                    console.log("tokenPriceData: ", tokenPriceData)
                    const tokenBalanceData = {
                        'NetworkName': network.name,
                        'TokenName': tokenPriceData.TokenName,
                        'TokenDecimals': tokenPriceData.nativePrice.decimals,
                        'WalletBalance': (balanceData.balance / 1e18),
                        'TokenPrice': tokenPriceData.usdPrice,
                        'TokenSymbol': tokenPriceData.nativePrice.symbol,
                        'USDValue': ((balanceData.balance / 1e18) * tokenPriceData.usdPrice),
                        'exchangeName': tokenPriceData.nativePrice.exchangeName,
                        'exchangeAddress': tokenPriceData.nativePrice.exchangeAddress,
                        // 'tokenLogo': tokenPriceData.tokenLogo
                        'tokenLogo': ''
                    };

                    result.push(tokenBalanceData);
                } catch (error) {
                    console.error('Error:', error);
                }
            }
            console.log(result)
            return result;
        }

        res.send(await invokeAll())
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error occurred.' });
    }


});




router.get('/tokenbalances/crosschain-test', async (req, res) => {




    const transformedArrayWithPricesAgain = transformedArrayWithPrices.map((item) => {
        return {
            ...item,
            PossibleSpam: item.possible_spam,
        }
    })

    res.send({
        transformedArrayWithPrices

    })



}
);




router.get('/test', async (req, res) => {


    const web3ApiKey = apiKey;
    const headers = { accept: 'application/json', 'X-API-Key': web3ApiKey };
    const networkData = NETWORKDATA;
    const address = req.query.walletAddress;




    let tokenPriceData;
    let result = [];


    try {


        const tokenBalanceResponse = await axios.get('https://deep-index.moralis.io/api/v2/' + address + '/erc20?chain=' + "polygon", { headers });
        tokenBalanceData = tokenBalanceResponse.data;
        console.log("tokenBalanceData: ", tokenBalanceData)
        const tokenBalanceData = {
            'NetworkName': network.name,
            'TokenName': tokenPriceData.TokenName,
            'TokenDecimals': tokenPriceData.nativePrice.decimals,
            'WalletBalance': (balanceData.balance / 1e18),
            'TokenPrice': tokenPriceData.usdPrice,
            'TokenSymbol': tokenPriceData.nativePrice.symbol,
            'USDValue': ((balanceData.balance / 1e18) * tokenPriceData.usdPrice),
            'exchangeName': tokenPriceData.nativePrice.exchangeName,
            'exchangeAddress': tokenPriceData.nativePrice.exchangeAddress,
            'tokenLogo': tokenPriceData.tokenLogo,
            'platform': network.name
        };

        result.push(tokenBalanceData);
    } catch (error) {
        console.error('Error thoug!:', error);
    }


    res.send(result)



}
);

module.exports = router;

