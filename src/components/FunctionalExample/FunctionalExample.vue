<template>
  <div>
    <input type="text" v-model="textVal">
    <p class="parag">original: {{ textVal }}</p>
    <p class="parag">reversed: {{ textVal | reverseText }}</p>
    <p>note: you can copy paste the .vue file content of this example to code playground, it will run there</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textVal: '',
    }
  },
  filters: {
    reverseText(value) {
      return value.split('').reverse().join('')
    }
  }
};
</script>

<style>
  .parag {
    color: navy;
    font-weight: 500;
  }
</style>