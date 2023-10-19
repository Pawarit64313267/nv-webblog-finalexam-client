<template>
  <div>
    <h1>Edit book</h1>
    <h1>Edit book</h1>
    <form v-on:submit.prevent="editBook">
      <p>title: <input type="text" v-model="book.title" /></p>
      <p>author: <input type="text" v-model="book.author" /></p>
      <p>total_page: <input type="text" v-model="book.total_page" /></p>
      <p>publisher: <input type="text" v-model="book.publisher" /></p>
      <p>category: <input type="text" v-model="book.category" /></p>
      <p>price: <input type="text" v-model="book.price" /></p>

      <p><button type="submit">edit book</button></p>
    </form>
    <hr />
    <div>
      <p>title: {{ book.title }}</p>
    <p>author {{ book.author }}</p>
    <p>total_page: {{ book.total_page }}</p>
    <p>publisher: {{ book.publisher }}</p>
    <p>category: {{ book.category }}</p>
    <p>price: {{ book.category }}</p>
      <p></p>
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
    async editUser() {
      try {
        await UsersService.put(this.user);
        this.$router.push({
          name: "users"
        });
      } catch (err) {
        console.log(err);
      }
    }
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UsersService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>
<style scoped></style>