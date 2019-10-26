<template>
  <div>
    <p>Your Guess number {{rank}} is : {{range}}</p>
  </div>
</template>


<script>
module.exports = {
  data: function() {
    return {};
  },

  props: ["range", "rank"],
  template: "#my-guess"
};
</script>


<style>
</style>