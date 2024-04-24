<template>
  <aside class="sidebar">
    <div class="h-100" style="font-family: poppins, sans-serif;background-color: rgb(205, 184, 66);">
      <div id="logo" style="text-align: center; font-size: 2rem; color: white;">Vien Store</div>
      <hr />
      <ul class="sidebar-nav" style="color: white;">
        <li class="sidebar-header" style="font-size: 1.5rem;">Admin</li>
        <li class="sidebar-item" @click="navigateToManageBook">Quản lý sách</li>
        <li class="sidebar-item" @click="navigateToManagePublisher">
          Nhà xuất bản
        </li>
        <li class="sidebar-item" @click="navigateToManageBorrowBook">
          Mượn sách
        </li>
      </ul>
    </div>
  </aside>
</template>
<script>
export default {
  methods: {
    navigateToManageBook() {
      this.$router.push("/admin");
    },
    navigateToManagePublisher() {
      this.$router.push("/admin/publisher");
    },
    navigateToManageBorrowBook() {
      this.$router.push("/admin/borrow-book");
    },
  },
};
</script>
<style>
ul {
  padding: 0;
  margin: 0;
}
ul > li {
  list-style-type: none;
}
.sidebar {
  background-color: #f0f0f0;
  height: 100vh;
  width: 360px;
}
.sidebar-nav {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
.sidebar-header {
  font-size: 20px;
  padding: 8px 30px;
  font-weight: bold;
}
.sidebar-item {
  padding: 16px 30px;
  cursor: pointer;
  transition: all 0.1s linear;
}
.sidebar-item:hover {
  background-color: rgb(205, 184, 66);
  color: white;
}
</style>
