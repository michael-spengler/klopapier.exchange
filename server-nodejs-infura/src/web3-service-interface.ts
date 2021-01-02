export interface Web3ServiceInterface {

    getBalanceInEther(walletAddress: string): Promise<any> // check
    buyWipePaper(walletAddress: string, amount: number): Promise<any> // maybe we need to replace this by client side web3 because we do not have the private key
    sellWipePaper(walletAddress: string, amount: number): Promise<any> // maybe we need to replace this by client side web3 because we do not have the private key
}