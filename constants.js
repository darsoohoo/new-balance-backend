module.exports   = {
    WALLETADDRESS : "0xaC3283c87A6fF8512Ea3D90812854cdeeBF05117".toLocaleLowerCase(),
    ADDRESSES : {
        
        QS_LP_ETH_QUICK_POOL: '0xf86d6151d03007b1906465b63e36d6f48136bc39', 
        QS_LP_WMATIC_USDC_POOL: '0x04d521e2c414e6d898c6f2599fdd863edf49e247', 
        QS_LP_USDC_ETH_POOL: '0x3cc20a6795c4b57d9817399f68e83e71c8626580', 
        // amount going INTO to this address is amount per token going into the lp the pool

        // amount GOING OUT to this address is amount going into the lp the pool

        WETH_POOL: '0x5928f9f61902b139e1c40cBa59077516734ff09f',
        WUSDT_POOL: '0x5928f9f61902b139e1c40cBa59077516734ff09f',
        WQUICK_POOL: '0xf86d6151d03007b1906465b63e36d6f48136bc39',
        BINANCEMATIC : '0x0bcf2550538a47dc7232388d05af1c503d382a85',
        WMATIC : '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
        WETH : '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
        WQUICK : '0xB5C064F955D8e7F38fE0460C556a72987494eE17',
        WUSDC : '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
        WUSDT : '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
        WBOB : '0xB0B195aEFA3650A6908f15CdaC7D92F8a5791B0B',
        WDAI : '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
        WGNS : '0xE5417Af564e4bFDA1c483642db72007871397896',
        SAND : '0xbbba073c31bf03b8acf7c28ef0738decf3695683',
    
        WMATIC_WUSDC : '0xae81fac689a1b4b1e06e7ef4a2ab4cd8ac0a087d', // quickswap 
        WMATIC_WETH : '0x479e1b71a702a595e19b6d5932cd5c863ab57ee0', // quickswap
        WMATIC_SAND : '0x369582d2010b6ed950b571f4101e3bb9b554876f',
        //WETH_WUSDT : '0xf6422b997c7f54d1c6a6e103bcb1499eea0a7046',
        WETH_WUSDT :'0x5928f9f61902b139e1c40cBa59077516734ff09f',
        WETH_WQUICK : '0x60e70705b52a4a5bdc1d8614426ba5016a68ab38',
    
        WMATIC_WUSDC_CMC : '0xae81fac689a1b4b1e06e7ef4a2ab4cd8ac0a087d',
        WMATIC_WETH_CMC :'0x479e1b71a702a595e19b6d5932cd5c863ab57ee0',
    
        ETH : '0x0000000000000000000000000000000000000000',
        UNI : '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
        LINK: '0x514910771af9ca656af840dff83e8264ecf986ca'
        
    },

    NETWORKDATA : [{"name":"Ethereum","id":"0x1","wrappedTokenAddress":"0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"},{"name":"Polygon","id":"0x89","wrappedTokenAddress":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270"},{"name":"Binance","id":"0x38","wrappedTokenAddress":"0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"},{"name":"Avalanche","id":"0xa86a","wrappedTokenAddress":"0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7"},{"name":"Fantom","id":"0xfa","wrappedTokenAddress":"0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83"},{"name":"Cronos","id":"0x19","wrappedTokenAddress":"0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23"}],

    CONTRACTADDRESS  : {
        qs_masterchef : '0x20ec0d06f447d550fc6edee42121bc8c1817b97d'
    },



    APIS : {
        quickswap_subgraph: 'https://api.thegraph.com/subgraphs/name/sameepsi/quickswap06', //https://thegraph.com/hosted-service/subgraph/sameepsi/quickswap06
        uniswapv2_subgraph: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2', //https://thegraph.com/hosted-service/subgraph/uniswap/uniswap-v2
        uniswapv3_subgraph: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3', //https://thegraph.com/hosted-service/subgraph/uniswap/uniswap-v3
        polygon_subgraph: 'https://gateway.thegraph.com/api/67aa4f3c1826ecfcc76ddae34c3f980a/subgraphs/id/FDrqtqbp8LhG1hSnwtWB2hE6C97FWA54irrozjb2TtMH', //https://thegraph.com/explorer/subgraphs/FDrqtqbp8LhG1hSnwtWB2hE6C97FWA54irrozjb2TtMH?view=Playground&chain=mainnet
        bitquery: 'https://ide.bitquery.io/query/UDC1HjZQCW4myb1f',
        moralis: 'https://deep-index.moralis.io/api/v2',

    },

    CHAINIDS : {
            eth : '0x1',
            polygon : '0x89',
            bsc : '0x38',
            avax : '0xa86a',
            ftm:'0xfa',
            cronos : '0x19',
            moonbeam : '0x504',
            moonriver : '0x505',
            arbitrum : '0xa4b1',
            optimism : '0xa'
    },

    testUserData: {

        data: {
        
        id: 'e6595426-dc56-520b-b6cc-70960cd5b26b',
        
        name: 'Darren SooHoo',
        
        username: null,
        
        profile_location: null,
        
        profile_bio: null,
        
        profile_url: null,
        
        avatar_url: 'https://res.cloudinary.com/coinbase/image/upload/c_fill,h_128,w_128/q2fj0ajx76u7e1aobotu.png',
        
        resource: 'user',
        
        resource_path: '/v2/users/e6595426-dc56-520b-b6cc-70960cd5b26b'
        
        }
        
        },

 tokenbalancetestdata : [
    {
        "item": {
            "token_address": "0x1c9922314ed1415c95b9fd453c3818fd41867d0b",
            "symbol": "TEST",
            "name": "TEST",
            "logo": "https://cdn.moralis.io/eth/0x1c9922314ed1415c95b9fd453c3818fd41867d0b.png",
            "thumbnail": "https://cdn.moralis.io/eth/0x1c9922314ed1415c95b9fd453c3818fd41867d0b_thumb.png",
            "decimals": 18,
            "balance": "100000000000000000000",
            "possible_spam": false,
            "NetworkName": "Ethereum",
            "TokenName": "THISISTESTDATA",
            "TokenDecimals": 18,
            "WalletBalance": 100,
            "Balance": "100000000000000000000",
            "TokenSymbol": "TOWER",
            "ChainId": "0x1",
            "ChainName": "Ethereum",
            "priceData": {
                "tokenName": "TOWER",
                "tokenSymbol": "TOWER",
                "tokenLogo": "https://cdn.moralis.io/eth/0x1c9922314ed1415c95b9fd453c3818fd41867d0b.png",
                "tokenDecimals": "18",
                "nativePrice": "1818795533044",
                "usdPrice": 0.0029731202346567898,
                "usdPriceFormatted": "0.0029731202346567898",
                "24hrPercentChange": "1.165934986204445",
                "exchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
                "exchangeName": "Uniswap v3",
                "tokenAddress": "0x1c9922314ed1415c95b9fd453c3818fd41867d0b"
            },
            "TokenPrice": 0.0029731202346567898,
            "NativePrice": "1818795533044",
            "ExchangeName": "Uniswap v3",
            "ExchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
            "24hrPercentChange": "1.165934986204445",
            "PossibleSpam": false
        },
        "USDValue": 0.297312023465679,
        "TokenPrice": 0.0029731202346567898,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "TOWER",
        "TokenName": "TOWER",
        "TokenAddress": "0x1c9922314ed1415c95b9fd453c3818fd41867d0b",
        "WalletBalance": 100,
        "NetworkName": "Ethereum",
        "ExchangeName": "Uniswap v3",
        "ExchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
        "24hrPercentChange": "1.165934986204445",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": false
    },
    {
        "item": {
            "token_address": "0x1c9922314ed1415c95b9fd453c3818fd41867d0b",
            "symbol": "TOWER",
            "name": "TOWER",
            "logo": "https://cdn.moralis.io/eth/0x1c9922314ed1415c95b9fd453c3818fd41867d0b.png",
            "thumbnail": "https://cdn.moralis.io/eth/0x1c9922314ed1415c95b9fd453c3818fd41867d0b_thumb.png",
            "decimals": 18,
            "balance": "100000000000000000000",
            "possible_spam": false,
            "NetworkName": "Ethereum",
            "TokenName": "TOWER",
            "TokenDecimals": 18,
            "WalletBalance": 100,
            "Balance": "100000000000000000000",
            "TokenSymbol": "TOWER",
            "ChainId": "0x1",
            "ChainName": "Ethereum",
            "priceData": {
                "tokenName": "TOWER",
                "tokenSymbol": "TOWER",
                "tokenLogo": "https://cdn.moralis.io/eth/0x1c9922314ed1415c95b9fd453c3818fd41867d0b.png",
                "tokenDecimals": "18",
                "nativePrice": "1818795533044",
                "usdPrice": 0.0029731202346567898,
                "usdPriceFormatted": "0.0029731202346567898",
                "24hrPercentChange": "1.165934986204445",
                "exchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
                "exchangeName": "Uniswap v3",
                "tokenAddress": "0x1c9922314ed1415c95b9fd453c3818fd41867d0b"
            },
            "TokenPrice": 0.0029731202346567898,
            "NativePrice": "1818795533044",
            "ExchangeName": "Uniswap v3",
            "ExchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
            "24hrPercentChange": "1.165934986204445",
            "PossibleSpam": false
        },
        "USDValue": 0.297312023465679,
        "TokenPrice": 0.0029731202346567898,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "TOWER",
        "TokenName": "TOWER",
        "TokenAddress": "0x1c9922314ed1415c95b9fd453c3818fd41867d0b",
        "WalletBalance": 100,
        "NetworkName": "Ethereum",
        "ExchangeName": "Uniswap v3",
        "ExchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
        "24hrPercentChange": "1.165934986204445",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": false
    },
    {
        "item": {
            "token_address": "0x7e8906786d72e13a770dd65b50166f6300215525",
            "symbol": "VL",
            "name": "VLaunch",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "407776248043780298710432",
            "possible_spam": true,
            "NetworkName": "Binance",
            "TokenName": "VLaunch",
            "TokenDecimals": 18,
            "WalletBalance": 407776.2480437803,
            "Balance": "407776248043780298710432",
            "TokenSymbol": "VL",
            "ChainId": "0x38",
            "ChainName": "Binance",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "VL",
        "TokenName": "VLaunch",
        "TokenAddress": "0x7e8906786d72e13a770dd65b50166f6300215525",
        "WalletBalance": 407776.2480437803,
        "NetworkName": "Binance",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
  
    {
        "item": {
            "token_address": "0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab",
            "symbol": "WETH.e",
            "name": "Wrapped Ether",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "42502128789577",
            "possible_spam": false,
            "NetworkName": "Avalanche",
            "TokenName": "Wrapped Ether",
            "TokenDecimals": 18,
            "WalletBalance": 0.000042502128789577,
            "Balance": "42502128789577",
            "TokenSymbol": "WETH.e",
            "ChainId": "0xa86a",
            "ChainName": "Avalanche",
            "priceData": {
                "tokenName": "Wrapped Ether",
                "tokenSymbol": "WETH.e",
                "tokenLogo": null,
                "tokenDecimals": "18",
                "nativePrice": "164374637483431900000",
                "usdPrice": 1633.546994867096,
                "usdPriceFormatted": "1633.546994867096",
                "24hrPercentChange": "0.8565760666623016",
                "exchangeAddress": "0x9ad6c38be94206ca50bb0d90783181662f0cfa10",
                "exchangeName": "TraderJoe",
                "tokenAddress": "0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab"
            },
            "TokenPrice": 1633.546994867096,
            "NativePrice": "164374637483431900000",
            "ExchangeName": "TraderJoe",
            "ExchangeAddress": "0x9ad6c38be94206ca50bb0d90783181662f0cfa10",
            "24hrPercentChange": "0.8565760666623016",
            "PossibleSpam": false
        },
        "USDValue": 0.06942922475966778,
        "TokenPrice": 1633.546994867096,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "WETH.e",
        "TokenName": "Wrapped Ether",
        "TokenAddress": "0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab",
        "WalletBalance": 0.000042502128789577,
        "NetworkName": "Avalanche",
        "ExchangeName": "TraderJoe",
        "ExchangeAddress": "0x9ad6c38be94206ca50bb0d90783181662f0cfa10",
        "24hrPercentChange": "0.8565760666623016",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": false
    },
    {
        "item": {
            "token_address": "0xed8c2af5c9f7a0fa5aaa0d8f8e78ddca28eef3d6",
            "symbol": "YRT",
            "name": "Yield Yak: JLP JOE-AVAX",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "1",
            "possible_spam": true,
            "NetworkName": "Avalanche",
            "TokenName": "Yield Yak: JLP JOE-AVAX",
            "TokenDecimals": 18,
            "WalletBalance": 1e-18,
            "Balance": "1",
            "TokenSymbol": "YRT",
            "ChainId": "0xa86a",
            "ChainName": "Avalanche",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "YRT",
        "TokenName": "Yield Yak: JLP JOE-AVAX",
        "TokenAddress": "0xed8c2af5c9f7a0fa5aaa0d8f8e78ddca28eef3d6",
        "WalletBalance": 1e-18,
        "NetworkName": "Avalanche",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0x542fa0b261503333b90fe60c78f2beed16b7b7fd",
            "symbol": "TRACTOR",
            "name": "TRACTOR JOE",
            "logo": null,
            "thumbnail": null,
            "decimals": 9,
            "balance": "27229060528210",
            "possible_spam": true,
            "NetworkName": "Avalanche",
            "TokenName": "TRACTOR JOE",
            "TokenDecimals": 9,
            "WalletBalance": 27229.06052821,
            "Balance": "27229060528210",
            "TokenSymbol": "TRACTOR",
            "ChainId": "0xa86a",
            "ChainName": "Avalanche",
            "priceData": {
                "tokenName": "TRACTOR JOE",
                "tokenSymbol": "TRACTOR",
                "tokenLogo": null,
                "tokenDecimals": "9",
                "nativePrice": "3220579407708",
                "usdPrice": 0.00003200595842361814,
                "usdPriceFormatted": "0.00003200595842361814",
                "24hrPercentChange": "0.9850620252637606",
                "exchangeAddress": "0x9ad6c38be94206ca50bb0d90783181662f0cfa10",
                "exchangeName": "TraderJoe",
                "tokenAddress": "0x542fa0b261503333b90fe60c78f2beed16b7b7fd"
            },
            "TokenPrice": 0.00003200595842361814,
            "NativePrice": "3220579407708",
            "ExchangeName": "TraderJoe",
            "ExchangeAddress": "0x9ad6c38be94206ca50bb0d90783181662f0cfa10",
            "24hrPercentChange": "0.9850620252637606",
            "PossibleSpam": true
        },
        "USDValue": 0.871492179180071,
        "TokenPrice": 0.00003200595842361814,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "TRACTOR",
        "TokenName": "TRACTOR JOE",
        "TokenAddress": "0x542fa0b261503333b90fe60c78f2beed16b7b7fd",
        "WalletBalance": 27229.06052821,
        "NetworkName": "Avalanche",
        "ExchangeName": "TraderJoe",
        "ExchangeAddress": "0x9ad6c38be94206ca50bb0d90783181662f0cfa10",
        "24hrPercentChange": "0.9850620252637606",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0xe9eb40d52ce4744322204d4a29af63c30f0260a4",
            "symbol": "sSB",
            "name": "Staked Snowbank",
            "logo": null,
            "thumbnail": null,
            "decimals": 9,
            "balance": "3",
            "possible_spam": true,
            "NetworkName": "Avalanche",
            "TokenName": "Staked Snowbank",
            "TokenDecimals": 9,
            "WalletBalance": 3e-9,
            "Balance": "3",
            "TokenSymbol": "sSB",
            "ChainId": "0xa86a",
            "ChainName": "Avalanche",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "sSB",
        "TokenName": "Staked Snowbank",
        "TokenAddress": "0xe9eb40d52ce4744322204d4a29af63c30f0260a4",
        "WalletBalance": 3e-9,
        "NetworkName": "Avalanche",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0x622265eab66a45fa05bac9b8d2262aa548fa449e",
            "symbol": "ELCT",
            "name": "Electron Token",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "60424864300405178293",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "Electron Token",
            "TokenDecimals": 18,
            "WalletBalance": 60.424864300405176,
            "Balance": "60424864300405178293",
            "TokenSymbol": "ELCT",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": {
                "tokenName": "Electron Token",
                "tokenSymbol": "ELCT",
                "tokenLogo": null,
                "tokenDecimals": "18",
                "nativePrice": "7689459230721",
                "usdPrice": 0.000014229649039402849,
                "usdPriceFormatted": "0.000014229649039402849",
                "24hrPercentChange": "1.731179438501878",
                "exchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
                "exchangeName": "SpookySwap",
                "tokenAddress": "0x622265eab66a45fa05bac9b8d2262aa548fa449e"
            },
            "TokenPrice": 0.000014229649039402849,
            "NativePrice": "7689459230721",
            "ExchangeName": "SpookySwap",
            "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
            "24hrPercentChange": "1.731179438501878",
            "PossibleSpam": true
        },
        "USDValue": 0.000859824612248308,
        "TokenPrice": 0.000014229649039402849,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "ELCT",
        "TokenName": "Electron Token",
        "TokenAddress": "0x622265eab66a45fa05bac9b8d2262aa548fa449e",
        "WalletBalance": 60.424864300405176,
        "NetworkName": "Fantom",
        "ExchangeName": "SpookySwap",
        "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
        "24hrPercentChange": "1.731179438501878",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0xe4517100ae62cbeefc363e59d0f8df5754dc7e40",
            "symbol": "4Gambling.io",
            "name": "4Gambling.io",
            "logo": null,
            "thumbnail": null,
            "decimals": 8,
            "balance": "300000000000000",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "4Gambling.io",
            "TokenDecimals": 8,
            "WalletBalance": 3000000,
            "Balance": "300000000000000",
            "TokenSymbol": "4Gambling.io",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "4Gambling.io",
        "TokenName": "4Gambling.io",
        "TokenAddress": "0xe4517100ae62cbeefc363e59d0f8df5754dc7e40",
        "WalletBalance": 3000000,
        "NetworkName": "Fantom",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0xd97f9674e2597e7a252de4875985f4385b9608fb",
            "symbol": "JEWEL",
            "name": "Jewels",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "2350000000000000",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "Jewels",
            "TokenDecimals": 18,
            "WalletBalance": 0.00235,
            "Balance": "2350000000000000",
            "TokenSymbol": "JEWEL",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "JEWEL",
        "TokenName": "Jewels",
        "TokenAddress": "0xd97f9674e2597e7a252de4875985f4385b9608fb",
        "WalletBalance": 0.00235,
        "NetworkName": "Fantom",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0x653a7997b18aeacdc92d45e16d282cc49862fe7c",
            "symbol": "M32",
            "name": " \"Minereum32 - Only 32 Tokens Supply",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "1",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": " \"Minereum32 - Only 32 Tokens Supply",
            "TokenDecimals": 18,
            "WalletBalance": 1e-18,
            "Balance": "1",
            "TokenSymbol": "M32",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "M32",
        "TokenName": " \"Minereum32 - Only 32 Tokens Supply",
        "TokenAddress": "0x653a7997b18aeacdc92d45e16d282cc49862fe7c",
        "WalletBalance": 1e-18,
        "NetworkName": "Fantom",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0x5d7f29ef27bcc6f85e079bd3a1a5db6d333d529f",
            "symbol": "$ Free Claim and Play",
            "name": "$ 0Bets.io",
            "logo": null,
            "thumbnail": null,
            "decimals": 8,
            "balance": "50000000000",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "$ 0Bets.io",
            "TokenDecimals": 8,
            "WalletBalance": 500,
            "Balance": "50000000000",
            "TokenSymbol": "$ Free Claim and Play",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "$ Free Claim and Play",
        "TokenName": "$ 0Bets.io",
        "TokenAddress": "0x5d7f29ef27bcc6f85e079bd3a1a5db6d333d529f",
        "WalletBalance": 500,
        "NetworkName": "Fantom",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0xe826f3c308aeb14cf901e19af1e5a0f7e73b625c",
            "symbol": "FTMBOT.COM",
            "name": "GetFreeFantom",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "100000000000000000000",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "GetFreeFantom",
            "TokenDecimals": 18,
            "WalletBalance": 100,
            "Balance": "100000000000000000000",
            "TokenSymbol": "FTMBOT.COM",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "FTMBOT.COM",
        "TokenName": "GetFreeFantom",
        "TokenAddress": "0xe826f3c308aeb14cf901e19af1e5a0f7e73b625c",
        "WalletBalance": 100,
        "NetworkName": "Fantom",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0xb502b79c9ec490c4eee130a03370d490b069e59b",
            "symbol": "$ Airdrop in Cake (MultiChain)",
            "name": "! caker.io",
            "logo": null,
            "thumbnail": null,
            "decimals": 8,
            "balance": "50000000000",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "! caker.io",
            "TokenDecimals": 8,
            "WalletBalance": 500,
            "Balance": "50000000000",
            "TokenSymbol": "$ Airdrop in Cake (MultiChain)",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "$ Airdrop in Cake (MultiChain)",
        "TokenName": "! caker.io",
        "TokenAddress": "0xb502b79c9ec490c4eee130a03370d490b069e59b",
        "WalletBalance": 500,
        "NetworkName": "Fantom",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0x177e2370b1cccd0f3807207481b74e51f58c4574",
            "symbol": "FANT.ROCKS",
            "name": "WWW.FANT.ROCKS",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "100000000000000000000",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "WWW.FANT.ROCKS",
            "TokenDecimals": 18,
            "WalletBalance": 100,
            "Balance": "100000000000000000000",
            "TokenSymbol": "FANT.ROCKS",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "FANT.ROCKS",
        "TokenName": "WWW.FANT.ROCKS",
        "TokenAddress": "0x177e2370b1cccd0f3807207481b74e51f58c4574",
        "WalletBalance": 100,
        "NetworkName": "Fantom",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0x8e2549225e21b1da105563d419d5689b80343e01",
            "symbol": "sSPA",
            "name": "Staked Spartacus",
            "logo": null,
            "thumbnail": null,
            "decimals": 9,
            "balance": "1",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "Staked Spartacus",
            "TokenDecimals": 9,
            "WalletBalance": 1e-9,
            "Balance": "1",
            "TokenSymbol": "sSPA",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "sSPA",
        "TokenName": "Staked Spartacus",
        "TokenAddress": "0x8e2549225e21b1da105563d419d5689b80343e01",
        "WalletBalance": 1e-9,
        "NetworkName": "Fantom",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0xe0654c8e6fd4d733349ac7e09f6f23da256bf475",
            "symbol": "SCREAM",
            "name": "Scream",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "12633459094539012",
            "possible_spam": false,
            "NetworkName": "Fantom",
            "TokenName": "Scream",
            "TokenDecimals": 18,
            "WalletBalance": 0.012633459094539012,
            "Balance": "12633459094539012",
            "TokenSymbol": "SCREAM",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": {
                "tokenName": "Scream",
                "tokenSymbol": "SCREAM",
                "tokenLogo": null,
                "tokenDecimals": "18",
                "nativePrice": "1171337481231568900",
                "usdPrice": 2.1676064290753323,
                "usdPriceFormatted": "2.1676064290753323",
                "24hrPercentChange": "0.3016317357657732",
                "exchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
                "exchangeName": "SpookySwap",
                "tokenAddress": "0xe0654c8e6fd4d733349ac7e09f6f23da256bf475"
            },
            "TokenPrice": 2.1676064290753323,
            "NativePrice": "1171337481231568900",
            "ExchangeName": "SpookySwap",
            "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
            "24hrPercentChange": "0.3016317357657732",
            "PossibleSpam": false
        },
        "USDValue": 0.027384367154782988,
        "TokenPrice": 2.1676064290753323,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "SCREAM",
        "TokenName": "Scream",
        "TokenAddress": "0xe0654c8e6fd4d733349ac7e09f6f23da256bf475",
        "WalletBalance": 0.012633459094539012,
        "NetworkName": "Fantom",
        "ExchangeName": "SpookySwap",
        "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
        "24hrPercentChange": "0.3016317357657732",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": false
    },
    {
        "item": {
            "token_address": "0x1dc63864950831bd6335b2e89560a74be4b70006",
            "symbol": "cTAROT",
            "name": "Tarot Collateral",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "446203121663904",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "Tarot Collateral",
            "TokenDecimals": 18,
            "WalletBalance": 0.000446203121663904,
            "Balance": "446203121663904",
            "TokenSymbol": "cTAROT",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "cTAROT",
        "TokenName": "Tarot Collateral",
        "TokenAddress": "0x1dc63864950831bd6335b2e89560a74be4b70006",
        "WalletBalance": 0.000446203121663904,
        "NetworkName": "Fantom",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0x38da23ef41333be0d309cd63166035ff3b7e2000",
            "symbol": "rvWFTM",
            "name": "Robovault V3 WFTM",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "5245220346359679656",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "Robovault V3 WFTM",
            "TokenDecimals": 18,
            "WalletBalance": 5.24522034635968,
            "Balance": "5245220346359679656",
            "TokenSymbol": "rvWFTM",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "rvWFTM",
        "TokenName": "Robovault V3 WFTM",
        "TokenAddress": "0x38da23ef41333be0d309cd63166035ff3b7e2000",
        "WalletBalance": 5.24522034635968,
        "NetworkName": "Fantom",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0x87e377820010d818aa316f8c3f1c2b9d025eb5ee",
            "symbol": "SWAPFTM.COM",
            "name": "ClaimFreeTokens(SWAPFTM.COM)",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "100000000000000000000",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "ClaimFreeTokens(SWAPFTM.COM)",
            "TokenDecimals": 18,
            "WalletBalance": 100,
            "Balance": "100000000000000000000",
            "TokenSymbol": "SWAPFTM.COM",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "SWAPFTM.COM",
        "TokenName": "ClaimFreeTokens(SWAPFTM.COM)",
        "TokenAddress": "0x87e377820010d818aa316f8c3f1c2b9d025eb5ee",
        "WalletBalance": 100,
        "NetworkName": "Fantom",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0x6c021ae822bea943b2e66552bde1d2696a53fbb7",
            "symbol": "TOMB",
            "name": "TOMB",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "11209280872104844203",
            "possible_spam": false,
            "NetworkName": "Fantom",
            "TokenName": "TOMB",
            "TokenDecimals": 18,
            "WalletBalance": 11.209280872104843,
            "Balance": "11209280872104844203",
            "TokenSymbol": "TOMB",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": {
                "tokenName": "TOMB",
                "tokenSymbol": "TOMB",
                "tokenLogo": null,
                "tokenDecimals": "18",
                "nativePrice": "23111121756121313",
                "usdPrice": 0.04276804670250929,
                "usdPriceFormatted": "0.04276804670250929",
                "24hrPercentChange": "2.1284138900281233",
                "exchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
                "exchangeName": "SpookySwap",
                "tokenAddress": "0x6c021ae822bea943b2e66552bde1d2696a53fbb7"
            },
            "TokenPrice": 0.04276804670250929,
            "NativePrice": "23111121756121313",
            "ExchangeName": "SpookySwap",
            "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
            "24hrPercentChange": "2.1284138900281233",
            "PossibleSpam": false
        },
        "USDValue": 0.479399047839724,
        "TokenPrice": 0.04276804670250929,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "TOMB",
        "TokenName": "TOMB",
        "TokenAddress": "0x6c021ae822bea943b2e66552bde1d2696a53fbb7",
        "WalletBalance": 11.209280872104843,
        "NetworkName": "Fantom",
        "ExchangeName": "SpookySwap",
        "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
        "24hrPercentChange": "2.1284138900281233",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": false
    },
    {
        "item": {
            "token_address": "0x82f0b8b456c1a451378467398982d4834b6829c1",
            "symbol": "MIM",
            "name": "Magic Internet Money",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "374607860906458",
            "possible_spam": false,
            "NetworkName": "Fantom",
            "TokenName": "Magic Internet Money",
            "TokenDecimals": 18,
            "WalletBalance": 0.000374607860906458,
            "Balance": "374607860906458",
            "TokenSymbol": "MIM",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": {
                "tokenName": "Magic Internet Money",
                "tokenSymbol": "MIM",
                "tokenLogo": null,
                "tokenDecimals": "18",
                "nativePrice": "4978400439644441000",
                "usdPrice": 9.212727307367166,
                "usdPriceFormatted": "9.212727307367166",
                "24hrPercentChange": "0.5568377907474007",
                "exchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
                "exchangeName": "SpookySwap",
                "tokenAddress": "0x82f0b8b456c1a451378467398982d4834b6829c1"
            },
            "TokenPrice": 9.212727307367166,
            "NativePrice": "4978400439644441000",
            "ExchangeName": "SpookySwap",
            "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
            "24hrPercentChange": "0.5568377907474007",
            "PossibleSpam": false
        },
        "USDValue": 0.0034511600697273263,
        "TokenPrice": 9.212727307367166,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "MIM",
        "TokenName": "Magic Internet Money",
        "TokenAddress": "0x82f0b8b456c1a451378467398982d4834b6829c1",
        "WalletBalance": 0.000374607860906458,
        "NetworkName": "Fantom",
        "ExchangeName": "SpookySwap",
        "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
        "24hrPercentChange": "0.5568377907474007",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": false
    },
    {
        "item": {
            "token_address": "0x7082ca5058c358997063400ad78306b16a5c30d9",
            "symbol": "888Crypto.pro",
            "name": "888Crypto.pro",
            "logo": null,
            "thumbnail": null,
            "decimals": 8,
            "balance": "150000000000000",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "888Crypto.pro",
            "TokenDecimals": 8,
            "WalletBalance": 1500000,
            "Balance": "150000000000000",
            "TokenSymbol": "888Crypto.pro",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": {
                "tokenName": "888Crypto.pro",
                "tokenSymbol": "888Crypto.pro",
                "tokenLogo": null,
                "tokenDecimals": "8",
                "nativePrice": "95036694237557",
                "usdPrice": 0.00017586916898689104,
                "usdPriceFormatted": "0.00017586916898689104",
                "24hrPercentChange": "1.7311794385018853",
                "exchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
                "exchangeName": "SpookySwap",
                "tokenAddress": "0x7082ca5058c358997063400ad78306b16a5c30d9"
            },
            "TokenPrice": 0.00017586916898689104,
            "NativePrice": "95036694237557",
            "ExchangeName": "SpookySwap",
            "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
            "24hrPercentChange": "1.7311794385018853",
            "PossibleSpam": true
        },
        "USDValue": 263.8037534803366,
        "TokenPrice": 0.00017586916898689104,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "888Crypto.pro",
        "TokenName": "888Crypto.pro",
        "TokenAddress": "0x7082ca5058c358997063400ad78306b16a5c30d9",
        "WalletBalance": 1500000,
        "NetworkName": "Fantom",
        "ExchangeName": "SpookySwap",
        "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
        "24hrPercentChange": "1.7311794385018853",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0xd17584633bc8d190e5a14502976dad9640456d6d",
            "symbol": "TNGL",
            "name": "Tangle",
            "logo": null,
            "thumbnail": null,
            "decimals": 9,
            "balance": "1028515012",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "Tangle",
            "TokenDecimals": 9,
            "WalletBalance": 1.028515012,
            "Balance": "1028515012",
            "TokenSymbol": "TNGL",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": {
                "tokenName": "Tangle",
                "tokenSymbol": "TNGL",
                "tokenLogo": null,
                "tokenDecimals": "9",
                "nativePrice": "55218690014344",
                "usdPrice": 0.00010218437418596293,
                "usdPriceFormatted": "0.00010218437418596293",
                "24hrPercentChange": "1.7311794385018768",
                "exchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
                "exchangeName": "SpookySwap",
                "tokenAddress": "0xd17584633bc8d190e5a14502976dad9640456d6d"
            },
            "TokenPrice": 0.00010218437418596293,
            "NativePrice": "55218690014344",
            "ExchangeName": "SpookySwap",
            "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
            "24hrPercentChange": "1.7311794385018768",
            "PossibleSpam": true
        },
        "USDValue": 0.00010509816284208815,
        "TokenPrice": 0.00010218437418596293,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "TNGL",
        "TokenName": "Tangle",
        "TokenAddress": "0xd17584633bc8d190e5a14502976dad9640456d6d",
        "WalletBalance": 1.028515012,
        "NetworkName": "Fantom",
        "ExchangeName": "SpookySwap",
        "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
        "24hrPercentChange": "1.7311794385018768",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0xe52a9eb2505a072324984c818c0f49c19c8b6abb",
            "symbol": "0Casino.io",
            "name": "0Casino.io",
            "logo": null,
            "thumbnail": null,
            "decimals": 8,
            "balance": "150000000000000",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "0Casino.io",
            "TokenDecimals": 8,
            "WalletBalance": 1500000,
            "Balance": "150000000000000",
            "TokenSymbol": "0Casino.io",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": {
                "tokenName": "0Casino.io",
                "tokenSymbol": "0Casino.io",
                "tokenLogo": null,
                "tokenDecimals": "8",
                "nativePrice": "82265989840009",
                "usdPrice": 0.0001522364743967373,
                "usdPriceFormatted": "0.0001522364743967373",
                "24hrPercentChange": "1.7311794385018902",
                "exchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
                "exchangeName": "SpookySwap",
                "tokenAddress": "0xe52a9eb2505a072324984c818c0f49c19c8b6abb"
            },
            "TokenPrice": 0.0001522364743967373,
            "NativePrice": "82265989840009",
            "ExchangeName": "SpookySwap",
            "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
            "24hrPercentChange": "1.7311794385018902",
            "PossibleSpam": true
        },
        "USDValue": 228.35471159510593,
        "TokenPrice": 0.0001522364743967373,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "0Casino.io",
        "TokenName": "0Casino.io",
        "TokenAddress": "0xe52a9eb2505a072324984c818c0f49c19c8b6abb",
        "WalletBalance": 1500000,
        "NetworkName": "Fantom",
        "ExchangeName": "SpookySwap",
        "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
        "24hrPercentChange": "1.7311794385018902",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0x383c5e5a05ba830579adc2fccd6403894e1caa59",
            "symbol": "0Casino.io",
            "name": "0Casino.io",
            "logo": null,
            "thumbnail": null,
            "decimals": 8,
            "balance": "150000000000000",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "0Casino.io",
            "TokenDecimals": 8,
            "WalletBalance": 1500000,
            "Balance": "150000000000000",
            "TokenSymbol": "0Casino.io",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "0Casino.io",
        "TokenName": "0Casino.io",
        "TokenAddress": "0x383c5e5a05ba830579adc2fccd6403894e1caa59",
        "WalletBalance": 1500000,
        "NetworkName": "Fantom",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0x8561d0e8449e530c0ee05b21c1f72199c7e2b84c",
            "symbol": "PLAY888.io",
            "name": "PLAY888.io",
            "logo": null,
            "thumbnail": null,
            "decimals": 8,
            "balance": "9500000000000",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "PLAY888.io",
            "TokenDecimals": 8,
            "WalletBalance": 95000,
            "Balance": "9500000000000",
            "TokenSymbol": "PLAY888.io",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "PLAY888.io",
        "TokenName": "PLAY888.io",
        "TokenAddress": "0x8561d0e8449e530c0ee05b21c1f72199c7e2b84c",
        "WalletBalance": 95000,
        "NetworkName": "Fantom",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0x0dec85e74a92c52b7f708c4b10207d9560cefaf0",
            "symbol": "yvWFTM",
            "name": "WFTM yVault",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "107879836609639063",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "WFTM yVault",
            "TokenDecimals": 18,
            "WalletBalance": 0.10787983660963905,
            "Balance": "107879836609639063",
            "TokenSymbol": "yvWFTM",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "yvWFTM",
        "TokenName": "WFTM yVault",
        "TokenAddress": "0x0dec85e74a92c52b7f708c4b10207d9560cefaf0",
        "WalletBalance": 0.10787983660963905,
        "NetworkName": "Fantom",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0xd31fcd1f7ba190dbc75354046f6024a9b86014d7",
            "symbol": "SEX",
            "name": "Solidex",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "5999991227892307",
            "possible_spam": false,
            "NetworkName": "Fantom",
            "TokenName": "Solidex",
            "TokenDecimals": 18,
            "WalletBalance": 0.005999991227892307,
            "Balance": "5999991227892307",
            "TokenSymbol": "SEX",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": {
                "tokenName": "Solidex",
                "tokenSymbol": "SEX",
                "tokenLogo": null,
                "tokenDecimals": "18",
                "nativePrice": "1694452903144315",
                "usdPrice": 0.003135652248367573,
                "usdPriceFormatted": "0.003135652248367573",
                "24hrPercentChange": "1.7324307095519094",
                "exchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
                "exchangeName": "SpookySwap",
                "tokenAddress": "0xd31fcd1f7ba190dbc75354046f6024a9b86014d7"
            },
            "TokenPrice": 0.003135652248367573,
            "NativePrice": "1694452903144315",
            "ExchangeName": "SpookySwap",
            "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
            "24hrPercentChange": "1.7324307095519094",
            "PossibleSpam": false
        },
        "USDValue": 0.00001881388598392623,
        "TokenPrice": 0.003135652248367573,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "SEX",
        "TokenName": "Solidex",
        "TokenAddress": "0xd31fcd1f7ba190dbc75354046f6024a9b86014d7",
        "WalletBalance": 0.005999991227892307,
        "NetworkName": "Fantom",
        "ExchangeName": "SpookySwap",
        "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
        "24hrPercentChange": "1.7324307095519094",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": false
    },
    {
        "item": {
            "token_address": "0xf9d922c055a3f1759299467dafafdf43be844f7a",
            "symbol": "MNEF",
            "name": "Minereum FTM",
            "logo": null,
            "thumbnail": null,
            "decimals": 8,
            "balance": "30000000000000",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "Minereum FTM",
            "TokenDecimals": 8,
            "WalletBalance": 300000,
            "Balance": "30000000000000",
            "TokenSymbol": "MNEF",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": {
                "tokenName": "Minereum FTM",
                "tokenSymbol": "MNEF",
                "tokenLogo": null,
                "tokenDecimals": "8",
                "nativePrice": "612243729116879300",
                "usdPrice": 1.1329812839246458,
                "usdPriceFormatted": "1.1329812839246458",
                "24hrPercentChange": "1.7311794385018726",
                "exchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
                "exchangeName": "SpookySwap",
                "tokenAddress": "0xf9d922c055a3f1759299467dafafdf43be844f7a"
            },
            "TokenPrice": 1.1329812839246458,
            "NativePrice": "612243729116879300",
            "ExchangeName": "SpookySwap",
            "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
            "24hrPercentChange": "1.7311794385018726",
            "PossibleSpam": true
        },
        "USDValue": 339894.38517739373,
        "TokenPrice": 1.1329812839246458,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "MNEF",
        "TokenName": "Minereum FTM",
        "TokenAddress": "0xf9d922c055a3f1759299467dafafdf43be844f7a",
        "WalletBalance": 300000,
        "NetworkName": "Fantom",
        "ExchangeName": "SpookySwap",
        "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
        "24hrPercentChange": "1.7311794385018726",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0x033310d982cb70b63ce3d8acabcad6af5e2a575c",
            "symbol": "rv3WFTMc",
            "name": "Robovault V3 WFTM (C)",
            "logo": null,
            "thumbnail": null,
            "decimals": 18,
            "balance": "4885040931242556483",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "Robovault V3 WFTM (C)",
            "TokenDecimals": 18,
            "WalletBalance": 4.885040931242556,
            "Balance": "4885040931242556483",
            "TokenSymbol": "rv3WFTMc",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": null,
            "TokenPrice": null,
            "NativePrice": null,
            "ExchangeName": null,
            "ExchangeAddress": null,
            "24hrPercentChange": null,
            "PossibleSpam": true
        },
        "USDValue": 0,
        "TokenPrice": 0,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "rv3WFTMc",
        "TokenName": "Robovault V3 WFTM (C)",
        "TokenAddress": "0x033310d982cb70b63ce3d8acabcad6af5e2a575c",
        "WalletBalance": 4.885040931242556,
        "NetworkName": "Fantom",
        "ExchangeName": "N/A",
        "ExchangeAddress": "N/A",
        "24hrPercentChange": "0",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    },
    {
        "item": {
            "token_address": "0xa7f09e7be9e7b777126003dab2fa4161f5325343",
            "symbol": "Ape-Peg",
            "name": "0Apes.net",
            "logo": null,
            "thumbnail": null,
            "decimals": 8,
            "balance": "150000000000000",
            "possible_spam": true,
            "NetworkName": "Fantom",
            "TokenName": "0Apes.net",
            "TokenDecimals": 8,
            "WalletBalance": 1500000,
            "Balance": "150000000000000",
            "TokenSymbol": "Ape-Peg",
            "ChainId": "0xfa",
            "ChainName": "Fantom",
            "priceData": {
                "tokenName": "0Apes.net",
                "tokenSymbol": "Ape-Peg",
                "tokenLogo": null,
                "tokenDecimals": "8",
                "nativePrice": "200000000000000",
                "usdPrice": 0.0003701079259917928,
                "usdPriceFormatted": "0.0003701079259917928",
                "24hrPercentChange": "1.7311794385018855",
                "exchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
                "exchangeName": "SpookySwap",
                "tokenAddress": "0xa7f09e7be9e7b777126003dab2fa4161f5325343"
            },
            "TokenPrice": 0.0003701079259917928,
            "NativePrice": "200000000000000",
            "ExchangeName": "SpookySwap",
            "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
            "24hrPercentChange": "1.7311794385018855",
            "PossibleSpam": true
        },
        "USDValue": 555.1618889876892,
        "TokenPrice": 0.0003701079259917928,
        "LogoURI": "/static/media/pepe-thinking.85501b43aa3e57f462bd.png",
        "TokenSymbol": "Ape-Peg",
        "TokenName": "0Apes.net",
        "TokenAddress": "0xa7f09e7be9e7b777126003dab2fa4161f5325343",
        "WalletBalance": 1500000,
        "NetworkName": "Fantom",
        "ExchangeName": "SpookySwap",
        "ExchangeAddress": "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
        "24hrPercentChange": "1.7311794385018855",
        "Platform": "Defi",
        "PlatformType": "defi",
        "PossibleSpam": true
    }
],

