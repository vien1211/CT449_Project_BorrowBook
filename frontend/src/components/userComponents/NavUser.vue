<template>
  <div class="nav">
    <div id="logo">
      <router-link style="text-decoration: none; color: rgb(205, 184, 66); " to="/">Vien Store</router-link>
    </div>

    <div class="search-group">
      <form @submit.prevent="handleSearchBook" class="form-search">
        <div class="input-group" style="width: 450px">
          <input type="text" name="search" id="search" autocomplete="off" placeholder="Nhập..." class="form-control"
            v-model="search" style="margin-right: 15px" />
        </div>
        <button type="submit" class="btn btn-primary" style="background-color: rgb(205, 184, 66); border: none;">
          <i class="fas fa-search"></i> Tìm kiếm
        </button>
      </form>
      <ul class="list-group list-book__search">
        <router-link v-for="item in books" :to="item._id" class="list-group-item list-group-item-action">
          {{ item.name }}
        </router-link>
      </ul>
    </div>

    <div class="btn_nav">
      <div>
        <router-link to="/">Trang chủ</router-link>
      </div>
      <div v-if="loggedIn">
        <router-link to="/borrow-book">Sách đã mượn</router-link>
      </div>
      
      <div v-if="loggedIn">
        <button @click="handleLogout"> <i class="fas fa-sign-out-alt"></i> Đăng xuất</button>
      </div>
      <div v-if="!loggedIn">
        <button @click="navigateToLogin"> <i class="fas fa-sign-in-alt"></i> Đăng nhập</button>
      </div>
    </div>
  </div>
</template>

<script>
import bookService from "../../services/book.service";

export default {
  data() {
    return {
      loggedIn: JSON.parse(localStorage.getItem("user"))?._id ? true : false,
      books: [],
      search: "",
    };
  },
  methods: {
    navigateToLogin() {
      this.$router.push("/login");
    },
    handleLogout() {
      localStorage.removeItem("user");
      this.loggedIn = false;
      this.$router.push("/");
    },
 
  },
};
</script>

<style scoped>
.search-group {
  position: relative;
}

.list-book__search {
  position: absolute;
  width: 100%;
  left: 0;
  top: 100%;
}

.form-search {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav {
  background-color: rgb(255, 255, 255);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 3px;
  box-shadow: 1px 1px 1px 1px rgb(222, 222, 222);
  font-family: "poppins", sans-serif;
 
}

.btn_nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
}

.btn_nav div>a {
  display: inline-block;
  text-decoration: none;
  margin: 0px 10px 0px 10px;
  padding: 10px 10px 10px 10px;
  color: black;
  border-radius: 5px;
  font-size: 13pt;
  font-weight: 500;
  cursor: pointer;

  font-family: "poppins", sans-serif;
  /* Thay đổi font chữ cho các nút và liên kết trong .btn_nav */
}

.btn_nav button {
  padding: 10px;
  font-size: 13pt;
  font-weight: 500;
  cursor: pointer;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  background-color: none;
  font-family: "poppins", sans-serif;
  /* Thay đổi font chữ cho các nút trong .btn_nav */
}

.btn_nav div:hover a,
.btn_nav div:hover button {
  color: rgb(205, 184, 66);
}

#logo {
  margin-left: 260px;
  font-weight: 500;
  font-size: 20pt;
  color: rgb(205, 184, 66);
  font-family: "poppins", sans-serif;
}
</style>
