<template>
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

  <p><br></p>
  <div>
    Perhaps the best thing you can do with Central Bank Wipe Paper (CBWP) is to invest it in betting on rising Ether and Bitcoin prices.

    <p><br></p>

    To start betting you need to pay the central bank employees to print some CBWP for you to get the party started. How much Wipepaper do you want to be printed?
    
  </div>
  
  <p><br></p>
  <div>
    <vue-slider v-if="etherBalance" v-model="amount" :min="0" :max="etherBalance" :interval="0.000000000000000001" />
    <div v-else>
      Kein Guthaben
    </div>
    <p> <br>
    </p>
    <button @click="onBuyNowClicked()" type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Buy now
    </button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

export default defineComponent({
  components: {
    VueSlider
  },
  setup() {
    const amount = ref(amount);
    const etherBalance = ref(parseFloat(localStorage.getItem('klopapier.exchange.account.etherBalance') || '0'));

    return {
      amount,
      etherBalance
    }
  },
  methods: {
    onBuyNowClicked() {
      alert('This feature is under construction.')
    }
  },
})
</script>