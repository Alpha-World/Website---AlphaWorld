<template>
  <div class="bg-blue-50/60 py-[5.3rem] w-full">
    <div class="">
      <!-- Header -->
      <Flex :level="1">
        <h2 class="text-2xl lg:text-4xl capitalize py-4 font-bold">
          Some sections of Alpha World
        </h2>
      </Flex>
    </div>
    <!-- Desktop Grid -->
    <Grid class="hidden lg:grid gap-8">
      <div class="w-full" v-for="(data, index) in gridDataMobile">
        <div class="h-full flex flex-col items justify-start items-start">
          <Flex
            :level="1"
            
            class="basis-2/3 relative px-[6rem] py-[2rem]  items-start justify-start rounded-xl bg-indigo-400/60"
          >
            <img
              class="items-start justify-start bottom-0"
              :src="data.image"
              alt=""
            />
          </Flex>
          <div
            :level="2"
            class="flex gap-4 flex-col items-start justify-start pb-2 pt-4"
          >
            <h2 class="text-left text-2xl font-bold">
              {{ data.header }}
            </h2>
            <p class="text-gray-600 w-[87%] text-base">
              {{ data.text.substring(0, 236) }}
              <button
                @click="() => (modalDisplay = data.image)"
                class="text-blue-800"
              >
                ...Read more
              </button>
            </p>
          </div>
        </div>

        <!-- Desktop Modals slider -->

        <teleport to="body">
          <div
            v-if="modalDisplay == data.image"
            class="fixed z-[1006] modal pt-6 bg-black/50 flex items-center justify-center h-screen w-screen"
          >
            <swiper
              :slides-per-view="1"
              :space-between="50"
              :scrollbar="{ draggable: true }"
              :navigation="true"
              :modules="nav"
              class="w-full lg:hidden mx-auto display flex items-center justify-center"
            >
              <swiper-slide
                v-for="content in gridDataMobile"
                class="flex w-[80%] items-center justify-center"
              >
                <p
                  @click="closeModal()"
                  class="cursor-pointer absolute top-6 right-44 h-8 flex items-center justify-center w-8 border-black border rounded-full"
                >
                  X
                </p>
                <Flex :level="2" class="w-[80%] gap-4">
                  <div
                    class="h-[60vh] py-4 overflow-scroll flex flex-col items-center justify-center w-[80%] bg-white pt-6 rounded-2xl"
                  >
                    <img :src="content.image" class="max-w-[11rem]" alt="" />
                    <div class="w-[80%]">
                      <Flex :level="2" class="mx-auto my-4">
                        <h2 class="text-base font-semibold">
                          {{ content.header }}
                        </h2>
                        <h2 class="text-sm text-gray-700">
                          {{ content.text }}
                        </h2>
                      </Flex>
                    </div>
                  </div>
                </Flex>
              </swiper-slide>

              ...
            </swiper>
          </div>
        </teleport>
        <!-- -->
      </div>
    </Grid>
    <!-- Mobile Slider -->
    <div class="min-h-[48rem] border lg:hidden w-full">
      <swiper
        :slides-per-view="1"
        :space-between="50"
        :scrollbar="{ draggable: true }"
        :navigation="true"
        :modules="nav"
        class="w-full lg:hidden mx-auto display flex items-center min-h-[100%] h-[70%] justify-center"
      >
        <swiper-slide
          v-for="(data, index) in gridDataMobile"
          class="flex w-[80%] border-red-700 items-center justify-center"
        >
          <Flex :level="2" class="w-[80%] gap-4">
            <div
              class="min-h-3/5 bg-indigo-400/60 flex justify-center w-[80%] py-2 rounded-2xl"
            >
              <img :src="data.image" class=" " alt="" />
            </div>
            <div class="w-[80%]">
              <Flex :level="2" class="mx-auto">
                <h2 class="text-base text-left font-semibold">
                  {{ data.header }}
                </h2>

                <ExpandableContentMobile
                  :content="data.text"
                  :visible-lines="6"
                />
              </Flex>
            </div>
          </Flex>
        </swiper-slide>

        ...
      </swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { SwiperModule } from "swiper/types";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const nav = [Navigation, Autoplay];
