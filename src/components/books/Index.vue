<template>
  <div>
    <h1>Book</h1>
    <div>จํานวนผู้ใช้งาน {{ users.length }}</div>
    <div v-for="user in users" v-bind:key="user.id">
      <div>title: {{ user.title }}</div>
      <div>author: {{ user.author }} </div>
      <div>totai_page: {{ user.totai_page }}</div>
      <div>publisher: {{ user.publisher }}</div>
      <div>category: {{ user.category }}</div>
      <div>price: {{ user.price }}</div>
      

      <p>
        <button v-on:click="navigateTo('/user/' + user.id)">
          ดูข้อมูลผู้ใช้
        </button>
        <button v-on:click="navigateTo('/user/edit/' + user.id)">
          แกไขข้อมูล
        </button>
        <button v-on:click="deleteUser(user)">ลบข้อมูล</button>
      </p>
      <hr />
    </div>
  </div>
</template>
<script>
import UserServices from "@/services/UserService";
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(user) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await UserServices.delete(user);
          this.refreshData()
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.users = (await UserServices.index()).data;
    }
  },
  async created() {
    this.users = (await UserServices.index()).data;
  }
};
</script>
<style scoped></style>