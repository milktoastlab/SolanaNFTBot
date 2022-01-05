import { ParsedConfirmedTransaction } from "@solana/web3.js";

const tx: ParsedConfirmedTransaction = {
  blockTime: 1641289515,
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
                destination: "Fk1L2DxzWSfPWwYdcQey52h6SDDBcCfhaGGGkJEC8wpS",
                lamports: 2039280,
                source: "9v5rSYfUX86D8gK5vwt4YzEEdUYEBovF9yk5vbKSVxyL",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "Fk1L2DxzWSfPWwYdcQey52h6SDDBcCfhaGGGkJEC8wpS",
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
                account: "Fk1L2DxzWSfPWwYdcQey52h6SDDBcCfhaGGGkJEC8wpS",
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
                account: "Fk1L2DxzWSfPWwYdcQey52h6SDDBcCfhaGGGkJEC8wpS",
                mint: "7eWhZsnVtArc174RezovPgLmV9FTYsz25XiAxfNqCtVw",
                owner: "9v5rSYfUX86D8gK5vwt4YzEEdUYEBovF9yk5vbKSVxyL",
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
                amount: "1",
                destination: "Fk1L2DxzWSfPWwYdcQey52h6SDDBcCfhaGGGkJEC8wpS",
                multisigAuthority:
                  "3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK",
                signers: ["3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK"],
                source: "CTHsUmcSy59PuT11nH8q5c6M8cr1M3pHqLsgGqLL5aAY",
              },
              type: "transfer",
            },
            program: "spl-token",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          },
          {
            parsed: {
              info: {
                account: "CTHsUmcSy59PuT11nH8q5c6M8cr1M3pHqLsgGqLL5aAY",
                destination: "9v5rSYfUX86D8gK5vwt4YzEEdUYEBovF9yk5vbKSVxyL",
                multisigOwner: "3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK",
                signers: ["3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK"],
              },
              type: "closeAccount",
            },
            program: "spl-token",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
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
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3449 of 179574 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL consumed 24524 of 200000 compute units",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL success",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz invoke [1]",
      "Program log: Instruction: Buy",
      "Program log: Sale cancelled by seller",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3246 of 91567 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: CloseAccount",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2422 of 85370 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz consumed 118191 of 200000 compute units",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz success",
    ],
    postBalances: [
      228575215, 2039280, 0, 0, 4736967344972, 5616720, 0, 1461600, 1,
      1089991680, 1009200, 11692287848, 1141440, 898174080, 1141440,
    ],
    postTokenBalances: [
      {
        accountIndex: 1,
        mint: "7eWhZsnVtArc174RezovPgLmV9FTYsz25XiAxfNqCtVw",
        owner: "9v5rSYfUX86D8gK5vwt4YzEEdUYEBovF9yk5vbKSVxyL",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1.0,
          uiAmountString: "1",
        },
      },
    ],
    preBalances: [
      227181255, 0, 2039280, 1398960, 4736967344972, 5616720, 0, 1461600, 1,
      1089991680, 1009200, 11692287848, 1141440, 898174080, 1141440,
    ],
    preTokenBalances: [
      {
        accountIndex: 2,
        mint: "7eWhZsnVtArc174RezovPgLmV9FTYsz25XiAxfNqCtVw",
        owner: "3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK",
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
  slot: 114746790,
  transaction: {
    message: {
      accountKeys: [
        {
          pubkey: "9v5rSYfUX86D8gK5vwt4YzEEdUYEBovF9yk5vbKSVxyL",
          signer: true,
          writable: true,
        },
        {
          pubkey: "Fk1L2DxzWSfPWwYdcQey52h6SDDBcCfhaGGGkJEC8wpS",
          signer: false,
          writable: true,
        },
        {
          pubkey: "CTHsUmcSy59PuT11nH8q5c6M8cr1M3pHqLsgGqLL5aAY",
          signer: false,
          writable: true,
        },
        {
          pubkey: "Aun1LnrvccfXBY51RzV7MgKzCBjTcHWBMZ1Bpg9j22BP",
          signer: false,
          writable: true,
        },
        {
          pubkey: "39fEpihLATXPJCQuSiXLUSiCbGchGYjeL39eyXh3KbyT",
          signer: false,
          writable: true,
        },
        {
          pubkey: "3zkXT9JQMdB4zNMisF4ftR3uf5gFuETx57U8k5BimLWm",
          signer: false,
          writable: true,
        },
        {
          pubkey: "3dQav8NYwBh6g34UQU6KHEN7VkGBXgbMJMPRF81wbBD7",
          signer: false,
          writable: true,
        },
        {
          pubkey: "7eWhZsnVtArc174RezovPgLmV9FTYsz25XiAxfNqCtVw",
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
          pubkey: "3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK",
          signer: false,
          writable: false,
        },
        {
          pubkey: "7gDpaG9kUXHTz1dj4eVfykqtXnKq2efyuGigdMeCy74B",
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
              account: "Fk1L2DxzWSfPWwYdcQey52h6SDDBcCfhaGGGkJEC8wpS",
              mint: "7eWhZsnVtArc174RezovPgLmV9FTYsz25XiAxfNqCtVw",
              rentSysvar: "SysvarRent111111111111111111111111111111111",
              source: "9v5rSYfUX86D8gK5vwt4YzEEdUYEBovF9yk5vbKSVxyL",
              systemProgram: "11111111111111111111111111111111",
              tokenProgram: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              wallet: "9v5rSYfUX86D8gK5vwt4YzEEdUYEBovF9yk5vbKSVxyL",
            },
            type: "create",
          },
          program: "spl-associated-token-account",
          programId: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
        },
        {
          accounts: [
            "9v5rSYfUX86D8gK5vwt4YzEEdUYEBovF9yk5vbKSVxyL",
            "Fk1L2DxzWSfPWwYdcQey52h6SDDBcCfhaGGGkJEC8wpS",
            "CTHsUmcSy59PuT11nH8q5c6M8cr1M3pHqLsgGqLL5aAY",
            "9v5rSYfUX86D8gK5vwt4YzEEdUYEBovF9yk5vbKSVxyL",
            "Aun1LnrvccfXBY51RzV7MgKzCBjTcHWBMZ1Bpg9j22BP",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "39fEpihLATXPJCQuSiXLUSiCbGchGYjeL39eyXh3KbyT",
            "3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK",
            "3zkXT9JQMdB4zNMisF4ftR3uf5gFuETx57U8k5BimLWm",
            "3dQav8NYwBh6g34UQU6KHEN7VkGBXgbMJMPRF81wbBD7",
            "7gDpaG9kUXHTz1dj4eVfykqtXnKq2efyuGigdMeCy74B",
            "11111111111111111111111111111111",
          ],
          data: "4h6bzpF8MKT5",
          programId: "CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz",
        },
      ],
      recentBlockhash: "4F19LcyPH1jyhtNmTcmjanUNWbZ6mfcs3p6duigudnvc",
    },
    signatures: [
      "5cCMhRF6ppWZQhybWmaNP94hKFe25rUwz7oUyNscA9Bm7feoJDkr2oJZ4VKJ5V6jCXCuKvVQKNjJfF1Tyo8nFpRc",
    ],
  },
};

export default tx;
