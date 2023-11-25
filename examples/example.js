// WARNING: Do NOT run this file directly. Instead, copy the code from one of the two examples below

// Example 1: This script creates a genesis block (the first block in the blockchain, the blockchain cannot function without this block.) and saves it to the database.
// It also generates a wallet. Make sure to save the private key that gets logged in the console! This will be useful for testing code later on.
// Note: This script is intended to be run only once when a blockchain is created. It will be saved to a local database so there is no need to run it again unless you are intending to create an entirely new blockchain.

//import libraries
const {Blockchain, Transaction} = require('../src/blockchain');
const ec = require('..src/keygenerator');

//create a new blockchain
const myChain = new Blockchain();
myChain.init();

//generate wallet
const myKey = ec.genKeyPair();
console.log('Public key:', myKey.getPublic('hex'));
console.log('Private key:', myKey.getPrivate('hex'));

//save blockchain
myChain.save();



// Example 2: This script will load the blockchain, mine a new block and calculate your wallet's balance. It is not stored directly, so it has to be calculated.
// After you mine a new block, you will be rewarded for it. The default reward is 100 coins.
// Note: replace PRIVATE KEY with the private key you got from the first script. (ignore the errors they will go away once you move the script to a separate file)

//load libraries
const {Blockchain, Transaction} = require('../src/blockchain');
const ec = require('..src/keygenerator');

//load the blockchain
const myChain = new Blockchain();
myChain.load();

//generate a keypair from the private key (this will make a keypair which contains the private key as well as the public key. The public key is used as the wallet address.)
const myKey = ec.keyFromPrivate("PRIVATE KEY", "hex");

//mine a new block with the pending transactions. Once you mine a block, the transactions will be registered. Then log your balance, and save the chain.
myChain.minePendingTransactions(myKey.getPublic('hex'));
console.log(myChain.getBalanceOfAddress(myKey.getPublic('hex')));
myChain.save();