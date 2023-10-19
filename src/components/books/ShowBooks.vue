<template>
  <div>
    <h1>Show Books</h1>
    <p>title: {{ user.title }}</p>
    <p>author {{ user.author }}</p>
    <p>total_page: {{ user.total_page }}</p>
    <p>publisher: {{ user.publisher }}</p>
    <p>category: {{ user.category }}</p>
    <p>price: {{ user.category }}</p>


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