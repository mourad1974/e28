<template>
  <div>
    <p>Your try #{{rank}} is : {{range}}</p>
  </div>
</template>



<script>
module.exports = {
  data: function() {
    return {};
  },

  props: ["range", "rank"],
  template: "#new-one"
};
</script>
