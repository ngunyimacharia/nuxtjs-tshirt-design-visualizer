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
        <br />
        Designs from
        <a href="https://vecteezy.com" target="_blank">vecteezy.com</a>
      </p>

      <v-swatches class="pt-10" v-model="newColor" inline></v-swatches>

      <div class="mt-12" v-if="!colorChanging">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div class="pt-6">
            <NuxtLink
              to="front"
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
                      <cld-image
                        :public-id="frontTemplate"
                        alt="Front side of T-shirt "
                        class="m-auto"
                        width="600"
                      >
                        <cld-transformation
                          effect="colorize:90"
                          :color="color"
                        />
                        <cld-transformation
                          :overlay="`fetch:${$cloudinary.image.url(
                            frontDesign
                          )}`"
                          width="500"
                        />
                      </cld-image>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="pt-6">
            <NuxtLink
              to="back"
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
                      <cld-image
                        :public-id="backTemplate"
                        alt="Back side of T-shirt "
                        class="m-auto"
                        width="600"
                      >
                        <cld-transformation
                          effect="colorize:90"
                          :color="color"
                        />
                        <cld-transformation
                          :overlay="`fetch:${$cloudinary.image.url(
                            backDesign
                          )}`"
                          width="500"
                        />
                      </cld-image>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div class="pt-6">
            <NuxtLink
              to="side"
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
                      <cld-image
                        :public-id="sideTemplate"
                        alt="Shoulder side of T-shirt "
                        class="m-auto"
                        width="600"
                      >
                        <cld-transformation
                          effect="colorize:90"
                          :color="color"
                        />
                        <cld-transformation
                          :overlay="`fetch:${$cloudinary.image.url(
                            sideDesign
                          )}`"
                          width="100"
                          gravity="north"
                          y="250"
                          x="25"
                        />
                      </cld-image>
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

import VSwatches from "vue-swatches";

export default {
  components: { VSwatches },
  data() {
    return {
      newColor: null,
      colorChanging: false,
    };
  },
  computed: {
    ...mapGetters({
      color: "color",
      frontTemplate: "frontTemplate",
      frontDesign: "frontDesign",
      backTemplate: "backTemplate",
      backDesign: "backDesign",
      sideTemplate: "sideTemplate",
      sideDesign: "sideDesign",
    }),
  },
  watch: {
    newColor(color) {
      this.colorChanging = true;
      this.$store
        .dispatch("updateColor", color)
        .then(() => (this.colorChanging = false));
    },
  },
};
</script>