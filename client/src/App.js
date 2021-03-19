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
      window.open("https://t.me/decentralizedfinancegroup", "_blank");
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