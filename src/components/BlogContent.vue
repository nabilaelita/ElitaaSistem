<script setup lang="ts">
import About from './About.vue'
import Category from './CategoryContent.vue'
window.scrollTo(0, 0)
</script>

<template>
  <main class="pt-5">
    <article class="flex flex-col">
      <section class="p-20 w-full bg-gray-100 max-md:px-5 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <div class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col items-start self-stretch my-auto w-full font-medium max-md:mt-10 max-md:max-w-full"
            >
              <h2
                class="text-base leading-none text-gray-800 uppercase tracking-[3px]"
              >
                Featured Post
              </h2>
              <h1
                class="self-stretch mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full"
              >
                Step-by-step guide to choosing great font pairs
              </h1>
              <time
                datetime="2022-05-23"
                class="mt-4 text-sm leading-none text-amber-300"
              >
                By <span class="text-amber-300">John Doe</span> l May 23, 2022
              </time>
              <p
                class="self-stretch mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full"
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <router-link
                to="/blog/post"
                class="gap-3 px-12 py-4 mt-8 text-lg font-bold leading-none text-white bg-blue-600 max-md:px-5 hover:bg-x-yellow hover:text-black"
                tabindex="0"
                aria-label="Read more about choosing great font pairs"
              >
                Read More >
              </router-link>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="@/assets/images/misc/pria-di-depan-komputer.png"
              alt="Visual representation of font pairing guide"
              class="object-contain grow w-full aspect-[1.43] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </section>
    </article>

    <section
      data-layername="allBlogs"
      class="flex flex-col px-20 mt-16 w-full text-4xl font-bold tracking-tighter leading-none text-gray-800 rounded-none max-md:text-4xl"
    >
      <h1 data-layername="allPosts" class="self-start max-md:text-4xl">
        All posts
      </h1>
      <hr
        data-layername="allBlogsDivider"
        class="mt-8 w-full border border-solid bg-zinc-500 border-zinc-500 min-h-[1px] opacity-[0.32] max-md:max-w-full"
        aria-hidden="true"
      />
    </section>

    <article
      class="flex flex-col px-20 mt-5 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <section class="flex flex-row max-md:w-full mb-16">
        <div class="flex flex-col w-[35%] max-md:w-full">
          <img
            loading="lazy"
            src="@/assets/images/misc/dua-wanita.jpg"
            alt="Design tips article featured image"
            class="object-contain w-full aspect-[1.54] max-md:max-w-full"
          />
        </div>
        <div class="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <div
            class="flex z-10 flex-col self-stretch my-auto text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:mr-0 max-md:max-w-full"
          >
            <h3 class="self-start uppercase tracking-[3px]">Startup</h3>
            <h2
              class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full"
            >
              Design tips for designers that cover everything you need
            </h2>
            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>
      </section>

      <section class="flex flex-row w-full mb-16">
        <div class="flex flex-col w-[35%] max-md:w-full">
          <img
            loading="lazy"
            src="@/assets/images/misc/rapat.jpg"
            alt="Web design clients article featured image"
            class="object-contain w-full aspect-[1.54] max-md:max-w-full"
          />
        </div>
        <div class="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <div
            class="flex z-10 flex-col self-stretch my-auto text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:mr-0 max-md:max-w-full"
          >
            <h3 class="self-start uppercase tracking-[3px]">Business</h3>
            <h2
              class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full"
            >
              How to build rapport with your web design clients
            </h2>
            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>
      </section>

      <section class="flex flex-row w-full mb-16">
        <div class="flex flex-col w-[35%] max-md:w-full">
          <img
            loading="lazy"
            src="@/assets/images/misc/pria-putih-dan-hitam.jpg"
            alt="Logo design trends article featured image"
            class="object-contain w-full aspect-[1.54] max-md:max-w-full"
          />
        </div>
        <div class="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <div
            class="flex z-10 flex-col self-stretch my-auto text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:mr-0 max-md:max-w-full"
          >
            <h3 class="self-start uppercase tracking-[3px]">Startup</h3>
            <h2
              class="mt-5 mr-6 text-4xl font-bold tracking-tighter leading-none text-gray-800 max-md:mr-2.5 max-md:max-w-full"
            >
              Logo design trends to avoid in 2022
            </h2>
            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>
      </section>

      <section class="flex flex-row w-full mb-16">
        <div class="flex flex-col w-[35%] max-md:w-full">
          <img
            loading="lazy"
            src="@/assets/images/misc/pria-dan-wanita.jpg"
            alt="Figma design systems article featured image"
            class="object-contain w-full aspect-[1.54] max-md:max-w-full"
          />
        </div>
        <div class="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <div
            class="flex z-10 flex-col self-stretch my-auto text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:mr-0 max-md:max-w-full"
          >
            <h3 class="self-start uppercase tracking-[3px]">Technology</h3>
            <h2
              class="self-start mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full"
            >
              8 Figma design systems you can download for free today
            </h2>
            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>
      </section>

      <section class="flex flex-row w-full">
        <div class="flex flex-col w-[35%] max-md:w-full">
          <img
            loading="lazy"
            src="@/assets/images/misc/dua-wanita.jpg"
            alt="Font sizes article featured image"
            class="object-contain w-full aspect-[1.54] max-md:max-w-full"
          />
        </div>
        <div class="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
          <div
            class="flex z-10 flex-col self-stretch my-auto text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:mr-0 max-md:max-w-full"
          >
            <h3 class="self-start uppercase tracking-[3px]">Economy</h3>
            <h2
              class="mt-5 mr-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full"
            >
              Font sizes in UI design: The complete guide to follow
            </h2>
            <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>
      </section>
    </article>

    <nav
      aria-label="Pagination navigation"
      class="flex justify-center items-center gap-4 font-bold text-center rounded-none"
    >
      <button
        class="text-2xl leading-none text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-gray-800 hover:text-3xl transition-all duration-200"
        aria-label="Previous page"
      >
        &lt; Prev
      </button>

      <button
        class="text-2xl tracking-tighter leading-none text-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:text-gray-800 hover:text-3xl transition-all duration-200"
        aria-label="Next page"
      >
        Next &gt;
      </button>
    </nav>

    <section
      class="flex flex-col px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <h2
        class="text-4xl font-bold tracking-tighter leading-none text-gray-800"
      >
        All Categories
      </h2>
      <Category />
    </section>
    <About />
  </main>
</template>
