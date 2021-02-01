<template>
  <div class="wrapper">
    <div class="hero">
      <div class="text-2xl md:text-5xl lg:text-6xl">Deposit Ether</div>
      <div class="mt-6 text-sm md:text-base">
        <div>
          You can deposit Ether to a smart contract as a collateral in order to borrow
          e.g. USD Stable Coins.
        </div>
        <div>
          With this you can keep your crypto assets and get liquidity at the same time.
        </div>
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

      <div class="mt-6 text-sm md:text-base">
        <div class="mb-2">Join us here!</div>
        <button
          class="ml-auto mr-1 bg-transparent flex-shrink-0 p-1 rounded-full text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          @click="openGithub"
        >
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
        </button>
        <button
          class="ml-1 mr-auto bg-transparent flex-shrink-0 p-1 rounded-full text-gray-800 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          @click="openTelegram"
        >
          <svg style="width: 24px; height: 24px" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75 2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78 16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div id="particles-js" style="height: 500px"></div>

    <div class="mx-4 text-sm md:text-base">
      <div class="mt-12 md:grid grid-cols-3 gap-12">
        <div class="mt-4 shadow p-4 rounded">
          <div class="font-bold text-base">Why?</div>
          If you want to keep your crypto assets instead of selling them, you might check
          out Smart Contract based
          <a
            href="https://www.npmjs.com/package/decentralized-finance-defi"
            target="_blank"
            class="text-blue-600"
            rel="noopener noreferrer"
            >Decentralized Finance (DeFi)
          </a>
          offerings like aave or compound.
        </div>

        <div class="mt-4 shadow p-4 rounded">
          <div class="font-bold text-base">How?</div>
          <div>
            It is probably a good idea to inform yourself properly and start small.
          </div>
        </div>

        <div class="mt-4 shadow p-4 rounded">
          <div class="font-bold text-base">What?</div>
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

    const openGithub = () => {
      window.open("https://github.com/michael-spengler/klopapier.exchange", "_blank");
    };

    const openTelegram = () => {
      window.open("https://t.me/wallstreetbetsdevelopers", "_blank");
    };

    return {
      openGithub,
      openTelegram,
    };
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
