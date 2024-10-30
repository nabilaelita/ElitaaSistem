<script setup lang="ts">

</script>

<template>
    <main class="pt-5">
        <section
            class="flex flex-col items-center text-base text-center text-gray-800 rounded-none max-w-[749px] mx-auto mt-32">
            <h2 class="font-black leading-none uppercase tracking-[3px]">
                Contact us
            </h2>
            <h3 class="mt-3 text-5xl font-bold tracking-tighter leading-none max-md:max-w-full max-md:text-4xl">
                Let's Start a Conversation
            </h3>
            <p class="z-10 self-stretch mt-6 w-full leading-7 text-zinc-500 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim.
            </p>
        </section>

        <section data-layername="contactUs" class="flex flex-col max-w-screen-md mx-auto mt-16">
            <div data-layername="background" class="px-16 py-12 w-full bg-amber-300 max-md:px-5 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col">
                    <div data-layername="column" class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div
                            class="flex flex-col grow items-start text-xl leading-relaxed text-neutral-600 max-md:mt-10">
                            <h2 data-layername="workingHours" class="text-sm leading-none opacity-60">Working hours</h2>
                            <hr data-layername="line"
                                class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600" />
                            <p data-layername="mondayToFriday" class="mt-4 font-bold">Monday To Friday</p>
                            <p data-layername="900AmTo800Pm" class="font-bold">9:00 AM to 8:00 PM</p>
                            <p data-layername="ourSupportTeamIsAvailable247" class="text-base leading-7 opacity-60">Our
                                Support Team is available 24/7</p>
                        </div>
                    </div>
                    <div data-layername="column" class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <div class="flex flex-col items-start text-neutral-600 max-md:mt-10">
                            <h2 data-layername="contactUs" class="text-sm leading-none opacity-60">Contact Us</h2>
                            <hr data-layername="line"
                                class="shrink-0 self-stretch mt-4 h-px border border-solid opacity-10 bg-neutral-600 border-neutral-600" />
                            <p data-layername="02079932905" class="mt-4 text-xl font-bold leading-relaxed">020 7993 2905
                            </p>
                            <p data-layername="helloFinsweetCom" class="text-base leading-7 opacity-60">
                                hello@finsweet.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="flex flex-col max-w-screen-md text-base leading-7 text-gray-800 rounded-sm mx-auto mt-8">
            <div
                class="gap-2.5 self-stretch p-6 rounded-sm border border-solid border-zinc-500 border-opacity-50 max-md:px-5">
                <label for="fullNameInput" class="sr-only">Full Name</label>
                <input type="text" id="fullNameInput" placeholder="Full Name"
                    class="w-full bg-transparent outline-none" />
            </div>
            <div
                class="gap-2.5 self-stretch p-6 rounded-sm border border-solid border-zinc-500 border-opacity-50 max-md:px-5 mt-4">
                <label for="emailInput" class="sr-only">Your Email</label>
                <input type="text" id="emailInput" placeholder="Your Email"
                    class="w-full bg-transparent outline-none" />
            </div>

            <section
                class="flex flex-wrap gap-4 items-center max-w-screen-md text-base leading-7 text-gray-800 whitespace-nowrap mt-4">
                <div
                    class="flex flex-1 shrink gap-10 justify-between items-center self-stretch p-6 my-auto border border-solid basis-0 border-zinc-500 border-opacity-50 min-w-[240px] max-md:px-5">
                    <select id="provinceSelect" class="appearance-none bg-transparent border-none">
                        <option value="">Provinsi</option>
                    </select>
                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd9d8e38273624b2c454ad42c7e3db3a8baa83bf4a9011a27bb1ba0114f3e3b?placeholderIfAbsent=true&apiKey=d8efdd3231b64e858bb52f955a1feede"
                        alt="" class="object-contain shrink-0 self-stretch my-auto w-2 aspect-[2]" />
                </div>
                <div
                    class="flex flex-1 shrink gap-10 justify-between items-center self-stretch p-6 my-auto border border-solid basis-0 border-zinc-500 border-opacity-50 min-w-[240px] max-md:px-5">
                    <select id="citySelect" class="appearance-none bg-transparent border-none">
                        <option value="">Kota</option>
                    </select>
                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd9d8e38273624b2c454ad42c7e3db3a8baa83bf4a9011a27bb1ba0114f3e3b?placeholderIfAbsent=true&apiKey=d8efdd3231b64e858bb52f955a1feede"
                        alt="" class="object-contain shrink-0 self-stretch my-auto w-2 aspect-[2]" />
                </div>
            </section>

            <div data-layername="message"
                class="gap-2.5 px-6 pt-6 pb-24 rounded-sm border border-solid border-zinc-500 border-opacity-50 min-h-[144px] max-md:px-5 mt-4 ">
                <label for="messageInput" class="sr-only">Your Email</label>
                <input type="text" id="messageInput" placeholder="Message" class="w-full bg-transparent outline-none" />
            </div>
        </section>

        <section class="flex flex-col max-w-screen-md text-base leading-7 text-gray-800 rounded-sm mx-auto mt-4">
            <button data-layername="button"
                class="flex flex-col max-w-screen-md text-2xl font-bold leading-none text-gray-800">
                <div data-layername="background"
                    class="px-16 py-4 w-full bg-blue-600 max-md:px-5 max-md:max-w-full hover:text-white">
                    Send Message
                </div>
            </button>
        </section>
    </main>
</template>