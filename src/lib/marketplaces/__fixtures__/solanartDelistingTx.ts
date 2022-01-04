import { ParsedConfirmedTransaction } from "@solana/web3.js";

const tx: ParsedConfirmedTransaction = {
  blockTime: 1641285168,
  meta: {
    err: null,
    fee: 10000,
    innerInstructions: [
      {
        index: 2,
        instructions: [
          {
            parsed: {
              info: {
                amount: "1",
                destination: "4otEhKcWzZGods7W8LPBeMuL82r9R4GcB6uznpVNayTu",
                multisigAuthority:
                  "5sxGkw9fyyecvzX91PUTCStGCeaH5yeKNJwvQFk9BtdG",
                signers: ["5sxGkw9fyyecvzX91PUTCStGCeaH5yeKNJwvQFk9BtdG"],
                source: "2gT75AdRKbuR2GW8xX7b1sb4DYkhtweCC7SqrihQRJND",
              },
              type: "transfer",
            },
            program: "spl-token",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          },
          {
            parsed: {
              info: {
                destination: "6ovfyEcNnYfQXX81bW1Donfoqd6xFwE2rvGk5zPmwH95",
                lamports: 1398960,
                source: "5sxGkw9fyyecvzX91PUTCStGCeaH5yeKNJwvQFk9BtdG",
              },
              type: "transfer",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "6ovfyEcNnYfQXX81bW1Donfoqd6xFwE2rvGk5zPmwH95",
                space: 73,
              },
              type: "allocate",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "6ovfyEcNnYfQXX81bW1Donfoqd6xFwE2rvGk5zPmwH95",
                owner: "CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz",
              },
              type: "assign",
            },
            program: "system",
            programId: "11111111111111111111111111111111",
          },
          {
            parsed: {
              info: {
                account: "4otEhKcWzZGods7W8LPBeMuL82r9R4GcB6uznpVNayTu",
                authorityType: "accountOwner",
                multisigAuthority:
                  "5sxGkw9fyyecvzX91PUTCStGCeaH5yeKNJwvQFk9BtdG",
                newAuthority: "3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK",
                signers: ["5sxGkw9fyyecvzX91PUTCStGCeaH5yeKNJwvQFk9BtdG"],
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
      "Program 11111111111111111111111111111111 invoke [1]",
      "Program 11111111111111111111111111111111 success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [1]",
      "Program log: Instruction: InitializeAccount",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3446 of 200000 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz invoke [1]",
      "Program log: Instruction: Sell ",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3246 of 187951 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program log: Transfer 1398960 lamports to the new account",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Allocate space for the account",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Assign the account to the owning program",
      "Program 11111111111111111111111111111111 invoke [2]",
      "Program 11111111111111111111111111111111 success",
      "Program log: Completed assignation!",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: SetAuthority",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2153 of 167771 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz consumed 35270 of 200000 compute units",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz success",
      "Program MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr invoke [1]",
      "Program log: Signed by 5sxGkw9fyyecvzX91PUTCStGCeaH5yeKNJwvQFk9BtdG",
      'Program log: Memo (len 277): "{\\"name\\": \\"Ape Fam Passes\\", \\"desc\\": \\"undefined\\", \\"token_add\\": \\"6t22uGbB7gf4GFyy8hoM2HdVZ5JUmPPpYkMyQibEBNP3\\", \\"sale_add\\": \\"6ovfyEcNnYfQXX81bW1Donfoqd6xFwE2rvGk5zPmwH95\\", \\"img_url\\":\\"https://www.arweave.net/Ly7CFnIIdmJwcv_xCmSdIkPHn6rhd7vEdrxDfxP5xAE?ext=png\\", \\"price_sol\\":\\"0.08\\"}"',
      "Program MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr consumed 112428 of 200000 compute units",
      "Program MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr success",
    ],
    postBalances: [
      379532048, 2039280, 4732222800372, 1398960, 2039280, 1461600, 1009200, 1,
      1089991680, 0, 1141440, 521498880,
    ],
    postTokenBalances: [
      {
        accountIndex: 1,
        mint: "6t22uGbB7gf4GFyy8hoM2HdVZ5JUmPPpYkMyQibEBNP3",
        owner: "3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1.0,
          uiAmountString: "1",
        },
      },
      {
        accountIndex: 4,
        mint: "6t22uGbB7gf4GFyy8hoM2HdVZ5JUmPPpYkMyQibEBNP3",
        owner: "5sxGkw9fyyecvzX91PUTCStGCeaH5yeKNJwvQFk9BtdG",
        uiTokenAmount: {
          amount: "0",
          decimals: 0,
          uiAmount: null,
          uiAmountString: "0",
        },
      },
    ],
    preBalances: [
      382980288, 0, 4732222800372, 0, 2039280, 1461600, 1009200, 1, 1089991680,
      0, 1141440, 521498880,
    ],
    preTokenBalances: [
      {
        accountIndex: 4,
        mint: "6t22uGbB7gf4GFyy8hoM2HdVZ5JUmPPpYkMyQibEBNP3",
        owner: "5sxGkw9fyyecvzX91PUTCStGCeaH5yeKNJwvQFk9BtdG",
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
  slot: 114739058,
  transaction: {
    message: {
      accountKeys: [
        {
          pubkey: "5sxGkw9fyyecvzX91PUTCStGCeaH5yeKNJwvQFk9BtdG",
          signer: true,
          writable: true,
        },
        {
          pubkey: "4otEhKcWzZGods7W8LPBeMuL82r9R4GcB6uznpVNayTu",
          signer: true,
          writable: true,
        },
        {
          pubkey: "39fEpihLATXPJCQuSiXLUSiCbGchGYjeL39eyXh3KbyT",
          signer: false,
          writable: true,
        },
        {
          pubkey: "6ovfyEcNnYfQXX81bW1Donfoqd6xFwE2rvGk5zPmwH95",
          signer: false,
          writable: true,
        },
        {
          pubkey: "2gT75AdRKbuR2GW8xX7b1sb4DYkhtweCC7SqrihQRJND",
          signer: false,
          writable: true,
        },
        {
          pubkey: "6t22uGbB7gf4GFyy8hoM2HdVZ5JUmPPpYkMyQibEBNP3",
          signer: false,
          writable: false,
        },
        {
          pubkey: "SysvarRent111111111111111111111111111111111",
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
          pubkey: "A45xw4fYgctZd5f7FAyxvTC4z7adBsBUHrDaZ1yDtyK3",
          signer: false,
          writable: false,
        },
        {
          pubkey: "CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz",
          signer: false,
          writable: false,
        },
        {
          pubkey: "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr",
          signer: false,
          writable: false,
        },
      ],
      instructions: [
        {
          parsed: {
            info: {
              lamports: 2039280,
              newAccount: "4otEhKcWzZGods7W8LPBeMuL82r9R4GcB6uznpVNayTu",
              owner: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
              source: "5sxGkw9fyyecvzX91PUTCStGCeaH5yeKNJwvQFk9BtdG",
              space: 165,
            },
            type: "createAccount",
          },
          program: "system",
          programId: "11111111111111111111111111111111",
        },
        {
          parsed: {
            info: {
              account: "4otEhKcWzZGods7W8LPBeMuL82r9R4GcB6uznpVNayTu",
              mint: "6t22uGbB7gf4GFyy8hoM2HdVZ5JUmPPpYkMyQibEBNP3",
              owner: "5sxGkw9fyyecvzX91PUTCStGCeaH5yeKNJwvQFk9BtdG",
              rentSysvar: "SysvarRent111111111111111111111111111111111",
            },
            type: "initializeAccount",
          },
          program: "spl-token",
          programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          accounts: [
            "5sxGkw9fyyecvzX91PUTCStGCeaH5yeKNJwvQFk9BtdG",
            "39fEpihLATXPJCQuSiXLUSiCbGchGYjeL39eyXh3KbyT",
            "4otEhKcWzZGods7W8LPBeMuL82r9R4GcB6uznpVNayTu",
            "6ovfyEcNnYfQXX81bW1Donfoqd6xFwE2rvGk5zPmwH95",
            "6t22uGbB7gf4GFyy8hoM2HdVZ5JUmPPpYkMyQibEBNP3",
            "2gT75AdRKbuR2GW8xX7b1sb4DYkhtweCC7SqrihQRJND",
            "SysvarRent111111111111111111111111111111111",
            "11111111111111111111111111111111",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "A45xw4fYgctZd5f7FAyxvTC4z7adBsBUHrDaZ1yDtyK3",
          ],
          data: "3xPw7Me66Lco",
          programId: "CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz",
        },
        {
          parsed:
            '{"name": "Ape Fam Passes", "desc": "undefined", "token_add": "6t22uGbB7gf4GFyy8hoM2HdVZ5JUmPPpYkMyQibEBNP3", "sale_add": "6ovfyEcNnYfQXX81bW1Donfoqd6xFwE2rvGk5zPmwH95", "img_url":"https://www.arweave.net/Ly7CFnIIdmJwcv_xCmSdIkPHn6rhd7vEdrxDfxP5xAE?ext=png", "price_sol":"0.08"}',
          program: "spl-memo",
          programId: "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr",
        },
      ],
      recentBlockhash: "BUZJx6nDjaF6gsFc4k1Q3QStgGv7MNoLD2GL9RbvgzrS",
    },
    signatures: [
      "2vYBas6Pxb5d5khgBjhuEmQv39yLUC4vXCkYwafcRx6zKvbZJWky8k95AF6VopfNdqRUEyCTpMKsrHe2HUsNdRMx",
      "3yEZib2Q6mzg7EAvzz1dkdbiS4xMcXZogb36L7VuZb5P7CdjDDf7qZbq9cWhREhj1b3xdWYF8q8wxhWiDPQv8BQh",
    ],
  },
};

export default tx;
