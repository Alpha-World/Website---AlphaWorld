<template>
  <div class="w-full lg:h-[51rem] relative h-[32rem] bg-white">
    <Flex :level="1" class="hidden lg:flex">
      <div class="lg:basis-3/5 w-full pl-1 h-full">
        <img src="/images/Merch.png" class="w-[100%] h-[100%]" alt="" />
      </div>
      <div class="basis-2/5 lg:static absolute h-full">
        <Flex :level="2" class="justify-center">
          <h4 class="w-4/5 mx-auto text-center mb-4">
            Click to Join AlphaWorld’s Community & get an exclusive AlphaWorld
            T-Shirt for Free
          </h4>
          <div class=" flex gap-2">
           
              <!-- <a target="_blank" href="https://t.me/AlphaWorldApp">
                <img src="/images/telegram.png" alt="" />
              </a> -->

              <button class="border-[#0027A6] border-b-4 rounded-[3.5rem] border-[1px] px-9 py-[0.9175rem] ">
                <a target="_blank" href="https://t.me/AlphaWorldApp">
                  Telegram
                </a>
              </button>
              <button class="border-[#0027A6] border-b-4 rounded-[3.5rem] border-[1px] px-9 py-[0.9175rem] ">
                <a target="_blank" href="https://chat.whatsapp.com/Iz4YdJb4wko9s6lhM81858">
                  Whatsapp
                </a>
              </button>   
            

            <!-- <span
              class="w-10 h-10 border flex items-center justify-center rounded-full"
            >
              <a
                target="_blank"
                href="https://chat.whatsapp.com/Iz4YdJb4wko9s6lhM81858"
              >
                <img src="/images/whatsapp.png" alt="" />
              </a>
            </span> -->
          </div>
        </Flex>
      </div>
    </Flex>
    <div
      class="w-full lg:hidden h-full mt-2 pt-4 bg-[url(/images/Merch-mobile.png)]"
    >
      <h4 class="w-4/5 mx-auto text-center text-base py-4">
        Click
        <span class="text-blue-800">
          <a target="_blank" href="https://wa.link/hnx1mz"> here </a>
        </span>
        to Join AlphaWorld’s Community & get an exclusive AlphaWorld T-Shirt for
        Free
      </h4>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
