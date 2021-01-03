import Web3 from "web3";

export const useWeb3 = (url = "http://127.0.0.1:7545") => {
  const web3 = new Web3(url)

  return {
    getAccounts: async () => await web3.eth.getAccounts()
  }
}