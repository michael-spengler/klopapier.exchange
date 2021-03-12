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