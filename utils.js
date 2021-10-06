const HDWalletProvider = require('@truffle/hdwallet-provider')
const ERC1155Abi = require('./erc1155.json')
const Web3 = require('web3')

class Connect {
  constructor(publicKey, privateKey, contractsAddress, rpc) {
    this.provider = new HDWalletProvider(privateKey, rpc)
    this.web3 = new Web3(this.provider)
    this.instance = new this.web3.eth.Contract(ERC1155Abi, contractsAddress)
    this.options = { from: publicKey }
  }

  balanceOf = (wallet, tokenId) =>
    this.instance.methods.balanceOf(wallet, tokenId).call()

  balanceOfBatch = (wallet, tokenId) =>
    this.instance.methods.balanceOfBatch(wallet, tokenId).call()

  create = (tokenId, _tokenURI) =>
    this.instance.methods.create(tokenId, _tokenURI).send(this.options)
}

module.exports = Connect
