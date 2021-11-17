import { ParsedConfirmedTransaction } from "@solana/web3.js";

const saleTx: ParsedConfirmedTransaction = {
  blockTime: 1637139756,
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
                destination: "6oTEszeAVQwvFgUkcitipR865qQUAy3UQ5ys5rfNDXC6",
                lamports: 2039280,
                source: "FR4xWcvhxA2dLTDda5cmD1zUxz9gnzrVhhLq4owcAzt3",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "6oTEszeAVQwvFgUkcitipR865qQUAy3UQ5ys5rfNDXC6",
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
                account: "6oTEszeAVQwvFgUkcitipR865qQUAy3UQ5ys5rfNDXC6",
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
                account: "6oTEszeAVQwvFgUkcitipR865qQUAy3UQ5ys5rfNDXC6",
                mint: "BtoorpGmtSydBtUfCaiHAEFPnE6Q4QKopTKrix6Ftcn2",
                owner: "FR4xWcvhxA2dLTDda5cmD1zUxz9gnzrVhhLq4owcAzt3",
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
                destination: "6482e33zrerYfhKAjPR2ncMSrH2tbTy5LDjdhB5PXzxd",
                lamports: 5000000,
                source: "FR4xWcvhxA2dLTDda5cmD1zUxz9gnzrVhhLq4owcAzt3",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "2DXWoqh6dCp8VFWwuPszWXcWAnegaEMyT4UVgRMJJzQn",
                lamports: 0,
                source: "FR4xWcvhxA2dLTDda5cmD1zUxz9gnzrVhhLq4owcAzt3",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "8pJyixptCqPPLSkT9qqjMmJjAELdP8YiGsL1ihNmSsaE",
                lamports: 100000000,
                source: "FR4xWcvhxA2dLTDda5cmD1zUxz9gnzrVhhLq4owcAzt3",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "3Z6T94rMaTKjfdQb9ShunvMJ6C9LqDqEkfKBBeGArpzp",
                lamports: 95000000,
                source: "FR4xWcvhxA2dLTDda5cmD1zUxz9gnzrVhhLq4owcAzt3",
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
                destination: "6oTEszeAVQwvFgUkcitipR865qQUAy3UQ5ys5rfNDXC6",
                multisigAuthority:
                  "BjaNzGdwRcFYeQGfuLYsc1BbaNRG1yxyWs1hZuGRT8J2",
                signers: ["BjaNzGdwRcFYeQGfuLYsc1BbaNRG1yxyWs1hZuGRT8J2"],
                source: "HukHCJmGZLG6BEr8MjjacEoeJzjiMuwX4Y5Q5Yyvm1Lo",
              },
              type: "transfer",
            },
            program: "spl-token",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          },
          {
            parsed: {
              info: {
                account: "HukHCJmGZLG6BEr8MjjacEoeJzjiMuwX4Y5Q5Yyvm1Lo",
                destination: "3Z6T94rMaTKjfdQb9ShunvMJ6C9LqDqEkfKBBeGArpzp",
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
      "Program AmK5g2XcyptVLCFESBCJqoSfwV3znGoVYQnqEnaAZKWn invoke [1]",
      "Program log: Instruction: AcceptExchangeByTaker (amount: 1)",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: final seller fee basis points after PHBT: 5000.0",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3246 of 144566 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: CloseAccount",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2422 of 138355 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program AmK5g2XcyptVLCFESBCJqoSfwV3znGoVYQnqEnaAZKWn consumed 65510 of 200000 compute units",
      "Program AmK5g2XcyptVLCFESBCJqoSfwV3znGoVYQnqEnaAZKWn success",
    ],
    postBalances: [
      3583436090, 2039280, 0, 178325906, 0, 92565366518, 4572720, 16484238885,
      1461600, 1, 1089991680, 1009200, 5616720, 166000000, 898174080, 1141440,
    ],
    postTokenBalances: [
      {
        accountIndex: 1,
        mint: "BtoorpGmtSydBtUfCaiHAEFPnE6Q4QKopTKrix6Ftcn2",
        owner: "FR4xWcvhxA2dLTDda5cmD1zUxz9gnzrVhhLq4owcAzt3",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1.0,
          uiAmountString: "1",
        },
      },
    ],
    preBalances: [
      3785480370, 0, 2039280, 79657986, 1628640, 92560366518, 4572720,
      16384238885, 1461600, 1, 1089991680, 1009200, 5616720, 166000000,
      898174080, 1141440,
    ],
    preTokenBalances: [
      {
        accountIndex: 2,
        mint: "BtoorpGmtSydBtUfCaiHAEFPnE6Q4QKopTKrix6Ftcn2",
        owner: "BjaNzGdwRcFYeQGfuLYsc1BbaNRG1yxyWs1hZuGRT8J2",
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
  slot: 107304222,
  transaction: {
    message: {
      accountKeys: [
        {
          pubkey: "FR4xWcvhxA2dLTDda5cmD1zUxz9gnzrVhhLq4owcAzt3",
          signer: true,
          writable: true,
        },
        {
          pubkey: "6oTEszeAVQwvFgUkcitipR865qQUAy3UQ5ys5rfNDXC6",
          signer: false,
          writable: true,
        },
        {
          pubkey: "HukHCJmGZLG6BEr8MjjacEoeJzjiMuwX4Y5Q5Yyvm1Lo",
          signer: false,
          writable: true,
        },
        {
          pubkey: "3Z6T94rMaTKjfdQb9ShunvMJ6C9LqDqEkfKBBeGArpzp",
          signer: false,
          writable: true,
        },
        {
          pubkey: "BjEdwXRGZh6NLk99P5utngc5Wed7UHYgxHBSQStq4o54",
          signer: false,
          writable: true,
        },
        {
          pubkey: "6482e33zrerYfhKAjPR2ncMSrH2tbTy5LDjdhB5PXzxd",
          signer: false,
          writable: true,
        },
        {
          pubkey: "2DXWoqh6dCp8VFWwuPszWXcWAnegaEMyT4UVgRMJJzQn",
          signer: false,
          writable: true,
        },
        {
          pubkey: "8pJyixptCqPPLSkT9qqjMmJjAELdP8YiGsL1ihNmSsaE",
          signer: false,
          writable: true,
        },
        {
          pubkey: "BtoorpGmtSydBtUfCaiHAEFPnE6Q4QKopTKrix6Ftcn2",
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
          pubkey: "CiFhuzidkjaxprBVPAENEpoRJsGkcxXnv2SNLPktYy7B",
          signer: false,
          writable: false,
        },
        {
          pubkey: "BjaNzGdwRcFYeQGfuLYsc1BbaNRG1yxyWs1hZuGRT8J2",
          signer: false,
          writable: false,
        },
        {
          pubkey: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
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
          parsed: {
            info: {
              account: "6oTEszeAVQwvFgUkcitipR865qQUAy3UQ5ys5rfNDXC6",
              mint: "BtoorpGmtSydBtUfCaiHAEFPnE6Q4QKopTKrix6Ftcn2",
              rentSysvar: "SysvarRent111111111111111111111111111111111",
              source: "FR4xWcvhxA2dLTDda5cmD1zUxz9gnzrVhhLq4owcAzt3",
              systemProgram: "11111111111111111111111111111111",
              tokenProgram: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              wallet: "FR4xWcvhxA2dLTDda5cmD1zUxz9gnzrVhhLq4owcAzt3",
            },
            type: "create",
          },
          program: "spl-associated-token-account",
          programId: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
        },
        {
          accounts: [
            "FR4xWcvhxA2dLTDda5cmD1zUxz9gnzrVhhLq4owcAzt3",
            "6oTEszeAVQwvFgUkcitipR865qQUAy3UQ5ys5rfNDXC6",
            "HukHCJmGZLG6BEr8MjjacEoeJzjiMuwX4Y5Q5Yyvm1Lo",
            "3Z6T94rMaTKjfdQb9ShunvMJ6C9LqDqEkfKBBeGArpzp",
            "BjEdwXRGZh6NLk99P5utngc5Wed7UHYgxHBSQStq4o54",
            "6482e33zrerYfhKAjPR2ncMSrH2tbTy5LDjdhB5PXzxd",
            "BtoorpGmtSydBtUfCaiHAEFPnE6Q4QKopTKrix6Ftcn2",
            "CiFhuzidkjaxprBVPAENEpoRJsGkcxXnv2SNLPktYy7B",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "11111111111111111111111111111111",
            "BjaNzGdwRcFYeQGfuLYsc1BbaNRG1yxyWs1hZuGRT8J2",
            "FR4xWcvhxA2dLTDda5cmD1zUxz9gnzrVhhLq4owcAzt3",
            "2DXWoqh6dCp8VFWwuPszWXcWAnegaEMyT4UVgRMJJzQn",
            "8pJyixptCqPPLSkT9qqjMmJjAELdP8YiGsL1ihNmSsaE",
          ],
          data: "jzDsaTSmGkw",
          programId: "AmK5g2XcyptVLCFESBCJqoSfwV3znGoVYQnqEnaAZKWn",
        },
      ],
      recentBlockhash: "784RVPH2bwcPFdAjA3ozdeYFTgWTkAQtD5q6zcsPikty",
    },
    signatures: [
      "496U5Ric72tCEwDVekapUVqCGrHEeSTpA9wsn88R65nT8hZbuEZS5sjgn5iT4mnmSKbSNcTf4Q7Bdu2hyjWcqaAD",
    ],
  },
};
export default saleTx;
