<template>
  <div class="dashboard" style="font-family: poppins, sans-serif">
    <SidebarNav></SidebarNav>
    <div class="main" >
      <h3 style="text-align: center; margin-bottom: 20px">Thêm mới</h3>
      <BookForm></BookForm>
    </div>
  </div>
</template>

<script>
import SidebarNav from "../components/adminComponents/SidebarNav.vue";
import BookForm from "../components/adminComponents/BookForm.vue";
export default {
  components: {
    SidebarNav,
    BookForm,
  },
};
</script>
