<template>
  <div class="login-box">
    <div class="title">
      Sport Register
    </div>
    <div class="box">
      <input class="text-field" type="text" id="username" placeholder="Username" v-model="username">
    </div>
    <div class="box">
      <input class="text-field" type="password" id="password" placeholder="Password" v-model="password">
    </div>
    <div class="box">
      <v-btn @click="launchClick" class="submit"
             elevation="2">
        <v-progress-circular
            indeterminate
            color="blue"
            v-if="inLoading"
        ></v-progress-circular>
        <span v-else>
          LOGIN
        </span>
      </v-btn>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: "E205729T",
      password: "DarkOnly12345",
      errorMessage: "",
      inLoading: false
    }
  },
  methods: {
    async launchClick() {
      this.inLoading = true

      if (this.username === "" || this.password === "") {
        return;
      }
      const payload = JSON.stringify({username: this.username, password: this.password});
      const data = await fetch('/api/login', {
        method: "POST",
        body: payload
      })
      let infos = await data.json()
      if (infos === 401) {
        this.$emit("logged", null)
      } else {
        this.$emit("logged", infos)
      }
      this.inLoading = false;
    }
  }
}
</script>

<style scoped>
.login-box {
  background-color: #202445;
  border-radius: 12px;
  padding: 5px;
  width: 320px;
}

.title {
  color: #d4cfcf;
  text-align: center;
  margin-top: 5px;
}

.box {
  border-radius: 12px;
  box-sizing: border-box;
  height: 38px;
  width: 250px;
  margin: 30px auto;
  align-items: center;
  justify-items: center;
}

.text-field {
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 15px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}

.submit {
  text-align: center;
  width: 100%;
  color: #d4cfcf;
  background-color: #13182a;
}
</style>
