<template>
  <section class="text-gray-700 body-font relative">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Play With Word</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Just enter the word and it will change for you</p>
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <input 
          class="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2" 
          placeholder="Insert Your Word" 
          type="text"
          v-model="word">
        </div>
        <div class="p-2 w-full">
          <button 
          class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          @click.prevent="capitalize"
          >
          Capitalize
          </button>
          <button 
          class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          @click.prevent="randomize"
          >
          Randomize
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-col text-center w-full mb-12" v-if="changedWord !== ''">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">{{ changedWord }}</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">{{ word }}</p>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      word: '',
      changedWord: ''
    }
  },
  methods: {
    capitalize () {
      this.changedWord = ''
      this.changedWord = String(this.word).toUpperCase()
    },
    randomize () {
      this.changedWord = ''
      const word = this.word.split('')
      word.forEach(el => {
        const random = Math.ceil(Math.random() * 10)
        if (random > 5) {
          el = el.toUpperCase()
        } else if (random < 5) {
          el = el.toLowerCase()
        }
        this.changedWord += el
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
