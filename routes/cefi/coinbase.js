const crypto = require('crypto');
const axios = require('axios');
const express = require('express');
const router = express.Router();
const CryptoJS = require('crypto-js');
const fetch = require('node-fetch');



router.get('/user', async (req, res) => {
    const coinbaseAuthURL = 'https://api.coinbase.com/oauth/token';

    try {
       
    
        // Process and use the accessToken as needed
        const access_token = req.headers.access_token;
        console.log("ACESS TOKEN", access_token)
        const userResponse = await axios.get('https://api.coinbase.com/v2/user/', {
          headers: {
            Authorization: `Bearer ${access_token}`,
            'CB-VERSION': "2017-10-02"
          }
        });
        console.log("USER RESPONSE", userResponse.data)
        console.log("access token", access_token)
    
        req.session.userData = userResponse.data;
        // res.json(req.session.userData);
        // Redirect the user back to the frontend landing page
        res.send(userResponse.data);
      } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred' });
      }

})



router.get('/user1', async (req, res) => {


    try {
        const tokenResponse = await axios.post(coinbaseAuthURL, data, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'CB-VERSION': "2017-10-02"
          },
        });
    
        // Process and use the accessToken as needed
        const access_token = tokenResponse.data.access_token;
        console.log("ACESS TOKEN", access_token)
        const userResponse = await axios.get('https://api.coinbase.com/v2/user/', {
          headers: {
            Authorization: `Bearer ${access_token}`,
            'CB-VERSION': "2017-10-02"
          }
        });
        console.log("USER RESPONSE", userResponse.data)
        console.log("access token", access_token)
    
        req.session.userData = userResponse.data;
        // res.json(req.session.userData);
        // Redirect the user back to the frontend landing page
        res.redirect(`https://crypto-tracker-fullstack.up.railway.app?userData=${JSON.stringify(userResponse.data)}`);
      } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred' });
      }

})



module.exports = router;

