<template>
  <div class="containerHome">
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div
          id="background"
          class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
        >
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 transform translate-x-1/2"
            fill="#00818a"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon id="polygon" points="50,0 100,0 50,100 0,100" />
          </svg>

          <div class="relative pt-6 px-4 sm:px-6 lg:px-8"></div>

          <div
            class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div
              class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden"
            >
              <div id="imageStartseite" class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt=""
                  />
                </div>
                <div  class="-mr-2">
                  <button
                    type="button"
                    class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span class="sr-only">Close main menu</span>
                    <!-- Heroicon name: outline/x -->
                    <svg
                      class="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div id="imageStartseite" class="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >Product</a
                >

                <a
                  href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >Features</a
                >

                <a
                  href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >Marketplace</a
                >

                <a
                  href="#"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >Company</a
                >
              
              <a
                href="#"
                class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
              >
                Log in
              </a>
              </div>
            </div>
          </div>

          <main
            class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div class="sm:text-center lg:text-left">
              <h1
                class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span id="expColor" class="block xl:inline"
                  >Exploration Playground</span
                >
              </h1>
              <p
                class="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Decentralized Finance (DeFi) leveraging the Distributed Ledger
                Technology
              </p>
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <a
                  class="bt"
                  href="https://whitepaper.io/document/0/bitcoin-whitepaper"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Bitcoin Whitepaper
                </a>

                <a
                  class="bt"
                  href="https://duckduckgo.com/?q=us+dollar+toiletpaper&iax=images&ia=images"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  USD Wipepaper
                </a>

                <a
                  class="bt"
                  href="https://www.ecb.europa.eu/euro/html/digitaleuro-report.en.html"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Digital Euro WipePaper
                </a>
              </div>
            </div>
       
          </main>
        </div>
      </div>
      <div id="imageStartseite" class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="../../assets/blockchain.jpg"
          alt="Test"
          id="img"
        />
      </div>
    </div>

    <div class="wrapper" style="margin-top:30vh">
           <div
              id="ethereumPrediction"
              class="text-2xl md:text-5xl lg:text-6xl"
            >
              Ethereum Prediction
            </div>
            <div class="mt-32">
              <div class="xl:grid grid-cols-2 grid-gap-64 items-center">
                <div class="mt-8 md:mt-0" style="align-items:center;">
                      <p style="margin-bottom:40px;font-size:3vh;">Ethereum Chart</p>
                   <div id="chart"></div>
                </div>
                  <div class="mt-8 md:mt-0">
                     <p style="margin-bottom:40px; font-size:3vh;">Further Predictions</p>                 
                    <div id="chart2" style="text-align:center;"></div>
                </div>
              </div>
            </div>
      <div class="container" style="margin-bottom:15vh;">
        <div class="mt-12 lg:grid grid-cols-3 gap-12">
          <div class="mt-4 p-4 rounded">
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <i class="fab fa-windows"></i>
                  <h3>The Game</h3>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <p>
                    The Klopapier Game shall make your exploration of the
                    Distributed Ledger Technology (DLT) inspiring and fun.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4 p-4 rounded">
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <i class="fab fa-windows"></i>
                  <h3>The Idea</h3>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <p>
                    With this page we invite you to explore the Distributed
                    Ledger Technology which is the basis for currencies like
                    Ether and Bitcoin. Please understand some differences
                    between the Bitcoin Whitepaper and the USD WipePaper
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-4 p-4 rounded text-sm sm:text-base">
            <div class="card">
              <div class="face face1">
                <div class="content">
                  <i class="fab fa-windows"></i>
                  <h3>Prerequisites</h3>
                </div>
              </div>
              <div class="face face2">
                <div class="content">
                  <p>
                    In order to interact with smart contracts on the Ethereum
                    Blockchain, we recommend to use the brave.com Browser.
                    Alternatively you can use metamask.io For developers we
                    recommend the
                    <!-- <a
              href="https://www.npmjs.com/package/decentralized-finance-defi"
              target="_blank"
              class="text-blue-600"
              rel="noopener noreferrer"
              >-->DeFi Package<!--</a
            >. -->
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bgimg-2-history">
      <div class="caption">
        <!--<span class="border" style="background-color:transparent;font-size:25px;color: #f7f7f7;"></span>-->
      </div>
    </div>

    <div style="position:relative;">
      <div id="contentData"
        style="color:#ddd;background-color:#404b69
