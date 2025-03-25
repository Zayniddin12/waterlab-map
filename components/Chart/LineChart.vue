<template>
  <div>
    <div :class="!chart.series[0].data.length ? 'h-[35vh]' : ''" class="chart">
      <h2 class="chart__title">
        <span>{{ chart.series[0].name }}</span>
        {{ chart.subtitle }}
      </h2>
      <span class="line" />
      <template v-if="chart.series[0].data.length">
        <apexchart
          class="chart-nodata"
          type="area"
          :options="chart?.options"
          :series="chart?.series"
        ></apexchart>
      </template>
      <template v-else>
        <div class="heading z-99 block heading-hello">
          <div class="flex justify-center">
            <img
              src="../../assets/nodata.svg"
              alt=""
              width="110"
              height="110"
            />
          </div>
          <h3
            class="font-medium font-bold leading-130 font-[Fira Sans] text-center text-xl"
          >
            Нет данных
          </h3>
          <p class="text-center text-sm opacity-75">Попробуйте обновить</p>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    chart: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: () => {},
    },
    length: {
      type: Number,
      default: () => {},
    },
  },
}
</script>

<style scoped>
.chart {
  border-radius: 6px;
  border: 1px solid #dee3e9;
  background: transparent;
  margin-bottom: 16px;
  height: 35vh;
  box-shadow: unset;
  margin-top: 20px;
}
.chart__title {
  padding-block: 10px;
  padding-left: 12px;
  color: #5b7293;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  line-height: 130%;
}
.chart__title span {
  color: #25272b;
  font-weight: 500;
}
.line {
  display: block;
  width: 99%;
  height: 1px;
  background: #dee3e9;
}

.heading-hello {
  color: #25272b !important;
  display: flex;
  flex-flow: column;
  justify-content: center;
}
@media screen and (max-width: 1300px) {
  .chart {
    height: 33vh;
  }
}
.id-1,
.id-2,
.id-3,
.id-4,
.id-5 {
  display: none;
}
</style>
