<template>
  <div class="dashboard" style="font-family: poppins, sans-serif;">
    <SidebarNav></SidebarNav>
    <div class="main" >
      <h3 style="text-align: center; margin-bottom: 20px">Chỉnh sửa</h3>
      <p v-if="!loading">
        <BookForm :book="book"></BookForm>
      </p>
      <p v-if="loading">Không tìm thấy thông tin</p>
    </div>
  </div>
</template>

<script>
import SidebarNav from "../components/adminComponents/SidebarNav.vue";
import BookForm from "../components/adminComponents/BookForm.vue";
import bookService from "../services/book.service";
export default {
  components: {
    SidebarNav,
    BookForm,
  },
  data() {
    return {
      book: {},
      loading: false,
    };
  },
  methods: {
    async getBookById(id) {
      try {
        this.loading = true;
        const response = await bookService.getById(id);
        this.book = response;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.getBookById(this.$route.params.id);
  },
};
</script>
