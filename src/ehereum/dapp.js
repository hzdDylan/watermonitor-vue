
const first_contract_json = require( '/build/contracts/FirstContract.json' );

// 引入Web3
import Web3 from 'web3'
import axios from 'axios'

// 智能合约地址
let contractAddress = null;
// 智能合约ABI
// let contractABI = [];
// 智能合约
let contracts = {};
// let web3Provider = null;
// web3对象
let web3 = {};
// 账户
let account = null;

/* //来自CSDN
function Init(callback) {
    \//检测当前浏览器是否以太坊兼容，并进行相应的处理
    if (typeof window.ethereum === 'undefined') {
    alert('Looks like you need a Dapp browser to get started.')
    alert('Consider installing MetaMask!')

    } else {

    //如果用户安装了MetaMask，你可以要求他们授权应用登录并获取其账号
    ethereum.enable()

    //如果用户拒绝了登录请求
    .catch(function (reason) {
        if (reason === 'User rejected provider access') {
        // 用户不想登录，你看该怎么办？
        } else {
        // 本不该执行到这里，但是真到这里了，说明发生了意外
        alert('There was an issue signing you in.')
        }
    })

    //如果用户同意了登录请求，你就可以拿到用户的账号
    .then(function (accounts) {
        // You also should verify the user is on the correct network:
        //你也可以验证用户接入了正确的网络
        if (ethereum.networkVersion !== desiredNetwork) {
        alert('This application requires the main network, please switch it in your MetaMask UI.')

        //我们计划在最近补充一个有关网络切换的API，参考下面链接
        // https://github.com/MetaMask/metamask-extension/issues/3663
        }

        //一旦获取了用户账号，你就可以签名交易
        const account = accounts[0]
        sendEtherFrom(account, function (err, transaction) {
        if (err) {
            return alert(`Sorry you weren't able to contribute!`)
        }

        alert('Thanks for your successful contribution!')
        })

    })
    }

}*/

async function Init() {
    let web3Provider;
    if(window.ethereum) {
        web3Provider = window.ethereum;
        try {
            // Request account access
            await window.ethereum.request({ method: "eth_requestAccounts" });;
        } catch (error) {
        // User denied account access...
        console.error("User denied account access")
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        web3Provider = window.web3.currentProvider;
    }
    // If no injected web3 instance is detected, fall back to Ganache
    else {
        web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    web3 = new Web3(web3Provider);

    // if (!Web3.givenProvider) {
    //     console.log( '请确保您的浏览器已经安装了MetaMask插件' );
    //     return;
    // }
    // web3 = new Web3( Web3.givenProvider );
    listening_web3();
    console.log( 'web3', web3 );
    // 获取账户
    await web3.eth.getCoinbase((err, res) => {
        console.log("coinbase", res)
        account = res;
    });
    // transfer();
    
    
    axios.get('FirstContract.json').catch(err => {
        console.log(err)
    }).then(res => {
        // console.log(ABI)
        // console.log(first_contract_json)
        const AdoptionArtifact = res.data.abi;
        contracts.FirstContract = new web3.eth.Contract(AdoptionArtifact, "0x3c79ee79edfb7B1EF4FeA30A84F0ceFa71076584");
        contracts.FirstContract.setProvider(web3Provider);
        console.log(contracts.FirstContract)
        // 调用solidity合约的只读方法，并在EVM中直接执行方法，不需要发送任何交易。因此不会改变合约的状态。
        contracts.FirstContract.methods.getInfo().call().then( ( result ) => {
            console.log( 'get已经执行了' );
            console.log( result );
        });

        // 向solidity合约发送交易来执行指定方法，将改变合约的状态(必须输入发送交易的账户地址,需要消耗gas)
        contracts.FirstContract.methods.setInfo( 'kirin2019', 18 ).send({
            from: account,
            gas: 10000000
        }).then( ( result ) => {
            console.log( 'set已经执行了' );
            console.log( 'setInfo返回对象:', result );
        } );
    })
    
}

function listening_web3 () {
    web3.eth.net.isListening().then( ( result ) => {
        console.log( '您正在监听网络：', result );
    } );
    web3.eth.net.getId().then( ( result ) => {
        console.log( '您当前网络ID：', result );
    } );
}

function transfer () {
    // let web3 = new Web3(window.web3.currentProvider)
    let fromAddress = account;
    //转账数量
    let amount = 1*Math.pow(10,12);
    //收款地址
    let toAddress = "0x95c3F866343EbFfB8bED8Dd66Ff580078E53C320";
    // web3.eth.sendTransaction({
    //     gas: 21000,
    //     gasPrice: 5000000000,
    //     from: fromAddress,
    //     to: toAddress,
    //     value: amount
    // }, (err, result) => {
    //     console.log("转账Hash=",result)
    // })
    web3.eth.accounts.signTransaction({
        to: toAddress,
        data: "0x7f7465737432000000000000000000000000000000000000000000000000000000600057",
        value: amount,
        gas: 2000000,
    }, "cc05c998e66dd7985bd8af708e69fe05ad331c601aa7888674f70cdae108ea85").then((signdata) => {
        console.log(signdata.rawTransaction);
        // 下方函数可用，效果：无需metamask确认就可发送交易
        // web3.eth.sendSignedTransaction(signdata.rawTransaction);
    })
}


export default Init;