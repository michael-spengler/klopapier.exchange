import { ChainId, Token, Fetcher, Pair, WETH, TokenAmount } from '@uniswap/sdk'

console.log(`The chainId of mainnet is ${ChainId.MAINNET}.`)

export class UniSwapService {

    public async getToken(erc20SmartContractId: string): Promise<Token> {

        const chainId = ChainId.MAINNET

        const token: Token = await Fetcher.fetchTokenData(chainId, erc20SmartContractId)
        
        return token
    }

    public async getPairViaUniswap(erc20SmartContractId: string): Promise<Pair> {

        const token: Token = await this.getToken(erc20SmartContractId)

        const pairAddress = Pair.getAddress(token, WETH[ChainId.MAINNET])

        
        const reserves = [/* use pairAddress to fetch reserves here */]
        const [reserve0, reserve1] = reserves
        
        const tokens = [token, WETH[token.chainId]]
        const [token0, token1] = tokens[0].sortsBefore(tokens[1]) ? tokens : [tokens[1], tokens[0]]
        
        try {
            const pair = new Pair(new TokenAmount(token0, reserve0), new TokenAmount(token1, reserve1))
            
            return pair
        } catch(error) {
            console.log(error.message)
        }
    }
}


