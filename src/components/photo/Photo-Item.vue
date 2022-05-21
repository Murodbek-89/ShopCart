<template>
  <div class="photo-item">
    <img
      class="img"
      :src="require('@/img/' + imagecard.img)"
      @click="modalShow"
    />
  </div>
</template>

<script>
export default {
  name: 'Photo-Item',
  created() {},
  data() {
    return {};
  },
  props: {
    imagecard: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    modalShow() {
      this.$emit('modalShow', this.imagecard);
    },
  },
};
</script>

<style scoped>
.photo-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0;
  padding: 2px;
  margin: 30px auto;
  text-align: center;
  background-color: rgb(136, 133, 138);
}

.img {
  width: 100%;
  cursor: pointer;
  transition: 0.4s;
  border-radius: 2px;
}

.img:hover {
  opacity: 0.7;
}
</style>
