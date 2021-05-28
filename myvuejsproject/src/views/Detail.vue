<template>
  <div>
    <p class="nom" >Nom</p>
    <p class="name" >{{ user.name }}</p>
    <img
      :src="user.avatar"
      height="400"
      width="300"
    >
    <dl>
        <dt>Sexe</dt>
        <dt>{{ user.gender }}</dt>
        <dd/>
        <dt>Date de Naissance</dt>
        <dt>{{ user.birthDate }}</dt>
        <dd/>
        <dt>Âge</dt>
        <dt>{{ user.age }}</dt>
        <dd/>
        <dt>N° tel</dt>
        <dt>{{ user.phone }}</dt>
        <dd/>
        <dt>E-mail</dt>
        <dt>{{ user.email }}</dt>
        <dd/>
        <dt>Fun Fact</dt>
        <dt>{{ user.details }}</dt>
    </dl>
    <br>
    <button class="modBtn" >Modifier</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DetailUser',
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUser() {
      return axios.get(`https://ynov-front.herokuapp.com/api/users/${this.$route.params.id}`)
        .then(
          ({ data: { data } }) => {
            console.log(data);
            this.user = {
              age: new Date(Date.now() - new Date(data.birthDate)).getFullYear() - 1970,
              birthDate: data.birthDate,
              name: `${data.firstName} ${data.lastName.toUpperCase()}`,
              email: data.email,
              phone: data.phone,
              gender: data.gender,
              avatar: data.avatarUrl,
              // eslint-disable-next-line no-underscore-dangle
              id: data._id,
              details: data.details,
            };
          },
          console.log(this.user),
        );
    },
  },
  created() {
    this.getUser();
  },
};
</script>

<style>
  .name {
    font-weight: normal;
    margin-top: -7.5px;
    margin-bottom: 20px;
  }

  .nom {
    margin-top: -7.5px;
  }

  p, dl {
      font: 1rem 'Fira Sans', sans-serif;
      font-weight: bold;
  }

  dl > dt {
      font-style: oblique;
  }

  dt + dt {
    font-weight: normal;
  }

  dd {
      margin-bottom: 0.7rem;
      font-weight: normal;
      align-self: center;
  }

  .modBtn {
    background-color: black;
    color: white;
    font-size: 17px;
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px 20px;
  }

</style>
