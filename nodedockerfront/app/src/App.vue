<template>
  <div id="nav">
    Users : <br/>
    <div class="list-unstyled" v-for="user in users" :key="user._id">
      <li>
        {{user.Nom}} {{user.Prenom}}
      </li>
      <hr>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = "http://localhost:8080/getList";

export default {
  name: "home",
  data: () => ({
    error: "",
    users: []
  }),

  mounted() {
    axios.get(API_URL)
      .then(reponse => this.users = reponse.data).catch(erreur => this.users = [{ nom: "Erreur de chargement" }]);
  },
  methods: {}
};
</script>
