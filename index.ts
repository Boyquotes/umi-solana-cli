import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { keypairIdentity } from '@metaplex-foundation/umi'
import * as fs from 'fs';

const umi = createUmi('https://api.devnet.solana.com');
console.log(umi);

// Import your private key file and parse it.
const wallet = './my-wallet.json'
const secretKey = JSON.parse(fs.readFileSync(wallet, 'utf-8'))

// Create a keypair from your private key
const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(secretKey))

// Register it to the Umi client.
umi.use(keypairIdentity(keypair));

(async () => {
  const blockhash = await umi.rpc.getLatestBlockhash();
  const myAccount = await umi.rpc.getAccount(keypair.publicKey);
  console.log(myAccount);
//  assertAccountExists(myAccount);
  console.log(blockhash)
})();
