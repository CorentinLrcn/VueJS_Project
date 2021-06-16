<template>
  <div>
    <h1>This is an API page</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Api',
  data() {
    return {
      message: String,
    };
  },
  created() {
    axios.get('/api')
      .then((res) => {
        this.message = res.data.message;
      });
  },
};
</script>
