<template>
  <div class="home">
    soreal-vue
  </div>
</template>

<script>
export default {
  name: 'home',
  created() {
    this.$api.mockApi({ page: 1 })
      .then((res) => {
        console.log(res);
      });
  },
  data() {
    return {
    };
  },
};
</script>
