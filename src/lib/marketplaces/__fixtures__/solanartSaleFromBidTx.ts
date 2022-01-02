import { ParsedConfirmedTransaction } from "@solana/web3.js";

const saleTx: ParsedConfirmedTransaction = {
  blockTime: 1639735410,
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
                destination: "BrLQpUw6UQM4rsUxCvU93virPJNVoza51ZGvyjBXVGsd",
                lamports: 2039280,
                source: "6bPDVYs5Ewutp8jqurwqfWkL3UeUAGouZg5RJxNY2yAM",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "BrLQpUw6UQM4rsUxCvU93virPJNVoza51ZGvyjBXVGsd",
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
                account: "BrLQpUw6UQM4rsUxCvU93virPJNVoza51ZGvyjBXVGsd",
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
                account: "BrLQpUw6UQM4rsUxCvU93virPJNVoza51ZGvyjBXVGsd",
                mint: "HRGYe4hDNjNVCjmwhmnEiiZtbjzShCwazC1JEyERXRUo",
                owner: "6bPDVYs5Ewutp8jqurwqfWkL3UeUAGouZg5RJxNY2yAM",
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
                destination: "2y78y9m3hg5b62PnHVguzMCk6w3brP3DLii1bG577wKy",
                lamports: 2512560,
                source: "6bPDVYs5Ewutp8jqurwqfWkL3UeUAGouZg5RJxNY2yAM",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "2y78y9m3hg5b62PnHVguzMCk6w3brP3DLii1bG577wKy",
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
                account: "2y78y9m3hg5b62PnHVguzMCk6w3brP3DLii1bG577wKy",
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
                destination: "2y78y9m3hg5b62PnHVguzMCk6w3brP3DLii1bG577wKy",
                lamports: 4500000000,
                source: "6bPDVYs5Ewutp8jqurwqfWkL3UeUAGouZg5RJxNY2yAM",
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
      "Program log: Open bid at 4500000000 SOL",
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
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz consumed 31937 of 200000 compute units",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz success",
    ],
    postBalances: [
      55989369797, 2039280, 4502512560, 5616720, 1461600, 1, 1089991680,
      1009200, 0, 898174080, 1141440,
    ],
    postTokenBalances: [
      {
        accountIndex: 1,
        mint: "HRGYe4hDNjNVCjmwhmnEiiZtbjzShCwazC1JEyERXRUo",
        owner: "6bPDVYs5Ewutp8jqurwqfWkL3UeUAGouZg5RJxNY2yAM",
        uiTokenAmount: {
          amount: "0",
          decimals: 0,
          uiAmount: null,
          uiAmountString: "0",
        },
      },
    ],
    preBalances: [
      60493926637, 0, 0, 5616720, 1461600, 1, 1089991680, 1009200, 0, 898174080,
      1141440,
    ],
    preTokenBalances: [],
    rewards: [],
    status: { Ok: null },
  },
  slot: 111952056,
  transaction: {
    message: {
      accountKeys: [
        {
          pubkey: "6bPDVYs5Ewutp8jqurwqfWkL3UeUAGouZg5RJxNY2yAM",
          signer: true,
          writable: true,
        },
        {
          pubkey: "BrLQpUw6UQM4rsUxCvU93virPJNVoza51ZGvyjBXVGsd",
          signer: false,
          writable: true,
        },
        {
          pubkey: "2y78y9m3hg5b62PnHVguzMCk6w3brP3DLii1bG577wKy",
          signer: false,
          writable: true,
        },
        {
          pubkey: "9zd7ep4EcvXJYVG6QEM1Bx9Rgo9tVUjBUy3wK6Ba9GqF",
          signer: false,
          writable: true,
        },
        {
          pubkey: "HRGYe4hDNjNVCjmwhmnEiiZtbjzShCwazC1JEyERXRUo",
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
          pubkey: "E2GocJWEij1Q282Sbzeyja8BmgpSMubUogURcAysdcdb",
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
              account: "BrLQpUw6UQM4rsUxCvU93virPJNVoza51ZGvyjBXVGsd",
              mint: "HRGYe4hDNjNVCjmwhmnEiiZtbjzShCwazC1JEyERXRUo",
              rentSysvar: "SysvarRent111111111111111111111111111111111",
              source: "6bPDVYs5Ewutp8jqurwqfWkL3UeUAGouZg5RJxNY2yAM",
              systemProgram: "11111111111111111111111111111111",
              tokenProgram: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              wallet: "6bPDVYs5Ewutp8jqurwqfWkL3UeUAGouZg5RJxNY2yAM",
            },
            type: "create",
          },
          program: "spl-associated-token-account",
          programId: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
        },
        {
          accounts: [
            "6bPDVYs5Ewutp8jqurwqfWkL3UeUAGouZg5RJxNY2yAM",
            "BrLQpUw6UQM4rsUxCvU93virPJNVoza51ZGvyjBXVGsd",
            "2y78y9m3hg5b62PnHVguzMCk6w3brP3DLii1bG577wKy",
            "HRGYe4hDNjNVCjmwhmnEiiZtbjzShCwazC1JEyERXRUo",
            "9zd7ep4EcvXJYVG6QEM1Bx9Rgo9tVUjBUy3wK6Ba9GqF",
            "11111111111111111111111111111111",
            "SysvarRent111111111111111111111111111111111",
            "E2GocJWEij1Q282Sbzeyja8BmgpSMubUogURcAysdcdb",
          ],
          data: "116MPfUvgiBq",
          programId: "CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz",
        },
      ],
      recentBlockhash: "K4d1U6m92WzJJz6iVnEdNeSuVB2urGpMq18fwTWrtbJ",
    },
    signatures: [
      "56QWjtsUykb2cxytM1jwJQmuLjtgZjs7jCZMARYBiCRCy8mEwVXqBFgBhvraDSzA27dUFRxX7Zi5VB4mxvjofXqR",
    ],
  },
};
export default saleTx;
