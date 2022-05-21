<template>
  <div class="coment-form">
    <div class="forms">
      <form @submit.prevent="onSubmit">
        <input type="text" placeholder="Name" v-model="names" />
        <textarea placeholder="Coments" v-model="comenta"></textarea>
        <button class="submit-form" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  created() {},
  data() {
    return {
      names: '',
      comenta: '',
    };
  },
  props: {},
  emits: ['addComent'],
  methods: {
    onSubmit() {
      if (this.names.trim()) {
        const newcoment = {
          id: Date.now(),
          names: this.names,
          comenta: this.comenta,
        };
        this.$emit('addComent', newcoment);
        this.names = '';
        this.comenta = '';
      }
    },
  },
  components: {},
};
</script>

<style scoped>
.coment-form {
  background-color: rgb(60, 60, 60);
  padding: 50px;
  overflow: hidden;
}

.coment-form .forms {
  width: 80%;
  padding: 20px;
  margin: auto;
}

input[type='text'],
textarea {
  display: block;
  padding: 15px 0 15px 0;
  border: 0;
  outline: none;
  color: rgb(255, 255, 255);
  font-family: 'Josefin Sans', sans-serif;
  font-size: 15px;
  line-height: 24px;
  border-radius: 3px;
  background-color: rgb(90, 90, 90);
  box-shadow: 0 0 10px 0;
  margin-bottom: 45px;
  width: 100%;
  text-align: center;
}

textarea {
  min-height: 200px;
}

input[type='text']:focus,
textarea:focus {
  color: #080808;
  background: rgb(220, 220, 220);
}

.submit-form {
  display: inline-block;
  font: 16px/30px 'raleway-heavy', sans-serif;
  background: linear-gradient(#8004e6, rgb(64, 0, 255), rgb(0, 128, 255));
  color: aqua;
  cursor: pointer;
  height: 54px;
  text-align: center;
  border: none;
  border-radius: 3px;
  text-transform: uppercase;
  width: 100%;
  letter-spacing: 4px;
}

.submit-form:hover {
  background: linear-gradient(#004463, rgb(0, 255, 145), rgb(0, 50, 99));
  color: rgb(0, 0, 0);
}
</style>
