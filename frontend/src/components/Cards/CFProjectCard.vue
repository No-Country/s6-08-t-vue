<template>
  <div
    class="w-[386px] h-[561px] bg-white p-5 rounded-lg overflow-hidden relative"
  >
    <div class="w-[346px] rounded-lg overflow-hidden">
      <slot name="img"></slot>
    </div>
    <div>
      <div class="font-bold text-black mt-2 text-lg">
        <slot name="title"></slot>
      </div>
      <div class="text-gray-500 font-semibold">
        <slot name="subtitle"></slot>
      </div>
      <div class="mt-3 max-h-24 text-sm font-medium">
        <slot name="description"></slot>
      </div>
    </div>
    <footer class="h-36">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "CFProjectCard",
};
</script>

<style lang="scss" scoped></style>
