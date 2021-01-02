<template>
  <div class="wrapper">
    <div class="hero">
      <div class="text-6xl">Education</div>

      <p><br /></p>
      Explore Crypto Currencies and Decentralized Finance (DeFi).

      <p><br /></p>
      <div class="row items-center mt-4">
        <button
          type="button"
          class="inline-flex items-center px-4 py-2 mx-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span class="material-icons mr-2"> history_edu </span>
          <a href="#read"> Read about it First </a>
        </button>

        <button
          @click="onTestYourSelfClicked()"
          type="button"
          class="inline-flex items-center px-4 py-2 mx-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span class="material-icons mr-2"> history_edu </span>
          Test Your Knowledge
        </button>
      </div>

      <p><br /></p>
    </div>

    <div id="particles-js"></div>
    <div id="read" class="mt-12 grid grid-cols-3 gap-12">
      <div class="shadow p-4 rounded">
        <div class="font-bold">Distributed Ledger Technology</div>
        One important aspect why Bitcoin, Ethereum and other systems are so reliable is
        that they use the Distributed Ledger Technology. A ledger can be seen as a list of
        transactions. If this ledger is stored on several different servers, one can call
        it distributed ledger.
      </div>

      <div class="shadow p-4 rounded">
        <div class="font-bold">Blockchain</div>
        <div>
          In Bitcoin transactions are stored in blocks. Those blocks are connected. You
          can perceive it as a chain of Blocks. This is why people call this technology
          Blockchain Technology.
        </div>
      </div>

      <div class="shadow p-4 rounded">
        <div class="font-bold">Smart Contracts</div>
        <div>
          Programs which can be stored and executed on a blockchain are frequently called
          smart contracts. You can perceive a smart contract as an agreement / contract
          between the parties who interact with this contract. Example: If you use a
          vending machine at a train station you typically implicitly have the agreement
          that if you throw in money, you get a product out of it. Such kinds of
          agreements / contracts which apply themselves automatically can be called smart
          contracts.
        </div>
      </div>
    </div>

    <div class="mt-12 grid grid-cols-3 gap-12">
      <div class="shadow p-4 rounded">
        <div class="font-bold">Consensus Algorithms</div>
        In a distributed ledger it is important that there is consensus about the content
        of the ledger. To reach this consensus people apply algorithms like Proof of Work
        (PoW) and Proof of Stake (PoS). PoW is pretty energy consuming / costly. Therefore
        famous Blockchains like ETH2.0 introduce PoS.
      </div>

      <div class="shadow p-4 rounded">
        <div class="font-bold">ERC20 Tokens</div>
        <div>
          This is a standard which allows you to deploy your own cryptocurrency on the
          Ethereum Blockchain in a very simple way. ERC721 Tokens = Coins can be
          considered as fungible tokens.
        </div>
      </div>

      <div class="shadow p-4 rounded">
        <div class="font-bold">ERC721 Tokens</div>
        <div>
          <div>
            This is a standard which is frequently used to represent collectibles (where
            uniqueness of each entity is the thing). ERC721 Tokens can be considered as
            non-fungible tokens.
          </div>
        </div>
      </div>

    </div>

    <div class="mt-12 grid grid-cols-3 gap-12">
      <div class="shadow p-4 rounded">
        <div class="font-bold">Fiat Currency</div>
        Currencies which are generated via central banks and sold by politicians /
        governments with no or very low intrinsic value are frequently called fiat
        currencies. Some might call fiat currencies a "creatio ex nihilo" (a creation out
        of nothing (but power)).
      </div>

      <div class="shadow p-4 rounded">
        <div class="font-bold">Fiat On-/Off Ramps</div>
        <div>
          Places where you can exchange fiat currencies - like Euro or US Dollar - to
          crypto currencies and back.
        </div>
      </div>


      <div class="shadow p-4 rounded">
        <div class="font-bold">Your Proposal</div>
        <div>
          Let me know if there is any word from the crypto scene which you would like to
          get a simple explanation for. Some asked me to add detailed info about the
          truffle framework, ganache and drizzle. I do not go into those development
          details on this page because it is mainly meant as a simple and quickly to
          understand starting point.
        </div>
      </div>




    </div>
    <div class="mt-12 grid grid-cols-3 gap-12">
      <div class="shadow p-4 rounded">
        <div class="font-bold">Crypto Wallets</div>
        You can use crypto wallets to store crypto assets like crypto currency entities,
        and to interact with smart contracts on a blockchain. There are several kinds of
        wallets. E.g. Browserwallets which are integrated directly in the Browser
        (brave.com).
      </div>

      <div class="shadow p-4 rounded">
        <div class="font-bold">ICO</div>
        <div>
          Initial Coin Offerings can be compared to Initial Public Offerings where
          companies or projects sell parts of their company to investors.
        </div>
      </div>

      <div class="shadow p-4 rounded">
        <div class="font-bold">Decentralized Finance (DeFi)</div>
        <div>
          Decentralized Finance consists of Decentralized Autonomous Payments (DAP),
          Decentral Autonomous Deposits (DAD), Decentral Autonomous Loans (DAL), Decentral
          Autonomous Funds (DAF) and perhaps more to come.
        </div>
      </div>
    </div>

    <div class="mt-12 grid grid-cols-3 gap-12">
      <div class="shadow p-4 rounded">
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
      </div>
    </div>
    <div class="mt-32">
      <video class="block mx-auto" width="250" height="250" controls>
        <source src=”./../assets/geiler-vogel.mp4” type=video/ogg> <source
        src="./../assets/geiler-vogel.mp4" type=video/mp4>
      </video>
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
