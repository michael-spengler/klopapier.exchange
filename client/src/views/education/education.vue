<template>
  <div class="wrapper">
    <div class="hero">
      <div class="text-2xl md:text-5xl lg:text-6xl">Education</div>

      <div class="mt-4 text-sm md:text-base">
        <b>
          Explore the most frequently used terms used by Decentralized Finance
          (DeFi) experts.
        </b>
      </div>
    </div>

    <div id="particles-js" style="height: 500px"></div>

    <div class="mx-4 text-sm md:text-base">
      <div id="read" class="mt-12 md:grid grid-cols-3 gap-12">
        <div class="mt-4 ">
          <div class="card-buffer">
            <p class="title">Distributed Ledger</p>
          </div>
        </div>

        <div class="mt-4 ">
          <div class="card-buffer">
            <p class="title">Blockchain</p>
          </div>
        </div>

        <div class="mt-4 ">
          <div class="card-buffer">
            <p class="title">Smart Contracts</p>
          </div>
        </div>
      </div>

      <div class="mt-12 md:grid grid-cols-3 gap-12">
           <div class="mt-4 ">
          <div class="card-buffer">
            <p class="title">Consensus Algorithms</p>
          </div>
        </div>
  
       <div class="mt-4 ">
          <div class="card-buffer">
            <p class="title">ERC721 Tokens</p>
          </div>
        </div>
        <div class="mt-4 ">
          <div class="card-buffer">
            <p class="title">ERC2020 Tokens</p>
          </div>
        </div>
    
      </div>

      <div class="mt-12 md:grid grid-cols-3 gap-12">
        <div class="mt-4 ">
          <div class="card-buffer">
            <p class="title">Fiat currency</p>
          </div>
        </div>

        <div class="mt-4 ">
          <div class="card-buffer">
            <p class="title">Fiat-On-Off Ramps</p>
          </div>
        </div>

          <div class="mt-4 ">
          <div class="card-buffer">
            <p class="title">Your Proposal</p>
          </div>
        </div>
      </div>

      <div class="mt-12 md:grid grid-cols-3 gap-12">
            <div class="mt-4 ">
          <div class="card-buffer">
            <p class="title">
              Crypto Wallets
            </p>
          </div>
        </div>

           <div class="mt-4 ">
          <div class="card-buffer">
            <p class="title">ICO</p>
          </div>
        </div>

            <div class="mt-4 ">
          <div class="card-buffer">
            <p class="title">Decentralized finance</p>
          </div>
        </div>
      </div>

      <div class="mt-12 md:grid grid-cols-3 gap-12">
            <div class="mt-4 ">
          <div class="card-buffer">
            <p class="title">Oracles</p>
          </div>
        </div>

           <div class="mt-4 ">
          <div class="card-buffer">
            <p class="title">Solidity</p>
          </div>
        </div>

            <div class="mt-4 ">
          <div class="card-buffer">
            <p class="title">Remix</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-32">
      <video class="block mx-auto" width="250" height="250" controls>
        <source src=”./../assets/geiler-vogel.mp4” type=video/ogg> <source
        src="./../../assets/geiler-vogel.mp4" type=video/mp4>
      </video>
    </div>

    <div class="mt-8 sm:flex justify-center">
      <button
        @click="onTestYourSelfClicked()"
        type="button"
        class="mt-2 inline-flex items-center px-4 py-2 mx-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <!-- <span class="material-icons mr-2"> history_edu </span> -->
        Test Your Knowledge
      </button>
    </div>
  </div>
</template>

<script src="./education.js"></script>

<style scoped>
@import "./education.css";
</style>
