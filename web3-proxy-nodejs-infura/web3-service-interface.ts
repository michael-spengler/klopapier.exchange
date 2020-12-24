export interface Web3ServiceInterface {

    getBalanceInEther(walletAddress: string): Promise<any>
    buyWipepaper(amount: number): Promise<any>
    sellWipepaper(amount: number): Promise<any>
}