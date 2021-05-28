<template>
  <table
    id="tbl-users"
    class="table table-hover"
  >
    <thead>
      <tr>
        <th />
        <th @click="sortName">
          Nom
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
        <th>Email</th>
        <th>Tel</th>
        <th>Genre</th>
        <th @click="sortAge">
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
        v-for="user in sortUsers"
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
  data() {
    return {
      triAge: '',
      triNom: '',
    };
  },
  computed: {
    sortUsers() {
      return this.usersFiltered
        .filter(() => true)
        .sort((a, b) => {
          if (this.triAge === 'asc') return a.age - b.age;
          if (this.triAge === 'desc') return b.age - a.age;
          if (this.triNom === 'asc') return a.name.localeCompare(b.name);
          if (this.triNom === 'desc') return b.name.localeCompare(a.name);
          return a;
        });
    },
  },
  methods: {
    sortAge() {
      this.triNom = '';
      if (this.triAge === '') {
        this.triAge = 'asc';
        return;
      }
      if (this.triAge === 'asc') {
        this.triAge = 'desc';
        return;
      }
      this.triAge = '';
    },
    sortName() {
      this.triAge = '';
      if (this.triNom === '') {
        this.triNom = 'asc';
        return;
      }
      if (this.triNom === 'asc') {
        this.triNom = 'desc';
        return;
      }
      this.triNom = '';
    },
  },
};
</script>
