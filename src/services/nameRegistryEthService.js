import { ethConfig } from '../config/eth';
import { nameRegistryConfig } from '../config/nameRegistryContract';
const W3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;


const web3 = new W3(new W3.providers.HttpProvider(ethConfig.provider));

//Default Account
web3.eth.defaultAccount = ethConfig.defaultAccount;

//smart contract address
const contractAddress = nameRegistryConfig.contractAddress;

//Default Account Private Key
const defaultPrivateKey = ethConfig.defaultAccountPrivateKey;

//initialinze Nid SmartContract in NidContract variable 
const nameRegistryContract = new web3.eth.Contract(nameRegistryConfig.contractABI, contractAddress, {
    // from: web3.eth.defaultAccount, // default from address
    // gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
});

export const getContracts = async () => {
    let data = await nameRegistryContract.methods.getContracts().call();
    return data;
}

export const getContractDetails = async (name) => {
    let data = await nameRegistryContract.methods.getContractDetails(name).call();
    return data;
}