<template>
  <div class="wrapper">
    <div class="hero">
      <div class="text-6xl">Deposit Ether</div>

      <p><br /></p>
      You can deposit Ether to a smart contract as a collateral in order to borrow e.g.
      USD Stable Coins.
      <p></p>
      With this you can keep your crypto assets and get liquidity at the same time.

      <p><br /></p>
      <div class="row items-center mt-4">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 mx-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <!-- <span class="material-icons mr-2"> history_edu </span> -->
          <a href="https://app.aave.com" target="_blank"> Use Aave </a>
        </button>

        <button
          type="button"
          class="inline-flex items-center px-4 py-2 mx-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

      <p><br /></p>
    </div>

    <div id="particles-js"></div>
    <div id="read" class="mt-12 grid grid-cols-3 gap-12"></div>

    <div class="mt-12 grid grid-cols-3 gap-12">
      <div class="shadow p-4 rounded">
        <div class="font-bold">Why?</div>
        If you want to keep your crypto assets instead of selling them, you might check
        out Smart Contract based Decentralized Finance (DeFi) offerings like aave or
        compound.
      </div>

      <div class="shadow p-4 rounded">
        <div class="font-bold">How?</div>
        <div>It is probably a good idea to inform yourself properly and start small.</div>
      </div>

      <div class="shadow p-4 rounded">
        <div class="font-bold">What?</div>
        <div>You might check videos about aave and compound on youtube.</div>
      </div>
    </div>

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
