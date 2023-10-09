const express = require('express');
const router = express.Router();
const axios = require('axios');
const {  WALLETADDRESS } = require('../../constants');
// ...and any other configuration
  
//const apiKey = process.env.MORALIS_API_KEY;
 const apiKey = process.env.MORALIS_BACKUP_API_KEY;
// const apiKey = process.env.MORALIS_SECOND_BACKUP_API_KEY;
// const apiKey = process.env.MORALIS_THIRD_BACKUP_API_KEY;
  router.get('/', async (req, res) => {

    const headers = {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      };
    const url = `https://deep-index.moralis.io/api/v2/${WALLETADDRESS}/nft`;
    const getData = ()=>  axios.get(url, {headers})
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error('THIS IS THE Error:', error);
      });
 
        res.send(await getData())
  });

  module.exports = router;