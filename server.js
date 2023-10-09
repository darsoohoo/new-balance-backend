const Moralis = require('moralis').default;
const express = require('express');
const path = require('path');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const axios = require('axios');




const profile = require('./routes/api/profile');


const app = express();

const port = process.env.PORT || 8000;


// Init Middleware
// app.use(express.json({ extended: false }));
app.use(express.json());
app.use(cookieParser());


// allow access to React app domain
app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
);



// Use Routes
app.use('/api/metamask', require('./routes/api/metamask'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/theme', require('./routes/api/theme'));
app.use('/api/profile', profile);
app.use('/api/items', require('./routes/items'));
app.use('/api/defi/accounts', require('./routes/defi/accounts'));
app.use('/api/defi/nfts', require('./routes/defi/nfts'));
app.use('/api/defi/my-nfts', require('./routes/defi/my-nfts'));
app.use('/api/defi/transactions', require('./routes/defi/transactions'));
app.use('/api/defi/prices', require('./routes/defi/prices'));
app.use('/api/cefi/transactions', require('./routes/cefi/transactions'));
app.use('/api/cefi/accounts', require('./routes/cefi/accounts'));
app.use('/api/auth', require('./routes/authcoinbase'));
app.use('/auth/', require('./routes/authcoinbase'));


app.use('/oauth/callback', async (req, res) => {
    const { code } = req.query;
    const { state } = req.query;
    console.log("1. OAUTH CALLBACK STARTING")
    console.log("2. state is", state)
    // Exchange the authorization code for an access token
    const coinbaseAuthTokenURL = 'https://api.coinbase.com/oauth/token'
    const data = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        client_id: process.env.COINBASE_CLIENT_ID,
        client_secret: process.env.COINBASE_CLIENT_SECRET,
        redirect_uri: process.env.COINBASE_REDIRECT_URL
    });
    console.log("3. data is", data)

    try {
        const tokenResponse = await axios.post(coinbaseAuthTokenURL, data, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'CB-VERSION': "2017-10-02"
            },
        });
        const access_token = tokenResponse.data.access_token;
        const refresh_token = tokenResponse.data.refresh_token;
        console.log("ACESS TOKEN", access_token)
        console.log("REFRESH TOKEN", refresh_token)

        res.redirect(
            `${process.env.FRONTEND_URL}?accessToken=${encodeURIComponent(access_token)}&refreshToken=${encodeURIComponent(refresh_token)}&state=${encodeURIComponent(state)}`
        );

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred' });

    }

});



app.use('/api/oauth/coinbase/user', async (req, res) => {
    console.log("1 GETTING USER DATA - from server.js /oauth/coinbase/user")
    console.log("2 REQ HEADERS", req.headers)
    console.log("3 REQ HEADERS coinbase access token", req.headers.access_token)
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



        // Redirect the user back to the frontend landing page
        res.send(userResponse.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred' });
    }

})

app.use('/api/oauth/coinbase/logout', async (req, res) => {

    console.log("Logging user out of coinbase")
    console.log("3 REQ HEADERS access token", req.headers.access_token)
    const access_token = req.headers.access_token;
    try {

        // Process and use the accessToken as needed
        const access_token = req.headers.access_token;
        console.log("ACESS TOKEN", access_token)
        const response = await axios.post('https://api.coinbase.com/oauth/revoke', {
            headers: {
                token: access_token,
                Authorization: `Bearer ${access_token}`,
                'CB-VERSION': "2017-10-02"
            }
        });
        console.log("LOG OUT RESPONSE", response.data)



        // res.json(req.session.userData);
        // Redirect the user back to the frontend landing page
        res.send(response.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'An error occurred' });
    }

})




//REACT_APP_HOME_URL=https://crypto-tracker-fullstack.up.railway.app
app.get('/login', (req, res) => {
    req.session.username = 'user123';
    res.send('Logged in');
});

app.get('/profile', (req, res) => {
    const username = req.session.username;
    res.send(`Welcome, ${username}`);
});
const cron = require('node-cron');

cron.schedule('0 0 * * *', () => {
    store.clearExpiredSessions(() => {
        console.log('Expired sessions cleared');
    });
});




// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/dist'));
    //app.use(express.static('dist'));
    // app.use(express.static('client/build'));

    app.get('/*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}


const startServer = async () => {
    await Moralis.start({
        apiKey: process.env.MORALIS_API_KEY,
    });

    app.listen(port, () => {
        console.log(`WE LISTENIN ON PORT ${port}`);
    });
};

startServer();


// app.listen(port, () => {
//     console.log(`WE OUT HEREEEE LISTENING ON Port: ${port}`);
// });


