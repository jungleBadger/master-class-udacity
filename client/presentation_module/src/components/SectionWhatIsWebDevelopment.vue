<template>

  <section>

    <section>
      <h1>
        What is web development?
      </h1>
    </section>

    <section data-background-size="cover" data-background-image="/master-class-udacity/static/pixelart2.webp" data-background-opacity="0.15">
      <h1 class="header-title">
        Server-side development
      </h1>
      <p class="fragment">
        API Development (HTTP, GRPc, MQTT, etc.)
      </p>
      <p class="fragment">
        Near real-time solutions
      </p>
      <p class="fragment">
        Scheduling
      </p>
    </section>


    <section data-background-size="cover" data-background-image="/master-class-udacity/static/pixelart3.webp" data-background-opacity="0.15">
      <h1 class="header-title">
        Frontend development
      </h1>
      <p class="fragment">
        Web-browser apps/sites
      </p>
      <p class="fragment">
        Hybrid apps (Mobile and Desktop)
      </p>
      <p class="fragment">
        Extensions
      </p>
    </section>

    <section data-background-size="cover" data-background-image="/master-class-udacity/static/pixelart4.webp" data-background-opacity="0.15">
      <h1 class="header-title">
        Tooling
      </h1>
      <p class="fragment">
        Testing (execution, coverage, reporting, etc)
      </p>
      <p class="fragment">
        Alert and monitoring
      </p>
      <p class="fragment">
        Automation routines
      </p>
    </section>

    <section data-background-size="contain" data-background-image="/master-class-udacity/static/meme2.jpeg"></section>

  </section>



</template>
<script type="text/javascript">
"use strict";
import { defineComponent } from "vue";
import { store } from '../store/store.js'

export default defineComponent({
  "name": "SectionWhatIsWebDevelopment",
  "data": function () {
    return {
      store
    };
  },
  "methods": {

  }

});
</script>
<style lang="scss" rel="stylesheet/scss" scoped>


</style>

