<template>
  <h3 style="font-family: poppins, sans-serif; ">Quản Lý Hệ Thống</h3>
  <div class="dashboard-main__info" style="font-family: poppins, sans-serif; box-shadow: 1px 1px 5px 1px rgb(222, 222, 222)">
    <h4>Thông tin</h4>
    <div v-if="user">
      <p>ID: {{ user._id }}</p>
      <p>Email: {{ user.email }}</p>
      <p>Tên người dùng: {{ user.username }}</p>
      <p>SĐT: {{ user.phone || "000" }}</p>
    </div>
    <div v-else>
      <p>Không có thông tin người dùng.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        this.user = JSON.parse(userData);
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  },
};
</script>


