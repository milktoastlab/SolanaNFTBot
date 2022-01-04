import { ParsedConfirmedTransaction } from "@solana/web3.js";

const tx: ParsedConfirmedTransaction = {
  blockTime: 1641287764,
  meta: {
    err: null,
    fee: 5000,
    innerInstructions: [
      {
        index: 0,
        instructions: [
          {
            parsed: {
              info: {
                destination: "2uMvHpeFfdc3wWKVPRPDAxBKdFpn6MQZXjmkxVGm9Uft",
                lamports: 2039280,
                source: "7A47s8jD3AfTEv1mvXXxETA5PmS7fhbwBWCzYm8r8wgC",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "2uMvHpeFfdc3wWKVPRPDAxBKdFpn6MQZXjmkxVGm9Uft",
                space: 165,
              },
              type: "allocate",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "2uMvHpeFfdc3wWKVPRPDAxBKdFpn6MQZXjmkxVGm9Uft",
                owner: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              },
              type: "assign",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "2uMvHpeFfdc3wWKVPRPDAxBKdFpn6MQZXjmkxVGm9Uft",
                mint: "Vz2HFKpKY3SDCJoUnpbnFs8mvCUvB2t83zXNZiTPRzN",
                owner: "7A47s8jD3AfTEv1mvXXxETA5PmS7fhbwBWCzYm8r8wgC",
                rentSysvar: "SysvarRent111111111111111111111111111111111",
              },
              type: "initializeAccount",
            },
            program: "spl-token",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          },
        ],
      },
      {
        index: 1,
        instructions: [
          {
            parsed: {
              info: {
                destination: "65Xm7rcmR6pGS2oNLe4No4DDsWPQJV5aYtvprPgcvEM9",
                lamports: 2512560,
                source: "7A47s8jD3AfTEv1mvXXxETA5PmS7fhbwBWCzYm8r8wgC",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "65Xm7rcmR6pGS2oNLe4No4DDsWPQJV5aYtvprPgcvEM9",
                space: 233,
              },
              type: "allocate",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "65Xm7rcmR6pGS2oNLe4No4DDsWPQJV5aYtvprPgcvEM9",
                owner: "CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz",
              },
              type: "assign",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "65Xm7rcmR6pGS2oNLe4No4DDsWPQJV5aYtvprPgcvEM9",
                lamports: 12500000000,
                source: "7A47s8jD3AfTEv1mvXXxETA5PmS7fhbwBWCzYm8r8wgC",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
        ],
      },
    ],
    logMessages: [
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL invoke [1]",
      "Program log: Transfer 2039280 lamports to the associated token account",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Allocate space for the associated token account",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Assign the associated token account to the SPL Token program",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Initialize the associated token account",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: InitializeAccount",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3449 of 177045 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL consumed 27053 of 200000 compute units",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL success",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz invoke [1]",
      "Program log: Instruction: CreateOffer",
      "Program log: Open bid at 12500000000 SOL",
      "Program log: Transfer 2512560 lamports to the new account",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Allocate space for the account",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Assign the account to the owning program",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Completed assignation!",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz consumed 28388 of 200000 compute units",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz success",
    ],
    postBalances: [
      165731209, 2039280, 12502512560, 5616720, 1461600, 1, 1089991680, 1009200,
      0, 898174080, 1141440,
    ],
    postTokenBalances: [
      {
        accountIndex: 1,
        mint: "Vz2HFKpKY3SDCJoUnpbnFs8mvCUvB2t83zXNZiTPRzN",
        owner: "7A47s8jD3AfTEv1mvXXxETA5PmS7fhbwBWCzYm8r8wgC",
        uiTokenAmount: {
          amount: "0",
          decimals: 0,
          uiAmount: null,
          uiAmountString: "0",
        },
      },
    ],
    preBalances: [
      12670288049, 0, 0, 5616720, 1461600, 1, 1089991680, 1009200, 0, 898174080,
      1141440,
    ],
    preTokenBalances: [],
    rewards: [],
    status: { Ok: null },
  },
  slot: 114743650,
  transaction: {
    message: {
      accountKeys: [
        {
          pubkey: "7A47s8jD3AfTEv1mvXXxETA5PmS7fhbwBWCzYm8r8wgC",
          signer: true,
          writable: true,
        },
        {
          pubkey: "2uMvHpeFfdc3wWKVPRPDAxBKdFpn6MQZXjmkxVGm9Uft",
          signer: false,
          writable: true,
        },
        {
          pubkey: "65Xm7rcmR6pGS2oNLe4No4DDsWPQJV5aYtvprPgcvEM9",
          signer: false,
          writable: true,
        },
        {
          pubkey: "FbViwEYEXdMM61mYm7JPrntaQdvMXqW1TCVLKkUCanRR",
          signer: false,
          writable: true,
        },
        {
          pubkey: "Vz2HFKpKY3SDCJoUnpbnFs8mvCUvB2t83zXNZiTPRzN",
          signer: false,
          writable: false,
        },
        {
          pubkey: "11111111111111111111111111111111",
          signer: false,
          writable: false,
        },
        {
          pubkey: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          signer: false,
          writable: false,
        },
        {
          pubkey: "SysvarRent111111111111111111111111111111111",
          signer: false,
          writable: false,
        },
        {
          pubkey: "AkZ8bE8AK3CQCVN8K2FNy1YSbBJV2MdU2JtTFVX2Z7uG",
          signer: false,
          writable: false,
        },
        {
          pubkey: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
          signer: false,
          writable: false,
        },
        {
          pubkey: "CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz",
          signer: false,
          writable: false,
        },
      ],
      instructions: [
        {
          parsed: {
            info: {
              account: "2uMvHpeFfdc3wWKVPRPDAxBKdFpn6MQZXjmkxVGm9Uft",
              mint: "Vz2HFKpKY3SDCJoUnpbnFs8mvCUvB2t83zXNZiTPRzN",
              rentSysvar: "SysvarRent111111111111111111111111111111111",
              source: "7A47s8jD3AfTEv1mvXXxETA5PmS7fhbwBWCzYm8r8wgC",
              systemProgram: "11111111111111111111111111111111",
              tokenProgram: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              wallet: "7A47s8jD3AfTEv1mvXXxETA5PmS7fhbwBWCzYm8r8wgC",
            },
            type: "create",
          },
          program: "spl-associated-token-account",
          programId: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
        },
        {
          accounts: [
            "7A47s8jD3AfTEv1mvXXxETA5PmS7fhbwBWCzYm8r8wgC",
            "2uMvHpeFfdc3wWKVPRPDAxBKdFpn6MQZXjmkxVGm9Uft",
            "65Xm7rcmR6pGS2oNLe4No4DDsWPQJV5aYtvprPgcvEM9",
            "Vz2HFKpKY3SDCJoUnpbnFs8mvCUvB2t83zXNZiTPRzN",
            "FbViwEYEXdMM61mYm7JPrntaQdvMXqW1TCVLKkUCanRR",
            "11111111111111111111111111111111",
            "SysvarRent111111111111111111111111111111111",
            "AkZ8bE8AK3CQCVN8K2FNy1YSbBJV2MdU2JtTFVX2Z7uG",
          ],
          data: "119NsczBUo6o",
          programId: "CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz",
        },
      ],
      recentBlockhash: "U4c3bbizMbR7tmeEVh3k5nqcbdj5G79L8UrEsJyFY2G",
    },
    signatures: [
      "5ocxCdmdqHQd9Bp1ztaUsiSJMx2uAreYZc6N58B7GNeDTWr6s9bijzMEJN56hwHQhvWYQdZxWVw9abUMVweRCM2Y",
    ],
  },
};

export default tx;
