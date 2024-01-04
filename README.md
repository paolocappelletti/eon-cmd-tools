# EON Command line tools

Command line tools to interact in a smart way with an Horizen EON Node

[Changelog](/CHANGELOG.md)

### Setup instruction

**Prerequisite:** install node.js (tested with version >=16)

```
npm install -g eon-cmd-tools
```

After the installation just type 'eon' on a terminal to display an help of the available commands.
You will get this help:

```
usage: eon <command> <subcommand>

Available commands and subcommands:
  url                            => display current baseurl to the EON NODE (default: https://eon-rpc.horizenlabs.io)
  url set <url>                  => set new baseurl (format is like:  http://<hostname>:<port>)
                                    (the setting will be persisted in the user profile)
                                    Following shortcuts can be used:
                                      url set local -> shortcut to: url set http://127.0.0.1:9085
                                      url set testnet -> shortcut to: url set https://gobi-rpc.horizenlabs.io
                                      url set mainnet -> shortcut to: url set https://eon-rpc.horizenlabs.io
Following commands require the endpoint /ethv1 reachable:
  eth_block best|tip             => shows the most recent block by using standard eth rpc calls
  eth_blockNumber                => shows the most recent block number
  transaction find <str>         => Find a transaction by hash
  eth_gasPrice                   => Perform an eth_gasPrice call and display the price in decimal format
  eth_chainId                    => Perform an eth_chainId call and display result in decimal format
Following commands require other EON http endpoints reachable:
  block best|tip                 => shows the most recent block by using the eon /block/best endpoint
  block find <str>               => Find a block by heigth or hash
                                    (if <str> is an integer, will search by height, otherwise by hash)
  block forgingInfo              => display forging info and epoch number
  node info                      => display node information
  wallet keys|allPublicKeys      => list all public keys of the node
  wallet balance                 => list balance on the node wallet
```

