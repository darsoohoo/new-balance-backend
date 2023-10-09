
const express = require('express');
const router = express.Router();
const { MongoClient, ServerApiVersion } = require("mongodb");








// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));





router.get('/get', async (req, res) => {
    console.log("1 START OF THEME ROUTE GET")
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
            const colors = database.collection("colors");
            const color = await colors.findOne()

            console.log("COLOR IS ",color);
            res.send(color)
        } finally {
            // Ensures that the client will close when you finish/error
          
           /// await client.close();
        }
    } 
    run().catch(console.dir);

})


router.post('/add', async (req, res) => {
    console.log("1 START OF THEME ROUTE ADD")
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

         const color = {
                value: req.body.data.value
            }

            const database = client.db("new_balance");
            const colors = database.collection("colors");
            const result = await colors.insertOne(color);

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
