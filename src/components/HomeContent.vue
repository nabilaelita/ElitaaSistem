<script setup lang="ts">
import About from './About.vue';
import Category from './Category.vue';
import ListAuthors from './ListAuthors.vue';


</script>

<template >
  <main class="pt-5">
    <article data-layername="homeHero" class="flex flex-col text-base font-bold text-white">
      <section class="flex relative flex-col w-full min-h-[720px] max-md:max-w-full">
        <img loading="lazy" src="@/assets/images/misc/cover.png" alt="Background image for hero section"
          class="object-cover absolute inset-0 size-full" />
        <div data-layername="overlay"
          class="flex relative flex-col items-start px-20 py-40 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
          <header data-layername="postedOnStartup" class="font-semibold leading-none uppercase tracking-[3px]">
            <span class="font-medium">Posted on</span>
            <strong class="font-black"> startup</strong>
          </header>
          <h1 data-layername="stepByStepGuideToChoosingGreatFontPairs"
            class="mt-6 text-6xl tracking-tighter leading-[64px] w-[803px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
            Step-by-step guide to choosing great font pairs
          </h1>
          <time data-layername="byJamesWestMay232022" datetime="2022-05-23" class="mt-6 leading-7 text-blue-600">
            By <span class="text-blue-600">NabilEl</span> | Oct 27, 2024
          </time>
          <p data-layername="description" class="mt-4 leading-7 w-[599px] max-md:max-w-full">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </p>
          <button data-layername="button"
            class="gap-3 px-12 py-4 mt-12 mb-0 text-lg leading-none bg-blue-600 max-md:px-5 max-md:mt-10 max-md:mb-2.5"
            aria-label="Read more about font pairs guide">
            Read More &gt;
          </button>
        </div>
      </section>
    </article>

    <section class="flex flex-col px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div
        class="flex gap-5 justify-between text-4xl font-bold leading-none text-gray-800 max-md:mr-0.5 max-md:max-w-full">
        <h2 class="tracking-tighter">Featured Post</h2>
        <h2 class="tracking-tighter">All Posts</h2>
        <router-link to="/blog" class="my-auto text-base leading-7 text-amber-300 hover:text-amber-400">View
          All</router-link>
      </div>

      <main class="mt-8 w-full max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <article class="flex flex-col w-[48%] max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col items-start p-8 mx-auto w-full font-bold border-none shadow-lg max-md:px-5 max-md:mt-8 max-md:max-w-full hover:bg-yellow-100">
              <img loading="lazy"
                src="@/assets/images/misc/bangunan-putih.png"
                alt="Featured blog post" class="object-contain self-stretch w-full aspect-[1.9] max-md:max-w-full" />
              <div class="mt-8 text-sm font-medium leading-none text-amber-300">
                By <span class="text-amber-300">John Doe</span> | <time datetime="2022-05-23">May 23, 2022</time>
              </div>
              <h3 class="self-stretch mt-4 text-3xl tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </h3>
              <p class="mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </p>
              <router-link to="/blog/post"
                class="gap-3 px-12 py-4 mt-8 text-lg leading-none text-white bg-blue-600 max-md:px-5 hover:text-black hover:bg-x-yellow"
                tabindex="0">
                Read More &gt;
              </router-link>
            </div>
          </article>

          <aside class="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
              <article v-for="(post, index) in 4" :key="index"
                :class="['flex flex-col grow items-center px-14 py-10 w-full leading-none max-md:px-5 max-md:mt-8 bg-zinc-100 hover:bg-orange-50']">
                <div class="text-sm font-medium leading-none text-amber-300">
                  By <span class="text-amber-300">John Doe</span> | <time datetime="2021-08-23">Aug 23, 2021</time>
                </div>
                <h4 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h4>
              </article>
            </div>
          </aside>
        </div>
      </main>
    </section>

    <section data-layername="aboutUsOurMission"
      class="flex flex-col px-20 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c70f7be6c65e1aeb76cee8cd48a5a2cb205679fe0a4c6afe3ea9f80564c9ec4e?placeholderIfAbsent=true&apiKey=d8efdd3231b64e858bb52f955a1feede"
        alt="" class="object-contain self-end aspect-[45.45] max-w-[1061px] w-[1061px] max-md:max-w-full" />
      <section data-layername="background" class="px-20 py-24 w-full bg-purple-100 max-md:px-5 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <article class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow text-base font-bold text-gray-800 max-md:mt-10 max-md:max-w-full">
              <h2 data-layername="aboutUs" class="self-start font-semibold leading-none uppercase tracking-[3px]">
                ABOUT US
              </h2>
              <h3 data-layername="weAreACommunityOfContentWritersWhoShareTheirLearnings"
                class="mt-6 text-4xl tracking-tighter leading-10 max-md:max-w-full">
                We are a community of content writers who share their learnings
              </h3>
              <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliqua"
                class="mt-4 mr-6 leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <router-link to="/aboutus" data-layername="readMore"
                class="self-start mt-7 text-lg leading-8 text-amber-300 hover:text-blue-600" tabindex="0">
                Read More &gt;
              </router-link>
            </div>
          </article>
          <article class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col items-start text-base text-gray-800 max-md:mt-10 max-md:max-w-full">
              <h2 data-layername="ourMision" class="font-semibold leading-none uppercase tracking-[3px]">
                Our mision
              </h2>
              <h3 data-layername="creatingValuableContentForCreativesAllAroundTheWorld"
                class="mt-6 text-3xl font-bold tracking-tighter leading-10">
                Creating valuable content for creatives all around the world
              </h3>
              <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaUtEnimAdMinimVeniamQuisNostrudExercitationUllamcoLaborisNisiUtAliquipExEaCommodoConsequat"
                class="self-stretch mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
            </div>
          </article>
        </div>
      </section>
    </section>

    <section class="flex flex-col px-20 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 class="self-center text-4xl font-bold tracking-tighter leading-none text-gray-800">
        Choose A Category
      </h2>
      <Category />
    </section>


    <article class="mt-24 relative w-[1280px] h-[705px] mx-auto">
      <div class="absolute left-0 bottom-0 w-[820px] h-[705px]">
        <img loading="lazy"
          src="@/assets/images/misc/rangkulan.png"
          alt="Group of friends enjoying view" class="w-full h-full object-cover object-bottom" />
      </div>
      <div class="absolute right-0 bottom-0 bg-white w-[706px] h-[584px] p-20 shadow-lg z-10">
        <span class="block text-sm font-semibold uppercase tracking-[3px] text-gray-800">
          WHY WE STARTED
        </span>

        <h2 class="mt-6 text-5xl font-bold tracking-tighter leading-[64px] text-gray-800">
          It started out as a simple idea and evolved into our passion
        </h2>

        <p class="mt-6 text-base leading-7 text-gray-500 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>

        <button class="mt-8 px-12 py-4 bg-blue-600 text-white text-lg font-bold">
          Discover our story >
        </button>
      </div>
    </article>

    <ListAuthors />

    <section class="flex flex-col px-20 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div class="flex flex-row items-center">
        <article class="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
          <h2 data-layername="weAre" class="self-start text-sm leading-none opacity-60">
            We are
          </h2>
          <h1 data-layername="featuredIn" class="text-2xl font-bold leading-none">
            Featured in
          </h1>
        </article>
        <img loading="lazy" src="@/assets/images/icon/featured.png" alt="Featured publications logos"
          class="object-contain grow shrink-0 ml-4 max-md:max-w-full" />
      </div>
    </section>

    <section data-layername="testimonials"
      class="flex flex-col px-20 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div data-layername="background"
        class="flex justify-between items-start px-16 py-20 w-full bg-orange-50 max-md:px-5 max-md:max-w-full">
        <div class="flex flex-col w-1/2">
          <article class="flex flex-col items-start self-start mt-3 text-base text-gray-800">
            <h2 data-layername="testimoniaLs" class="font-semibold leading-none uppercase tracking-[3px]">
              TESTIMONIALS
            </h2>
            <h3 data-layername="whatPeopleSayAboutOurBlog" class="mt-3 text-4xl font-bold tracking-tighter leading-10">
              What people say about our blog
            </h3>
            <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTempor"
              class="self-stretch mt-4 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </p>
          </article>
        </div>

        <div class="shrink-0 w-px border border-solid opacity-40 bg-zinc-500 border-zinc-500 h-[310px] mx-5"></div>

        <div class="flex flex-col w-1/2">
          <article class="flex flex-col max-md:max-w-full">
            <aside
              data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliqua"
              class="self-start text-2xl font-bold leading-8 text-gray-800 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </aside>
            <div class="flex flex-wrap gap-5 justify-start items-start mt-28 w-full max-md:mt-10 max-md:max-w-full">
              <figure class="flex gap-4 mt-2">
                <img loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/325aaf33d5e04c88005089c84333104f671f86dbae035d823bfea6f90988d065?placeholderIfAbsent=true&apiKey=d8efdd3231b64e858bb52f955a1feede"
                  alt="Profile picture of Jonathan Vallem"
                  class="object-contain shrink-0 self-start w-12 rounded-full aspect-square" />
                <figcaption class="flex flex-col">
                  <h4 data-layername="jonathanVallem" class="text-2xl font-bold leading-none text-gray-800">
                    Jonathan Vallem
                  </h4>
                  <p data-layername="newYorkUsa" class="self-start text-base leading-7 text-zinc-500 mt-2">
                    New York, USA
                  </p>
                </figcaption>
              </figure>
              <div class="ml-12 flex gap-6">
                <button class="flex items-center p-0 bg-transparent border-none">
                  <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3f5ae0b05f88175949425804e6e1196fc776b109748d2aa18fea9d1861879d4?placeholderIfAbsent=true&apiKey=d8efdd3231b64e858bb52f955a1feede"
                    alt="" class="object-contain shrink-0 my-auto w-12 aspect-square" />
                </button>
                <button class="flex items-center p-0 bg-transparent border-none">
                  <img loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/07b676eb085c0c013528d5ff088726665c65f255584b47cb51e5c4e4b02268d0?placeholderIfAbsent=true&apiKey=d8efdd3231b64e858bb52f955a1feede"
                    alt="" class="object-contain shrink-0 aspect-square w-[62px]" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <About />
  </main>
</template>