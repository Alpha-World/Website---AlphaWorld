<template>
  <div class="w-full lg:pt-[4.4rem] py-[3rem]  lg:py-[12.4rem]   border bg-[url('/images/Hero-bg.png')] bg-cover bg-[40%] bg-no-repeat">
    <Flex class="lg:w-3/4 w-[75%]  text-gray-700 border-black mx-auto" :level="2">
        <div class="w-full  ">

            <Flex class="lg:gap-[2rem] gap-[1.5rem] justify-center"  :level="2">
              <h2 class="text-xl mb-[0rem] lg:mb-[3rem] lg:text-6xl  lg:mt-[2rem] font-semibold">
                The All In-One App
              </h2>
              <div class="lg:w-3/4 text-sm text-center lg:text mb-[4.8rem]">
                <Flex :level="2" class="gap-2">
                  <h4 class="font-bold lg:text-[1.5rem]">Betrayed By Your Own Phone?</h4>
                  <p class=" max-w-[80%] font-normal text-sm text-[#676767]">
                    Apps on your device tracks & spies on you then sells your data without paying you, Except <span class="text-stone-900">AlphaWorld</span> 
                  </p>
                </Flex>
              </div>
            </Flex>
        </div>
        
        <div class="w-[60%]  lg:block hidden  shadow-lg absolute z-[100] left-1/2 -translate-x-1/2 top-1/2  rounded-md   ">
            <img class="lg:w-full" src="/images/Heading-main.png" alt="">
        </div>
    </Flex>
    <div class="w-[85%] mx-auto  lg:hidden block relative  ">
        <img class="absolute z-[100] left-1/2 -translate-x-1/2 -top-[3rem] w-full   rounded-md shadow-sm after:content-none after:w-full after:absolute after:border w" src="/images/Heading-main.png" alt="">
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
