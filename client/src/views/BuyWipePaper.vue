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

<script>
import { defineComponent, ref, onMounted } from "vue";
import "particles.js";
import Swal from "sweetalert2";

const color = "#295dab";

export default defineComponent({
  setup() {
    const etherBalance = ref(
      parseFloat(localStorage.getItem("klopapier.exchange.account.etherBalance") || "0")
    );
    const exchangeRate = ref(1.5);

    const amountEthereum = ref(null);
    const amountWipePaper = ref(null);

    const updateEthereum = async () => {
      if (amountEthereum.value > etherBalance.value) {
        amountEthereum.value = etherBalance.value;
      }

      if (amountEthereum.value) {
        amountWipePaper.value = amountEthereum.value * exchangeRate.value;
      } else {
        amountWipePaper.value = null;
      }
    };

    const updateWipePaper = () => {
      if (amountWipePaper.value > etherBalance.value * exchangeRate.value) {
        amountWipePaper.value = etherBalance.value * exchangeRate.value;
      }

      if (amountWipePaper.value) {
        amountEthereum.value = amountWipePaper.value / exchangeRate.value;
      } else {
        amountEthereum.value = null;
      }
    };

    const maxValue = () => {
      amountEthereum.value = etherBalance.value;
      amountWipePaper.value = etherBalance.value * exchangeRate.value;
    };

    const buy = () => {
      alert(
        `You wanted to buy ${amountWipePaper.value} WipePapers This feature is under construction.`
      );
    };

    onMounted(async () => {
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

    const confirmationDialog = Swal.mixin({
      customClass: {
        confirmButton:
          "rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm",
        cancelButton:
          "rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",
      },
      buttonsStyling: false,
    });

    const openConfirmationDialog = () => {
      if (amountEthereum.value > 0 && amountWipePaper.value > 0) {
        confirmationDialog.fire({
          title: "Confirmation needed",
          html: `Are you sure you want to buy <b>${amountWipePaper.value}</b> WipePaper with <b>${amountEthereum.value}</b> ETH?`,
          icon: "success",
          confirmButtonText: "Confirm & Buy",
          showCancelButton: true,
          cancelButtonText: "Cancel",
          reverseButtons: true,
        });
      } else {
        confirmationDialog.fire({
          position: "bottom-end",
          icon: "warning",
          title: "You have enter the amount of WipePaper you want to purchase",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    };

    return {
      etherBalance,
      amountEthereum,
      amountWipePaper,
      maxValue,
      updateEthereum,
      updateWipePaper,
      buy,
      // buyWipePaper,
      openConfirmationDialog,
    };
  },
});
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

.wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
}

.hero {
  position: absolute;
  text-align: center;
  width: 100%;
  margin-top: 90px;
}

#particle-js {
  position: relative;
  z-index: 1;
}
</style>
