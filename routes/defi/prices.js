const express = require('express');
const router = express.Router();
const axios = require('axios');



//const apikey = process.env.MORALIS_API_KEY;
 const apiKey = process.env.MORALIS_BACKUP_API_KEY;
// const apikey = process.env.MORALIS_SECOND_BACKUP_API_KEY;
// const apiKey = process.env.MORALIS_THIRD_BACKUP_API_KEY;

  router.get('/ETH', async (req, res) => {
    const tokenAddress =  '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
    const chain = 'eth'
    const url = `https://deep-index.moralis.io/api/v2/erc20/${tokenAddress}/price?chain=${chain}`
    const headers = {
        'x-api-key': apikey,
        'Content-Type': 'application/json'
       
      };
     
    const getData = ()=>  axios.get(url, {headers})
      .then(response => {
        console.log("THIS IS RESPONSE DATA")
        return response.data;
      })
      .catch(error => {
        console.error('THIS IS THE Error:', error);
      });
 
        res.json(await getData())
  });

  router.get('/MATIC', async (req, res) => {
    const tokenAddress =  '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270';
    const chain = 'polygon'
    const url = `https://deep-index.moralis.io/api/v2/erc20/${tokenAddress}/price?chain=${chain}`
    const headers = {
        'x-api-key': apikey,
        'Content-Type': 'application/json'
       
      };
     
    const getData = ()=>  axios.get(url, {headers})
      .then(response => {
        console.log("THIS IS RESPONSE DATA")
        return response.data;
      })
      .catch(error => {
        console.error('THIS IS THE Error:', error);
      });
 
        res.json(await getData())
  });


  

  module.exports = router;