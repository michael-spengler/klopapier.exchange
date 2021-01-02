import { Web3ServiceInterface } from "./web3-service-interface";

export class Web3Service implements Web3ServiceInterface {

    constructor(infuraProjectId) {
        // not needed in double
    }

    async getBalanceInEther(walletId: string): Promise<any> {

        return Promise.resolve({ "balanceInEther": 4000})
    }

    async buyWipePaper(walletAddress: string, amount: number): Promise<any> {
        // tbd Troy oder Michael
    }

    async sellWipePaper(walletAddress: string, amount: number): Promise<any> {
        // tbd Troy oder Michael
    }
}

