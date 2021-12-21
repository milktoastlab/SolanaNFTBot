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
  onTransaction?: (tx: ParsedConfirmedTransaction) => Promise<void>;
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
      until: opt?.until,
    }
  );

  if (signatures) {
    const txs: ParsedConfirmedTransaction[] = [];
    const oldestToLatest = signatures.reverse();

    for (let i = 0; i < oldestToLatest.length; i++) {
      const signature = oldestToLatest[i];
      const tx = await conn.getParsedConfirmedTransaction(signature.signature);
      if (!tx) {
        continue;
      }
      opt?.onTransaction && (await opt.onTransaction(tx));

      txs.push(tx);
    }
    return txs;
  }
  return null;
}
