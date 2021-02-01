<template>
  <div class="wrapper">
    <div class="hero">
      <div class="text-2xl md:text-5xl lg:text-6xl">Klopapier Exchange</div>
      <div class="mt-6 text-sm md:text-base">
        <a
          class="text-blue-600"
          href="https://whitepaper.io/document/0/bitcoin-whitepaper"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bitcoin Whitepaper
        </a>
        vs.
        <a
          class="text-blue-600"
          href="https://duckduckgo.com/?q=us+dollar+toiletpaper&iax=images&ia=images"
          target="_blank"
          rel="noopener noreferrer"
        >
          USD WipePaper</a
        >
        vs.
        <a
          class="text-blue-600"
          href="https://www.ecb.europa.eu/euro/html/digitaleuro-report.en.html"
          target="_blank"
          rel="noopener"
          >Digital Euro WipePaper</a
        >.
      </div>
      <p><br /></p>
      This page is also deployed to
      <a
        href="ipfs://bafybeifxskjqlxn3lmk2j77r3wh4skp2ocmhyhnlj46me7etqqwvn4n4wi"
        target="_blank"
        class="text-blue-600"
        rel="noopener noreferrer"
      >
        the IPFS
      </a>
      inspired by the (temporary?) shutdown of our
      <a
        href="https://www.reddit.com/r/wallstreetbets/"
        target="_blank"
        class="text-blue-600"
        rel="noopener noreferrer"
      >
        wallstreetbets reddit community</a
      >.
      <div class="mt-8 sm:flex justify-center">
        <div class="mt-2">
          <router-link
            type="button"
            class="inline-flex items-center px-4 py-2 mx-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            to="/depositEther"
          >
            <!-- TODO: informed troy via telegram -> sometimes "show_chart" is shown instead of the icon itself -->
            <!-- <span class="material-icons mr-2"> show_chart </span> -->
            Deposit Ether
          </router-link>
        </div>
        <div class="mt-2">
          <router-link
            type="button"
            class="inline-flex items-center px-4 py-2 mx-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            to="/wallstreetbetsCoins"
          >
            <!-- TODO: informed troy via telegram -> sometimes "account_balance" is shown instead of the icon itself -->
            <!-- <span class="material-icons mr-2"> account_balance </span> -->
            Explore WallstreetbetsCoins
          </router-link>
        </div>
      </div>
    </div>

    <div id="particles-js" style="height: 500px"></div>

    <div class="mx-4 text-sm md:text-base">
      <div class="mt-12 md:grid grid-cols-3 gap-12">
        <div class="mt-4 shadow p-4 rounded text-sm sm:text-base">
          <div class="font-bold text-base">The Idea</div>
          With this page we invite you to explore the Distributed Ledger Technology which
          is the basis for currencies like Ether and Bitcoin. Everyone is invited to
          contribute to this page by providing
          <a
            href="https://github.com/michael-spengler/klopapier.exchange"
            target="_blank"
          >
            content or code for new features.
          </a>
        </div>

        <div class="mt-4 shadow p-4 rounded text-sm sm:text-base">
          <div class="font-bold text-base">Prerequisites</div>
          <div>
            In order to interact with smart contracts on the Ethereum Blockchain, we
            recommend to use the
            <a
              class="text-blue-600"
              href="https://brave.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              brave.com
            </a>
            Browser. Alternatively you can use
            <a
              class="text-blue-600"
              href="https://metamask.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              metamask.io</a
            >. For developers we recommend the
            <a
              href="https://www.npmjs.com/package/decentralized-finance-defi"
              target="_blank"
              class="text-blue-600"
              rel="noopener noreferrer"
              >DeFi Package</a
            >.
          </div>
        </div>

        <div class="mt-4 shadow p-4 rounded text-sm sm:text-base">
          <div class="font-bold text-base">The Game</div>
          <div>
            The Klopapier Game is under construction.
            <!-- You can bet Central Bank WipePaper (CBWP =?
            <a
              class="text-blue-600"
              href="https://www.youtube.com/watch?v=jWM-MdT2rDg&t=547s"
              target="_blank"
              rel="noopener"
              >CBDC</a
            >) on rising real money prices. -->
          </div>
          <div>
            With this we want to make your exploration regarding crypto currencies & smart
            contracts fun and valuable at the same time. <br />
          </div>
        </div>
      </div>

      <div class="mt-32">
        <video class="block mx-auto" width="250" height="250" controls>
          <source src=”./../assets/geiler-vogel.mp4” type=video/ogg> <source
          src="./../assets/geiler-vogel.mp4" type=video/mp4>
        </video>
      </div>

      <div class="mt-32">
        <div class="md:grid grid-cols-2 grid-gap-64">
          <div class="flex items-center">
            <img
              class="w-2/3 block mx-auto"
              src="./../assets/history.svg"
              alt="History"
            />
          </div>
          <div class="mt-8 md:mt-0">
            <div id="history" class="font-bold text-xl">History</div>
            <div>
              <p><br /></p>
              For several decades people behind most central banks could create their
              money out of thin air. The incentives for giving this money to people who
              create the most value for other people - like farmers, nurses, doctors and
              many more - had not been strong enough to foster a fair system.
              <p><br /></p>
            </div>
            <div>
              In order to foster fair systems we invested time into professional incentive
              engineering. We came to the conclusion that Ether, Bitcoin & Co. can play
              valuable roles in this game.
              <p><br /></p>
              As long as private keys are save you cannot spend anything on the Blockchain
              which you do not own. Compare this to our current (January 2021) fiat
              currency system which is fundamentally based on debts. Fed & ECB ... giving
              out loans directly at the beginning.
              <p><br /></p>
              This system, combined with the fact that many of our politicians do not
              perceive us (the people) as their employers but rather as their servants,
              seems not to be the best at the moment.
              <p><br /></p>

              After the invention of the income tax some of our tax systems became crazy
              in many countries as they did no longer provide reasonable incentives for
              people for creating value for other people.
              <p><br /></p>
              The middle class people had been punished for creating value for other
              people by unfair income taxes. Lazy people and super rich people benefitted
              from this. This lack of professional incentive engineering in the past
              inspired ordinary reasonable people to use anonymization patterns like the
              ones supported by

              <a
                href="https://tornadocash.eth.link/"
                class="text-blue-500"
                target="_blank"
                rel="noopener"
                >Tornado Cash</a
              >.
            </div>
            <p><br /></p>
            <div>
              Older people, who apparently don't have a proper Distributed Ledger
              education yet, don't even have a
              <a
                href="https://brave.com"
                class="text-blue-500"
                target="_blank"
                rel="noopener"
                >Brave Ethereum</a
              >
              or Bitcoin wallet whereas e.g. the
              <a
                class="text-blue-500"
                href="https://www.euribor-rates.eu/en/current-euribor-rates/2/euribor-rate-3-months/"
                target="_blank"
                rel="noopener"
                >Three Months Euribor</a
              >
              had been showing negative interest rates since about 2015.

              <p><br /></p>
              These are some of the reasons why we support wallstreetbets and the
              Distributed Ledger Technology etc.
              <p><br /></p>
              We want to increase freedom for those who increase freedom.
            </div>
          </div>
        </div>
      </div>
      <div class="mt-32">
        <div class="md:grid grid-cols-2 grid-gap-64">
          <div>
            <div class="font-bold text-xl">Contribute</div>
            <div>
              <p><br /></p>
              This project has been created as a business and technology education
              playground for some of my students at
              <a
                class="text-blue-500"
                href="https://www.mannheim.dhbw.de"
                target="_blank"
                rel="noopener"
                >DHBW Mannheim</a
              >.
            </div>
            <div>
              <p><br /></p>
              We are happy about high quality contributions from anyone.
            </div>
            <div>
              <p><br /></p>
              We want to provide valuable and fun education around decentralized incentive
              engineering and peer to peer collaboration.
              <p><br /></p>
            </div>
            <div>
              Along this way we also promote cool platforms in

              <a
                class="text-blue-500"
                href="https://defipulse.com"
                target="_blank"
                rel="noopener"
                >the DeFi ecosystem</a
              >
              like
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
              <p><br /></p>
              If you are completely new to the crypto- and DeFi space, you might also
              check some videos
              <a
                class="text-blue-500"
                href="https://www.youtube.com/watch?v=J8V0GkqUKDE&list=PLEz_1ekJPuAii8of1qHLxB0lxpC6QXXdY"
                target="_blank"
                rel="noopener"
                >here</a
              >.
            </div>
          </div>
          <div class="mt-8 md:mt-0 flex items-center">
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

      <div class="mt-4">
        This is an open source ownerless education project
        <a
          class="text-blue-600"
          href="https://github.com/michael-spengler/klopapier.exchange"
          target="_blank"
          rel="noopener noreferrer"
        >
          under construction</a
        >. You can contact us by creating an issue
        <a
          class="text-blue-600"
          href="https://github.com/michael-spengler/klopapier.exchange/issues"
          target="_blank"
          rel="noopener noreferrer"
          >here</a
        >.
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
    onHistoryClicked() {
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
