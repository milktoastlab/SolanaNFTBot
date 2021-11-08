import { ParsedConfirmedTransaction } from "@solana/web3.js";

const sale: ParsedConfirmedTransaction = {
  blockTime: 1636283774,
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
                destination: "9tF3mCaEws8NTDzkgAzyzAs5k9QirWyx86XojD36dsZ7",
                lamports: 2039280,
                source: "5pYfvPkuzasUXFFVTFNf28XcAfxvUGvYxbaxgRib1Wp5",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "9tF3mCaEws8NTDzkgAzyzAs5k9QirWyx86XojD36dsZ7",
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
                account: "9tF3mCaEws8NTDzkgAzyzAs5k9QirWyx86XojD36dsZ7",
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
                account: "9tF3mCaEws8NTDzkgAzyzAs5k9QirWyx86XojD36dsZ7",
                mint: "2sAwuzSPbD4DtR1Gz1m8YutrbDY7EBoSoYKJr1ZsKrCQ",
                owner: "5pYfvPkuzasUXFFVTFNf28XcAfxvUGvYxbaxgRib1Wp5",
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
                destination: "3dDRiW6oCZKYTLDuvqon4cc6RjKP7ujziFvVRGRML7hU",
                lamports: 3000000,
                source: "5pYfvPkuzasUXFFVTFNf28XcAfxvUGvYxbaxgRib1Wp5",
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
                lamports: 1800000,
                source: "5pYfvPkuzasUXFFVTFNf28XcAfxvUGvYxbaxgRib1Wp5",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                destination: "5vx26hiGCfmF5bv7QV7i4A811ugRaSdcxmWXBSXY5ZTC",
                lamports: 55199999,
                source: "5pYfvPkuzasUXFFVTFNf28XcAfxvUGvYxbaxgRib1Wp5",
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
                destination: "9tF3mCaEws8NTDzkgAzyzAs5k9QirWyx86XojD36dsZ7",
                multisigAuthority:
                  "3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK",
                signers: ["3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK"],
                source: "8hukBnVGijxP7F643ruv7rcWEJsJPMvgL53bmcAGiPAH",
              },
              type: "transfer",
            },
            program: "spl-token",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          },
          {
            parsed: {
              info: {
                account: "8hukBnVGijxP7F643ruv7rcWEJsJPMvgL53bmcAGiPAH",
                destination: "5vx26hiGCfmF5bv7QV7i4A811ugRaSdcxmWXBSXY5ZTC",
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
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3246 of 107571 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: CloseAccount",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2422 of 101363 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz consumed 102352 of 200000 compute units",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz success",
    ],
    postBalances: [
      325817008, 2039280, 0, 4430959642, 0, 15164085127515, 5616720, 0, 4572720,
      12754572570, 1461600, 1, 1089991680, 1009200, 11358560469, 1141440,
      898174080, 1141440,
    ],
    postTokenBalances: [
      {
        accountIndex: 1,
        mint: "2sAwuzSPbD4DtR1Gz1m8YutrbDY7EBoSoYKJr1ZsKrCQ",
        owner: "5pYfvPkuzasUXFFVTFNf28XcAfxvUGvYxbaxgRib1Wp5",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1.0,
          uiAmountString: "1",
        },
      },
    ],
    preBalances: [
      387861287, 0, 2039280, 4372321403, 1398960, 15164083327515, 5616720, 0,
      4572720, 12751572570, 1461600, 1, 1089991680, 1009200, 11358560469,
      1141440, 898174080, 1141440,
    ],
    preTokenBalances: [
      {
        accountIndex: 2,
        mint: "2sAwuzSPbD4DtR1Gz1m8YutrbDY7EBoSoYKJr1ZsKrCQ",
        owner: "3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK",
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
  slot: 105671633,
  transaction: {
    message: {
      accountKeys: [
        {
          pubkey: "5pYfvPkuzasUXFFVTFNf28XcAfxvUGvYxbaxgRib1Wp5",
          signer: true,
          writable: true,
        },
        {
          pubkey: "9tF3mCaEws8NTDzkgAzyzAs5k9QirWyx86XojD36dsZ7",
          signer: false,
          writable: true,
        },
        {
          pubkey: "8hukBnVGijxP7F643ruv7rcWEJsJPMvgL53bmcAGiPAH",
          signer: false,
          writable: true,
        },
        {
          pubkey: "5vx26hiGCfmF5bv7QV7i4A811ugRaSdcxmWXBSXY5ZTC",
          signer: false,
          writable: true,
        },
        {
          pubkey: "GQBVvcYkuWoiwBAZW1X1ZX8kB7R3XVK8j3bSfSkBykKb",
          signer: false,
          writable: true,
        },
        {
          pubkey: "E6dkaYhqbZN3a1pDrdbajJ9D8xA66LBBcjWi6dDNAuJH",
          signer: false,
          writable: true,
        },
        {
          pubkey: "sG8RwqMUcvTddsYk4yaTgX4c5BV36u9U47MGL1vawJi",
          signer: false,
          writable: true,
        },
        {
          pubkey: "DFgnW3SPcegjLqnzPnN37xgStX7CDADyKjVyRejLFqWX",
          signer: false,
          writable: true,
        },
        {
          pubkey: "5uaCGB5mA3ARmLS1KpAKVnYq9nyDAgZkTJwPKTPsa2pZ",
          signer: false,
          writable: true,
        },
        {
          pubkey: "3dDRiW6oCZKYTLDuvqon4cc6RjKP7ujziFvVRGRML7hU",
          signer: false,
          writable: true,
        },
        {
          pubkey: "2sAwuzSPbD4DtR1Gz1m8YutrbDY7EBoSoYKJr1ZsKrCQ",
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
              account: "9tF3mCaEws8NTDzkgAzyzAs5k9QirWyx86XojD36dsZ7",
              mint: "2sAwuzSPbD4DtR1Gz1m8YutrbDY7EBoSoYKJr1ZsKrCQ",
              rentSysvar: "SysvarRent111111111111111111111111111111111",
              source: "5pYfvPkuzasUXFFVTFNf28XcAfxvUGvYxbaxgRib1Wp5",
              systemProgram: "11111111111111111111111111111111",
              tokenProgram: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              wallet: "5pYfvPkuzasUXFFVTFNf28XcAfxvUGvYxbaxgRib1Wp5",
            },
            type: "create",
          },
          program: "spl-associated-token-account",
          programId: "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
        },
        {
          accounts: [
            "5pYfvPkuzasUXFFVTFNf28XcAfxvUGvYxbaxgRib1Wp5",
            "9tF3mCaEws8NTDzkgAzyzAs5k9QirWyx86XojD36dsZ7",
            "8hukBnVGijxP7F643ruv7rcWEJsJPMvgL53bmcAGiPAH",
            "5vx26hiGCfmF5bv7QV7i4A811ugRaSdcxmWXBSXY5ZTC",
            "GQBVvcYkuWoiwBAZW1X1ZX8kB7R3XVK8j3bSfSkBykKb",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "E6dkaYhqbZN3a1pDrdbajJ9D8xA66LBBcjWi6dDNAuJH",
            "3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK",
            "sG8RwqMUcvTddsYk4yaTgX4c5BV36u9U47MGL1vawJi",
            "DFgnW3SPcegjLqnzPnN37xgStX7CDADyKjVyRejLFqWX",
            "7gDpaG9kUXHTz1dj4eVfykqtXnKq2efyuGigdMeCy74B",
            "11111111111111111111111111111111",
            "5uaCGB5mA3ARmLS1KpAKVnYq9nyDAgZkTJwPKTPsa2pZ",
            "3dDRiW6oCZKYTLDuvqon4cc6RjKP7ujziFvVRGRML7hU",
          ],
          data: "4hBjytn4rqCB",
          programId: "CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz",
        },
      ],
      recentBlockhash: "6LYk9fauGNQ4pDbZ2vSxB8pSoc5ZRJPvRsisxuPdoW2G",
    },
    signatures: [
      "5YHfVoe9jSBTa3FWcYV11i6MNtPALTpot1ca6PydLx4nGNyCPc7cghwbz6VXgAyMrxUZDkkp2QoYfot74ckLsUYG",
    ],
  },
};

export default sale;
