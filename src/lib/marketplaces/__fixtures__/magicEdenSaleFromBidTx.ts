import { ParsedConfirmedTransaction } from "@solana/web3.js";

const saleTx: ParsedConfirmedTransaction = {
  blockTime: 1640678496,
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
                destination: "2NZukH2TXpcuZP4htiuT8CFxcaQSWzkkR6kepSWnZ24Q",
                lamports: 17000000,
                source: "2aAcGP4Ls74XKAkFXKfFfw7CaJpHrPWcz6EaNcptWHhe",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "4eQwMqAA4c2VUD51rqfAke7kqeFLAxcxSB67rtFjDyZA",
                lamports: 17000000,
                source: "2aAcGP4Ls74XKAkFXKfFfw7CaJpHrPWcz6EaNcptWHhe",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "Dz9kwoBVVzF11cHeKotQpA7t4aeCQsgRpVw4dg8zkntg",
                lamports: 17000000,
                source: "2aAcGP4Ls74XKAkFXKfFfw7CaJpHrPWcz6EaNcptWHhe",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "4xHEEswq2T2E5uNoa1uw34RNKzPerayBHxX3P4SaR7cD",
                lamports: 17000000,
                source: "2aAcGP4Ls74XKAkFXKfFfw7CaJpHrPWcz6EaNcptWHhe",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "33CJriD17bUScYW7eKFjM6BPfkFWPerHfdpvtw3a8JdN",
                lamports: 17000000,
                source: "2aAcGP4Ls74XKAkFXKfFfw7CaJpHrPWcz6EaNcptWHhe",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "HWZybKNqMa93EmHK2ESL2v1XShcnt4ma4nFf14497jNS",
                lamports: 17000000,
                source: "2aAcGP4Ls74XKAkFXKfFfw7CaJpHrPWcz6EaNcptWHhe",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "AJ3r8njrEnHnwmv2JmnXEYoy7EfsxWQq7UcnLUhjuVab",
                lamports: 748000000,
                source: "2aAcGP4Ls74XKAkFXKfFfw7CaJpHrPWcz6EaNcptWHhe",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "GvFvwYnoZGejJptANFYEhW29qEhYjHK5V1i1sV3b9PU9",
                authority: "GUfCR9mK6azb9vcpsxgXyj7XRPAKJd4KMHTTVvtncGgp",
                authorityType: "accountOwner",
                newAuthority: "2fT7A7iKwDodPj5rm4u4tXRFny9JY1ttHhHGp1PsvsAn",
              },
              type: "setAuthority",
            },
            program: "spl-token",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          },
        ],
      },
    ],
    logMessages: [
      "Program MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8 invoke [1]",
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
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: SetAuthority",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2028 of 148416 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8 consumed 56397 of 200000 compute units",
      "Program MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8 success",
    ],
    postBalances: [
      3227874610, 179985000, 2039280, 0, 0, 0, 3318475293836, 338698861972,
      11263045161, 7408400000, 107000000, 7406350720, 136218400423, 1,
      1089991680, 5616720, 1141440,
    ],
    postTokenBalances: [
      {
        accountIndex: 2,
        mint: "3SxS8hpvZ6BfHXwaURJAhtxXWbwnkUGA7HPV3b7uLnjN",
        owner: "2fT7A7iKwDodPj5rm4u4tXRFny9JY1ttHhHGp1PsvsAn",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1.0,
          uiAmountString: "1",
        },
      },
    ],
    preBalances: [
      2478431930, 178071000, 2039280, 1914000, 850000000, 1447680,
      3318458293836, 338681861972, 11246045161, 7391400000, 90000000,
      7389350720, 136218400423, 1, 1089991680, 5616720, 1141440,
    ],
    preTokenBalances: [
      {
        accountIndex: 2,
        mint: "3SxS8hpvZ6BfHXwaURJAhtxXWbwnkUGA7HPV3b7uLnjN",
        owner: "GUfCR9mK6azb9vcpsxgXyj7XRPAKJd4KMHTTVvtncGgp",
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
  slot: 113678983,
  transaction: {
    message: {
      accountKeys: [
        {
          pubkey: "AJ3r8njrEnHnwmv2JmnXEYoy7EfsxWQq7UcnLUhjuVab",
          signer: true,
          writable: true,
        },
        {
          pubkey: "2fT7A7iKwDodPj5rm4u4tXRFny9JY1ttHhHGp1PsvsAn",
          signer: false,
          writable: true,
        },
        {
          pubkey: "GvFvwYnoZGejJptANFYEhW29qEhYjHK5V1i1sV3b9PU9",
          signer: false,
          writable: true,
        },
        {
          pubkey: "3wbvVNnZaNDQRVqQetUt3pkpucmjM6Pa2JyR9Yy2GYzj",
          signer: false,
          writable: true,
        },
        {
          pubkey: "2aAcGP4Ls74XKAkFXKfFfw7CaJpHrPWcz6EaNcptWHhe",
          signer: false,
          writable: true,
        },
        {
          pubkey: "Hcot8D67Dod6B9D19FTeuuG8cuxjUzKEDWHUUcdZEENb",
          signer: false,
          writable: true,
        },
        {
          pubkey: "2NZukH2TXpcuZP4htiuT8CFxcaQSWzkkR6kepSWnZ24Q",
          signer: false,
          writable: true,
        },
        {
          pubkey: "4eQwMqAA4c2VUD51rqfAke7kqeFLAxcxSB67rtFjDyZA",
          signer: false,
          writable: true,
        },
        {
          pubkey: "Dz9kwoBVVzF11cHeKotQpA7t4aeCQsgRpVw4dg8zkntg",
          signer: false,
          writable: true,
        },
        {
          pubkey: "4xHEEswq2T2E5uNoa1uw34RNKzPerayBHxX3P4SaR7cD",
          signer: false,
          writable: true,
        },
        {
          pubkey: "33CJriD17bUScYW7eKFjM6BPfkFWPerHfdpvtw3a8JdN",
          signer: false,
          writable: true,
        },
        {
          pubkey: "HWZybKNqMa93EmHK2ESL2v1XShcnt4ma4nFf14497jNS",
          signer: false,
          writable: true,
        },
        {
          pubkey: "GUfCR9mK6azb9vcpsxgXyj7XRPAKJd4KMHTTVvtncGgp",
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
          pubkey: "3F4Zwfm9Gz2UB1cB4sWsqHetzokkXFfw6VfbL15UCKcu",
          signer: false,
          writable: false,
        },
        {
          pubkey: "MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8",
          signer: false,
          writable: false,
        },
      ],
      instructions: [
        {
          accounts: [
            "AJ3r8njrEnHnwmv2JmnXEYoy7EfsxWQq7UcnLUhjuVab",
            "2fT7A7iKwDodPj5rm4u4tXRFny9JY1ttHhHGp1PsvsAn",
            "GvFvwYnoZGejJptANFYEhW29qEhYjHK5V1i1sV3b9PU9",
            "3wbvVNnZaNDQRVqQetUt3pkpucmjM6Pa2JyR9Yy2GYzj",
            "2aAcGP4Ls74XKAkFXKfFfw7CaJpHrPWcz6EaNcptWHhe",
            "Hcot8D67Dod6B9D19FTeuuG8cuxjUzKEDWHUUcdZEENb",
            "GUfCR9mK6azb9vcpsxgXyj7XRPAKJd4KMHTTVvtncGgp",
            "11111111111111111111111111111111",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "2NZukH2TXpcuZP4htiuT8CFxcaQSWzkkR6kepSWnZ24Q",
            "3F4Zwfm9Gz2UB1cB4sWsqHetzokkXFfw6VfbL15UCKcu",
            "4eQwMqAA4c2VUD51rqfAke7kqeFLAxcxSB67rtFjDyZA",
            "Dz9kwoBVVzF11cHeKotQpA7t4aeCQsgRpVw4dg8zkntg",
            "4xHEEswq2T2E5uNoa1uw34RNKzPerayBHxX3P4SaR7cD",
            "33CJriD17bUScYW7eKFjM6BPfkFWPerHfdpvtw3a8JdN",
            "HWZybKNqMa93EmHK2ESL2v1XShcnt4ma4nFf14497jNS",
          ],
          data: "RJ7YoBrhBjrzChhwrWvuLj",
          programId: "MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8",
        },
      ],
      recentBlockhash: "4dvuRRQzcFYkGS9TqVPth94nK1p1n2HD9d9g3pKTsV3c",
    },
    signatures: [
      "1cSgCBgot6w4KevVvsZc2PiST16BsEh9KAvmnbsSC9xXvput4SXLoq5pneQfczQEBw3jjcdmupG7Gp6MjG5MLzy",
    ],
  },
};

export default saleTx;
