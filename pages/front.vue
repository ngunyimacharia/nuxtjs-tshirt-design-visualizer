<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <div class="bg-gray-100 lg:flex lg:items-center lg:justify-between p-10">
      <div class="flex-1 min-w-0">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="flex items-center space-x-4" role="list">
            <li>
              <div>
                <NuxtLink
                  to="/"
                  class="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Home
                </NuxtLink>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>

                <NuxtLink
                  to="/front"
                  class="
                    pl-5
                    text-sm
                    font-medium
                    text-gray-500
                    hover:text-gray-700
                  "
                >
                  Front
                </NuxtLink>
              </div>
            </li>
          </ol>
        </nav>
        <h2
          class="
            mt-2
            text-2xl
            font-bold
            leading-7
            text-gray-900
            sm:text-3xl
            sm:truncate
          "
        >
          Front side Design
        </h2>
      </div>
      <div class="mt-5 flex lg:mt-0 lg:ml-4">
        <span class="hidden sm:block">
          <button
            type="button"
            class="
              inline-flex
              items-center
              px-4
              py-2
              border border-gray-300
              rounded-md
              shadow-sm
              text-sm
              font-medium
              text-gray-700
              bg-white
              hover:bg-gray-50
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              ></path>
            </svg>
            Upload
          </button>
        </span>
      </div>
    </div>
    <br />
    <img :src="defaultDesign" />
    <br />
    <cld-image
      public-id="nuxtjs-tshirt-design-visualizer/assets/tshirt-template-front.jpg"
      alt="Front side of T-shirt "
      class="m-auto"
    >
      <cld-transformation :overlay="`fetch:${defaultDesign}`" />
    </cld-image>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultDesign:
        "https://res.cloudinary.com/kmashytski/image/upload/v1624938606/business-card-generator/assets/globe-icon.png",
    };
  },
};
</script>

