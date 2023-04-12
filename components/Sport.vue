<template>
  <div class="login-box">
    <div class="box">
      <div class="title">
        Vos Sports :
      </div>
    </div>
    <div class="sports">
      <div class="card" v-for="sport in data" @click="showSlots(sport)"
           :style="(sport.nom === sportSelected.nom) ? {background: '#232774'} : {background: '#3c4071'}">
        {{ sport.nom }}
      </div>
    </div>
    <div class="slots" v-if="slot">
      <div class="slot" v-for="slot in sportSelected.creneaux" :key="slot.code">
        <label class="day">
          <input class="id" v-if="!sportRegistered.includes(slot.code) && registerStatus.get(slot.code) !== 0" name="choice" type="radio"
                 v-bind:value="slot.code" v-model="id"/>
          <span class="name">{{ slot.jour }} {{ slot.heures }} {{slot.site}}
            <span class="orange" v-if="registerStatus.get(slot.code) === 0">
            </span>
            <span class="green" v-else-if="sportRegistered.includes(slot.code)" @click="unregister(slot.code)"></span>
          </span>
          <Loading v-if="registerStatus.get(slot.code) === 0" @click="stopForce(slot.code)"/>
        </label>
      </div>
    </div>
    <div v-if="slot && this.sportAmount < 2" class="box">
      <v-btn @click="register" class="submit"
             elevation="2">
        <v-progress-circular
            indeterminate
            color="blue"
            v-if="inLoading"
        ></v-progress-circular>
        <span v-else>
          LAUNCH
        </span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import Loading from "./Loading";
export default {
  name: "Register",
  components: {Loading},
  data() {
    return {
      slot: false,
      sportSelected: "",
      id: "",
      sportRegistered: "",
      userInfo: "",
      registerStatus: new Map(),
      sportAmount: 0,
      inLoading: false
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    session: {
      type: String,
      required: true
    }
  },
  methods: {
    async showSlots(sport) {
      const days = ["Lundi", "Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"]
      sport.creneaux = sport.creneaux.sort((a, b) => {
        if(days.indexOf(a.jour) < days.indexOf(b.jour)) { return -1; }
        if(days.indexOf(a.jour) > days.indexOf(b.jour)) { return 1; }
        return 0;
      })
      this.sportSelected = sport

      this.sportAmount = this.sportSelected.registrations.map(r => r.activity.code).filter(code => this.sportRegistered.includes(code)).length
      this.sportSelected.creneaux.map(c => {
        if (this.registerStatus.has(c.code)) this.sportAmount += 1
      })
      await this.updateData()
      this.slot = true
    },
    async register() {
      this.inLoading = true;
      if (this.id !== ""){
        const payload = JSON.stringify({session: this.session, sportID: this.id, stopCondition: false});
        const data = await fetch('/api/register', {
          method: "POST",
          body: payload
        })
        let value = await data.json()
        if (value.registered === 0 && this.sportAmount < 2){
          this.registerStatus.set(this.id, value.registered)
          localStorage.setItem('states', JSON.stringify(Array.from(this.registerStatus)))
          this.sportAmount += 1
        }
      }
      await this.updateData()
      this.inLoading = false;
    },
    async unregister(code){
      const payload = JSON.stringify({session: this.session, sportID: code});
      const data = await fetch('/api/unregister', {
        method: "POST",
        body: payload
      })
      let value = await data.json()
      if (value.code === 200){
        this.sportAmount -= 1
      }
      await this.updateData()
    },
    async stopForce(code){
      const payload = JSON.stringify({session: this.session, sportID: code, stopCondition: true});
      const data = await fetch('/api/register', {
        method: "POST",
        body: payload
      })
      let value = await data.json()
      if (value.stopped === 1){
        this.sportAmount -= 1
      }
      this.registerStatus.delete(code)
      localStorage.setItem('states', JSON.stringify(Array.from(this.registerStatus)))
      await this.updateData()
    },
    async updateData() {
      const payload = JSON.stringify({session: this.session});
      const data = await fetch('/api/update', {
        method: "POST",
        body: payload
      })
      this.userInfo = await data.json()
      let slots = []
      this.userInfo.sports.map(s => {
        s.registrations.map(r => {
          slots.push(r.activity.code)
        })
      })
      this.sportRegistered = slots
      this.sportAmount = this.sportSelected.registrations.map(r => r.activity.code).filter(code => this.sportRegistered.includes(code)).length

      this.sportSelected.creneaux.map(c => {
        if (this.registerStatus.has(c.code)) this.sportAmount += 1
      })
      this.sportRegistered.map(s => {
        if (this.registerStatus.has(s)) this.stopForce(s)
      })
    }
  },
  mounted() {
    if (localStorage.getItem('states') !== null) {
      this.registerStatus = new Map(JSON.parse(localStorage.getItem('states')))
    }
    let slots = []
    this.data.map(s => {
      s.registrations.map(r => {
        slots.push(r.activity.code)
      })
    })
    this.sportRegistered = slots
    this.sportAmount = slots.length
    const interval = setInterval(async () => {
      await this.updateData()
    }, 10000);
  }
}
</script>

<style scoped>
.login-box {
  background-color: #202445;
  border-radius: 12px;
  padding: 5px;
  width: 600px;
  min-height: 200px;
  height: auto;
}

.title {
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  font-size: 18px;
  height: 100%;
  width: 100%;
  outline: 0;
  padding: 6px 20px 0;
  text-align: center;
  color: #d4cfcf;
  background-color: #13182a;

}

.card {
  display: flex;
  background-color: #3c4071;
  border-radius: 12px;
  box-sizing: border-box;
  height: 100px;
  width: 110px;
  margin: 7px 40px 40px;
  justify-content: center;
  align-items: center;
  color: #eee;
  cursor: pointer;
}

.slots {
  display: flex;
  flex-direction: column;
  width: auto;
  height: auto;
}
.card:hover {
 animation: animate 0.3s ease-in-out forwards;
}
@keyframes animate  {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }

}
.sports {
  display: flex;
  gap: 10px;
}

.slot {
  width: auto;
  min-width: 420px;
  display: flex;
  margin: 5px auto 10px;
  flex-direction: column;
  background-color: #3c4071;
  border-radius: 12px;
  height: 30px;
  padding: 5px;
  justify-content: center;
}

.id {
  height: 10px;
  width: 10px;
  border-radius: 2px;
  margin-left: 5px;
  margin-right: 5px;
}

.name {
  color: #d4cfcf;
  font-size: 15px;
  margin-left: 10px;

}

.green {
  color: #2dc741;
  margin-left: 20px;
}

.green:before{
  content: "[INSCRIT]";
}
.green:hover:before{
  content: "[DESINSCRIRE]";
  color: red;
}
.orange {
  color: #a0550a;
  margin-left: 20px;
}
.day {
  display: flex;
  align-items: center;
}
.box {
  background-color: #303245;
  border-radius: 12px;
  box-sizing: border-box;
  height: 38px;
  width: 250px;
  margin: 30px auto;
  align-items: center;
  justify-items: center;
}

.submit {
  width: 100%;
  text-align: center;
  color: #d4cfcf;
  background-color: #13182a;
}

</style>