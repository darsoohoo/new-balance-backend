
const express = require('express');
const router = express.Router();
const { MongoClient, ServerApiVersion } = require("mongodb");








// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));





router.get('/find', async (req, res) => {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
        useUnifiedTopology: true
    }
    );

    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    async function run() {
        try {
            console.log("req.body", req.body)
            const database = client.db("new_balance");
            const users = database.collection("users");
            const user = await users.findOne({
                name: req.body.name,
                email: req.body.email,
                coinbase_id: req.body.coinbase_id,
                metamask_address: req.body.metamask_address,
                coinbase_wallet_address: req.body.coinbase_wallet_address,
            });

            console.log(user);
            res.send(user)
        } finally {
            // Ensures that the client will close when you finish/error
          
            await client.close();
        }
    } 
    run().catch(console.dir);

})
router.post('/create', async (req, res) => {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
        useUnifiedTopology: true
    }
    );
    console.log("req.body", req.body)


    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    async function run() {
        try {

         const user = new User({
                name: req.body.data.name,
                email: req.body.data.email,
                coinbase_id: req.body.data.coinbase_id,
                metamask_address: req.body.data.metamask_address,
                coinbase_wallet_address: req.body.data.coinbase_wallet_address,
            });

            const database = client.db("new_balance");
            const users = database.collection("users");
            const result = await users.insertOne(user);

            console.log(
                `A document was inserted with the _id: ${result.insertedId}`,
            );
            res.send(result)
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    }
    run().catch(console.dir);

})



router.get('/get/multiple', async (req, res) => {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
        useUnifiedTopology: true
    }
    );


    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    async function run() {
        try {
console.log("req", req)
          
            const database = client.db("new_balance");
            const users = database.collection("users");
            const result = await users.find({
                metamask_address: req.body.data.metamask_address,
            })
            
            
            console.log(`the result: ${result}`,  );
            res.send(result)
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }
    }
    run().catch(console.dir);

})

// @route   GET api/users/register
// @desc    Register user
// @access  Public


// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public


// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
    '/current',

);

module.exports = router;
