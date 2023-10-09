const express = require('express');
const router = express.Router();
const axios = require('axios');
const { WALLETADDRESS, CHAINIDS } = require('../../constants');

// ...and any other configuration

const blockdaemonAPIKEY = process.env.BLOCKDAEMON_API_KEY;
const quickswapSmartContract = '0x20ec0d06f447d550fc6edee42121bc8c1817b97d';
//const apikey = process.env.MORALIS_API_KEY;
 const apiKey = process.env.MORALIS_BACKUP_API_KEY;
// const apikey = process.env.MORALIS_SECOND_BACKUP_API_KEY;
// const apiKey = process.env.MORALIS_THIRD_BACKUP_API_KEY;

router.get('/', async (req, res) => {

    //const chain = 'polygon'
    const web3ApiKey = apikey;
    const headers = { accept: 'application/json', 'X-API-Key': web3ApiKey };
    const userAddress = WALLETADDRESS;
    

      let result = []
          const nativeTransactions = async () => axios.get(
              'https://deep-index.moralis.io/api/v2/' + userAddress,
              { headers }
          )  
          .then((res) => {
            result.push("nativetransactionsarray")
            //return res.data.result
            console.log("res0",res.data[0])
            res.data.result.forEach((tx) => {
                const {
                  from_address,
                  to_address,
                  value,
                  transaction_hash,
                  block_timestamp,
                  address,
                } = tx;
                const type =
                  from_address.toUpperCase() === userAddress.toUpperCase()
                    ? 'sent'
                    : 'received';
                const tokenType = 'erc20';
                result.push({
                  type,
                  from: from_address,
                  to: to_address,
                  valueEth: value,
                  hash: transaction_hash,
                  date: block_timestamp,
                  tokenType,
                  //chain,
                  tokenAddress: address,
                });
              });
            

          });
      
          const erc20Transactions= () => axios.get(
              'https://deep-index.moralis.io/api/v2/' + userAddress + '/erc20/transfers',
              { headers }
            )
            .then((res) => {
                result.push("erc20transactionsarray");
                console.log("erc20trans res.data: " ,res.data)
                res.data.result.forEach((tx) => {
                    const {
                        token_name,
                        token_symbol,
                        token_logo,
                        from_address,
                        to_address,
                        address,
                        block_hash,
                        block_number,
                        block_timestamp,
                        transaction_hash,
                        transaction_index,
                        log_index,
                        value,
                        possible_spam,
                        value_decimal
                    } = tx;
                    const type =
                      from_address.toUpperCase() === userAddress.toUpperCase()
                        ? 'sent'
                        : 'received';
                    const tokenType = 'erc20';
                    result.push({
                        type,
                        token_name,
                        token_symbol,
                        token_logo,
                        from_address,
                        to_address,
                        address,
                        block_hash,
                        block_number,
                        block_timestamp,
                        transaction_hash,
                        transaction_index,
                        log_index,
                        value,
                        possible_spam,
                        value_decimal
                    });
                  });
            
            });
    

            const invokeAll = async () => {
                await nativeTransactions();
               await erc20Transactions();
                return result;
            }

        res.send( await invokeAll())

});
    

router.get('/by-hash', async (req, res) => {

    const web3ApiKey = apikey;
    const headers = { accept: 'application/json', 'X-API-Key': web3ApiKey };
    const transaction_hash = '0x3b501ec58ccd74c796df7ad6a3ea312468224f15baeee0a6dbab46ea8fb502bd';
    let transData;
    const chain = 'polygon'
          const erc20Transactions= async () => axios.get(
            `https://deep-index.moralis.io/api/v2/transaction/${transaction_hash}?chain=${chain}`,
              { headers }
            )
            .then((res) => {
                transData = res.data;
                console.log("transData: ", transData)
              return transData;
      

            });
        res.send( await erc20Transactions())
});



