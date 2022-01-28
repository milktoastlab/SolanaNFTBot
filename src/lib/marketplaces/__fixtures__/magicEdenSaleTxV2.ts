import { ParsedConfirmedTransaction } from "@solana/web3.js";

const saleTx: ParsedConfirmedTransaction = {
  blockTime: 1643310376,
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
                destination: "4p8JyqkVHZHaNxuoXHKCf4G7HPCVQVAzkcrk3qWFYwbd",
                lamports: 800000000,
                source: "87QLcvBCVmfcKo8sVZfPEbRS8PzT9tsgmHuHxRvvrChv",
              },
              type: "transfer",
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
                lamports: 2011440,
                newAccount: "CgbcZSgtCR3sRCXowNPxb7nY2qovJtx2gWHFFy4VxG7z",
                owner: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
                source: "87QLcvBCVmfcKo8sVZfPEbRS8PzT9tsgmHuHxRvvrChv",
                space: 161,
              },
              type: "createAccount",
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
                destination: "RRUMF9KYPcvNSmnicNMAFKx5wDYix3wjNa6bA7R6xqA",
                lamports: 4000000,
                source: "4p8JyqkVHZHaNxuoXHKCf4G7HPCVQVAzkcrk3qWFYwbd",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "Ao65TQeY33TvP8fF36cy8ykgoU8Mbamks4J5oCA8eEWj",
                lamports: 21600000,
                source: "4p8JyqkVHZHaNxuoXHKCf4G7HPCVQVAzkcrk3qWFYwbd",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "BEmqvnMVMDJWw4xN6q7jfnHNbfbgZmnmSQZFc2AfJtqP",
                lamports: 12400000,
                source: "4p8JyqkVHZHaNxuoXHKCf4G7HPCVQVAzkcrk3qWFYwbd",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "3m5x6yLrRsDHQp81jKDBNH1xfy89Wjgc5uiZSzrmdMcy",
                lamports: 2000000,
                source: "4p8JyqkVHZHaNxuoXHKCf4G7HPCVQVAzkcrk3qWFYwbd",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "rFqFJ9g7TGBD8Ed7TPDnvGKZ5pWLPDyxLcvcH2eRCtt",
                lamports: 16000000,
                source: "4p8JyqkVHZHaNxuoXHKCf4G7HPCVQVAzkcrk3qWFYwbd",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "FVftjwhGyfzcGfTGK8SU8E55E3dCod7rQc2fymaR9vTe",
                lamports: 744000000,
                source: "4p8JyqkVHZHaNxuoXHKCf4G7HPCVQVAzkcrk3qWFYwbd",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "BdhynZZn5qNNygMeqfZzwQAqdpcvsoPawVdECnQLorCA",
                mint: "5ygnoy84v2bqMw8iFLD4k3axQfF8wgKQtG6maTtgwojG",
                rentSysvar: "SysvarRent111111111111111111111111111111111",
                source: "87QLcvBCVmfcKo8sVZfPEbRS8PzT9tsgmHuHxRvvrChv",
                systemProgram: "11111111111111111111111111111111",
                tokenProgram: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
                wallet: "87QLcvBCVmfcKo8sVZfPEbRS8PzT9tsgmHuHxRvvrChv",
              },
              type: "create",
            },
            program: "spl-associated-token-account",
            programId: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
          },
          {
            parsed: {
              info: {
                destination: "BdhynZZn5qNNygMeqfZzwQAqdpcvsoPawVdECnQLorCA",
                lamports: 2039280,
                source: "87QLcvBCVmfcKo8sVZfPEbRS8PzT9tsgmHuHxRvvrChv",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "BdhynZZn5qNNygMeqfZzwQAqdpcvsoPawVdECnQLorCA",
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
                account: "BdhynZZn5qNNygMeqfZzwQAqdpcvsoPawVdECnQLorCA",
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
                account: "BdhynZZn5qNNygMeqfZzwQAqdpcvsoPawVdECnQLorCA",
                mint: "5ygnoy84v2bqMw8iFLD4k3axQfF8wgKQtG6maTtgwojG",
                owner: "87QLcvBCVmfcKo8sVZfPEbRS8PzT9tsgmHuHxRvvrChv",
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
                authority: "1BWutmTvYPwDtmw9abTkS4Ssr8no61spGAvW1X6NDix",
                destination: "BdhynZZn5qNNygMeqfZzwQAqdpcvsoPawVdECnQLorCA",
                source: "3qdhuUJTFCb47hztH5PDGF9HTjqEAKDAF4dTHKVaehAL",
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
      "Program M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K invoke [1]",
      "Program log: Instruction: Deposit",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K consumed 10184 of 200000 compute units",
      "Program M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K success",
      "Program M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K invoke [1]",
      "Program log: Instruction: Buy",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K consumed 27510 of 200000 compute units",
      "Program M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K success",
      "Program M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K invoke [1]",
      "Program log: Instruction: ExecuteSale",
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
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3297 of 125376 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL consumed 24372 of 145802 compute units",
      "Program ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2712 of 116265 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K consumed 89981 of 200000 compute units",
      "Program M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K success",
    ],
    postBalances: [
      8279202731, 0, 7162913680, 0, 3147126730, 2039280, 2039280, 89956212927,
      0, 4906800, 212378229132, 721447087, 3601185904, 24081502475, 1, 3654000,
      1461600, 5616720, 953185920, 1009200, 898174080, 0, 1141440,
    ],
    postTokenBalances: [
      {
        accountIndex: 5,
        mint: "5ygnoy84v2bqMw8iFLD4k3axQfF8wgKQtG6maTtgwojG",
        owner: "FVftjwhGyfzcGfTGK8SU8E55E3dCod7rQc2fymaR9vTe",
        uiTokenAmount: {
          amount: "0",
          decimals: 0,
          uiAmount: null,
          uiAmountString: "0",
        },
      },
      {
        accountIndex: 6,
        mint: "5ygnoy84v2bqMw8iFLD4k3axQfF8wgKQtG6maTtgwojG",
        owner: "87QLcvBCVmfcKo8sVZfPEbRS8PzT9tsgmHuHxRvvrChv",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1.0,
          uiAmountString: "1",
        },
      },
    ],
    preBalances: [
      9081247011, 0, 7162913680, 0, 2400892570, 2039280, 0, 89940212927,
      2234160, 4906800, 212374229132, 699847087, 3588785904, 24079502475, 1,
      3654000, 1461600, 5616720, 953185920, 1009200, 898174080, 0, 1141440,
    ],
    preTokenBalances: [
      {
        accountIndex: 5,
        mint: "5ygnoy84v2bqMw8iFLD4k3axQfF8wgKQtG6maTtgwojG",
        owner: "FVftjwhGyfzcGfTGK8SU8E55E3dCod7rQc2fymaR9vTe",
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
  slot: 118115018,
  transaction: {
    message: {
      accountKeys: [
        {
          pubkey: "87QLcvBCVmfcKo8sVZfPEbRS8PzT9tsgmHuHxRvvrChv",
          signer: true,
          writable: true,
        },
        {
          pubkey: "4p8JyqkVHZHaNxuoXHKCf4G7HPCVQVAzkcrk3qWFYwbd",
          signer: false,
          writable: true,
        },
        {
          pubkey: "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
          signer: false,
          writable: true,
        },
        {
          pubkey: "CgbcZSgtCR3sRCXowNPxb7nY2qovJtx2gWHFFy4VxG7z",
          signer: false,
          writable: true,
        },
        {
          pubkey: "FVftjwhGyfzcGfTGK8SU8E55E3dCod7rQc2fymaR9vTe",
          signer: false,
          writable: true,
        },
        {
          pubkey: "3qdhuUJTFCb47hztH5PDGF9HTjqEAKDAF4dTHKVaehAL",
          signer: false,
          writable: true,
        },
        {
          pubkey: "BdhynZZn5qNNygMeqfZzwQAqdpcvsoPawVdECnQLorCA",
          signer: false,
          writable: true,
        },
        {
          pubkey: "rFqFJ9g7TGBD8Ed7TPDnvGKZ5pWLPDyxLcvcH2eRCtt",
          signer: false,
          writable: true,
        },
        {
          pubkey: "9kDcWHT7brm8bX9UxH2JAbUHWrcsHaDRZwfGaXF63Nfy",
          signer: false,
          writable: true,
        },
        {
          pubkey: "9sfttw8dc1j7RsSgiFdDyt1a1XyRT3BPgFqYCXysER5W",
          signer: false,
          writable: true,
        },
        {
          pubkey: "RRUMF9KYPcvNSmnicNMAFKx5wDYix3wjNa6bA7R6xqA",
          signer: false,
          writable: true,
        },
        {
          pubkey: "Ao65TQeY33TvP8fF36cy8ykgoU8Mbamks4J5oCA8eEWj",
          signer: false,
          writable: true,
        },
        {
          pubkey: "BEmqvnMVMDJWw4xN6q7jfnHNbfbgZmnmSQZFc2AfJtqP",
          signer: false,
          writable: true,
        },
        {
          pubkey: "3m5x6yLrRsDHQp81jKDBNH1xfy89Wjgc5uiZSzrmdMcy",
          signer: false,
          writable: true,
        },
        {
          pubkey: "11111111111111111111111111111111",
          signer: false,
          writable: false,
        },
        {
          pubkey: "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
          signer: false,
          writable: false,
        },
        {
          pubkey: "5ygnoy84v2bqMw8iFLD4k3axQfF8wgKQtG6maTtgwojG",
          signer: false,
          writable: false,
        },
        {
          pubkey: "Bt1LrjGhVBhCvntA1Gaji6Lxcq75P314iX2UjjLsKcU9",
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
          pubkey: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
          signer: false,
          writable: false,
        },
        {
          pubkey: "1BWutmTvYPwDtmw9abTkS4Ssr8no61spGAvW1X6NDix",
          signer: false,
          writable: false,
        },
        {
          pubkey: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
          signer: false,
          writable: false,
        },
      ],
      instructions: [
        {
          accounts: [
            "87QLcvBCVmfcKo8sVZfPEbRS8PzT9tsgmHuHxRvvrChv",
            "11111111111111111111111111111111",
            "4p8JyqkVHZHaNxuoXHKCf4G7HPCVQVAzkcrk3qWFYwbd",
            "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
            "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
            "11111111111111111111111111111111",
          ],
          data: "3GyWrkssW12wSfxfrSBu6tNB",
          programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
        },
        {
          accounts: [
            "87QLcvBCVmfcKo8sVZfPEbRS8PzT9tsgmHuHxRvvrChv",
            "11111111111111111111111111111111",
            "5ygnoy84v2bqMw8iFLD4k3axQfF8wgKQtG6maTtgwojG",
            "Bt1LrjGhVBhCvntA1Gaji6Lxcq75P314iX2UjjLsKcU9",
            "4p8JyqkVHZHaNxuoXHKCf4G7HPCVQVAzkcrk3qWFYwbd",
            "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
            "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
            "CgbcZSgtCR3sRCXowNPxb7nY2qovJtx2gWHFFy4VxG7z",
            "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "11111111111111111111111111111111",
            "SysvarRent111111111111111111111111111111111",
          ],
          data: "3Jmjmsq2jyrcnQkVCncXtJwWS92N2wHC7taajq9YRxu9oAX",
          programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
        },
        {
          accounts: [
            "87QLcvBCVmfcKo8sVZfPEbRS8PzT9tsgmHuHxRvvrChv",
            "FVftjwhGyfzcGfTGK8SU8E55E3dCod7rQc2fymaR9vTe",
            "11111111111111111111111111111111",
            "3qdhuUJTFCb47hztH5PDGF9HTjqEAKDAF4dTHKVaehAL",
            "5ygnoy84v2bqMw8iFLD4k3axQfF8wgKQtG6maTtgwojG",
            "Bt1LrjGhVBhCvntA1Gaji6Lxcq75P314iX2UjjLsKcU9",
            "4p8JyqkVHZHaNxuoXHKCf4G7HPCVQVAzkcrk3qWFYwbd",
            "BdhynZZn5qNNygMeqfZzwQAqdpcvsoPawVdECnQLorCA",
            "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
            "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
            "rFqFJ9g7TGBD8Ed7TPDnvGKZ5pWLPDyxLcvcH2eRCtt",
            "CgbcZSgtCR3sRCXowNPxb7nY2qovJtx2gWHFFy4VxG7z",
            "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
            "9kDcWHT7brm8bX9UxH2JAbUHWrcsHaDRZwfGaXF63Nfy",
            "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "11111111111111111111111111111111",
            "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
            "1BWutmTvYPwDtmw9abTkS4Ssr8no61spGAvW1X6NDix",
            "SysvarRent111111111111111111111111111111111",
            "9sfttw8dc1j7RsSgiFdDyt1a1XyRT3BPgFqYCXysER5W",
            "RRUMF9KYPcvNSmnicNMAFKx5wDYix3wjNa6bA7R6xqA",
            "Ao65TQeY33TvP8fF36cy8ykgoU8Mbamks4J5oCA8eEWj",
            "BEmqvnMVMDJWw4xN6q7jfnHNbfbgZmnmSQZFc2AfJtqP",
            "3m5x6yLrRsDHQp81jKDBNH1xfy89Wjgc5uiZSzrmdMcy",
          ],
          data: "d6iteQtSVrfiCnAHGCJ6bGCdwTFPQJgyXsHyJ5txQNo2VSyZcK7PRfFFm",
          programId: "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
        },
      ],
      recentBlockhash: "CR6v1SWMqsnBGkheEEhF64Tvc6TYabYdnRVPm8Kn6mL1",
    },
    signatures: [
      "J9kVpP5br8Q9wKNh2YPEZTDQtMLnLuCLEkRUgHvhhKYciVYq6XwF4imjrsNVhMY8Pw3wGkvY3AKW3qxtBisBp5v",
    ],
  },
};

export default saleTx;
