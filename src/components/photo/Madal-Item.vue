<template>
  <div class="modal-item" v-show="modal">
    <span class="close" @click="modal = false">×</span>
    <img class="modal-img" :src="require('@/img/' + modalcard.img)" />
  </div>
</template>

<script>
export default {
  name: 'Modal-Item',
  created() {},
  data() {
    return {
      modal: true,
    };
  },
  props: {
    modalcard: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {},
};
</script>

<style scoped>
.modal-item {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
}

.modal-img {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 900px;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@keyframes zoom {
  from {
    transform: scale(0.1);
  }
  to {
    transform: scale(1);
  }
}

.close {
  position: absolute;
  top: 67px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 700px) {
  .modal-item {
    width: 100%;
  }
}
</style>
