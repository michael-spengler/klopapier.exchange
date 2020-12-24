import { ABIProvider } from './smart-contracts/abi-provider';
import { Web3ServiceInterface } from './web3-service-interface'

const Web3 = require('web3');


export class Web3Service implements Web3ServiceInterface {
    private web3;

    constructor(infuraProjectId) {
        this.web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${infuraProjectId}`));
    }

    async getBalanceInEther(walletId: string) {
        // https://web3js.readthedocs.io/en/v1.2.1/web3-eth.html#getbalance
        return { "balanceInEther": this.web3.utils.fromWei(await this.web3.eth.getBalance(walletId), 'ether')}
    }

    async getGasPriceInEther() {
        // https://web3js.readthedocs.io/en/v1.2.1/web3-eth.html#getgasprice
        return { "gasPriceInEther": this.web3.utils.fromWei(await this.web3.eth.getGasPrice(), 'ether')}
    }

    async getERC20Balance(walletAddress: string) {
        const erc20Contract = new this.web3.eth.Contract(ABIProvider.getAbiMiaERC20Token(), '0xE5127cF21fb96A6241067Aa43E242a8D056bD729')
        
        // const myBalance = erc20Contract.balanceOf('0x4396A292512AA418087645B56a3a76333Bd10e28')
        const balanceInWei =  await erc20Contract.methods.balanceOf(walletAddress).call()
        return { "myBalance": this.web3.utils.fromWei(balanceInWei, 'ether')}
    }

    async buyWipepaper(amount: number): Promise<any> {
        // tbd Michael
    }

    async sellWipepaper(amount: number): Promise<any> {
        // tbd Michael
    }

   
}

