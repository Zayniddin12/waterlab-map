<template>
  <div style="background: #f5f9fa; min-height: 100vh">
    <div
      class="
        page-title
        flex
        items-center
        gap-x-20
        md:flex-row
        flex-col
        sm:!text-[26px]
        !text-lg
      "
    >
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
        {{ $t('protocols') }} - {{ data?.[0]?.region }}
      </div>
      <span class="sm:!text-[26px] sm:!text-lg">{{ data?.[0]?.district }}</span>
    </div>
    <div style="padding: 24px">
      <div class="table-container">
        <el-table :data="data" style="width: 100%">
          <el-table-column label="№" type="index" width="50"> </el-table-column>
          <el-table-column
            prop="enterprise_title"
            :label="$t('organization')"
            width="360"
          >
          </el-table-column>
          <el-table-column
            prop="region"
            :label="$t('region')"
            align="center"
            width="300"
          >
          </el-table-column>
          <el-table-column prop="datetime" align="center" :label="$t('date')">
            <template #default="{ row }">
              {{ $moment(row.datetime, 'DD MMMM YYYY') }}
            </template>
          </el-table-column>
          <el-table-column align="right" :label="$t('actions')">
            <template #default="{ row }">
              <NuxtLink :to="`/protocols/${row.id}`">
                <svg
                  style="margin-left: auto"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.06 11.8201L20.9 11.6001C20.62 11.2601 20.29 10.9901 19.91 10.7901C19.4 10.5001 18.82 10.3501 18.22 10.3501H5.76995C5.16995 10.3501 4.59995 10.5001 4.07995 10.7901C3.68995 11.0001 3.33995 11.2901 3.04995 11.6501C2.47995 12.3801 2.20995 13.2801 2.29995 14.1801L2.66995 18.8501C2.79995 20.2601 2.96995 22.0001 6.13995 22.0001H17.86C21.03 22.0001 21.19 20.2601 21.33 18.8401L21.7 14.1901C21.79 13.3501 21.57 12.5101 21.06 11.8201ZM14.39 17.3401H9.59995C9.20995 17.3401 8.89995 17.0201 8.89995 16.6401C8.89995 16.2601 9.20995 15.9401 9.59995 15.9401H14.39C14.78 15.9401 15.09 16.2601 15.09 16.6401C15.09 17.0301 14.78 17.3401 14.39 17.3401Z"
                    fill="#44C891"
                  />
                  <path
                    d="M20.561 8.59643C20.5986 8.97928 20.1833 9.23561 19.8185 9.11348C19.3137 8.94449 18.7824 8.86 18.2299 8.86H5.76988C5.21304 8.86 4.66478 8.95012 4.15322 9.12194C3.79283 9.24298 3.37988 8.99507 3.37988 8.61489V6.66C3.37988 3.09 4.46988 2 8.03988 2H9.21988C10.6499 2 11.0999 2.46 11.6799 3.21L12.8799 4.81C13.1299 5.15 13.1399 5.17 13.5799 5.17H15.9599C19.0856 5.17 20.3069 6.00724 20.561 8.59643Z"
                    fill="#44C891"
                  />
                </svg>
              </NuxtLink>
            </template>
          </el-table-column>
        </el-table>

        <div style="display: flex; justify-content: end; margin-top: 16px">
          <el-pagination
            :current-page.sync="page"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="perPage"
            layout="sizes, prev, pager, next"
            background
            :total="total"
            :current-page="page"
            @current-change="pageChange"
            @size-change="sizeChange"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      isLoading: false,
      page: this.$route.query.page || 1,
      total: undefined,
      perPage: 10,
    }
  },
  methods: {
    pageChange(page) {
      this.page = page
      this.fetch()
    },
    sizeChange(size) {
      this.perPage = size
      this.fetch()
    },
    async fetch() {
      this.isLoading = true

      const params = {
        analysis_type: [1, 6],
        // enterprise: this.$route.query.region,
        district: this.$route.query.district,
        page: this.page,
        page_size: this.perPage,
        region: this.$route.query.region,
      }

      const response = await this.$axios.$get(`/protocols/list/`, {
        params,
      })

      this.total = await response.total
      this.data = await response.results
      this.isLoading = false
    },
  },
  created() {
    this.fetch()
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
  line-height: 125%; /* 32.5px */
  font-size: 26px;
  margin-bottom: 40px;
  background: white;
}

.page-title span {
  color: #305ab6;
  font-style: normal;
  line-height: normal;
  margin-left: 0 !important;
}

@media (max-width: 640px) {
  .page-title {
    margin-bottom: 10px !important;
    font-size: 18px !important;
  }
}
</style>
