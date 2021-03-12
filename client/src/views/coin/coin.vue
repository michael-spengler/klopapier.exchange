<template>
  <div class="wrapper">
    <div class="hero">
      <div class="text-2xl md:text-5xl lg:text-6xl">Earn Coins</div>
      <div class="mt-6 text-sm md:text-base"></div>
      <!-- <p><br /></p>
      As this is mainly an education project we give them away for free at the moment. You
      only need to pay the transaction fee for the Ethereum Blockchain. -->

      <div class="mt-4 text-sm md:text-base">
        <br />
        In order to receive 1 of our
        <a
          href="https://etherscan.io/token/0xe79ff9299351356e0ff64fd11ca594162cbd189a"
          target="_blank"
          class="text-blue-600"
          rel="noopener noreferrer"
        >
          USDWipePaper (UWP)
        </a>
        or 1 of our
        <a
          href="https://etherscan.io/token/0xcfe63389382412c31d4dfcf60a70fa5a9b90b63f"
          target="_blank"
          class="text-blue-600"
          rel="noopener noreferrer"
        >
          EURWipePaper (EWP)
        </a>
        you need to create a 5 - 20 seconds video of you shouting either <br />
        <b> "Toiletpaper" or "Klopapier" </b> <br />
        out of a window to
        <a
          href="https://t.me/decentralizedfinancegroup"
          target="_blank"
          class="text-blue-600"
          rel="noopener noreferrer"
        >
          this telegram channel.
        </a>
        <p><br /></p>
        Please make sure to send also your public Ethereum Wallet Address when sending the
        video to the channel.

        <p><br /></p>

        With this video based initial distribution mechanism we would like to foster a reasonable initial distribution of our coins.
        <p><br /></p>
        As soon as all of our coins are distributed, we might create a liquidity pool on
        uniswap. From then on we might be able to trade our coins via uniswap.
        <p><br /></p>
        It seems important that the sending addresses always have enough ETH to pay the gas
        fees. If anyone has ideas on how to ensure this, share it in our telegram channel.
        <!-- <button
          @click="onTestYourSelfClicked()"
          type="button"
          class="inline-flex items-center px-4 py-2 mx-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span class="material-icons mr-2"> shopping_basket </span>
          Use Compound
        </button> -->
      </div>
    </div>

  <p><br></p>
  <p><br></p>
    <div id="particles-js" style="height: 500px"></div>

    <div class="mx-4 text-sm md:text-base">
      <div id="readMore" class="mt-32 md:grid grid-cols-3 gap-12">
        <div class="mt-4 shadow p-4 rounded">
          <div class="font-bold text-base">Value Proposition</div>
          You can use the example of our
          <a
            href="https://etherscan.io/token/0xe79ff9299351356e0ff64fd11ca594162cbd189a"
            target="_blank"
            class="text-blue-600"
            rel="noopener noreferrer"
            >USDWipePaper (UWP)</a
          >
          to explore the ERC20 Token Standard in the context of the Ethereum Blockchain.
          <br />
        </div>

        <div class="mt-4 shadow p-4 rounded">
          <div class="font-bold text-base">The Code</div>
          <div>
            You might want to check
            <a
              href="https://github.com/michael-spengler/klopapier.exchange/blob/main/server-nodejs-infura/src/smart-contracts/wsbc.sol"
              target="_blank"
              class="text-blue-600"
              rel="noopener noreferrer"
            >
              this code </a
            >which we have developed and deployed via the
            <a
              href="https://remix.ethereum.org/"
              target="_blank"
              class="text-blue-600"
              rel="noopener noreferrer"
            >
              Remix IDE</a
            >
            as a Smart Contract on the Ethereum Blockchain.
          </div>
        </div>

        <div class="mt-4 shadow p-4 rounded">
          <div class="font-bold text-base">Outlook</div>
          <div>
            We want to inspire people to explore many cool things which we can do by using
            the Distributed Ledger Technology (DLT). In this respect we might provide more
            features soon.
          </div>
        </div>
      </div>

      <div class="mt-12 grid md:grid-cols-3 gap-12">
        <!-- <div class="shadow p-4 rounded">
          <div class="font-bold">Oracles</div>
          Oracles solve the challenge that smart contracts themselves only have access to
          data which is on the blockchain. For example they (smart contracts) do not know
          how the weather is until anyone brings this information to their blockchain.
          Oracles can be used to do exactly this. One key challenge here was to make sure
          correct information is brought to the blockchain. A famous promising system for
          this is Chainlink.
        </div>

        <div class="shadow p-4 rounded">
          <div class="font-bold">Solidity</div>
          <div>
            Solidity is a famous programming language to define smart contracts. A potential
            alternative is the Vyper Smart Contract Language.
          </div>
        </div>

        <div class="shadow p-4 rounded">
          <div class="font-bold">Remix</div>
          <div>
            https://remix.ethereum.org is a web IDE which you can use to develop, compile
            and deploy smart contracts.
          </div>
        </div> -->
      </div>
      <div class="mt-32">
        <!-- <video class="block mx-auto" width="250" height="250" controls>
          <source src=”./../assets/geiler-vogel.mp4” type=video/ogg> <source
          src="./../assets/geiler-vogel.mp4" type=video/mp4>
        </video> -->
      </div>
    </div>
  </div>
</template>

<script src="./coin.js">

</script>

<style scoped>
  @import './coin.css';
</style>
