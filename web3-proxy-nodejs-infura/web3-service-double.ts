import { Web3ServiceInterface } from "./web3-service-interface";

export class Web3Service  implements Web3ServiceInterface {

    async getBalanceInEther(walletId: string): Promise<any> {

        return Promise.resolve({ "balanceInEther": 4000})
    }
}

