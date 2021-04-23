import { computed, defineComponent, onMounted, ref } from "vue";
import axios from "axios";
import ApexCharts from "apexcharts";

export default defineComponent({
  setup() {
    const menu = ref(false);
    var chart = ref(null);
    var chart2 =  ref(null);
    var options = {};
    var options2 = {};
    var rightValues = [];
    var predicted = [];

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
      ethData().then(()=>{
        var array = [];
        for (let index = 0; index < rightValues.length; index++) {
          array.push([rightValues[index].date,rightValues[index].value]);
         
        }
  
        var array2 = [];
        for (let index = 0; index < predicted.length; index++) {
          array2.push([
            predicted[index].date,
            predicted[index].value,
          ]);
        }
     
  
        options = {
          series: [
            {
              name:"Price (USD)",
              data: array,
            },
          ],
          chart: {
            id: "area-datetime",
            type: "area",
            height:500,
            width: 500,
            zoom: {
              autoScaleYaxis: true,
            },
          },
          annotations: {
            yaxis: [
              {
                y: 30,
                borderColor: "#999",
                label: {
                  show: true,
                  text: "Support",
                  style: {
                    color: "#fff",
                    background: "#00E396",
                  },
                },
              },
            ],
            xaxis: [
              {
                x: new Date("14 Nov 2012").getTime(),
                borderColor: "#999",
                yAxisIndex: 0,
                label: {
                  show: true,
                  text: "Rally",
                  style: {
                    color: "#fff",
                    background: "#775DD0",
                  },
                },
              },
            ],
          },
          dataLabels: {
            enabled: false,
          },
          markers: {
            size: 0,
            style: "hollow",
            color:'black',
          },
          xaxis: {
            type: "datetime",
            min: rightValues[0].date,
            tickAmount: 2,
          },
          yaxis: {
            min: 600,
            max:5000,
          },
          tooltip: {
            x: {
              format: "dd MMM yyyy",
            },
          },
          fill: {
            colors: ['#F44336', '#E91E63', '#9C27B0'],
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 100],
            },
          },
          theme: {
            mode: 'dark', 
            palette: 'palette5', 
            monochrome: {
                enabled: false,
                color: '#255aee',
                shadeTo: 'light',
                shadeIntensity: 0.65
            },
        }
        };
        options2 = {
  
            series: [{
            name:"Price (USD)",
            data: array2
          }],
            chart: {
            id: 'area-datetime',
            type: 'area',
            height: 500,
            width:500,
            zoom: {
              autoScaleYaxis: true
            }
          },
          annotations: {
            yaxis: [{
              y: 30,
              borderColor: '#999',
              label: {
                show: true,
                text: 'Support',
                style: {
                  color: "black",
                  background: '#00E396'
                }
              }
            }],
            xaxis: [{
              x: new Date('14 Nov 2012').getTime(),
              borderColor: '#999',
              yAxisIndex: 0,
              label: {
                show: true,
                text: 'Rally',
                style: {
                  color: "black",
                  background: '#775DD0'
                }
              }
            }]
          },
          dataLabels: {
            enabled: false
          },
          markers: {
            size: 0,
            style: 'hollow',
          },
          xaxis: {
            type: 'datetime',
            min: predicted[0].date,
          },
           yaxis: {
              min:600,
              max:5000,
          },
          tooltip: {
            x: {
              format: 'dd MMM yyyy',
              color:'black',
            }
          },
          fill: {
            colors: ['#F44336', '#E91E63', '#9C27B0'],
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.7,
              opacityTo: 0.9,
              stops: [0, 100]
            }
          },
          theme: {
            mode: 'dark', 
            palette: 'palette5', 
            monochrome: {
                enabled: false,
                color: '#255aee',
                shadeTo: 'light',
                shadeIntensity: 0.65
            },
        }
        };
        
        chart.value = new ApexCharts(document.querySelector("#chart"), options);
        chart2.value = new ApexCharts(
          document.querySelector("#chart2"),
          options2
        );
        chart.value.render();
        chart2.value.render();
       })
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
    const ethData = async () => {
      const response = await axios.get(
        `https://ml.aaronschweig.dev/technical/`
      );
      rightValues = response.data[0];
      predicted = response.data[1];
      
      return response.data;
    };
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
      chart,
      chart2
    };
  },
});