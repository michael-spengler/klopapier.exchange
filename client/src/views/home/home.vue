<template>
  <div class="wrapper">
    <div class="hero">
      <div class="text-2xl md:text-5xl lg:text-6xl">Exploration Playground</div>
      <div class="mt-6 text-sm md:text-base">
        <b> Decentralized Finance (DeFi) leveraging the Distributed Ledger Technology </b>

        <p><br /></p>
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
        >
      </div>

      <div class="mt-8 sm:flex justify-center">
        <!-- <div class="mt-2">
          <router-link
            type="button"
            class="inline-flex items-center px-4 py-2 mx-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            to="/depositEther"
          >
            <svg
              class="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              width="22px"
              height="22px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
            </svg>
            Deposit Ether
          </router-link>
        </div> -->
        <div class="mt-2">
          <router-link
            type="button"
            class="inline-flex items-center px-4 py-2 mx-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            to="/coins"
          >
            <svg
              class="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 24 24"
              viewBox="0 0 24 24"
              fill="white"
              width="22px"
              height="22px"
            >
              <g><rect fill="none" height="24" width="24" /></g>
              <g>
                <g>
                  <rect height="7" width="3" x="4" y="10" />
                  <rect height="7" width="3" x="10.5" y="10" />
                  <rect height="3" width="20" x="2" y="19" />
                  <rect height="7" width="3" x="17" y="10" />
                  <polygon points="12,1 2,6 2,8 22,8 22,6" />
                </g>
              </g>
            </svg>
            Earn Coins
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
          is the basis for currencies like Ether and Bitcoin.
          Please understand some differences between the
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
          USD WipePaper</a
        > before you continue.

          
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
            The Klopapier Game shall make your exploration of the Distributed Ledger
            Technology (DLT) inspiring and fun.
            <p><br /></p>
            <router-link
              type="button"
              class="inline-flex items-center px-4 py-2 mx-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              to="/coins"
            >
              Play It Now</router-link
            >

            <!-- You can bet Central Bank WipePaper (CBWP =?
            <a
              class="text-blue-600"
              href="https://www.youtube.com/watch?v=jWM-MdT2rDg&t=547s"
              target="_blank"
              rel="noopener"
              >CBDC</a
            >) on rising real money prices. -->
          </div>
        </div>
      </div>

      <div class="mt-32">
        <video class="block mx-auto" width="250" height="250" controls>
          <source src=”./../assets/geiler-vogel.mp4” type=video/ogg> <source
          src="./../../assets/geiler-vogel.mp4" type=video/mp4>
        </video>
      </div>

      <div class="mt-32">
        <div class="md:grid grid-cols-2 grid-gap-64">
          <div class="flex items-center">
            <img
              class="w-2/3 block mx-auto"
              src="./../../assets/history.svg"
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
              These are some of the reasons why we support wallstreetbets, Decentralized
              Finance, the Distributed Ledger Technology etc.
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
              src="./../../assets/contribute.svg"
              alt="History"
            />
          </div>
        </div>
      </div>
      <div class="my-32">

      <p><br /></p>
      Inspired by the (temporary?) shutdown of our
      <a
        href="https://www.reddit.com/r/wallstreetbets/"
        target="_blank"
        class="text-blue-600"
        rel="noopener noreferrer"
      >
        wallstreetbets reddit community</a
      >
      this page is also published to
      <a
        href="ipfs://Qmbh7PrpKFFHZKEEZWZ3TxBdnjBWKuhKq4WmVo9wf4B9W3"
        target="_blank"
        class="text-blue-600"
        rel="noopener noreferrer"
      >
        the IPFS
      </a>
      and to

      <a
        href="https://www.arweave.org"
        target="_blank"
        class="text-blue-600"
        rel="noopener noreferrer"
      >
        the Arweave
      </a>

      using

      <a
        href="https://argoapp.live"
        target="_blank"
        class="text-blue-600"
        rel="noopener noreferrer"
      >
        Argo
      </a>

      </div>
      <div class="my-32">
        <div class="font-bold text-xl">Quotes/Feedback</div>
        <div>"No pressure. Some things just need some time."</div>
        <div>"Habt Ihr in die Hose geschissen?"</div>
      </div>

      <div class="my-32">
        <div class="font-bold text-xl">Contact</div>
        <div class="mt-6 text-sm md:text-base">
          <div class="mb-2">
            Join us via
            <a
              href="https://t.me/decentralizedfinancegroup"
              target="_blank"
              class="text-blue-600"
              rel="noopener noreferrer"
              >Telegram </a
            >and star our
            <a
              href="https://github.com/michael-spengler/klopapier.exchange"
              target="_blank"
              class="text-blue-600"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </a>
          </div>
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
        </div>
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


<script src="./home.js">

</script>

<style scoped>
  @import './home.css';
</style>

