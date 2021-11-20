import { ParsedConfirmedTransaction } from "@solana/web3.js";

const saleTx: ParsedConfirmedTransaction = {
  blockTime: 1638570298,
  meta: {
    err: null,
    fee: 10000,
    innerInstructions: [
      {
        index: 2,
        instructions: [
          {
            parsed: {
              info: {
                destination: "6T4f5bdrd9ffTtehqAj9BGyxahysRGcaUZeDzA1XN52N",
                lamports: 90000000,
                source: "pKqUqVxK3i3MB9qNSYPtwGFpT2H3CbsneGM5H9zLhT3",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "6cSjZRcDEjpRxHmqXGjJXzqCEs7cHgxiWseA9gzCeQp9",
                lamports: 0,
                source: "pKqUqVxK3i3MB9qNSYPtwGFpT2H3CbsneGM5H9zLhT3",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "AmgaigwTiBwXsXJ28LnQuhDH9xtEBueDVC5fEpwjthXZ",
                lamports: 291000000,
                source: "pKqUqVxK3i3MB9qNSYPtwGFpT2H3CbsneGM5H9zLhT3",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "G1F5nSzq6CNDMz8bBMadfGp2qTC7hU9dETS33KReQsR2",
                lamports: 2619000000,
                source: "pKqUqVxK3i3MB9qNSYPtwGFpT2H3CbsneGM5H9zLhT3",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                amount: "1",
                authority: "3yfoLAcet3gBg5gHKCmmjVq8Dgn5hoUdrRf5TKa8RoKS",
                destination: "6pdd4CSFfRhqS9PvLQf81FdxxyEA4r2mfKxvad3bTx5V",
                source: "BX6VddKUNXs9RGC5gFkSnBWDhTNPrXUsAJo4PBq2z9Qp",
              },
              type: "transfer",
            },
            program: "spl-token",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          },
        ],
      },
    ],
    logMessages: [
      "Program 11111111111111111111111111111111 invoke [1]",
      "Program 11111111111111111111111111111111 success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [1]",
      "Program log: Instruction: InitializeAccount",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3446 of 200000 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program 617jbWo616ggkDxvW1Le8pV38XLbVSyWY8ae6QUmGBAU invoke [1]",
      "Program log: entry",
      "Program log: Transfering tokens!",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: price = 3000000000",
      "Program log: seller_fee = 1000",
      "Program log: total fee = 291000000",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Transfering NFT!",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3121 of 177902 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program 617jbWo616ggkDxvW1Le8pV38XLbVSyWY8ae6QUmGBAU consumed 27529 of 200000 compute units",
      "Program 617jbWo616ggkDxvW1Le8pV38XLbVSyWY8ae6QUmGBAU success",
    ],
    postBalances: [
      21683053765, 2039280, 2027313, 0, 2667750167, 3023688478796, 2039280,
      4572720, 59263089529, 1461600, 1009200, 1089991680, 1, 1141440,
    ],
    postTokenBalances: [
      {
        accountIndex: 1,
        mint: "8gaYezSKFxJu4Q7F7xLWTbFBLAEsKefqq9i8stML7B6S",
        owner: "pKqUqVxK3i3MB9qNSYPtwGFpT2H3CbsneGM5H9zLhT3",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1.0,
          uiAmountString: "1",
        },
      },
      {
        accountIndex: 6,
        mint: "8gaYezSKFxJu4Q7F7xLWTbFBLAEsKefqq9i8stML7B6S",
        owner: "3yfoLAcet3gBg5gHKCmmjVq8Dgn5hoUdrRf5TKa8RoKS",
        uiTokenAmount: {
          amount: "0",
          decimals: 0,
          uiAmount: null,
          uiAmountString: "0",
        },
      },
    ],
    preBalances: [
      24685103045, 0, 2027313, 0, 48750167, 3023598478796, 2039280, 4572720,
      58972089529, 1461600, 1009200, 1089991680, 1, 1141440,
    ],
    preTokenBalances: [
      {
        accountIndex: 6,
        mint: "8gaYezSKFxJu4Q7F7xLWTbFBLAEsKefqq9i8stML7B6S",
        owner: "3yfoLAcet3gBg5gHKCmmjVq8Dgn5hoUdrRf5TKa8RoKS",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1.0,
          uiAmountString: "1",
        },
      },
    ],
    rewards: [],
    status: { Ok: null },
  },
  slot: 109928435,
  transaction: {
    message: {
      accountKeys: [
        {
          pubkey: "pKqUqVxK3i3MB9qNSYPtwGFpT2H3CbsneGM5H9zLhT3",
          signer: true,
          writable: true,
        },
        {
          pubkey: "6pdd4CSFfRhqS9PvLQf81FdxxyEA4r2mfKxvad3bTx5V",
          signer: true,
          writable: true,
        },
        {
          pubkey: "GdPyDFpdmwrF6FUTzjbYXqqmKsYMUfKZriX6C6DSWn1M",
          signer: false,
          writable: true,
        },
        {
          pubkey: "3yfoLAcet3gBg5gHKCmmjVq8Dgn5hoUdrRf5TKa8RoKS",
          signer: false,
          writable: true,
        },
        {
          pubkey: "G1F5nSzq6CNDMz8bBMadfGp2qTC7hU9dETS33KReQsR2",
          signer: false,
          writable: true,
        },
        {
          pubkey: "6T4f5bdrd9ffTtehqAj9BGyxahysRGcaUZeDzA1XN52N",
          signer: false,
          writable: true,
        },
        {
          pubkey: "BX6VddKUNXs9RGC5gFkSnBWDhTNPrXUsAJo4PBq2z9Qp",
          signer: false,
          writable: true,
        },
        {
          pubkey: "6cSjZRcDEjpRxHmqXGjJXzqCEs7cHgxiWseA9gzCeQp9",
          signer: false,
          writable: true,
        },
        {
          pubkey: "AmgaigwTiBwXsXJ28LnQuhDH9xtEBueDVC5fEpwjthXZ",
          signer: false,
          writable: true,
        },
        {
          pubkey: "8gaYezSKFxJu4Q7F7xLWTbFBLAEsKefqq9i8stML7B6S",
          signer: false,
          writable: false,
        },
        {
          pubkey: "SysvarRent111111111111111111111111111111111",
          signer: false,
          writable: false,
        },
        {
          pubkey: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          signer: false,
          writable: false,
        },
        {
          pubkey: "11111111111111111111111111111111",
          signer: false,
          writable: false,
        },
        {
          pubkey: "617jbWo616ggkDxvW1Le8pV38XLbVSyWY8ae6QUmGBAU",
          signer: false,
          writable: false,
        },
      ],
      instructions: [
        {
          parsed: {
            info: {
              lamports: 2039280,
              newAccount: "6pdd4CSFfRhqS9PvLQf81FdxxyEA4r2mfKxvad3bTx5V",
              owner: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              source: "pKqUqVxK3i3MB9qNSYPtwGFpT2H3CbsneGM5H9zLhT3",
              space: 165,
            },
            type: "createAccount",
          },
          program: "system",
          programId: "11111111111111111111111111111111",
        },
        {
          parsed: {
            info: {
              account: "6pdd4CSFfRhqS9PvLQf81FdxxyEA4r2mfKxvad3bTx5V",
              mint: "8gaYezSKFxJu4Q7F7xLWTbFBLAEsKefqq9i8stML7B6S",
              owner: "pKqUqVxK3i3MB9qNSYPtwGFpT2H3CbsneGM5H9zLhT3",
              rentSysvar: "SysvarRent111111111111111111111111111111111",
            },
            type: "initializeAccount",
          },
          program: "spl-token",
          programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          accounts: [
            "GdPyDFpdmwrF6FUTzjbYXqqmKsYMUfKZriX6C6DSWn1M",
            "3yfoLAcet3gBg5gHKCmmjVq8Dgn5hoUdrRf5TKa8RoKS",
            "pKqUqVxK3i3MB9qNSYPtwGFpT2H3CbsneGM5H9zLhT3",
            "3yfoLAcet3gBg5gHKCmmjVq8Dgn5hoUdrRf5TKa8RoKS",
            "pKqUqVxK3i3MB9qNSYPtwGFpT2H3CbsneGM5H9zLhT3",
            "G1F5nSzq6CNDMz8bBMadfGp2qTC7hU9dETS33KReQsR2",
            "6pdd4CSFfRhqS9PvLQf81FdxxyEA4r2mfKxvad3bTx5V",
            "6T4f5bdrd9ffTtehqAj9BGyxahysRGcaUZeDzA1XN52N",
            "BX6VddKUNXs9RGC5gFkSnBWDhTNPrXUsAJo4PBq2z9Qp",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "11111111111111111111111111111111",
            "6cSjZRcDEjpRxHmqXGjJXzqCEs7cHgxiWseA9gzCeQp9",
            "AmgaigwTiBwXsXJ28LnQuhDH9xtEBueDVC5fEpwjthXZ",
          ],
          data: "EE",
          programId: "617jbWo616ggkDxvW1Le8pV38XLbVSyWY8ae6QUmGBAU",
        },
      ],
      recentBlockhash: "6381s6mpNEK9iwq62XQJWiS6p1y5wch74JVEyHAJAF28",
    },
    signatures: [
      "4XuN4e8nDz6jpCB6YXEBP7i3EFaoN9hVGkxMRTJeuu2i9dMZ7rJKCwU9A5zN8DoPw9dm5zbVrJwSfw5xctyJ82GU",
      "3PPUTxkidJYcnV1Roj784C9rY2StTRXYFUGDQYfh6APF81fbye1vaumQ368cdPpdrWDAbucNWTtDN1588KYQFmDc",
    ],
  },
};
export default saleTx;
