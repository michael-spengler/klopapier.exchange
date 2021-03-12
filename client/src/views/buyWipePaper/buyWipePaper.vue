<template>
  <div class="wrapper">
    <div class="hero">
      <div>
        <div
          class="bg-white bg-opacity-90 px-12 pb-12 pt-8 inline-block rounded border border-blue-600"
        >
          <div class="font-bold">Borrow WipePaper here!</div>
          <p><br /></p>
          You can use Central Bank WipePaper (CBWP)<br />to bet on rising Ether prices.
          <p></p>
          <div class="w-64 mx-auto mt-8">
            <label for="price" class="block text-sm font-bold text-left text-gray-700"
              >Ether</label
            >
            <div class="mt-1 relative rounded-md shadow-sm">
              <div
                class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
              >
                <span class="text-gray-500">
                  <svg class="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,1.75L5.75,12.25L12,16L18.25,12.25L12,1.75M5.75,13.5L12,22.25L18.25,13.5L12,17.25L5.75,13.5Z"
                    />
                  </svg>
                </span>
              </div>
              <input
                type="number"
                class="focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="Amount"
                v-model="amountEthereum"
                @input="updateEthereum"
              />
              <div class="absolute inset-y-0 right-0 flex items-center">
                <button
                  class="h-full py-0 pl-3 pr-3 border-transparent bg-transparent text-blue-600 font-semibold sm:text-sm rounded-md"
                  @click="maxValue"
                >
                  MAX
                </button>
              </div>
            </div>
          </div>

          <div class="text-gray-500 my-8">
            <svg class="w-8 h-8 block mx-auto" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z"
              />
            </svg>
          </div>

          <div class="w-64 mx-auto">
            <label for="price" class="block text-sm font-bold text-left text-gray-700"
              >WipePaper</label
            >
            <div class="mt-1 relative rounded-md shadow-sm">
              <div
                class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none"
              >
                <span class="text-gray-500">
                  <svg class="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M9 3C5.69 3 3.14 5.69 3 9V21H12V13.46C13.1 14.45 14.5 15 16 15C19.31 15 22 12.31 22 9C22 5.69 19.31 3 16 3H9M9 5H11.54C10.55 6.1 10 7.5 10 9V12H9V13H10V19H5V13H6V12H5V9C5 6.79 6.79 5 9 5M16 5C18.21 5 20 6.79 20 9C20 11.21 18.21 13 16 13C13.79 13 12 11.21 12 9C12 6.79 13.79 5 16 5M16 7.25C15.03 7.25 14.25 8.03 14.25 9C14.25 9.97 15.03 10.75 16 10.75C16.97 10.75 17.75 9.97 17.75 9C17.75 8.03 16.97 7.25 16 7.25M7 12V13H8V12H7Z"
                    />
                  </svg>
                </span>
              </div>
              <input
                type="number"
                class="focus:ring-blue-600 focus:border-blue-600 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
                placeholder="Amount"
                v-model="amountWipePaper"
                @input="updateWipePaper"
              />
              <div class="absolute inset-y-0 right-0 flex items-center">
                <button
                  class="h-full py-0 pl-3 pr-3 border-transparent bg-transparent text-blue-600 font-semibold sm:text-sm rounded-md"
                  @click="maxValue"
                >
                  MAX
                </button>
              </div>
            </div>
          </div>
          <button
            @click="openConfirmationDialog"
            class="mt-12 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
    <div id="particles-js"></div>
    <div class="mt-12 text-xl">
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
    <p><br /></p>
  </div>
</template>

<script src="./buyWipePaper.js">

</script>

<style scoped>
  @import './buyWipePaper.css';
</style>

