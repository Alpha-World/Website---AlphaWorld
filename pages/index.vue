<template>
	<div
		class="max-w-[100vw] page overflow-x-hidden"
	>
		<Navbar></Navbar>
		<SectionsHeader />
		<SectionsConnect />
		<SectionsGridPage />
		<SectionsInfo />
		<SectionsMerch />
		<SectionsInvestor />
		<SectionsFooter />
	</div>
</template>

<script setup lang="ts">
	useSeoMeta({
		title: "The all in one App",
		description:
			"Download Alphaworld app today and enjoy seamless communication with your friends and family through our chat and video call features. Stay up-to-date with the latest stock prices and make informed investment decisions with our finance offerings. Protect your future with our insurance options. Download now!",
		robots: "index",
        viewport:'width=device-width, initial-scale=1',
        
        
	});
	useServerSeoMeta({
		title: "The all in one App",
		description:
		"Download Alphaworld app today and enjoy seamless communication with your friends and family through our chat and video call features. Stay up-to-date with the latest stock prices and make informed investment decisions with our finance offerings. Protect your future with our insurance options. Download now!",
		robots: "index",
		viewport:'width=device-width, initial-scale=1',
		
	});
</script>

<style scoped></style>