router.get('/staking-deposits', async (req, res) => {

    const web3ApiKey = apikey;
    const headers = { accept: 'application/json', 'X-API-Key': web3ApiKey };
    const userAddress = WALLETADDRESS;
    let transData;
    const chain = 'polygon'
          const erc20Transactions= async () => axios.get(
            `https://deep-index.moralis.io/api/v2/${userAddress}/erc20/transfers?chain=${chain}`,
              { headers }
            )
            .then((res) => {
               // console.log("erc20trans res.data: " ,res.data.result)
                 transData = res.data.result.filter((tx) =>{
                    return tx.to_address = quickswapSmartContract && (tx.token_symbol == 'aUSDC-WETH' || tx.token_symbol == 'awMATIC-USDC');
                 } );
                console.log("transData: ", transData)
              return transData;
      

            });
        res.send( await erc20Transactions())
});

/*
router.get('/staking-withdrawals', async (req, res) => {

    const web3ApiKey = moralisApiKey;
    const headers = { accept: 'application/json', 'X-API-Key': web3ApiKey };
    const userAddress = walletAddress;
    let transData;
          const erc20Transactions= async () => axios.get(
              'https://deep-index.moralis.io/api/v2/' + userAddress + '/erc20/transfers',
              { headers }
            )
            .then((res) => {
               // console.log("erc20trans res.data: " ,res.data.result)
                 transData = res.data.result.filter((tx) =>{
                    return tx.address = '0x3Cc20A6795c4b57d9817399F68E83e71C8626580';
                 } );
                console.log("transData: ", transData)
              return transData;
      

            });
        res.send( await erc20Transactions())
});
*/

router.get('/staking-transactions', async (req, res) => {

    const web3ApiKey = apikey;
    const headers = { accept: 'application/json', 'X-API-Key': web3ApiKey};
    const userAddress = WALLETADDRESS;
    const chain = 'polygon'
    let transData;
          const erc20Transactions= async () => axios.get(
            `https://deep-index.moralis.io/api/v2/${userAddress}/erc20/transfers?chain=${chain}`,
              { headers }
            )
            .then((res) => {
               // console.log("erc20trans res.data: " ,res.data.result)
                 transData = res.data.result
                console.log("transData: ", transData)
              return transData;
      

            });
        res.send( await erc20Transactions())
});
router.get('/by-contract', async (req, res) => {

    const web3ApiKey = apikey;
    const headers = { accept: 'application/json', 'X-API-Key': web3ApiKey};
    const userAddress = WALLETADDRESS;
    const chain = 'polygon'
    let transData;
          const erc20Transactions= async () => axios.get(
            `https://deep-index.moralis.io/api/v2/erc20/0x04d521e2c414e6d898c6f2599fdd863edf49e247/transfers?chain=polygon&limit=3&disable_total=true`,
              { headers }
            )
            .then((res) => {
               // console.log("erc20trans res.data: " ,res.data.result)
                 transData = res.data.result
                console.log("transData: ", transData)
              return transData;
      

            });
        res.send( await erc20Transactions())
});

