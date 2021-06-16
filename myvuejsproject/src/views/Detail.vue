<template>
  <div>
    <p class="nom" >Nom</p>
    <p class="name" >{{ user.firstName }} {{ user.lastName }}</p>
    <img
      :src="user.avatarUrl"
      height="400"
      width="300"
    >
    <dl v-if="afficher === false">
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
    <FormModifUser
      v-if="afficher === true"
      :userInitial="user"
      @submitUser="updateUser"
    />
    <br>
    <button
      class="modBtn"
      @click="setAfficher"
    >Modifier</button>
    <br>
  </div>
</template>

<script>
import axios from 'axios';
import FormModifUser from '../components/FormModifUser.vue';

export default {
  name: 'DetailUser',
  data() {
    return {
      user: {},
      afficher: false,
      id: this.$route.params.id,
    };
  },
  components: {
    FormModifUser,
  },
  methods: {
    getUser() {
      // console.log(this.id);
      return axios.get(`https://ynov-front.herokuapp.com/api/users/${this.id}`)
        .then(
          ({ data: { data } }) => {
            // console.log(data);
            this.user = {
              age: new Date(Date.now() - new Date(data.birthDate)).getFullYear() - 1970,
              birthDate: data.birthDate,
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              phone: data.phone,
              gender: data.gender,
              avatarUrl: data.avatarUrl,
              // eslint-disable-next-line no-underscore-dangle
              id: data._id,
              details: data.details,
            };
          },
        );
    },
    setAfficher() {
      if (!this.afficher) this.afficher = true;
      else this.afficher = false;
    },
    async updateUser(userUpdated) {
      console.log(JSON.stringify(userUpdated));
      await axios.put(`https://ynov-front.herokuapp.com/api/users/${this.id}`, userUpdated)
        .then(() => {
          console.log('User updated');
        });
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

  .modBtn:hover {
    background: white;
    color: black;
  }

</style>
