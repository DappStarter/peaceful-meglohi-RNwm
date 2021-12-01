require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea climb flee skull guard render remember protect guess gloom sure spy'; 
let testAccounts = [
"0x060ae40964b16f4a8e4a43c8966339e67156cff7958b9ad51a520ac3f6e9e800",
"0x05a9a4485b5567e5e6dc62df96a676feb6fed26352cd316fdcd8ab1c3cc6c484",
"0x33dfc0d4cc66e4d86ab63eaa4a394836fe4b24d3e7db5eb100d95cf4201e0f36",
"0x76fe0a97e77bd74873c72261dc9e3812405d70d70bf1d409f456187d05dc9c21",
"0x8b63cc33e2702acf4faa748b264c18674c9f91be59e13870921fd3d99716d947",
"0xbcadc0e5dd37cd6dd1e47fff5de1d3dbd4bbfdfc1521b3cc94c6649d416fd240",
"0x8063f5ac90124e90db32c131f40f0e92913a8c5230d8f6c9d25630a25368d38f",
"0xaeda0e107d62cf834058caacfe0b2af062d68e47d103f97428f4cda0192f0047",
"0x52adcd07e841bb9b7e79c2155bd3455628c14e1b52fb412159ef89c196742d76",
"0x9e7733b7e19442720bd9bbd455fddd57b0c52ea55bac8181096fc585655d2571"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

