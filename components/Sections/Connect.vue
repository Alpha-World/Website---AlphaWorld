<template>
  <div class="bg-white h-screen">
    <div class="lg:w-4/5 mx-auto text-white h-full">
      <Flex :level="2" class="justify-center">
        <div
          class="bg-blue-800 h-[8rem] lg:h-[12rem] mb-20 rounded-xl w-[85%] lg:w-[60%]"
        >
          <Flex class="justify-center lg:gap-4" :level="2">
            <h2 class="lg:text-xl lg:w-3/4 w-full text-sm text-center">
              Click <span class="text-blue-400 lg:hidden">here</span> to Join
              AlphaWorld’s Community & get an exclusive AlphaWorld T-Shirt for
              Free
            </h2>
            <div class="lg:w-[45%] w-[80%] mx-auto h-2/5">
              <Flex class="justify-between lg:text-base text-sm" :level="1">
                <Button class="gap-2" :level="1">
                  Telegram
                  <div class="w-[2rem]">
                    <img src="/images/telegram.png" alt="" />
                  </div>
                </Button>
                <Button class="gap-2" :level="1">
                  Whatsapp
                  <div class="w-[2rem]">
                    <img src="/images/whatsapp.png" alt="" />
                  </div>
                </Button>
              </Flex>
            </div>
          </Flex>
        </div>
        <div class="lg:h-[12rem] h-[40%] lg:w-full w-[90%]">
          <Flex
            :level="2"
            class="pt-2 lg:w-full gap-8 text-center text-[#1E1E1E]"
          >
            <h4
              class="lg:text-4xl text-xl lg:w-full lg:leading-[122%] font-bold"
            >
              The ultimate solution to all your <br class="hidden lg:block" />
              digital
              <span class="text-blue-800"> needs </span>
            </h4>
            <p class="text-base hidden lg:block text-gray-900 text-opacity-80">
              AlphaWorld “The SuperApp For Everything” is a secure all-in-one
              platform which offers an abundance of features including: Data
              Wallet which pays for your data, Social Media with audio comments,
              Business-Hub for all professionals, services & products, Market
              place for Vendors, VideoMeet for Love & Business Networking,
              Highly Encrypted Messenger, Advanced search engine, Digital Cash &
              Crypto Wallet which gives higher interest rates on savings,
              Multiple shared economy business models...
              <span class="text-blue-800"> Read More </span>
            </p>
            <div class="w-[90%] text-left text-base mx-auto lg:hidden block">
              <h5 class="text-left">
                AlphaWorld “The SuperApp For Everything” is a secure all-in-one
                platform which offers an abundance of features including
              </h5>
              <ul class="text-stone-900 w-[90%] mx-auto list-disc">
                <li class="">Data Wallet which pays for your data</li>
                <li class="">Social Media with audio comments,</li>
                <li class="">
                  Business-Hub for all professionals, services & products
                </li>
                <li class="">Market place for Vendors,</li>
                <li class="">VideoMeet for Love & Business Networking,</li>
                <li class="">Highly Encrypted Messenger,</li>
                <li class="">Advanced search engine,</li>
                <li class="">
                  Digital Cash & Crypto Wallet which gives higher interest rates
                  on savings,
                </li>
                <li class="">
                  Multiple shared economy business models, and much more..
                </li>
              </ul>
            </div>
          </Flex>
        </div>
      </Flex>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
