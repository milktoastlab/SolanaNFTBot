import {ParsedConfirmedTransaction} from "@solana/web3.js";

const saleTx: ParsedConfirmedTransaction = {
  "blockTime": 1635141315, "meta": {
    "err": null,
    "fee": 5000,
    "innerInstructions": [{
      "index": 0,
      "instructions": [{
        "parsed": {
          "info": {
            "destination": "2NZukH2TXpcuZP4htiuT8CFxcaQSWzkkR6kepSWnZ24Q",
            "lamports": 74400000,
            "source": "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu"
          }, "type": "transfer"
        }, "program": "system", "programId": "11111111111111111111111111111111"
      }, {
        "parsed": {
          "info": {
            "destination": "4eQwMqAA4c2VUD51rqfAke7kqeFLAxcxSB67rtFjDyZA",
            "lamports": 74400000,
            "source": "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu"
          }, "type": "transfer"
        }, "program": "system", "programId": "11111111111111111111111111111111"
      }, {
        "parsed": {
          "info": {
            "destination": "Dz9kwoBVVzF11cHeKotQpA7t4aeCQsgRpVw4dg8zkntg",
            "lamports": 74400000,
            "source": "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu"
          }, "type": "transfer"
        }, "program": "system", "programId": "11111111111111111111111111111111"
      }, {
        "parsed": {
          "info": {
            "destination": "4xHEEswq2T2E5uNoa1uw34RNKzPerayBHxX3P4SaR7cD",
            "lamports": 74400000,
            "source": "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu"
          }, "type": "transfer"
        }, "program": "system", "programId": "11111111111111111111111111111111"
      }, {
        "parsed": {
          "info": {
            "destination": "33CJriD17bUScYW7eKFjM6BPfkFWPerHfdpvtw3a8JdN",
            "lamports": 74400000,
            "source": "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu"
          }, "type": "transfer"
        }, "program": "system", "programId": "11111111111111111111111111111111"
      }, {
        "parsed": {
          "info": {
            "destination": "HWZybKNqMa93EmHK2ESL2v1XShcnt4ma4nFf14497jNS",
            "lamports": 74400000,
            "source": "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu"
          }, "type": "transfer"
        }, "program": "system", "programId": "11111111111111111111111111111111"
      }, {
        "parsed": {
          "info": {
            "destination": "HihC794BdNCetkizxdFjVD2KiKWirGYbm2ojvRYXQd6H",
            "lamports": 3273600000,
            "source": "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu"
          }, "type": "transfer"
        }, "program": "system", "programId": "11111111111111111111111111111111"
      }, {
        "parsed": {
          "info": {
            "account": "9m8xj63juQLQvSmWybzxxmShbnsf8tH29kkfRRKDBz2c",
            "authority": "GUfCR9mK6azb9vcpsxgXyj7XRPAKJd4KMHTTVvtncGgp",
            "authorityType": "accountOwner",
            "newAuthority": "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu"
          }, "type": "setAuthority"
        }, "program": "spl-token", "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
      }]
    }],
    "logMessages": ["Program MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8 invoke [1]", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA invoke [2]", "Program log: Instruction: SetAuthority", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA consumed 2028 of 156898 compute units", "Program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success", "Program MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8 consumed 47267 of 200000 compute units", "Program MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8 success"],
    "postBalances": [7687945720, 2039280, 3277943593, 0, 7767438857012, 344467027205, 8688759800, 5636600000, 497000000, 5634555720, 118399366401, 1, 1089991680, 5616720, 1141440],
    "postTokenBalances": [{
      "accountIndex": 1,
      "mint": "8pwYVy61QiSTJGPc8yYfkVPLBBr8r17WkpUFRhNK6cjK",
      "uiTokenAmount": {"amount": "1", "decimals": 0, "uiAmount": 1.0, "uiAmountString": "1"}
    }],
    "preBalances": [11407950720, 2039280, 2895913, 1447680, 7767364457012, 344392627205, 8614359800, 5562200000, 422600000, 5560155720, 118399366401, 1, 1089991680, 5616720, 1141440],
    "preTokenBalances": [{
      "accountIndex": 1,
      "mint": "8pwYVy61QiSTJGPc8yYfkVPLBBr8r17WkpUFRhNK6cjK",
      "uiTokenAmount": {"amount": "1", "decimals": 0, "uiAmount": 1.0, "uiAmountString": "1"}
    }],
    "rewards": [],
    "status": {"Ok": null}
  }, "slot": 103384246, "transaction": {
    "message": {
      "accountKeys": [{
        "pubkey": "U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu",
        "signer": true,
        "writable": true
      }, {
        "pubkey": "9m8xj63juQLQvSmWybzxxmShbnsf8tH29kkfRRKDBz2c",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "HihC794BdNCetkizxdFjVD2KiKWirGYbm2ojvRYXQd6H",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "DKoBZuFVfeVycjeb76M3nabuDx3zewTBbDr6mdCsUU1M",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "2NZukH2TXpcuZP4htiuT8CFxcaQSWzkkR6kepSWnZ24Q",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "4eQwMqAA4c2VUD51rqfAke7kqeFLAxcxSB67rtFjDyZA",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "Dz9kwoBVVzF11cHeKotQpA7t4aeCQsgRpVw4dg8zkntg",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "4xHEEswq2T2E5uNoa1uw34RNKzPerayBHxX3P4SaR7cD",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "33CJriD17bUScYW7eKFjM6BPfkFWPerHfdpvtw3a8JdN",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "HWZybKNqMa93EmHK2ESL2v1XShcnt4ma4nFf14497jNS",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "GUfCR9mK6azb9vcpsxgXyj7XRPAKJd4KMHTTVvtncGgp",
        "signer": false,
        "writable": false
      }, {
        "pubkey": "11111111111111111111111111111111",
        "signer": false,
        "writable": false
      }, {
        "pubkey": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        "signer": false,
        "writable": false
      }, {
        "pubkey": "AJUb5pxdi4Bh4AeL6mHHqTjU5Up4x114Y9nyu7pkRMBc",
        "signer": false,
        "writable": false
      }, {
        "pubkey": "MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8",
        "signer": false,
        "writable": false
      }],
      "instructions": [{
        "accounts": ["U7ZkJtaAwvBHt9Tw5BK8sdp2wLrEe7p1g3kFxB9WJCu", "9m8xj63juQLQvSmWybzxxmShbnsf8tH29kkfRRKDBz2c", "HihC794BdNCetkizxdFjVD2KiKWirGYbm2ojvRYXQd6H", "DKoBZuFVfeVycjeb76M3nabuDx3zewTBbDr6mdCsUU1M", "GUfCR9mK6azb9vcpsxgXyj7XRPAKJd4KMHTTVvtncGgp", "11111111111111111111111111111111", "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA", "2NZukH2TXpcuZP4htiuT8CFxcaQSWzkkR6kepSWnZ24Q", "AJUb5pxdi4Bh4AeL6mHHqTjU5Up4x114Y9nyu7pkRMBc", "4eQwMqAA4c2VUD51rqfAke7kqeFLAxcxSB67rtFjDyZA", "Dz9kwoBVVzF11cHeKotQpA7t4aeCQsgRpVw4dg8zkntg", "4xHEEswq2T2E5uNoa1uw34RNKzPerayBHxX3P4SaR7cD", "33CJriD17bUScYW7eKFjM6BPfkFWPerHfdpvtw3a8JdN", "HWZybKNqMa93EmHK2ESL2v1XShcnt4ma4nFf14497jNS"],
        "data": "8s5SjQsS25V",
        "programId": "MEisE1HzehtrDpAAT8PnLHjpSSkRYakotTuJRPjTpo8"
      }],
      "recentBlockhash": "5heDujnNgj2hPUXa9iqRMxynQX5Z2tzXEkPn9wuagWSd"
    },
    "signatures": ["626EgwuS6dbUKrkZujQCFjHiRsz92ALR5gNAEg2eMpZzEo88Cci6HifpDFcvgYR8j88nXUq1nRUA7UDRdvB7Y6WD"]
  }
};

export default saleTx;
