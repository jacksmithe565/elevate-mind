/* 
   fileName: complexCode.js
   content: This code demonstrates a complex implementation of a blockchain-based marketplace where users can buy and sell digital assets using cryptocurrency.
*/

// Import necessary modules
const crypto = require("crypto");

// Define Blockchain class
class Blockchain {
  constructor() {
    this.chain = [];
    this.pendingTransactions = [];
    this.difficulty = 4;
    this.miningReward = 100;
  }

  createGenesisBlock() {
    const genesisBlock = new Block(Date.now(), [], "0");
    this.chain.push(genesisBlock);
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  minePendingTransactions(miningRewardAddress) {
    const rewardTx = new Transaction(
      null,
      miningRewardAddress,
      this.miningReward
    );
    this.pendingTransactions.push(rewardTx);

    const block = new Block(
      Date.now(),
      this.pendingTransactions,
      this.getLastBlock().hash
    );
    block.mineBlock(this.difficulty);

    console.log("Block successfully mined!");
    this.chain.push(block);

    this.pendingTransactions = [];
  }

  createTransaction(transaction) {
    this.pendingTransactions.push(transaction);
  }

  getBalanceOfAddress(address) {
    let balance = 0;
    for (const block of this.chain) {
      for (const transaction of block.transactions) {
        if (transaction.fromAddress === address) {
          balance -= transaction.amount;
        }

        if (transaction.toAddress === address) {
          balance += transaction.amount;
        }
      }
    }
    return balance;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }

    return true;
  }
}

// Define Block class
class Block {
  constructor(timestamp, transactions, previousHash = "") {
    this.timestamp = timestamp;
    this.transactions = transactions;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const data = JSON.stringify(this.transactions) + this.previousHash + this.timestamp + this.nonce;
    return crypto.createHmac("sha256", "secret")
      .update(data)
      .digest("hex");
  }

  mineBlock(difficulty) {
    const target = Array(difficulty + 1).join("0");
    while (this.hash.substring(0, difficulty) !== target) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    console.log(`Block mined: ${this.hash}`);
  }
}

// Define Transaction class
class Transaction {
  constructor(fromAddress, toAddress, amount) {
    this.fromAddress = fromAddress;
    this.toAddress = toAddress;
    this.amount = amount;
  }
}

// Create blockchain instance
const myBlockchain = new Blockchain();

// Create genesis block
myBlockchain.createGenesisBlock();

// Create transactions
const tx1 = new Transaction("address1", "address2", 100);
const tx2 = new Transaction("address2", "address1", 50);
const tx3 = new Transaction("address1", "address3", 200);

// Add transactions to pending transactions
myBlockchain.createTransaction(tx1);
myBlockchain.createTransaction(tx2);
myBlockchain.createTransaction(tx3);

// Mine pending transactions
myBlockchain.minePendingTransactions("minerAddress");

// Get balance of an address
console.log(`Balance of address1 is ${myBlockchain.getBalanceOfAddress("address1")}`);

// Check if blockchain is valid
console.log(`Is blockchain valid? ${myBlockchain.isChainValid()}`);