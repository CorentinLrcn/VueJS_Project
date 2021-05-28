<template>
  <div id="tableHeader">
    <h1>jQuery example</h1>
    <button
      class="bouton"
      @click="$emit('fetchUsers')"
    >
      Fetch users
    </button>
    <select
      id="filter-users"
      v-model="gender"
      class="spaced"
      @change="$emit('changeGender', gender)"
    >
      <option value="all">
        Tous
      </option>
      <option value="male">
        Hommes
      </option>
      <option value="female">
        Femmes
      </option>
    </select>
    <input
      v-model="nameSearched"
      class="spaced"
      type="text"
      @input="$emit('changeSearch', nameSearched)"
    >
    <span
      id="aff"
    >
      {{ filteredValue.length }} / {{ userArray.length }} utilisateurs
    </span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    userArray: Array,
    filteredValue: Array,
    gender: String,
    nameSearched: String,
  },
};
</script>

<style>
  #tableHeader {
    padding: 50px 0px;
    width: 90%;
    margin-left: 5%;
  }

  .bouton {
    font-size: 17px;
    color: white;
    background-color: blue;
    border: 1px solid blue;
    border-radius: 5px;
    margin-right: 3rem;
    padding: 10px 15px;
  }

  #filter-users {
    font-size: 17px;
    border-radius: 5px;
    margin-right: 3rem;
    padding: 10px 15px;
  }

  .spaced {
    font-size: 17px;
    border-radius: 5px;
    margin-right: 1.5rem;
    padding: 10px 15px;
  }

  #aff {
    font-size: 17px;
  }

</style>
