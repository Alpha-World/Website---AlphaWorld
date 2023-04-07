<template>
  <div class="bg-white h-[51rem]">
    <div class="w-4/5 mx-auto text-white h-full">
      <Flex :level="2" class="justify-center  ">
        <div class="bg-blue-800 h-[12rem] mb-20 rounded-xl w-[60%]">
          <Flex class="justify-center gap-4" :level="2">
            <h2 class="text-xl w-3/4 text-center">
              Click to Join AlphaWorld’s Community & get an exclusive AlphaWorld
              T-Shirt for Free
            </h2>
            <div class="w-[45%]  mx-auto h-2/5">
              <Flex class="justify-between" :level="1">
                <Button class="gap-2" :level="1">
                  Telegram
                  <div class="w-[2rem]">
                    <img src="/images/logos-telegram.png" alt="" />
                  </div>
                </Button>
                <Button class="gap-2" :level="1">
                  Telegram
                  <div class="w-[2rem]">
                    <img src="/images/logos-whatsapp.png" alt="" />
                  </div>
                </Button>
              </Flex>
            </div>
          </Flex>
        </div>
        <div class="h-[12rem] ">
          <Flex :level="2" class="pt-2 gap-8 text-center text-[#1E1E1E]">
            <h4 class="text-4xl leading-[122%] font-bold">The ultimate solution to all your  <br> digital 
              <span class="text-blue-800">

                  needs
              </span>  
            </h4>
            <p class="text-base text-gray-900 text-opacity-80">
              AlphaWorld “The SuperApp For Everything” is a secure all-in-one
              platform which offers an abundance of features including: Data
              Wallet which pays for your data, Social Media with audio comments,
              Business-Hub for all professionals, services & products, Market
              place for Vendors, VideoMeet for Love & Business Networking,
              Highly Encrypted Messenger, Advanced search engine, Digital Cash &
              Crypto Wallet which gives higher interest rates on savings,
              Multiple shared economy business models...Read More
            </p>
          </Flex>
        </div>
      </Flex>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
