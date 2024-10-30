<script setup lang="ts">
import About from './About.vue';
import ListAuthors from './ListAuthors.vue';
window.scrollTo(0, 0);
</script>

<template>
  <main class="pt-5">
    <section>
      <div class="">
        <div class="pt-80 px-32 relative text-black">
          <div class="text-ngawor absolute flex text-black z-10 left-32 -translate-y-64 translate-x-28">
            <div class="about-us bg-white p-16 max-w-[624px]">
              <p class="text-base tracking-wider">ABOUT US</p>
              <h3 class="text-4xl mt-4 font-bold">
                We are a team of content writers who share their learnings
              </h3>
            </div>
            <div class="about-us">
              <p class="text-base p-16 max-w-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <section
            class="flex absolute flex-col items-start px-20 pt-64 max-w-full min-h-[444px] w-[1280px] max-md:px-5 max-md:pt-24">
            <img loading="lazy"
              src="@/assets/images/misc/rangkulan-lebar.png"
              alt="Background image" class="object-cover absolute inset-0 size-full" />
          </section>
        </div>
      </div>

      <div data-layername="overview" class="flex flex-col md:px-20 mt-64">
        <div class="flex relative flex-col max-w-full w-[862px] ml-32">
          <div data-layername="background" class="px-12 py-8 max-w-full bg-blue-600 w-[630px] max-md:px-5">
            <div class="flex gap-5 max-md:flex-col">
              <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div class="flex flex-col grow text-white max-md:mt-10 mt-4">
                  <h3 class="self-start text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">12+</h3>
                  <p class="text-base leading-7">Blogs Published</p>
                </div>
              </div>
              <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full mt-4">
                <div class="flex flex-col grow text-white max-md:mt-10">
                  <h3 class="self-start text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">18K+</h3>
                  <p class="text-base leading-7">Views on Finsweet</p>
                </div>
              </div>
              <div class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full mt-4">
                <div class="flex flex-col grow text-white max-md:mt-10">
                  <h3 class="self-start text-6xl font-bold tracking-tighter leading-none max-md:text-4xl">30K+</h3>
                  <p class="text-base leading-7">Total Active Users</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-px">
            <div data-layername="shape" class="flex shrink-0 max-w-full bg-amber-300 h-[23px] w-[5500px]"></div>
          </div>
        </div>
      </div>

      <section class="mission mt-16">
        <div class="container mx-auto max-w-[1053px] mx-auto">
          <div class="flex gap-5 max-md:flex-col">
            <article class="w-6/12 max-md:w-full">
              <h2 class="text-base font-semibold uppercase tracking-[3px] text-gray-800">Our Mission</h2>
              <h3 class="mt-6 text-3xl font-bold tracking-tighter leading-10 text-gray-800">Creating valuable content
                for
                creatives all around the world</h3>
              <p class="mt-4 leading-7 text-zinc-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus
                viverra
                adipiscing at in tellus.
              </p>
            </article>

            <div class="shrink-0 w-px border border-solid opacity-40 bg-zinc-500 border-zinc-500 h-[310px] mx-5"></div>

            <article class="w-6/12 max-md:w-full">
              <h2 class="text-base font-semibold uppercase tracking-[3px] text-gray-800">Our Vision</h2>
              <h3 class="mt-6 text-3xl font-bold tracking-tighter leading-10 text-gray-800">A platform that empowers
                individuals to improve</h3>
              <p class="mt-4 leading-7 text-zinc-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus
                viverra
                adipiscing at in tellus.
              </p>
            </article>
          </div>
        </div>
      </section>
    </section>

    <section class="mx-auto mt-24" aria-labelledby="team-section-title">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-[43%] max-md:ml-0 max-md:w-full ml-28">
          <article class="flex flex-col mt-20 font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
            <h2 id="team-section-title" class="self-start text-4xl tracking-tighter leading-none text-gray-800">
              Our team of creatives
            </h2>
            <p class="mt-4 text-2xl leading-8 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <p class="mt-4 text-base leading-7 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat.
            </p>
          </article>
        </div>
        <div class="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
          <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a1d99e16744d4738773f31d27db311b7772a9e4ccd59e13b4fe4a8771374addf?apiKey=d8efdd3231b64e858bb52f955a1feede&"
            alt="Our creative team at work"
            class="object-contain grow w-full rounded-none aspect-[1.42] max-md:mt-10 max-md:max-w-full mx-auto" />
        </div>
      </div>
    </section>

    <section class="mx-auto mt-12">
      <div class="flex gap-5 max-md:flex-col">
        <div class="flex flex-col w-[37%] max-md:ml-0 max-md:w-full ml-28">
          <img loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20218505149f92625557cf0f22f61f6248f05c94bba9a70f11eca98e891afeb9?placeholderIfAbsent=true&apiKey=d8efdd3231b64e858bb52f955a1feede"
            alt="Illustration representing why we started this blog"
            class="object-contain grow w-full aspect-[1.21] max-md:mt-10 max-md:max-w-full" />
        </div>
        <div class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
          <article
            class="flex z-10 flex-col self-stretch my-auto font-bold text-gray-800 max-md:mt-10 max-md:mr-0 max-md:max-w-full">
            <h2 class="self-start text-4xl tracking-tighter leading-none text-gray-800">
              Why we started this Blog
            </h2>
            <p class="mt-4 text-2xl leading-8 max-md:mr-2 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <p class="mt-4 text-base leading-7 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat.
            </p>
          </article>
        </div>
      </div>
    </section>

    <ListAuthors />

    <section class="flex flex-col px-20 mt-8 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <main class=" w-full max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <router-link to="/author" class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col grow items-center px-14 py-10 w-full leading-none max-md:px-5 max-md:mt-8 bg-zinc-100 hover:bg-orange-50">
              <img src="@/assets/images/icon/Guy.png" />
              <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">Guy Hawkins</h2>
              <p class="mt-2 text-sm text-center text-zinc-500">Content Writer @Company</p>
              <img src="@/assets/images/icon/Social wrapper.png" class="mt-3">
            </div>
          </router-link>
          <router-link to="/author" class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col grow items-center px-14 py-10 w-full leading-none max-md:px-5 max-md:mt-8 bg-zinc-100 hover:bg-orange-50">
              <img src="@/assets/images/icon/Eleanor.png" />
              <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">Eleanor Pena</h2>
              <p class="mt-2 text-sm text-center text-zinc-500">Content Writer @Company</p>
              <img src="@/assets/images/icon/Social wrapper.png" class="mt-3">
            </div>
          </router-link>
          <router-link to="/author" class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col grow items-center px-14 py-10 w-full leading-none max-md:px-5 max-md:mt-8 bg-zinc-100 hover:bg-orange-50">
              <img src="@/assets/images/icon/Robert.png" />
              <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">Robert Fox</h2>
              <p class="mt-2 text-sm text-center text-zinc-500">Content Writer @Company</p>
              <img src="@/assets/images/icon/Social wrapper.png" class="mt-3">
            </div>
          </router-link>
          <router-link to="/author" class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col grow items-center px-14 py-10 w-full leading-none max-md:px-5 max-md:mt-8 bg-zinc-100 hover:bg-orange-50">
              <img src="@/assets/images/icon/Jacob.png" />
              <h2 class="mt-5 text-3xl font-bold tracking-tighter text-gray-800">Jacob Jones</h2>
              <p class="mt-2 text-sm text-center text-zinc-500">Content Writer @Company</p>
              <img src="@/assets/images/icon/Social wrapper.png" class="mt-3">
            </div>
          </router-link>
        </div>
      </main>
    </section>

    <About />
  </main>
</template>