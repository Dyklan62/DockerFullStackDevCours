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
const API_URL = "nodeservercontainer/getList";

export default {
  name: "home",
  data: () => ({
    error: "",
    users: []
  }),

  mounted() {
    fetch(API_URL)
      .then(response => response.json())
      .then(result => {
        this.users = result;
      });
  },
  methods: {}
};
</script>
