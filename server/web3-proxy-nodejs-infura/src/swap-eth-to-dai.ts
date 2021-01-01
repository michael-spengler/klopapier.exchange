require("dotenv").config();

import {
  BigintIsh,
  Fetcher,
  Percent,
  Route,
  TokenAmount,
  Trade,
  TradeType,
  WETH,
} from "@uniswap/sdk";
import { ethers } from "ethers";
import { uniswapJSONInterface, daiJSONInterface } from "./constants";

console.log('los gehts')

const daiTokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F'

export const swapETHToDAI = (async (walletAddress?: string, ethAmountInWeiToBeSwapped?: BigintIsh): Promise<string> => {

  const signer = new ethers.Wallet(process.env.PRIVATE_KEY)
  const provider = ethers.getDefaultProvider('mainnet', { infura: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}` })
  const account = signer.connect(provider)

  console.log("instantiate dai smart contract")
  const daiSmartContract = new ethers.Contract('0x6B175474E89094C44Da98b954EedeAC495271d0F', daiJSONInterface, account)

  console.log("instantiate the uniswap contract")
  const uniswapSmartContract = new ethers.Contract('0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D', uniswapJSONInterface, account)

  console.log("get Ether Balance")
  const etherBalanceOnAccount = await provider.getBalance(process.env.ACCOUNT)
  console.log(ethers.utils.formatEther(etherBalanceOnAccount.toString()).toString())
  // const balanceOfDaiOnAccount = await daiSmartContract.balanceOf(process.env.ACCOUNT)

  if (ethAmountInWeiToBeSwapped === undefined) {
    ethAmountInWeiToBeSwapped = ethers.BigNumber.from(etherBalanceOnAccount).toString()
  }

  console.log("prepare the transaction")

  const path = [WETH[1].address, daiTokenAddress]

  const deadline = Math.floor(Date.now() / 1000) + 60 * 2

  console.log("get the amount of ether which shall be swapped")
  const amountOfEtherToBeSwapped = Number(etherBalanceOnAccount.toString()) / 2
  console.log(amountOfEtherToBeSwapped)

  console.log("get AmountOutMin")
  const dai = (await Fetcher.fetchTokenData(1, daiTokenAddress))
  const pair = await Fetcher.fetchPairData(dai, WETH[1])
  const route = new Route([pair], WETH[1])
  const trade = new Trade(route, new TokenAmount(WETH[1], amountOfEtherToBeSwapped.toString()), TradeType.EXACT_INPUT)
  const slippageTolerance = new Percent('50', '10000')
  const amountOutMin = ethers.utils.parseEther(ethers.utils.formatEther(trade.inputAmount.raw.toString()).toString())
  console.log(amountOutMin)

  // console.log(ethers.BigNumber.isBigNumber(amountOutMin))

  const bigNumberWithEtherToBeSwapped = ethers.BigNumber.from(trade.inputAmount.raw.toString())

  // const tx = await uniswapSmartContract.swapExactETHForTokens(
  //   amountOutMin,
  //   path,
  //   process.env.ACCOUNT,
  //   deadline,
  //   { value: bigNumberWithEtherToBeSwapped }
  // )


  // console.log(tx.hash)

  // return tx.hash

  return 'xkasldfjösdfiöijw'
})