;text-align:center;padding:50px 80px;text-align: justify;"
      >
        <h3 id="blockchain">History</h3>
        <p class="contentData">
          For several decades people behind most central banks could create
          their money out of thin air. The incentives for giving this money to
          people who create the most value for other people - like farmers,
          nurses, doctors and many more - had not been strong enough to foster a
          fair system. In order to foster fair systems we invested time into
          professional incentive engineering. We came to the conclusion that
          Ether, Bitcoin & Co. can play valuable roles in this game. As long as
          private keys are save you cannot spend anything on the Blockchain
          which you do not own. Compare this to our current (January 2021) fiat
          currency system which is fundamentally based on debts. Fed & ECB ...
          giving out loans directly at the beginning. This system, combined with
          the fact that many of our politicians do not perceive us (the people)
          as their employers but rather as their servants, seems not to be the
          best at the moment. After the invention of the income tax some of our
          tax systems became crazy in many countries as they did no longer
          provide reasonable incentives for people for creating value for other
          people. The middle class people had been punished for creating value
          for other people by unfair income taxes. Lazy people and super rich
          people benefitted from this. This lack of professional incentive
          engineering in the past inspired ordinary reasonable people to use
          anonymization patterns like the ones supported by

          <a
            href="https://tornadocash.eth.link/"
            class="websiteJump"
            target="_blank"
            rel="noopener"
            >Tornado Cash</a
          >. Older people, who apparently don't have a proper Distributed Ledger
          education yet, don't even have a
          <a
            href="https://brave.com"
            class="websiteJump"
            target="_blank"
            rel="noopener"
            >Brave Ethereum</a
          >
          or Bitcoin wallet whereas e.g. the
          <a
            class="websiteJump"
            href="https://www.euribor-rates.eu/en/current-euribor-rates/2/euribor-rate-3-months/"
            target="_blank"
            rel="noopener"
            >Three Months Euribor</a
          >
          had been showing negative interest rates since about 2015. These are
          some of the reasons why we support wallstreetbets, Decentralized
          Finance, the Distributed Ledger Technology etc. We want to increase
          freedom for those who increase freedom.
        </p>
      </div>
    </div>

    <div class="bgimg-2-history">
      <div class="caption">
        <!--<span class="border" style="background-color:transparent;font-size:25px;color: #f7f7f7;"></span>-->
      </div>
    </div>

    <div style="position:relative;" id="smartContracts">
      <div  id="contentData"
        style="color:#ddd;background-color:#404b69
;text-align:center;padding:50px 80px;text-align: justify;"
      >
        <h3>Contribute</h3>
        <p class="contentData">
          This project has been created as a business and technology education
          playground for some of my students at
          <a
            class="websiteJump"
            href="https://www.mannheim.dhbw.de"
            target="_blank"
            rel="noopener"
            >DHBW Mannheim</a
          >. We are happy about high quality contributions from anyone. We want
          to provide valuable and fun education around decentralized incentive
          engineering and peer to peer collaboration. Along this way we also
          promote cool platforms in

          <a
            class="websiteJump"
            href="https://defipulse.com"
            target="_blank"
            rel="noopener"
            >the DeFi ecosystem</a
          >
          like
          <a
            class="websiteJump"
            href="https://gitcoin.co/"
            target="_blank"
            rel="noopener"
            >gitcoin.co</a
          >,
          <a
            class="websiteJump"
            href="https://community.xyz"
            target="_blank"
            rel="noopener"
            >community.xyz</a
          >,
          <a
            class="websiteJump"
            href="https://aave.com"
            target="_blank"
            rel="noopener"
            >aave.com</a
          >
          etc.. If you want to contribute please consider raising a
          <a
            class="websiteJump"
            href="https://github.com/michael-spengler/klopapier.exchange/pulls"
            target="_blank"
            rel="noopener"
            >pull request</a
          >
          or donating a small amount of Ether to
          <a
            class="websiteJump"
            href="https://etherscan.io/address/klopapier.eth"
            target="_blank"
            rel="noopener"
            >klopapier.eth.</a
          >
          If you are completely new to the crypto- and DeFi space, you might
          also check some videos
          <a
            class="websiteJump"
            href="https://www.youtube.com/watch?v=J8V0GkqUKDE&list=PLEz_1ekJPuAii8of1qHLxB0lxpC6QXXdY"
            target="_blank"
            rel="noopener"
            >here</a
          >.
        </p>
      </div>
    </div>
    <div class="background">
      <div class="container">
        <div class="screen">
          <div class="screen-header">
            <div class="screen-header-left">
              <div class="screen-header-button close"></div>
              <div class="screen-header-button maximize"></div>
              <div class="screen-header-button minimize"></div>
            </div>
            <div class="screen-header-right">
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
              <div class="screen-header-ellipsis"></div>
            </div>
          </div>
          <div class="screen-body">
            <div class="screen-body-item left">
              <div class="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div class="app-contact">
                No Pressure, this just need some time. Habt ihr in die Hosen
                geschissen?
              </div>
            </div>
            <div class="screen-body-item">
              <div class="app-form">
                <div class="app-form-group">
                  This is an open source ownerless education project under
                  construction. You can contact us by creating an issue
                  <a
                    class="text-blue-600"
                    href="https://github.com/michael-spengler/klopapier.exchange/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    >here</a
                  >.
                </div>
                <div class="app-form-group">
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
                <div class="app-form-group">
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
            </div>
          </div>
        </div>
        <div class="credits">
          inspired by
          <a
            class="credits-link"
            href="https://dribbble.com/shots/2666271-Contact"
            target="_blank"
          >
            <svg class="dribbble" viewBox="0 0 200 200">
              <g stroke="#ffffff" fill="none">
                <circle cx="100" cy="100" r="90" stroke-width="20"></circle>
                <path
                  d="M62.737004,13.7923523 C105.08055,51.0454853 135.018754,126.906957 141.768278,182.963345"
                  stroke-width="20"
                ></path>
                <path
                  d="M10.3787186,87.7261455 C41.7092324,90.9577894 125.850356,86.5317271 163.474536,38.7920951"
                  stroke-width="20"
                ></path>
                <path
                  d="M41.3611549,163.928627 C62.9207607,117.659048 137.020642,86.7137169 189.041451,107.858103"
                  stroke-width="20"
                ></path>
              </g>
            </svg>
            Gururaj
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./home.js"></script>

<style scoped>
@import "./home.css";
@import "../../../src/components/button/button.css";
</style>
