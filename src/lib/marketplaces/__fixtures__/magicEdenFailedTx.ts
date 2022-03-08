import {ParsedConfirmedTransaction} from "@solana/web3.js";

const saleTx: ParsedConfirmedTransaction = {
  "blockTime": 1646744640,
  "meta": {
    "err": {"InstructionError": [0, {"Custom": 1}]},
    "fee": 5000,
    "innerInstructions": [{
      "index": 0,
      "instructions": [{
        "parsed": {
          "info": {
            "lamports": 2011440,
            "newAccount": "AXz5FXk9xuSj4dL5SCQTezPXL6rNZwqKyV8aWHTtf5s1",
            "owner": "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
            "source": "L9xDD9dUAcM8r5NHF6SJZRtd4FBpiDUJCbkKF2msWeL",
            "space": 161
          }, "type": "createAccount"
        }, "program": "system", "programId": "11111111111111111111111111111111"
      }, {
        "parsed": {
          "info": {
            "destination": "7NcXXsn5MBUi3nfaE8VMJeZEUFnzcc9btHCFTHBoyrzG",
            "lamports": 199000000000,
            "source": "L9xDD9dUAcM8r5NHF6SJZRtd4FBpiDUJCbkKF2msWeL"
          }, "type": "transfer"
        }, "program": "system", "programId": "11111111111111111111111111111111"
      }]
    }],
    "logMessages": ["Program M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K invoke [1]", "Program log: Instruction: Buy", "Program 11111111111111111111111111111111 invoke [2]", "Program 11111111111111111111111111111111 success", "Program 11111111111111111111111111111111 invoke [2]", "Transfer: insufficient lamports 535541880, need 199000000000", "Program 11111111111111111111111111111111 failed: custom program error: 0x1", "Program M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K consumed 31706 of 200000 compute units", "Program M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K failed: custom program error: 0x1"],
    "postBalances": [537553320, 0, 100148868680, 0, 4679361921, 2039280, 0, 622546587905, 2234160, 122636106118, 183253627269, 21196708033, 7189216410, 1057098000, 1, 1461600, 5616720, 3654000, 953185920, 1009200, 898174080, 58542103680, 1141440],
    "postTokenBalances": [{
      "accountIndex": 5,
      "mint": "HrMZjUm31CANQdP61abasiMvYpEYc8dAtuDNxWmzZSkq",
      "owner": "1BWutmTvYPwDtmw9abTkS4Ssr8no61spGAvW1X6NDix",
      "uiTokenAmount": {"amount": "1", "decimals": 0, "uiAmount": 1.0, "uiAmountString": "1"}
    }],
    "preBalances": [537558320, 0, 100148868680, 0, 4679361921, 2039280, 0, 622546587905, 2234160, 122636106118, 183253627269, 21196708033, 7189216410, 1057098000, 1, 1461600, 5616720, 3654000, 953185920, 1009200, 898174080, 58542103680, 1141440],
    "preTokenBalances": [{
      "accountIndex": 5,
      "mint": "HrMZjUm31CANQdP61abasiMvYpEYc8dAtuDNxWmzZSkq",
      "owner": "1BWutmTvYPwDtmw9abTkS4Ssr8no61spGAvW1X6NDix",
      "uiTokenAmount": {"amount": "1", "decimals": 0, "uiAmount": 1.0, "uiAmountString": "1"}
    }],
    "rewards": [],
    "status": {"Err": {"InstructionError": [0, {"Custom": 1}]}}
  }, "slot": 124028515, "transaction": {
    "message": {
      "accountKeys": [{
        "pubkey": "L9xDD9dUAcM8r5NHF6SJZRtd4FBpiDUJCbkKF2msWeL",
        "signer": true,
        "writable": true
      }, {
        "pubkey": "7NcXXsn5MBUi3nfaE8VMJeZEUFnzcc9btHCFTHBoyrzG",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "AXz5FXk9xuSj4dL5SCQTezPXL6rNZwqKyV8aWHTtf5s1",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "Dga1gJnASog3uDjjibVkqvbtfbvrj9Hz3v2uN1Vojaid",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "91suNRSJkMbTtNj7U7oQUxQ4TEu9jHJEiFAY3RTU8BUx",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "6i9pirs3gRj1XsGVks3SHsQcnoAES2mwFYmhKAkexgYw",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "rFqFJ9g7TGBD8Ed7TPDnvGKZ5pWLPDyxLcvcH2eRCtt",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "2mxszBFYzWnwUN3MsYf96ENtNXRFtxE66rVR71j2gTpi",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "9BKWqDHfHZh9j39xakYVMdr6hXmCLHH5VfCpeq2idU9L",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "9FYsKrNuEweb55Wa2jaj8wTKYDBvuCG3huhakEj96iN9",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "HNGVuL5kqjDehw7KR63w9gxow32sX6xzRNgLb8GkbwCM",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "7FzXBBPjzrNJbm9MrZKZcyvP3ojVeYPUG2XkBPVZvuBu",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "DC2mkgwhy56w3viNtHDjJQmc7SGu2QX785bS4aexojwX",
        "signer": false,
        "writable": true
      }, {
        "pubkey": "11111111111111111111111111111111",
        "signer": false,
        "writable": false
      }, {
        "pubkey": "HrMZjUm31CANQdP61abasiMvYpEYc8dAtuDNxWmzZSkq",
        "signer": false,
        "writable": false
      }, {
        "pubkey": "57wdSxZi3tA2jfFKvjaZbbkFR5G9yj51QbuHgbsunCTt",
        "signer": false,
        "writable": false
      }, {
        "pubkey": "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe",
        "signer": false,
        "writable": false
      }, {
        "pubkey": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        "signer": false,
        "writable": false
      }, {
        "pubkey": "SysvarRent111111111111111111111111111111111",
        "signer": false,
        "writable": false
      }, {
        "pubkey": "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL",
        "signer": false,
        "writable": false
      }, {
        "pubkey": "1BWutmTvYPwDtmw9abTkS4Ssr8no61spGAvW1X6NDix",
        "signer": false,
        "writable": false
      }, {
        "pubkey": "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K",
        "signer": false,
        "writable": false
      }],
      "instructions": [{
        "accounts": ["L9xDD9dUAcM8r5NHF6SJZRtd4FBpiDUJCbkKF2msWeL", "11111111111111111111111111111111", "HrMZjUm31CANQdP61abasiMvYpEYc8dAtuDNxWmzZSkq", "57wdSxZi3tA2jfFKvjaZbbkFR5G9yj51QbuHgbsunCTt", "7NcXXsn5MBUi3nfaE8VMJeZEUFnzcc9btHCFTHBoyrzG", "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2", "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe", "AXz5FXk9xuSj4dL5SCQTezPXL6rNZwqKyV8aWHTtf5s1", "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2", "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA", "11111111111111111111111111111111", "SysvarRent111111111111111111111111111111111"],
        "data": "3Jmjmsq2jyrch5iuumKthq9BpAtbcaJp3dQRuTsmCFqy3Bu",
        "programId": "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K"
      }, {
        "accounts": ["L9xDD9dUAcM8r5NHF6SJZRtd4FBpiDUJCbkKF2msWeL", "Dga1gJnASog3uDjjibVkqvbtfbvrj9Hz3v2uN1Vojaid", "11111111111111111111111111111111", "91suNRSJkMbTtNj7U7oQUxQ4TEu9jHJEiFAY3RTU8BUx", "HrMZjUm31CANQdP61abasiMvYpEYc8dAtuDNxWmzZSkq", "57wdSxZi3tA2jfFKvjaZbbkFR5G9yj51QbuHgbsunCTt", "7NcXXsn5MBUi3nfaE8VMJeZEUFnzcc9btHCFTHBoyrzG", "6i9pirs3gRj1XsGVks3SHsQcnoAES2mwFYmhKAkexgYw", "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2", "E8cU1WiRWjanGxmn96ewBgk9vPTcL6AEZ1t6F6fkgUWe", "rFqFJ9g7TGBD8Ed7TPDnvGKZ5pWLPDyxLcvcH2eRCtt", "AXz5FXk9xuSj4dL5SCQTezPXL6rNZwqKyV8aWHTtf5s1", "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2", "2mxszBFYzWnwUN3MsYf96ENtNXRFtxE66rVR71j2gTpi", "autMW8SgBkVYeBgqYiTuJZnkvDZMVU2MHJh9Jh7CSQ2", "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA", "11111111111111111111111111111111", "ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL", "1BWutmTvYPwDtmw9abTkS4Ssr8no61spGAvW1X6NDix", "SysvarRent111111111111111111111111111111111", "9BKWqDHfHZh9j39xakYVMdr6hXmCLHH5VfCpeq2idU9L", "9FYsKrNuEweb55Wa2jaj8wTKYDBvuCG3huhakEj96iN9", "HNGVuL5kqjDehw7KR63w9gxow32sX6xzRNgLb8GkbwCM", "7FzXBBPjzrNJbm9MrZKZcyvP3ojVeYPUG2XkBPVZvuBu", "DC2mkgwhy56w3viNtHDjJQmc7SGu2QX785bS4aexojwX"],
        "data": "d6iteQtSVrfiCnAFBCZVgGJni4MkYHGWFMcA4f3DWT4LEbK7SgUwCTKy8",
        "programId": "M2mx93ekt1fmXSVkTrUL9xVFHkmME8HTUi5Cyc5aF7K"
      }],
      "recentBlockhash": "GkuTfjHCRufeew6yCoVbuEmTiNkY82X6R8dqSE5qiGgm"
    },
    "signatures": ["5D3kshpCeGwhxBBPRQXmD48XvENJKXSwR79v6ceZBRAS41d2JeqMv3d2Yy9aZ1LADwQdDiop4ErRihnfYudfRJBy"]
  }
}

export default saleTx;
