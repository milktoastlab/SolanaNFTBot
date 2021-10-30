import { ParsedConfirmedTransaction } from "@solana/web3.js";

const saleTx: ParsedConfirmedTransaction = {
  blockTime: 1635558562,
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
                destination: "9zdSFMpnjS9J6DrM82HjxxwGVVU37VfBiZ5fJA796Lf8",
                lamports: 2039280,
                source: "93ccg27u1tHK1FzqoyRtaUVh3kRwbvYNJcz4NbWWSt1P",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "9zdSFMpnjS9J6DrM82HjxxwGVVU37VfBiZ5fJA796Lf8",
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
                account: "9zdSFMpnjS9J6DrM82HjxxwGVVU37VfBiZ5fJA796Lf8",
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
                account: "9zdSFMpnjS9J6DrM82HjxxwGVVU37VfBiZ5fJA796Lf8",
                mint: "2se1H9trBxHVTeiCpuk4manbaq1b4iio2MYWcLCnLMFa",
                owner: "93ccg27u1tHK1FzqoyRtaUVh3kRwbvYNJcz4NbWWSt1P",
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
                destination: "8Kag8CqNdCX55s4A5W4iraS71h6mv6uTHqsJbexdrrZm",
                lamports: 640250000,
                source: "93ccg27u1tHK1FzqoyRtaUVh3kRwbvYNJcz4NbWWSt1P",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "aury7LJUae7a92PBo35vVbP61GX8VbyxFKausvUtBrt",
                lamports: 344750000,
                source: "93ccg27u1tHK1FzqoyRtaUVh3kRwbvYNJcz4NbWWSt1P",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "E6dkaYhqbZN3a1pDrdbajJ9D8xA66LBBcjWi6dDNAuJH",
                lamports: 591000000,
                source: "93ccg27u1tHK1FzqoyRtaUVh3kRwbvYNJcz4NbWWSt1P",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "H9Yi8cfwvwKJvpLMPTLftPdVkvmzkN7BamcAT5hyEh8j",
                lamports: 18124000000,
                source: "93ccg27u1tHK1FzqoyRtaUVh3kRwbvYNJcz4NbWWSt1P",
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
                destination: "9zdSFMpnjS9J6DrM82HjxxwGVVU37VfBiZ5fJA796Lf8",
                multisigAuthority:
                  "3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK",
                signers: ["3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK"],
                source: "Cf4R5CaFyNxoCBcgHfRRz9ghCqTHkVK6TZZeEkoPiC7h",
              },
              type: "transfer",
            },
            program: "spl-token",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          },
          {
            parsed: {
              info: {
                account: "Cf4R5CaFyNxoCBcgHfRRz9ghCqTHkVK6TZZeEkoPiC7h",
                destination: "H9Yi8cfwvwKJvpLMPTLftPdVkvmzkN7BamcAT5hyEh8j",
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
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3449 of 177045 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL consumed 27053 of 200000 compute units",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL success",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz invoke [1]",
      "Program log: Instruction: Buy",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3246 of 105675 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: CloseAccount",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2422 of 99467 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz consumed 104312 of 200000 compute units",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz success",
    ],
    postBalances: [
      68758795402, 2039280, 0, 23457503023, 0, 13298071422340, 5616720, 0,
      4572720, 2908453635467, 11341016825250, 1461600, 1, 1089991680, 1,
      11352771574, 1141440, 898174080, 1141440,
    ],
    postTokenBalances: [
      {
        accountIndex: 1,
        mint: "2se1H9trBxHVTeiCpuk4manbaq1b4iio2MYWcLCnLMFa",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1.0,
          uiAmountString: "1",
        },
      },
    ],
    preBalances: [
      88460839682, 0, 2039280, 5330064783, 1398960, 13297480422340, 5616720, 0,
      4572720, 2907813385467, 11340672075250, 1461600, 1, 1089991680, 1,
      11352771574, 1141440, 898174080, 1141440,
    ],
    preTokenBalances: [
      {
        accountIndex: 2,
        mint: "2se1H9trBxHVTeiCpuk4manbaq1b4iio2MYWcLCnLMFa",
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
  slot: 104223648,
  transaction: {
    message: {
      accountKeys: [
        {
          pubkey: "93ccg27u1tHK1FzqoyRtaUVh3kRwbvYNJcz4NbWWSt1P",
          signer: true,
          writable: true,
        },
        {
          pubkey: "9zdSFMpnjS9J6DrM82HjxxwGVVU37VfBiZ5fJA796Lf8",
          signer: false,
          writable: true,
        },
        {
          pubkey: "Cf4R5CaFyNxoCBcgHfRRz9ghCqTHkVK6TZZeEkoPiC7h",
          signer: false,
          writable: true,
        },
        {
          pubkey: "H9Yi8cfwvwKJvpLMPTLftPdVkvmzkN7BamcAT5hyEh8j",
          signer: false,
          writable: true,
        },
        {
          pubkey: "BwjN9d3PkX9pWEEeF2vMmGKrPG1DKxVQwcXSrDGW2vsq",
          signer: false,
          writable: true,
        },
        {
          pubkey: "E6dkaYhqbZN3a1pDrdbajJ9D8xA66LBBcjWi6dDNAuJH",
          signer: false,
          writable: true,
        },
        {
          pubkey: "3ZRNaauaSBp3L1kRsnTkWy2S174NL6DMgZ7xhsNYyExQ",
          signer: false,
          writable: true,
        },
        {
          pubkey: "8xVXixWBmbP5QQMMNseHqs12qrJxjNoEUjUsntRnYxq4",
          signer: false,
          writable: true,
        },
        {
          pubkey: "9vwYtcJsH1MskNaixcjgNBnvBDkTBhyg25umod1rgMQL",
          signer: false,
          writable: true,
        },
        {
          pubkey: "8Kag8CqNdCX55s4A5W4iraS71h6mv6uTHqsJbexdrrZm",
          signer: false,
          writable: true,
        },
        {
          pubkey: "aury7LJUae7a92PBo35vVbP61GX8VbyxFKausvUtBrt",
          signer: false,
          writable: true,
        },
        {
          pubkey: "2se1H9trBxHVTeiCpuk4manbaq1b4iio2MYWcLCnLMFa",
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
              account: "9zdSFMpnjS9J6DrM82HjxxwGVVU37VfBiZ5fJA796Lf8",
              mint: "2se1H9trBxHVTeiCpuk4manbaq1b4iio2MYWcLCnLMFa",
              rentSysvar: "SysvarRent111111111111111111111111111111111",
              source: "93ccg27u1tHK1FzqoyRtaUVh3kRwbvYNJcz4NbWWSt1P",
              systemProgram: "11111111111111111111111111111111",
              tokenProgram: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              wallet: "93ccg27u1tHK1FzqoyRtaUVh3kRwbvYNJcz4NbWWSt1P",
            },
            type: "create",
          },
          program: "spl-associated-token-account",
          programId: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
        },
        {
          accounts: [
            "93ccg27u1tHK1FzqoyRtaUVh3kRwbvYNJcz4NbWWSt1P",
            "9zdSFMpnjS9J6DrM82HjxxwGVVU37VfBiZ5fJA796Lf8",
            "Cf4R5CaFyNxoCBcgHfRRz9ghCqTHkVK6TZZeEkoPiC7h",
            "H9Yi8cfwvwKJvpLMPTLftPdVkvmzkN7BamcAT5hyEh8j",
            "BwjN9d3PkX9pWEEeF2vMmGKrPG1DKxVQwcXSrDGW2vsq",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "E6dkaYhqbZN3a1pDrdbajJ9D8xA66LBBcjWi6dDNAuJH",
            "3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK",
            "3ZRNaauaSBp3L1kRsnTkWy2S174NL6DMgZ7xhsNYyExQ",
            "8xVXixWBmbP5QQMMNseHqs12qrJxjNoEUjUsntRnYxq4",
            "7gDpaG9kUXHTz1dj4eVfykqtXnKq2efyuGigdMeCy74B",
            "11111111111111111111111111111111",
            "9vwYtcJsH1MskNaixcjgNBnvBDkTBhyg25umod1rgMQL",
            "8Kag8CqNdCX55s4A5W4iraS71h6mv6uTHqsJbexdrrZm",
            "aury7LJUae7a92PBo35vVbP61GX8VbyxFKausvUtBrt",
          ],
          data: "4h81nn1umFAX",
          programId: "CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz",
        },
      ],
      recentBlockhash: "TWVEwBmUbkK2gfYh51WtWJWU8goct1c7duTmQBeDwFy",
    },
    signatures: [
      "3qmi5w4ZJsf1PJED21bNVpwgobcMFxUeb6coKJNA32F1fW5WELDXAxnjLzsfnxGnKQfKLuwVBk3xD6zbcjvA9GTX",
    ],
  },
};
export default saleTx;
