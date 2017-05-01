global.Class = {
	register: clazz => {
		global[clazz.prototype.constructor.name] = clazz;
	}
}

require("./database/Database.js");
require("../../generic/utils/database/ObjectDB.js");
require("../../generic/utils/array/IndexedArray.js");
require("../../generic/utils/buffer/SerialBuffer.js");
require("../../generic/utils/buffer/BufferUtils.js");
require("../../generic/utils/crypto/Crypto.js");
require("../../generic/utils/number/NumberUtils.js");
require("../../generic/utils/object/ObjectUtils.js");
require("../../generic/utils/string/StringUtils.js");
require("../../generic/utils/Observable.js");
require("../../generic/utils/Synchronizer.js");
require("../../generic/utils/Timers.js");
require("../../generic/consensus/primitive/Primitive.js");
require("../../generic/consensus/primitive/Hash.js");
require("../../generic/consensus/primitive/PrivateKey.js");
require("../../generic/consensus/primitive/PublicKey.js");
require("../../generic/consensus/primitive/Signature.js");
require("../../generic/consensus/account/Accounts.js");
require("../../generic/consensus/account/AccountsTree.js");
require("../../generic/consensus/account/AccountsTreeStore.js");
require("../../generic/consensus/account/Address.js");
require("../../generic/consensus/account/Balance.js");
require("../../generic/consensus/block/BlockBody.js");
require("../../generic/consensus/block/BlockHeader.js");
require("../../generic/consensus/block/Block.js");
require("../../generic/consensus/blockchain/Blockchain.js");
require("../../generic/consensus/blockchain/BlockchainStore.js");
require("../../generic/consensus/transaction/Transaction.js");
require("../../generic/consensus/mempool/Mempool.js");
require("../../generic/consensus/Consensus.js");
require("../../generic/p2p/message/P2PMessage.js");
require("../../generic/p2p/message/BlockP2PMessage.js");
require("../../generic/p2p/message/GetBlocksP2PMessage.js");
require("../../generic/p2p/message/InventoryP2PMessage.js");
require("../../generic/p2p/message/VersionP2PMessage.js");
require("../../generic/p2p/message/VerAckP2PMessage.js");
require("../../generic/p2p/message/TxP2PMessage.js");
require("../../generic/p2p/message/MempoolP2PMessage.js");
require("../../generic/p2p/message/RejectP2PMessage.js");
require("../../generic/p2p/message/P2PMessageFactory.js");
require("../../generic/p2p/struct/InvVector.js");
require("../../generic/p2p/P2PAgent.js");
require("../../generic/p2p/P2PChannel.js");
require("../../generic/p2p/P2PNetwork.js");
require("../../generic/miner/Miner.js");
require("../../generic/miner/Policy.js");
require("../../generic/wallet/Wallet.js");
require("../../generic/Core.js");