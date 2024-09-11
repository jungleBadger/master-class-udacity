<template>

  <div class="reveal" ref="mainSlides">

    <div class="slides">
      <SectionWhoAmI />

      <SectionWhatIsWebDevelopment />

      <SectionWhatIsAI />

      <SectionPersonalAssistants />

      <SectionAIEnablement />


      <SectionThankYou />

      <SectionContact />



    </div>

  </div>


</template>
<script type="text/javascript">
"use strict";
import { defineComponent } from "vue";
import reveal from "../configs/reveal"

import { store } from '../store/store.js'


import SectionWhoAmI from "./SectionWhoAmI.vue";
import SectionWhatIsWebDevelopment from "./SectionWhatIsWebDevelopment.vue";
import SectionWhatIsAI from "./SectionWhatIsAI.vue";
import SectionAIEnablement from "./SectionAIEnablement.vue";
import SectionPersonalAssistants from "./SectionPersonalAssistants.vue";
import SectionThankYou from "./SectionThankYou.vue";
import SectionContact from "./SectionContact.vue";



export default defineComponent({
  "name": "JPFApp",
  "mixins": [


  ],
  "data": function () {
    return {
      store,
      "deck": null
    };
  },
  "components": {
    SectionWhoAmI,
    SectionWhatIsWebDevelopment,
    SectionWhatIsAI,
    SectionAIEnablement,
    SectionPersonalAssistants,
    SectionThankYou,
    SectionContact
  },
  "computed": {


  },
  "methods": {

    handleSlideChange(ev) {
      this.store.pageX = ev.indexh;
      this.store.pageY = ev.indexv;
    },

    handleFragmentShown(ev) {
      ev.fragment.classList.remove("jpf-hidden");
      ev.fragment.classList.add("jpf-active");
      this.store.activeFragment = ev.fragment;
    },

    handleFragmentHidden(ev) {
      ev.fragment.classList.remove("jpf-active");
      ev.fragment.classList.add("jpf-hidden");
      this.store.activeFragment = null;
    },

  },
  async mounted () {
    this.deck = reveal(this.$refs.mainSlides);
    this.deck.addEventListener("slidechanged", this.handleSlideChange);
    this.deck.addEventListener("fragmentshown", this.handleFragmentShown);
    this.deck.addEventListener("fragmenthidden", this.handleFragmentHidden);
    await this.deck.initialize();
  },
  beforeUnmount() {
    this.deck.removeEventListener("slidechanged", this.handleSlideChange);
    this.deck.removeEventListener("fragmentshown", this.handleFragmentShown);
    this.deck.removeEventListener("fragmenthidden", this.handleFragmentHidden);

  },
});
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

</style>