const gridData = [
  {
    text: "Have fun with audio comments on a social media platform that promotes interesting content for free.\
                    Time to build a loyal community and gain popularity quickly with just a few posts",
    image: "/images/Alphamedia.png",
    header: "AlphaMedia ",
  },
  {
    text: "Introducing Swipe & Video Meet with your Future - the ultimate platform for instantly meeting strangers who share your interests for either dating or business networking. Whether you're...",
    image: "/images/Alphameet.png",
    header: "AlphaMeet",
  },
  {
    text: "You can now invest in start-ups, Talented individuals, Assets and Real Estate. Our unique concept allows you make large scale and small scale investments alongside many other investors.",
    image: "/images/Alpha-invest.png",
    header: "Alpha Investment app",
  },
  {
    text: "A business hub and marketplace, where you can find everything you need. Our platform allows users to list themselves as vendors and connect with potential customers to sell their products or deliver...",
    image: "/images/Alpha-business.png",
    header: "Alpha Business",
  },
  {
    text: "An advanced messaging platform, where you can take control of your text and picture messages like never before. With our platform, you have the option to restrict screenshots, saving, copying, and forwarding of messages you send, giving you complete control over your conversations"
+
"In addition, our platform offers you the ability to edit sent messages and unsend a message without any notifications, allowing you to communicate with confidence and peace of mind." +
"Our messaging platform is also the most secure on the market, so you can feel confident that your conversations are always protected. Join us today to experience messaging like never before,",
    image: "/images/Alpha-chat.png",
    header: "Alpha Chat",
  },
  {
    text: "More than just a wallet with an aim to become your own personal banky",
    image: "/images/Alpha-wallet.png",
    header: "Alpha Digital wallet",
  },
  {
    text: "More than just a wallet with an aim to become your own personal banky",
    image: "/images/Alpha-wallet.png",
    header: "Alpha Digital wallet",
  },
];
const gridDataMobile = [
  {
    text: "Have fun with audio comments on a social media platform that promotes interesting contents for free. Time to build a loyal community and gain popularity quickly then turn your talent, creativity and love for social media into a company that pays you on AlphaWorld",
    image: "/images/Alphamedia.png",
    header: "AlphaMedia ",
  },
  {
    text: "Introducing Swipe & Video Meet with your Future - the ultimate platform for instantly meeting strangers who share your interests for either dating or business networking. Whether you're",

    image: "/images/Alphameet.png",
    header: "AlphaMeet",
  },
  {
    text: "You can now invest in start-ups, Talented individuals, Assets and Real Estate. Our unique concept allows you make large scale and small scale investments alongside many other investors. ",
    image: "/images/Alpha-invest.png",
    header: "Alpha Investment World",
  },
  {
    text: "Here you can make yourself a business and find businesses, buy and sell, hire professionals from every field, hire talents, get hired as a service provider, get hired as an individual with a talent, rent apartments, and much more.",
    image: "/images/Alpha-business.png",
    header: "Alpha Business Hub",
  },
  {
    text: "Payments are simplified to just a click on AlphaPay",
    image: "/images/Alpha-pay.png",
    header: "AlphaPay",
  },
  {
    text: "More than just a wallet with an aim to become your own personal bank",
    image: "/images/Alpha-wallet.png",
    header: "Alpha Digital wallet",
  },
  {
    text: "An advanced messaging platform, where you can take control of your text and picture messages like never before. With our platform, you have the option to restrict screenshots, saving, copying, and forwarding of messages you send, giving you complete control over your conversations.In addition, our platform offers you the ability to edit sent messages and unsend a message without any notifications, allowing you to communicate with confidence and peace of mind.Our messaging platform is also the most secure on the market, so you can feel confident that your conversations are always protected. Join us today to experience messaging like never before.",

    image: "/images/Alpha-chat.png",
    header: "Alpha Chat",
  },
];
const visibleLines = 4;
const modalDisplay = ref<String>("");
const modalIndex = ref<Number>(1);
const isExpanded = ref(false);
const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value;
  console.log(isExpanded.value);
};
const toggleCtaLabel = computed(() =>
  isExpanded.value ? "Read less" : "Read more"
);
const toggleModal = (index: number) => {
  modalIndex.value = index;

  // console.log('yes');
};
const closeModal = () => {
  modalDisplay.value = "";
};
</script>

<style scoped>
.vueperslides__inner {
  height: 60vh;
}
.content-full {
  max-height: calc(24px * v-bind(visibleLines));
}
.swiper-button-prev {
  color: black;
  background-color: black;
}
.swiper-button-next {
  color: black;
  background-color: black;
}
.swiper-button-prev {
  color: black;
  background-color: black;
}
</style>
