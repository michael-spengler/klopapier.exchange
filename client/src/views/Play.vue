<template>
  <div>
    <div class="mt-8 font-bold text-xl">
      Bet on rising or falling Ethereum prices here! Use WipePaper as your bet
    </div>
    <div class="mt-8 px-64">
      <ethereum-chart />
    </div>
    <div class="mt-12 text-xl font-bold">
      Do you think the price of Ethereum will get within 60 (59...) seconds
    </div>
    <div class="mt-2">
      <button
        class="bg-green py-2 px-3 border border-green-300 rounded-md shadow-sm text-sm leading-4 font-bold text-green-700 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
      >
        Higher
      </button>
      <span class="font-bold mx-2">or</span>
      <button
        class="bg-red py-2 px-3 border border-red-300 rounded-md shadow-sm text-sm leading-4 font-bold text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
      >
        Lower
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useWeb3 } from "../hooks/useWeb3";
import EthereumChart from "../components/EthereumChart.vue";

export default defineComponent({
  components: {
    "ethereum-chart": EthereumChart,
  },
  setup() {
    const { getAccounts } = useWeb3();

    getAccounts().then((accounts) => {
      console.log(accounts);
    });
  },
});
</script>
