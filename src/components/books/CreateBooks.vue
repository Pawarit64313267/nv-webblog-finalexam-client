<template>
  <div>
    <h1>Create Books</h1>
    <form v-on:submit.prevent="createBook">
      <p>title: <input type="text" v-model="book.title" /></p>
      <p>author: <input type="text" v-model="book.author" /></p>
      <p>total_page: <input type="text" v-model="book.total_page" /></p>
      <p>publisher: <input type="text" v-model="book.publisher" /></p>
      <p>category: <input type="text" v-model="book.category" /></p>
      <p>price: <input type="text" v-model="book.price" /></p>
      <p><button type="submit">create book</button></p>
    </form>
    <hr />
    <div>
      <p>title: {{ book.title }}</p>
    <p>author {{ book.author }}</p>
    <p>total_page: {{ book.total_page }}</p>
    <p>publisher: {{ book.publisher }}</p>
    <p>category: {{ book.category }}</p>
    <p>price: {{ book.category }}</p>
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