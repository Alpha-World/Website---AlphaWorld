<template>
  <div class="w-full h-[51rem] border bg-[url('/images/Hero-bg.png')]">
    <Flex class="w-3/4 mx-auto h-full" :level="2">
        <div class="w-full h-1/3">

            <Flex class="gap-[2rem]" :level="2">
              <h2 class="text-6xl border mt-[2rem] font-semibold">
                The Super App For Everything
              </h2>
              <div class="w-3/4 h-[4.8rem]">
                <Flex :level="2">
                  <h4 class="font-bold text-[1.5rem]">Betrayed By Your Own Phone</h4>
                  <p class="text-xs">
                    Every App on your device tracks & spies on you then steals your
                    data without paying you, Except AlphaWorld
                  </p>
                </Flex>
              </div>
            </Flex>
        </div>
        <div class="w-full relative  h-2/3">
            <img class="absolute z-[100] left-1/2 -translate-x-1/2 -bottom-24 w-3/4  rounded-md shadow-sm after:content-none after:w-full after:absolute after:border w" src="/images/Heading-main.png" alt="">
        </div>

    </Flex>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
