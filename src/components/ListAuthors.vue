<script setup lang="ts">

</script>

<template>
    <section class="flex flex-col px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <h1 class="self-center text-4xl font-bold tracking-tighter leading-none text-gray-800">
            List of Authors
        </h1>
        <main class="mt-10 w-full max-md:mt-10 max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col">
                <router-link to="/author" class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                    <div
                        class="flex flex-col grow items-center px-14 py-10 w-full leading-none max-md:px-5 max-md:mt-8 bg-zinc-100 hover:bg-orange-50">
                        <img src="@/assets/images/icon/floyd.png" />
                        <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">Floyd Miles</h2>
                        <p class="mt-2 text-sm text-center text-zinc-500">Content Writer @Company</p>
                        <img src="@/assets/images/icon/Social wrapper.png" class="mt-3">
                    </div>
                </router-link>
                <router-link to="/author" class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                    <div
                        class="flex flex-col grow items-center px-14 py-10 w-full leading-none max-md:px-5 max-md:mt-8 bg-zinc-100 hover:bg-orange-50">
                        <img src="@/assets/images/icon/Dianne.png" />
                        <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">Dianne Russell</h2>
                        <p class="mt-2 text-sm text-center text-zinc-500">Content Writer @Company</p>
                        <img src="@/assets/images/icon/Social wrapper.png" class="mt-3">
                    </div>
                </router-link>
                <router-link to="/author" class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                    <div
                        class="flex flex-col grow items-center px-14 py-10 w-full leading-none max-md:px-5 max-md:mt-8 bg-zinc-100 hover:bg-orange-50">
                        <img src="@/assets/images/icon/Jenny.png" />
                        <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">Jenny Wilson</h2>
                        <p class="mt-2 text-sm text-center text-zinc-500">Content Writer @Company</p>
                        <img src="@/assets/images/icon/Social wrapper.png" class="mt-3">
                    </div>
                </router-link>
                <router-link to="/author" class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                    <div
                        class="flex flex-col grow items-center px-14 py-10 w-full leading-none max-md:px-5 max-md:mt-8 bg-zinc-100 hover:bg-orange-50">
                        <img src="@/assets/images/icon/Leslie.png" />
                        <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">Leslie Alexander</h2>
                        <p class="mt-2 text-sm text-center text-zinc-500">Content Writer @Company</p>
                        <img src="@/assets/images/icon/Social wrapper.png" class="mt-3">
                    </div>
                </router-link>
            </div>
        </main>
    </section>
</template>