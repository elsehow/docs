(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{230:function(e,s,a){"use strict";a.r(s);var t=a(0),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[e._v("#")]),e._v(" Troubleshooting")]),e._v(" "),a("h2",{attrs:{id:"oasis-node-binary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oasis-node-binary"}},[e._v("#")]),e._v(" "),a("code",[e._v("oasis-node")]),e._v(" Binary")]),e._v(" "),a("h3",{attrs:{id:"building-from-source-go-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-from-source-go-errors"}},[e._v("#")]),e._v(" Building from Source: Go Errors")]),e._v(" "),a("p",[e._v("First, make sure you have go version >=go1.13.0 and protocol buffers installed\n(use "),a("code",[e._v("brew install protobuf")]),e._v(" on Mac).")]),e._v(" "),a("p",[e._v("Error message example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('PWD: /home/oasis/oasis-core/go/grpc\nCMD: [protoc -I ./ --go_out=plugins=grpc,paths=source_relative:. common/common.proto]\nprotoc-gen-go: program not found or is not executable\n--go_out: protoc-gen-go: Plugin failed with status code 1.\nFAILED: exit status 1\nexit status 1\ngrpc/generate.go:3: running "go": exit status 1\n')])])]),a("p",[e._v("Resolve this error by ensuring you have "),a("code",[e._v("protoc-gen-go")]),e._v(" installed and adding "),a("code",[e._v("$GOPATH/bin")]),e._v("\nto your path.")]),e._v(" "),a("p",[e._v("Check installation:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("which protoc-gen-go\n")])])]),a("p",[e._v("Install:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("go get github.com/golang/protobuf/protoc-gen-go\n")])])]),a("p",[e._v("Add to your path variable:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export PATH=$PATH:$GOPATH/bin\n")])])]),a("p",[e._v("If you don't see a helpful error message while building, scroll up to see if any\nadditional information was provided.")]),e._v(" "),a("h3",{attrs:{id:"building-from-source-rust-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-from-source-rust-errors"}},[e._v("#")]),e._v(" Building from Source: Rust Errors")]),e._v(" "),a("p",[e._v("Error message example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("error[E0412]: cannot find type `ucontext_t` in this scope\n")])])]),a("p",[e._v("Error messages from "),a("code",[e._v("rustc")]),e._v(" can be ignored; all you need from "),a("code",[e._v("oasis-core")]),e._v(" are the\n"),a("code",[e._v("go")]),e._v(" components. In general, avoid trying to build the rust components.\nYou can use the following command to stick to go:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("make go\n")])])]),a("h3",{attrs:{id:"alternative-docker-binary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alternative-docker-binary"}},[e._v("#")]),e._v(" Alternative: Docker Binary")]),e._v(" "),a("p",[e._v("If you're having lots of trouble building from source, you can try pulling the docker image, then\ncopy the contained binary to your local machine (only works on Linux) with the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker cp oasis_node:/oasis/bin/oasis_node\n")])])]),a("h2",{attrs:{id:"running-a-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-a-node"}},[e._v("#")]),e._v(" Running a Node")]),e._v(" "),a("h3",{attrs:{id:"invalid-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#invalid-permissions"}},[e._v("#")]),e._v(" Invalid Permissions")]),e._v(" "),a("h4",{attrs:{id:"permissions-for-node-and-entity"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permissions-for-node-and-entity"}},[e._v("#")]),e._v(" Permissions for node and entity")]),e._v(" "),a("p",[e._v("Error Message:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("common/Mkdir: path '/serverdir/node' has invalid permissions: -rwxr-xr-x\n")])])]),a("p",[e._v("The "),a("code",[e._v("entity")]),e._v(" and "),a("code",[e._v("node")]),e._v(" directories both need to have permissions "),a("code",[e._v("rwx------")]),e._v(".\nMake sure you initialize the directory with correct permissions or change them using "),a("code",[e._v("chmod")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mkdir -m700 -p {entity,node}\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("chmod 700 /serverdir/node\nchmod 700 /serverdir/entity\n")])])]),a("h4",{attrs:{id:"permissions-for-pem-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#permissions-for-pem-files"}},[e._v("#")]),e._v(" Permissions for .pem files")]),e._v(" "),a("p",[e._v("Error Message example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("signature/signer/file: invalid PEM file permissions 700 on /serverdir/node/identity.pem\n")])])]),a("p",[e._v("All "),a("code",[e._v(".pem")]),e._v(" files should have the permissions "),a("code",[e._v("600")]),e._v(".\nYou can set the permissions for all "),a("code",[e._v(".pem")]),e._v(" files in a directory using the following command:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("chmod -R 600 /path/*.pem\n")])])]),a("h4",{attrs:{id:"serverdir-ownership"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverdir-ownership"}},[e._v("#")]),e._v(" Serverdir Ownership")]),e._v(" "),a("p",[e._v("Another possible cause of permission issues is not giving ownership of your "),a("code",[e._v("serverdir")]),e._v(" to\nthe user running the node (e.g. "),a("code",[e._v("docker-host")]),e._v(" or replace with your user):")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("chown -R docker-host:docker-host /serverdir\n")])])]),a("p",[e._v("In general, to avoid problems when running docker, specify the user when running "),a("code",[e._v("docker")]),e._v(" commands\nby adding the flag "),a("code",[e._v("--user $(id -u):$(id -g)")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"cannot-find-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cannot-find-file"}},[e._v("#")]),e._v(" Cannot Find File")]),e._v(" "),a("p",[e._v("Error Message examples:")]),e._v(" "),a("p",[a("code",[e._v("no such file or directory")])]),e._v(" "),a("p",[a("code",[e._v("file does not exist")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ts=2019-11-17T03:42:09.778647033Z level=error module=cmd/registry/node caller=node.go:127 msg="failed to load entity" err="file does not exist"\n')])])]),e._v(" "),a("p",[e._v("More often than you'd expect, this error is the result of setting the path incorrectly.\nYou may have left something like "),a("code",[e._v("--genesis.file $GENESIS_FILE_PATH")]),e._v(" in the command without\nsetting "),a("code",[e._v("$GENESIS_FILE_PATH")]),e._v(" first, or set the path incorrectly.\nCheck that "),a("code",[e._v("echo $GENESIS_FILE_PATH")]),e._v(" matches your expectation or provide a path in the command.")]),e._v(" "),a("p",[e._v("Another possible cause: the files in your localhost directory cannot be read from the container.\nMake sure to run commands in the same session within the container.")]),e._v(" "),a("h2",{attrs:{id:"staking-and-registering"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staking-and-registering"}},[e._v("#")]),e._v(" Staking and Registering")]),e._v(" "),a("h3",{attrs:{id:"transaction-out-of-gas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction-out-of-gas"}},[e._v("#")]),e._v(" Transaction Out of Gas")]),e._v(" "),a("p",[e._v("Error message:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('module=cmd/stake caller=stake.go:70 msg="failed to submit transaction" err="rpc error: code = Unknown desc = staking: add escrow transaction failed: out of gas" attempt=1\n')])])]),e._v(" "),a("p",[e._v("The docs are now updated to show that you need to add "),a("code",[e._v("--stake.transaction.fee.gas")]),e._v(" and\n"),a("code",[e._v("--stake.transaction.fee.amount")]),e._v(" flags when generating your transaction. Note that if you're\nre-generating a transaction, you will need to increment the "),a("code",[e._v("--nonce")]),e._v(" flag.")]),e._v(" "),a("h3",{attrs:{id:"ssh-tunnel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssh-tunnel"}},[e._v("#")]),e._v(" SSH Tunnel")]),e._v(" "),a("p",[e._v("Note that this portion may not be relevant in future versions.")]),e._v(" "),a("p",[e._v("Error message example:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("bind: Cannot assign requested address\n")])])]),a("p",[e._v("This error was encountered while trying to create ssh tunnel from localhost's docker container,\nand was fixed by making the "),a("code",[e._v("oasis-node")]),e._v(" binary from source instead of using the docker image.")])])}),[],!1,null,null,null);s.default=r.exports}}]);