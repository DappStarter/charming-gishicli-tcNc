require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drink frame suspect notice crime remain unfold inflict drive flee supply'; 
let testAccounts = [
"0x8f9bb91ef0558419a6dddd5ad916d101acbd70bc1497f5dae76d9f97a1e590ad",
"0x1710539feb3a11034590aa014f593e07fbdfd8de5203261547aa193b69c02148",
"0x7fcd33672f5aff702e83a42d60d727e0a227af04b15bd5d120163b6c3b1de330",
"0xeedc050cfd880401d985b6c5d7dc754d11eab198762f8cb46c3d5ddc85ea1de2",
"0x8efafca80a6fab6eaa3a69e9e9bc965fd09b3de1b178d970cdbea60c52ef623a",
"0x1a57e2b390268b74c53dcf502045df090bebcdcccf017439b1213b55a8c49384",
"0x63c5cbcec14d2529979931c3df95ae85107610c56be1d066e87298659bb3a90f",
"0x9d437990fecdf744a516bdaca47cc65bab04e9b55aac4af7623d0d4d6198017d",
"0x47660aeec236c85560dd572ada1d0390d485f6376b47c6529ffb1781ff66700b",
"0x9227857a2f12dafcc7767a2941144b5a658dcf92a012519e37878f58cbb60756"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

