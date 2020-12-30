export interface Web3ServiceInterface {

    getBalanceInEther(walletAddress: string): Promise<any> // check
    buyWipePaper(amount: number): Promise<any> // check
    sellWipePaper(amount: number): Promise<any> //
}