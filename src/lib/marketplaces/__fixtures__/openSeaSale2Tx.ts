import { ParsedConfirmedTransaction } from "@solana/web3.js";

const saleTx: ParsedConfirmedTransaction = {
  blockTime: 1650205927,
  meta: {
    err: null,
    fee: 10000,
    innerInstructions: [
      {
        index: 0,
        instructions: [
          {
            parsed: {
              info: {
                amount: "1",
                delegate: "HS2eL9WJbh7pA4i4veK3YDwhGLRjY3uKryvG1NbHRprj",
                owner: "GHpmaYCQpsHdia7qJLzSANwCXjQGhBaqrjcJkQF1WxhA",
                source: "824CvcF9V7tNJM4hRMJkn4ZvKTH5LNriRaz3vti8y9sw",
              },
              type: "approve",
            },
            program: "spl-token",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          },
          {
            parsed: {
              info: {
                destination: "Gihc1SqWvPFvLtNuMoYzZmS5xt9PJhAENc41fzeJjhx3",
                lamports: 897840,
                source: "5xyoD5hnWDBLsW6rjW2TBmqiDQsbod6Uaw15dRhNrDzn",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "Gihc1SqWvPFvLtNuMoYzZmS5xt9PJhAENc41fzeJjhx3",
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
                account: "Gihc1SqWvPFvLtNuMoYzZmS5xt9PJhAENc41fzeJjhx3",
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
                destination: "pAHAKoTJsAAe2ZcvTZUxoYzuygVAFAmbYmJYdWT886r",
                lamports: 1795680,
                source: "5xyoD5hnWDBLsW6rjW2TBmqiDQsbod6Uaw15dRhNrDzn",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
        ],
      },
      {
        index: 5,
        instructions: [
          {
            parsed: {
              info: {
                destination: "FP1Wcq6ptVY6Q2JkTgL2SyZdwpRFUZGw8HEBvE9Zyo7P",
                lamports: 2039280,
                source: "GHpmaYCQpsHdia7qJLzSANwCXjQGhBaqrjcJkQF1WxhA",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "FP1Wcq6ptVY6Q2JkTgL2SyZdwpRFUZGw8HEBvE9Zyo7P",
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
                account: "FP1Wcq6ptVY6Q2JkTgL2SyZdwpRFUZGw8HEBvE9Zyo7P",
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
                account: "FP1Wcq6ptVY6Q2JkTgL2SyZdwpRFUZGw8HEBvE9Zyo7P",
                mint: "CiRHyMF2zUdfqJ5x6ixQnDiPJw4CcWWGmdqS2YQiFd88",
                owner: "C4YZMGs9KfffEqoD6s4oB8r7ipvhJsaGCagKTi2ixN5C",
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
        index: 6,
        instructions: [
          {
            parsed: {
              info: {
                destination: "HPWFCze26yt86yu5V56w8dRSRNvsggJ9bNKwC9qfjBz",
                lamports: 17000000,
                source: "5xwPyXkfmJdmNhdAhsCxBiWdGLABtbuyw9MRAF5b1Z16",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "2Tbc5LX7NSb32jiHMQfLra2vxppM11acfpjQ4VUV6De3",
                lamports: 16500000,
                source: "5xwPyXkfmJdmNhdAhsCxBiWdGLABtbuyw9MRAF5b1Z16",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "3wxiFnooogeur15QFihkEWbJpbr56xSC6xZjBxUw3BVq",
                lamports: 16500000,
                source: "5xwPyXkfmJdmNhdAhsCxBiWdGLABtbuyw9MRAF5b1Z16",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "8mcjXbJ8j4VryYFNpcBCFS37Au8zVYU53WTVaruJWcKt",
                lamports: 25000000,
                source: "5xwPyXkfmJdmNhdAhsCxBiWdGLABtbuyw9MRAF5b1Z16",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "GHpmaYCQpsHdia7qJLzSANwCXjQGhBaqrjcJkQF1WxhA",
                lamports: 925000000,
                source: "5xwPyXkfmJdmNhdAhsCxBiWdGLABtbuyw9MRAF5b1Z16",
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
                authority: "HS2eL9WJbh7pA4i4veK3YDwhGLRjY3uKryvG1NbHRprj",
                destination: "FP1Wcq6ptVY6Q2JkTgL2SyZdwpRFUZGw8HEBvE9Zyo7P",
                source: "824CvcF9V7tNJM4hRMJkn4ZvKTH5LNriRaz3vti8y9sw",
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
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk invoke [1]",
      "Program log: Instruction: Sell",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: Approve",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2050 of 165822 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program log: Transfer 897840 lamports to the new account",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Allocate space for the account Gihc1SqWvPFvLtNuMoYzZmS5xt9PJhAENc41fzeJjhx3",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Assign the account to the owning program",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Completed assignation!",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk consumed 60439 of 200000 compute units",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk success",
      "Program 11111111111111111111111111111111 invoke [1]",
      "Program 11111111111111111111111111111111 success",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk invoke [1]",
      "Program log: Instruction: WithdrawFromFee",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk consumed 13348 of 200000 compute units",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk success",
      "Program 11111111111111111111111111111111 invoke [1]",
      "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [1]",
      "Program 11111111111111111111111111111111 success",
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
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3297 of 179469 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL consumed 24509 of 200000 compute units",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL success",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk invoke [1]",
      "Program log: Instruction: ExecuteSale",
      "Program log: Err(Custom(6013)), Ok(253), 253",
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
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2712 of 123845 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk consumed 82007 of 200000 compute units",
      "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk success",
    ],
    postBalances: [
      1044053447, 10489990000, 2039280, 4085520, 102754659602, 0, 0, 426941640,
      2039280, 0, 489304360448, 0, 4572720, 3543981044, 166821478461, 931289370,
      5616720, 953185920, 1, 0, 1009200, 1461600, 152395037831, 898174080,
      1141440,
    ],
    postTokenBalances: [
      {
        accountIndex: 2,
        mint: "CiRHyMF2zUdfqJ5x6ixQnDiPJw4CcWWGmdqS2YQiFd88",
        owner: "GHpmaYCQpsHdia7qJLzSANwCXjQGhBaqrjcJkQF1WxhA",
        uiTokenAmount: {
          amount: "0",
          decimals: 0,
          uiAmount: null,
          uiAmountString: "0",
        },
      },
      {
        accountIndex: 8,
        mint: "CiRHyMF2zUdfqJ5x6ixQnDiPJw4CcWWGmdqS2YQiFd88",
        owner: "C4YZMGs9KfffEqoD6s4oB8r7ipvhJsaGCagKTi2ixN5C",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1,
          uiAmountString: "1",
        },
      },
    ],
    preBalances: [
      121102727, 10489990000, 2039280, 4085520, 102754659602, 0, 0, 426043800,
      0, 1000000000, 489279360448, 897840, 4572720, 3526981044, 166804978461,
      914789370, 5616720, 953185920, 1, 0, 1009200, 1461600, 152395037831,
      898174080, 1141440,
    ],
    preTokenBalances: [
      {
        accountIndex: 2,
        mint: "CiRHyMF2zUdfqJ5x6ixQnDiPJw4CcWWGmdqS2YQiFd88",
        owner: "GHpmaYCQpsHdia7qJLzSANwCXjQGhBaqrjcJkQF1WxhA",
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
  slot: 130155306,
  transaction: {
    message: {
      accountKeys: [
        {
          pubkey: "GHpmaYCQpsHdia7qJLzSANwCXjQGhBaqrjcJkQF1WxhA",
          signer: true,
          writable: true,
        },
        {
          pubkey: "pAHAKoTJsAAe2ZcvTZUxoYzuygVAFAmbYmJYdWT886r",
          signer: true,
          writable: true,
        },
        {
          pubkey: "824CvcF9V7tNJM4hRMJkn4ZvKTH5LNriRaz3vti8y9sw",
          signer: false,
          writable: true,
        },
        {
          pubkey: "3o9d13qUvEuuauhFrVom1vuCzgNsJifeaBYDPquaT73Y",
          signer: false,
          writable: true,
        },
        {
          pubkey: "5xyoD5hnWDBLsW6rjW2TBmqiDQsbod6Uaw15dRhNrDzn",
          signer: false,
          writable: true,
        },
        {
          pubkey: "Gihc1SqWvPFvLtNuMoYzZmS5xt9PJhAENc41fzeJjhx3",
          signer: false,
          writable: true,
        },
        {
          pubkey: "4JR3h5EnSg2teCjNLUQBUf4oXFEkZMwQCGBqpvGgfTt5",
          signer: false,
          writable: true,
        },
        {
          pubkey: "C4YZMGs9KfffEqoD6s4oB8r7ipvhJsaGCagKTi2ixN5C",
          signer: false,
          writable: true,
        },
        {
          pubkey: "FP1Wcq6ptVY6Q2JkTgL2SyZdwpRFUZGw8HEBvE9Zyo7P",
          signer: false,
          writable: true,
        },
        {
          pubkey: "5xwPyXkfmJdmNhdAhsCxBiWdGLABtbuyw9MRAF5b1Z16",
          signer: false,
          writable: true,
        },
        {
          pubkey: "8mcjXbJ8j4VryYFNpcBCFS37Au8zVYU53WTVaruJWcKt",
          signer: false,
          writable: true,
        },
        {
          pubkey: "5ssHxeeehmY5y3C8RZeB5YmxXFC5cgNwtxhBhxW7BnC3",
          signer: false,
          writable: true,
        },
        {
          pubkey: "86V3AnzroujF3SF6jSzzN5BJxiJ2BVh86x3p6uRYcg1k",
          signer: false,
          writable: true,
        },
        {
          pubkey: "HPWFCze26yt86yu5V56w8dRSRNvsggJ9bNKwC9qfjBz",
          signer: false,
          writable: true,
        },
        {
          pubkey: "2Tbc5LX7NSb32jiHMQfLra2vxppM11acfpjQ4VUV6De3",
          signer: false,
          writable: true,
        },
        {
          pubkey: "3wxiFnooogeur15QFihkEWbJpbr56xSC6xZjBxUw3BVq",
          signer: false,
          writable: true,
        },
        {
          pubkey: "EBDvjxNibXpXz3euMqcmLMwf5gWcFJKD88jxsZ16ttkg",
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
          pubkey: "HS2eL9WJbh7pA4i4veK3YDwhGLRjY3uKryvG1NbHRprj",
          signer: false,
          writable: false,
        },
        {
          pubkey: "SysvarRent111111111111111111111111111111111",
          signer: false,
          writable: false,
        },
        {
          pubkey: "CiRHyMF2zUdfqJ5x6ixQnDiPJw4CcWWGmdqS2YQiFd88",
          signer: false,
          writable: false,
        },
        {
          pubkey: "So11111111111111111111111111111111111111112",
          signer: false,
          writable: false,
        },
        {
          pubkey: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
          signer: false,
          writable: false,
        },
        {
          pubkey: "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk",
          signer: false,
          writable: false,
        },
      ],
      instructions: [
        {
          accounts: [
            "GHpmaYCQpsHdia7qJLzSANwCXjQGhBaqrjcJkQF1WxhA",
            "824CvcF9V7tNJM4hRMJkn4ZvKTH5LNriRaz3vti8y9sw",
            "EBDvjxNibXpXz3euMqcmLMwf5gWcFJKD88jxsZ16ttkg",
            "pAHAKoTJsAAe2ZcvTZUxoYzuygVAFAmbYmJYdWT886r",
            "3o9d13qUvEuuauhFrVom1vuCzgNsJifeaBYDPquaT73Y",
            "5xyoD5hnWDBLsW6rjW2TBmqiDQsbod6Uaw15dRhNrDzn",
            "Gihc1SqWvPFvLtNuMoYzZmS5xt9PJhAENc41fzeJjhx3",
            "4JR3h5EnSg2teCjNLUQBUf4oXFEkZMwQCGBqpvGgfTt5",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "11111111111111111111111111111111",
            "HS2eL9WJbh7pA4i4veK3YDwhGLRjY3uKryvG1NbHRprj",
            "SysvarRent111111111111111111111111111111111",
          ],
          data: "81r6u24fHZhKyc6M2WCR5XYgv31RuV6rV1Wdd",
          programId: "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk",
        },
        {
          parsed: {
            info: {
              destination: "5xyoD5hnWDBLsW6rjW2TBmqiDQsbod6Uaw15dRhNrDzn",
              lamports: 897840,
              source: "GHpmaYCQpsHdia7qJLzSANwCXjQGhBaqrjcJkQF1WxhA",
            },
            type: "transfer",
          },
          program: "system",
          programId: "11111111111111111111111111111111",
        },
        {
          accounts: [
            "pAHAKoTJsAAe2ZcvTZUxoYzuygVAFAmbYmJYdWT886r",
            "pAHAKoTJsAAe2ZcvTZUxoYzuygVAFAmbYmJYdWT886r",
            "5xyoD5hnWDBLsW6rjW2TBmqiDQsbod6Uaw15dRhNrDzn",
            "3o9d13qUvEuuauhFrVom1vuCzgNsJifeaBYDPquaT73Y",
            "11111111111111111111111111111111",
          ],
          data: "PCrWfhudhPULPQhY2paGG7",
          programId: "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk",
        },
        {
          parsed: {
            info: {
              destination: "C4YZMGs9KfffEqoD6s4oB8r7ipvhJsaGCagKTi2ixN5C",
              lamports: 897840,
              source: "pAHAKoTJsAAe2ZcvTZUxoYzuygVAFAmbYmJYdWT886r",
            },
            type: "transfer",
          },
          program: "system",
          programId: "11111111111111111111111111111111",
        },
        {
          parsed: {
            info: {
              destination: "GHpmaYCQpsHdia7qJLzSANwCXjQGhBaqrjcJkQF1WxhA",
              lamports: 897840,
              source: "pAHAKoTJsAAe2ZcvTZUxoYzuygVAFAmbYmJYdWT886r",
            },
            type: "transfer",
          },
          program: "system",
          programId: "11111111111111111111111111111111",
        },
        {
          parsed: {
            info: {
              account: "FP1Wcq6ptVY6Q2JkTgL2SyZdwpRFUZGw8HEBvE9Zyo7P",
              mint: "CiRHyMF2zUdfqJ5x6ixQnDiPJw4CcWWGmdqS2YQiFd88",
              rentSysvar: "SysvarRent111111111111111111111111111111111",
              source: "GHpmaYCQpsHdia7qJLzSANwCXjQGhBaqrjcJkQF1WxhA",
              systemProgram: "11111111111111111111111111111111",
              tokenProgram: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              wallet: "C4YZMGs9KfffEqoD6s4oB8r7ipvhJsaGCagKTi2ixN5C",
            },
            type: "create",
          },
          program: "spl-associated-token-account",
          programId: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
        },
        {
          accounts: [
            "C4YZMGs9KfffEqoD6s4oB8r7ipvhJsaGCagKTi2ixN5C",
            "GHpmaYCQpsHdia7qJLzSANwCXjQGhBaqrjcJkQF1WxhA",
            "824CvcF9V7tNJM4hRMJkn4ZvKTH5LNriRaz3vti8y9sw",
            "CiRHyMF2zUdfqJ5x6ixQnDiPJw4CcWWGmdqS2YQiFd88",
            "EBDvjxNibXpXz3euMqcmLMwf5gWcFJKD88jxsZ16ttkg",
            "So11111111111111111111111111111111111111112",
            "5xwPyXkfmJdmNhdAhsCxBiWdGLABtbuyw9MRAF5b1Z16",
            "GHpmaYCQpsHdia7qJLzSANwCXjQGhBaqrjcJkQF1WxhA",
            "FP1Wcq6ptVY6Q2JkTgL2SyZdwpRFUZGw8HEBvE9Zyo7P",
            "pAHAKoTJsAAe2ZcvTZUxoYzuygVAFAmbYmJYdWT886r",
            "3o9d13qUvEuuauhFrVom1vuCzgNsJifeaBYDPquaT73Y",
            "5xyoD5hnWDBLsW6rjW2TBmqiDQsbod6Uaw15dRhNrDzn",
            "8mcjXbJ8j4VryYFNpcBCFS37Au8zVYU53WTVaruJWcKt",
            "5ssHxeeehmY5y3C8RZeB5YmxXFC5cgNwtxhBhxW7BnC3",
            "Gihc1SqWvPFvLtNuMoYzZmS5xt9PJhAENc41fzeJjhx3",
            "4JR3h5EnSg2teCjNLUQBUf4oXFEkZMwQCGBqpvGgfTt5",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "11111111111111111111111111111111",
            "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
            "HS2eL9WJbh7pA4i4veK3YDwhGLRjY3uKryvG1NbHRprj",
            "SysvarRent111111111111111111111111111111111",
            "86V3AnzroujF3SF6jSzzN5BJxiJ2BVh86x3p6uRYcg1k",
            "HPWFCze26yt86yu5V56w8dRSRNvsggJ9bNKwC9qfjBz",
            "2Tbc5LX7NSb32jiHMQfLra2vxppM11acfpjQ4VUV6De3",
            "3wxiFnooogeur15QFihkEWbJpbr56xSC6xZjBxUw3BVq",
          ],
          data: "63LNsZWnP5nH22SwowudszNaWWQ2mDpCq9cKZ",
          programId: "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk",
        },
      ],
      recentBlockhash: "5VqXz3JW6UhvSZ9KgyPy72afwU76seJ61E4FeeBVBJmc",
    },
    signatures: [
      "4frBMA4q4i11YxxpqNhFaygRuC6wa1XW8KHJwMWCCp3C6piXAWmSGinot7XiBXPqTTcnLGJkgag9Kvuz4gkiMrnX",
      "4VjEjpyUVtZuaBUFkjP9uCZKVMc7xGeuYmvwd8swgTWZ6cEWafnmAz2Qjr92ewMYwzhSZJ7daJ4xxSNkSjT6zGG8",
    ],
  },
};

export default saleTx;
