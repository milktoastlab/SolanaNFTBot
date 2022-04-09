import {ParsedConfirmedTransaction} from "@solana/web3.js";

const saleTx: ParsedConfirmedTransaction = {
  "blockTime": 1649206880,
  "meta": {
    "err": null,
    "fee": 10000,
    "innerInstructions": [{
      "index": 0,
      "instructions": [{
        "parsed": {
          "info": {
            "amount": "1",
            "delegate": "HS2eL9WJbh7pA4i4veK3YDwhGLRjY3uKryvG1NbHRprj",
            "owner": "J6CH2rnYqfhqk7fTKoPBpjYjMjzRYvtcWWYqXuTbX451",
            "source": "FWhvk9XkwbAYtBMyUQEzkKdF84ZHsRpxXabNKuX1WAWA"
          }, "type": "approve"
        },
        "program": "spl-token",
        "programId": {"_bn": "06ddf6e1d765a193d9cbe146ceeb79ac1cb485ed5f5b37913a8cf5857eff00a9"}
      }, {
        "parsed": {
          "info": {
            "destination": "AmsLrn1TU4VBj4kg9wNUaH12k63btEraUfXnnZJhdbwc",
            "lamports": 897840,
            "source": "5xyoD5hnWDBLsW6rjW2TBmqiDQsbod6Uaw15dRhNrDzn"
          }, "type": "transfer"
        }, "program": "system", "programId": {"_bn": "00"}
      }, {
        "parsed": {
          "info": {
            "account": "AmsLrn1TU4VBj4kg9wNUaH12k63btEraUfXnnZJhdbwc",
            "space": 1
          }, "type": "allocate"
        }, "program": "system", "programId": {"_bn": "00"}
      }, {
        "parsed": {
          "info": {
            "account": "AmsLrn1TU4VBj4kg9wNUaH12k63btEraUfXnnZJhdbwc",
            "owner": "hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk"
          }, "type": "assign"
        }, "program": "system", "programId": {"_bn": "00"}
      }]
    }, {
      "index": 2,
      "instructions": [{
        "parsed": {
          "info": {
            "destination": "71kwsvqZ5hTzQUB8piTRUBbCaoUWGMyN5Gb8vAtt9ZYV",
            "lamports": 1795680,
            "source": "5xyoD5hnWDBLsW6rjW2TBmqiDQsbod6Uaw15dRhNrDzn"
          }, "type": "transfer"
        }, "program": "system", "programId": {"_bn": "00"}
      }]
    }, {
      "index": 5,
      "instructions": [{
        "parsed": {
          "info": {
            "destination": "9BKWqDHfHZh9j39xakYVMdr6hXmCLHH5VfCpeq2idU9L",
            "lamports": 1539720000,
            "source": "BqdcmEKknjPMk2HNqG3ThiQQzeRLXarxY2PY9emsQ7v4"
          }, "type": "transfer"
        }, "program": "system", "programId": {"_bn": "00"}
      }, {
        "parsed": {
          "info": {
            "destination": "9FYsKrNuEweb55Wa2jaj8wTKYDBvuCG3huhakEj96iN9",
            "lamports": 987000000,
            "source": "BqdcmEKknjPMk2HNqG3ThiQQzeRLXarxY2PY9emsQ7v4"
          }, "type": "transfer"
        }, "program": "system", "programId": {"_bn": "00"}
      }, {
        "parsed": {
          "info": {
            "destination": "HNGVuL5kqjDehw7KR63w9gxow32sX6xzRNgLb8GkbwCM",
            "lamports": 987000000,
            "source": "BqdcmEKknjPMk2HNqG3ThiQQzeRLXarxY2PY9emsQ7v4"
          }, "type": "transfer"
        }, "program": "system", "programId": {"_bn": "00"}
      }, {
        "parsed": {
          "info": {
            "destination": "7FzXBBPjzrNJbm9MrZKZcyvP3ojVeYPUG2XkBPVZvuBu",
            "lamports": 394800000,
            "source": "BqdcmEKknjPMk2HNqG3ThiQQzeRLXarxY2PY9emsQ7v4"
          }, "type": "transfer"
        }, "program": "system", "programId": {"_bn": "00"}
      }, {
        "parsed": {
          "info": {
            "destination": "DC2mkgwhy56w3viNtHDjJQmc7SGu2QX785bS4aexojwX",
            "lamports": 39480000,
            "source": "BqdcmEKknjPMk2HNqG3ThiQQzeRLXarxY2PY9emsQ7v4"
          }, "type": "transfer"
        }, "program": "system", "programId": {"_bn": "00"}
      }, {
        "parsed": {
          "info": {
            "destination": "8mcjXbJ8j4VryYFNpcBCFS37Au8zVYU53WTVaruJWcKt",
            "lamports": 2350000000,
            "source": "BqdcmEKknjPMk2HNqG3ThiQQzeRLXarxY2PY9emsQ7v4"
          }, "type": "transfer"
        }, "program": "system", "programId": {"_bn": "00"}
      }, {
        "parsed": {
          "info": {
            "destination": "J6CH2rnYqfhqk7fTKoPBpjYjMjzRYvtcWWYqXuTbX451",
            "lamports": 87702000000,
            "source": "BqdcmEKknjPMk2HNqG3ThiQQzeRLXarxY2PY9emsQ7v4"
          }, "type": "transfer"
        }, "program": "system", "programId": {"_bn": "00"}
      }, {
        "parsed": {
          "info": {
            "amount": "1",
            "authority": "HS2eL9WJbh7pA4i4veK3YDwhGLRjY3uKryvG1NbHRprj",
            "destination": "FDQhqk3pQgSVj2praA5jD4pEKC9hzerSzGSXHeqAppAT",
            "source": "FWhvk9XkwbAYtBMyUQEzkKdF84ZHsRpxXabNKuX1WAWA"
          }, "type": "transfer"
        },
        "program": "spl-token",
        "programId": {"_bn": "06ddf6e1d765a193d9cbe146ceeb79ac1cb485ed5f5b37913a8cf5857eff00a9"}
      }]
    }],
    "logMessages": ["Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk invoke [1]", "Program log: Instruction: Sell", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]", "Program log: Instruction: Approve", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2026 of 170370 compute units", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success", "Program log: Transfer 897840 lamports to the new account", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program log: Allocate space for the account AmsLrn1TU4VBj4kg9wNUaH12k63btEraUfXnnZJhdbwc", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program log: Assign the account to the owning program", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program log: Completed assignation!", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk consumed 55831 of 200000 compute units", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk success", "Program 11111111111111111111111111111111 invoke [1]", "Program 11111111111111111111111111111111 success", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk invoke [1]", "Program log: Instruction: WithdrawFromFee", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk consumed 13348 of 200000 compute units", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk success", "Program 11111111111111111111111111111111 invoke [1]", "Program 11111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [1]", "Program 11111111111111111111111111111111 success", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk invoke [1]", "Program log: Instruction: ExecuteSale", "Program log: Err(Custom(6013)), Ok(255), 255", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]", "Program log: Instruction: Transfer", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2712 of 128895 compute units", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk consumed 77023 of 200000 compute units", "Program hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk success"],
    "postBalances": [551806734363, 22295920, 2039280, 4085520, 101854902482, 0, 0, 224458141440, 2310000000, 2039280, 31502432899, 0, 944386067440, 823658107091, 82581107855, 31989638398, 4306995000, 5616720, 953185920, 1, 0, 1009200, 1461600, 152395037831, 898174080, 1141440],
    "postTokenBalances": [{
      "accountIndex": 2,
      "mint": "CL8vqe2dL8Khh1fZtzSZL6DcXweSkdzGVS4t8LbmBh14",
      "owner": "J6CH2rnYqfhqk7fTKoPBpjYjMjzRYvtcWWYqXuTbX451",
      "uiTokenAmount": {"amount": "0", "decimals": 0, "uiAmount": null, "uiAmountString": "0"}
    }, {
      "accountIndex": 9,
      "mint": "CL8vqe2dL8Khh1fZtzSZL6DcXweSkdzGVS4t8LbmBh14",
      "owner": "EatSzWzfeo47TKCVQn6khv3qgWA9oKg28sfHcA4wsBZ1",
      "uiTokenAmount": {"amount": "1", "decimals": 0, "uiAmount": 1, "uiAmountString": "1"}
    }],
    "preBalances": [464104744363, 22295920, 2039280, 4085520, 101854902482, 0, 0, 224457243600, 96310000000, 2039280, 29152432899, 897840, 942846347440, 822671107091, 81594107855, 31594838398, 4267515000, 5616720, 953185920, 1, 0, 1009200, 1461600, 152395037831, 898174080, 1141440],
    "preTokenBalances": [{
      "accountIndex": 2,
      "mint": "CL8vqe2dL8Khh1fZtzSZL6DcXweSkdzGVS4t8LbmBh14",
      "owner": "J6CH2rnYqfhqk7fTKoPBpjYjMjzRYvtcWWYqXuTbX451",
      "uiTokenAmount": {"amount": "1", "decimals": 0, "uiAmount": 1, "uiAmountString": "1"}
    }, {
      "accountIndex": 9,
      "mint": "CL8vqe2dL8Khh1fZtzSZL6DcXweSkdzGVS4t8LbmBh14",
      "owner": "EatSzWzfeo47TKCVQn6khv3qgWA9oKg28sfHcA4wsBZ1",
      "uiTokenAmount": {"amount": "0", "decimals": 0, "uiAmount": null, "uiAmountString": "0"}
    }],
    "rewards": [],
    "status": {"Ok": null}
  }, "slot": 128414021, "transaction": {
    "message": {
      "accountKeys": [{
        "pubkey": {"_bn": "fdeb5502ecdd8477eabb88423bac3c1a819078ea4653259fb342f601cece8964"},
        "signer": true,
        "writable": true
      }, {
        "pubkey": {"_bn": "5957cfc8a0e42253218140104fbeb444dec3d24b06d03de8efd6ea4d74b0f1b2"},
        "signer": true,
        "writable": true
      }, {
        "pubkey": {"_bn": "d79fbc7eae510dfbb522862cc837eef953bc9b136af3fb4de03ed5b683f4eb27"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "2989d6a9ff6b2a168b81bed69f59efcb8172a8c663a80112cce020c86145700b"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "49c5e99524f07898034804274203258b3165710477bd5762d3d2d93ad0a4c3bf"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "9137a90629483d28899733c1bb90c0fd2beec2d5752a4aa6baee07acfd3cec67"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "554834cb47a18536de10856c40cd94b4d545e7e8ce23011bfe2af6b35ae3ad32"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "c9d644f2dbe938ba41f8253e0b77be77dff0061b92abebcaf6e6761906466c78"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "a10a268ecd21a1f027fd6b7cf53d3b3bfc9251fdb1cc8b3fb7fd0105fafa7b55"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "d331639817d825643f482d574803ced3236d199326b1c24b62df578c156be7e8"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "736fc48d12def6a316c4a28f340f33a6133c07a3044abb71fd07b52eac169a0b"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "3a8cda0ee1ac4b27c7c2c2f32b0da7743cf76968ad4dace0b5c7a044439dee09"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "79823cdb6ce50873db3f895e243f94d8220b9838702ef97bbaeb6970dd2394ff"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "7a97a8dd8992557bb1775608180d05c7f341865add90def08a1969f340016cd6"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "f32db6394ef748976b14ecfbc276dac42f08176162184b4bda980306206dd54a"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "5cfd4a8feec61e4228f0286c5d2b00510d2615263a20ed583f19da112744ed10"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "b51fa29b1ddbc2641f10f9d3c921395a89b34404b498a5e989d0c7a4e7b1f8c2"},
        "signer": false,
        "writable": true
      }, {
        "pubkey": {"_bn": "4cebb96c7e001c56092f91df86d78c33272aca8fdfbf0cdceea319e36585a604"},
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
        "pubkey": {"_bn": "f4245e977593125fb15941b6c0a9260af4438bcd10355292a40b05df87f5d520"},
        "signer": false,
        "writable": false
      }, {
        "pubkey": {"_bn": "06a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000"},
        "signer": false,
        "writable": false
      }, {
        "pubkey": {"_bn": "a8578e5a4636e8627d645731f173d52965942fcf79e0069678745ea1dce12673"},
        "signer": false,
        "writable": false
      }, {
        "pubkey": {"_bn": "069b8857feab8184fb687f634618c035dac439dc1aeb3b5598a0f00000000001"},
        "signer": false,
        "writable": false
      }, {
        "pubkey": {"_bn": "8c97258f4e2489f1bb3d1029148e0d830b5a1399daff1084048e7bd8dbe9f859"},
        "signer": false,
        "writable": false
      }, {
        "pubkey": {"_bn": "0a6593863cba461564eae41373721546eb0151c9308276bbd4ad2a1c3a42107b"},
        "signer": false,
        "writable": false
      }],
      "instructions": [{
        "accounts": [{"_bn": "fdeb5502ecdd8477eabb88423bac3c1a819078ea4653259fb342f601cece8964"}, {"_bn": "d79fbc7eae510dfbb522862cc837eef953bc9b136af3fb4de03ed5b683f4eb27"}, {"_bn": "4cebb96c7e001c56092f91df86d78c33272aca8fdfbf0cdceea319e36585a604"}, {"_bn": "5957cfc8a0e42253218140104fbeb444dec3d24b06d03de8efd6ea4d74b0f1b2"}, {"_bn": "2989d6a9ff6b2a168b81bed69f59efcb8172a8c663a80112cce020c86145700b"}, {"_bn": "49c5e99524f07898034804274203258b3165710477bd5762d3d2d93ad0a4c3bf"}, {"_bn": "9137a90629483d28899733c1bb90c0fd2beec2d5752a4aa6baee07acfd3cec67"}, {"_bn": "554834cb47a18536de10856c40cd94b4d545e7e8ce23011bfe2af6b35ae3ad32"}, {"_bn": "06ddf6e1d765a193d9cbe146ceeb79ac1cb485ed5f5b37913a8cf5857eff00a9"}, {"_bn": "00"}, {"_bn": "f4245e977593125fb15941b6c0a9260af4438bcd10355292a40b05df87f5d520"}, {"_bn": "06a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000"}],
        "data": "81r6u24fHZhKcNPeduJymPQqvNmJErHCHUtrb",
        "programId": {"_bn": "0a6593863cba461564eae41373721546eb0151c9308276bbd4ad2a1c3a42107b"}
      }, {
        "parsed": {
          "info": {
            "destination": "5xyoD5hnWDBLsW6rjW2TBmqiDQsbod6Uaw15dRhNrDzn",
            "lamports": 897840,
            "source": "J6CH2rnYqfhqk7fTKoPBpjYjMjzRYvtcWWYqXuTbX451"
          }, "type": "transfer"
        }, "program": "system", "programId": {"_bn": "00"}
      }, {
        "accounts": [{"_bn": "5957cfc8a0e42253218140104fbeb444dec3d24b06d03de8efd6ea4d74b0f1b2"}, {"_bn": "5957cfc8a0e42253218140104fbeb444dec3d24b06d03de8efd6ea4d74b0f1b2"}, {"_bn": "49c5e99524f07898034804274203258b3165710477bd5762d3d2d93ad0a4c3bf"}, {"_bn": "2989d6a9ff6b2a168b81bed69f59efcb8172a8c663a80112cce020c86145700b"}, {"_bn": "00"}],
        "data": "PCrWfhudhPULPQhY2paGG7",
        "programId": {"_bn": "0a6593863cba461564eae41373721546eb0151c9308276bbd4ad2a1c3a42107b"}
      }, {
        "parsed": {
          "info": {
            "destination": "EatSzWzfeo47TKCVQn6khv3qgWA9oKg28sfHcA4wsBZ1",
            "lamports": 897840,
            "source": "71kwsvqZ5hTzQUB8piTRUBbCaoUWGMyN5Gb8vAtt9ZYV"
          }, "type": "transfer"
        }, "program": "system", "programId": {"_bn": "00"}
      }, {
        "parsed": {
          "info": {
            "destination": "J6CH2rnYqfhqk7fTKoPBpjYjMjzRYvtcWWYqXuTbX451",
            "lamports": 897840,
            "source": "71kwsvqZ5hTzQUB8piTRUBbCaoUWGMyN5Gb8vAtt9ZYV"
          }, "type": "transfer"
        }, "program": "system", "programId": {"_bn": "00"}
      }, {
        "accounts": [{"_bn": "c9d644f2dbe938ba41f8253e0b77be77dff0061b92abebcaf6e6761906466c78"}, {"_bn": "fdeb5502ecdd8477eabb88423bac3c1a819078ea4653259fb342f601cece8964"}, {"_bn": "d79fbc7eae510dfbb522862cc837eef953bc9b136af3fb4de03ed5b683f4eb27"}, {"_bn": "a8578e5a4636e8627d645731f173d52965942fcf79e0069678745ea1dce12673"}, {"_bn": "4cebb96c7e001c56092f91df86d78c33272aca8fdfbf0cdceea319e36585a604"}, {"_bn": "069b8857feab8184fb687f634618c035dac439dc1aeb3b5598a0f00000000001"}, {"_bn": "a10a268ecd21a1f027fd6b7cf53d3b3bfc9251fdb1cc8b3fb7fd0105fafa7b55"}, {"_bn": "fdeb5502ecdd8477eabb88423bac3c1a819078ea4653259fb342f601cece8964"}, {"_bn": "d331639817d825643f482d574803ced3236d199326b1c24b62df578c156be7e8"}, {"_bn": "5957cfc8a0e42253218140104fbeb444dec3d24b06d03de8efd6ea4d74b0f1b2"}, {"_bn": "2989d6a9ff6b2a168b81bed69f59efcb8172a8c663a80112cce020c86145700b"}, {"_bn": "49c5e99524f07898034804274203258b3165710477bd5762d3d2d93ad0a4c3bf"}, {"_bn": "736fc48d12def6a316c4a28f340f33a6133c07a3044abb71fd07b52eac169a0b"}, {"_bn": "3a8cda0ee1ac4b27c7c2c2f32b0da7743cf76968ad4dace0b5c7a044439dee09"}, {"_bn": "9137a90629483d28899733c1bb90c0fd2beec2d5752a4aa6baee07acfd3cec67"}, {"_bn": "554834cb47a18536de10856c40cd94b4d545e7e8ce23011bfe2af6b35ae3ad32"}, {"_bn": "06ddf6e1d765a193d9cbe146ceeb79ac1cb485ed5f5b37913a8cf5857eff00a9"}, {"_bn": "00"}, {"_bn": "8c97258f4e2489f1bb3d1029148e0d830b5a1399daff1084048e7bd8dbe9f859"}, {"_bn": "f4245e977593125fb15941b6c0a9260af4438bcd10355292a40b05df87f5d520"}, {"_bn": "06a7d517192c5c51218cc94c3d4af17f58daee089ba1fd44e3dbd98a00000000"}, {"_bn": "79823cdb6ce50873db3f895e243f94d8220b9838702ef97bbaeb6970dd2394ff"}, {"_bn": "7a97a8dd8992557bb1775608180d05c7f341865add90def08a1969f340016cd6"}, {"_bn": "f32db6394ef748976b14ecfbc276dac42f08176162184b4bda980306206dd54a"}, {"_bn": "5cfd4a8feec61e4228f0286c5d2b00510d2615263a20ed583f19da112744ed10"}, {"_bn": "b51fa29b1ddbc2641f10f9d3c921395a89b34404b498a5e989d0c7a4e7b1f8c2"}],
        "data": "63LNsZWnP5nGqQbbaSU38R9yL1otajQKHuqEo",
        "programId": {"_bn": "0a6593863cba461564eae41373721546eb0151c9308276bbd4ad2a1c3a42107b"}
      }],
      "recentBlockhash": "D356DYrLMkLxzusPA8e9rYtZU99EE3mRJezP6yYiT5A2"
    },
    "signatures": ["3uCUHGPcXJGA4c1fwwY2hn4pdfLYqUuqACqGHaWhPjCqt8YJrZ63QQrPqFn56qe3QEoL7BJtvQA8VuTCV4QPrEA2", "EQ3wAgjPo1BpZrF34g3faXQQkBscJZcwg7NRg3VS1bDWULsTJfToPzept7GJqHAm5pvAGoq2CaXMe9FZRabDQUD"]
  }
}
export default saleTx;
