export const quranStorageConfig = {
    contractABI : [
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_ayat",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_ayatNumber",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_surah",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_para",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_ruku",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_details",
                    "type": "string"
                }
            ],
            "name": "append",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_password",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_ayatNumber",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_surah",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_para",
                    "type": "uint256"
                }
            ],
            "name": "appended",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_pass",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_ayat",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_ayatNumber",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_ruku",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_details",
                    "type": "string"
                }
            ],
            "name": "update",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_ayatNumber",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_surah",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "_para",
                    "type": "uint256"
                }
            ],
            "name": "updated",
            "type": "event"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "count",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_index",
                    "type": "uint256"
                }
            ],
            "name": "get",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "index",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "ayat",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "ayatNumber",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "surah",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "para",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "ruku",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "details",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct QuranStorageInterface.AyatStruct",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_para",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_ayatNumber",
                    "type": "uint256"
                }
            ],
            "name": "getByPara",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "index",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "ayat",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "ayatNumber",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "surah",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "para",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "ruku",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "details",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct QuranStorageInterface.AyatStruct",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_surah",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "_ayatNumber",
                    "type": "uint256"
                }
            ],
            "name": "getBySurah",
            "outputs": [
                {
                    "components": [
                        {
                            "internalType": "uint256",
                            "name": "index",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "ayat",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "ayatNumber",
                            "type": "string"
                        },
                        {
                            "internalType": "string",
                            "name": "surah",
                            "type": "string"
                        },
                        {
                            "internalType": "uint256",
                            "name": "para",
                            "type": "uint256"
                        },
                        {
                            "internalType": "uint256",
                            "name": "ruku",
                            "type": "uint256"
                        },
                        {
                            "internalType": "string",
                            "name": "details",
                            "type": "string"
                        }
                    ],
                    "internalType": "struct QuranStorageInterface.AyatStruct",
                    "name": "",
                    "type": "tuple"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
}