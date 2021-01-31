<template>
  <div>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <router-link to="/" @click="menu = false">
                <img src="./assets/logo.png" style="width: 120px" alt="Logo" />
              </router-link>
            </div>
            <div class="hidden lg:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <router-link
                  to="/depositEther"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  active-class="bg-gray-900 text-white"
                  >Deposit Ether</router-link
                >
                <router-link
                  to="/borrowWipePaper"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  active-class="bg-gray-900 text-white"
                  >Borrow WipePaper</router-link
                >
                <router-link
                  to="/wallstreetbetsCoins"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  active-class="bg-gray-900 text-white"
                  >WallStreetBetsCoins</router-link
                >
                <router-link
                  to="/education"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  active-class="bg-gray-900 text-white"
                  >Education</router-link
                >
              </div>
            </div>
          </div>
          <div class="hidden lg:block">
            <div class="flex items-center">
              <div class="relative">
                <div>
                  <div
                    v-if="walletAdress"
                    class="ml-2 font-bold text-white flex items-center"
                  >
                    <div class="bg-gray-900 text-white px-3 py-2 rounded-md">
                      {{ walletAdressDisplay }}
                    </div>
                    <div class="ml-2 bg-gray-900 text-white px-3 py-2 rounded-md">
                      {{ etherBalance }} ETH
                    </div>
                  </div>
                  <button
                    v-else
                    class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    @click="connect"
                  >
                    <span class="material-icons mr-2"> cached </span>
                    Connect to Wallet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex lg:hidden">
            <!-- Mobile menu button -->
            <button
              class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              @click="menu = !menu"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                :class="`${menu ? 'hidden' : 'block'} h-6 w-6`"
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                :class="`${menu ? 'block' : 'hidden'} h-6 w-6`"
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
      </div>

      <!--
        Mobile menu, toggle classes based on menu state.

        Open: "block", closed: "hidden"
      -->
      <div :class="`${menu ? 'block' : 'hidden'} lg:hidden`">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <router-link
            to="/depositEther"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            active-class="bg-gray-900 text-white"
            @click="menu = false"
            >Deposit Ether</router-link
          >
          <router-link
            to="/borrowWipePaper"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            active-class="bg-gray-900 text-white"
            @click="menu = false"
            >Borrow WipePaper</router-link
          >
          <router-link
            to="/wallstreetbetsCoins"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            active-class="bg-gray-900 text-white"
            @click="menu = false"
            >WallStreetBetsCoins</router-link
          >
          <router-link
            to="/education"
            class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            active-class="bg-gray-900 text-white"
            @click="menu = false"
            >Education</router-link
          >
        </div>
        <div class="mb-4">
          <button
            class="ml-auto mr-1 bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
            class="ml-1 mr-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center">
            <div
              v-if="walletAdress"
              class="mx-auto font-bold text-white flex items-center"
            >
              <div class="bg-gray-900 text-white px-3 py-2 rounded-md">
                {{ walletAdressDisplay }}
              </div>
              <div class="mx-2 bg-gray-900 text-white px-3 py-2 rounded-md">
                {{ etherBalance }} ETH
              </div>
            </div>
            <button
              v-else
              class="mx-auto bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
              @click="connect"
            >
              <span class="material-icons mr-2"> cached </span>
              Connect to Wallet
            </button>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from "vue";
import axios from "axios";

export default defineComponent({
  setup() {
    const menu = ref(false);

    const walletAdress = ref(
      localStorage.getItem("klopapier.exchange.account.walletAdress")
    );
    const etherBalance = ref(
      localStorage.getItem("klopapier.exchange.account.etherBalance") || "0"
    );

    const walletAdressDisplay = computed(() => {
      if (walletAdress.value) {
        const adress = walletAdress.value;
        return `${adress.substring(0, 4)}...${adress.substring(
          adress.length - 4,
          adress.length
        )}`;
      }
      return "";
    });

    onMounted(() => {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length) {
          localStorage.setItem("klopapier.exchange.account.walletAdress", accounts[0]);
          walletAdress.value = accounts[0];
          getBalanceInEthereum(walletAdress.value);
        } else {
          walletAdress.value = null;
          localStorage.removeItem("klopapier.exchange.account.walletAdress");
          localStorage.removeItem("klopapier.exchange.account.etherBalance");
        }
      });

      if (walletAdress.value) {
        getBalanceInEthereum();
      }
    });

    const connect = async () => {
      if (window.ethereum === undefined) {
        alert(
          "We recommend to install the brave.com browser to play the Klopapier Game."
        );
      } else {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        localStorage.setItem("klopapier.exchange.account.walletAdress", accounts[0]);
        walletAdress.value = accounts[0];
        getBalanceInEthereum(walletAdress.value);
      }
    };

    const getBalanceInEthereum = async (walletAdress) => {
      const { data } = await axios.get(
        `http://localhost:3001/getBalance/walletAddress/${walletAdress}`
      );
      etherBalance.value = data.balanceInEther;
      localStorage.setItem(
        "klopapier.exchange.account.etherBalance",
        data.balanceInEther
      );
    };

    const openGithub = () => {
      window.open("https://github.com/michael-spengler/klopapier.exchange", "_blank");
    };

    const openTelegram = () => {
      window.open("https://t.me/wallstreetbetsdevelopers", "_blank");
    };

    return {
      connect,
      walletAdress,
      etherBalance,
      walletAdressDisplay,
      openGithub,
      openTelegram,
      menu,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
