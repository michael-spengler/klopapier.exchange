<template>
  <div class="wrapper">
    <div class="hero">
      <div class="text-2xl md:text-5xl lg:text-6xl">Borrow WipePaper</div>

      <div class="mt-4 text-sm md:text-base">
        As soon as you deposited Ether to a smart contract via aave or compound as a
        collateral, you can borrow e.g. USD Stable Coins like DAI.
        <p></p>
        With this you can keep your crypto assets and get liquidity at the same time.
      </div>

      <div class="mt-8 sm:flex justify-center">
        <button
          type="button"
          class="mt-2 inline-flex items-center px-4 py-2 mx-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <!-- <span class="material-icons mr-2"> history_edu </span> -->
          <a href="https://app.aave.com" target="_blank"> Use Aave </a>
        </button>

        <button
          type="button"
          class="mt-2 inline-flex items-center px-4 py-2 mx-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <!-- <span class="material-icons mr-2"> history_edu </span> -->
          <a href="https://app.compound.finance" target="_blank"> Use Compound </a>
        </button>
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

    <div id="particles-js" style="height: 500px"></div>

    <div class="mx-4 text-sm md:text-base">
      

      <div class="mt-12 grid grid-cols-3 gap-12">
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

<script src="./borrowWipePaper.js">

</script>

<style scoped>
  @import './borrowWipePaper.css';
</style>
