var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "submit gift prize aim fancy capital dawn shell injury sort alien panda";
var NonceTrackerSubprovider = require("web3-provider-engine/subproviders/nonce-tracker")

module.exports = {
    networks: {

        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*" // Match any network id
        },
        // rinkeby: {
        //     provider: function() {
        //         var wallet = new HDWalletProvider(mnemonic, ENDPOINT);
        //         var nonceTracker = new NonceTrackerSubprovider()
        //         wallet.engine._providers.unshift(nonceTracker)
        //         nonceTracker.setEngine(wallet.engine)
        //         return wallet
        //     },
        //     network_id: '4'
        // }
    },
    compilers: {
        solc: {
            version: "^0.4.24"
        }
    }
};