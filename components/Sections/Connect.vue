<template>
	<div
		class="bg-white lg:pb-[4rem] pt-[2.5rem] lg:pt-[8rem] lg:pb mt-[12rem]"
	>
		<div class="lg:max-w-[75vw] mx-auto text-white">
			<Flex :level="2" class="justify-center">
				<div
					class="bg-[#0027A6] mb-8 lg:mb-20 rounded-xl w-[85%] lg:w-[60%]"
				>
					<Flex
						class="justify-center lg:gap-4"
						:level="2"
					>
						<h2
							class="lg:text-xl py-[1.2rem] lg:w-3/4 w-full text-sm text-center"
						>
							Click
							<span
								class="text-blue-400 lg:hidden"
							>
								<a
									target="_blank"
									href="https://chat.whatsapp.com/Iz4YdJb4wko9s6lhM81858"
								>
									here
								</a>
							</span>
							to Join AlphaWorld’s Community & get
							an exclusive AlphaWorld T-Shirt for
							Free
						</h2>
						<div
							class="lg:w-[45%] w-[70%] mb-[1.4rem] mx-auto h-2/5"
						>
							<Flex
								class="lg:justify-between gap-4 lg:text-base text-sm"
								:level="1"
							>
								<a
									target="_blank"
									href="https://t.me/AlphaWorldApp"
									class=""
								>
									<button
										class="border-white border-b-4 rounded-[3.5rem] border-[1px] px-4 py-[0.6rem] lg:px-9 lg:py-[0.9175rem]"
									>
										Telegram
									</button>
								</a>
								<a
									target="_blank"
									href="https://chat.whatsapp.com/Iz4YdJb4wko9s6lhM81858"
									class="gap-2 flex flex-row border-1"
								>
									<button
										class="border-white border-b-4 rounded-[3.5rem] border-[1px] px-4 py-[0.6rem] lg:px-9 lg:py-[0.9175rem]"
									>
										Whatsapp
									</button>
								</a>
							</Flex>
						</div>
					</Flex>
				</div>
				<div class="lg:w-full w-[90%]">
					<Flex
						:level="2"
						class="pt-0 lg:w-full gap-4 lg:gap-8 text-center text-[#1E1E1E]"
					>
						<h4
							class="lg:text-4xl mb-2 capitalize text-xl lg:w-full lg:leading-[122%] font-bold"
						>
							The ultimate solution to all your
							<br class="hidden lg:block" />
							digital
							<span
								class="text-blue-800 capitalize]"
							>
								needs
							</span>
						</h4>
						<div class="flex flex-col">
							<p class="hidden  lg:block">
								AlphaWorld is a secure all-in-one
								easy to use mobile app which
								provides multiple solutions with
								features ranging from:
							</p>
							<ExpandableContent
								:content="text"
								:visible-lines="4"
								class="hidden lg:block"
							/>
						</div>
						<div
							class="w-[90%] pb-[2rem] text-left text-base mx-auto lg:hidden block"
						>
							<h5 class="text-left">
								AlphaWorld is a secure all-in-one
								easy to use mobile app which
								provides multiple solutions with
								features ranging from:
							</h5>
							<ul
								class="text-stone-900 w-[90%] mx-auto list-disc"
							>
								<li class="">
									A Social Media with audio
									comments & 5 Star ratings rather
									than likes,
								</li>
								<li class="">
									Video-Meet for Love & Business
									Networking instead of chats on
									dating apps,
								</li>
								<li class="">
									Business-Hub for all types of
									professionals, talents,
									investors & services,
								</li>
								<li class="">
									Marketplace for all types of
									Vendors & products,
								</li>
								<li class="">
									Secure Messaging platform,
								</li>
								<li class="">
									Data Wallet which allows users
									sell their data or erase it from
									the apps database,
								</li>
								<li class="">
									Digital Cash Wallet which gives
									users higher interest rates on
									savings,
								</li>

								<li class="">
									Digital Crypto Wallet
								</li>
								<li class="">
									Multiple shared economy business
									models, and much more
									<ExpandableContentMobile
										:content="textMobile"
										:visible-lines="0"
										class=""
									/>
								</li>
							</ul>
						</div>
					</Flex>
				</div>
			</Flex>
		</div>
	</div>
</template>

<script setup lang="ts">
	const space = "<br>";
	const textttt = `AlphaWorld is a secure all-in-one easy to use mobile app which provides multiple solutions with features ranging from:
 `;
	const text =
		" A Social Media with audio comments & 5 Star ratings rather than likes, Video-Meet for Love & Business Networking instead of chats on dating apps, Business-Hub for all types of professionals, talents, investors & services, Marketplace for all types of Vendors & products, Secure Messaging platform, Advanced search engine,  Data Wallet which allows users sell their data or erase it from the apps database, Digital Wallet which gives users higher interest rates on savings, Multiple shared economy business models, and much more" +
		"<br>" +
		"<br>" +
		"Aimed to solve multiple digital problems across several industries in one easy to use app, what sets AlphaWorld apart from the competition is its uncompromising focus on user privacy and security. While other apps exploit your data for profit, AlphaWorld puts users back in control by giving them the power to share and earn, or erase their data from its database." +
		"<br>" +
		"<br>" +
		"In addition, AlphaWorld is committed to prioritizing data security and ensuring that users can freely express themselves without fear of government censorship or manipulation. The platform rewards active users who spend time on the platform by offering higher earnings from their data share." +
		"<br>" +
		"<br>" +
		"With AlphaWorld, you can finally enjoy a seamless and secure digital experience without having to juggle multiple apps. Say goodbye to data breaches and hello to convenience with The Only App You Need - AlphaWorld.";

	const textMobile =
		"Aimed to solve multiple digital problems across several industries in one easy to use app, what sets AlphaWorld apart from the competition is its uncompromising focus on user privacy and security. While other apps exploit your data for profit, AlphaWorld puts users back in control by giving them the power to share and earn, or erase their data from its database." +
		"<br>" +
		"<br>" +
		"In addition, AlphaWorld is committed to prioritizing database  security and ensuring that users can freely express themselves without fear of government censorship or manipulation. \
The platform rewards active users who spend time on the platform by offering higher earnings from their data share." +
		"<br>" +
		"<br>" +
		"With AlphaWorld, you can finally enjoy a seamless and secure digital experience without having to juggle multiple apps. Say goodbye to data breaches and hello to convenience with The Only App You Need - AlphaWorld.";

	// const renderedTextMobile=textMobile.replace(/\n/g,"<br")
</script>

<style scoped></style>
