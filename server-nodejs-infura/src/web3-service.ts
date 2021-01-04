require('dotenv').config()

import { ABIProvider } from './smart-contracts/abi-provider';
import { Web3ServiceInterface } from './web3-service-interface'

const Web3 = require('web3');


export class Web3Service implements Web3ServiceInterface {
    private web3;

    constructor(infuraProjectId) {
        this.web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`));
    }

    async getBalanceInEther(walletId: string) {
        // const result = await this.web3.eth.getBalance(walletId)
        // console.log(result)
        // https://web3js.readthedocs.io/en/v1.2.1/web3-eth.html#getbalance
        // return { "balanceInEther": this.web3.utils.fromWei(await this.web3.eth.getBalance(walletId), 'ether')}
        return { "balanceInEther": 100 }
    }

    async getGasPriceInEther() {
        // https://web3js.readthedocs.io/en/v1.2.1/web3-eth.html#getgasprice
        return { "gasPriceInEther": this.web3.utils.fromWei(await this.web3.eth.getGasPrice(), 'ether') }
    }

    async getERC20Balance(walletAddress: string, erc20SmartContractAddress: string) {
        const erc20Contract = new this.web3.eth.Contract(ABIProvider.getAbiMiaERC20Token(), erc20SmartContractAddress)

        // const myBalance = erc20Contract.balanceOf('0x4396A292512AA418087645B56a3a76333Bd10e28')
        const balanceInWei = await erc20Contract.methods.balanceOf(walletAddress).call()
        return { "myBalance": this.web3.utils.fromWei(balanceInWei, 'ether') }
    }

    async getERC20Price(erc20SmartContractAddress: string) {
        const erc20Contract = new this.web3.eth.Contract(ABIProvider.getAbiMiaERC20Token(), erc20SmartContractAddress)

        console.log(await erc20Contract.methods)
    }

    async buyWipePaper(walletAddress: string, amount: number): Promise<any> {
        // tbd Michael
    }

    async sellWipePaper(walletAddress: string, amount: number): Promise<any> {
        // tbd Michael
    }

    async getPrice(): Promise<any> {
        const EXCHANGE_ABI = [{ name: 'TokenPurchase', inputs: [{ type: 'address', name: 'buyer', indexed: !0 }, { type: 'uint256', name: 'eth_sold', indexed: !0 }, { type: 'uint256', name: 'tokens_bought', indexed: !0 }], anonymous: !1, type: 'event' }, { name: 'EthPurchase', inputs: [{ type: 'address', name: 'buyer', indexed: !0 }, { type: 'uint256', name: 'tokens_sold', indexed: !0 }, { type: 'uint256', name: 'eth_bought', indexed: !0 }], anonymous: !1, type: 'event' }, { name: 'AddLiquidity', inputs: [{ type: 'address', name: 'provider', indexed: !0 }, { type: 'uint256', name: 'eth_amount', indexed: !0 }, { type: 'uint256', name: 'token_amount', indexed: !0 }], anonymous: !1, type: 'event' }, { name: 'RemoveLiquidity', inputs: [{ type: 'address', name: 'provider', indexed: !0 }, { type: 'uint256', name: 'eth_amount', indexed: !0 }, { type: 'uint256', name: 'token_amount', indexed: !0 }], anonymous: !1, type: 'event' }, { name: 'Transfer', inputs: [{ type: 'address', name: '_from', indexed: !0 }, { type: 'address', name: '_to', indexed: !0 }, { type: 'uint256', name: '_value', indexed: !1 }], anonymous: !1, type: 'event' }, { name: 'Approval', inputs: [{ type: 'address', name: '_owner', indexed: !0 }, { type: 'address', name: '_spender', indexed: !0 }, { type: 'uint256', name: '_value', indexed: !1 }], anonymous: !1, type: 'event' }, { name: 'setup', outputs: [], inputs: [{ type: 'address', name: 'token_addr' }], constant: !1, payable: !1, type: 'function', gas: 175875 }, { name: 'addLiquidity', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'min_liquidity' }, { type: 'uint256', name: 'max_tokens' }, { type: 'uint256', name: 'deadline' }], constant: !1, payable: !0, type: 'function', gas: 82605 }, { name: 'removeLiquidity', outputs: [{ type: 'uint256', name: 'out' }, { type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'amount' }, { type: 'uint256', name: 'min_eth' }, { type: 'uint256', name: 'min_tokens' }, { type: 'uint256', name: 'deadline' }], constant: !1, payable: !1, type: 'function', gas: 116814 }, { name: '__default__', outputs: [], inputs: [], constant: !1, payable: !0, type: 'function' }, { name: 'ethToTokenSwapInput', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'min_tokens' }, { type: 'uint256', name: 'deadline' }], constant: !1, payable: !0, type: 'function', gas: 12757 }, { name: 'ethToTokenTransferInput', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'min_tokens' }, { type: 'uint256', name: 'deadline' }, { type: 'address', name: 'recipient' }], constant: !1, payable: !0, type: 'function', gas: 12965 }, { name: 'ethToTokenSwapOutput', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'tokens_bought' }, { type: 'uint256', name: 'deadline' }], constant: !1, payable: !0, type: 'function', gas: 50455 }, { name: 'ethToTokenTransferOutput', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'tokens_bought' }, { type: 'uint256', name: 'deadline' }, { type: 'address', name: 'recipient' }], constant: !1, payable: !0, type: 'function', gas: 50663 }, { name: 'tokenToEthSwapInput', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'tokens_sold' }, { type: 'uint256', name: 'min_eth' }, { type: 'uint256', name: 'deadline' }], constant: !1, payable: !1, type: 'function', gas: 47503 }, { name: 'tokenToEthTransferInput', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'tokens_sold' }, { type: 'uint256', name: 'min_eth' }, { type: 'uint256', name: 'deadline' }, { type: 'address', name: 'recipient' }], constant: !1, payable: !1, type: 'function', gas: 47712 }, { name: 'tokenToEthSwapOutput', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'eth_bought' }, { type: 'uint256', name: 'max_tokens' }, { type: 'uint256', name: 'deadline' }], constant: !1, payable: !1, type: 'function', gas: 50175 }, { name: 'tokenToEthTransferOutput', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'eth_bought' }, { type: 'uint256', name: 'max_tokens' }, { type: 'uint256', name: 'deadline' }, { type: 'address', name: 'recipient' }], constant: !1, payable: !1, type: 'function', gas: 50384 }, { name: 'tokenToTokenSwapInput', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'tokens_sold' }, { type: 'uint256', name: 'min_tokens_bought' }, { type: 'uint256', name: 'min_eth_bought' }, { type: 'uint256', name: 'deadline' }, { type: 'address', name: 'token_addr' }], constant: !1, payable: !1, type: 'function', gas: 51007 }, { name: 'tokenToTokenTransferInput', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'tokens_sold' }, { type: 'uint256', name: 'min_tokens_bought' }, { type: 'uint256', name: 'min_eth_bought' }, { type: 'uint256', name: 'deadline' }, { type: 'address', name: 'recipient' }, { type: 'address', name: 'token_addr' }], constant: !1, payable: !1, type: 'function', gas: 51098 }, { name: 'tokenToTokenSwapOutput', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'tokens_bought' }, { type: 'uint256', name: 'max_tokens_sold' }, { type: 'uint256', name: 'max_eth_sold' }, { type: 'uint256', name: 'deadline' }, { type: 'address', name: 'token_addr' }], constant: !1, payable: !1, type: 'function', gas: 54928 }, { name: 'tokenToTokenTransferOutput', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'tokens_bought' }, { type: 'uint256', name: 'max_tokens_sold' }, { type: 'uint256', name: 'max_eth_sold' }, { type: 'uint256', name: 'deadline' }, { type: 'address', name: 'recipient' }, { type: 'address', name: 'token_addr' }], constant: !1, payable: !1, type: 'function', gas: 55019 }, { name: 'tokenToExchangeSwapInput', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'tokens_sold' }, { type: 'uint256', name: 'min_tokens_bought' }, { type: 'uint256', name: 'min_eth_bought' }, { type: 'uint256', name: 'deadline' }, { type: 'address', name: 'exchange_addr' }], constant: !1, payable: !1, type: 'function', gas: 49342 }, { name: 'tokenToExchangeTransferInput', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'tokens_sold' }, { type: 'uint256', name: 'min_tokens_bought' }, { type: 'uint256', name: 'min_eth_bought' }, { type: 'uint256', name: 'deadline' }, { type: 'address', name: 'recipient' }, { type: 'address', name: 'exchange_addr' }], constant: !1, payable: !1, type: 'function', gas: 49532 }, { name: 'tokenToExchangeSwapOutput', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'tokens_bought' }, { type: 'uint256', name: 'max_tokens_sold' }, { type: 'uint256', name: 'max_eth_sold' }, { type: 'uint256', name: 'deadline' }, { type: 'address', name: 'exchange_addr' }], constant: !1, payable: !1, type: 'function', gas: 53233 }, { name: 'tokenToExchangeTransferOutput', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'tokens_bought' }, { type: 'uint256', name: 'max_tokens_sold' }, { type: 'uint256', name: 'max_eth_sold' }, { type: 'uint256', name: 'deadline' }, { type: 'address', name: 'recipient' }, { type: 'address', name: 'exchange_addr' }], constant: !1, payable: !1, type: 'function', gas: 53423 }, { name: 'getEthToTokenInputPrice', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'eth_sold' }], constant: !0, payable: !1, type: 'function', gas: 5542 }, { name: 'getEthToTokenOutputPrice', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'tokens_bought' }], constant: !0, payable: !1, type: 'function', gas: 6872 }, { name: 'getTokenToEthInputPrice', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'tokens_sold' }], constant: !0, payable: !1, type: 'function', gas: 5637 }, { name: 'getTokenToEthOutputPrice', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'uint256', name: 'eth_bought' }], constant: !0, payable: !1, type: 'function', gas: 6897 }, { name: 'tokenAddress', outputs: [{ type: 'address', name: 'out' }], inputs: [], constant: !0, payable: !1, type: 'function', gas: 1413 }, { name: 'factoryAddress', outputs: [{ type: 'address', name: 'out' }], inputs: [], constant: !0, payable: !1, type: 'function', gas: 1443 }, { name: 'balanceOf', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'address', name: '_owner' }], constant: !0, payable: !1, type: 'function', gas: 1645 }, { name: 'transfer', outputs: [{ type: 'bool', name: 'out' }], inputs: [{ type: 'address', name: '_to' }, { type: 'uint256', name: '_value' }], constant: !1, payable: !1, type: 'function', gas: 75034 }, { name: 'transferFrom', outputs: [{ type: 'bool', name: 'out' }], inputs: [{ type: 'address', name: '_from' }, { type: 'address', name: '_to' }, { type: 'uint256', name: '_value' }], constant: !1, payable: !1, type: 'function', gas: 110907 }, { name: 'approve', outputs: [{ type: 'bool', name: 'out' }], inputs: [{ type: 'address', name: '_spender' }, { type: 'uint256', name: '_value' }], constant: !1, payable: !1, type: 'function', gas: 38769 }, { name: 'allowance', outputs: [{ type: 'uint256', name: 'out' }], inputs: [{ type: 'address', name: '_owner' }, { type: 'address', name: '_spender' }], constant: !0, payable: !1, type: 'function', gas: 1925 }, { name: 'name', outputs: [{ type: 'bytes32', name: 'out' }], inputs: [], constant: !0, payable: !1, type: 'function', gas: 1623 }, { name: 'symbol', outputs: [{ type: 'bytes32', name: 'out' }], inputs: [], constant: !0, payable: !1, type: 'function', gas: 1653 }, { name: 'decimals', outputs: [{ type: 'uint256', name: 'out' }], inputs: [], constant: !0, payable: !1, type: 'function', gas: 1683 }, { name: 'totalSupply', outputs: [{ type: 'uint256', name: 'out' }], inputs: [], constant: !0, payable: !1, type: 'function', gas: 1713 }]
        const EXCHANGE_ADDRESS = '0x6b175474e89094c44da98b954eedeac495271d0f'
        const exchangeContract = new this.web3.eth.Contract(EXCHANGE_ABI, EXCHANGE_ADDRESS);
        // const daiAmount = await exchangeContract.methods.getEthToTokenInputPrice(this.web3.utils.toWei('1', 'Ether')).call()
        console.log(exchangeContract.methods)

        // console.log(daiAmount)

        // return {daiAmount}
        return {daiAmount: 130}
    }


}

