<template>
  <div class="bg-white overflow-hidden shadow rounded-lg">
    <div class="px-4 py-5 sm:p-6">
      <img :src="imageSrc" alt="Front side of T-shirt " />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    imageSrc() {
      return this.$cloudinary.image.url(
        "nuxtjs-tshirt-design-visualizer/assets/tshirt-template-side.jpg"
      );
    },
  },
};
</script>
