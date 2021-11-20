import { ParsedConfirmedTransaction } from "@solana/web3.js";

const saleTx: ParsedConfirmedTransaction = {
  blockTime: 1636465965,
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
                destination: "6482e33zrerYfhKAjPR2ncMSrH2tbTy5LDjdhB5PXzxd",
                lamports: 49750000,
                source: "8WX1T8ofK91YxcPHp9t1wnQanHfcu4Nzy3fwQqMNGecJ",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "BhrcD75cVC4Dpuqat6QP9MwAEeyBf8GFZ74iMzv41jTm",
                lamports: 0,
                source: "8WX1T8ofK91YxcPHp9t1wnQanHfcu4Nzy3fwQqMNGecJ",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "4QJzmvKWpneEgHDa99QCb4hWtAhxA6qfFNtYWAb8Cw93",
                lamports: 99500000,
                source: "8WX1T8ofK91YxcPHp9t1wnQanHfcu4Nzy3fwQqMNGecJ",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "7ZvteCjTjt5HxYbmxyzo9xMavDEXkNLUG6r6pJJXijvj",
                lamports: 99500000,
                source: "8WX1T8ofK91YxcPHp9t1wnQanHfcu4Nzy3fwQqMNGecJ",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "7A6AV8pMznyt9eBXGbnkcgbuKhStz3vDQvWcRBoYWV5R",
                lamports: 1741250000,
                source: "8WX1T8ofK91YxcPHp9t1wnQanHfcu4Nzy3fwQqMNGecJ",
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
                destination: "GzAM8LrsbDFHhmXkBsmUZ3aJad2G3y8XSJCMrfCXRqwb",
                multisigAuthority:
                  "BjaNzGdwRcFYeQGfuLYsc1BbaNRG1yxyWs1hZuGRT8J2",
                signers: ["BjaNzGdwRcFYeQGfuLYsc1BbaNRG1yxyWs1hZuGRT8J2"],
                source: "4Nh4j5A9ukweW3e14LaxmRGWKGM3ePrVjDamJfTc5HpQ",
              },
              type: "transfer",
            },
            program: "spl-token",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          },
          {
            parsed: {
              info: {
                account: "4Nh4j5A9ukweW3e14LaxmRGWKGM3ePrVjDamJfTc5HpQ",
                destination: "7A6AV8pMznyt9eBXGbnkcgbuKhStz3vDQvWcRBoYWV5R",
                multisigOwner: "BjaNzGdwRcFYeQGfuLYsc1BbaNRG1yxyWs1hZuGRT8J2",
                signers: ["BjaNzGdwRcFYeQGfuLYsc1BbaNRG1yxyWs1hZuGRT8J2"],
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
      "Program AmK5g2XcyptVLCFESBCJqoSfwV3znGoVYQnqEnaAZKWn invoke [1]",
      "Program log: Instruction: AcceptExchangeByTaker (amount: 1)",
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
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3246 of 146259 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: CloseAccount",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2422 of 140048 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program AmK5g2XcyptVLCFESBCJqoSfwV3znGoVYQnqEnaAZKWn consumed 63945 of 200000 compute units",
      "Program AmK5g2XcyptVLCFESBCJqoSfwV3znGoVYQnqEnaAZKWn success",
    ],
    postBalances: [
      242200763, 2039280, 0, 1759795401, 0, 23534995018, 4572720, 149500000,
      149495000, 1461600, 5616720, 1089991680, 1, 119000000, 1461600, 1141440,
    ],
    postTokenBalances: [
      {
        accountIndex: 1,
        mint: "GSG2UXwfv5EE1Ad62bCc3pWcgJy5NRdFYof9JyyFZDMS",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1.0,
          uiAmountString: "1",
        },
      },
    ],
    preBalances: [
      2232205763, 2039280, 2039280, 14877481, 1628640, 23485245018, 4572720,
      50000000, 49995000, 1461600, 5616720, 1089991680, 1, 119000000, 1461600,
      1141440,
    ],
    preTokenBalances: [
      {
        accountIndex: 1,
        mint: "GSG2UXwfv5EE1Ad62bCc3pWcgJy5NRdFYof9JyyFZDMS",
        uiTokenAmount: {
          amount: "0",
          decimals: 0,
          uiAmount: null,
          uiAmountString: "0",
        },
      },
      {
        accountIndex: 2,
        mint: "GSG2UXwfv5EE1Ad62bCc3pWcgJy5NRdFYof9JyyFZDMS",
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
  slot: 106028506,
  transaction: {
    message: {
      accountKeys: [
        {
          pubkey: "8WX1T8ofK91YxcPHp9t1wnQanHfcu4Nzy3fwQqMNGecJ",
          signer: true,
          writable: true,
        },
        {
          pubkey: "GzAM8LrsbDFHhmXkBsmUZ3aJad2G3y8XSJCMrfCXRqwb",
          signer: false,
          writable: true,
        },
        {
          pubkey: "4Nh4j5A9ukweW3e14LaxmRGWKGM3ePrVjDamJfTc5HpQ",
          signer: false,
          writable: true,
        },
        {
          pubkey: "7A6AV8pMznyt9eBXGbnkcgbuKhStz3vDQvWcRBoYWV5R",
          signer: false,
          writable: true,
        },
        {
          pubkey: "8UcHhLq4euUGidninfLDzbBEq9jnQRsMF9hHvPtW4dC4",
          signer: false,
          writable: true,
        },
        {
          pubkey: "6482e33zrerYfhKAjPR2ncMSrH2tbTy5LDjdhB5PXzxd",
          signer: false,
          writable: true,
        },
        {
          pubkey: "BhrcD75cVC4Dpuqat6QP9MwAEeyBf8GFZ74iMzv41jTm",
          signer: false,
          writable: true,
        },
        {
          pubkey: "4QJzmvKWpneEgHDa99QCb4hWtAhxA6qfFNtYWAb8Cw93",
          signer: false,
          writable: true,
        },
        {
          pubkey: "7ZvteCjTjt5HxYbmxyzo9xMavDEXkNLUG6r6pJJXijvj",
          signer: false,
          writable: true,
        },
        {
          pubkey: "GSG2UXwfv5EE1Ad62bCc3pWcgJy5NRdFYof9JyyFZDMS",
          signer: false,
          writable: false,
        },
        {
          pubkey: "FLUgjuKHWySQ5gnQxmqnvoeydHcLY8VdfjNbFrpvYLNR",
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
          pubkey: "BjaNzGdwRcFYeQGfuLYsc1BbaNRG1yxyWs1hZuGRT8J2",
          signer: false,
          writable: false,
        },
        {
          pubkey: "9jd5tCY3JhjfSYSpgRzsgpoF5V52rNXYm4eRMfXeqUwR",
          signer: false,
          writable: false,
        },
        {
          pubkey: "AmK5g2XcyptVLCFESBCJqoSfwV3znGoVYQnqEnaAZKWn",
          signer: false,
          writable: false,
        },
      ],
      instructions: [
        {
          accounts: [
            "8WX1T8ofK91YxcPHp9t1wnQanHfcu4Nzy3fwQqMNGecJ",
            "GzAM8LrsbDFHhmXkBsmUZ3aJad2G3y8XSJCMrfCXRqwb",
            "4Nh4j5A9ukweW3e14LaxmRGWKGM3ePrVjDamJfTc5HpQ",
            "7A6AV8pMznyt9eBXGbnkcgbuKhStz3vDQvWcRBoYWV5R",
            "8UcHhLq4euUGidninfLDzbBEq9jnQRsMF9hHvPtW4dC4",
            "6482e33zrerYfhKAjPR2ncMSrH2tbTy5LDjdhB5PXzxd",
            "GSG2UXwfv5EE1Ad62bCc3pWcgJy5NRdFYof9JyyFZDMS",
            "FLUgjuKHWySQ5gnQxmqnvoeydHcLY8VdfjNbFrpvYLNR",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "11111111111111111111111111111111",
            "BjaNzGdwRcFYeQGfuLYsc1BbaNRG1yxyWs1hZuGRT8J2",
            "9jd5tCY3JhjfSYSpgRzsgpoF5V52rNXYm4eRMfXeqUwR",
            "BhrcD75cVC4Dpuqat6QP9MwAEeyBf8GFZ74iMzv41jTm",
            "4QJzmvKWpneEgHDa99QCb4hWtAhxA6qfFNtYWAb8Cw93",
            "7ZvteCjTjt5HxYbmxyzo9xMavDEXkNLUG6r6pJJXijvj",
          ],
          data: "jzDsaTSmGkw",
          programId: "AmK5g2XcyptVLCFESBCJqoSfwV3znGoVYQnqEnaAZKWn",
        },
      ],
      recentBlockhash: "Cj3zXV6hkKDMRmAkgdfURo3acZ5h2W28LbariB3ZrFJh",
    },
    signatures: [
      "4WniSeFvZHsnZEDueeWhP18dUC9bGwZjoQ19RQq14796GCdb7WVRsTjK8AZCLLhL136p4J96minzfZcKVjY3fNAY",
    ],
  },
};

export default saleTx;
