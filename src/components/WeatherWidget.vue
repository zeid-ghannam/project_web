<template>
	<div class="flex flex-col items-center rounded-md sm:px-12 dark:bg-gray-900 dark:text-gray-100">
        <div v-if="loading">Loading...</div>
		<div v-else class="text-center">
			<h2 class="tracki text-gray-50 text-xl font-semibold">Kazan</h2>
			<p class="text-sm dark:text-gray-400">{{ gotDateOnly(info.location.localtime) }}</p>
            <div class="m-auto flex justify-around">
                <img :src="info.current.condition.icon">
            </div>
            <div class="mb-2 text-xl font-semibold">{{ info.current.feelslike_c }}°
                <span class="mx-1 font-normal">|</span>{{ info.current.condition.text }}
            </div>
        </div>
	</div>
</template>

<script>
import axios from "axios";
import { mapState } from 'vuex';

const token = '199b89345a184244bde125413241002';

export default {
    name: "WeatherWidget",
    data () {
        return {
            info: null,
            loading: true,
            errored: false
        }
  },
  computed: {
    ...mapState(['language'])
  },
  watch: {
        language: {
            handler(newLocale) {
                this.getcurrentWeather(newLocale)
            },
        },
    },
  methods: {
    gotDateOnly (dt) {
      return new Date(dt).toJSON().slice(0,10).replace(/-/g,'/')
    },
    getcurrentWeather(current_lang) {
        axios
        .get(`http://api.weatherapi.com/v1/current.json?q=Kazan&lang=${current_lang}&key=${token}`)
        .then(response => {
            this.info = response.data
        })
        .catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
    }
  },
  mounted () {
    axios
        .get(`http://api.weatherapi.com/v1/current.json?q=Kazan&lang=ru&key=${token}`)
        .then(response => {
            this.info = response.data
        })
        .catch(error => {
            console.log(error)
            this.errored = true
        })
        .finally(() => this.loading = false)
  }
}
</script>

<style scoped>
</style>