testNFTData :  [
    {
      "token_address": "0x4906e54624a41c78e8bba8af5447e24858b8c6eb",
      "token_id": "215",
      "owner_of": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "block_number": "15874018",
      "block_number_minted": "15874018",
      "token_hash": "a8dada7e649a6fee045de37b024c4cfe",
      "amount": "1",
      "possible_spam": true,
      "contract_type": "ERC1155",
      "name": "IHTS Club",
      "symbol": "IHTS Club",
      "token_uri": "https://kship.xyz/ipfs/215",
      "metadata": "{\"name\":\"KSHIP #215\",\"description\":\"Upgrade this item to unlock it and enjoy with it. Upgrading does not require any fee.\",\"image\":\"ipfs://bafybeibvsul7hg6gozx47ipbdalvvcd3uvnpbqb66gdgpxiov7mao2shq4\",\"animation_url\":\"ipfs://bafybeieh5aakz7iuq6x4fldmh52sjj3ixb6rvgx2nzurbzdlige55tmvma\"}",
      "last_token_uri_sync": "2022-11-01T08:34:42.818Z",
      "last_metadata_sync": "2023-05-23T02:30:12.573Z",
      "minter_address": "ERC1155 tokens don't have a single minter",
      "verified_collection": false
    },
    {
      "token_address": "0xc212d547870da0dbbc099ea467e4e6bbd50ce2e1",
      "token_id": "134",
      "owner_of": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "block_number": "15821604",
      "block_number_minted": "15821604",
      "token_hash": "c5b72e846c023f27f8400f0aeebe1789",
      "amount": "1",
      "possible_spam": true,
      "contract_type": "ERC1155",
      "name": "The SandPlates Genesis Original",
      "symbol": "The SandPlates Genesis Original",
      "token_uri": "https://sandplates.xyz/ipfs/134",
      "metadata": "{\"name\":\"Sand Plates #777\",\"description\":\"Mint is Live! [Sand Plates #777](https://www.sandplates.xyz) is a digital ticket to the universe that we are going to build for you. Holders can mint up to 7 nfts for free.\",\"image\":\"https://sandplates.xyz/item.jpg\"}",
      "last_token_uri_sync": "2022-10-25T00:48:17.981Z",
      "last_metadata_sync": "2023-02-28T05:40:36.701Z",
      "minter_address": "ERC1155 tokens don't have a single minter",
      "verified_collection": false
    },
    {
      "token_address": "0x4bb33f6e69fd62cf3abbcc6f1f43b94a5d572c2b",
      "token_id": "3955",
      "owner_of": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "block_number": "13883154",
      "block_number_minted": "13705310",
      "token_hash": "cefcca5bc2bef3422bbc5084cd8c9d50",
      "amount": "1",
      "possible_spam": false,
      "contract_type": "ERC721",
      "name": "Bears Deluxe",
      "symbol": "BearsDeluxe",
      "token_uri": "https://ipfs.moralis.io:2053/ipfs/QmeragsHba1EtevJsm6sEXNJV1AewLQGaPQbbAZMtizTuF/3955",
      "metadata": "{\"name\":\"Bears Deluxe #3955\",\"external_url\":\"https://www.bearsdeluxe.io/bears/3955\",\"image\":\"https://vx-stills.s3.us-east-2.amazonaws.com/big/3955.png\",\"attributes\":[{\"trait_type\":\"Facewear\",\"value\":\"Purple Scanner\"},{\"trait_type\":\"Cigar / Pipe\",\"value\":\"None\"},{\"trait_type\":\"Species\",\"value\":\"Black Bear\"},{\"trait_type\":\"Facial Hair\",\"value\":\"Brown Mustache\"},{\"trait_type\":\"Headwear\",\"value\":\"Pink Penguin Hood\"},{\"trait_type\":\"Face\",\"value\":\"Stunned\"},{\"trait_type\":\"Clothes\",\"value\":\"Pink Zip Up Hoodie\"}],\"description\":\"Bears Deluxe is a collection of 6,900 algorithmically generated bears. All art drawn by hand in 24px format. Enjoy!\",\"ordinal_url\":\"https://ordinals.com/content/3011aa1b3e30d03cacb7dd88cb7316bb9d5c93b7524b21a9523dc028d4ada6eci0?id=3955\"}",
      "last_token_uri_sync": "2023-02-28T05:33:22.991Z",
      "last_metadata_sync": "2023-07-16T14:07:09.347Z",
      "minter_address": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "verified_collection": true
    },
    {
      "token_address": "0x986aea67c7d6a15036e18678065eb663fc5be883",
      "token_id": "4953",
      "owner_of": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "block_number": "13950535",
      "block_number_minted": "13326353",
      "token_hash": "4dd869632c17401867a470b231452ba0",
      "amount": "1",
      "possible_spam": false,
      "contract_type": "ERC721",
      "name": "NiftyDegen",
      "symbol": "DEGEN",
      "token_uri": "https://api.nifty-league.com/mainnet/degen/4953",
      "metadata": "{\"name\":\"DEGEN #4953\",\"image\":\"ipfs://bafybeidprdayfczmwsii2fhwz2dgwjj4sxxn4zgif2jvvzku2fmcy2d23i/nifty-degens/4953.png\",\"description\":\"Original collection of your favorite 10k DEGENs 🎮\",\"external_url\":\"https://nifty-league.com/degens/4953\",\"attributes\":[{\"display_type\":\"number\",\"trait_type\":\"Generation\",\"value\":1},{\"trait_type\":\"Background\",\"value\":\"Common\"},{\"trait_type\":\"Tribe\",\"value\":\"Human\"},{\"trait_type\":\"Skin Color\",\"value\":\"Primrose Path\"},{\"trait_type\":\"Eye Color\",\"value\":\"Icy Brook\"},{\"trait_type\":\"Pupil Color\",\"value\":\"Cherry Soda\"},{\"trait_type\":\"Hair\",\"value\":\"Gray Buzzcut\"},{\"trait_type\":\"Mouth\",\"value\":\"Black Vape\"},{\"trait_type\":\"Beard\",\"value\":\"Beige Handlebar\"},{\"trait_type\":\"Top\",\"value\":\"Orange Bra\"},{\"trait_type\":\"Outerwear\",\"value\":\"Red Dinner Jacket\"},{\"trait_type\":\"Print\",\"value\":\"Baseball Bat\"},{\"trait_type\":\"Hat\",\"value\":\"Red/White Party Hat\"},{\"trait_type\":\"Eyewear\",\"value\":\"Gold Steampunk Goggles\"},{\"trait_type\":\"Piercing\",\"value\":\"Diamond Stud\"},{\"trait_type\":\"Hands\",\"value\":\"Pink Cartoon Gloves\"},{\"trait_type\":\"Neckwear\",\"value\":\"Red Bowtie\"},{\"trait_type\":\"Extra Trait Count\",\"value\":11,\"display_type\":\"number\"}]}",
      "last_token_uri_sync": null,
      "last_metadata_sync": null,
      "minter_address": "0x710f9a3af0ca1195ddb8d63835f1a56107a94d1e",
      "verified_collection": true
    },
    {
      "token_address": "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      "token_id": "43353556718672887500764065403581029093802067266102802025723414673522041676209",
      "owner_of": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "block_number": "13870548",
      "block_number_minted": "13759819",
      "token_hash": "dda90341982f8fe0f49e914b7c69755a",
      "amount": "1",
      "possible_spam": false,
      "contract_type": "ERC721",
      "name": "Ethereum Name Service",
      "symbol": "ENS",
      "token_uri": "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/43353556718672887500764065403581029093802067266102802025723414673522041676209",
      "metadata": "{\"is_normalized\":true,\"name\":\"soohoo.eth\",\"description\":\"soohoo.eth, an ENS name.\",\"attributes\":[{\"trait_type\":\"Created Date\",\"display_type\":\"date\",\"value\":1638897947000},{\"trait_type\":\"Length\",\"display_type\":\"number\",\"value\":6},{\"trait_type\":\"Segment Length\",\"display_type\":\"number\",\"value\":6},{\"trait_type\":\"Character Set\",\"display_type\":\"string\",\"value\":\"letter\"},{\"trait_type\":\"Registration Date\",\"display_type\":\"date\",\"value\":1638897947000},{\"trait_type\":\"Expiration Date\",\"display_type\":\"date\",\"value\":1733568803000}],\"name_length\":6,\"segment_length\":6,\"url\":\"https://app.ens.domains/name/soohoo.eth\",\"version\":0,\"background_image\":\"https://metadata.ens.domains/mainnet/avatar/soohoo.eth\",\"image\":\"https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x5fd93e5859cc5c97b787eedf515c91a74b58653207d9b87bd559ff6eda19e1b1/image\",\"image_url\":\"https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x5fd93e5859cc5c97b787eedf515c91a74b58653207d9b87bd559ff6eda19e1b1/image\"}",
      "last_token_uri_sync": "2022-11-29T21:57:06.707Z",
      "last_metadata_sync": "2022-11-29T21:57:25.828Z",
      "minter_address": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "verified_collection": true
    },
    {
      "token_address": "0x1c2cd50f9efb463bdd2ec9e36772c14a8d1658b3",
      "token_id": "12339",
      "owner_of": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "block_number": "13883230",
      "block_number_minted": "13748695",
      "token_hash": "7a9dee232a316fa07ef9bebbbeca0688",
      "amount": "1",
      "possible_spam": false,
      "contract_type": "ERC721",
      "name": "Bees Deluxe",
      "symbol": "BeesDeluxe",
      "token_uri": "https://ethers.bearsdeluxe.workers.dev/?token=12339",
      "metadata": "{\"id\":12339,\"name\":\"Bees Deluxe #12339\",\"external_url\":\"https://bearsdeluxe.io/bees/12339\",\"image\":\"https://bearsdeluxe.mypinata.cloud/ipfs/QmSXBjmDZ8NtPni5HVs67f7D4MasQ5gDhkwd9Z3nFqFMnX/12339.png\",\"attributes\":[{\"trait_type\":\"Face\",\"value\":\"Smirk\"},{\"trait_type\":\"Facewear\",\"value\":\"Flashy Red Shades\"},{\"trait_type\":\"Clothes\",\"value\":\"Blue Swimsuit\"},{\"trait_type\":\"Wings\",\"value\":\"Small Doubled\"},{\"trait_type\":\"Worker/Active\",\"value\":\"Worker\"},{\"trait_type\":\"Status\",\"value\":\"Alive\"},{\"trait_type\":\"Level\",\"value\":0}],\"description\":\"Bees Deluxe is a collection of 20700 algorithmically generated bees. All art drawn by hand in 32px format. Enjoy!\"}",
      "last_token_uri_sync": "2022-06-08T13:02:04.700Z",
      "last_metadata_sync": "2022-06-08T13:02:06.736Z",
      "minter_address": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "verified_collection": true
    },
    {
      "token_address": "0xa0768dc386712ed355f41d56bdbc05bfbb9c797b",
      "token_id": "6742",
      "owner_of": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "block_number": "14104052",
      "block_number_minted": "14104052",
      "token_hash": "e3130c56b6680ec66794a1a430ae9a43",
      "amount": "1",
      "possible_spam": false,
      "contract_type": "ERC721",
      "name": "Voiceverse Origins",
      "symbol": "VVO",
      "token_uri": "https://ipfs.moralis.io:2053/ipfs/QmXBv79fvxckLDzFjwYZRhGpBakN8UXGAEE3mmYa3n47oo/6742",
      "metadata": "{\"attributes\":[{\"trait_type\":\"Tier\",\"value\":\"Terran\"},{\"trait_type\":\"vID\",\"value\":\"1349-0.5-1368-0.5-1266\"},{\"trait_type\":\"Gender\",\"value\":\"female\"},{\"trait_type\":\"body+ears\",\"value\":\"Milk\"},{\"trait_type\":\"eyes+nose\",\"value\":\"Round sunglasses\"},{\"trait_type\":\"mouth\",\"value\":\"Closed 2\"},{\"trait_type\":\"clothing\",\"value\":\"White coat\"},{\"trait_type\":\"hair\",\"value\":\"Dumpling blue\"},{\"trait_type\":\"background\",\"value\":\"Yellow\"}],\"TokenID\":\"6742\",\"description\":\"One Genesis token contains a Voiceverse PFP and an AI-powered Digital Voice which grants you access to utilities such as text-to-speech, custom voice, etc.\",\"name\":\"Voiceverse Genesis #6742\",\"image\":\"https://lovo.mypinata.cloud/ipfs/Qme1V4yZnuKs5dWGwrxmYoLRj8jmVdp8TWarM6mc2W4tLy/6742.png\"}",
      "last_token_uri_sync": "2023-08-15T10:28:04.281Z",
      "last_metadata_sync": "2023-08-15T10:28:36.145Z",
      "minter_address": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "verified_collection": true
    },
    {
      "token_address": "0xd3cd44f07744da3a6e60a4b5fda1370400ad515b",
      "token_id": "4727",
      "owner_of": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "block_number": "14181287",
      "block_number_minted": "14181287",
      "token_hash": "25374497f755efc7610a39a1b352c76c",
      "amount": "1",
      "possible_spam": false,
      "contract_type": "ERC721",
      "name": "Pieland",
      "symbol": "PIELAND",
      "token_uri": "https://metadata.livetoken.co/api/metadata/0xd3cD44f07744da3A6e60a4b5fdA1370400Ad515b/4727",
      "metadata": "{\"name\":\"Piesons #1199\",\"description\":\"The Octopie are the first NFTs in the Pieland series. This Octopie is Piesons serial #1199 of 1600.\",\"image\":\"https://pieland.io/images/0xd3cd44f07744da3a6e60a4b5fda1370400ad515b/n96nu3q2ze.jpg\",\"edition\":4727,\"external_url\":\"https://pieland.io\",\"attributes\":[{\"trait_type\":\"Slice\",\"value\":\"Piesons\"},{\"trait_type\":\"Background\",\"value\":\"Sunset Hut\"},{\"trait_type\":\"Body\",\"value\":\"Deep Sea\"},{\"trait_type\":\"Eyes\",\"value\":\"Base\"},{\"trait_type\":\"Piehole\",\"value\":\"Smile\"},{\"trait_type\":\"Piesons - Clothing\",\"value\":\"Black Waistcoat\"},{\"trait_type\":\"Piesons - Facial Hair\",\"value\":\"Black Mutton Chops\"},{\"trait_type\":\"Piesons - Tentacle\",\"value\":\"Darksteel Pitchfork\"},{\"trait_type\":\"Piesons - Companion\",\"value\":\"Mahogany Bucket\"}]}",
      "last_token_uri_sync": null,
      "last_metadata_sync": null,
      "minter_address": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "verified_collection": false
    },
    {
      "token_address": "0x5cc5b05a8a13e3fbdb0bb9fccd98d38e50f90c38",
      "token_id": "27749",
      "owner_of": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "block_number": "14668593",
      "block_number_minted": "14668593",
      "token_hash": "fc03c941bfe91f5a63d0994f226d2f00",
      "amount": "1",
      "possible_spam": false,
      "contract_type": "ERC721",
      "name": "Sandbox's LANDs",
      "symbol": "LAND",
      "token_uri": "https://api.sandbox.game/lands/27749/metadata.json",
      "metadata": "{\"name\":\"LAND (-199, -136)\",\"description\":\"A LAND is a digital piece of real estate in The Sandbox metaverse that players can buy to build experiences on top of. Once you own a LAND, you will be able to populate it with Games and Assets. Each LAND is a unique (non-fungible) token lying on the public Ethereum blockchain (ERC-721).\",\"image\":\"https://api.sandbox.game/lands/99bac3d3-3a48-4462-a7df-28cb4917a8ee/v1/preview-500px-x-500px.jpg\",\"sandbox\":{\"name\":\"-199, -136\",\"image\":\"https://api.sandbox.game/lands/99bac3d3-3a48-4462-a7df-28cb4917a8ee/preview.png\"},\"properties\":[{\"trait_type\":\"Land X\",\"value\":5,\"max_value\":408,\"display_type\":\"number\"},{\"trait_type\":\"Land Y\",\"value\":68,\"max_value\":408,\"display_type\":\"number\"}],\"external_url\":\"https://www.sandbox.game/en/lands/99bac3d3-3a48-4462-a7df-28cb4917a8ee/\"}",
      "last_token_uri_sync": "2023-01-08T04:13:03.611Z",
      "last_metadata_sync": "2023-01-08T04:13:04.785Z",
      "minter_address": "0x0073e6eb087019bdb7bede02d23aeb068b74af99",
      "verified_collection": true
    },
    {
      "token_address": "0x506a286a6bb78c9e5d189f436619a87a90aab088",
      "token_id": "1692",
      "owner_of": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "block_number": "14133993",
      "block_number_minted": "14133993",
      "token_hash": "843eb8e0d04941a3a7220864578e2201",
      "amount": "1",
      "possible_spam": false,
      "contract_type": "ERC721",
      "name": "Wealth Cyborg Club",
      "symbol": "WCC",
      "token_uri": "https://ipfs.moralis.io:2053/ipfs/QmafhqEvzLMhuvFJpnikP43RAMBu9f47qUdH86YvRs89CV/hidden.json",
      "metadata": "{\"name\":\"Wealth Cyborg\",\"description\":\"10,000 Wealthy Cyborgs straight out of the Metaverse ready to make their Club members richer.\",\"image\":\"ipfs://QmYUYqpw2riu3z7r26L9xKknGUCpBohekiyPCakA1ar6MD/hidden.gif\",\"compiler\":\"Silver.btc#9999\"}",
      "last_token_uri_sync": "2022-08-01T07:35:08.122Z",
      "last_metadata_sync": "2023-06-10T01:13:51.602Z",
      "minter_address": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "verified_collection": false
    },
    {
      "token_address": "0x0e79a2beb4911284e3a5a52e6d977dd90cc93001",
      "token_id": "7040",
      "owner_of": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "block_number": "13974579",
      "block_number_minted": "13974579",
      "token_hash": "cfed229bd442c3c690a1537d6c720d46",
      "amount": "1",
      "possible_spam": false,
      "contract_type": "ERC721",
      "name": "The Moon Monsters",
      "symbol": "TMM",
      "token_uri": "https://themoonmonsters.com/tokens/7040",
      "metadata": null,
      "last_token_uri_sync": null,
      "last_metadata_sync": null,
      "minter_address": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "verified_collection": false
    },
    {
      "token_address": "0x44a144f115b11ab052563ca17dfd430c914bd989",
      "token_id": "4320",
      "owner_of": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "block_number": "13930826",
      "block_number_minted": "13930826",
      "token_hash": "3e19e7c43637186305228567ad736bdc",
      "amount": "1",
      "possible_spam": false,
      "contract_type": "ERC721",
      "name": "Tokenpuss",
      "symbol": "TT",
      "token_uri": "https://api-tokenpuss.vercel.app/api/nft/4320",
      "metadata": "{\"name\":\"Tokenpuss #4320\",\"description\":\"Tokenpuss NFT is a collection of adorable meta-species fighting the blockchain to preserve wild life.\",\"image\":\"ipfs://QmTcfwTETcvCnjSj9GyR3oomZUeVrxnvYCxQUmK8p4PMSv/NDMyMA==.jpg\",\"dna\":\"28560344d318d5a639f23970c805cce2d3f522be\",\"edition\":4320,\"date\":1637585387018,\"attributes\":[{\"trait_type\":\"Background\",\"value\":\"Black_Brown\"},{\"trait_type\":\"Body\",\"value\":\"Orange\"},{\"trait_type\":\"Eyes\",\"value\":\"Blue_Pink\"},{\"trait_type\":\"Beak\",\"value\":\"Grey\"},{\"trait_type\":\"Glasses\",\"value\":\"Empty\"},{\"trait_type\":\"Chest\",\"value\":\"Pin_BTC\"},{\"trait_type\":\"Headpiece\",\"value\":\"Hat_Black\"},{\"trait_type\":\"Beakpiece\",\"value\":\"Empty\"}],\"compiler\":\"HashLips Art Engine\"}",
      "last_token_uri_sync": null,
      "last_metadata_sync": null,
      "minter_address": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "verified_collection": false
    },
    {
      "token_address": "0x44a144f115b11ab052563ca17dfd430c914bd989",
      "token_id": "4321",
      "owner_of": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "block_number": "13930832",
      "block_number_minted": "13930832",
      "token_hash": "fee4f008467e0ce30eb205a6909557ec",
      "amount": "1",
      "possible_spam": false,
      "contract_type": "ERC721",
      "name": "Tokenpuss",
      "symbol": "TT",
      "token_uri": "https://api-tokenpuss.vercel.app/api/nft/4321",
      "metadata": "{\"name\":\"Tokenpuss #4321\",\"description\":\"Tokenpuss NFT is a collection of adorable meta-species fighting the blockchain to preserve wild life.\",\"image\":\"ipfs://QmTcfwTETcvCnjSj9GyR3oomZUeVrxnvYCxQUmK8p4PMSv/NDMyMQ==.jpg\",\"dna\":\"6e264fd78d5520fdf75d5751e3c99fd95587baf1\",\"edition\":4321,\"date\":1637570039117,\"attributes\":[{\"trait_type\":\"Background\",\"value\":\"Orange_Pink\"},{\"trait_type\":\"Body\",\"value\":\"Green\"},{\"trait_type\":\"Eyes\",\"value\":\"Crosses\"},{\"trait_type\":\"Beak\",\"value\":\"Dark_Brown\"},{\"trait_type\":\"Glasses\",\"value\":\"Empty\"},{\"trait_type\":\"Chest\",\"value\":\"Empty\"},{\"trait_type\":\"Headpiece\",\"value\":\"Empty\"},{\"trait_type\":\"Beakpiece\",\"value\":\"Empty\"}],\"compiler\":\"HashLips Art Engine\"}",
      "last_token_uri_sync": null,
      "last_metadata_sync": null,
      "minter_address": "0xac3283c87a6ff8512ea3d90812854cdeebf05117",
      "verified_collection": false
    }
  ],
  usdTransactions : [
    {
        "id": "230c9c044d81445cae15ea86fb113d3e",
        "total_amount": {
            "amount": "400",
            "currency": "USD"
        },
        "dollar_amount": "400",
        "status": "Successful",
        "payment_method": {
            "type": "ACH"
        },
        "payout_at": "2022-08-19T16:54:53.645Z",
        "createTimeISO": "08-19-2022 4:54PM",
        "created_at": "2022-08-19T16:54:53.645Z",
        "resource": "deposit",
        "fee": {
            "amount": "0",
            "currency": "USD"
        },
        "amount": {
            "amount": "400",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "400",
            "currency": "USD"
        },
        "loopStartTime": "2022-8-01",
        "loopEndTime": "2022-08-31",
        "timeAddedToArray": "2023-09-11T21:19:20.787Z",
        "platform": "binance",
        "transaction": {
            "orderId": "230c9c044d81445cae15ea86fb113d3e",
            "paymentAccount": "58ecf29f-0898-4d89-a221-4af9a29c3ccd",
            "paymentChannel": "MODERNTREASURY",
            "paymentMethod": "ACH",
            "orderStatus": "Successful",
            "fiatCurrency": "USD",
            "amount": "400",
            "transactionFee": "0",
            "platformFee": "0",
            "createTime": 1660928093645
        }
    },
    {
        "id": "c1b7bab433a6415dbafbfb311663abac",
        "total_amount": {
            "amount": "200",
            "currency": "USD"
        },
        "dollar_amount": "200",
        "status": "Successful",
        "payment_method": {
            "type": "ACH"
        },
        "payout_at": "2022-08-26T13:13:37.851Z",
        "createTimeISO": "08-26-2022 1:13PM",
        "created_at": "2022-08-26T13:13:37.851Z",
        "resource": "deposit",
        "fee": {
            "amount": "0",
            "currency": "USD"
        },
        "amount": {
            "amount": "200",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "200",
            "currency": "USD"
        },
        "loopStartTime": "2022-8-01",
        "loopEndTime": "2022-08-31",
        "timeAddedToArray": "2023-09-11T21:19:20.787Z",
        "platform": "binance",
        "transaction": {
            "orderId": "c1b7bab433a6415dbafbfb311663abac",
            "paymentAccount": "58ecf29f-0898-4d89-a221-4af9a29c3ccd",
            "paymentChannel": "MODERNTREASURY",
            "paymentMethod": "ACH",
            "orderStatus": "Successful",
            "fiatCurrency": "USD",
            "amount": "200",
            "transactionFee": "0",
            "platformFee": "0",
            "createTime": 1661519617851
        }
    },
    {
        "id": "031c374423bc40b3a70f0a7da2d57e57",
        "total_amount": {
            "amount": "500",
            "currency": "USD"
        },
        "dollar_amount": "500",
        "status": "Successful",
        "payment_method": {
            "type": "ACH"
        },
        "payout_at": "2022-09-02T18:22:00.681Z",
        "createTimeISO": "09-02-2022 6:22PM",
        "created_at": "2022-09-02T18:22:00.681Z",
        "resource": "deposit",
        "fee": {
            "amount": "0",
            "currency": "USD"
        },
        "amount": {
            "amount": "500",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "500",
            "currency": "USD"
        },
        "loopStartTime": "2022-9-01",
        "loopEndTime": "2022-09-30",
        "timeAddedToArray": "2023-09-11T21:19:21.741Z",
        "platform": "binance",
        "transaction": {
            "orderId": "031c374423bc40b3a70f0a7da2d57e57",
            "paymentAccount": "58ecf29f-0898-4d89-a221-4af9a29c3ccd",
            "paymentChannel": "MODERNTREASURY",
            "paymentMethod": "ACH",
            "orderStatus": "Successful",
            "fiatCurrency": "USD",
            "amount": "500",
            "transactionFee": "0",
            "platformFee": "0",
            "createTime": 1662142920681
        }
    },
    {
        "id": "ef08495172a34c998380afedcdb4d464",
        "total_amount": {
            "amount": "500",
            "currency": "USD"
        },
        "dollar_amount": "500",
        "status": "Successful",
        "payment_method": {
            "type": "ACH"
        },
        "payout_at": "2022-09-16T17:17:24.683Z",
        "createTimeISO": "09-16-2022 5:17PM",
        "created_at": "2022-09-16T17:17:24.683Z",
        "resource": "deposit",
        "fee": {
            "amount": "0",
            "currency": "USD"
        },
        "amount": {
            "amount": "500",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "500",
            "currency": "USD"
        },
        "loopStartTime": "2022-9-01",
        "loopEndTime": "2022-09-30",
        "timeAddedToArray": "2023-09-11T21:19:21.741Z",
        "platform": "binance",
        "transaction": {
            "orderId": "ef08495172a34c998380afedcdb4d464",
            "paymentAccount": "58ecf29f-0898-4d89-a221-4af9a29c3ccd",
            "paymentChannel": "MODERNTREASURY",
            "paymentMethod": "ACH",
            "orderStatus": "Successful",
            "fiatCurrency": "USD",
            "amount": "500",
            "transactionFee": "0",
            "platformFee": "0",
            "createTime": 1663348644683
        }
    },
    {
        "id": "4d5b21ba88eb4627af964b4aad2dd44b",
        "total_amount": {
            "amount": "200",
            "currency": "USD"
        },
        "dollar_amount": "200",
        "status": "Successful",
        "payment_method": {
            "type": "ACH"
        },
        "payout_at": "2022-10-16T18:18:33.554Z",
        "createTimeISO": "10-16-2022 6:18PM",
        "created_at": "2022-10-16T18:18:33.554Z",
        "resource": "deposit",
        "fee": {
            "amount": "0",
            "currency": "USD"
        },
        "amount": {
            "amount": "200",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "200",
            "currency": "USD"
        },
        "loopStartTime": "2022-10-01",
        "loopEndTime": "2022-10-31",
        "timeAddedToArray": "2023-09-11T21:19:22.545Z",
        "platform": "binance",
        "transaction": {
            "orderId": "4d5b21ba88eb4627af964b4aad2dd44b",
            "paymentAccount": "58ecf29f-0898-4d89-a221-4af9a29c3ccd",
            "paymentChannel": "MODERNTREASURY",
            "paymentMethod": "ACH",
            "orderStatus": "Successful",
            "fiatCurrency": "USD",
            "amount": "200",
            "transactionFee": "0",
            "platformFee": "0",
            "createTime": 1665944313554
        }
    },
    {
        "id": "afbf5aa20e9447aabf60526434b8bf62",
        "total_amount": {
            "amount": "1000",
            "currency": "USD"
        },
        "dollar_amount": "1000",
        "status": "Successful",
        "payment_method": {
            "type": "ACH"
        },
        "payout_at": "2022-10-28T19:14:58.014Z",
        "createTimeISO": "10-28-2022 7:14PM",
        "created_at": "2022-10-28T19:14:58.014Z",
        "resource": "deposit",
        "fee": {
            "amount": "0",
            "currency": "USD"
        },
        "amount": {
            "amount": "1000",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "1000",
            "currency": "USD"
        },
        "loopStartTime": "2022-10-01",
        "loopEndTime": "2022-10-31",
        "timeAddedToArray": "2023-09-11T21:19:22.545Z",
        "platform": "binance",
        "transaction": {
            "orderId": "afbf5aa20e9447aabf60526434b8bf62",
            "paymentAccount": "58ecf29f-0898-4d89-a221-4af9a29c3ccd",
            "paymentChannel": "MODERNTREASURY",
            "paymentMethod": "ACH",
            "orderStatus": "Successful",
            "fiatCurrency": "USD",
            "amount": "1000",
            "transactionFee": "0",
            "platformFee": "0",
            "createTime": 1666984498014
        }
    },
    {
        "id": "a3253bdcc1314359a6614243abd85113",
        "total_amount": {
            "amount": "2950",
            "currency": "USD"
        },
        "dollar_amount": "2950",
        "status": "Withdraw Submitted",
        "payment_method": {
            "type": "ACH"
        },
        "payout_at": "2022-10-20T22:02:08.304Z",
        "createTimeISO": "10-20-2022 10:02PM",
        "created_at": "2022-10-20T22:02:08.304Z",
        "resource": "withdrawal",
        "fee": {
            "amount": "0",
            "currency": "USD"
        },
        "amount": {
            "amount": "2950",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "2950",
            "currency": "USD"
        },
        "loopStartTime": "2022-10-01",
        "loopEndTime": "2022-10-31",
        "timeAddedToArray": "2023-09-11T21:19:23.013Z",
        "platform": "binance",
        "transaction": {
            "orderId": "a3253bdcc1314359a6614243abd85113",
            "paymentAccount": "58ecf29f-0898-4d89-a221-4af9a29c3ccd",
            "paymentChannel": "MODERNTREASURY",
            "paymentMethod": "ACH",
            "orderStatus": "Withdraw Submitted",
            "fiatCurrency": "USD",
            "amount": "2950",
            "transactionFee": "0",
            "platformFee": "0",
            "createTime": 1666303328304
        }
    },
    {
        "id": "043185ed77a24fcbbc90286fb03aa8c7",
        "total_amount": {
            "amount": "300",
            "currency": "USD"
        },
        "dollar_amount": "300",
        "status": "Withdraw Submitted",
        "payment_method": {
            "type": "ACH"
        },
        "payout_at": "2022-11-11T19:27:09.589Z",
        "createTimeISO": "11-11-2022 7:27PM",
        "created_at": "2022-11-11T19:27:09.589Z",
        "resource": "withdrawal",
        "fee": {
            "amount": "0",
            "currency": "USD"
        },
        "amount": {
            "amount": "300",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "300",
            "currency": "USD"
        },
        "loopStartTime": "2022-11-01",
        "loopEndTime": "2022-11-30",
        "timeAddedToArray": "2023-09-11T21:19:23.827Z",
        "platform": "binance",
        "transaction": {
            "orderId": "043185ed77a24fcbbc90286fb03aa8c7",
            "paymentAccount": "58ecf29f-0898-4d89-a221-4af9a29c3ccd",
            "paymentChannel": "MODERNTREASURY",
            "paymentMethod": "ACH",
            "orderStatus": "Withdraw Submitted",
            "fiatCurrency": "USD",
            "amount": "300",
            "transactionFee": "0",
            "platformFee": "0",
            "createTime": 1668194829589
        }
    },
    {
        "id": "58b6a10f3a0e42c0ba6d369d74a0340b",
        "total_amount": {
            "amount": "200",
            "currency": "USD"
        },
        "dollar_amount": "200",
        "status": "Withdraw Submitted",
        "payment_method": {
            "type": "ACH"
        },
        "payout_at": "2022-11-14T14:55:43.178Z",
        "createTimeISO": "11-14-2022 2:55PM",
        "created_at": "2022-11-14T14:55:43.178Z",
        "resource": "withdrawal",
        "fee": {
            "amount": "0",
            "currency": "USD"
        },
        "amount": {
            "amount": "200",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "200",
            "currency": "USD"
        },
        "loopStartTime": "2022-11-01",
        "loopEndTime": "2022-11-30",
        "timeAddedToArray": "2023-09-11T21:19:23.827Z",
        "platform": "binance",
        "transaction": {
            "orderId": "58b6a10f3a0e42c0ba6d369d74a0340b",
            "paymentAccount": "58ecf29f-0898-4d89-a221-4af9a29c3ccd",
            "paymentChannel": "MODERNTREASURY",
            "paymentMethod": "ACH",
            "orderStatus": "Withdraw Submitted",
            "fiatCurrency": "USD",
            "amount": "200",
            "transactionFee": "0",
            "platformFee": "0",
            "createTime": 1668437743178
        }
    },
    {
        "id": "59da24e4dd4c4548b5cc957baf6ad33b",
        "total_amount": {
            "amount": "575.19",
            "currency": "USD"
        },
        "dollar_amount": "575.19",
        "status": "Withdraw Failed",
        "payment_method": {
            "type": "ACH"
        },
        "payout_at": "2022-11-16T14:37:01.501Z",
        "createTimeISO": "11-16-2022 2:37PM",
        "created_at": "2022-11-16T14:37:01.501Z",
        "resource": "withdrawal",
        "fee": {
            "amount": "0",
            "currency": "USD"
        },
        "amount": {
            "amount": "575.19",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "575.19",
            "currency": "USD"
        },
        "loopStartTime": "2022-11-01",
        "loopEndTime": "2022-11-30",
        "timeAddedToArray": "2023-09-11T21:19:23.827Z",
        "platform": "binance",
        "transaction": {
            "orderId": "59da24e4dd4c4548b5cc957baf6ad33b",
            "paymentAccount": "58ecf29f-0898-4d89-a221-4af9a29c3ccd",
            "paymentChannel": "MODERNTREASURY",
            "paymentMethod": "ACH",
            "orderStatus": "Withdraw Failed",
            "fiatCurrency": "USD",
            "amount": "575.19",
            "transactionFee": "0",
            "platformFee": "0",
            "createTime": 1668609421501
        }
    },
    {
        "id": "88c2194b94e048858cc7e39f441face0",
        "total_amount": {
            "amount": "575.19",
            "currency": "USD"
        },
        "dollar_amount": "575.19",
        "status": "Withdraw Submitted",
        "payment_method": {
            "type": "ACH"
        },
        "payout_at": "2022-11-16T17:26:30.106Z",
        "createTimeISO": "11-16-2022 5:26PM",
        "created_at": "2022-11-16T17:26:30.106Z",
        "resource": "withdrawal",
        "fee": {
            "amount": "0",
            "currency": "USD"
        },
        "amount": {
            "amount": "575.19",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "575.19",
            "currency": "USD"
        },
        "loopStartTime": "2022-11-01",
        "loopEndTime": "2022-11-30",
        "timeAddedToArray": "2023-09-11T21:19:23.827Z",
        "platform": "binance",
        "transaction": {
            "orderId": "88c2194b94e048858cc7e39f441face0",
            "paymentAccount": "58ecf29f-0898-4d89-a221-4af9a29c3ccd",
            "paymentChannel": "MODERNTREASURY",
            "paymentMethod": "ACH",
            "orderStatus": "Withdraw Submitted",
            "fiatCurrency": "USD",
            "amount": "575.19",
            "transactionFee": "0",
            "platformFee": "0",
            "createTime": 1668619590106
        }
    },
    {
        "id": "cef37e48-81ee-52d2-8d7c-e1aef5462f1e",
        "status": "completed",
        "transaction": {
            "id": "7ec75587-19e7-55d0-9320-7beb5761e21c",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/7ec75587-19e7-55d0-9320-7beb5761e21c"
        },
        "user_reference": "9FJJXFZU",
        "created_at": "2023-08-07T23:44:06Z",
        "updated_at": "2023-08-08T00:20:20Z",
        "resource": "deposit",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/deposits/cef37e48-81ee-52d2-8d7c-e1aef5462f1e",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2023-08-07T23:44:14Z",
        "instant": true,
        "fee": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "10.00",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "10.00",
            "currency": "USD"
        },
        "hold_until": null,
        "hold_days": 0,
        "instant_ach": {
            "is_total_instant": true
        },
        "idem": "6bcbe024-cc5f-4e1d-a71d-3bfa1d0134e3",
        "next_step": null,
        "total_amount": {
            "amount": "10.00",
            "currency": "USD"
        },
        "dollar_amount": "10.00",
        "platform": "coinbase"
    },
    {
        "id": "ef32337b-eee9-5923-8831-408df5ef8b20",
        "status": "completed",
        "transaction": {
            "id": "7340e7cb-156b-5f1b-a95c-2730b5c1d8ec",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/7340e7cb-156b-5f1b-a95c-2730b5c1d8ec"
        },
        "user_reference": "MTKH6CSA",
        "created_at": "2023-08-01T17:31:14Z",
        "updated_at": "2023-08-01T18:19:48Z",
        "resource": "deposit",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/deposits/ef32337b-eee9-5923-8831-408df5ef8b20",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2023-08-01T17:31:39Z",
        "instant": true,
        "fee": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "10.00",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "10.00",
            "currency": "USD"
        },
        "hold_until": null,
        "hold_days": 0,
        "instant_ach": {
            "is_total_instant": true
        },
        "idem": "ac198f5f-5d27-4618-b073-5ef911de6d9d",
        "next_step": null,
        "total_amount": {
            "amount": "10.00",
            "currency": "USD"
        },
        "dollar_amount": "10.00",
        "platform": "coinbase"
    },
    {
        "id": "5e0821ab-9f99-5aee-b2c6-8172cce2037f",
        "status": "completed",
        "transaction": {
            "id": "70b45af2-5692-5111-b782-2ee9e475283f",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/70b45af2-5692-5111-b782-2ee9e475283f"
        },
        "user_reference": "U4FQ6QWP",
        "created_at": "2017-12-26T18:43:20Z",
        "updated_at": "2017-12-26T19:03:52Z",
        "resource": "deposit",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/deposits/5e0821ab-9f99-5aee-b2c6-8172cce2037f",
        "committed": true,
        "payout_at": "2017-12-26T18:42:44Z",
        "instant": true,
        "fee": {
            "amount": "10.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "2500.00",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "2490.00",
            "currency": "USD"
        },
        "hold_until": null,
        "hold_days": 0,
        "next_step": null,
        "total_amount": {
            "amount": "2500.00",
            "currency": "USD"
        },
        "dollar_amount": "2500.00",
        "platform": "coinbase"
    },
    {
        "id": "b21ae1e8-e026-5c06-a6cc-5a284a1c4b1d",
        "status": "completed",
        "transaction": {
            "id": "00b4f81f-f5e8-599d-b468-91039568507e",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/00b4f81f-f5e8-599d-b468-91039568507e"
        },
        "user_reference": "L82HYS56",
        "created_at": "2017-11-21T14:07:45Z",
        "updated_at": "2017-11-28T14:07:50Z",
        "resource": "deposit",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/deposits/b21ae1e8-e026-5c06-a6cc-5a284a1c4b1d",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2017-11-29T14:07:45Z",
        "instant": false,
        "fee": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "250.00",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "250.00",
            "currency": "USD"
        },
        "hold_until": null,
        "hold_days": 0,
        "instant_ach": {
            "is_total_instant": true
        },
        "next_step": null,
        "total_amount": {
            "amount": "250.00",
            "currency": "USD"
        },
        "dollar_amount": "250.00",
        "platform": "coinbase"
    },
    {
        "id": "c4e5c748-d63e-5d0a-a26d-b33d496b173e",
        "status": "completed",
        "transaction": {
            "id": "a2df61c5-fee6-50d3-b05c-dc8240a0f95a",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/a2df61c5-fee6-50d3-b05c-dc8240a0f95a"
        },
        "user_reference": "5GB4WSXB",
        "created_at": "2022-12-15T20:29:32Z",
        "updated_at": "2022-12-19T20:29:37Z",
        "resource": "withdrawal",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/withdrawals/c4e5c748-d63e-5d0a-a26d-b33d496b173e",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2022-12-20T20:29:37Z",
        "instant": false,
        "fee": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "411.35",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "411.35",
            "currency": "USD"
        },
        "fee_explanation_url": "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees.html",
        "idem": "0231fafc-e4b6-43ea-b7a5-21503c751aa5",
        "next_step": null,
        "total_amount": {
            "amount": "411.35",
            "currency": "USD"
        },
        "dollar_amount": "411.35",
        "platform": "coinbase"
    },
    {
        "id": "fb32f227-4956-58f2-aecc-06771c2c4f85",
        "status": "completed",
        "transaction": {
            "id": "f71af46e-d11b-5699-a1a1-49dc38ccb73e",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/f71af46e-d11b-5699-a1a1-49dc38ccb73e"
        },
        "user_reference": "GZUVHREU",
        "created_at": "2022-10-21T15:56:11Z",
        "updated_at": "2022-10-21T15:56:48Z",
        "resource": "withdrawal",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/withdrawals/fb32f227-4956-58f2-aecc-06771c2c4f85",
        "committed": true,
        "payout_at": "2022-10-24T15:56:18Z",
        "instant": true,
        "fee": {
            "amount": "7.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "459.92",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "466.92",
            "currency": "USD"
        },
        "fee_explanation_url": "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees.html",
        "idem": "adfde570-19d0-4f3e-a448-ce21201d0982",
        "next_step": null,
        "total_amount": {
            "amount": "459.92",
            "currency": "USD"
        },
        "dollar_amount": "459.92",
        "platform": "coinbase"
    },
    {
        "id": "128395ea-5642-5f7a-90c2-c58eacaf4b08",
        "status": "completed",
        "transaction": {
            "id": "d5341d44-2acd-539c-87f5-8eb6954fbc76",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/d5341d44-2acd-539c-87f5-8eb6954fbc76"
        },
        "user_reference": "ANWP8F5K",
        "created_at": "2021-01-16T11:15:05Z",
        "updated_at": "2021-01-16T11:15:17Z",
        "resource": "withdrawal",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/withdrawals/128395ea-5642-5f7a-90c2-c58eacaf4b08",
        "payment_method": {
            "id": "97fad321-c970-50ba-a234-7614394421e2",
            "type": "worldpay_card",
            "name": "4342********0189",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2021-01-16T11:13:14Z",
            "updated_at": "2021-01-16T11:14:32Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/97fad321-c970-50ba-a234-7614394421e2",
            "limits": {
                "type": "card",
                "name": "Credit/Debit Card",
                "buy": [
                    {
                        "period_in_days": 7,
                        "total": {
                            "amount": "7500.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "7500.00",
                            "currency": "USD"
                        },
                        "description": "$7,500 of your $7,500 weekly card limit remaining",
                        "label": "Weekly card limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 7,
                        "total": {
                            "amount": "7500.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "7500.00",
                            "currency": "USD"
                        },
                        "description": "$7,500 of your $7,500 weekly card limit remaining",
                        "label": "Weekly card limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": false,
            "allow_withdraw": false,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2021-01-20T11:15:10Z",
        "instant": true,
        "fee": {
            "amount": "2.96",
            "currency": "USD"
        },
        "amount": {
            "amount": "194.05",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "197.01",
            "currency": "USD"
        },
        "fee_explanation_url": "https://help.coinbase.com/en/coinbase/getting-started/adding-a-payment-method/instant-withdrawal.html",
        "user_warnings": [
            {
                "id": "instant_withdrawal_warning",
                "message": "Transfer speed depends on your bank and could take up to 30 minutes.",
                "link": {
                    "text": "Learn more",
                    "url": "https://help.coinbase.com/en/coinbase/getting-started/adding-a-payment-method/instant-withdrawal.html"
                }
            }
        ],
        "idem": "b5236d35-dc39-4611-831c-4d5a68527c53",
        "next_step": null,
        "total_amount": {
            "amount": "194.05",
            "currency": "USD"
        },
        "dollar_amount": "194.05",
        "platform": "coinbase"
    },
    {
        "id": "c1dc2d01-0cf7-54a7-8fec-12da2d8ffbb0",
        "status": "completed",
        "transaction": {
            "id": "9d5e071f-2d3c-5b95-841d-273b3883db4a",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/9d5e071f-2d3c-5b95-841d-273b3883db4a"
        },
        "user_reference": "3JVJTM4Y",
        "created_at": "2020-07-23T22:44:41Z",
        "updated_at": "2020-07-27T22:44:49Z",
        "resource": "withdrawal",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/withdrawals/c1dc2d01-0cf7-54a7-8fec-12da2d8ffbb0",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2020-07-28T22:44:49Z",
        "instant": false,
        "fee": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "1477.65",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "1477.65",
            "currency": "USD"
        },
        "fee_explanation_url": "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees.html",
        "idem": "fc258480-4eb6-4d9b-97b6-790b6b616c0d",
        "next_step": null,
        "total_amount": {
            "amount": "1477.65",
            "currency": "USD"
        },
        "dollar_amount": "1477.65",
        "platform": "coinbase"
    },
    {
        "id": "cf4e509a-511e-506a-8d0e-8f291b2d1590",
        "status": "completed",
        "transaction": {
            "id": "2879f38a-0d81-51ec-883a-68b1fe162e72",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/2879f38a-0d81-51ec-883a-68b1fe162e72"
        },
        "user_reference": "HK9HXH7J",
        "created_at": "2020-02-13T00:21:19Z",
        "updated_at": "2020-02-15T00:22:02Z",
        "resource": "withdrawal",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/withdrawals/cf4e509a-511e-506a-8d0e-8f291b2d1590",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2020-02-16T00:21:24Z",
        "instant": false,
        "fee": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "675.67",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "675.67",
            "currency": "USD"
        },
        "fee_explanation_url": "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees.html",
        "idem": "ea08c582-bbf4-4f2c-9d7f-f7d289aba594",
        "next_step": null,
        "total_amount": {
            "amount": "675.67",
            "currency": "USD"
        },
        "dollar_amount": "675.67",
        "platform": "coinbase"
    },
    {
        "id": "8b74ac47-e9d5-5a1d-baa7-329161df1f24",
        "status": "completed",
        "transaction": {
            "id": "b597cc65-7c7a-588e-8293-ea2f279d6158",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/b597cc65-7c7a-588e-8293-ea2f279d6158"
        },
        "user_reference": "VSRRAXDH",
        "created_at": "2020-02-12T03:42:29Z",
        "updated_at": "2020-02-15T03:42:44Z",
        "resource": "withdrawal",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/withdrawals/8b74ac47-e9d5-5a1d-baa7-329161df1f24",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2020-02-16T03:42:34Z",
        "instant": false,
        "fee": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "577.80",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "577.80",
            "currency": "USD"
        },
        "fee_explanation_url": "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees.html",
        "idem": "07640563-097f-4f60-b553-07180df81997",
        "next_step": null,
        "total_amount": {
            "amount": "577.80",
            "currency": "USD"
        },
        "dollar_amount": "577.80",
        "platform": "coinbase"
    },
    {
        "id": "c8dff679-18e8-5659-880e-fa6a7ff5f48a",
        "status": "completed",
        "transaction": {
            "id": "cada3f10-e5cd-52c0-9643-f203302a12ad",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/cada3f10-e5cd-52c0-9643-f203302a12ad"
        },
        "user_reference": "VJG8R53A",
        "created_at": "2020-02-05T16:07:39Z",
        "updated_at": "2020-02-07T16:07:42Z",
        "resource": "withdrawal",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/withdrawals/c8dff679-18e8-5659-880e-fa6a7ff5f48a",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2020-02-08T16:07:41Z",
        "instant": false,
        "fee": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "189.50",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "189.50",
            "currency": "USD"
        },
        "fee_explanation_url": "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees.html",
        "idem": "4286ac32-50b4-44f3-ab16-1b9d4c8c6e49",
        "next_step": null,
        "total_amount": {
            "amount": "189.50",
            "currency": "USD"
        },
        "dollar_amount": "189.50",
        "platform": "coinbase"
    },
    {
        "id": "16012edf-4b99-54e0-84fc-cdf0ec5149bf",
        "status": "completed",
        "transaction": {
            "id": "39fd8587-9c9c-58bf-bb90-0d860164334a",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/39fd8587-9c9c-58bf-bb90-0d860164334a"
        },
        "user_reference": "P4HSRYRN",
        "created_at": "2019-10-01T11:59:56Z",
        "updated_at": "2019-10-03T12:00:01Z",
        "resource": "withdrawal",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/withdrawals/16012edf-4b99-54e0-84fc-cdf0ec5149bf",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2019-10-04T11:59:59Z",
        "instant": false,
        "fee": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "490.00",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "490.00",
            "currency": "USD"
        },
        "fee_explanation_url": "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees.html",
        "idem": "d8d754d4-d274-4b53-a43b-988f56a3a7d0",
        "next_step": null,
        "total_amount": {
            "amount": "490.00",
            "currency": "USD"
        },
        "dollar_amount": "490.00",
        "platform": "coinbase"
    },
    {
        "id": "7ccc448e-09a9-5659-81f4-392cdb61fa97",
        "status": "completed",
        "transaction": {
            "id": "4e1fc4fa-486b-5a1e-9baa-c08c4da5f6aa",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/4e1fc4fa-486b-5a1e-9baa-c08c4da5f6aa"
        },
        "user_reference": "YQBB3DYP",
        "created_at": "2019-09-12T02:16:22Z",
        "updated_at": "2019-09-17T02:16:50Z",
        "resource": "withdrawal",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/withdrawals/7ccc448e-09a9-5659-81f4-392cdb61fa97",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2019-09-18T02:16:46Z",
        "instant": false,
        "fee": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "2599.00",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "2599.00",
            "currency": "USD"
        },
        "fee_explanation_url": "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees.html",
        "next_step": null,
        "total_amount": {
            "amount": "2599.00",
            "currency": "USD"
        },
        "dollar_amount": "2599.00",
        "platform": "coinbase"
    },
    {
        "id": "190104b8-771b-57f6-bd70-83868f1f96ab",
        "status": "completed",
        "transaction": {
            "id": "d17b5bd7-d081-5b53-9ae2-081a51ef5903",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/d17b5bd7-d081-5b53-9ae2-081a51ef5903"
        },
        "user_reference": "8JVXBK7B",
        "created_at": "2019-07-19T15:37:36Z",
        "updated_at": "2019-07-23T15:37:41Z",
        "resource": "withdrawal",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/withdrawals/190104b8-771b-57f6-bd70-83868f1f96ab",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2019-07-24T15:37:38Z",
        "instant": false,
        "fee": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "93.53",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "93.53",
            "currency": "USD"
        },
        "fee_explanation_url": "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees.html",
        "next_step": null,
        "total_amount": {
            "amount": "93.53",
            "currency": "USD"
        },
        "dollar_amount": "93.53",
        "platform": "coinbase"
    },
    {
        "id": "c8dfc6da-35ff-5b34-a647-a26a6f8ac8c6",
        "status": "completed",
        "transaction": {
            "id": "38de9c69-3cd3-53d4-84e7-54d79e1ca2c8",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/38de9c69-3cd3-53d4-84e7-54d79e1ca2c8"
        },
        "user_reference": "KTWE9GJZ",
        "created_at": "2018-10-06T23:24:20Z",
        "updated_at": "2018-10-11T23:24:58Z",
        "resource": "withdrawal",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/withdrawals/c8dfc6da-35ff-5b34-a647-a26a6f8ac8c6",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2018-10-12T23:24:22Z",
        "instant": false,
        "fee": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "197.00",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "197.00",
            "currency": "USD"
        },
        "fee_explanation_url": "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees.html",
        "next_step": null,
        "total_amount": {
            "amount": "197.00",
            "currency": "USD"
        },
        "dollar_amount": "197.00",
        "platform": "coinbase"
    },
    {
        "id": "531209b1-54d0-587c-b0ce-3a537c08104f",
        "status": "completed",
        "transaction": {
            "id": "6bf06ba4-a4d9-5841-bf7c-aa8768061a35",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/6bf06ba4-a4d9-5841-bf7c-aa8768061a35"
        },
        "user_reference": "Q9GQPNWH",
        "created_at": "2018-09-18T15:04:56Z",
        "updated_at": "2018-09-20T15:05:05Z",
        "resource": "withdrawal",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/withdrawals/531209b1-54d0-587c-b0ce-3a537c08104f",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2018-09-21T15:05:00Z",
        "instant": false,
        "fee": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "45.00",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "45.00",
            "currency": "USD"
        },
        "fee_explanation_url": "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees.html",
        "next_step": null,
        "total_amount": {
            "amount": "45.00",
            "currency": "USD"
        },
        "dollar_amount": "45.00",
        "platform": "coinbase"
    },
    {
        "id": "1ed91e59-4f6a-569c-b352-13eee2d09213",
        "status": "completed",
        "transaction": {
            "id": "e50ba490-d5da-558a-97af-7aa36530d4d6",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/e50ba490-d5da-558a-97af-7aa36530d4d6"
        },
        "user_reference": "JDT44GYL",
        "created_at": "2018-09-17T16:43:15Z",
        "updated_at": "2018-09-19T16:43:34Z",
        "resource": "withdrawal",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/withdrawals/1ed91e59-4f6a-569c-b352-13eee2d09213",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2018-09-20T16:43:18Z",
        "instant": false,
        "fee": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "48.00",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "48.00",
            "currency": "USD"
        },
        "fee_explanation_url": "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees.html",
        "next_step": null,
        "total_amount": {
            "amount": "48.00",
            "currency": "USD"
        },
        "dollar_amount": "48.00",
        "platform": "coinbase"
    },
    {
        "id": "e3ae260c-cae7-5f2d-adb2-50f73c1b93ae",
        "status": "completed",
        "transaction": {
            "id": "449b4f18-58ee-58de-afa9-64597f7a5b28",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/449b4f18-58ee-58de-afa9-64597f7a5b28"
        },
        "user_reference": "5JLXVVLB",
        "created_at": "2018-09-05T15:22:45Z",
        "updated_at": "2018-09-07T15:23:12Z",
        "resource": "withdrawal",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/withdrawals/e3ae260c-cae7-5f2d-adb2-50f73c1b93ae",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2018-09-08T15:22:48Z",
        "instant": false,
        "fee": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "80.00",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "80.00",
            "currency": "USD"
        },
        "fee_explanation_url": "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees.html",
        "next_step": null,
        "total_amount": {
            "amount": "80.00",
            "currency": "USD"
        },
        "dollar_amount": "80.00",
        "platform": "coinbase"
    },
    {
        "id": "2825ba99-55c4-5dd8-840e-262c2470626c",
        "status": "completed",
        "transaction": {
            "id": "c88470c0-49df-5628-8d67-bf48ef672126",
            "resource": "transaction",
            "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/transactions/c88470c0-49df-5628-8d67-bf48ef672126"
        },
        "user_reference": "FCAQL9LR",
        "created_at": "2018-08-28T14:32:41Z",
        "updated_at": "2018-08-30T14:32:59Z",
        "resource": "withdrawal",
        "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf/withdrawals/2825ba99-55c4-5dd8-840e-262c2470626c",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2018-08-31T14:32:47Z",
        "instant": false,
        "fee": {
            "amount": "0.00",
            "currency": "USD"
        },
        "amount": {
            "amount": "500.00",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "500.00",
            "currency": "USD"
        },
        "fee_explanation_url": "https://help.coinbase.com/en/coinbase/trading-and-funding/pricing-and-fees/fees.html",
        "next_step": null,
        "total_amount": {
            "amount": "500.00",
            "currency": "USD"
        },
        "dollar_amount": "500.00",
        "platform": "coinbase"
    },
    {
        "id": "54e26e9e-854d-5a36-bc78-9fa3d3a10441",
        "status": "completed",
        "transaction": {
            "id": "e3e488b9-6a7f-53f6-99a7-b1857875c103",
            "resource": "transaction",
            "resource_path": "/v2/accounts/d231cdb2-7299-5d0b-8b7b-a78e72e14c9c/transactions/e3e488b9-6a7f-53f6-99a7-b1857875c103"
        },
        "user_reference": "YF7E89TU",
        "created_at": "2023-08-01T17:30:03Z",
        "updated_at": "2023-08-01T18:21:14Z",
        "resource": "buy",
        "resource_path": "/v2/accounts/d231cdb2-7299-5d0b-8b7b-a78e72e14c9c/buys/54e26e9e-854d-5a36-bc78-9fa3d3a10441",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2023-08-01T17:30:02Z",
        "instant": true,
        "fee": {
            "amount": "1.99",
            "currency": "USD"
        },
        "amount": {
            "amount": "0.00095803",
            "currency": "BTC"
        },
        "total": {
            "amount": "30.00",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "28.01",
            "currency": "USD"
        },
        "unit_price": {
            "amount": "29237.08",
            "currency": "USD",
            "scale": 2
        },
        "hold_until": null,
        "hold_days": 0,
        "idem": "7c555762-dc84-4174-b3da-a99fc2abcabe",
        "next_step": null,
        "is_first_buy": false,
        "requires_completion_step": false,
        "total_amount": {
            "amount": "0.00095803",
            "currency": "BTC"
        },
        "dollar_amount": "30.00",
        "platform": "coinbase"
    },
    {
        "id": "5a362c90-84f2-407a-a6e1-82af789c362b",
        "status": "completed",
        "transaction": {
            "id": "f7c174fe-f88d-56a8-9277-f1cfe46f744d",
            "resource": "transaction",
            "resource_path": "/v2/accounts/bc18f892-6cfa-527e-8a75-0cdfb4f73ade/transactions/f7c174fe-f88d-56a8-9277-f1cfe46f744d"
        },
        "user_reference": "W9NUB6U5YS",
        "created_at": "2023-08-01T17:33:14Z",
        "updated_at": "2023-08-02T02:10:48Z",
        "resource": "buy",
        "resource_path": "/v2/accounts/bc18f892-6cfa-527e-8a75-0cdfb4f73ade/buys/5a362c90-84f2-407a-a6e1-82af789c362b",
        "payment_method": {
            "id": "d02e30fd-4cd3-58d6-962e-29623a9ca360",
            "type": "fiat_account",
            "name": "Cash (USD)",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": true,
            "instant_buy": true,
            "instant_sell": true,
            "created_at": "2017-11-21T06:01:34Z",
            "updated_at": "2022-10-21T15:54:59Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/d02e30fd-4cd3-58d6-962e-29623a9ca360",
            "limits": {
                "type": "fiat_account",
                "name": "Coinbase Account"
            },
            "allow_buy": true,
            "allow_sell": true,
            "allow_deposit": false,
            "allow_withdraw": false,
            "fiat_account": {
                "id": "960abecb-650c-592d-836f-347f502d3ccf",
                "resource": "account",
                "resource_path": "/v2/accounts/960abecb-650c-592d-836f-347f502d3ccf"
            },
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2023-08-01T17:33:14Z",
        "instant": true,
        "fee": {
            "amount": "0.99",
            "currency": "USD"
        },
        "amount": {
            "amount": "1.018719",
            "currency": "ATOM"
        },
        "total": {
            "amount": "10.00",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "9.01",
            "currency": "USD"
        },
        "unit_price": {
            "amount": "8.84",
            "currency": "USD",
            "scale": 2
        },
        "hold_until": null,
        "hold_days": 0,
        "idem": "5a362c90-84f2-407a-a6e1-82af789c362b",
        "next_step": null,
        "is_first_buy": false,
        "requires_completion_step": false,
        "total_amount": {
            "amount": "1.018719",
            "currency": "ATOM"
        },
        "dollar_amount": "10.00",
        "platform": "coinbase"
    },
    {
        "id": "d0c8c03c-833d-5649-980b-d9237c6daa37",
        "status": "completed",
        "transaction": {
            "id": "58dfa323-ddf3-5987-a7df-5c2608586c3d",
            "resource": "transaction",
            "resource_path": "/v2/accounts/ecdcf709-abb5-5a14-9657-9c10a73d9666/transactions/58dfa323-ddf3-5987-a7df-5c2608586c3d"
        },
        "user_reference": "CGEWYJZD",
        "created_at": "2023-08-01T17:36:56Z",
        "updated_at": "2023-08-01T17:37:22Z",
        "resource": "buy",
        "resource_path": "/v2/accounts/ecdcf709-abb5-5a14-9657-9c10a73d9666/buys/d0c8c03c-833d-5649-980b-d9237c6daa37",
        "payment_method": {
            "id": "009d2001-c6e2-5f55-867c-b218bbf433ba",
            "type": "apple_pay",
            "name": "Apple Pay",
            "currency": "USD",
            "primary_buy": true,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2021-09-02T18:13:50Z",
            "updated_at": "2021-10-27T22:04:47Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/009d2001-c6e2-5f55-867c-b218bbf433ba",
            "limits": {
                "type": "apple_pay",
                "name": "Apple Pay",
                "buy": [
                    {
                        "period_in_days": 7,
                        "total": {
                            "amount": "7500.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "7500.00",
                            "currency": "USD"
                        },
                        "description": "$7,500 of your $7,500 weekly Apple Pay limit limit remaining",
                        "label": "translation missing: en.presenters.payment_methods.limits.apple_pay.period_label",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 7,
                        "total": {
                            "amount": "7500.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "7500.00",
                            "currency": "USD"
                        },
                        "description": "$7,500 of your $7,500 weekly Apple Pay limit limit remaining",
                        "label": "translation missing: en.presenters.payment_methods.limits.apple_pay.period_label"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": false,
            "allow_withdraw": false,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2023-08-01T17:36:55Z",
        "instant": true,
        "fee": {
            "amount": "0.99",
            "currency": "USD"
        },
        "amount": {
            "amount": "13.024606",
            "currency": "ADA"
        },
        "total": {
            "amount": "5.00",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "4.01",
            "currency": "USD"
        },
        "unit_price": {
            "amount": "0.3079",
            "currency": "USD",
            "scale": 4
        },
        "hold_until": null,
        "hold_days": 0,
        "idem": "9d607f57-1200-4d10-82c9-56b1da62661e",
        "next_step": null,
        "is_first_buy": false,
        "requires_completion_step": false,
        "total_amount": {
            "amount": "13.024606",
            "currency": "ADA"
        },
        "dollar_amount": "5.00",
        "platform": "coinbase"
    },
    {
        "id": "4712d649-7d76-5113-aca8-ba007ae5cccf",
        "status": "completed",
        "transaction": {
            "id": "8fac29b7-d026-5730-9868-5537933e1ed8",
            "resource": "transaction",
            "resource_path": "/v2/accounts/2d2601e4-df83-53c3-aa75-97000d62e5dc/transactions/8fac29b7-d026-5730-9868-5537933e1ed8"
        },
        "user_reference": "6JC9UBPQ",
        "created_at": "2023-07-11T23:10:17Z",
        "updated_at": "2023-07-11T23:50:18Z",
        "resource": "buy",
        "resource_path": "/v2/accounts/2d2601e4-df83-53c3-aa75-97000d62e5dc/buys/4712d649-7d76-5113-aca8-ba007ae5cccf",
        "payment_method": {
            "id": "752cd9d7-bea1-5926-bcd2-0443a5039845",
            "type": "ach_bank_account",
            "name": "Wells Fargo - WAY2SAVE... ******9333",
            "currency": "USD",
            "primary_buy": false,
            "primary_sell": false,
            "instant_buy": true,
            "instant_sell": false,
            "created_at": "2017-11-10T10:32:07Z",
            "updated_at": "2023-08-07T23:44:20Z",
            "resource": "payment_method",
            "resource_path": "/v2/payment-methods/752cd9d7-bea1-5926-bcd2-0443a5039845",
            "limits": {
                "type": "bank",
                "name": "Bank Account",
                "buy": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit",
                        "next_requirement": null
                    }
                ],
                "deposit": [
                    {
                        "period_in_days": 1,
                        "total": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "remaining": {
                            "amount": "35000.00",
                            "currency": "USD"
                        },
                        "description": "$35,000 of your $35,000 daily bank limit remaining",
                        "label": "Daily bank limit"
                    }
                ]
            },
            "allow_buy": true,
            "allow_sell": false,
            "allow_deposit": true,
            "allow_withdraw": true,
            "verified": true,
            "minimum_purchase_amount": {
                "amount": "1.00",
                "currency": "USD"
            }
        },
        "committed": true,
        "payout_at": "2023-07-11T23:10:17Z",
        "instant": true,
        "fee": {
            "amount": "3.72",
            "currency": "USD"
        },
        "amount": {
            "amount": "11.245701018",
            "currency": "SOL"
        },
        "total": {
            "amount": "253.67",
            "currency": "USD"
        },
        "subtotal": {
            "amount": "249.95",
            "currency": "USD"
        },
        "unit_price": {
            "amount": "22.23",
            "currency": "USD",
            "scale": 2
        },
        "hold_until": null,
        "hold_days": 0,
        "idem": "6e67350d-2f40-4753-b23a-cef6ec3e2165",
        "next_step": null,
        "is_first_buy": false,
        "requires_completion_step": false,
        "total_amount": {
            "amount": "11.245701018",
            "currency": "SOL"
        },
        "dollar_amount": "253.67",
        "platform": "coinbase"
    }
]





}




/*
HOW TO CALCULATE VALUE OF LP PAIR
- EXAMPLE: WMATIC-WETH
1. FIND PRICE OF TOKEN1 AND TOKEN2 IN USD
2. TOKEN1 * TOKEN2
    - WMATIC * WETH = PAIR
    - $1.5 * $300 = $450
3. SO, 1 WMATIC-WETH PAIR IN IS WORTH $450




*/

