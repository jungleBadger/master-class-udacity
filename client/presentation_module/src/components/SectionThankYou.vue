<template>

  <section>
    <section
        data-background-video="/master-class-udacity/static/flame-bg-frame.mp4">
      Thank you
    </section>

    <section data-background-size="contain" data-background-image="/master-class-udacity/static/pic6.jpg"></section>

    <section>
      And remember...
    </section>

    <section>
      <blockquote class="quote-slide">
        It is better to know how to ask any question<br>
        than expecting to know all the answers
      </blockquote>
    </section>
  </section>
</template>
<script type="text/javascript">
"use strict";
import { defineComponent } from "vue";


export default defineComponent({
  "name": "SectionThankYou",
  "data": function () {
    return {

    };
  },
  "components": {


  },
  "computed": {


  },
  "methods": {


  }

});
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.quote-slide {
  font-style: italic;
  text-align: center;
  width: 80%; /* Adjust width to center the quote */
  padding: 20px;
  background: rgba(255, 255, 255, 0.2); /* Optional: Adds slight background effect */
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.2); /* Optional: Adds slight shadow */
  font-size: 1.5em;
  color: #FFFFFF !important; // Udacity purple color
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px; /* Add spacing between heading and subtext */
  margin-top: 0;
  position: relative;
  transition: transform 0.8s ease, top 0.8s ease, left 0.8s ease;
}

.quote-slide::before {
  content: "“"; /* Adds the opening quote mark */
  font-size: 4rem;
  color: #FFFFFF;
}

.quote-slide::after {
  content: "”"; /* Adds the closing quote mark */
  font-size: 4rem;
  color: #FFFFFF;
}
</style>

