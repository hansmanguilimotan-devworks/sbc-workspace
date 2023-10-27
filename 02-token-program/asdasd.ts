import "dotenv/config"
import base58 from "bs58"
import * as Web3 from "@solana/web3.js"
import * as token from "@solana/spl-token"
import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token"

const connection = new Web3.Connection(Web3.clusterApiUrl("devnet"))
const publickey = new Web3.PublicKey("x1Z2xriKhmAzNAZ5yNdZYm6K3V2Yawis1jwxHcjCnKV") // PUBKEY of person you want to create the token account

const decoded = base58.decode('3Jkt6ahKFEX2QJFCxv9UYCXsqkgnGrxmWdvoUUMnu4e8W6Bw2fXCWKBzAz4kn5LZNVTu6dKB2gfovdE2xobhcHp8')
const keyPair = Web3.Keypair.fromSecretKey(decoded)
const tokenMint = "7ExZ6pBDB65iFY7SWdaeDuWtgnuVFyPP4fhxfnGm1SD4"

async function main(){
    const tokenAccount  = await token.createAccount(
        connection, // connection
        keyPair, // signer
        new Web3.PublicKey(tokenMint), // mint public key
        publickey, // owner of the token-account
    );
    console.log(tokenAccount.toBase58());
}

main();