import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))

const publickey = new Web3.PublicKey("7YMhGJqomgof3uY8ouze1RzSeXkxPNQL4bbyQVF7N6RS")
const decoded = base58.decode('3Jkt6ahKFEX2QJFCxv9UYCXsqkgnGrxmWdvoUUMnu4e8W6Bw2fXCWKBzAz4kn5LZNVTu6dKB2gfovdE2xobhcHp8')
const keyPair = Web3.Keypair.fromSecretKey(decoded)

async function main(){
    const tokenMint = await token.createMint(
        connection,
        keyPair,
        publickey, // mint auth
        publickey, // freeze atuh
        9 //decimals
    )
    console.log(tokenMint.toBase58());
}

main();