router.get('/transaction-moralis', async (req, res) => {
    console.log(0.00000000037574186 * 1e18 )
    let chain = req.path.replace('/','');
    console.log("chain: ",chain);
    const txHash = '0x74b208684cd998acd6d2cad25b401b5f8728dabd47667d7ad77dbb6ff1c0b673'
    const url = `https://deep-index.moralis.io/api/v2/transaction/${txHash}?chain=${CHAINIDS.polygon}`
    const headers = {
        'x-api-key': apikey,
        'Content-Type': 'application/json'
      };

    const getData = ()=>  axios.get(url, {headers})
      .then(response => {
        //console.log("RESPONSE: ", response.data)
        console.log("value ", response.data.value/ 1e18 )
        return response.data;
      })
      .catch(error => {
        console.error('THIS IS THE Error:', error);
      });
 
        res.send(await getData())
  });

  // SEE QUERY HERE https://ide.bitquery.io/#
  router.get('/transaction-bitquery', async (req, res) => {
    //https://graphql.bitquery.io
    let chain = req.path.replace('/','');
    console.log("chain: ",chain);
    var data = JSON.stringify({
        "query": "query ($network: EthereumNetwork!, $limit: Int!, $offset: Int!, $addresses: [String!]!) {\n  ethereum(network: $network) {\n    transfers(\n      options: {desc: \"block.height\", limit: $limit, offset: $offset}\n      amount: {gt: 0}\n      sender: {in: $addresses}\n      receiver: {in: $addresses}\n    ) {\n      block {\n        timestamp {\n          time(format: \"%Y-%m-%d %H:%M:%S\")\n        }\n        height\n      }\n      sender {\n        address\n        annotation\n      }\n      receiver {\n        address\n        annotation\n      }\n      currency {\n        address\n        symbol\n        tokenId\n        tokenType\n        name\n        decimals\n      }\n      amount\n      amount_usd: amount(in: USD)\n      transaction {\n        hash\n      }\n      external\n    }\n  }\n}\n",
        "variables": "{\n  \"limit\": 10,\n  \"offset\": 0,\n  \"network\": \"matic\",\n  \"dateFormat\": \"%Y-%m-%d\",\n  \"addresses\":[\"0xaC3283c87A6fF8512Ea3D90812854cdeeBF05117\",\"0x20ec0d06f447d550fc6edee42121bc8c1817b97d\"]\n}"
     });

     /*
    var data = JSON.stringify({
        "query": "query ($network: EthereumNetwork!, $limit: Int!, $offset: Int!, $from: ISO8601DateTime, $till: ISO8601DateTime, $addresses: [String!]!) {\n  ethereum(network: $network) {\n    transfers(\n      options: {desc: \"block.height\", limit: $limit, offset: $offset}\n      date: {since: $from, till: $till}\n      amount: {gt: 0}\n      sender: {in: $addresses}\n      receiver: {in: $addresses}\n    ) {\n      block {\n        timestamp {\n          time(format: \"%Y-%m-%d %H:%M:%S\")\n        }\n        height\n      }\n      sender {\n        address\n        annotation\n      }\n      receiver {\n        address\n        annotation\n      }\n      currency {\n        address\n        symbol\n        tokenId\n        tokenType\n        name\n        decimals\n      }\n      amount\n      amount_usd: amount(in: USD)\n      transaction {\n        hash\n      }\n      external\n    }\n  }\n}\n",
        "variables": "{\n  \"limit\": 10,\n  \"offset\": 0,\n  \"network\": \"matic\",\n  \"from\": \"2012-06-04\",\n  \"till\": \"2023-06-04T23:59:59\",\n  \"dateFormat\": \"%Y-%m-%d\",\n  \"addresses\":[\"0xaC3283c87A6fF8512Ea3D90812854cdeeBF05117\",\"0x20ec0d06f447d550fc6edee42121bc8c1817b97d\"]\n}"
     });

     */
     
     var config = {
        method: 'post',
        url: 'https://graphql.bitquery.io',
        headers: { 
           'Content-Type': 'application/json', 
           'X-API-KEY': process.env.BITQUERY_API_KEY
        },
        data : data
     };

    const getData = ()=>  axios(config)
      .then(response => {
        console.log("RESPONSE: ", response.data)

        return response.data;
      })
      .catch(error => {
        console.error('THIS IS THE Error:', error);
      });
 
        res.send(await getData())
  });
  
router.get('/historical-stake', async (req, res) => {
    const erc20Transactions = () =>{
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'X-API-Key': process.env.BLOCKDAEMON_API_KEY
        },
        body: JSON.stringify({fromTime: 1678174507000, toTime: 1678779307000, timeUnit: 'day'})
      };

      let result;
      
      axios.post('https://svc.blockdaemon.com/reporting/staking/v1/ethereum/mainnet/validator/rewards/0x8189d400a59205a44bae3c7c609061685933482f674b464e4b6cde4683cccb6232bfd40b41bb865ab3ea2b424706ff8e', options)
      .then(response => response.json())
      .then(response => console.log(response))
        .catch(err => console.error(err));

        return result;

    }
        res.send( await erc20Transactions())
});



// INTERNAL TRANSACTIONS https://deep-index.moralis.io/api-docs-2.1/#/
router.get('/my-transactions-moralis', async (req, res) => {
  const url = `https://deep-index.moralis.io/api/v2/${WALLETADDRESS}/verbose`
  const headers = {
      'x-api-key': process.env.MORALIS_API_KEY,
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

  module.exports = router;