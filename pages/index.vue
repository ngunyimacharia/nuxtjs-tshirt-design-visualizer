<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white py-16 sm:py-24 lg:py-32">
    <div
      class="
        mx-auto
        max-w-md
        px-4
        text-center
        sm:max-w-3xl
        sm:px-6
        lg:px-8
        lg:max-w-7xl
      "
    >
      <p
        class="
          mt-2
          text-3xl
          font-extrabold
          text-gray-900
          tracking-tight
          sm:text-4xl
        "
      >
        Simple T-Shirt Design Visualizer
      </p>
      <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
        Tap on any of these cards below to upload front, back and side designs
        for your t-shirt.
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="pt-6" v-for="(image, index) in images" :key="index">
            <NuxtLink
              :to="image.to"
              class="text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                <div class="m-auto -mt-6" style="height: 300px; width: 300px">
                  <div
                    class="
                      w-full
                      h-full
                      bg-white
                      overflow-hidden
                      shadow
                      rounded-lg
                    "
                  >
                    <div class="w-full h-full px-4 py-5 sm:p-6">
                      <img class="m-auto" :src="image.src" :alt="image.alt" />
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <p>Designs from <a href="vecteezy.com" target="_blank">vecteezy.com</a></p>
  </div>
</template>


<script>
export default {
  computed: {
    images() {
      return [
        {
          alt: "Front side of image",
          to: "/front",
          src: this.$cloudinary.image.url(
            "nuxtjs-tshirt-design-visualizer/assets/tshirt-template-front.jpg",
            { crop: "fit", width: 300, height: 300 }
          ),
        },
        {
          alt: "Back side of image",
          to: "/back",
          src: this.$cloudinary.image.url(
            "nuxtjs-tshirt-design-visualizer/assets/tshirt-template-back.jpg",
            { crop: "fit", width: 300, height: 300 }
          ),
        },
        {
          alt: "Shoulder side of image",
          to: "/side",
          src: this.$cloudinary.image.url(
            "nuxtjs-tshirt-design-visualizer/assets/tshirt-template-side.jpg",
            { crop: "fit", width: 300, height: 300 }
          ),
        },
      ];
    },
  },
};
</script>