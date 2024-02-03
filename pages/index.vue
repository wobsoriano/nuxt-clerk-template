<template>
  <main class="">
    <article class="grid lg:grid-cols-2">
      <div class="px-8 py-20 md:px-20 lg:py-48">
        <h1 class="text-5xl font-semibold text-transparent md:text-6xl gradient">
          Auth starts here.
        </h1>
        <p class="mt-2 text-lg">
          A simple and powerful Nuxt template featuring authentication and
          user management powered by Clerk.
        </p>
        <div class="flex gap-2 mt-8">
          <NuxtLink
            href="/dashboard"
            class="flex content-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700"
          >
            View Demo
            <div class="m-auto">
              <Icon name="RightArrow" />
            </div>
          </NuxtLink>
          <a
            class="flex gap-2 px-4 py-2 font-semibold text-gray-600 transition duration-100 rounded-lg hover:text-gray-800"
            href="#features"
          >
            Learn more
            <div class="m-auto">
              <Icon name="DownArrow" />
            </div>
          </a>
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <NuxtImg src="/components.svg" alt="Clerk embeddable components" />
      </div>
    </article>
    <article
      id="features"
      class="px-8 py-12 bg-black bg-opacity-5 md:px-20 md:py-24"
    >
      <h2 class="text-3xl font-semibold">
        What's under the hood?
      </h2>
      <p class="mt-2">
        This template repo uses some of the following features provided by
        Clerk. To learn more, read the
        <a
          href="https://vue-clerk.vercel.app/"
          class="font-medium text-primary-600 hover:underline"
        >
          Vue Clerk Docs
        </a>
        .
      </p>
      <div class="grid gap-8 mt-8 lg:grid-cols-3">
        <div class="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
          <h3 class="text-lg font-medium">
            Customizable Components
          </h3>
          <p class="text-gray-700">
            Prebuilt components to handle essential functionality like user
            sign-in, sign-up, and account management.
          </p>
          <div class="grow" />
          <a
            href="https://vue-clerk.vercel.app/authentication/sign-in"
            class="text-primary-600 cta hover:underline"
            target="_blank"
          >
            Components <span class="arrow">-&gt;</span>
          </a>
        </div>
        <div class="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
          <h3 class="text-lg font-medium">
            Vue Composables
          </h3>
          <p class="text-gray-700">
            Build custom functionality by accessing auth state, user and
            session data, and more with Vue Clerk Composables.
          </p>
          <div class="grow" />
          <a
            href="https://vue-clerk.vercel.app/composables/use-auth"
            class="text-primary-600 cta hover:underline"
            target="_blank"
          >
            Vue Composables <span class="arrow">-&gt;</span>
          </a>
        </div>
        <div class="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
          <h3 class="text-lg font-medium">
            Multitenancy
          </h3>
          <p class="text-gray-700">
            Seamlessly create and switch between organizations, invite and
            manage members, and assign custom roles.
          </p>
          <div class="grow" />
          <a
            href="https://clerk.com/docs/organizations/overview"
            class="text-primary-600 cta hover:underline"
            target="_blank"
          >
            Organizations <span class="arrow">-&gt;</span>
          </a>
        </div>
      </div>
    </article>
  </main>
</template>

<style>
.gradient {
  position: relative;
  background-image: repeating-linear-gradient(
    to right,
    #63DFFA,
    #6C47FF,
    #63DFFA
  );
  z-index: 1;
  background-position-x: 0%;
  background-size: 200%;
  animation: gradimate 3s linear infinite;
  background-clip: text;
}

@keyframes gradimate {
  0% {
    background-position-x: 0%;
  }
  50% {
    background-position-x: 100%;
  }
  100% {
    background-position-x: 200%;
  }
}

/* .cta .arrow {
  opacity: 0;
  transition: 0.1s linear;
  margin-left: -4px;
}

.cta:hover .arrow {
  opacity: 100;
  margin-left: 0;
} */
</style>
