<template>
  <div class="wrapper">
    <div class="hero">
      <div class="text-6xl">Klopapier Exchange</div>
      <div class="mt-4 text-xl">
        This is an education project
        <a
          class="text-blue-600"
          href="https://github.com/michael-spengler/klopapier.exchange"
          target="_blank"
          rel="noopener noreferrer"
        >
          under construction</a
        >.
      </div>
      <div class="row items-center mt-4">
        <router-link
          type="button"
          class="inline-flex items-center px-4 py-2 mx-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          to="/whipepaper"
        >
          <span class="material-icons mr-2"> show_chart </span>
          Buy Whipepaper
        </router-link>

        <button
          type="button"
          class="inline-flex items-center px-4 py-2 mx-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span class="material-icons mr-2"> psychology </span>
          Learn
        </button>

        <video width="320" height="240" controls>
          <source src=”./../assets/geiler-vogel.mp4” type=video/ogg> <source
          src="./../assets/geiler-vogel.mp4" type=video/mp4>
        </video>
      </div>
    </div>

    <div id="particles-js"></div>
    <div class="mt-12 grid grid-cols-3 gap-12">
      <div class="shadow p-4 rounded">
        <div class="font-bold">The Idea</div>

        The idea is to provide a money exploration game. By playing this game you can learn more about money than they teach you at most universities.
      </div>

            <div class="shadow p-4 rounded">
        <div class="font-bold">Prerequisites</div>
        <div>
          First please explore the difference between the
          <a
            class="text-blue-600"
            href="https://whitepaper.io/document/0/bitcoin-whitepaper"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bitcoin Whitepaper
          </a>
          and the
          <a
            class="text-blue-600"
            href="https://duckduckgo.com/?q=us+dollar+toiletpaper&iax=images&ia=images"
            target="_blank"
            rel="noopener noreferrer"
          >
            USD Wipepaper</a
          >.
        </div>
        <div>
          You might also check the launch of the digital
          <a
            class="text-blue-600"
            href="https://www.ecb.europa.eu/euro/html/digitaleuro-report.en.html"
            target="_blank"
            rel="noopener"
            >Euro (EZB) Wipepaper</a
          >.
        </div>
      </div>

      <div class="shadow p-4 rounded">
        <div class="font-bold">The Game</div>
        <div>
          You can bet Central Bank Wipepaper (CBWP =?
          <a
            class="text-blue-600"
            href="https://www.youtube.com/watch?v=jWM-MdT2rDg&t=547s"
            target="_blank"
            rel="noopener"
            >CBDC</a
          >) on rising real money prices.
        </div>
        <div>
          With this we want to make your exploration regarding crypto currencies fun and
          valuable at the same time.
        </div>
      </div>
    </div>
    <div class="mt-32">
      <div class="grid grid-cols-2 grid-gap-64">
        <div>
          <img class="w-2/3 block mx-auto" src="./../assets/history.svg" alt="History" />
        </div>
        <div>
          <div class="font-bold text-xl">History</div>
          <div>
            For several decades wirepullers behind most central banks could create their
            money out of thin air. The incentives for giving this money to people who
            create the most value for other people - like farmers, nurses, doctors and
            many more - have not been strong enough to foster a fair system.
          </div>
          <div>
            In order to foster fair systems we invested some time into professional
            incentive engineering. We came to the conclusion that Ether, Bitcoin & Co. can
            play valuable roles in this game.
          </div>
          <div>
            It seems strange that about 95 % (rough guess) of adult people on earth don't
            even have a
            <a
              class="text-blue-500"
              href="https://brave.com"
              target="_blank"
              rel="noopener"
              >Brave Ethereum</a
            >
            or Bitcoin wallet yet.
          </div>
        </div>
      </div>
    </div>
    <div class="mt-32">
      <div class="grid grid-cols-2 grid-gap-64">
        <div>
          <div class="font-bold text-xl">Contribute</div>
          <div>
            This project is mainly an education playground for some of my students at
            <a
              class="text-blue-500"
              href="https://www.mannheim.dhbw.de"
              target="_blank"
              rel="noopener"
              >DHBW Mannheim</a
            >.
          </div>
          <div>
            At the same time we are happy about high quality contributions from anyone.
          </div>
          <div>
            We want to provide valuable and fun education around decentralized incentive
            engineering and peer to peer collaboration.
          </div>
          <div>
            Along this way we also promote cool platforms in the DeFi ecosystem like
            <a
              class="text-blue-500"
              href="https://gitcoin.co/"
              target="_blank"
              rel="noopener"
              >gitcoin.co</a
            >,
            <a
              class="text-blue-500"
              href="https://community.xyz"
              target="_blank"
              rel="noopener"
              >community.xyz</a
            >,
            <a
              class="text-blue-500"
              href="https://aave.com"
              target="_blank"
              rel="noopener"
              >aave.com</a
            >
            etc.. If you want to contribute please consider raising a
            <a
              class="text-blue-500"
              href="https://github.com/michael-spengler/klopapier.exchange/pulls"
              target="_blank"
              rel="noopener"
              >pull request</a
            >
            or donating a small amount of Ether to
            <a
              class="text-blue-500"
              href="https://etherscan.io/address/klopapier.eth"
              target="_blank"
              rel="noopener"
              >klopapier.eth</a
            >
          </div>
          <div>
            If you are completely new to the crypto- and DeFi space, you might also check
            some videos
            <a
              class="text-blue-500"
              href="https://www.youtube.com/watch?v=J8V0GkqUKDE&list=PLEz_1ekJPuAii8of1qHLxB0lxpC6QXXdY"
              target="_blank"
              rel="noopener"
              >here</a
            >.
          </div>
        </div>
        <div>
          <img
            class="w-2/3 block mx-auto"
            src="./../assets/contribute.svg"
            alt="History"
          />
        </div>
      </div>
    </div>
    <div class="my-32">
      <div class="font-bold text-xl">Quotes/Feedback</div>
      <div>"No pressure. Some things just need some time."</div>
      <div>"Habt Ihr in die Hose geschissen?"</div>
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
