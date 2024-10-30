<script setup lang="ts">
window.scrollTo(0, 0);
</script>

<template>
    <main class="pt-5">
        <section data-layername="authorHeader" class="flex flex-col">
            <div data-layername="background"
                class="flex flex-col items-center px-20 pt-24 w-full bg-gray-100 max-md:px-5 max-md:pt-24 max-md:max-w-full">
                <div class="flex flex-col w-full max-w-screen-lg max-md:max-w-full">
                    <div class="max-w-full w-[952px]">
                        <div class="flex gap-5 max-md:flex-col">
                            <div data-layername="column" class="flex flex-col w-[27%] max-md:ml-0 max-md:w-full">
                                <img loading="lazy"
                                    src="@/assets/images/misc/pria-kacamata-hitam.jpg"
                                    alt="Author's portrait"
                                    class="object-contain grow w-full aspect-[0.85] max-md:mt-8" />
                            </div>
                            <div data-layername="column" class="flex flex-col ml-5 w-[73%] max-md:ml-0 max-md:w-full">
                                <div class="flex flex-col max-md:mt-9 max-md:max-w-full">
                                    <h1 data-layername="heyThereImAndrewJonhsonAndWelcomeToMyBlog"
                                        class="text-5xl font-bold tracking-tighter text-gray-800 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
                                        Hey there, I'm Andrew Jonhson and welcome to my Blog
                                    </h1>
                                    <p data-layername="loremIpsumDolorSitAmetConsecteturAdipiscingElitSedDoEiusmodTemporIncididuntUtLaboreEtDoloreMagnaAliquaNonBlanditMassaEnimNecScelerisqueViverraMaurisInAliquamSemAtRisusViverraAdipiscingAtInTellus"
                                        class="mt-6 mr-5 text-base leading-7 text-zinc-500 max-md:mr-2.5 max-md:max-w-full">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec.
                                        Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in
                                        tellus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d9956e913777071f174526a06d639927451e22667b0daf751e44d8130e4ad83?placeholderIfAbsent=true&apiKey=d8efdd3231b64e858bb52f955a1feede"
                        alt="" class="object-contain mt-28 w-full aspect-[43.48] max-md:mt-10 max-md:max-w-full" />
                </div>
            </div>
        </section>

        <section class="blog-posts mt-16">
            <div class="flex gap-5 max-md:flex-col w-[80%] ml-36">
                <aside class="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                    <h1
                        class="self-start text-5xl font-bold tracking-tighter leading-none text-gray-800 max-md:mt-8 max-md:text-4xl">
                        My Posts
                    </h1>
                    <img loading="lazy"
                        src="@/assets/images/misc/kaca-mungkin.jpg"
                        alt="Blog post illustration" class="object-contain mt-8 w-full aspect-[1.29] max-md:mt-10" />
                    <img loading="lazy"
                        src="@/assets/images/misc/gerombolan-laptop.jpg"
                        alt="Another blog post illustration"
                        class="object-contain mt-12 w-full aspect-[1.29] max-md:mt-10" />
                </aside>
                <main class="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
                    <article
                        class="flex z-10 flex-col mt-32 mr-0 text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:max-w-full">
                        <span class="self-start uppercase tracking-[3px]">BUSINESS</span>
                        <h2
                            class="self-start mt-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                            Font sizes in UI design: The complete guide to follow
                        </h2>
                        <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                    </article>
                    <article
                        class="flex z-10 flex-col mt-64 mr-0 text-base font-semibold leading-none text-amber-300 max-md:mt-10 max-md:max-w-full">
                        <span class="self-start uppercase tracking-[3px]">ECONOMY</span>
                        <h2
                            class="mt-5 mr-5 text-4xl font-bold tracking-tighter leading-10 text-gray-800 max-md:mr-2.5 max-md:max-w-full">
                            How to build rapport with your web design clients
                        </h2>
                        <p class="mt-4 leading-7 text-zinc-500 max-md:max-w-full">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                    </article>
                </main>
            </div>
        </section>
    </main>
</template>