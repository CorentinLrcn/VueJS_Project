<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          id="modalTitle"
          class="modal-header"
        >
          <slot name="header">
            Create New User
          </slot>
          <button
            type="button"
            class="btn-close"
            aria-label="Close modal"
            @click="close"
          >
            x
          </button>
        </header>

        <section
          id="modalDescription"
          class="modal-body"
        >
          <slot name="body">
            <form
              id="usrform"
              @submit.prevent="submitNewUser"
            >
              <label for="lastName">Nom</label>
              <br>
              <input
                id="lastName"
                v-model="newUser.lastName"
                type="text"
              >
              <br>
              <br>
              <label for="firstName">Prénom</label>
              <br>
              <input
                id="firstName"
                v-model="newUser.firstName"
                type="text"
              >
              <br>
              <br>
              <label for="birthDate">Date de Naissance</label>
              <br>
              <input
                id="birthDate"
                v-model="newUser.birthDate"
                type="date"
              >
              <br>
              <br>
              <label for="email">E-mail</label>
              <br>
              <input
                id="email"
                v-model="newUser.email"
                type="email"
              >
              <br>
              <br>
              <label for="phone">N°-Tel</label>
              <br>
              <input
                id="phone"
                v-model="newUser.phone"
                type="tel"
              >
              <br>
              <br>
              <label for="avatar">Lien photo</label>
              <br>
              <input
                id="avatar"
                v-model="newUser.avatarUrl"
                type="text"
              >
              <br>
              <br>
              <label for="gender">Sexe</label>
              <br>
              <!--input
                id="gender"
                type="text"
                v-model="newUser.gender"
              -->
              <div>
                <label>
                  <input
                    v-model="newUser.gender"
                    type="radio"
                    value="male"
                  > Homme
                </label>
                <label>
                  <input
                    v-model="newUser.gender"
                    type="radio"
                    value="female"
                  > Femme
                </label>
              </div>
              <br>
              <label for="details">Fun Fact</label>
            </form>
            <textarea
              v-model="newUser.details"
              form="usrform"
            />
          </slot>
        </section>

        <footer class="modal-footer">
          <button
            type="submit"
            class="btn-green"
            aria-label="Create user"
            form="usrform"
          >
            Create !
          </button>
          <button
            class="btn-red"
            aria-label="Close modal"
            @click="close"
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ModalCreateUser',
  data() {
    return {
      newUser: {
        email: '',
        lastName: '',
        firstName: '',
        birthDate: '',
        phone: '',
        avatarUrl: '',
        gender: 'male',
        details: '',
      },
    };
  },
  methods: {
    close() {
      this.newUser.email = '';
      this.newUser.lastName = '';
      this.newUser.firstName = '';
      this.newUser.birthDate = '';
      this.newUser.phone = '';
      this.newUser.avatarUrl = '';
      this.newUser.gender = 'male';
      this.newUser.details = '';
      this.$emit('close');
    },
    submitNewUser() {
      this.$emit('submitNewUser', this.newUser);
    },
  },
};
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    height: 750px;
    width: 600px;
    border-radius: 10px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
  }

  .modal-body {
    position: relative;
    padding: 50px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
    padding: 10px;
  }

  .btn-red {
    margin-top: 15px;
    color: white;
    background: red;
    border: 1px solid red;
    border-radius: 2px;
    padding: 10px;
  }

  .modal-fade-enter,
  .modal-fade-leave-to {
    opacity: 0;
  }

  .modal-fade-enter-active,
  .modal-fade-leave-active {
    transition: opacity .5s ease;
  }
</style>
