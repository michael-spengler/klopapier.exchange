import { defineComponent } from "vue";
import { useWeb3 } from "../../hooks/useWeb3";
import EthereumChart from "../../components/EthereumChart.vue";

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