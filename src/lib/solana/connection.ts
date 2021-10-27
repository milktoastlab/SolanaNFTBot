import {
  ConfirmedSignaturesForAddress2Options,
  Connection,
  ParsedConfirmedTransaction,
  PublicKey,
} from "@solana/web3.js";

export function newConnection(): Connection {
  return new Connection(process.env.SOLANA_RPC || "");
}

interface Opt extends ConfirmedSignaturesForAddress2Options {
  onTransaction?: (
    tx: ParsedConfirmedTransaction
  ) => Promise<Boolean | undefined>;
}

export async function fetchWeb3Transactions(
  conn: Connection,
  account: string,
  opt?: Opt
): Promise<ParsedConfirmedTransaction[] | null> {
  const signatures = await conn.getConfirmedSignaturesForAddress2(
    new PublicKey(account),
    {
      limit: opt?.limit,
      before: opt?.before,
    }
  );
  if (signatures) {
    const txs: ParsedConfirmedTransaction[] = [];
    for (let i = 0; i < signatures.length; i++) {
      const signature = signatures[i];
      const tx = await conn.getParsedConfirmedTransaction(signature.signature);
      if (tx) {
        if (opt?.onTransaction && (await opt?.onTransaction(tx)) === false) {
          return txs;
        }
        txs.push(tx);
      }
    }
    return txs;
  }
  return null;
}
