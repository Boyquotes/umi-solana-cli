"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var umi_bundle_defaults_1 = require("@metaplex-foundation/umi-bundle-defaults");
var umi_1 = require("@metaplex-foundation/umi");
var fs = require("fs");
var umi = (0, umi_bundle_defaults_1.createUmi)('https://api.devnet.solana.com');
console.log(umi);
// Import your private key file and parse it.
var wallet = './my-wallet.json';
var secretKey = JSON.parse(fs.readFileSync(wallet, 'utf-8'));
// Create a keypair from your private key
var keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(secretKey));
// Register it to the Umi client.
umi.use((0, umi_1.keypairIdentity)(keypair));
