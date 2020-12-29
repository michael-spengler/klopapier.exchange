export interface Web3ServiceInterface {

    getBalanceInEther(walletAddress: string): Promise<any> // check
    buyWipepaper(amount: number): Promise<any> // check
    sellWipepaper(amount: number): Promise<any> //
}