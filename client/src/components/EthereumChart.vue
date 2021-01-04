<template>
  <div>
    <apexchart type="area" :options="chartOptions" :series="chartSeries"></apexchart>
    <div class="mt-4 grid grid-cols-3 gap-8">
      <button
        class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
      >
        1 Year
      </button>
      <button
        class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
      >
        3 Years
      </button>
      <button
        class="bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-bold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
      >
        All
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

const chartOptions = {
  chart: {
    type: "area",
    stacked: false,
    zoom: {
      type: "x",
      enabled: true,
      autoScaleYaxis: true,
    },
    toolbar: {
      autoSelected: "zoom",
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 0,
  },
  title: {
    text: "Ether Price Movement",
    align: "left",
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.5,
      opacityTo: 0,
      stops: [0, 90, 100],
    },
  },
  yaxis: {
    title: {
      text: "Price in USD",
    },
  },
  xaxis: {
    type: "datetime",
  },
  tooltip: {
    shared: false,
  },
};

// TODO: auto update chart

const chartSeries = [
  {
    name: "Ethereum",
    data: [
      {
        x: new Date("2018-02-12").getTime(),
        y: 76,
      },
      {
        x: new Date("2018-02-13").getTime(),
        y: 78,
      },
      {
        x: new Date("2018-02-14").getTime(),
        y: 79,
      },
      {
        x: new Date("2018-02-15").getTime(),
        y: 74,
      },
      {
        x: new Date("2018-02-16").getTime(),
        y: 76,
      },
      {
        x: new Date("2018-02-17").getTime(),
        y: 78,
      },
      {
        x: new Date("2018-02-18").getTime(),
        y: 79,
      },
      {
        x: new Date("2018-02-19").getTime(),
        y: 80,
      },
      {
        x: new Date("2018-02-20").getTime(),
        y: 76,
      },
      {
        x: new Date("2018-02-21").getTime(),
        y: 78,
      },
      {
        x: new Date("2018-02-22").getTime(),
        y: 79,
      },
      {
        x: new Date("2018-02-23").getTime(),
        y: 76,
      },
    ],
  },
];

export default defineComponent({
  setup() {
    return {
      chartOptions,
      chartSeries,
    };
  },
});
</script>
