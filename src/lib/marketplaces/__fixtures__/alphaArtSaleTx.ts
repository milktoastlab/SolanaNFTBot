import { ParsedConfirmedTransaction } from "@solana/web3.js";

const saleTx: ParsedConfirmedTransaction = {
  blockTime: 1636257741,
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
                destination: "5x13F4NupczfwP9EjJP4wcDQWinhUk2wXNeS1xYMzAgR",
                lamports: 2039280,
                source: "CScUB4iBTfCWaFkj5gRpXx42HVpAgDvPJgbQxtETRXi1",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "5x13F4NupczfwP9EjJP4wcDQWinhUk2wXNeS1xYMzAgR",
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
                account: "5x13F4NupczfwP9EjJP4wcDQWinhUk2wXNeS1xYMzAgR",
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
                account: "5x13F4NupczfwP9EjJP4wcDQWinhUk2wXNeS1xYMzAgR",
                mint: "14Cc7DA6MwpNdAZZYdLxK6WQ9meMaeLX1WsCyLRf5nqw",
                owner: "CScUB4iBTfCWaFkj5gRpXx42HVpAgDvPJgbQxtETRXi1",
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
                destination: "D3wgcpWjAWR3GREbkyuGr3bNLHfdQsLr5hN2AvSP8pBi",
                lamports: 15600000,
                source: "CScUB4iBTfCWaFkj5gRpXx42HVpAgDvPJgbQxtETRXi1",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "67dNFe4z58pmTs1DshwTm2rT127XtBCeRaBxDUYwaLfu",
                lamports: 78000000,
                source: "CScUB4iBTfCWaFkj5gRpXx42HVpAgDvPJgbQxtETRXi1",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "Gi44PdWS951cZjR5hgW1VnvKkxcV3scyHFpAFY3QpYSb",
                lamports: 686400000,
                source: "CScUB4iBTfCWaFkj5gRpXx42HVpAgDvPJgbQxtETRXi1",
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
                destination: "5x13F4NupczfwP9EjJP4wcDQWinhUk2wXNeS1xYMzAgR",
                multisigAuthority:
                  "4pUQS4Jo2dsfWzt3VgHXy3H6RYnEDd11oWPiaM2rdAPw",
                signers: ["4pUQS4Jo2dsfWzt3VgHXy3H6RYnEDd11oWPiaM2rdAPw"],
                source: "EDAWjyzq1Mf4JDue3tNiqhGeUg8az41EsHEQcEmjnZBY",
              },
              type: "transfer",
            },
            program: "spl-token",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          },
          {
            parsed: {
              info: {
                account: "EDAWjyzq1Mf4JDue3tNiqhGeUg8az41EsHEQcEmjnZBY",
                destination: "Gi44PdWS951cZjR5hgW1VnvKkxcV3scyHFpAFY3QpYSb",
                multisigOwner: "4pUQS4Jo2dsfWzt3VgHXy3H6RYnEDd11oWPiaM2rdAPw",
                signers: ["4pUQS4Jo2dsfWzt3VgHXy3H6RYnEDd11oWPiaM2rdAPw"],
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
      "Program HZaWndaNWHFDd9Dhk5pqUUtsmoBCqzb1MLu3NAh1VX6B invoke [1]",
      "Program log: Instruction: Exchange",
      "Program log: Transfer 15600000 service fee to fee_collector",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Send 78000000 lamports royalty to 67dNFe4z58pmTs1DshwTm2rT127XtBCeRaBxDUYwaLfu",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Send Remaining 686400000 lamports to initializer",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Calling the token program to transfer tokens to the taker...",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3246 of 157040 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: CloseAccount",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2422 of 150764 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program log: Closing the escrow account...",
      "Program HZaWndaNWHFDd9Dhk5pqUUtsmoBCqzb1MLu3NAh1VX6B consumed 53096 of 200000 compute units",
      "Program HZaWndaNWHFDd9Dhk5pqUUtsmoBCqzb1MLu3NAh1VX6B success",
    ],
    postBalances: [
      445990595, 2039280, 0, 2334481480, 0, 430340495378, 4572720, 142232472680,
      1461600, 1, 1089991680, 1009200, 0, 5616720, 9221625333, 898174080,
      1141440,
    ],
    postTokenBalances: [
      {
        accountIndex: 1,
        mint: "14Cc7DA6MwpNdAZZYdLxK6WQ9meMaeLX1WsCyLRf5nqw",
        owner: "CScUB4iBTfCWaFkj5gRpXx42HVpAgDvPJgbQxtETRXi1",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1.0,
          uiAmountString: "1",
        },
      },
    ],
    preBalances: [
      1228034875, 0, 2039280, 1644357880, 1684320, 430324895378, 4572720,
      142154472680, 1461600, 1, 1089991680, 1009200, 0, 5616720, 9221625333,
      898174080, 1141440,
    ],
    preTokenBalances: [
      {
        accountIndex: 2,
        mint: "14Cc7DA6MwpNdAZZYdLxK6WQ9meMaeLX1WsCyLRf5nqw",
        owner: "4pUQS4Jo2dsfWzt3VgHXy3H6RYnEDd11oWPiaM2rdAPw",
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
  slot: 105618616,
  transaction: {
    message: {
      accountKeys: [
        {
          pubkey: "CScUB4iBTfCWaFkj5gRpXx42HVpAgDvPJgbQxtETRXi1",
          signer: true,
          writable: true,
        },
        {
          pubkey: "5x13F4NupczfwP9EjJP4wcDQWinhUk2wXNeS1xYMzAgR",
          signer: false,
          writable: true,
        },
        {
          pubkey: "EDAWjyzq1Mf4JDue3tNiqhGeUg8az41EsHEQcEmjnZBY",
          signer: false,
          writable: true,
        },
        {
          pubkey: "Gi44PdWS951cZjR5hgW1VnvKkxcV3scyHFpAFY3QpYSb",
          signer: false,
          writable: true,
        },
        {
          pubkey: "AmcWF1RdEB4dAxuevnpVG3cwHTYxbV8cz27c1qT5dddr",
          signer: false,
          writable: true,
        },
        {
          pubkey: "D3wgcpWjAWR3GREbkyuGr3bNLHfdQsLr5hN2AvSP8pBi",
          signer: false,
          writable: true,
        },
        {
          pubkey: "J9qZY93eS6Du1E8K6zNqAs71YeAiBncUywmuCbF1Wwei",
          signer: false,
          writable: true,
        },
        {
          pubkey: "67dNFe4z58pmTs1DshwTm2rT127XtBCeRaBxDUYwaLfu",
          signer: false,
          writable: true,
        },
        {
          pubkey: "14Cc7DA6MwpNdAZZYdLxK6WQ9meMaeLX1WsCyLRf5nqw",
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
          pubkey: "B7dtJwRwGnx5hMA8uDQuk4cxHGR4sF843FTME4Jr2ft2",
          signer: false,
          writable: false,
        },
        {
          pubkey: "5QY6DGcNE7rCW6ReRJSfiq9KF8wmyESbhiiLwvJT1YWy",
          signer: false,
          writable: false,
        },
        {
          pubkey: "4pUQS4Jo2dsfWzt3VgHXy3H6RYnEDd11oWPiaM2rdAPw",
          signer: false,
          writable: false,
        },
        {
          pubkey: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
          signer: false,
          writable: false,
        },
        {
          pubkey: "HZaWndaNWHFDd9Dhk5pqUUtsmoBCqzb1MLu3NAh1VX6B",
          signer: false,
          writable: false,
        },
      ],
      instructions: [
        {
          parsed: {
            info: {
              account: "5x13F4NupczfwP9EjJP4wcDQWinhUk2wXNeS1xYMzAgR",
              mint: "14Cc7DA6MwpNdAZZYdLxK6WQ9meMaeLX1WsCyLRf5nqw",
              rentSysvar: "SysvarRent111111111111111111111111111111111",
              source: "CScUB4iBTfCWaFkj5gRpXx42HVpAgDvPJgbQxtETRXi1",
              systemProgram: "11111111111111111111111111111111",
              tokenProgram: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              wallet: "CScUB4iBTfCWaFkj5gRpXx42HVpAgDvPJgbQxtETRXi1",
            },
            type: "create",
          },
          program: "spl-associated-token-account",
          programId: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
        },
        {
          accounts: [
            "CScUB4iBTfCWaFkj5gRpXx42HVpAgDvPJgbQxtETRXi1",
            "5x13F4NupczfwP9EjJP4wcDQWinhUk2wXNeS1xYMzAgR",
            "EDAWjyzq1Mf4JDue3tNiqhGeUg8az41EsHEQcEmjnZBY",
            "Gi44PdWS951cZjR5hgW1VnvKkxcV3scyHFpAFY3QpYSb",
            "AmcWF1RdEB4dAxuevnpVG3cwHTYxbV8cz27c1qT5dddr",
            "B7dtJwRwGnx5hMA8uDQuk4cxHGR4sF843FTME4Jr2ft2",
            "5QY6DGcNE7rCW6ReRJSfiq9KF8wmyESbhiiLwvJT1YWy",
            "14Cc7DA6MwpNdAZZYdLxK6WQ9meMaeLX1WsCyLRf5nqw",
            "4pUQS4Jo2dsfWzt3VgHXy3H6RYnEDd11oWPiaM2rdAPw",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "11111111111111111111111111111111",
            "D3wgcpWjAWR3GREbkyuGr3bNLHfdQsLr5hN2AvSP8pBi",
            "J9qZY93eS6Du1E8K6zNqAs71YeAiBncUywmuCbF1Wwei",
            "67dNFe4z58pmTs1DshwTm2rT127XtBCeRaBxDUYwaLfu",
          ],
          data: "2UnMphP3bh8T",
          programId: "HZaWndaNWHFDd9Dhk5pqUUtsmoBCqzb1MLu3NAh1VX6B",
        },
      ],
      recentBlockhash: "BBdpUZtu4nysqope7HrxBhSP6fauFgQ1ccSEe6b6UZzU",
    },
    signatures: [
      "4CwUFDv1JoaK4iN2chARePZZjAPrXdcX2VwDC2Snt4gNgdmFfqtiUR6HkniFNfLwh35rQzTjqhpDkgzWw69e6Svc",
    ],
  },
};
export default saleTx;
