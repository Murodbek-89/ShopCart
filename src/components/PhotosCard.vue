<template>
  <div class="photo-card">
    <div class="btn-card">
      <div class="btn">
        <span>PHOTA</span>
      </div>
    </div>
    <div class="item-card">
      <PhotoItem
        v-for="image of images"
        :key="image.id"
        :imagecard="image"
        @modalShow="showModal"
      />
    </div>
    <div class="modal-card">
      <MadalItem v-for="modal of modals" :key="modal.id" :modalcard="modal" />
    </div>
  </div>
</template>

<script>
import PhotoItem from './photo/Photo-Item.vue';
import MadalItem from './photo/Madal-Item.vue';
export default {
  data() {
    return {
      images: [
        { id: 1, names: 'A1', img: '11.jpg' },
        { id: 2, names: 'A2', img: '12.jpg' },
        { id: 3, names: 'A3', img: '13.jpg' },
        { id: 4, names: 'A4', img: '14.jpg' },
        { id: 5, names: 'A5', img: '15.jpg' },
        { id: 6, names: 'A6', img: '16.jpg' },
        { id: 7, names: 'A7', img: '17.jpg' },
        { id: 8, names: 'A8', img: '18.jpg' },
        { id: 9, names: 'A9', img: '19.jpg' },
        { id: 10, names: 'A10', img: '20.jpg' },
      ],
      modals: [],
    };
  },
  methods: {
    showModal(data) {
      this.modals.push(data);
    },
  },
  props: {},
  components: { PhotoItem, MadalItem },
};
</script>

<style scoped>
.photo-card {
  width: 100%;
  margin: 0 auto;
}

.item-card {
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  background-color: rgb(60, 60, 60);
}
</style>
