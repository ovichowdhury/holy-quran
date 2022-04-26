import { ethConfig } from '../config/eth';
import { quranStorageConfig } from '../config/quranStorageContract';
const W3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;


const web3 = new W3(new W3.providers.HttpProvider(ethConfig.provider));

//Default Account
web3.eth.defaultAccount = ethConfig.defaultAccount;

export class QuranStorageService {
    contracts = [];

    constructor(contractDetails) {
        for (let i = 0; i < contractDetails.length; i++) {
            const quranStorageContract = new web3.eth.Contract(quranStorageConfig.contractABI, contractDetails[i][0], {
                // from: web3.eth.defaultAccount, // default from address
                // gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
            });

            this.contracts.push(quranStorageContract);
        }
    }

    async getBySurah(surahName, ayatNumber) {
        let result = [];
        for (let i = 0; i < this.contracts.length; i++) {
            let data = await this.contracts[i].methods.getBySurah(surahName, ayatNumber).call();
            result.push(data);
        }
        return result;
    }

    async getByPara(para, ayatNumber) {
        let result = [];
        for (let i = 0; i < this.contracts.length; i++) {
            let data = await this.contracts[i].methods.getByPara(para, ayatNumber).call();
            result.push(data);
        }
        return result;
    }

    async getByIndex(index) {
        let result = [];
        for (let i = 0; i < this.contracts.length; i++) {
            let data = await this.contracts[i].methods.get(index).call();
            result.push(data);
        }
        return result;
    }
}