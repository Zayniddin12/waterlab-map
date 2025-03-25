<template>
  <div>
    <div v-if="pending">
      <loader />
    </div>
    <div class="wrapper">
      <header class="header">
        <div class="header__top">
          <div class="container">
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
        </div>
        <div class="header__bottom">
          <div class="container flex items-center justify-between">
            <div class="flex item-center justify-center">
              <label class="flex items-center justify-center mr-12"
                >Oy va yil</label
              >
              <!-- <el-date-picker
              v-model="month"
              type="month"
              placeholder="Oy va yilni tanlang"
            >
            </el-date-picker> -->
              <date-picker
                v-model="month"
                type="month"
                :range="true"
                placeholder="Oy va yilni tanlang"
                :disabled-date="disabledDate"
              >
                <template v-slot:footer>
                  <el-checkbox v-model="wholeyear">{{
                    $t('during_the_year')
                  }}</el-checkbox>
                </template>
              </date-picker>
            </div>
            <div>
              <!-- <el-checkbox v-model="showEnterprice"
                >Labaratoriyalarni ko‘rsatish</el-checkbox
              > -->
            </div>
          </div>
        </div>
      </header>
      <yandex-map
        style="height: 100vh; width: 100vw"
        :center="[41.311158, 69.279737]"
        :zoom="10.36"
        @created="mapCreated"
        @destroy="mapDestroy"
      >
      </yandex-map>
      <CoolLightBox :items="items" :index="index" @close="index = null">
      </CoolLightBox>
    </div>
  </div>
</template>

<script>
import tashkent from '@/assets/tashkent-districts.json'
import DatePicker from 'vue2-datepicker'
import CoolLightBox from 'vue-cool-lightbox'
import Loader from '@/components/Loader.vue'

import { mapState } from 'vuex'

