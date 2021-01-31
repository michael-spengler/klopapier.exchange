<template>
  <div class="wrapper">
    <div class="hero">
      <div class="text-2xl md:text-5xl lg:text-6xl">WallStreetBetsCoin</div>
      <div class="mt-6 text-sm md:text-base">
        <div>
          Here you can request
          <a
            href="https://etherscan.io/token/0x333ae28e97f9b6536cf02fc76d3108bfe9d775fc"
            target="_blank"
            class="text-blue-600"
            rel="noopener noreferrer"
            >ERC20 WallStreetBetsCoins</a
          >.
        </div>
        <button
          type="button"
          @click="onRequestCoins()"
          class="mt-2 inline-flex items-center px-4 py-2 mx-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Request Coins
        </button>
      </div>
      <!-- <p><br /></p>
      As this is mainly an education project we give them away for free at the moment. You
      only need to pay the transaction fee for the Ethereum Blockchain. -->

      <div class="mt-4 text-sm md:text-base">
        --> In order to receive 100 WallStreetBetsCoins you need to create a 30 seconds
        Video of you shouting "Wall Street Bets" out of a window to
        <a
          href="https://t.me/wallstreetbetsdevelopers"
          target="_blank"
          class="text-blue-600"
          rel="noopener noreferrer"
        >
          this telegram channel.
        </a>
        <p><br /></p>
        Please make sure to add your public Ethereum Wallet Address when sending the video
        to the channel - directly to the file upload. So that we can map which video
        belongs to which Ethereum wallet address.

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
      <div id="readMore" class="mt-12 md:grid grid-cols-3 gap-12">
        <div class="mt-4 shadow p-4 rounded">
          <div class="font-bold text-base">Why?</div>
          You can use the example of the
          <a
            href="https://etherscan.io/token/0x333ae28e97f9b6536cf02fc76d3108bfe9d775fc"
            target="_blank"
            class="text-blue-600"
            rel="noopener noreferrer"
            >WallStreetBetsCoin</a
          >
          to explore the ERC20 Token Standard in the context of the Ethereum Blockchain.
        </div>

        <div class="mt-4 shadow p-4 rounded">
          <div class="font-bold text-base">The Code</div>
          <div>
            You might want to check
            <a
              href="https://github.com/michael-spengler/klopapier.exchange/blob/main/server-nodejs-infura/src/smart-contracts/wsbc.sol"
              target="_blank"
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
            We might create a liquidity pool on
            <a
              href="https://uniswap.org/"
              target="_blank"
              class="text-blue-600"
              rel="noopener noreferrer"
            >
              Uniswap
            </a>
            for the
            <a
              href="https://etherscan.io/token/0x333ae28e97f9b6536cf02fc76d3108bfe9d775fc"
              target="_blank"
              class="text-blue-600"
              rel="noopener noreferrer"
              >WallStreetBetsCoin</a
            >
            soon.
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

<script>
import { defineComponent, onMounted } from "vue";
import "particles.js";

const color = "#295dab";

export default defineComponent({
  setup() {
    onMounted(() => {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 700,
            },
          },
          color: {
            value: color,
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000",
            },
            polygon: {
              nb_sides: 5,
            },
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: color,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    });
  },
  methods: {
    onReadFirst() {
      alert("This feature is under construction.");
    },
    onTestYourSelfClicked() {
      alert("This feature is under construction.");
    },
    onRequestCoins() {
      alert("This feature is under construction.");
    },
  },
});
</script>

<style scoped>
.wrapper {
  position: relative;
  display: inline-block;
}

.hero {
  position: absolute;
  text-align: center;
  width: 100%;
  margin-top: 150px;
}

#particle-js {
  position: relative;
  z-index: 1;
}
</style>
