<template>
  <div>
    <h1>Show Books</h1>
    <p>title: {{ book.title }}</p>
    <p>author {{ book.author }}</p>
    <p>total_page: {{ book.total_page }}</p>
    <p>publisher: {{ book.publisher }}</p>
    <p>category: {{ book.category }}</p>
    <p>price: {{ book.category }}</p>


  </div>
</template>
<script>
import UserService from "@/services/UserService";

export default {
  data() {
    return {
      user: null
    };
  },
  async created() {
    let userId = this.$route.params.userId;
    this.user = (await UserService.show(userId)).data
    console.log(this.userId)
  }
};
</script>
<style scoped></style>