import 'vue2-datepicker/index.css'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
export default {
  components: {
    DatePicker,
    CoolLightBox,
    Loader,
  },
  data: () => ({
    items: [],
    index: null,
    pending: true,
    map: null,
    map_data: [],
    mapObjectManager: null,
    arrayRegion: tashkent,
    color: ['#ee5253', '#fdd959', '#00b67a'],
    showEnterprice: false,
    placeMarks: [],
    //HEADER
    wholeyear: null,
    radio: null,
    month: null,
    checkbox: null,
    ind: null,
    typi: null,
    typeText: '',
    types: [
      'Поверхностный водозабор',
      'Групповой водозабор',
      'Одиночные скважины',
      'Водоводы и распределительная сеть',
    ],
  }),
  methods: {
    observeEvents(map) {
      map.geoObjects.each((geoObject) => {
        geoObject.balloon.events
          // При открытии балуна начинаем слушать изменение центра карты.
          .add('open', (e1) => {
            document
              .getElementById('modal_button')
              .addEventListener('click', () => {
                var button = document.getElementById('modal_button')
                const index = Number(button.getAttribute('data'))

                this.items = this.enterpriceDistricts[index].photos
                this.index = 0
              })
          })
          // При закрытии балуна удаляем слушатели.
          .add('close', () => {})
      })
    },

    disabledDate(date) {
      const today = new Date()
      today.setHours(0, 0, 0, 0)

      return date > today
    },
    mapCreated: function ($map) {
      this.map = $map

      // ENTERPRICE POINT|START
      if (this.locations) {
        for (const index in this.locations) {
          this.ind = index
          var myPlacemarkWithContent = new ymaps.Placemark(
            [this.locations[index].latitude, this.locations[index].longtitude],
            {
              hintContent: this.locations[index].title,
              balloonContent: `<div class="modal">
                      <div class="modal__header">
                        <div class="modal__icon">
                          <svg
                            width="47"
                            height="46"
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
                          this.locations[index].title
                        }</div>
                      </div>
                      <div class="modal__body">
                        <div class="modal__subtitle">тип:</div>
                        <div  class="modal__title">${
                          this.types[this.locations[index].type - 1]
                        }</div>
                        <div class="modal__subtitle"> проэктная мощность:</div>
                        <div class="modal__title">${
                          this.locations[index].capacity
                        }</div>
                        <div class="modal__subtitle">действующая мощьность:</div>
                        <div class="modal__title">${
                          this.locations[index].power
                        }</div>


                        <div class="modal__subtitle">название региона:</div>
                        <div class="modal__title">${
                          this.locations[index].region_name
                        }</div>

                        <div class="modal__subtitle">год эксплуатации:</div>
                        <div class="modal__title">${
                          this.locations[index].exploitation_year
                        }</div>
                        <div class="modal__subtitle">дата последней реконструкции:</div>
                        <div class="modal__title">${this.$moment(
                          this.locations[index].last_reconstruction_date,
                          'MM/DD/YYYY'
                        )}</div>

                      </div>
                    </div>`,
            },
            {
              /**
               * Options.
               * You must specify this type of layout.
               */
              iconLayout: 'default#imageWithContent',
              // Custom image for the placemark icon.
              iconImageHref: '/img/icon.png',
              // The size of the placemark.
              iconImageSize: [45, 55],
              /**
               * The offset of the upper left corner of the icon relative
               * to its "tail" (the anchor point).
               */
              iconImageOffset: [-24, -53],
              // Offset of the layer with content relative to the layer with the image.
              // Content layout.
            }
          )

          this.map.geoObjects.add(myPlacemarkWithContent)
        }
      }
      // ENTERPRICE POINT|END
    },
    mapDestroy: function ($map) {},
  },
  computed: {
    ...mapState({
      locations: (state) => state.waterLocation,
    }),
  },

  watch: {
    async month() {
      this.regionDistricts = await this.$axios.$get(
        `regions/10/?start_date=${this.$moment(
          this.month[0],
          `YYYY-MM-DD HH:MM`
        )}&end_date=${this.$moment(this.month[1], `YYYY-MM-DD HH:MM`)}`
      )

      if (this.regionDistricts) {
        this.map.geoObjects.removeAll()
        for (const index in this.regionDistricts) {
          var myGeoObject = new ymaps.GeoObject(
            {
              // Describing the geometry of the geo object.
              geometry: {
                // The "Polygon" geometry type.
                type: 'Polygon',
                // Specifying the coordinates of the vertices of the polygon.
                coordinates: [this.regionDistricts[index].coordinates.slice()],
                // Setting the fill rule for internal contours using the "nonZero" algorithm.
                fillRule: 'nonZero',
              },
              // Defining properties of the geo object.
              properties: {
                // The contents of the balloon.
                balloonContent: this.regionDistricts[index].name,
              },
            },
            {
              /**
               * Describing the geo object options.
               *  Fill color.
               */
              fillColor: this.color[this.regionDistricts[index].rang - 1],
              // Stroke color.
              strokeColor: '#5B7293',
              // The overall transparency (for both fill and stroke).
              opacity: 0.3,
              // The stroke width.
              strokeWidth: 1.5,
            }
          )
          this.map.geoObjects.add(myGeoObject)
        }
      }

      // DISTRICT SELECT|END
    },
    // async showEnterprice() {
    //   if (this.showEnterprice) {
    //     this.placeMarks.forEach((placemark) => {
    //       this.map.geoObjects.add(placemark)
    //       console.log(placemark, this.showEnterprice)
    //     })
    //     this.observeEvents(this.map)
    //   } else {
    //     this.placeMarks.forEach((placemark) => {
    //       this.map.geoObjects.remove(placemark)
    //       console.log(placemark, this.showEnterprice)
    //     })
    //   }
    // },
  },
  async asyncData({ $axios }) {
    const regionDistricts = await $axios.$get(`regions/10/`)
    const enterpriceDistricts = await $axios.$get(`enterprises/region/10/`)
    return {
      regionDistricts: regionDistricts,
      enterpriceDistricts: enterpriceDistricts,
    }
  },

  async fetch() {
    await this.$store.dispatch('fetchWaterLocations')
  },
}
</script>
<style>
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
  padding: 10px;
  height: auto;
  z-index: 99999999;
}
.modal__header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  margin-bottom: 17px;
}
.mb-16 {
  margin-bottom: 16px;
}
.modal__title {
  color: #25272b;
  font-family: 'Fira Sans', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-bottom: 4px;
}
.modal__subtitle {
  font-weight: normal;
  font-size: 14px;
  line-height: calc(17 / 14 * 100%);
  color: #5b7293;
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
  font-weight: 600;
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
}
.el-checkbox__inner::after {
  border: 2px solid #fff;
  height: 10px;
  left: 7px;
  top: 2px;
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
  padding: 10px 16px;
  height: 36px;
}
.mx-datepicker .mx-input::placeholder {
  color: #fff;
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
</style>
