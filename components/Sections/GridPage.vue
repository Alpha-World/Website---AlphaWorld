<template>
  <div class="bg-blue-50/60 lg:h-[108rem] h-[70vh] w-full">
    <div class="h-[10%] ">
      <Flex :level="1">
        <h2 class="text-3xl capitalize font-bold">
          <q> The Only App You Need </q>
        </h2>
      </Flex>
    </div>
    <Grid class="max-h-[87%] hidden lg:grid">
      <div class="w-full h-full" v-for="data in gridData">
        <div  class="w-full h-full  items justify-start  items-start">
          <Flex
            :level="1"
            class="max-h-[60%]  relative max-w-[85%] items-start justify-start rounded-xl bg-indigo-400/60"
          >
            <img class="absolute  items-start justify-start bottom-0 h-[95%]" :src="data.image" alt="" />
          </Flex>
          <div :level="2" class="h-1/4 flex gap-4 flex-col items-start justify-start pb-2 pt-4">
            <h2 class="text-left text-2xl font-bold " >
                {{ data.header }}
            </h2>
            <p class="text-gray-600 text-base">
                {{ data.text }}
            </p>
          </div>
        </div>
      </div>
    </Grid>
  </div>
</template>

<script setup lang="ts">
const gridData = [
  {
    text: "Have fun with audio comments on a social media platform that promotes interesting content for free.\
                    Time to build a loyal community and gain popularity quickly with just a few posts",

    image: "/images/Alphamedia.png",
    header: "Alphamedia app",
  },
  {
    text: "Have fun with audio comments on a social media platform that promotes interesting content for free.\
                    Time to build a loyal community and gain popularity quickly with just a few posts",

    image: "/images/Alphameet.png",
    header: "Alphamedia app",
  },
  {
    text: "Have fun with audio comments on a social media platform that promotes interesting content for free.\
                    Time to build a loyal community and gain popularity quickly with just a few posts",

    image: "/images/Alpha-business.png",
    header: "Alpha Meet app",
  },
  {
    text: "Have fun with audio comments on a social media platform that promotes interesting content for free.\
                    Time to build a loyal community and gain popularity quickly with just a few posts",

    image: "/images/Alpha-invest.png",
    header: "Alphamedia app",
  },
  {
    text: "Have fun with audio comments on a social media platform that promotes interesting content for free.\
                    Time to build a loyal community and gain popularity quickly with just a few posts",

    image: "/images/Alpha-chat.png",
    header: "Alphamedia app",
  },
  {
    text: "Have fun with audio comments on a social media platform that promotes interesting content for free.\
                    Time to build a loyal community and gain popularity quickly with just a few posts",

    image: "/images/Alpha-wallet.png",
    header: "Alphamedia app",
  },
];
</script>

<style scoped></style>
