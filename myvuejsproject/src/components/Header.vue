<template>
  <div>
    <h1>jQuery example</h1>
    <hr>
    <button
      class="btn btn-primary spaced"
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
      class="spaced"
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
