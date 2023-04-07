<template>
    <div :class="type" class="">
       <slot>

       </slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  level: 1 | 2;
}>();
const type = computed(() => {
  switch (props.level) {
    case 1:
      return "py-2 px-4 flex justify-center rounded-md items-center border border-1 border-white";
    case 2:
      return "flex flex-col items-center  w-full h-full";

    default:
      break;
  }
});
</script>

<style scoped>

</style>