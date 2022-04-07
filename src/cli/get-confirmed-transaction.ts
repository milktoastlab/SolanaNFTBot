import { newConnection } from "../lib/solana";

async function run(signature: string) {
  const conn = newConnection();
  const tx = await conn.getParsedConfirmedTransaction(signature);
  if (!tx) {
    console.log(`No transaction found for ${signature}`);
    return;
  }

  console.log(JSON.stringify(tx));
}

run(process.env.TX as string);
