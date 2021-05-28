<template>
  <div>
    <Header
      :userArray="users"
      :filteredValue="usersFiltered"
      :gender="gender"
      :nameSearched="nameSearched"
      @fetchUsers="fetchUsers"
      @changeGender="(val) => (gender = val)"
      @changeSearch="(val) => (nameSearched = val)"
    />
    <Table
      :usersFiltered="usersFiltered"
    />
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../components/Header.vue';
import Table from '../components/Table.vue';

export default {
  name: 'App',
  components: {
    Header,
    Table,
  },
  data() {
    return {
      users: [],
      gender: 'all',
      nameSearched: '',
    };
  },
  computed: {
    searchWords() {
      if (!this.nameSearched.length) return [];
      return this.nameSearched.toLowerCase().split(' ');
    },
    usersFiltered() {
      return this.users
        .filter((user) => {
          if (this.gender === 'all') return true;
          return user.gender === this.gender;
        })
        .filter((user) => {
          if (this.nameSearched === '') return true;
          if (this.nameSearched.includes(' ')) {
            return this.nameSearched
              .toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .split(' ')
              .every((elem) => user.name
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .includes(elem));
          }
          return user.name
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .includes(
              this.nameSearched
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, ''),
            );
        })
        .map((user) => {
          if (this.nameSearched === '') return user;
          const reg = new RegExp(this.nameSearched, 'gi');
          return {
            age: user.age,
            birthDate: user.birthDate,
            name: user.name.replace(
              reg,
              "<span style='background-color:yellow'>$&</span>",
            ),
            email: user.email,
            phone: user.phone,
            gender: user.gender,
            avatar: user.avatar,
            id: user.id,
          };
        });
    },
  },
  methods: {
    fetchUsers() {
      return axios.get('https://ynov-front.herokuapp.com/api/users').then(
        ({ data: { data } }) => {
          this.users = data.map((user) => ({
            age: new Date(Date.now() - new Date(user.birthDate)).getFullYear() - 1970,
            birthDate: user.birthDate,
            name: `${user.firstName} ${user.lastName.toUpperCase()}`,
            email: user.email,
            phone: user.phone,
            gender: user.gender,
            avatar: user.avatarUrl,
            // eslint-disable-next-line no-underscore-dangle
            id: user._id,
          }));
        },
      );
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>
