import { ParsedConfirmedTransaction } from "@solana/web3.js";

const saleTx: ParsedConfirmedTransaction = {
  blockTime: 1639780263,
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
                amount: "1",
                destination: "GVmmfuw9Hz4o8Nu5a2SwmqR2cmy56BregpsajPbaoTT",
                multisigAuthority:
                  "3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK",
                signers: ["3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK"],
                source: "kgAeqE79wDesZ5B1eRzj8yoXcYuCXZQyCv65izPt9Ko",
              },
              type: "transfer",
            },
            program: "spl-token",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
          },
          {
            parsed: {
              info: {
                account: "kgAeqE79wDesZ5B1eRzj8yoXcYuCXZQyCv65izPt9Ko",
                destination: "4Zn5nPcXCyWwFGuMLUw5zPfN1b1o1bsXE2cz8zEPBW5J",
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
      {
        index: 1,
        instructions: [
          {
            parsed: {
              info: {
                amount: "1",
                destination: "BrLQpUw6UQM4rsUxCvU93virPJNVoza51ZGvyjBXVGsd",
                multisigAuthority:
                  "4Zn5nPcXCyWwFGuMLUw5zPfN1b1o1bsXE2cz8zEPBW5J",
                signers: ["4Zn5nPcXCyWwFGuMLUw5zPfN1b1o1bsXE2cz8zEPBW5J"],
                source: "GVmmfuw9Hz4o8Nu5a2SwmqR2cmy56BregpsajPbaoTT",
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
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz invoke [1]",
      "Program log: Instruction: Buy",
      "Program log: Sale cancelled by seller",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3246 of 121132 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: CloseAccount",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2422 of 114924 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz consumed 88759 of 200000 compute units",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz success",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz invoke [1]",
      "Program log: Instruction: Accept Offer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]",
      "Program log: Instruction: Transfer",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 3246 of 159788 compute units",
      "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success",
      "Program log: NFT sold for 4 SOL",
      "Program log: Closing the PDA info account...",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz consumed 90016 of 200000 compute units",
      "Program CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz success",
    ],
    postBalances: [
      4336722874, 2039280, 0, 0, 2123892480067, 5616720, 0, 5159570,
      140404422499, 0, 50985256238, 2039280, 1089991680, 11368141155, 1141440,
      1, 1461600, 1141440,
    ],
    postTokenBalances: [
      {
        accountIndex: 1,
        mint: "HRGYe4hDNjNVCjmwhmnEiiZtbjzShCwazC1JEyERXRUo",
        owner: "4Zn5nPcXCyWwFGuMLUw5zPfN1b1o1bsXE2cz8zEPBW5J",
        uiTokenAmount: {
          amount: "0",
          decimals: 0,
          uiAmount: null,
          uiAmountString: "0",
        },
      },
      {
        accountIndex: 11,
        mint: "HRGYe4hDNjNVCjmwhmnEiiZtbjzShCwazC1JEyERXRUo",
        owner: "6bPDVYs5Ewutp8jqurwqfWkL3UeUAGouZg5RJxNY2yAM",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1.0,
          uiAmountString: "1",
        },
      },
    ],
    preBalances: [
      193289635, 2039280, 2039280, 1398960, 2123757480067, 5616720, 0, 5159570,
      140179422499, 4502512560, 50982743677, 2039280, 1089991680, 11368141155,
      1141440, 1, 1461600, 1141440,
    ],
    preTokenBalances: [
      {
        accountIndex: 1,
        mint: "HRGYe4hDNjNVCjmwhmnEiiZtbjzShCwazC1JEyERXRUo",
        owner: "4Zn5nPcXCyWwFGuMLUw5zPfN1b1o1bsXE2cz8zEPBW5J",
        uiTokenAmount: {
          amount: "0",
          decimals: 0,
          uiAmount: null,
          uiAmountString: "0",
        },
      },
      {
        accountIndex: 2,
        mint: "HRGYe4hDNjNVCjmwhmnEiiZtbjzShCwazC1JEyERXRUo",
        owner: "3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK",
        uiTokenAmount: {
          amount: "1",
          decimals: 0,
          uiAmount: 1.0,
          uiAmountString: "1",
        },
      },
      {
        accountIndex: 11,
        mint: "HRGYe4hDNjNVCjmwhmnEiiZtbjzShCwazC1JEyERXRUo",
        owner: "6bPDVYs5Ewutp8jqurwqfWkL3UeUAGouZg5RJxNY2yAM",
        uiTokenAmount: {
          amount: "0",
          decimals: 0,
          uiAmount: null,
          uiAmountString: "0",
        },
      },
    ],
    rewards: [],
    status: { Ok: null },
  },
  slot: 112028221,
  transaction: {
    message: {
      accountKeys: [
        {
          pubkey: "4Zn5nPcXCyWwFGuMLUw5zPfN1b1o1bsXE2cz8zEPBW5J",
          signer: true,
          writable: true,
        },
        {
          pubkey: "GVmmfuw9Hz4o8Nu5a2SwmqR2cmy56BregpsajPbaoTT",
          signer: false,
          writable: true,
        },
        {
          pubkey: "kgAeqE79wDesZ5B1eRzj8yoXcYuCXZQyCv65izPt9Ko",
          signer: false,
          writable: true,
        },
        {
          pubkey: "4D9oH4cf7JLbkw3SwS6FEQsLji6cPJWjPip4X4eM1YNh",
          signer: false,
          writable: true,
        },
        {
          pubkey: "39fEpihLATXPJCQuSiXLUSiCbGchGYjeL39eyXh3KbyT",
          signer: false,
          writable: true,
        },
        {
          pubkey: "9zd7ep4EcvXJYVG6QEM1Bx9Rgo9tVUjBUy3wK6Ba9GqF",
          signer: false,
          writable: true,
        },
        {
          pubkey: "1hkDGEFnMFVwSjsjsLchwBqFLfu3jaGMZiJ4Ve74H2j",
          signer: false,
          writable: true,
        },
        {
          pubkey: "9nicnEJ1pfssv3CWxQFMebFBrs5Cqun8WEmwwLqapLeX",
          signer: false,
          writable: true,
        },
        {
          pubkey: "7BPrveGEsNmr5UU2bSzSmHh8wbhB1NWTw4dXqykqpm1e",
          signer: false,
          writable: true,
        },
        {
          pubkey: "2y78y9m3hg5b62PnHVguzMCk6w3brP3DLii1bG577wKy",
          signer: false,
          writable: true,
        },
        {
          pubkey: "6bPDVYs5Ewutp8jqurwqfWkL3UeUAGouZg5RJxNY2yAM",
          signer: false,
          writable: true,
        },
        {
          pubkey: "BrLQpUw6UQM4rsUxCvU93virPJNVoza51ZGvyjBXVGsd",
          signer: false,
          writable: true,
        },
        {
          pubkey: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
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
          pubkey: "11111111111111111111111111111111",
          signer: false,
          writable: false,
        },
        {
          pubkey: "HRGYe4hDNjNVCjmwhmnEiiZtbjzShCwazC1JEyERXRUo",
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
          accounts: [
            "4Zn5nPcXCyWwFGuMLUw5zPfN1b1o1bsXE2cz8zEPBW5J",
            "GVmmfuw9Hz4o8Nu5a2SwmqR2cmy56BregpsajPbaoTT",
            "kgAeqE79wDesZ5B1eRzj8yoXcYuCXZQyCv65izPt9Ko",
            "4Zn5nPcXCyWwFGuMLUw5zPfN1b1o1bsXE2cz8zEPBW5J",
            "4D9oH4cf7JLbkw3SwS6FEQsLji6cPJWjPip4X4eM1YNh",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "39fEpihLATXPJCQuSiXLUSiCbGchGYjeL39eyXh3KbyT",
            "3D49QorJyNaL4rcpiynbuS3pRH4Y7EXEM6v6ZGaqfFGK",
            "9zd7ep4EcvXJYVG6QEM1Bx9Rgo9tVUjBUy3wK6Ba9GqF",
            "1hkDGEFnMFVwSjsjsLchwBqFLfu3jaGMZiJ4Ve74H2j",
            "7gDpaG9kUXHTz1dj4eVfykqtXnKq2efyuGigdMeCy74B",
            "11111111111111111111111111111111",
            "9nicnEJ1pfssv3CWxQFMebFBrs5Cqun8WEmwwLqapLeX",
            "7BPrveGEsNmr5UU2bSzSmHh8wbhB1NWTw4dXqykqpm1e",
          ],
          data: "4hBxPUj432du",
          programId: "CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz",
        },
        {
          accounts: [
            "4Zn5nPcXCyWwFGuMLUw5zPfN1b1o1bsXE2cz8zEPBW5J",
            "2y78y9m3hg5b62PnHVguzMCk6w3brP3DLii1bG577wKy",
            "6bPDVYs5Ewutp8jqurwqfWkL3UeUAGouZg5RJxNY2yAM",
            "HRGYe4hDNjNVCjmwhmnEiiZtbjzShCwazC1JEyERXRUo",
            "GVmmfuw9Hz4o8Nu5a2SwmqR2cmy56BregpsajPbaoTT",
            "BrLQpUw6UQM4rsUxCvU93virPJNVoza51ZGvyjBXVGsd",
            "39fEpihLATXPJCQuSiXLUSiCbGchGYjeL39eyXh3KbyT",
            "11111111111111111111111111111111",
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            "9zd7ep4EcvXJYVG6QEM1Bx9Rgo9tVUjBUy3wK6Ba9GqF",
            "1hkDGEFnMFVwSjsjsLchwBqFLfu3jaGMZiJ4Ve74H2j",
            "7gDpaG9kUXHTz1dj4eVfykqtXnKq2efyuGigdMeCy74B",
            "9nicnEJ1pfssv3CWxQFMebFBrs5Cqun8WEmwwLqapLeX",
            "7BPrveGEsNmr5UU2bSzSmHh8wbhB1NWTw4dXqykqpm1e",
          ],
          data: "2UjPnnnBE3Af",
          programId: "CJsLwbP1iu5DuUikHEJnLfANgKy6stB2uFgvBBHoyxwz",
        },
      ],
      recentBlockhash: "Em4WDQzwUFkTapWSkLS1vZ7D2xQDHH2WT7X8sFHDKfQq",
    },
    signatures: [
      "4PJ7X1ZCEj68n2HXfVx48jGnqgu9rWAxquVihpNvDizbZ5V5vUHViz2N54HHMUiBvKtx7mbmYAQ4unURg9YEgLM6",
    ],
  },
};
export default saleTx;
