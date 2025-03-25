<template>
  <div style="background: #f5f9fa; min-height: 100vh">
    <div class="page-title flex items-center gap-x-20 flex-col md:flex-row">
      <div class="flex items-center gap-x-3">
        <button @click="$router.back()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width="20"
            height="20"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
        </button>
        {{ data?.enterprise_title }}
      </div>
      <span>{{ data.district }}</span>
    </div>
    <div style="padding: 24px">
      <div
        style="
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;
        "
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
            fill="#101010"
          />
          <path
            d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z"
            fill="#101010"
          />
          <path
            d="M12 16.9999C11.87 16.9999 11.74 16.9699 11.62 16.9199C11.5 16.8699 11.39 16.7999 11.29 16.7099C11.2 16.6099 11.13 16.5099 11.08 16.3799C11.03 16.2599 11 16.1299 11 15.9999C11 15.8699 11.03 15.7399 11.08 15.6199C11.13 15.4999 11.2 15.3899 11.29 15.2899C11.39 15.1999 11.5 15.1299 11.62 15.0799C11.86 14.9799 12.14 14.9799 12.38 15.0799C12.5 15.1299 12.61 15.1999 12.71 15.2899C12.8 15.3899 12.87 15.4999 12.92 15.6199C12.97 15.7399 13 15.8699 13 15.9999C13 16.1299 12.97 16.2599 12.92 16.3799C12.87 16.5099 12.8 16.6099 12.71 16.7099C12.61 16.7999 12.5 16.8699 12.38 16.9199C12.26 16.9699 12.13 16.9999 12 16.9999Z"
            fill="#101010"
          />
        </svg>
        {{ $t('info') }}
      </div>
      <div class="info-wrapper" style="margin-bottom: 30px">
        <div class="info" v-for="(item, index) in infoProtocol" :key="index">
          <h4 class="info-title">{{ item.title }}</h4>
          <p class="info-text">{{ item.text }}</p>
        </div>
      </div>
      <div
        style="
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 30px;
        "
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
            fill="#101010"
          />
          <path
            d="M12 13.75C11.59 13.75 11.25 13.41 11.25 13V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75Z"
            fill="#101010"
          />
          <path
            d="M12 16.9999C11.87 16.9999 11.74 16.9699 11.62 16.9199C11.5 16.8699 11.39 16.7999 11.29 16.7099C11.2 16.6099 11.13 16.5099 11.08 16.3799C11.03 16.2599 11 16.1299 11 15.9999C11 15.8699 11.03 15.7399 11.08 15.6199C11.13 15.4999 11.2 15.3899 11.29 15.2899C11.39 15.1999 11.5 15.1299 11.62 15.0799C11.86 14.9799 12.14 14.9799 12.38 15.0799C12.5 15.1299 12.61 15.1999 12.71 15.2899C12.8 15.3899 12.87 15.4999 12.92 15.6199C12.97 15.7399 13 15.8699 13 15.9999C13 16.1299 12.97 16.2599 12.92 16.3799C12.87 16.5099 12.8 16.6099 12.71 16.7099C12.61 16.7999 12.5 16.8699 12.38 16.9199C12.26 16.9699 12.13 16.9999 12 16.9999Z"
            fill="#101010"
          />
        </svg>
        {{ $t('protocol_standard') }}
      </div>
      <div class="table-container" style="margin-top: 30px">
        <el-table :data="data.protocol_elements" style="width: 100%">
          <el-table-column
            prop="element"
            :label="$t('indicators_or_components')"
            width="360"
          >
          </el-table-column>
          <el-table-column
            prop="element_description"
            :label="$t('units_of_measurement')"
            align="center"
            width="360"
          >
          </el-table-column>
          <el-table-column
            prop="analysis_type.name"
            :label="$t('standard')"
            align="center"
          >
            <template #default="{ row }">
              <span class="badge-blue">
                {{ row?.normative || 0.0 }}
              </span>
            </template>
          </el-table-column>
          <el-table-column prop="datetime" align="center" :label="$t('result')">
            <template #default="{ row }">
              <span :style="{ background: row?.color }" class="badge-color">
                {{ row?.value || 0.0 }}
              </span>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      page: this.$route.query.page || 1,
      total: undefined,
      perPage: 10,
      data: [],
    }
  },
  methods: {
    isValueInNormative(value, normative) {
      if (!normative) return false

      const [minNorm, maxNorm] = normative.split('-').map(Number)

      return value >= minNorm && value <= maxNorm
    },
    async fetch() {
      this.isLoading = true

      const data = await this.$axios.$get(
        `/protocols/${this.$route.params.id}/public/`
      )
      this.data = await data
      this.isLoading = false
    },
  },
  created() {
    this.fetch()
  },
  computed: {
    infoProtocol() {
      return [
        {
          title: 'Тип источника:',
          text: this.data?.water_source_text || 'Не указан',
        },
        {
          title: 'Название объекта и адрес:',
          text: this.data?.water_source || 'Не указан',
        },
        {
          title: 'Точка отбора пробы:',
          text: this.data?.place || 'Не указан',
        },
        {
          title: 'Предприятия:',
          text: this.data?.enterprise_title || 'Не указан',
        },
        {
          title: 'Область:',
          text: this.data?.region || 'Не указан',
        },
        {
          title: 'Район:',
          text: this.data?.district || 'Не указан',
        },
        {
          title: 'Дополнительные сведения:',
          text: this.data?.description || 'Не указан',
        },
        {
          title: 'Дату отбора:',
          text:
            this.$moment(this.data?.datetime, 'DD MMMM YYYY') || 'Не указан',
        },
      ]
    },
  },
}
</script>

<style>
.table-container {
  background: white;
  padding: 20px;
  border-radius: 12px;
}

.table-container .el-table__header tr th {
  background: #f0f3f3;
  border-bottom: none;
}

.table-container .el-table__body tr th {
  border-bottom: 1px solid;
}

.table-container .el-table__header tr th.el-table_1_column_1 {
  border-radius: 6px 0 0 6px;
}

.table-container .el-table__header tr th.el-table_1_column_6 {
  border-radius: 0 6px 6px 0;
}

.table-container .el-table__header tr th .cell {
  color: #000;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.table-container .el-table__body tr td.el-table__cell {
  border-bottom-color: #f5f9fa;
}

.table-container .el-table__body tr th.el-table_1_column_1 .cell {
  color: #03151a;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.el-pagination .el-select .el-input {
  width: 140px;
}

.table-container .el-input__inner {
  border-radius: 6px;
  background: #f0f3f3;
  border: none;
  height: 32px;
  color: #03151a;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.table-container .el-select .el-input .el-select__caret {
  color: #828f91;
}

.table-container .el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  margin: 0 2px;
  color: #aab9bd;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  background: transparent;
  border-radius: 6px;
}

.table-container
  .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background: #00d1b2;
}

.page-title {
  color: #262626;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 125%; /* 32.5px */
  padding: 16px 24px;
  background: white;
}

.page-title span {
  color: #305ab6;
  font-style: normal;
  line-height: normal;
}

@media (max-width: 640px) {
  .page-title {
    font-size: 18px !important;
  }
}

.info-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: end;
}

.info .info-title {
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 30%;
  text-align: right;
}

.info .info-text {
  color: #03151a;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 70%;
}

.badge-green {
  border-radius: 6px;
  background: #00d1b2;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 5px 15px;
}

.badge-color {
  border-radius: 6px;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 5px 15px;
}

.badge-blue {
  border-radius: 6px;
  background: #305ab6;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 5px 15px;
}
</style>
