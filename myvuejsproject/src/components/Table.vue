<template>
  <table
    id="tbl-users"
    class="table table-hover"
  >
    <thead>
      <tr>
        <th />
        <th>Nom</th>
        <th>Email</th>
        <th>Tel</th>
        <th>Genre</th>
        <th @click="$emit('sortAge')">
          Age
          <img
            v-if="sort === ''"
            src="../assets/remove-outline.svg"
            height="25"
            width="25"
          >
          <img
            v-if="sort === 'asc'"
            src="../assets/chevron-up-outline.svg"
            height="25"
            width="25"
          >
          <img
            v-if="sort === 'desc'"
            src="../assets/chevron-down-outline.svg"
            height="25"
            width="25"
          >
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in usersFiltered"
        :key="user.login.uuid"
        class="table table-hover"
      >
        <td><img :src="user.avatar"></td>
        <td v-html="user.name" />
        <td>{{ user.email }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.gender }}</td>
        <td>{{ user.age }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Table',
  props: {
    usersFiltered: Array,
  },
};
</script>
