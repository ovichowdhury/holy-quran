import { ethConfig } from '../config/eth';
import { setGetConfig } from '../config/setGetContract';
const W3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;



const web3 = new W3(new W3.providers.HttpProvider(ethConfig.provider));

//Default Account
web3.eth.defaultAccount = ethConfig.defaultAccount;

//smart contract address
const contractAddress = setGetConfig.contractAddress;

//Default Account Private Key
const defaultPrivateKey = ethConfig.defaultAccountPrivateKey;

//initialinze Nid SmartContract in NidContract variable 
const setGetContract = new web3.eth.Contract(setGetConfig.contractABI, contractAddress, {
    from: web3.eth.defaultAccount, // default from address
    gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});

export const getData = async () => {
    let data = await setGetContract.methods.getData().call();
    return data;
}

export const setData = async () => {
    return new Promise( async (resolve, reject) => {
        let privateKey = new Buffer(defaultPrivateKey, "hex");
        let nonce = await web3.eth.getTransactionCount(web3.eth.defaultAccount);
        let latestBlock = await web3.eth.getBlock("latest");
        let latestBlockGasLimit = latestBlock.gasLimit;
        console.log(latestBlockGasLimit);

        var rawTransaction = {
            "from": web3.eth.defaultAccount,
            "gasPrice": web3.utils.toHex(30 * 1e9),
            "gasLimit": web3.utils.toHex(latestBlockGasLimit - 10000),
            "to": contractAddress,
            "value": "0x0",
            "data": setGetContract.methods.setData("This is from React").encodeABI(),
            "nonce": web3.utils.toHex(nonce)
        };

        var transaction = new Tx(rawTransaction, { chain: 'rinkeby', hardfork: 'petersburg' });

        transaction.sign(privateKey);

        console.log("Signing complete...")


        web3.eth.sendSignedTransaction('0x' + transaction.serialize().toString('hex'), (err, txHash) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            else {
                resolve(txHash);
            }
        });
    })

}