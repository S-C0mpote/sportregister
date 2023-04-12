<template>
  <div class="container">
    <Login v-if="step === 1" @logged="onLogged"/>
    <Register v-if="step === 2" :data="userData" :session="userSession" :key="userData.code"/>

      <div v-if="!successHidden" class="popup">
        <div class="content">
          Program launched
        </div>
      </div>
      <div v-if="!errorHidden" class="popup">
        <div class="content">
          {{ errorMessage }}
        </div>
      </div>
      <div @click="changeStep" v-if="!backHidden" class="back">Go back</div>

  </div>

</template>

<style>
@font-face {
  font-family: 'DM Sans';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(../assets/fonts/DMSans-Medium.ttf) format('woff2');
}

body {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  font-family: 'DM Sans', serif;
  background-color: #0f182d;
}

.back {
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  font-size: 18px;
  height: 110%;
  width: 60%;
  outline: 0;
  margin: 10px auto;
  text-align: center;
  color: #d4cfcf;
  background-color: #202445;
  cursor: pointer;
}


.popup {
  display: flex;
  background-color: #202445;
  border-radius: 12px;
  padding: 20px;
  height: 200px;
  min-width: 200px;
  width: auto;
  color: #d4cfcf;
  justify-content: center;

}

.content {
  margin: auto;
  border-radius: 12px;
  font-weight: bold;
}


</style>

<script>
import Login from "../components/Login";
import Register from "../components/Sport";

export default {
  name: 'index',
  components: {Register, Login},
  data() {
    return {
      username: "",
      password: "",
      formHidden: false,
      step: 1,
      backHidden: true,
      successHidden: true,
      errorHidden: true,
      errorMessage: "",
      userSession: "",
      userData: Object
    }
  },

  methods: {
    onLogged(res) {
      if (res !== null){
        this.userSession = res[1]
        this.userData = res[2]["sports"]
        this.step = 2
      }
      else {
        this.errorMessage = "Erreur d'identification, veuillez vérifier vos ID ou votre inscription."
        this.step = 0
        this.errorHidden = false
        this.backHidden = false
      }
    },
    changeStep() {
      this.step = 1
      this.errorHidden = true
      this.backHidden = true
    }
  }
}
</script>
