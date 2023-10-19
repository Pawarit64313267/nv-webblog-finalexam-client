<template>
  <div>
    <h1>Create</h1>
    <form v-on:submit.prevent="createUser">
      <p>title: <input type="text" v-model="user.title" /></p>
      <p>author: <input type="text" v-model="user.author" /></p>
      <p>total_page: <input type="text" v-model="user.total_page" /></p>
      <p>publisher: <input type="text" v-model="user.publisher" /></p>
      <p>category: <input type="text" v-model="user.category" /></p>
      <p>price: <input type="text" v-model="user.price" /></p>
      <p><button type="submit">create book</button></p>
    </form>
    <hr />
    <div>
      <p>title: {{ user.title }}</p>
    <p>author {{ user.author }}</p>
    <p>total_page: {{ user.total_page }}</p>
    <p>publisher: {{ user.publisher }}</p>
    <p>category: {{ user.category }}</p>
    <p>price: {{ user.category }}</p>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UserService";

export default {
  data() {
    return {
      user: {
    title: "Metaverse",
    author: "Mark zuckerberg",
    total_page: 550,
    publisher: "Chula Book",
    category: "Text Book",
    price: 150.0 
        
      }
    };
  },
  methods: {
    async createUser() {
      try {
        await UsersService.post(this.user);
        this.$router.push({
          name: "users"
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped></style>