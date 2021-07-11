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
                  to="/side"
                  class="
                    pl-5
                    text-sm
                    font-medium
                    text-gray-500
                    hover:text-gray-700
                  "
                >
                  Side
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
          Side side Design
        </h2>
      </div>
      <div class="mt-5 flex lg:mt-0 lg:ml-4">
        <input
          v-if="!uploading"
          type="file"
          accept=".jpeg,.jpg,.png,image/jpeg,image/png"
          aria-label="upload image button"
          @change="selectFile"
        />
        <div v-else>Please wait, upload in progress</div>
      </div>
    </div>
    <cld-image
      :public-id="sideTemplate"
      alt="Side side of T-shirt "
      class="m-auto"
      width="300"
    >
      <cld-transformation effect="colorize:90" :color="color" />
      <cld-transformation
        :overlay="`fetch:${$cloudinary.image.url(sideDesign)}`"
        width="100"
        gravity="north"
        y="250"
        x="25"
      />
    </cld-image>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      uploading: false,
    };
  },
  computed: {
    ...mapGetters({
      color: "color",
      sideTemplate: "sideTemplate",
      sideDesign: "sideDesign",
    }),
  },
  methods: {
    async selectFile(e) {
      this.uploading = true;
      const file = e.target.files[0];
      /* Make sure file exists */
      if (!file) return;
      /* create a reader */
      const readData = (f) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(f);
        });
      /* Read data */
      const data = await readData(file);
      /* upload the converted data */
      const instance = await this.$cloudinary.upload(data, {
        folder: "nuxtjs-tshirt-design-visualizer/uploads",
        uploadPreset: "tshirt-design-upload",
      });

      this.$store
        .dispatch("updateSideDesign", instance.public_id)
        .then(() => this.$router.push("/"))
        .finally(() => (this.uploading = false));
    },
  },
};
</script>

