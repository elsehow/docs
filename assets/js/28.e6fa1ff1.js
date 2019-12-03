(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{228:function(e,a,n){"use strict";n.r(a);var t=n(0),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"stake-management"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#stake-management"}},[e._v("#")]),e._v(" Stake Management")]),e._v(" "),n("p",[e._v("For node operators the "),n("code",[e._v("oasis-node")]),e._v(" binary offers a command line interface for\nvarious staking token operations.")]),e._v(" "),n("p",[e._v("The following commands are intended to be run "),n("strong",[e._v("online")]),e._v(":")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("oasis-node stake info")]),e._v(" shows the token information,")]),e._v(" "),n("li",[n("code",[e._v("oasis-node stake list")]),e._v(" lists all accounts with positive balance,")]),e._v(" "),n("li",[n("code",[e._v("oasis-node stake account info")]),e._v(" shows detailed account information,")]),e._v(" "),n("li",[n("code",[e._v("oasis-node stake account submit")]),e._v(" submits a pregenerated transaction given a\nfilename.")])]),e._v(" "),n("p",[e._v("In addition, the following commands generate transactions and are meant to be\nrun offline, because signing transactions requires a private key which "),n("strong",[e._v("should\nnot be accessible")]),e._v(" from outside in any way:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("oasis-node stake account gen_transfer")])]),e._v(" "),n("li",[n("code",[e._v("oasis-node stake account gen_burn")])]),e._v(" "),n("li",[n("code",[e._v("oasis-node stake account gen_escrow")])]),e._v(" "),n("li",[n("code",[e._v("oasis-node stake account gen_reclaim_escrow")])])]),e._v(" "),n("h2",{attrs:{id:"staking-basics"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#staking-basics"}},[e._v("#")]),e._v(" Staking basics")]),e._v(" "),n("p",[e._v("We will assume you followed previous node operators sections so you have "),n("code",[e._v("oasis-node")]),e._v("\nbinary available, a genesis file location stored in an environmental variable "),n("code",[e._v("$GENESIS_FILE_PATH")]),e._v(",\nand the private keypair of your entity in a directory "),n("code",[e._v("$ENTITY_DIR_PATH")]),e._v(".\nAdditionally, we will use "),n("code",[e._v("$ADDR")]),e._v(" containing the location of the internal socket,\nof the Oasis node, for example")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export ADDR=unix:/tmp/oasis-net-runner236357163/net-runner/network/client-0/internal.sock\n")])])]),n("p",[e._v("We will provide the "),n("code",[e._v("-a $ADDR")]),e._v(" parameter to any operation which requires\nconnection to the Oasis node. Conversely, "),n("code",[e._v("--genesis.file $GENESIS_FILE_PATH")]),e._v("\nand "),n("code",[e._v("--entity $ENTITY_DIR_PATH")]),e._v(" will be used for offline operations.")]),e._v(" "),n("p",[e._v("First, let's check out the native token of our platform:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('$ oasis-node stake info -a $ADDR\nName: "Buffycoin"\nSymbol: "BUF"\nTotal supply: 200000000000\nCommon pool: 0\nStaking threshold (entity): 0\nStaking threshold (validator): 0\nStaking threshold (compute): 0\nStaking threshold (storage): 0\n')])])]),n("p",[e._v("There is a native token named "),n("code",[e._v("Buffycoin")]),e._v(" with symbol "),n("code",[e._v("BUF")]),e._v(" with total supply of\n200 billion. All tokens are allocated in their respective accounts and no tokens\nare in the "),n("em",[e._v("common pool")]),e._v(". Finally we see no staking thresholds for any node kind\n(entity, validator, compute, storage).")]),e._v(" "),n("p",[e._v("Let's list all accounts with positive balance:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("$ oasis-node stake list -a $ADDR\n4ea5328f943ef6f66daaed74cb0e99c3b1c45f76307b425003dbc7cb3638ed35\n")])])]),n("p",[e._v("There exists one such account "),n("code",[e._v("4ea5328f943ef6f66daaed74cb0e99c3b1c45f76307b425003dbc7cb3638ed35")]),e._v(".\nFor more information about the account, run:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('$ oasis-node stake account info \\\n    -a $ADDR \\\n    --stake.account.id 4ea5328f943ef6f66daaed74cb0e99c3b1c45f76307b425003dbc7cb3638ed35\n{"id":"TqUyj5Q+9vZtqu10yw6Zw7HEX3Ywe0JQA9vHyzY47TU=","general_balance":"100000000000","escrow_balance":"100000000000","nonce":0}\n')])])]),n("p",[e._v("We notice that:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("id")]),e._v(" stores the Base64-encoded address of the account.")]),e._v(" "),n("li",[n("code",[e._v("general_balance")]),e._v(" is the number of tokens which can be spent by a transfer\ntransaction signed by the account's private key.")]),e._v(" "),n("li",[e._v("Each account can also serve as an escrow. "),n("code",[e._v("escrow_balance")]),e._v(" is the number of\ntokens this account contains as an escrow and which can be reclaimed by the\ndepositor. In our environment, both balances have 100 billion tokens.")]),e._v(" "),n("li",[e._v("Any outgoing transaction from the account must have an incremental "),n("code",[e._v("nonce")]),e._v(". In\nour case, the next outgoing transaction of the account should have "),n("code",[e._v("nonce: 0")]),e._v(".")])]),e._v(" "),n("h2",{attrs:{id:"example-burning-tokens"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-burning-tokens"}},[e._v("#")]),e._v(" Example: Burning tokens")]),e._v(" "),n("p",[e._v("Next, we will generate and sign our first transaction. Let's start with a "),n("em",[e._v("burn")]),e._v("\ntransaction, which destroys the given number of tokens. To generate a\nburn transaction of 2000 tokens, sign and store the transaction to file "),n("code",[e._v("b.json")]),e._v(",\ntype:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("oasis-node stake account gen_burn \\\n  --genesis.file $GENESIS_FILE_PATH \\\n  --entity $ENTITY_DIR_PATH \\\n  --stake.transaction.amount 2000 \\\n  --stake.transaction.file b.json \\\n  --stake.transaction.nonce 0 \\\n  --stake.transaction.fee.gas 1000 \\\n  --stake.transaction.fee.amount 1\n")])])]),n("p",[e._v("We used the following parameters:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("--stake.transaction.amount")]),e._v(" specifying the number of tokens,")]),e._v(" "),n("li",[n("code",[e._v("--stake.transaction.file")]),e._v(" the output filename of the transaction stored in\nJSON format,")]),e._v(" "),n("li",[n("code",[e._v("--stake.transaction.nonce")]),e._v(" the incremental nonce. Since this is our first\ntransaction which changes the account balance, "),n("code",[e._v("nonce")]),e._v(" equals "),n("code",[e._v("0")]),e._v(",")]),e._v(" "),n("li",[n("code",[e._v("--stake.transaction.fee.gas")]),e._v(" is the maximum amount of gas we allow this\ntransaction to spend,")]),e._v(" "),n("li",[n("code",[e._v("--stake.transaction.fee.amount")]),e._v(" is the fee in tokens we will pay for this\ntransaction.")])]),e._v(" "),n("p",[e._v("The above generation and signing of the transaction can be done offline.")]),e._v(" "),n("p",[e._v("To submit our transaction, we need to copy "),n("code",[e._v("b.json")]),e._v(" to a location accessible by\nthe online Oasis node (e.g. via ssh) and run on the server:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("oasis-node stake account submit \\\n  -a $ADDR \\\n  --stake.account.id 4ea5328f943ef6f66daaed74cb0e99c3b1c45f76307b425003dbc7cb3638ed35 \\\n  --stake.transaction.file b.json\n")])])]),n("p",[e._v("Beside the node's address, the submit operation above requires:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("--stake.transaction.file")]),e._v(" is the input filename of the transaction,")]),e._v(" "),n("li",[n("code",[e._v("--stake.account.id")]),e._v(" is the staking account which pays the transaction fee and\nserves as an escrow.")])]),e._v(" "),n("p",[e._v("Finally, let's check the new balance of the account:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('$ oasis-node stake account info \\\n    -a $ADDR \\\n    --stake.account.id 4ea5328f943ef6f66daaed74cb0e99c3b1c45f76307b425003dbc7cb3638ed35\n{"id":"TqUyj5Q+9vZtqu10yw6Zw7HEX3Ywe0JQA9vHyzY47TU=","general_balance":"99999998000","escrow_balance":"100000000000","nonce":0}\n')])])]),n("p",[e._v("Notice that "),n("code",[e._v("2000")]),e._v(" tokens have been correctly deducted from the "),n("code",[e._v("general_balance")]),e._v(".")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("Usually, the new balance is seen immediately, but some transactions (for example\nescrow reclaiming) do not take effect until after a debonding period has elapsed,\nso you might need to wait a few blocks for the balances to update.")])]),e._v(" "),n("h2",{attrs:{id:"example-transferring-tokens"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-transferring-tokens"}},[e._v("#")]),e._v(" Example: Transferring tokens")]),e._v(" "),n("p",[e._v("Token transfer transactions transfer tokens from the signer's account to the\ngiven destination account. Let's generate a transfer transaction of 1000 tokens\nto account "),n("code",[e._v("5ea5328f943ef6f66daaed74cb0e99c3b1c45f76307b425003dbc7cb3638ed35")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("oasis-node stake account gen_transfer \\\n  --genesis.file $GENESIS_FILE_PATH \\\n  --entity $ENTITY_DIR_PATH \\\n  --stake.transaction.amount 1000 \\\n  --stake.transaction.file t.json \\\n  --stake.transaction.nonce 1 \\\n  --stake.transfer.destination 5ea5328f943ef6f66daaed74cb0e99c3b1c45f76307b425003dbc7cb3638ed35 \\\n  --stake.transaction.fee.gas 1000 \\\n  --stake.transaction.fee.amount 1\n")])])]),n("p",[e._v("We used similar parameters to the ones used for generating the burn transaction:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("--stake.transaction.amount")]),e._v(" is the number of tokens to transfer,")]),e._v(" "),n("li",[n("code",[e._v("--stake.transaction.file")]),e._v(" is the output filename,")]),e._v(" "),n("li",[n("code",[e._v("--stake.transaction.nonce")]),e._v(" is the incremental nonce. In our case, this is the\nsecond transaction on the account, thus "),n("code",[e._v("nonce")]),e._v(" equals "),n("code",[e._v("1")]),e._v(",")]),e._v(" "),n("li",[n("code",[e._v("--stake.transfer.destination")]),e._v(" is a hex-encoded address of the receiving\naccount of tokens.")])]),e._v(" "),n("p",[e._v("Let's submit the transaction stored in "),n("code",[e._v("t.json")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("oasis-node stake account submit \\\n  -a $ADDR \\\n  --stake.account.id 4ea5328f943ef6f66daaed74cb0e99c3b1c45f76307b425003dbc7cb3638ed35 \\\n  --stake.transaction.file t.json\n")])])]),n("p",[e._v("Finally let's list all the accounts and their balances by adding "),n("code",[e._v("-v")]),e._v(" flag for\nincreased verbosity:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('$ oasis-node stake list -a $ADDR -v\n{"id":"TqUyj5Q+9vZtqu10yw6Zw7HEX3Ywe0JQA9vHyzY47TU=","general_balance":"99999997000","escrow_balance":"100000000000","nonce":2}\n{"id":"XqUyj5Q+9vZtqu10yw6Zw7HEX3Ywe0JQA9vHyzY47TU=","general_balance":"1000","escrow_balance":"0","nonce":0}\n')])])]),n("p",[e._v("Notice another 1000 tokens have been deducted from the first account and\ntransferred to the second one.")]),e._v(" "),n("h2",{attrs:{id:"example-escrowing-tokens-and-reclaiming-them"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-escrowing-tokens-and-reclaiming-them"}},[e._v("#")]),e._v(" Example: Escrowing tokens and reclaiming them")]),e._v(" "),n("p",[e._v("In the third example we will put 3000 tokens to an escrow account\n"),n("code",[e._v("6ea5328f943ef6f66daaed74cb0e99c3b1c45f76307b425003dbc7cb3638ed35")]),e._v(" and then\nreclaim them. First, let's generate an escrow transaction and store it to "),n("code",[e._v("e.json")]),e._v(":")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("oasis-node stake account gen_escrow \\\n  --genesis.file $GENESIS_FILE_PATH \\\n  --entity $ENTITY_DIR_PATH \\\n  --stake.transaction.amount 3000 \\\n  --stake.transaction.file e.json \\\n  --stake.transaction.nonce 2 \\\n  --stake.escrow.account 6ea5328f943ef6f66daaed74cb0e99c3b1c45f76307b425003dbc7cb3638ed35 \\\n  --stake.transaction.fee.gas 1000 \\\n  --stake.transaction.fee.amount 1\n")])])]),n("p",[e._v("Let's submit the escrow transaction and list the accounts:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('$ oasis-node stake account submit \\\n    -a $ADDR \\\n    --stake.account.id 4ea5328f943ef6f66daaed74cb0e99c3b1c45f76307b425003dbc7cb3638ed35 \\\n    --stake.transaction.file e.json\n$ oasis-node stake list -a $ADDR -v\n{"id":"TqUyj5Q+9vZtqu10yw6Zw7HEX3Ywe0JQA9vHyzY47TU=","general_balance":"99999994000","escrow_balance":"100000000000","nonce":3}\n{"id":"XqUyj5Q+9vZtqu10yw6Zw7HEX3Ywe0JQA9vHyzY47TU=","general_balance":"1000","escrow_balance":"0","nonce":0}\n{"id":"bqUyj5Q+9vZtqu10yw6Zw7HEX3Ywe0JQA9vHyzY47TU=","general_balance":"0","escrow_balance":"3000","nonce":0}\n')])])]),n("p",[e._v("Notice 3000 tokens have been deducted from the first account's "),n("code",[e._v("general_balance")]),e._v("\nand added to an "),n("code",[e._v("escrow_balance")]),e._v(" of the third account.")]),e._v(" "),n("p",[e._v("We reclaim 3000 escrowed tokens by generating the reclaim escrow transaction:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("oasis-node stake account gen_reclaim_escrow \\\n  --genesis.file $GENESIS_FILE_PATH \\\n  --entity $ENTITY_DIR_PATH \\\n  --stake.transaction.amount 3000 \\\n  --stake.transaction.file r.json \\\n  --stake.transaction.nonce 3 \\\n  --stake.escrow.account 6ea5328f943ef6f66daaed74cb0e99c3b1c45f76307b425003dbc7cb3638ed35 \\\n  --stake.transaction.fee.gas 1000 \\\n  --stake.transaction.fee.amount 1\n")])])]),n("p",[e._v("Let's submit it and in a few moments list the accounts:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('$ oasis-node stake account submit \\\n    -a $ADDR \\\n    --stake.account.id 4ea5328f943ef6f66daaed74cb0e99c3b1c45f76307b425003dbc7cb3638ed35 \\\n    --stake.transaction.file r.json\n$ oasis-node stake list -a $ADDR -v\n{"id":"TqUyj5Q+9vZtqu10yw6Zw7HEX3Ywe0JQA9vHyzY47TU=","general_balance":"99999997000","escrow_balance":"100000000000","nonce":4}\n{"id":"XqUyj5Q+9vZtqu10yw6Zw7HEX3Ywe0JQA9vHyzY47TU=","general_balance":"1000","escrow_balance":"0","nonce":0}\n{"id":"bqUyj5Q+9vZtqu10yw6Zw7HEX3Ywe0JQA9vHyzY47TU=","general_balance":"0","escrow_balance":"0","nonce":0}\n')])])]),n("p",[e._v("Notice 3000 tokens have been reclaimed by the first account from the third\naccount's "),n("code",[e._v("escrow_balance")]),e._v(". The "),n("code",[e._v("general_balance")]),e._v(" of the first account was\ncorrectly updated and the "),n("code",[e._v("escrow_balance")]),e._v(" of the third account is now empty.")])])}),[],!1,null,null,null);a.default=s.exports}}]);