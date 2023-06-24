<template>
	<div class="bg-[#0027A6] text-white">
		<Flex :level="1">
			<div class="w-3/4 mx-auto pt-4">
				<Flex
					:level="2"
					class="lg:pt-8 lg:py-8 gap-4"
				>
					<div
						class="h-1/3 w-full flex flex-col items-center justify-center gap-4"
					>
						<img
							src="/images/Alpha-logo.png"
							class="lg:w-24 w-12"
							alt=""
						/>
						<img
							src="/images/Logo-name-footer.png"
							alt=""
							class="lg:w-48 w-[118px] py-4"
						/>
					</div>
					<em class="text-xl hidden lg:block"
						>The Best Of Everything In One App</em
					>
					<div
						class="w-[80vw] lg:w-[32rem] shadow-md lg:shadow-none justify-center lg:gap-4 flex items-center flex-row py-4 pr-1 pl-2 lg:px-0"
					>
						<p
							class="whitespace-nowrap lg:text-xl text-sm justify-self-end"
						>
							Coming soon...
						</p>
						<button
							class="bg-black ml-2 px-2 py-1 rounded-md hidden lg:flex lg:items-center"
						>
							<div class="basis-1/3">
								<img
									class="w-[1.2rem]"
									src="/images/Apple-logo.png"
									alt=""
								/>
							</div>
							<div
								class="basis-2/3 flex flex-col text-center text-xs lg:text-sm"
							>
								<p
									class="text-[10px] whitespace-nowrap"
								>
									Available on the
								</p>
								<p class="whitespace-nowrap">
									App Store
								</p>
							</div>
						</button>
						<button
							class="bg-black ml-2 px-2 py-1 rounded-md hidden lg:flex lg:items-center"
						>
							<div class="basis-1/3">
								<img
									class="w-[1.2rem]"
									src="/images/Play-store.png"
									alt=""
								/>
							</div>
							<div class="basis-2/3 text-sm">
								<p
									class="text-[10px] whitespace-nowrap"
								>
									Get it on
								</p>
								<p class="whitespace-nowrap">
									Google play
								</p>
							</div>
						</button>
						<button
							class="flex pl-2 bg-black h-[3rem] lg:hidden rounded-md items-center px-2"
						>
							<div class="basis-1/3 h-full">
								<img
									src="/images/Apple-logo.png"
									class="w-full py-2"
									alt=""
								/>
							</div>
							<div class="basis-2/3">
								<p class="lg:text-sm text-[6px]">
									Available on the
								</p>
								<p class="text-xs">App Store</p>
							</div>
						</button>

						<button
							class="flex bg-black h-[3rem] ml-2 lg:hidden rounded-md items-center px-2"
						>
							<div class="basis-1/3 h-full">
								<img
									src="/images/Play-store.png"
									class="w-full py-2"
									alt=""
								/>
							</div>
							<div class="basis-2/3">
								<p class="lg:text-sm text-[6px]">
									Available on the
								</p>
								<p class="text-xs">Play Store</p>
							</div>
						</button>
					</div>
					<div
						class="flex lg:mt-[3.5rem] flex-col lg:flex-col-reverse items-center h-2/5 w-full"
					>
						<div
							class="flex text-base gap-4 lg:flex-row font-light flex-col items-center h-2/3"
						>
							<p>Dubai UAE</p>
							<p>AlphaWorld@AlphaTech7.com</p>
							<p>+971 58 555 7797</p>
							<em class="lg:hidden"
								>The Best Of Everything In One
								App</em
							>
						</div>
						<div
							class="flex w-full h-1/3 py-4 justify-center gap-2 items-center"
						>
							<a
								href="https://instagram.com/alphaworldapp?igshid=YmMyMTA2M2Y="
								target="_blank"
							>
								<img
									src="/images/Instagram-white.png"
									alt=""
								/>
							</a>
							<a
								href="https://www.linkedin.com/company/alphatech7/"
								target="_blank"
							>
								<img
									src="/images/Linkedin-white.png"
									alt=""
								/>
							</a>
						</div>
					</div>
				</Flex>
			</div>
		</Flex>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
