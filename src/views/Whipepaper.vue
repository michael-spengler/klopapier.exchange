<template>


  <div>
    Perhaps the best thing you can do with Central Bank Wipe Paper (CBWP) is to invest it in betting on rising Ether and Bitcoin prices.

    <p></p>

    To start betting you need to pay the central bank employees to print some CBWP for you to get the party started.
    
  </div>
  
  <!-- slider -->

  <div>
    <div>
      <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
      <div class="mt-1 relative rounded-md shadow-sm">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span class="text-gray-500 sm:text-sm">
            $
          </span>
        </div>
        <input type="text" name="price" id="price" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00">
        <div class="absolute inset-y-0 right-0 flex items-center">
          <label for="currency" class="sr-only">Currency</label>
          <select id="Currency" name="currency" class="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
            <option>ETH</option>
            <option>BIT</option>
            <option>USD</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({})
</script>