<template>
  <div v-if="pending">
    <loader />
  </div>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else class="wrapper">
    <div :class="pending3 ? 'loader_wrap2' : ''">
      <div :class="pending3 ? 'spinner' : ''"></div>
    </div>
    <template v-if="regions && regions.results && regions.results.length">
      <header class="header">
        <div class="marquee-container">
          <div class="marquee">
            <div v-for="item in 100" :key="item">
              {{ $t('the_site_is_in_test_mode') }}
            </div>
          </div>
        </div>
        <div class="header__top">
          <div class="container px-4 flex justify-between items-center">
            <div class="">
              <Logo />
              <span
                ><svg
                  width="121"
                  height="78"
                  viewBox="0 0 121 78"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.08"
                    d="M121 47.7083C121 87.6389 85.9475 124.444 36.4826 124.444C11.0384 124.444 -10.8471 114.549 -25.7934 99.6181C-33.0886 92.5 -38.7824 83.8195 -42.5189 74.7917C-51.0596 54.3056 -50.17 30.3472 -35.9355 8.81946L15.6646 -69.6528L21.7143 -78.8542C22.6039 -80.243 24.9171 -80.243 25.8067 -78.8542L31.8564 -69.6528L37.0164 -61.8403L67.6206 -14.9653L85.2358 11.7708L90.2179 19.4097C91.2854 20.9722 92.1751 22.7084 93.0648 24.2709C97.1572 32.0833 99.1144 40.2431 99.1144 48.2292C99.1144 75.4861 77.0509 100.486 45.2012 104.132C44.1336 104.306 43.244 104.306 42.1764 104.306C41.2867 104.306 40.3971 104.479 39.3295 104.479C38.4398 104.479 37.5502 104.479 36.8385 104.479C35.9488 104.479 33.9916 104.479 33.8136 104.479V92.6736V92.5L63.1723 46.4931H30.0771V74.7917C30.0771 85.7292 24.0274 95.2778 13.3515 100.66C8.90323 99.0972 4.81081 97.0139 0.896324 94.5834C-0.171265 93.8889 -1.41679 93.0208 -2.48438 92.3264C-12.6265 85.0347 -20.0996 74.6181 -23.4803 63.1597C-24.7258 58.8195 -25.6155 54.3056 -25.7934 49.7917C-25.9713 39.7222 -23.4803 29.3056 -17.0747 19.5833L15.4867 -30.0694L23.4936 -42.2222V-37.3611C23.4936 -24.6875 19.5791 -12.1875 12.6398 -1.24999L-5.33128 25.6597C-9.4237 32.0833 -11.7368 38.6806 -12.0927 45.2778C-12.2706 48.5764 -12.0927 51.875 -11.7368 55C-9.4237 68.0208 -0.52713 79.8264 12.2839 86.4236C14.4191 83.4722 15.8426 79.8264 16.1984 76.007V33.8195H78.4744V46.3195L50.7171 90.7639C71.5351 85.2083 85.4137 67.5 85.4137 48.4028C85.4137 45.1042 85.0579 41.8056 84.1682 38.3333C83.1006 33.9931 81.1434 30 78.6523 25.8333L77.5847 24.0972L55.6992 -8.71527L36.6605 -37.8819L28.6536 -50.0347L24.5612 -56.2847C24.2053 -56.9792 23.1377 -56.9792 22.604 -56.2847L-24.3699 15.4167C-32.9106 28.4375 -35.7575 42.3264 -33.9782 55.8681C-33.0886 62.8125 -30.7755 69.5833 -27.5727 75.8333C-24.3699 81.9097 -20.2775 87.4653 -15.1175 92.3264C-14.4058 93.0208 -13.694 93.7153 -12.9823 94.4097C-8.71197 98.0556 -3.90782 101.354 1.43012 104.132C1.78598 104.306 2.14184 104.479 2.4977 104.653C8.7253 107.778 15.3088 109.861 22.604 111.25C27.0522 111.944 31.6784 112.465 36.4826 112.465H36.6605C77.9406 112.292 107.299 81.5625 107.299 48.2292C107.299 37.2917 104.096 26.1805 97.1572 15.4167L75.2716 -18.2639L36.4826 -77.4653L28.4757 -89.618L23.1377 -97.7778C32.924 -97.7778 42.1764 -93.0903 47.3364 -85.2778L87.193 -24.8611L109.257 8.64584C117.441 21.3195 121 34.8611 121 47.7083Z"
                    fill="#5685EC"
                  />
                </svg>
              </span>
            </div>

            <!--    Change Language   -->
            <div id="langs" class="relative">
              <button
                @click="toggleDropdown"
                class="
                  flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  bg-white
                  border
                  rounded
                  shadow-md
                  hover:bg-gray-100
                "
              >
                <div class="flex items-center gap-x-2">
                  <img
                    :src="currentFlag"
                    loading="lazy"
                    alt="Current Language"
                    class="size-6 object-contain"
                  />
                  <p class="capitalize">{{ currentLocale }}</p>
                </div>

                <div
                  :style="rotateStyle"
                  class="transition-transform duration-300 ml-3"
                >
                  <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </button>

              <div
                v-show="isOpen"
                class="
                  absolute
                  right-0
                  mt-2
                  bg-white
                  border
                  rounded
                  shadow-md
                  w-36
                  !transition-all
                  open-modal
                "
                @click.away="closeDropdown"
                :class="{
                  'opacity-0 scale-95': !isOpen,
                  'opacity-100 scale-100': isOpen,
                }"
              >
                <div
                  v-for="(flag, locale) in flags"
                  :key="locale"
                  @click="changeLanguage(locale)"
                  class="
                    flex
                    items-center
                    px-4
                    py-2
                    cursor-pointer
                    hover:bg-gray-100
                  "
                >
                  <img :src="flag" alt="Flag" class="w-6 h-6 mr-3" />
                  <p class="capitalize">{{ locale }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="header__bottom">
          <div
            class="
              container
              flex
              lg:items-end
              items-start
              !justify-start
              gap-x-10
              lg:flex-row
              flex-col
              !w-full
              md:px-4
              px-0
            "
          >
            <div
              class="
                flex
                items-center
                justify-around
                gap-x-10
                lg:w-1/2
                w-full
                px-4
                sm:px-10
                lg:px-0 lg:mt-0
                mt-3
                sm:flex-row
                flex-col
              "
            >
              <label
                class="
                  flex flex-col
                  gap-2
                  items-start
                  justify-between
                  lg:!w-1/2
                  w-full
                "
                >{{ $t('select_country') }}

                <el-select
                  v-if="
                    regionsList &&
                    regionsList.results &&
                    regionsList.results.length
                  "
                  v-model="regionId"
                  placeholder="Select Region"
                  class="w-full"
                >
                  <el-option
                    v-for="(item, index) in regionsList.results"
                    :class="{ hidden: index === 0 }"
                    :key="item.title"
                    :label="$i18n.locale === 'uz' ? item.name_uz : item.name_ru"
                    :value="item.id"
                    class="w-full"
                  >
                  </el-option>
                </el-select>
              </label>
              <label
                class="
                  flex flex-col
                  gap-2
                  items-start
                  justify-between
                  lg:!w-1/2
                  w-full
                  sm:mt-0
                  mt-3
                "
                >{{ $t('select_area') }}
                <el-select
                  v-model="districtId"
                  placeholder="Tanlang"
                  :disabled="!isDistrictEnabled"
                  class="w-full"
                >
                  <el-option
                    v-for="item in districtList.results"
                    :key="item.name"
                    :label="item.name"
                    :value="item.id"
                    class="w-full"
                  >
                  </el-option>
                </el-select>
              </label>
            </div>

            <div
              class="
                flex
                lg:items-end
                px-4
                sm:px-10
                lg:px-0 lg:mt-0
                mt-5
                sm:flex-row
                flex-col
              "
            >
              <!--              <label-->
              <!--                class="-->
              <!--                  flex flex-col-->
              <!--                  gap-2-->
              <!--                  items-start-->
              <!--                  justify-between-->
              <!--                  lg:w-[100px]-->
              <!--                  w-full-->
              <!--                "-->
              <!--                >{{ dayTitle }}-->
              <!--                <date-picker-->
              <!--                  v-if="selected === 'Oy bo‘yicha'"-->
              <!--                  v-model="month"-->
              <!--                  type="month"-->
              <!--                  :range="true"-->
              <!--                  :placeholder="dayPLaceholder"-->
              <!--                  :disabled-date="disabledDate"-->
              <!--                  :class="selected === 'Oy bo‘yicha' ? 'oy' : 'chorak'"-->
              <!--                  class="!w-full"-->
              <!--                >-->
              <!--                  <template v-slot:footer>-->
              <!--                    <el-checkbox v-model="wholeyear">{{-->
              <!--                      $t('during_the_year')-->
              <!--                    }}</el-checkbox>-->
              <!--                  </template>-->
              <!--                </date-picker>-->
              <!--                <date-picker-->
              <!--                  v-else-->
              <!--                  ref="datePicker"-->
              <!--                  type="year"-->
              <!--                  v-model="year"-->
              <!--                  :disabled-date="disabledDate"-->
              <!--                  :placeholder="dayPLaceholder"-->
              <!--                  class="!w-full"-->
              <!--                >-->
              <!--                  <template v-slot:footer>-->
              <!--                    <ul class="quarter">-->
              <!--                      <li-->
              <!--                        @click="handleQuarter(item.id)"-->
              <!--                        v-for="item in quarters"-->
              <!--                        :key="item.id"-->
              <!--                        :class="{ fullActive: item.isSelected }"-->
              <!--                      >-->
              <!--                        {{ item.title }}-->
              <!--                      </li>-->
              <!--                    </ul>-->
              <!--                    <el-checkbox v-model="getFullQuarter"-->
              <!--                      >Выберите диапазон-->
              <!--                    </el-checkbox>-->
              <!--                    <span class="line" />-->
              <!--                    <el-button class="fullActive" @click="chooseQuarter()"-->
              <!--                      >Выбирать-->
              <!--                    </el-button>-->
              <!--                  </template>-->
              <!--                </date-picker>-->
              <!--              </label>-->
              <el-checkbox class="w-full md:mt-0 mt-3" v-model="showEnterprice"
                >{{ $t('show_laboratories') }}
              </el-checkbox>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div v-if="pending2">
          <loader />
        </div>
        <yandex-map
          :key="yandexMapKey"
          style="height: 100vh; width: 100vw"
          :center="mapCenter"
          :zoom="zoomId"
          @created="mapCreated"
          @destroy="mapDestroy"
        >
        </yandex-map>
      </div>
      <!-- <CoolLightBox :items="items" :index="index" @close="index = null">
      </CoolLightBox> -->
    </template>

    <el-dialog title="Tips" :visible.sync="dialogVisible" width="85%">
      <span slot="title">
        <div class="modal_title">
          <div class="chart">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 19H20"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 15L8 9L12 11L16 6L20 10"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="flex items-center">
            <h2>
              {{ $t('area_indicators') }}<span class="minus">-</span>
              {{ region }}
            </h2>
            <span class="year">{{ getYear(year) }}</span>
          </div>
        </div>
        <hr />
      </span>
      <span slot="default">
        <el-row :gutter="16" v-if="isEmptyList.length">
          <el-col
            v-for="(chart, index) in charts"
            :key="index"
            :xs="24"
            :sm="12"
            :lg="8"
          >
            <div>
              <line-chart
                v-if="chart?.row?.length || isNullValue(chart, index)"
                v-bind="{ index }"
                :chart="returnToCharts(chart)"
                :length="chart?.row?.length"
              />
              <div
                v-else
                :class="`id-${index}`"
                class="
                  heading heading-hello
                  absolute
                  transform
                  -translate-x-2/4
                  left-1/2
                "
              >
                <div class="flex justify-center">
                  <img
                    src="../assets/nodata.svg"
                    alt=""
                    width="110"
                    height="110"
                  />
                </div>
                <h3
                  class="
                    font-medium font-bold
                    leading-130
                    font-[Fira
                    Sans]
                    text-center text-xl
                  "
                >
                  Нет данных
                </h3>
                <p class="text-center text-sm opacity-75 max-w-md">
                  Проверьте соединение с интернетом, попробуйте обновить или
                  зайдите на данную страницу через некоторое время
                </p>
              </div>
            </div>
          </el-col>
        </el-row>
        <div
          v-else
          class="
            heading heading-hello
            absolute
            transform
            -translate-x-2/4
            left-1/2
          "
        >
          <div class="flex justify-center">
            <img src="../assets/nodata.svg" alt="" width="110" height="110" />
          </div>
          <h3
            class="
              font-medium font-bold
              leading-130
              font-[Fira
              Sans]
              text-center text-xl
            "
          >
            Нет данных
          </h3>
          <p class="text-center text-sm opacity-75 max-w-md">
            Проверьте соединение с интернетом, попробуйте обновить или зайдите
            на данную страницу через некоторое время
          </p>
        </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import tashkent from '@/assets/tashkent-districts.json'
import DatePicker from 'vue2-datepicker'
import CoolLightBox from 'vue-cool-lightbox'
import Loader from '@/components/Loader.vue'

import 'vue2-datepicker/index.css'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
import LineChart from '~/components/Chart/LineChart.vue'

export default {
  components: {
    LineChart,
    DatePicker,
    CoolLightBox,
    Loader,
  },
  async fetch() {
    let newYear = this.year
    if (typeof newYear === 'object') {
      let date = new Date(this.year)
      newYear = date.getFullYear()
    }
    this.pending = true
    // https://api.waterlab.uzsuv.uz/api/v1/regions/regions-only/?page_size=16
    await this.$axios
      .$get(`regions/?page_size=20&source_type=1&year=${newYear}`, {
        params: {
          months: this.monthString,
        },
      })

      .then((res) => {
        this.regions = res
        this.pending = false
      })

    await this.$axios.$get(`regions/regions-only/?page_size=16`).then((res) => {
      this.regionsList = res
      this.pending = false
      this.regionsList.results.unshift({
        id: 0,
        name: 'Tanlang',
        name_ru: 'Выбирать',
        name_uz: 'Tanlang',
        code: 0,
      })
    })
  },

  data: () => ({
    isOpen: false,
    flags: {
      uz: require('@/assets/language/uzbek.svg'),
      ru: require('@/assets/language/russian.svg'),
    },
    isEmptyList: [],
    region: undefined,
    pending3: false,
    mapCenter: [42.032638, 64.573418],
    zoomId: 6.5,
    yandexMapKey: 1,
    getFullQuarter: undefined,
    isInnerDisctrict: null,
    isInnerDisctrict2: null,
    monthString: '1,2,3,4,5,6,7,8,9,10,11,12',
    quarters: [
      { id: 1, title: '1-chorak', isSelected: false },
      { id: 2, title: '2-chorak', isSelected: false },
      { id: 3, title: '3-chorak', isSelected: false },
      { id: 4, title: '4-chorak', isSelected: false },
    ],
    year: 2023,
    dayTitle: 'Месяц и год',
    dayPLaceholder: 'Квартал (и выберите год)',
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
      },
      title: {
        display: false,
        text: '',
        fontSize: 24,
        fontColor: 'red',
      },
      tooltips: {
        backgroundColor: '#00d1b2',
      },
    },
    months: [
      'Январь',
      'Февраль',
      'Март',
      'Апрель',
      'Май',
      'Июнь',
      'Июль',
      'Август',
      'Сентябрь',
      'Октябрь',
      'Ноябрь',
      'Декабрь',
    ],
    selected: 'Oy bo‘yicha',
    items: [],
    option: 'Oy bo‘yicha',
    option2: 'Chorak bo‘yicha',
    enterpriceDistricts: undefined,
    charts: undefined,
    options: [
      {
        title: 'Все',
        id: '',
      },
      {
        title: 'Распределительная сеть',
        id: 1,
      },
      {
        title: 'Водоводы',
        id: 2,
      },
      {
        title: 'Источники поверхностные',
        id: 3,
      },
      {
        title: 'Источники подземные',
        id: 4,
      },
    ],
    value: '',
    map: null,
    map_data: [],
    mapObjectManager: null,
    arrayRegion: tashkent,
    color: ['#808080'],
    showEnterprice: false,
    placeMarks: [],
    wholeyear: null,
    radio: null,
    pending2: true,
    month: new Date(),
    checkbox: null,
    regionId: 0,
    districtId: 0,
    isDistrictEnabled: false,
    regions: [],
    regionsList: [],
    districtList: {
      results: [
        {
          id: 0,
          name: ' ',
          name_ru: 'Выбирать',
          name_uz: 'Tanlang',
          code: 0,
        },
      ],
    },
    pending: true,
    dialogVisible: false,
  }),

  created() {
    this.dayPLaceholder = this.$t('quarter_and_select_year')
    this.dayTitle = this.$t('month_and_year')
  },

  computed: {
    currentLocale() {
      return this.$i18n.locale
    },
    currentFlag() {
      return this.flags[this.currentLocale]
    },

    rotateStyle() {
      return {
        transform: this.isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
      }
    },

    translatedAreaIndicators() {
      return this.$t('area_indicators')
    },
  },

  methods: {
    // Language
    toggleDropdown() {
      this.isOpen = !this.isOpen
    },
    closeDropdown() {
      this.isOpen = false
    },
    changeLanguage(locale) {
      this.$i18n.locale = locale
      localStorage.setItem('language', locale)
      this.closeDropdown()
      this.yandexMapKey++
    },
    handleClickOutside(event) {
      if (event.target.closest('#langs')?.id === 'langs') return
      if (this.$el.contains(event.target)) {
        this.closeDropdown()
      }
    },
    getDistrict() {
      this.$axios
        .$get(`regions/districts-only/${this.regionId}`, {
          params: {
            page_size: 40,
          },
        })
        .then((res) => {
          console.log('res', res)
          this.districtList = res
          this.pending = false
          this.isDistrictEnabled = true
          this.districtList.unshift({
            id: 0,
            name: 'Tanlang',
            name_ru: 'Выбирать',
            name_uz: 'Tanlang',
            code: 0,
          })
        })
    },
    getYear(year) {
      let y = year
      if (typeof year === 'object') {
        let date = new Date(year)
        y = date.getFullYear()
      }
      return y
    },
    chooseQuarter() {
      let month = []
      this.quarters
        .filter((el) => el.isSelected)
        .forEach((item) => {
          switch (item.id) {
            case 1:
              month.push(1, 2, 3)
              break
            case 2:
              month.push(4, 5, 6)
              break
            case 3:
              month.push(7, 8, 9)
              break
            case 4:
              month.push(10, 11, 12)
              break
          }
        })

      this.monthString = month.join()

      const datePicker = this.$refs.datePicker
      datePicker.handleClickOutSide(event)
    },
    getMonthNumber(dateString) {
      const date = new Date(dateString)
      return date.getMonth() + 1
    },
    getPlaceMarks() {
      for (const index in this.enterpriceDistricts) {
        var myPlacemarkWithContent = new ymaps.Placemark(
          [
            this.enterpriceDistricts[index].latitude,
            this.enterpriceDistricts[index].longtitude,
          ],
          {
            hintContent: this.enterpriceDistricts[index].title,
            balloonContent: `<div class="" ref="modal" data-modal="123">
                      <div class="modal__header">
                        <div class="modal__icon">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 47 46"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M27.4841 3.8335C28.2119 3.8335 28.8133 4.37429 28.9085 5.07594L28.9216 5.271V9.5835H38.9841C39.778 9.5835 40.4216 10.2271 40.4216 11.021V40.7293C40.4216 41.5232 39.778 42.1668 38.9841 42.1668H33.2341C32.4402 42.1668 31.7966 41.5232 31.7966 40.7293V35.4585H27.9633V40.7293C27.9633 41.5232 27.3197 42.1668 26.5258 42.1668H20.7758C19.9819 42.1668 19.3383 41.5232 19.3383 40.7293V11.021C19.3383 10.2271 19.9819 9.5835 20.7758 9.5835H26.0466V6.7085H8.79663V40.7293C8.79663 41.5232 8.15304 42.1668 7.35913 42.1668C6.63138 42.1668 6.02994 41.626 5.93475 40.9244L5.92163 40.7293V5.271C5.92163 4.54325 6.46243 3.94181 7.16407 3.84662L7.35913 3.8335H27.4841ZM37.5466 12.4585H22.2133V39.2918H25.0883V34.021C25.0883 33.2271 25.7319 32.5835 26.5258 32.5835H33.2341C34.028 32.5835 34.6716 33.2271 34.6716 34.021V39.2918H37.5466V12.4585ZM15.505 32.5835V36.4168H11.6716V32.5835H15.505ZM28.9216 26.8335V30.6668H25.0883V26.8335H28.9216ZM34.6716 26.8335V30.6668H30.8383V26.8335H34.6716ZM15.505 26.8335V30.6668H11.6716V26.8335H15.505ZM28.9216 21.0835V24.9168H25.0883V21.0835H28.9216ZM34.6716 21.0835V24.9168H30.8383V21.0835H34.6716ZM15.505 21.0835V24.9168H11.6716V21.0835H15.505ZM15.505 15.3335V19.1668H11.6716V15.3335H15.505ZM28.9216 15.3335V19.1668H25.0883V15.3335H28.9216ZM34.6716 15.3335V19.1668H30.8383V15.3335H34.6716ZM15.505 9.5835V13.4168H11.6716V9.5835H15.505Z"
                              fill="#5685EC"
                            />
                          </svg>
                        </div>
                        <div class="modal__title">${
                          this.enterpriceDistricts[index].title || '-'
                        }</div>
                      </div>
                      <div class="modal__body">
                        <div class="modal__subtitle">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="10" cy="10" r="7.5" stroke="#3C73E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                          <circle cx="10" cy="8.33325" r="2.5" stroke="#3C73E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M5.13989 15.7074C5.56342 14.2978 6.86135 13.3328 8.33323 13.3333H11.6666C13.1404 13.3327 14.4397 14.3002 14.8616 15.7124" stroke="#3C73E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        Labaratoriya rahbari:</div>
                        <div class="modal__title">${
                          this.enterpriceDistricts[index].ceo || '-'
                        }</div>
                        <div class="modal__subtitle">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.9165 13L12.6576 12.6773C11.8458 12.5613 11.0179 12.6708 10.2642 12.9938L10.1847 13.0279C8.70817 13.6607 7.07306 13.8255 5.49992 13.5V13.5" stroke="#3C73E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6668 2.5C11.2191 2.5 11.6668 2.94772 11.6668 3.5V8.61833C13.4535 9.25066 14.7293 10.8386 14.962 12.7196C15.1946 14.6006 14.344 16.4515 12.7651 17.5H7.23595C5.65607 16.4519 4.80464 14.6005 5.03711 12.7189C5.26958 10.8372 6.54598 9.24879 8.33345 8.61667V3.5C8.33345 2.94771 8.78116 2.5 9.33345 2.5H10.6668Z" stroke="#3C73E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M7.5 2.50016H12.5" stroke="#3C73E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Sinov labaratoriyasi nomi:</div>
                        <div class="modal__title">${
                          this.enterpriceDistricts[index].title_test || '-'
                        }</div>
                        <div class="modal__subtitle">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="10" cy="9.1665" r="2.5" stroke="#3C73E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M-nan -nanL14.7141 13.8806L11.1783 17.4164C10.5275 18.0665 9.47316 18.0665 8.82242 17.4164L5.28575 13.8806C2.68236 11.2771 2.68243 7.05602 5.28591 4.45258C7.8894 1.84914 12.1104 1.84914 14.7139 4.45258C17.3174 7.05602 17.3175 11.2771 14.7141 13.8806L-nan -nanL-nan -nanZ" stroke="#3C73E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Manzil:</div>
                        <div class="modal__title">${
                          this.enterpriceDistricts[index].address || '-'
                        }</div>
                        <div class="modal__subtitle">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.16667 3.3335H6.14594C6.96374 3.3335 7.69916 3.8314 8.00289 4.59071L8.73315 6.41638C8.983 7.041 8.7426 7.7546 8.16574 8.10072V8.10072C7.55408 8.46772 7.31739 9.24997 7.71774 9.84035C8.36963 10.8017 9.19849 11.6305 10.1598 12.2824C10.7502 12.6828 11.5324 12.4461 11.8994 11.8344V11.8344C12.2456 11.2576 12.9592 11.0172 13.5838 11.267L15.4094 11.9973C16.1688 12.301 16.6667 13.0364 16.6667 13.8542V15.8335C16.6667 16.754 15.9205 17.5002 15 17.5002C8.27304 17.0914 2.9088 11.7271 2.5 5.00016C2.5 4.07969 3.24619 3.3335 4.16667 3.3335" stroke="#3C73E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Telefon:</div>
                        <div class="modal__title">${
                          this.enterpriceDistricts[index].phone || '-'
                        }</div>
                        <div class="modal__subtitle">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="2.5" y="4.1665" width="15" height="11.6667" rx="2" stroke="#3C73E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M2.5 5.8335L8.8906 10.0939C9.5624 10.5418 10.4376 10.5418 11.1094 10.0939L17.5 5.8335" stroke="#3C73E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            E-mail:</div>
                        <div class="modal__title">${
                          this.enterpriceDistricts[index].email || '-'
                        }</div>
                        <div class="modal__subtitle">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect x="3.33325" y="4.1665" width="13.3333" height="13.3333" rx="2" stroke="#3C73E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M13.3334 2.5V5.83333" stroke="#3C73E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M6.66667 2.5V5.83333" stroke="#3C73E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M3.33325 9.16667H16.6666" stroke="#3C73E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                              <rect x="6.66675" y="12.5" width="1.66667" height="1.66667" stroke="#3C73E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Qabul kunlari:</div>
                        <div class="modal__title">${
                          this.enterpriceDistricts[index].work_days || '-'
                        }</div>
                      </div>
                      <div class="modal__btns">
                        <button ref="showStats" type="button" id="show_stats"  data-name="${
                          this.enterpriceDistricts[index].title
                        }" data="${
              this.enterpriceDistricts[index].region?.id
            }" class='modal__btn modal__btn--blue'>${
              this.translatedAreaIndicators
            }</button>
                      </div>
                    </div>`,
          },
          {
            iconLayout: 'default#imageWithContent',
            iconImageHref: '/img/icon.png',
            iconImageSize: [40, 44],
            iconImageOffset: [-24, -53],
          }
        )
        this.placeMarks.push(myPlacemarkWithContent)
      }
    },
    async getCharts(index, isDistrict) {
      // this.region = this.regionsList.results?.find(
      //   (el) => el.id === index
      // )?.name_uz
      let newYear = this.year
      if (typeof newYear === 'object') {
        let date = new Date(this.year)
        newYear = date.getFullYear()
      }
      this.pending3 = true
      let location = isDistrict ? 'district_id' : 'region_id'
      await this.$axios
        .$get(
          `protocols/statInMapByDistrict/by-year/${index}/?year=${newYear}`,
          {
            params: {
              months: this.monthString,
            },
          }
        )
        .then((res) => {
          this.charts = res
          this.pending3 = false
        })
        // .catch((err) => console.log(err))
        .finally(() => (this.dialogVisible = true))
    },

    observeEvents(map) {
      map.geoObjects.each((geoObject) => {
        geoObject.balloon.events.add('open', (e1) => {
          document
            .getElementById('show_stats')
            ?.addEventListener('click', () => {
              var button = document.getElementById('show_stats')
              // const index = Number(button.getAttribute('data'))
              // this.region = button.getAttribute('data-name')
              // this.rang = button.getAttribute('data-rang')
              // this.getCharts(index)

              this.$router.push(
                `/protocols/?region=${button.getAttribute('data')}`
              )
              geoObject.balloon.close()
            })

          document
            .getElementById('show_stats_by_district')
            ?.addEventListener('click', () => {
              var button = document.getElementById('show_stats_by_district')
              // const index = Number(button.getAttribute('data'))
              this.region =
                // this.rang = button.getAttribute('data-rang')
                // this.getCharts(index, 'district')

                this.$router.push(
                  `/protocols/?district=${button.getAttribute('data')}`
                )
              geoObject.balloon.close()
            })
        })
      })
    },
    disabledDate(date) {
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      return date > today
    },
    mapCreated: function ($map) {
      setTimeout(() => {
        this.map = $map
        this.mapObjectManager = new ymaps.ObjectManager({
          clusterize: false,
          gridSize: 60,
          clusterMinClusterSize: 5,
          clusterHasBalloon: true,
          geoObjectOpenBalloonOnClick: false,
        })
        if (
          this.regions &&
          this.regions.results &&
          this.regions.results.length
        ) {
          for (const regionIndex in this.regions.results) {
            for (const distictIndex in this.regions.results[regionIndex]
              .districts) {
              if (
                Array.isArray(
                  this.regions.results[regionIndex].districts[distictIndex]
                    .coordinates
                )
              ) {
                if (
                  Array.isArray(
                    this.regions.results[regionIndex].districts[distictIndex]
                      .coordinates[0][0]
                  )
                ) {
                  for (const sliceIndex in this.regions.results[regionIndex]
                    .districts[distictIndex].coordinates) {
                    this.isInnerDisctrict2 =
                      this.regions.results[regionIndex].districts[
                        distictIndex
                      ].is_inner_district
                    var myGeoObject = new ymaps.GeoObject(
                      {
                        geometry: {
                          type: 'Polygon',
                          coordinates: [
                            this.regions.results[regionIndex].districts[
                              distictIndex
                            ].coordinates[sliceIndex].slice([sliceIndex]),
                          ],
                          fillRule: 'nonZero',
                        },
                        properties: {
                          balloonContent: `
                         <div class="modal__title">${
                           this.regions.results[regionIndex].districts[
                             distictIndex
                           ].name || '-'
                         }</div>
                         <button ref="showStats" type="button" id="show_stats" data-rang="${
                           this.regions.results[regionIndex].districts[
                             distictIndex
                           ].rang
                         }" data-rang="${
                            this.regions.results[regionIndex].districts[
                              distictIndex
                            ].rang
                          }" data-name="${
                            this.regions.results[regionIndex].districts[
                              distictIndex
                            ].name
                          }" data="${
                            this.regions.results[regionIndex].id
                          }" class='modal__btn modal__btn--blue no-padding'>${
                            this.translatedAreaIndicators
                          }</button>
                        `,
                        },
                      },
                      {
                        fillColor: this.isInnerDisctrict2 ? '#fff0' : '#6D9CE0',
                        strokeColor: '#fff',
                        opacity: '0.4',
                        strokeWidth: 2,
                      }
                    )
                    this.map.geoObjects.add(myGeoObject)
                  }
                } else {
                  this.isInnerDisctrict =
                    this.regions.results[regionIndex].districts[
                      distictIndex
                    ].is_inner_district
                  let myGeoObject = new ymaps.GeoObject(
                    {
                      geometry: {
                        type: 'Polygon',
                        coordinates: [
                          this.regions.results[regionIndex].districts[
                            distictIndex
                          ].coordinates,
                        ],
                        fillRule: 'nonZero',
                      },
                      properties: {
                        balloonContent: `
                         <div class="modal__title">${
                           this.regions.results[regionIndex].districts[
                             distictIndex
                           ].name || '-'
                         }
                         </div>
                         <button ref="showStats" type="button" id="show_stats_by_district" data-rang="${
                           this.regions.results[regionIndex].districts[
                             distictIndex
                           ].rang
                         }" data-name="${
                          this.regions.results[regionIndex].districts[
                            distictIndex
                          ].name
                        }" data="${
                          this.regions.results[regionIndex].districts[
                            distictIndex
                          ].id
                        }" class='modal__btn modal__btn--blue no-padding'>${
                          this.translatedAreaIndicators
                        }</button>
                        `,
                      },
                    },
                    {
                      fillColor: this.isInnerDisctrict ? '#fff0' : '#6D9CE0',
                      strokeColor: '#fff',
                      opacity: '0.4',
                      strokeWidth: 2,
                      zIndexDrag: 100,
                    }
                  )

                  this.map.geoObjects.add(myGeoObject)
                }
              } else {
                // console.log('Bosh')
                // console.log(
                //   this.regions.results[regionIndex].districts[distictIndex]
                // )
              }
            }
          }
        }
        // DISTRICT SELECT|END

        // DISTRICTS SELECT|START
        // if (uzbekistan) {
        //   for (const region in uzbekistan) {
        //     console.log(region)
        //     for (const c in uzbekistan[region].coordinates) {
        //       console.log(uzbekistan[region].coordinates[c])
        //       var myGeoObject = new ymaps.GeoObject(
        //         {
        //           // Describing the geometry of the geo object.
        //           geometry: {
        //             // The "Polygon" geometry type.
        //             type: 'Polygon',
        //             // Specifying the coordinates of the vertices of the polygon.
        //             coordinates: [uzbekistan[region].coordinates[c].slice()],
        //             // Setting the fill rule for internal contours using the "nonZero" algorithm.
        //             fillRule: 'nonZero',
        //           },
        //           // Defining properties of the geo object.
        //           properties: {
        //             // The contents of the balloon.
        //             balloonContent: 'asdasdasdasdasdasdads',
        //           },
        //         },
        //         {
        //           /**
        //            * Describing the geo object options.
        //            *  Fill color.
        //            */
        //           fillColor: '#fdd959',
        //           // Stroke color.
        //           strokeColor: '#5B7293',
        //           // The overall transparency (for both fill and stroke).
        //           opacity: 0.3,
        //           // The stroke width.
        //           strokeWidth: 1.5,
        //         }
        //       )
        //       this.map.geoObjects.add(myGeoObject)
        //     }
        //   }
        // }
        // DISTRICT SELECT|END

        // ENTERPRICE POINT|START
        if (this.enterpriceDistricts) {
          this.getPlaceMarks()
        }

        this.observeEvents(this.map)
      }, 500)
      this.pending2 = false
    },
    mapDestroy: function ($map) {
      console.info('mapDestroy')
    },
    returnToCharts(chart) {
      let newChart = {
        options: {
          type: 'area',
          grid: {
            borderColor: '#f1f1f1',
            borderDash: [5, 5],
            strokeDashArray: 10,
            stroke: {
              width: 2,
            },
          },
          annotations: {
            xaxis: [],
          },
          chart: {
            toolbar: {
              show: false,
            },
            id: '',
            type: 'area',
          },
          xaxis: {
            categories: [],
            labels: {
              formatter: function (value) {
                return value + 1
              },
              style: {
                cssClass: 'apexcharts-xaxis-label',
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'straight',
            width: 2,
          },
          fill: {
            opacity: 0.1,
            type: 'gradient',
            gradient: {
              type: 'vertical',
              shadeIntensity: 0.05,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 0,
              stops: [0, 100],
              colorStops: [],
            },
            colors: ['#eef2ff'],
          },
        },
        series: [
          {
            name: '',
            data: [],
          },
        ],
        subtitle: '',
      }
      newChart.options.chart.id = chart.id
      let index = chart.name.indexOf('(')
      newChart.series[0].name = chart.name.slice(0, index)
      if (index > 0) {
        newChart.subtitle = chart.name.slice(index)
      } else {
        newChart.series[0].name = chart.name
        newChart.subtitle = ''
      }

      chart.row.forEach((item, index) => {
        // console.log(typeof item.value === 'number')
        newChart.options.xaxis.categories.push(
          this.months[item?.protocol__datetime__month - 1]
        )
        if (item.value || (item.value > 0 && item.value < 1)) {
          newChart.series[0].data.push(String(item.value).substring(0, 5))
        } else if (item.value) {
        }

        let newAnnotation = {
          x: this.months[item.protocols__datetime__month - 1],
          borderColor: '#DEE3E9',
          label: {
            borderColor: '#DEE3E9',
            style: {
              color: '#fff',
              background: '#00E396',
            },
          },
          strokeDashArray: 10,
        }

        newChart.options.annotations.xaxis.push(newAnnotation)
      })
      if (chart.row.filter((el) => el.value).length === 1) {
        newChart.series[0].data.push(
          chart.row.filter((el) => el.value)[0]?.value
        )
      }
      newChart.options.annotations.xaxis.shift()

      return newChart
    },

    async getMapStatistics(item) {
      if (item === 'region' && this.regionId !== 0) {
        this.regions = await this.$axios.$get(
          `regions/${this.regionId}/?page_size=30`
        )
        this.mapCenter = this.regions.results[0].coordinates[0]
        if (Array.isArray(this.regions.results[0].coordinates[0][0])) {
          this.mapCenter = this.regions.results[0].coordinates[0][0]
        }
        this.map.setZoom(8)
        this.map.setCenter(this.mapCenter)
      } else if (this.regionId !== 0) {
        this.regions = await this.$axios.$get(
          `regions/${
            this.regionId ? this.regionId : 1
          }/?page_size=30&start_date=${this.$moment(
            this.month[0],
            `YYYY-MM-DD HH:MM`
          )}&end_date=${this.$moment(this.month[1], `YYYY-MM-DD HH:MM`)}`
        )
      }

      if (item === 'district' && this.districtId !== 0) {
        console.log(
          'districtList',
          this.districtList?.results?.filter(
            (item) => item?.id === this.districtId
          )
        )

        var dis = this.districtList?.results?.filter(
          (item) => item?.id === this.districtId
        )[0]

        this.mapCenter = dis.coordinates[0]
        if (Array.isArray(dis.coordinates[0][0])) {
          this.mapCenter = dis.coordinates[0][0]
        }
        this.map.setZoom(12)
        this.map.setCenter(this.mapCenter)
      }

      this.map = $map
      this.mapObjectManager = new ymaps.ObjectManager({
        clusterize: false,
        gridSize: 60,
        clusterMinClusterSize: 5,
        clusterHasBalloon: true,
        geoObjectOpenBalloonOnClick: false,
      })
      if (this.regions && this.regions.results && this.regions.results.length) {
        for (const regionIndex in this.regions.results) {
          for (const distictIndex in this.regions.results[regionIndex]
            .districts) {
            if (
              Array.isArray(
                this.regions.results[regionIndex].districts[distictIndex]
                  .coordinates
              )
            ) {
              if (
                Array.isArray(
                  this.regions.results[regionIndex].districts[distictIndex]
                    .coordinates[0][0]
                )
              ) {
                for (const sliceIndex in this.regions.results[regionIndex]
                  .districts[distictIndex].coordinates) {
                  this.isInnerDisctrict2 =
                    this.regions.results[regionIndex].districts[
                      distictIndex
                    ].is_inner_district
                  var myGeoObject = new ymaps.GeoObject(
                    {
                      geometry: {
                        type: 'Polygon',
                        coordinates: [
                          this.regions.results[regionIndex].districts[
                            distictIndex
                          ].coordinates[sliceIndex].slice([sliceIndex]),
                        ],
                        fillRule: 'nonZero',
                      },
                      properties: {
                        balloonContent: `
                         <div class="modal__title">${
                           this.regions.results[regionIndex].districts[
                             distictIndex
                           ].name || '-'
                         }</div>
                         <button ref="showStats" type="button" id="show_stats" data-rang="${
                           this.regions.results[regionIndex].districts[
                             distictIndex
                           ].rang
                         }" data-rang="${
                          this.regions.results[regionIndex].districts[
                            distictIndex
                          ].rang
                        }" data-name="${
                          this.regions.results[regionIndex].districts[
                            distictIndex
                          ].name
                        }" data="${
                          this.regions.results[regionIndex].id
                        }" class='modal__btn modal__btn--blue no-padding'>${
                          this.translatedAreaIndicators
                        }</button>
                        `,
                      },
                    },
                    {
                      fillColor: this.isInnerDisctrict2 ? '#fff0' : '#6D9CE0',
                      strokeColor: '#fff',
                      opacity: '0.4',
                      strokeWidth: 2,
                    }
                  )
                  this.map.geoObjects.add(myGeoObject)
                }
              } else {
                this.isInnerDisctrict =
                  this.regions.results[regionIndex].districts[
                    distictIndex
                  ].is_inner_district
                let myGeoObject = new ymaps.GeoObject(
                  {
                    geometry: {
                      type: 'Polygon',
                      coordinates: [
                        this.regions.results[regionIndex].districts[
                          distictIndex
                        ].coordinates,
                      ],
                      fillRule: 'nonZero',
                    },
                    properties: {
                      balloonContent: `
                         <div class="modal__title">${
                           this.regions.results[regionIndex].districts[
                             distictIndex
                           ].name || '-'
                         }
                         </div>
                         <button ref="showStats" type="button" id="show_stats_by_district" data-rang="${
                           this.regions.results[regionIndex].districts[
                             distictIndex
                           ].rang
                         }" data-name="${
                        this.regions.results[regionIndex].districts[
                          distictIndex
                        ].name
                      }" data="${
                        this.regions.results[regionIndex].districts[
                          distictIndex
                        ].id
                      }" class='modal__btn modal__btn--blue no-padding'>${
                        this.translatedAreaIndicators
                      }</button>
                        `,
                    },
                  },
                  {
                    fillColor: this.isInnerDisctrict ? '#fff0' : '#6D9CE0',
                    strokeColor: '#fff',
                    opacity: '0.4',
                    strokeWidth: 2,
                    zIndexDrag: 100,
                  }
                )

                this.map.geoObjects.add(myGeoObject)
              }
            } else {
              // console.log('Bosh')
              // console.log(
              //   this.regions.results[regionIndex].districts[distictIndex]
              // )
            }
          }
        }
      }

      this.observeEvents(this.map)
    },
    handleQuarter(id) {
      let item = this.quarters.find((el) => el.id === id)
      item.isSelected = !item.isSelected
    },
    isNullValue(chart, index) {
      // console.log('chart', chart)
      // console.log(
      //   'for lop',
      //   chart?.row?.some((r) => r.value === null)
      // )
      // chart?.row?.some((r) => r.value === null)
      return true
    },
  },

  mounted() {
    document.addEventListener('click', this.handleClickOutside)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside)
  },

  watch: {
    '$i18n.locale'(newLocale) {
      this.dayTitle = this.$t('month_and_year') // Re-translate when locale changes
      this.dayPLaceholder = this.$t('quarter_and_select_year')
    },

    getFullQuarter() {
      let start = this.quarters.findIndex((el) => el.isSelected)
      let end = this.quarters.findLastIndex((el) => el.isSelected)

      if (this.getFullQuarter && start >= 0 && end) {
        for (let i = start; i <= end; i++) {
          this.quarters[i].isSelected = true
        }
      } else if (!this.getFullQuarter || (start >= 0 && end)) {
        this.quarters.forEach((el) => (el.isSelected = false))
      }
    },
    charts() {
      if (this.charts?.length) {
        this.isEmptyList = []
        this.charts.forEach((chart) => {
          if (!chart.row.every((el) => el.value === null)) {
            this.isEmptyList.push(1)
          }
        })
      }
    },
    async month() {
      if (
        Array.isArray(this.month) &&
        this.month.some((element) => element !== null)
      ) {
        let start = this.getMonthNumber(this.month[0])
        let end = this.getMonthNumber(this.month[1])
        let date = new Date(this.month[0])
        this.year = date.getFullYear()
        let monthNumber = []
        for (let i = start; i <= end; i++) {
          monthNumber.push(i)
        }
        this.monthString = monthNumber.join()
      }
    },
    async regionId() {
      this.getDistrict()
      this.getMapStatistics('region')

      if (this.regionId === 0) {
        this.month = undefined

        this.pending = true
        await this.$axios
          .$get(`regions/?page_size=20&source_type=1`)
          .then((res) => {
            this.regions = res
            this.pending = false
            this.mapCenter = [42.032638, 64.573418]
            this.zoomId = 6.5
          })
        if (this.showEnterprice) {
          await this.$axios
            .$get(`enterprises/labs/?page_size=100`)
            .then((res) => {
              this.enterpriceDistricts = res.results
            })
        }
      }

      this.showEnterprice = false
    },

    async districtId() {
      this.$router.push(`/protocols/?district=${this.districtId}`)
    },

    async showEnterprice() {
      if (this.showEnterprice) {
        this.placeMarks = []

        if (this.regionId !== 0) {
          await this.$axios
            .$get(`enterprises/labs/?region_id=${this.regionId}&page_size=100`)
            .then((res) => {
              this.enterpriceDistricts = res.results
            })
        } else {
          await this.$axios
            .$get(`enterprises/labs/?page_size=100`)
            .then((res) => {
              this.enterpriceDistricts = res.results
            })
        }
        this.getPlaceMarks()

        this.placeMarks.forEach((placemark) => {
          this.map.geoObjects.add(placemark)
        })
        this.observeEvents(this.map)
      } else {
        this.placeMarks.forEach((placemark) => {
          this.map.geoObjects.remove(placemark)
        })
      }
    },

    async value() {
      this.pending = true
      this.regions = []
      await this.$axios
        .$get(`regions/?page_size=20&source_type=${this.value}`)
        .then((res) => {
          this.regions = res
          this.pending = false
        })
    },
    selected() {
      switch (this.selected) {
        case 'Oy bo‘yicha':
          this.dayTitle = 'Oy va yil'
          this.dayPLaceholder = 'Oy va yilni tanlang'
          this.year = 2023
          break

        case 'Chorak bo‘yicha':
          this.dayTitle = 'Chorak'
          this.dayPLaceholder = 'Chorak (va yilni tanlang)'
          this.month = undefined
          break
      }
    },
  },
}
</script>
<style>
.open-modal {
  z-index: 1000 !important;
}

