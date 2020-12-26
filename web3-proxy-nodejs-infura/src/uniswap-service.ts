import { ChainId, Token, Fetcher } from '@uniswap/sdk'

console.log(`The chainId of mainnet is ${ChainId.MAINNET}.`)

export class UniSwapService {

    public async getTokenData(erc20SmartContractId: string): Promise<Token> {

        const chainId = ChainId.MAINNET

        const token: Token = await Fetcher.fetchTokenData(chainId, erc20SmartContractId)
        
        return token
    }
}


