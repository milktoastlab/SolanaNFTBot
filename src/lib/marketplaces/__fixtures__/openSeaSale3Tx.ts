import { ParsedConfirmedTransaction } from "@solana/web3.js";

const saleTx: ParsedConfirmedTransaction = {
  blockTime: 1650281847,
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
                destination: "5qXGXK96DDm8tYGcH1Er5RVLKLMtHxxsJWYKjuScD1Vp",
                lamports: 99000000000,
                source: "4ZGWPgjMNGHMrUJqyLFzEk92XDJwUFvyaAWbSm17ueHC",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "7CJBzeZi6Zcben2iKLe7L1XrYfgNagk9hHdijtJpqsYe",
                lamports: 897840,
                source: "4ZGWPgjMNGHMrUJqyLFzEk92XDJwUFvyaAWbSm17ueHC",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "7CJBzeZi6Zcben2iKLe7L1XrYfgNagk9hHdijtJpqsYe",
                space: 1,
              },
              type: "allocate",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "7CJBzeZi6Zcben2iKLe7L1XrYfgNagk9hHdijtJpqsYe",
                owner: "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk",
              },
              type: "assign",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
        ],
      },
      {
        index: 1,
        instructions: [
          {
            parsed: {
              info: {
                destination: "GVnaCFMZtnX91PZtGQ8J6MxNQoKf8XyvLPtv4BYBykHX",
                lamports: 2763120,
                source: "4ZGWPgjMNGHMrUJqyLFzEk92XDJwUFvyaAWbSm17ueHC",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "GVnaCFMZtnX91PZtGQ8J6MxNQoKf8XyvLPtv4BYBykHX",
                space: 269,
              },
              type: "allocate",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "GVnaCFMZtnX91PZtGQ8J6MxNQoKf8XyvLPtv4BYBykHX",
                owner: "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk",
              },
              type: "assign",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
        ],
      },
      {
        index: 2,
        instructions: [
          {
            parsed: {
              info: {
                destination: "9BKWqDHfHZh9j39xakYVMdr6hXmCLHH5VfCpeq2idU9L",
                lamports: 1621620000,
                source: "5qXGXK96DDm8tYGcH1Er5RVLKLMtHxxsJWYKjuScD1Vp",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "9FYsKrNuEweb55Wa2jaj8wTKYDBvuCG3huhakEj96iN9",
                lamports: 1039500000,
                source: "5qXGXK96DDm8tYGcH1Er5RVLKLMtHxxsJWYKjuScD1Vp",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "HNGVuL5kqjDehw7KR63w9gxow32sX6xzRNgLb8GkbwCM",
                lamports: 1039500000,
                source: "5qXGXK96DDm8tYGcH1Er5RVLKLMtHxxsJWYKjuScD1Vp",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "7FzXBBPjzrNJbm9MrZKZcyvP3ojVeYPUG2XkBPVZvuBu",
                lamports: 415800000,
                source: "5qXGXK96DDm8tYGcH1Er5RVLKLMtHxxsJWYKjuScD1Vp",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "DC2mkgwhy56w3viNtHDjJQmc7SGu2QX785bS4aexojwX",
                lamports: 41580000,
                source: "5qXGXK96DDm8tYGcH1Er5RVLKLMtHxxsJWYKjuScD1Vp",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "2e3dJ3mEjpdMDZsL5rGuCkMxqE116nBpMS2tKu9v8RRB",
                lamports: 2970000000,
                source: "5qXGXK96DDm8tYGcH1Er5RVLKLMtHxxsJWYKjuScD1Vp",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "AYfUa1MUjjivuDKDuXhY5rHCaDBvyAQrNh3XD6bYX8Ty",
                lamports: 91872000000,
                source: "5qXGXK96DDm8tYGcH1Er5RVLKLMtHxxsJWYKjuScD1Vp",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "Fzzx1oFf4X7b9Tws5Ldp5Tnc5u3dX3jzgQ58dp2bQXqb",
                mint: "FfiAdK89m762LxdCQTjdKB4qyH77PMzhgt2wbP5SGg6V",
                rentSysvar: "SysvarRent111111111111111111111111111111111",
                source: "4ZGWPgjMNGHMrUJqyLFzEk92XDJwUFvyaAWbSm17ueHC",
                systemProgram: "11111111111111111111111111111111",
                tokenProgram: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                wallet: "4ZGWPgjMNGHMrUJqyLFzEk92XDJwUFvyaAWbSm17ueHC",
              },
              type: "create",
            },
            program: "spl-associated-token-account",
            programId: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
          },
          {
            parsed: {
              info: {
                destination: "Fzzx1oFf4X7b9Tws5Ldp5Tnc5u3dX3jzgQ58dp2bQXqb",
                lamports: 2039280,
                source: "4ZGWPgjMNGHMrUJqyLFzEk92XDJwUFvyaAWbSm17ueHC",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "Fzzx1oFf4X7b9Tws5Ldp5Tnc5u3dX3jzgQ58dp2bQXqb",
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
                account: "Fzzx1oFf4X7b9Tws5Ldp5Tnc5u3dX3jzgQ58dp2bQXqb",
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
                account: "Fzzx1oFf4X7b9Tws5Ldp5Tnc5u3dX3jzgQ58dp2bQXqb",
                mint: "FfiAdK89m762LxdCQTjdKB4qyH77PMzhgt2wbP5SGg6V",
                owner: "4ZGWPgjMNGHMrUJqyLFzEk92XDJwUFvyaAWbSm17ueHC",
                rentSysvar: "SysvarRent111111111111111111111111111111111",
              },
              type: "initializeAccount",
            },
            program: "spl-token",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          },
          {
            parsed: {
              info: {
                amount: "1",
                authority: "HS2eL9WJbh7pA4i4veK3YDwhGLRjY3uKryvG1NbHRprj",
                destination: "Fzzx1oFf4X7b9Tws5Ldp5Tnc5u3dX3jzgQ58dp2bQXqb",
                source: "3A5yUQ1taLvuyA2GaeF1Qjpcj5i6SK3cH4HTG6LmNKwt",
              },
              type: "transfer",
            },
            program: "spl-token",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          },
        ],
      },
      {
        index: 3,
        instructions: [
          {
            parsed: {
              info: {
                destination: "4bBkJxZtco4czavs94pEhpa3dTQfdvmDvYTxwHFH3ogx",
                lamports: 2234160,
                source: "4ZGWPgjMNGHMrUJqyLFzEk92XDJwUFvyaAWbSm17ueHC",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "4bBkJxZtco4czavs94pEhpa3dTQfdvmDvYTxwHFH3ogx",
                space: 193,
              },
              type: "allocate",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "4bBkJxZtco4czavs94pEhpa3dTQfdvmDvYTxwHFH3ogx",
                owner: "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk",
              },
              type: "assign",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
        ],
      },
    ],
    logMessages: [
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk invoke [1]",
      "Program log: Instruction: PublicBuy",
      "Program log: Ok(252), Err(Custom(6013)), 252",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Transfer 897840 lamports to the new account",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Allocate space for the account 7CJBzeZi6Zcben2iKLe7L1XrYfgNagk9hHdijtJpqsYe",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Assign the account to the owning program",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Completed assignation!",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk consumed 63218 of 200000 compute units",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk success",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk invoke [1]",
      "Program log: Instruction: PrintBidReceipt",
      "Program log: Transfer 2763120 lamports to the new account",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Allocate space for the account GVnaCFMZtnX91PZtGQ8J6MxNQoKf8XyvLPtv4BYBykHX",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Assign the account to the owning program",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Completed assignation!",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk consumed 35456 of 200000 compute units",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk success",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk invoke [1]",
      "Program log: Instruction: ExecuteSale",
      "Program log: Ok(252), Err(Custom(6013)), 252",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL invoke [2]",
      "Program log: Transfer 2039280 lamports to the associated token account",
      "Program 11111111111111111111111111111111 invoke [3]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Allocate space for the associated token account",
      "Program 11111111111111111111111111111111 invoke [3]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Assign the associated token account to the SPL Token program",
      "Program 11111111111111111111111111111111 invoke [3]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Initialize the associated token account",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [3]",
      "Program log: Instruction: InitializeAccount",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3297 of 103392 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL consumed 24372 of 123818 compute units",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2712 of 93057 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk consumed 112861 of 200000 compute units",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk success",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk invoke [1]",
      "Program log: Instruction: PrintPurchaseReceipt",
      "Program log: Transfer 2234160 lamports to the new account",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Allocate space for the account 4bBkJxZtco4czavs94pEhpa3dTQfdvmDvYTxwHFH3ogx",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Assign the account to the owning program",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Completed assignation!",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk consumed 47454 of 200000 compute units",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk success",
    ],
    postBalances: [
      1041366112522, 43476452999, 2039280, 2234160, 0, 0, 0, 74091992398, 0, 0,
      104685015440, 67120527091, 315028594814, 6905505600, 2533440, 2039280,
      2763120, 225253532855, 1, 5616720, 898174080, 194991640, 1461600, 4085520,
      1141440, 0, 152395037831, 0, 1009200, 953185920,
    ],
    postTokenBalances: [
      {
        accountIndex: 2,
        mint: "FfiAdK89m762LxdCQTjdKB4qyH77PMzhgt2wbP5SGg6V",
        owner: "AYfUa1MUjjivuDKDuXhY5rHCaDBvyAQrNh3XD6bYX8Ty",
        uiTokenAmount: {
          amount: "0",
          decimals: 0,
          uiAmount: null,
          uiAmountString: "0",
        },
      },
      {
        accountIndex: 15,
        mint: "FfiAdK89m762LxdCQTjdKB4qyH77PMzhgt2wbP5SGg6V",
        owner: "4ZGWPgjMNGHMrUJqyLFzEk92XDJwUFvyaAWbSm17ueHC",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1,
          uiAmountString: "1",
        },
      },
    ],
    preBalances: [
      1140372256242, 40506452999, 2039280, 0, 0, 897840, 0, 73676192398, 0, 0,
      103063395440, 66081027091, 223156594814, 6863925600, 2533440, 0, 0,
      224214032855, 1, 5616720, 898174080, 194991640, 1461600, 4085520, 1141440,
      0, 152395037831, 0, 1009200, 953185920,
    ],
    preTokenBalances: [
      {
        accountIndex: 2,
        mint: "FfiAdK89m762LxdCQTjdKB4qyH77PMzhgt2wbP5SGg6V",
        owner: "AYfUa1MUjjivuDKDuXhY5rHCaDBvyAQrNh3XD6bYX8Ty",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1,
          uiAmountString: "1",
        },
      },
    ],
    rewards: [],
    status: { Ok: null },
  },
  slot: 130271640,
  transaction: {
    message: {
      accountKeys: [
        {
          pubkey: "4ZGWPgjMNGHMrUJqyLFzEk92XDJwUFvyaAWbSm17ueHC",
          signer: true,
          writable: true,
        },
        {
          pubkey: "2e3dJ3mEjpdMDZsL5rGuCkMxqE116nBpMS2tKu9v8RRB",
          signer: false,
          writable: true,
        },
        {
          pubkey: "3A5yUQ1taLvuyA2GaeF1Qjpcj5i6SK3cH4HTG6LmNKwt",
          signer: false,
          writable: true,
        },
        {
          pubkey: "4bBkJxZtco4czavs94pEhpa3dTQfdvmDvYTxwHFH3ogx",
          signer: false,
          writable: true,
        },
        {
          pubkey: "5qXGXK96DDm8tYGcH1Er5RVLKLMtHxxsJWYKjuScD1Vp",
          signer: false,
          writable: true,
        },
        {
          pubkey: "7brnY48kvFyPQNcKPUdhAWsXGrijrynm3HMPgCETmPeP",
          signer: false,
          writable: true,
        },
        {
          pubkey: "7CJBzeZi6Zcben2iKLe7L1XrYfgNagk9hHdijtJpqsYe",
          signer: false,
          writable: true,
        },
        {
          pubkey: "7FzXBBPjzrNJbm9MrZKZcyvP3ojVeYPUG2XkBPVZvuBu",
          signer: false,
          writable: true,
        },
        {
          pubkey: "836amfe6knfizUBxZqejArTUiY2FscQJjxGpCWwgw1vf",
          signer: false,
          writable: true,
        },
        {
          pubkey: "91boRn3TZ7oeprHKk3q8QbyfevjZxLnL9LZsEqN468GE",
          signer: false,
          writable: true,
        },
        {
          pubkey: "9BKWqDHfHZh9j39xakYVMdr6hXmCLHH5VfCpeq2idU9L",
          signer: false,
          writable: true,
        },
        {
          pubkey: "9FYsKrNuEweb55Wa2jaj8wTKYDBvuCG3huhakEj96iN9",
          signer: false,
          writable: true,
        },
        {
          pubkey: "AYfUa1MUjjivuDKDuXhY5rHCaDBvyAQrNh3XD6bYX8Ty",
          signer: false,
          writable: true,
        },
        {
          pubkey: "DC2mkgwhy56w3viNtHDjJQmc7SGu2QX785bS4aexojwX",
          signer: false,
          writable: true,
        },
        {
          pubkey: "DmqoaxU4ajeEoYbCTmuioTDDfBC8mdieBndAmS4s6KzQ",
          signer: false,
          writable: true,
        },
        {
          pubkey: "Fzzx1oFf4X7b9Tws5Ldp5Tnc5u3dX3jzgQ58dp2bQXqb",
          signer: false,
          writable: true,
        },
        {
          pubkey: "GVnaCFMZtnX91PZtGQ8J6MxNQoKf8XyvLPtv4BYBykHX",
          signer: false,
          writable: true,
        },
        {
          pubkey: "HNGVuL5kqjDehw7KR63w9gxow32sX6xzRNgLb8GkbwCM",
          signer: false,
          writable: true,
        },
        {
          pubkey: "11111111111111111111111111111111",
          signer: false,
          writable: false,
        },
        {
          pubkey: "22CV2FHavBttAqfAZbxpcHzSXkL3TyDwqeykw6m22RDe",
          signer: false,
          writable: false,
        },
        {
          pubkey: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
          signer: false,
          writable: false,
        },
        {
          pubkey: "BAfqGqULeJg6XVqw75orgNnmELcuwnTSnVpvhQmPPuFK",
          signer: false,
          writable: false,
        },
        {
          pubkey: "FfiAdK89m762LxdCQTjdKB4qyH77PMzhgt2wbP5SGg6V",
          signer: false,
          writable: false,
        },
        {
          pubkey: "GWErq8nJf5JQtohg5k7RTkiZmoCxvGBJqbMSfkrxYFFy",
          signer: false,
          writable: false,
        },
        {
          pubkey: "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk",
          signer: false,
          writable: false,
        },
        {
          pubkey: "HS2eL9WJbh7pA4i4veK3YDwhGLRjY3uKryvG1NbHRprj",
          signer: false,
          writable: false,
        },
        {
          pubkey: "So11111111111111111111111111111111111111112",
          signer: false,
          writable: false,
        },
        {
          pubkey: "Sysvar1nstructions1111111111111111111111111",
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
      ],
      instructions: [
        {
          accounts: [
            "4ZGWPgjMNGHMrUJqyLFzEk92XDJwUFvyaAWbSm17ueHC",
            "4ZGWPgjMNGHMrUJqyLFzEk92XDJwUFvyaAWbSm17ueHC",
            "4ZGWPgjMNGHMrUJqyLFzEk92XDJwUFvyaAWbSm17ueHC",
            "So11111111111111111111111111111111111111112",
            "3A5yUQ1taLvuyA2GaeF1Qjpcj5i6SK3cH4HTG6LmNKwt",
            "22CV2FHavBttAqfAZbxpcHzSXkL3TyDwqeykw6m22RDe",
            "5qXGXK96DDm8tYGcH1Er5RVLKLMtHxxsJWYKjuScD1Vp",
            "BAfqGqULeJg6XVqw75orgNnmELcuwnTSnVpvhQmPPuFK",
            "GWErq8nJf5JQtohg5k7RTkiZmoCxvGBJqbMSfkrxYFFy",
            "91boRn3TZ7oeprHKk3q8QbyfevjZxLnL9LZsEqN468GE",
            "7CJBzeZi6Zcben2iKLe7L1XrYfgNagk9hHdijtJpqsYe",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "11111111111111111111111111111111",
            "SysvarRent111111111111111111111111111111111",
          ],
          data: "6BjfuCDKyc5ubRvGND8wVQzxSMF3fFbGgvtw",
          programId: "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk",
        },
        {
          accounts: [
            "GVnaCFMZtnX91PZtGQ8J6MxNQoKf8XyvLPtv4BYBykHX",
            "4ZGWPgjMNGHMrUJqyLFzEk92XDJwUFvyaAWbSm17ueHC",
            "11111111111111111111111111111111",
            "SysvarRent111111111111111111111111111111111",
            "Sysvar1nstructions1111111111111111111111111",
          ],
          data: "2D7j12dEPh7T3",
          programId: "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk",
        },
        {
          accounts: [
            "4ZGWPgjMNGHMrUJqyLFzEk92XDJwUFvyaAWbSm17ueHC",
            "AYfUa1MUjjivuDKDuXhY5rHCaDBvyAQrNh3XD6bYX8Ty",
            "3A5yUQ1taLvuyA2GaeF1Qjpcj5i6SK3cH4HTG6LmNKwt",
            "FfiAdK89m762LxdCQTjdKB4qyH77PMzhgt2wbP5SGg6V",
            "22CV2FHavBttAqfAZbxpcHzSXkL3TyDwqeykw6m22RDe",
            "So11111111111111111111111111111111111111112",
            "5qXGXK96DDm8tYGcH1Er5RVLKLMtHxxsJWYKjuScD1Vp",
            "AYfUa1MUjjivuDKDuXhY5rHCaDBvyAQrNh3XD6bYX8Ty",
            "Fzzx1oFf4X7b9Tws5Ldp5Tnc5u3dX3jzgQ58dp2bQXqb",
            "BAfqGqULeJg6XVqw75orgNnmELcuwnTSnVpvhQmPPuFK",
            "GWErq8nJf5JQtohg5k7RTkiZmoCxvGBJqbMSfkrxYFFy",
            "91boRn3TZ7oeprHKk3q8QbyfevjZxLnL9LZsEqN468GE",
            "2e3dJ3mEjpdMDZsL5rGuCkMxqE116nBpMS2tKu9v8RRB",
            "7CJBzeZi6Zcben2iKLe7L1XrYfgNagk9hHdijtJpqsYe",
            "7brnY48kvFyPQNcKPUdhAWsXGrijrynm3HMPgCETmPeP",
            "836amfe6knfizUBxZqejArTUiY2FscQJjxGpCWwgw1vf",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "11111111111111111111111111111111",
            "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
            "HS2eL9WJbh7pA4i4veK3YDwhGLRjY3uKryvG1NbHRprj",
            "SysvarRent111111111111111111111111111111111",
            "9BKWqDHfHZh9j39xakYVMdr6hXmCLHH5VfCpeq2idU9L",
            "9FYsKrNuEweb55Wa2jaj8wTKYDBvuCG3huhakEj96iN9",
            "HNGVuL5kqjDehw7KR63w9gxow32sX6xzRNgLb8GkbwCM",
            "7FzXBBPjzrNJbm9MrZKZcyvP3ojVeYPUG2XkBPVZvuBu",
            "DC2mkgwhy56w3viNtHDjJQmc7SGu2QX785bS4aexojwX",
          ],
          data: "63LNsZWnP5nH22Swj9EAzK3gbak4JGFuCCgGw",
          programId: "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk",
        },
        {
          accounts: [
            "4bBkJxZtco4czavs94pEhpa3dTQfdvmDvYTxwHFH3ogx",
            "DmqoaxU4ajeEoYbCTmuioTDDfBC8mdieBndAmS4s6KzQ",
            "GVnaCFMZtnX91PZtGQ8J6MxNQoKf8XyvLPtv4BYBykHX",
            "4ZGWPgjMNGHMrUJqyLFzEk92XDJwUFvyaAWbSm17ueHC",
            "11111111111111111111111111111111",
            "SysvarRent111111111111111111111111111111111",
            "Sysvar1nstructions1111111111111111111111111",
          ],
          data: "3u2uhbNXzTFBb",
          programId: "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk",
        },
      ],
      recentBlockhash: "EqFgqBcEBZmzWeGyk9PuKAtwtD4ZEBxMmBdF3mqHryk8",
    },
    signatures: [
      "66EfiWJrPWzdu4BqFAff1Eov7JQfUrfMbmmxAKEx6QqrS2D6zm5XbsCP5yq3RnaUzUDxc5tWJBChBjmhWNFXzmaR",
    ],
  },
};

export default saleTx;