.marquee-container {
  overflow: hidden;
  line-height: 30px;
  background: #305ab6;
  padding: 4px 0;
}

.marquee-container .marquee {
  white-space: nowrap;
  animation: marquee 90s linear infinite;
  display: flex;
  gap: 20px;
  font-size: 14px;
  line-height: 130%;
  font-weight: normal;
  color: white;
  opacity: 0.6;
}

@keyframes marquee {
  0% {
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.minus {
  color: #5b7293;
  margin-inline: 10px;
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
}

.year {
  color: #5b7293;
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 120%;
  padding: 2px 6px;
  border-radius: 4px;
  background: rgba(91, 114, 147, 0.1);
  margin-left: 8px;
}

.radio-label {
  padding: 6px 20px 6px 8px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
}

.select {
  background: rgba(255, 255, 255, 0.12);
  font-weight: 700;
}

.line {
  display: block;
  margin-block: 12px;
  width: 100%;
  height: 1px;
  background: #eeeff1;
}

.quarter {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 12px;
}

.quarter li {
  border-radius: 4px;
  padding-block: 10px;
  border: 1px solid #5685ec;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #25272b;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  cursor: pointer;
}

.fullActive {
  display: block;
  width: 100%;
  background: #5685ec;
  color: #fff !important;
}

.fullActive:hover {
  background: #6e9cff;
  color: white;
}

.radio-input {
  position: relative;
}

.radio-input::before {
  position: absolute;
  content: '';
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: transparent;
}

.radio-input:checked::before {
  background: white;
}

.selected {
  background: rgba(255, 255, 255, 0.12);
}

.el-dialog {
  margin-block: 5vh !important;
}

.el-dialog__wrapper {
  width: 100vw;
  height: 100vh;
}

.el-dialog__body {
  padding: 20px 20px 24px !important;
}

.el-dialog__header {
  padding: 20px 20px 0;
}

.grid-content {
  border-radius: 6px;
  border: 1px solid #dee3e9;
  margin-bottom: 16px;
}

.modal_title {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 20px;
}

.modal_title h2 {
  color: #25272b;
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%; /* 28px */
}

.chart {
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: #3c73e0;
  box-shadow: 0 0 20px 0 rgba(60, 115, 224, 0.24);
  padding: 6px;
}

.el-input__inner {
  background: rgba(252, 252, 252, 0.12);
  border: 1px solid rgba(238, 239, 241, 0.2);
  border-radius: 4px;
  color: #fff;
  padding: 10px 16px;
  height: 36px;
}

.el-input__suffix-inner {
  display: flex;
}

.ymaps-2-1-79-balloon__content > * {
  height: auto !important;
}

body {
  /* font-family: 'Fira Sans'; */
  font-style: normal;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}

.wrapper {
  position: relative;
}

.container {
  max-width: 1192px;
  margin: 0 auto;
}

.modal {
  background: #fff;
  opacity: 0.9;
  border-radius: 8px;
  height: auto;
  padding: 10px;
  position: relative;
  z-index: 9999999;
}

.modal__header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  margin-bottom: 17px;
}

.id-1,
.id-2,
.id-3,
.id-4,
.id-5 {
  display: none !important;
}

.heading-hello {
  color: #25272b !important;
  display: flex;
  flex-flow: column;
  justify-content: center;
}

.modal__title {
  color: #25272b;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 16px;
}

.modal__subtitle {
  display: flex;
  gap: 4px;
  align-items: center;
  color: #5b7293;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 4px;
}

.modal__btns {
  display: flex;
  gap: 16px;
}

.modal__btn {
  margin-top: 20px;
  display: block;
  width: 100%;
  text-align: center;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #f6fbff;
  background: #305ab6;
  border-radius: 4px;
  padding-block: 11px;
  margin-bottom: 24px;
  cursor: pointer;
}

.modal__btn--blue {
  background: #3c73e01a;
  color: #305ab6;
}

.modal__btn--blue.no-padding {
  padding-inline: 10px;
  margin-top: 10px;
  margin-block: 5px !important;
}

@media only screen and (max-width: 1500px) {
  .modal {
    padding: 5px;
  }

  .modal__header {
    gap: 10px;
    margin-bottom: 10px;
  }

  .modal__title {
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 6px;
  }

  .modal__subtitle {
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .modal__btns {
    gap: 10px;
  }

  .modal__btn {
    margin-top: 8px;
    padding-block: 11px;
    margin-bottom: 0;
  }
}

.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
}

.header__top {
  padding: 22px 0;
  position: relative;
  background: #fff;
}

.header__top span {
  position: absolute;
  top: 0;
  left: 0;
  width: auto;
  height: auto;
}

.header__bottom {
  background: #305ab6;
  backdrop-filter: blur(8px);
  padding: 26px 0;
}

.el-radio,
.el-checkbox {
  display: flex;
  align-items: center;
}

.el-radio__label,
label,
.el-checkbox__label {
  font-size: 16px;
  line-height: calc(24 / 16 * 100%);
  text-align: center;
  color: #fff;
}

.mr-12 {
  margin-right: 12px;
}

.el-radio__inner {
  background: transparent;
  border: 2px solid #d9dde3;
  width: 20px;
  height: 20px;
}

.el-radio__inner:hover {
  border: 2px solid #d9dde3;
}

.el-radio__input.is-checked .el-radio__inner {
  background: transparent;
  border: 2px solid #d9dde3;
}

.el-radio__input.is-checked .el-radio__inner::after {
  width: 10px;
  height: 10px;
}

.el-radio__input.is-checked + .el-radio__label {
  color: #fff;
}

.el-checkbox__inner {
  width: 20px;
  height: 20px;
  border-radius: 3px;
}

.mx-datepicker-range {
  width: 220px !important;
}

@media (max-width: 1024px) {
  .mx-datepicker-range {
    width: 100% !important;
  }
  .mx-input {
    width: 100% !important;
  }
}

.el-checkbox__inner::after {
  border: 2px solid #fff;
  height: 8px;
  left: 6px;
  top: 3px;
  width: 4px;
  border-left: 0;
  border-top: 0;
}

.mx-datepicker-popup .el-checkbox__label {
  color: #25272b;
  font-size: 12px;
  line-height: calc(16 / 12 * 100%);
}

.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #fff;
}

