<template>
  <div/>
</template>

<script>
import { fetchIndexChart, fetchSaleNum } from '@/api/chart'

export default {
  name: 'DashboardAdmin',
  components: {
  },
  data() {
    return {
      option: {
        legend: {
          data: []
        },
        series: {
          data: []
        }
      },
      sales: 0,
      num: 0
    }
  },
  created() {
  },
  methods: {
    getChart() {
      fetchIndexChart().then(response => {
        if (response.data.code === 20000) {
          const temp = Object.assign({}, this.option)
          temp.series.data = response.data.data
          const legendData = []
          for (const v of temp.series.data) {
            legendData.push(v.name)
            this.sales += v.value
          }
          temp.legend.data = legendData
          this.option = temp
        }
      })
    },
    getSaleNum() {
      fetchSaleNum().then(response => {
        this.num = response.data.data
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
