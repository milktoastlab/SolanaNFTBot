import { ParsedConfirmedTransaction } from "@solana/web3.js";

const saleTx: ParsedConfirmedTransaction = {
  blockTime: 1635551628,
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
                destination: "8F81Yh4FbpGgPcCoxuJsDNaBwZW6JURp6yAvQFnhVhw6",
                lamports: 2039280,
                source: "59uZhxZov3UeBG3QQWg8rKLm4MHGA89V3XLBRUxbqXaV",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "8F81Yh4FbpGgPcCoxuJsDNaBwZW6JURp6yAvQFnhVhw6",
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
                account: "8F81Yh4FbpGgPcCoxuJsDNaBwZW6JURp6yAvQFnhVhw6",
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
                account: "8F81Yh4FbpGgPcCoxuJsDNaBwZW6JURp6yAvQFnhVhw6",
                mint: "ECoNeXqLJofE7WZZzkntyTr3kqgrELmcLiY4HN9qb2ae",
                owner: "59uZhxZov3UeBG3QQWg8rKLm4MHGA89V3XLBRUxbqXaV",
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
                destination: "3iYf9hHQPciwgJ1TCjpRUp1A3QW4AfaK7J6vCmETRMuu",
                lamports: 750000,
                source: "59uZhxZov3UeBG3QQWg8rKLm4MHGA89V3XLBRUxbqXaV",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "Zp66dczQGRNwpcRzpAN24SY1EhYU7c253HDKZw84YH9",
                lamports: 0,
                source: "59uZhxZov3UeBG3QQWg8rKLm4MHGA89V3XLBRUxbqXaV",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "3UCtQ8D24XviEujCNWpM7hQNqMHfqzat1XtJta6DhvhD",
                lamports: 0,
                source: "59uZhxZov3UeBG3QQWg8rKLm4MHGA89V3XLBRUxbqXaV",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "6EjCH2MQBucbfCXZbrUpP3jTkYLJi3r87rdyptrrNAXJ",
                lamports: 29250000,
                source: "59uZhxZov3UeBG3QQWg8rKLm4MHGA89V3XLBRUxbqXaV",
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
                destination: "8F81Yh4FbpGgPcCoxuJsDNaBwZW6JURp6yAvQFnhVhw6",
                multisigAuthority:
                  "F4ghBzHFNgJxV4wEQDchU5i7n4XWWMBSaq7CuswGiVsr",
                signers: ["F4ghBzHFNgJxV4wEQDchU5i7n4XWWMBSaq7CuswGiVsr"],
                source: "G28rmTFZQwX38airfjtfowPk2gJqSdxyJWggkCBxZoJu",
              },
              type: "transfer",
            },
            program: "spl-token",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          },
          {
            parsed: {
              info: {
                account: "G28rmTFZQwX38airfjtfowPk2gJqSdxyJWggkCBxZoJu",
                destination: "6EjCH2MQBucbfCXZbrUpP3jTkYLJi3r87rdyptrrNAXJ",
                multisigOwner: "F4ghBzHFNgJxV4wEQDchU5i7n4XWWMBSaq7CuswGiVsr",
                signers: ["F4ghBzHFNgJxV4wEQDchU5i7n4XWWMBSaq7CuswGiVsr"],
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
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3449 of 179575 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL consumed 24523 of 200000 compute units",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL success",
      "Program A7p8451ktDCHq5yYaHczeLMYsjRsAkzc3hCXcSrwYHU7 invoke [1]",
      "Program log: Instruction: Exchange",
      "Program log: amount: 1",
      'Program log: sales tax recipients: passed:3iYf9hHQPciwgJ1TCjpRUp1A3QW4AfaK7J6vCmETRMuu / expected:"3iYf9hHQPciwgJ1TCjpRUp1A3QW4AfaK7J6vCmETRMuu"',
      "Program log: Transfering sales tax",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Checking metadata...",
      "Program log: Disbursing royalties...",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Transfering payment to initializer.",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Calling the token program to transfer tokens to the taker...",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3246 of 130231 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program log: Calling the token program to close pda's temp account...",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: CloseAccount",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2422 of 123814 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program log: Closing the escrow account...",
      "Program A7p8451ktDCHq5yYaHczeLMYsjRsAkzc3hCXcSrwYHU7 consumed 79962 of 200000 compute units",
      "Program A7p8451ktDCHq5yYaHczeLMYsjRsAkzc3hCXcSrwYHU7 success",
    ],
    postBalances: [
      6630906551, 2039280, 0, 2443004876, 0, 1017119393853, 1461600, 5616720,
      4572720, 1806098160, 1, 1089991680, 1, 92968990310, 898174080, 1141440,
    ],
    postTokenBalances: [
      {
        accountIndex: 1,
        mint: "ECoNeXqLJofE7WZZzkntyTr3kqgrELmcLiY4HN9qb2ae",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1.0,
          uiAmountString: "1",
        },
      },
    ],
    preBalances: [
      6662950831, 0, 2039280, 2410093916, 1621680, 1017118643853, 1461600,
      5616720, 4572720, 1806098160, 1, 1089991680, 1, 92968990310, 898174080,
      1141440,
    ],
    preTokenBalances: [
      {
        accountIndex: 2,
        mint: "ECoNeXqLJofE7WZZzkntyTr3kqgrELmcLiY4HN9qb2ae",
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
  slot: 104209815,
  transaction: {
    message: {
      accountKeys: [
        {
          pubkey: "59uZhxZov3UeBG3QQWg8rKLm4MHGA89V3XLBRUxbqXaV",
          signer: true,
          writable: true,
        },
        {
          pubkey: "8F81Yh4FbpGgPcCoxuJsDNaBwZW6JURp6yAvQFnhVhw6",
          signer: false,
          writable: true,
        },
        {
          pubkey: "G28rmTFZQwX38airfjtfowPk2gJqSdxyJWggkCBxZoJu",
          signer: false,
          writable: true,
        },
        {
          pubkey: "6EjCH2MQBucbfCXZbrUpP3jTkYLJi3r87rdyptrrNAXJ",
          signer: false,
          writable: true,
        },
        {
          pubkey: "BKcWGeoSu7fYJVTMBvPGdGc5L8uMctQ1GJ56H9q9jPdS",
          signer: false,
          writable: true,
        },
        {
          pubkey: "3iYf9hHQPciwgJ1TCjpRUp1A3QW4AfaK7J6vCmETRMuu",
          signer: false,
          writable: true,
        },
        {
          pubkey: "ECoNeXqLJofE7WZZzkntyTr3kqgrELmcLiY4HN9qb2ae",
          signer: false,
          writable: true,
        },
        {
          pubkey: "2TrLT1Rj7yz9Kgbt7Y1VtSfvTNCnE2mnYyE5yP6VZyS9",
          signer: false,
          writable: true,
        },
        {
          pubkey: "Zp66dczQGRNwpcRzpAN24SY1EhYU7c253HDKZw84YH9",
          signer: false,
          writable: true,
        },
        {
          pubkey: "3UCtQ8D24XviEujCNWpM7hQNqMHfqzat1XtJta6DhvhD",
          signer: false,
          writable: true,
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
          pubkey: "F4ghBzHFNgJxV4wEQDchU5i7n4XWWMBSaq7CuswGiVsr",
          signer: false,
          writable: false,
        },
        {
          pubkey: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
          signer: false,
          writable: false,
        },
        {
          pubkey: "A7p8451ktDCHq5yYaHczeLMYsjRsAkzc3hCXcSrwYHU7",
          signer: false,
          writable: false,
        },
      ],
      instructions: [
        {
          parsed: {
            info: {
              account: "8F81Yh4FbpGgPcCoxuJsDNaBwZW6JURp6yAvQFnhVhw6",
              mint: "ECoNeXqLJofE7WZZzkntyTr3kqgrELmcLiY4HN9qb2ae",
              rentSysvar: "SysvarRent111111111111111111111111111111111",
              source: "59uZhxZov3UeBG3QQWg8rKLm4MHGA89V3XLBRUxbqXaV",
              systemProgram: "11111111111111111111111111111111",
              tokenProgram: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              wallet: "59uZhxZov3UeBG3QQWg8rKLm4MHGA89V3XLBRUxbqXaV",
            },
            type: "create",
          },
          program: "spl-associated-token-account",
          programId: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
        },
        {
          accounts: [
            "59uZhxZov3UeBG3QQWg8rKLm4MHGA89V3XLBRUxbqXaV",
            "8F81Yh4FbpGgPcCoxuJsDNaBwZW6JURp6yAvQFnhVhw6",
            "G28rmTFZQwX38airfjtfowPk2gJqSdxyJWggkCBxZoJu",
            "6EjCH2MQBucbfCXZbrUpP3jTkYLJi3r87rdyptrrNAXJ",
            "BKcWGeoSu7fYJVTMBvPGdGc5L8uMctQ1GJ56H9q9jPdS",
            "3iYf9hHQPciwgJ1TCjpRUp1A3QW4AfaK7J6vCmETRMuu",
            "ECoNeXqLJofE7WZZzkntyTr3kqgrELmcLiY4HN9qb2ae",
            "2TrLT1Rj7yz9Kgbt7Y1VtSfvTNCnE2mnYyE5yP6VZyS9",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "11111111111111111111111111111111",
            "F4ghBzHFNgJxV4wEQDchU5i7n4XWWMBSaq7CuswGiVsr",
            "Zp66dczQGRNwpcRzpAN24SY1EhYU7c253HDKZw84YH9",
            "3UCtQ8D24XviEujCNWpM7hQNqMHfqzat1XtJta6DhvhD",
          ],
          data: "jzDsaTSmGkw",
          programId: "A7p8451ktDCHq5yYaHczeLMYsjRsAkzc3hCXcSrwYHU7",
        },
      ],
      recentBlockhash: "GqE4a2j1VYCcKgKMRVMmT7aaNY88pwyxh8Cnscb8R7a1",
    },
    signatures: [
      "5DqZaNrvEKLLUupRTbt56eYG4f8U25uxYH4wCw5UevbEttkBLDJuF9927yacw7J74kTtWKC1xuyA1QBQRakh3cd1",
    ],
  },
};
export default saleTx;