.mx-datepicker-popup .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #25272b;
}

.mx-datepicker .mx-input {
  background: rgba(252, 252, 252, 0.12);
  border: 1px solid rgba(238, 239, 241, 0.2);
  border-radius: 4px;
  color: #fff;
  padding: 10px 12px;
  height: 36px;
  width: 100% !important;
}

.mx-datepicker .mx-input::placeholder {
  color: #fff;
}

.mx-icon-calendar svg {
  margin-left: 10px !important;
}
.mx-icon-calendar svg,
.mx-icon-clear svg {
  fill: #fff;
}

.mx-datepicker-popup {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
}

.mx-calendar-content .cell {
  padding: 6px;
}

.mx-calendar-content .cell:hover,
.mx-calendar-content .cell.active {
  color: #73879c;
  background-color: transparent;
}

.mx-calendar-content .cell div {
  border: 1px solid #eeeff1;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mx-calendar-content .cell.active div {
  background: #5685ec;
  color: #fff;
}

.mx-calendar-header {
  background: #fcfcfc;
  border: 1px solid #eeeff1;
  border-radius: 4px;
  position: relative;
}

.el-dialog__headerbtn {
  font-size: 24px !important;
}

.el-dialog__headerbtn .el-dialog__close {
  color: #5b7293;
}

.loader_wrap2 {
  position: absolute;
  z-index: 50;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  height: 100vh;
  width: 100%;
  background: rgba(62, 77, 99, 0.8);
  backdrop-filter: blur(15px);
}

.spinner {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 6px solid;
  border-color: #b8b8bc;
  border-right-color: #f8fafc;
  animation: spinner-d3wgkg 1s infinite linear;
}

.apexcharts-xaxis-label {
  margin-top: 10px !important;
}

@keyframes spinner-d3wgkg {
  to {
    transform: rotate(1turn);
  }
}
</style>
