<template>
  <div class="bar-container relative h-[70px]">
    <div ref="data" class="items-move absolute flex flex-col items-center">
      <div
        class="flag bg-gray-color font-semibold text-sm px-1 py-[2px] mb-3 relative rounded-[4px]"
      >
        <p>{{ large + "%" }}</p>
      </div>
      <div class="circle-bar bg-primary-color-100 w-5 h-5 rounded-full"></div>
    </div>
    <div class="empty-bar bar bg-gray-color"></div>
    <div ref="bar" class="progress-bar bar bg-primary-color-100 absolute"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  data() {
    return {
      large: Number(100 / (this.limit / this.progress)).toFixed(1),
    };
  },
  props: {
    limit: {
      type: Number,
      required: true,
      default: 1000,
    },
    progress: {
      type: Number,
      required: true,
      default: 800,
    },
  },
  mounted() {
    const progressBar = this.$refs.bar;
    progressBar.style.width = `${this.large}%`;
    const data = this.$refs.data;
    data.style.left = `${this.large}%`;
    data.style.transform = `translate(-50%)`;
  },
};
</script>

<style scoped>
.bar {
  position: absolute;
  height: 10px;
  border-radius: 5px;
  bottom: 0;
  max-width: 100%;
}

.items-move {
  bottom: -5px;
  z-index: 9;
}

.bar-container {
  width: 90%;
  margin: auto;
}

.empty-bar {
  width: 100%;
}

.flag::after {
  content: "";
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: red;
  transform: rotate(45deg) translatex(-50%) skew(15deg, 15deg);
  border-radius: 5px;
  background: #d9d9d9;
  left: 46%;
  top: 20px;
  z-index: -1;
}
</style>
