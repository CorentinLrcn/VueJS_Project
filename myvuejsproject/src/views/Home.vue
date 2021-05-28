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
            name: user.name.replace(
              reg,
              "<span style='background-color:yellow'>$&</span>",
            ),
            email: user.email,
            phone: user.phone,
            gender: user.gender,
            avatar: user.avatar,
            login: user.login,
          };
        });
    },
  },
  methods: {
    fetchUsers() {
      return axios('https://randomuser.me/api/?results=20').then(
        ({ data: { results } }) => {
          this.users = results.map((user) => ({
            age: user.dob.age,
            name: `${user.name.first} ${user.name.last.toUpperCase()}`,
            email: user.email,
            phone: user.phone,
            gender: user.gender,
            avatar: user.picture.thumbnail,
            login: user.login.uuid,
          }));
        },
      );
    },
  },
};
</script>
