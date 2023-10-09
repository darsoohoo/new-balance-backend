const express = require('express');
const router = express.Router();
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
const axios = require('axios');
const { NETWORKDATA, WALLETADDRESS, testNFTData } = require('../../constants');
const {  NFTLOWESTPRICEDATA } = require('../../mockData');
// ...and any other configuration
const apiKey = process.env.MORALIS_API_KEY;




//Get the lowest executed price for an NFT contract for the last x days (only trades paid in ETH).
router.get('/lowestprice', async (req, res) => {
  console.log("1 GETTING NFTS...serverside");

  const web3ApiKey = apiKey;
  const headers = { accept: 'application/json', 'X-API-Key': web3ApiKey };
  const networkData = NETWORKDATA;
  const address = req.query.walletAddress ? req.query.walletAddress : WALLETADDRESS;
  console.log("3 networkData", networkData);

  let groupedNFTs = [];
  const test = !true;
let NFTs = [];
  if (test) {
    console.log("2 SENDING BACK TEST DATA")
    res.send(NFTLOWESTPRICEDATA)
  } else {
    console.log("3 GETTING NFTS...serverside");

      for (const network of networkData) {
          try {

          console.log("4. TRYING for current NETWORK - ", network);
            const nftData = await axios.get(`https://deep-index.moralis.io/api/v2/${address}/nft?chain=${network.id}&format=decimal&disable_total=true&exclude_spam=true&normalizeMetadata=false&media_items=true`, { headers })
            .then(response => {
              console.log("4.1 RESPONSE DATA for - ", network.name, response.data)
              console.log("4.2 TYPE OF RESPONSE DATA", typeof response.data)
              const data = response.data.result;
              console.log("4.3 type of data", typeof data)
              console.log("4.4 data.length", data.length)
              if(data.length > 0){
                data.forEach(nft => {
                if(nft.possible_spam === false) {
                  NFTs.push({
                    ...nft,
                    network: network.name,
                    networkId: network.id,
                    mediaUrl: nft.media && nft.media.media_collection && nft.media.media_collection.high && nft.media.media_collection.high.url ? nft.media.media_collection.high.url : undefined,
                  })
                }
        
                  
                })
              }
            })

          } catch (error) {
            console.error('1 THIS IS THE Error:', error, "from network", network);
          }
     } 

  }


  res.send(NFTs);
});
 











//Get the lowest executed price for an NFT contract for the last x days (only trades paid in ETH).
router.get('/lowestprice_old', async (req, res) => {
  console.log("1 GETTING NFTS...serverside");
  const test = !true;

  if (test) {
    console.log("2 SENDING BACK TEST DATA")
      res.send(NFTLOWESTPRICEDATA)
  } else {

  try {
    let allNFTs = [];

    console.log("3 GETTING NFTS...serverside");
    const web3ApiKey = apiKey;
    const headers = { accept: 'application/json', 'X-API-Key': web3ApiKey };
    const networkData = NETWORKDATA;
    const address = req.query.walletAddress ? req.query.walletAddress : WALLETADDRESS;
    console.log("3 networkData", networkData);

    for (const network of networkData) {
      console.log("current NETWORK", network);
  
      const nftData = await  axios.get(`https://deep-index.moralis.io/api/v2/${address}/nft?chain=${network.id}&format=decimal&disable_total=true&exclude_spam=false&normalizeMetadata=false&media_items=false`, { headers })
        .then(response => {
          console.log("RESPONSE DATA for - ", network.name, response.data)
          console.log("TYPE OF RESPONSE DATA", typeof response.data)
   
          return response.data.result;
        })
        .catch(error => {
          console.error('1 THIS IS THE Error:', error);
        });

      if (nftData.length > 0) {
        const nftsWithPrices = await Promise.all(nftData.filter(nft => nft.possible_spam === false).map(async nft => {
          const priceData = {
            ...nft,
            network: network.name,
            networkId: network.id,
            price: await axios.get(`https://deep-index.moralis.io/api/v2/nft/${nft.token_address}/lowestprice?chain=${network.id}&marketplace=opensea`, { headers })
              .then(response => {
                console.log("-----RESPONSE PRICE DATA", response.data)
                return response.data ? {
                      // WalletBalanceOld: (data.balance / 1e18),
                      ...response.data,
                      amount: response.data.price,
                } : "No price data available";
              })
              .catch(error => {
                console.error('2 THIS IS THE PRICE DATA Error:', error);
          
              })
          };
          return priceData;
        }));
        console.log("NFTS WITH PRICES from ", network.name, nftsWithPrices)
        
        allNFTs.push(...nftsWithPrices);
      }
    }



    res.send(allNFTs);

  } catch (error) {
    console.error('2 THIS IS THE Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }}
});


 //Get trades of NFTs for a given contract and marketplace.
 router.get('/marketprice?', async (req, res) => {
  console.log("1 GETTING NFTS marketprice...serverside");
  try {
    let allNFTs = [];

    console.log("2 GETTING NFTS...serverside");
    const web3ApiKey = apiKey;
    const headers = { accept: 'application/json', 'X-API-Key': web3ApiKey };
    const networkData = NETWORKDATA.slice(0, 1);
    const address = req.query.walletAddress ? req.query.walletAddress : WALLETADDRESS;
    console.log("3 networkData", networkData);

    for (const network of networkData) {
      console.log("current NETWORK", network);

      const nftData = await axios.get(`https://deep-index.moralis.io/api/v2/${address}/nft?chain=${network.id}&format=decimal&disable_total=true&exclude_spam=false&normalizeMetadata=false&media_items=false`, { headers })
        .then(response => {
          console.log("RESPONSE DATA for - ", network.name, response.data)
          console.log("TYPE OF RESPONSE DATA", typeof response.data)
   
          return response.data.result;
        })
        .catch(error => {
          console.error('1 THIS IS THE Error:', error);
        });

      if (nftData.length > 0) {
        const nftsWithPrices = await Promise.all(nftData.filter(nft => nft.possible_spam === false).map(async nft => {
          const priceData = {
            ...nft,
            network: network.name,
            networkId: network.id,
            price: await axios.get(`https://deep-index.moralis.io/api/v2/nft/${nft.token_address}/trades?chain=${network.id}&marketplace=opensea`, { headers })
              .then(response => {
                console.log("-----RESPONSE PRICE DATA", response.data)
                return response.data ? {
                      // WalletBalanceOld: (data.balance / 1e18),
                      ...response.data,
                      amount: response.data ? response.data.map(trade => Number(trade.price)).reduce((a, b) => a + b, 0) / response.data.length : null,
                } : "No price data available";
              })
              .catch(error => {
                console.error('2 THIS IS THE PRICE DATA Error:', error);
          
              })
          };
          return priceData;
        }));
        console.log("NFTS WITH PRICES from ", network.name, nftsWithPrices)
        
        allNFTs.push(nftsWithPrices);
      }
    }



    res.send(...allNFTs);

  } catch (error) {
    console.error('2 THIS IS THE Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


module.exports = router;

        // amount
        // block_number
        // block_number_minted
        // contract_type
        // last_metadata_sync
        // last_token_uri_sync
        // metadata
        // minter_address
        // name
        // owner_of
        // possible_spam
        // symbol
        // token_address
        // token_hash
        // token_id
        // token_uri
        // verified_collection