<template>



  <section data-background-size="cover" data-background-image="/master-class-udacity/static/pic7.jpg" data-background-opacity="0.4">
    <h1 class="header-title">
      Contact
    </h1>
    <p>
      <a style="color: #FFFFFF" href="https://linkedin.com/in/dcerag">LinkedIn - /in/dcerag </a>
    </p>
    <p>
      <a style="color: #FFFFFF"  href="https://github.com/junglebadger">GitHub - @jungleBadger  </a>

    </p>
  </section>


</template>
<script type="text/javascript">
"use strict";
import { defineComponent } from "vue";


export default defineComponent({
  "name": "SectionContact",
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

