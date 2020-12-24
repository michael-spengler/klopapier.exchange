export interface Web3ServiceInterface {

    getBalanceInEther(walletAddress: string): Promise<any>
}