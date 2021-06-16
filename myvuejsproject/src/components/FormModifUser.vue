<template>
  <div class="form-style-5">
    <form @submit.prevent="submitUser">
      <fieldset>
        <input
          v-model="userUpdated.lastName"
          type="text"
          name="lastName"
          placeholder="Votre nom *"
        >
        <input
          v-model="userUpdated.firstName"
          type="text"
          name="firstName"
          placeholder="Votre prénom *"
        >
        <input
          v-model="userUpdated.birthDate"
          type="text"
          name="birthDate"
          placeholder="Votre date de naissance *"
        >
        <input
          v-model="userUpdated.phone"
          type="text"
          name="phone"
          placeholder="Votre n° de tel *"
        >
        <input
          v-model="userUpdated.email"
          type="email"
          name="email"
          placeholder="Votre email *"
        >
        <input
          v-model="userUpdated.details"
          type="text"
          name="details"
          placeholder="Votre fun fact *"
        >
      </fieldset>
      <!--input
        type="submit"
        value="Modifier"
      /-->
      <button type="submit">
          Modifier
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormModifUser',
  props: {
    userInitial: {},
  },
  data() {
    return {
      userUpdated: {
        _id: this.userInitial.id,
        email: this.userInitial.email,
        firstName: this.userInitial.firstName,
        lastName: this.userInitial.lastName,
        birthDate: this.userInitial.birthDate,
        phone: this.userInitial.phone,
        avatarUrl: this.userInitial.avatarUrl,
        gender: this.userInitial.gender,
        details: this.userInitial.details,
      },
    };
  },
  methods: {
    submitUser() {
      this.$emit('submitUser', this.userUpdated);
      this.$router.push({ name: 'Home' });
    },
  },
};
</script>

<style>
.form-style-5 {
  max-width: 500px;
  padding: 10px 20px;
  background: #f4f7f8;
  margin: 30px auto;
  padding: 20px;
  background: #f4f7f8;
  border-radius: 8px;
  font-family: Verdana;
}

.form-style-5 fieldset {
  border: none;
}

.form-style-5 legend {
  font-size: 1.4em;
  margin-bottom: 10px;
}

.form-style-5 label {
  display: block;
  margin-bottom: 8px;
}

.form-style-5 input[type="text"],
.form-style-5 input[type="email"],
.form-style-5 input[type="password"] {
  font-family: Verdana;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  font-size: 15px;
  margin: 0;
  outline: 0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  background-color: #e8eeef;
  color: #8a97a0;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.03) inset;
  margin-bottom: 30px;
}

.form-style-5 input[type="text"]:focus,
.form-style-5 input[type="email"]:focus,
.form-style-5 input[type="password"]:focus {
  background: #d2d9dd;
}

.form-style-5 .number {
  background: #1abc9c;
  color: #fff;
  height: 30px;
  width: 30px;
  display: inline-block;
  font-size: 0.8em;
  margin-right: 4px;
  line-height: 30px;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
  border-radius: 15px 15px 15px 0px;
}

.form-style-5 input[type="submit"],
.form-style-5 button {
  position: relative;
  display: block;
  padding: 15px 30px;
  color: #fff;
  margin: 0 auto;
  background: black;
  font-size: 18px;
  text-align: center;
  font-style: normal;
  width: 100%;
  border: 1px solid black;
  border-width: 1px 1px 3px;
  margin-bottom: 10px;
  border-radius: 10px;
}

.form-style-5 input[type="submit"]:hover,
.form-style-5 button:hover {
  background: white;
  color: black;
}

.erreur {
  margin-bottom: 10px;
  font-family: Verdana;
  color: red;
  font-size: 13px;
}
</style>
