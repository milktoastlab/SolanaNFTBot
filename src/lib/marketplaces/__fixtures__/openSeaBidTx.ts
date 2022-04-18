import {ParsedConfirmedTransaction} from "@solana/web3.js";

const tx: ParsedConfirmedTransaction = {
  "blockTime": 1650079198, "meta": {
    "err": null,
    "fee": 10000,
    "innerInstructions": [{
      "index": 0,
      "instructions": [{
        "parsed": {
          "info": {
            "destination": "9QveoLZ4SA1JdFdmuLRE7cynvrpbuZq2a5vvvy4ry5VY",
            "lamports": 49000000,
            "source": "8x7qhXu8osWcJrQWmczNGN7HS8scnGJhdt4PXxGWu3S1"
          }, "type": "transfer"
        }, "program": "system", "programId": {"_bn": "00"}
      }]
    }, {
      "index": 1,
      "instructions": [{
        "parsed": {
          "info": {
            "destination": "Aiyx4xsfL3NkhVZVp4xWZmdP3dpxAUSmtFt1vLYBFrWp",
            "lamports": 897840,
            "source": "5xyoD5hnWDBLsW6rjW2TBmqiDQsbod6Uaw15dRhNrDzn"
          }, "type": "transfer"
        }, "program": "system", "programId": {"_bn": "00"}
      }, {
        "parsed": {
          "info": {
            "account": "Aiyx4xsfL3NkhVZVp4xWZmdP3dpxAUSmtFt1vLYBFrWp",
            "space": 1
          }, "type": "allocate"
        }, "program": "system", "programId": {"_bn": "00"}
      }, {
        "parsed": {
          "info": {
            "account": "Aiyx4xsfL3NkhVZVp4xWZmdP3dpxAUSmtFt1vLYBFrWp",
            "owner": "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk"
          }, "type": "assign"
        }, "program": "system", "programId": {"_bn": "00"}
      }]
    }],
    "logMessages": ["Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk invoke [1]", "Program log: Instruction: Deposit", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk consumed 20144 of 200000 compute units", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk success", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk invoke [1]", "Program log: Instruction: Buy", "Program log: Err(Custom(6013)), Ok(254), 254", "Program log: Transfer 897840 lamports to the new account", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program log: Allocate space for the account Aiyx4xsfL3NkhVZVp4xWZmdP3dpxAUSmtFt1vLYBFrWp", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program log: Assign the account to the owning program", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program log: Completed assignation!", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk consumed 56074 of 200000 compute units", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk success", "Program 11111111111111111111111111111111 invoke [1]", "Program 11111111111111111111111111111111 success"],
    "postBalances": [34800744, 10489990000, 355090000, 102695402162, 897840, 152395037831, 4085520, 953185920, 1, 1009200, 2039280, 5616720, 1141440],
    "postTokenBalances": [{
      "accountIndex": 10,
      "mint": "GGe6kTQRbFscLJ7ANeAVw6wNABMUnr1bVMT7fNn1aVxv",
      "owner": "6vuH8FisDk3HEYd4oJN7jPdcEaJXF9kQDWxTiTgqGX49",
      "uiTokenAmount": {"amount": "1", "decimals": 0, "uiAmount": 1, "uiAmountString": "1"}
    }],
    "preBalances": [84708584, 10489990000, 306090000, 102695402162, 0, 152395037831, 4085520, 953185920, 1, 1009200, 2039280, 5616720, 1141440],
    "preTokenBalances": [{
      "accountIndex": 10,
      "mint": "GGe6kTQRbFscLJ7ANeAVw6wNABMUnr1bVMT7fNn1aVxv",
      "owner": "6vuH8FisDk3HEYd4oJN7jPdcEaJXF9kQDWxTiTgqGX49",
      "uiTokenAmount": {"amount": "1", "decimals": 0, "uiAmount": 1, "uiAmountString": "1"}
    }],
    "rewards": [],
    "status": {"Ok": null}
  }, "slot": 129938837, "transaction": {
    "message": {
      "accountKeys": [{
        "pubkey": {"_bn": "76207c90c0971f18f0e64cd685ec9fa39f4be7474f08208824ac8bedc0aed202"},
        "signer": true,
        "writable": true
      }, {
        "pubkey": {"_bn": "0c14ca16dab25717d8fe41d9ec2617cd3f5d7c986f19d87898707564f3c516a7"},
        "signer": true,
        "writable": true
      }, {
        "pubkey": {"_bn": "7cfe84a8831eca82cfe41c9dadbdf237dd03da16d8f2d06d595c44e029c3be37"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "49c5e99524f07898034804274203258b3165710477bd5762d3d2d93ad0a4c3bf"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "907a6372423fbc0d005a18e2ff6bdb81f1b1b5f31b5ab7dfbfbfce66534a7b15"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "069b8857feab8184fb687f634618c035dac439dc1aeb3b5598a0f00000000001"},
        "signer": false,
        "writable": false
      }, {
        "pubkey": {"_bn": "2989d6a9ff6b2a168b81bed69f59efcb8172a8c663a80112cce020c86145700b"},
        "signer": false,
        "writable": false
      }, {
        "pubkey": {"_bn": "06ddf6e1d765a193d9cbe146ceeb79ac1cb485ed5f5b37913a8cf5857eff00a9"},
        "signer": false,
        "writable": false
      }, {
        "pubkey": {"_bn": "00"},
        "signer": false,
        "writable": false
      }, {
        "pubkey": {"_bn": "06a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000"},
        "signer": false,
        "writable": false
      }, {
        "pubkey": {"_bn": "ed501c2bf970de1b601ff82e39383f1e6475d6c9361df6df0747441b9f08cb10"},
        "signer": false,
        "writable": false
      }, {
        "pubkey": {"_bn": "6e60c995754a2f14ec5ecd6c9a3788a86c2cd729bcf73b2d3f3cb062d1a7496c"},
        "signer": false,
        "writable": false
      }, {
        "pubkey": {"_bn": "0a6593863cba461564eae41373721546eb0151c9308276bbd4ad2a1c3a42107b"},
        "signer": false,
        "writable": false
      }],
      "instructions": [{
        "accounts": [{"_bn": "76207c90c0971f18f0e64cd685ec9fa39f4be7474f08208824ac8bedc0aed202"}, {"_bn": "76207c90c0971f18f0e64cd685ec9fa39f4be7474f08208824ac8bedc0aed202"}, {"_bn": "0c14ca16dab25717d8fe41d9ec2617cd3f5d7c986f19d87898707564f3c516a7"}, {"_bn": "7cfe84a8831eca82cfe41c9dadbdf237dd03da16d8f2d06d595c44e029c3be37"}, {"_bn": "069b8857feab8184fb687f634618c035dac439dc1aeb3b5598a0f00000000001"}, {"_bn": "0c14ca16dab25717d8fe41d9ec2617cd3f5d7c986f19d87898707564f3c516a7"}, {"_bn": "2989d6a9ff6b2a168b81bed69f59efcb8172a8c663a80112cce020c86145700b"}, {"_bn": "49c5e99524f07898034804274203258b3165710477bd5762d3d2d93ad0a4c3bf"}, {"_bn": "06ddf6e1d765a193d9cbe146ceeb79ac1cb485ed5f5b37913a8cf5857eff00a9"}, {"_bn": "00"}, {"_bn": "06a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000"}],
        "data": "3GyWrkssW12wRP8osktezmE7",
        "programId": {"_bn": "0a6593863cba461564eae41373721546eb0151c9308276bbd4ad2a1c3a42107b"}
      }, {
        "accounts": [{"_bn": "76207c90c0971f18f0e64cd685ec9fa39f4be7474f08208824ac8bedc0aed202"}, {"_bn": "76207c90c0971f18f0e64cd685ec9fa39f4be7474f08208824ac8bedc0aed202"}, {"_bn": "00"}, {"_bn": "069b8857feab8184fb687f634618c035dac439dc1aeb3b5598a0f00000000001"}, {"_bn": "ed501c2bf970de1b601ff82e39383f1e6475d6c9361df6df0747441b9f08cb10"}, {"_bn": "6e60c995754a2f14ec5ecd6c9a3788a86c2cd729bcf73b2d3f3cb062d1a7496c"}, {"_bn": "7cfe84a8831eca82cfe41c9dadbdf237dd03da16d8f2d06d595c44e029c3be37"}, {"_bn": "0c14ca16dab25717d8fe41d9ec2617cd3f5d7c986f19d87898707564f3c516a7"}, {"_bn": "2989d6a9ff6b2a168b81bed69f59efcb8172a8c663a80112cce020c86145700b"}, {"_bn": "49c5e99524f07898034804274203258b3165710477bd5762d3d2d93ad0a4c3bf"}, {"_bn": "907a6372423fbc0d005a18e2ff6bdb81f1b1b5f31b5ab7dfbfbfce66534a7b15"}, {"_bn": "06ddf6e1d765a193d9cbe146ceeb79ac1cb485ed5f5b37913a8cf5857eff00a9"}, {"_bn": "00"}, {"_bn": "06a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000"}],
        "data": "48CS5rNxJb9H9ojfQ1885A7vY8x2wmHZZadu",
        "programId": {"_bn": "0a6593863cba461564eae41373721546eb0151c9308276bbd4ad2a1c3a42107b"}
      }, {
        "parsed": {
          "info": {
            "destination": "5xyoD5hnWDBLsW6rjW2TBmqiDQsbod6Uaw15dRhNrDzn",
            "lamports": 897840,
            "source": "8x7qhXu8osWcJrQWmczNGN7HS8scnGJhdt4PXxGWu3S1"
          }, "type": "transfer"
        }, "program": "system", "programId": {"_bn": "00"}
      }],
      "recentBlockhash": "BbydjUpsFYLFdy2jfvq8HjwdQaVWpZga4WzdfA7jrWy5"
    },
    "signatures": ["3pL9V7rUs9i9oriNDEAYjsEn4x53JXcgurED4JuQ5C53biw1LQNqvo5abBx7fa5LrkPbA2otVkiDRPaEZYe1XtFS", "2yxLqEUUXGdtEnSnULpRLDxDXejcXCZnQziLAAF1s7AxPqFsRr8jgBamqXhoGoE52z1APcsB5YNRLWLF9MECT8U7"]
  }
}

export default tx;
