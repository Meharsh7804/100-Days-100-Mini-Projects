var app = new Vue({
  el: "#app",
  data: {
    yellowOuterCircleFill: {
      fill: "#FACC39",
    },
  },
  methods: {
    updateFill: function () {
      this.yellowOuterCircleFill.fill = "white";
    },
  },
});
