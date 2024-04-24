<template>
  <div class="home-page">
    <Nav></Nav>
    <Carousel></Carousel>

    <div class="container">
      <h3 class="section-title">Các sự lựa chọn dành cho bạn!</h3>
      <div class="book-list">
        <div
          class="book-item"
          v-for="item in books"
          :key="item._id"
          @click="navigateToBook(item._id)"
        >
          <div class="book-item__img">
            <img :src="item.image" alt="book" />
          </div>
          <div class="book-item__info">
            <h4 class="book-item__title">{{ item.name }}</h4>
            <p class="book-item__author">{{ item.author }}</p>
            <p class="book-item__price">{{ convertPrice(item.price) }}</p>
          </div>
          <button class="btn book-item__btn">Mượn</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/userComponents/Carousel.vue";
import Nav from "../components/userComponents/NavUser.vue";
import bookService from "../services/book.service";

export default {
  components: {
    Carousel,
    Nav,
  },
  data() {
    return {
      books: [],
    };
  },
  methods: {
    async showAllHome() {
      try {
        this.books = await bookService.getAll();
      } catch (error) {
        console.log(error);
      }
    },
    navigateToBook(id) {
      this.$router.push("/" + id);
    },
    convertPrice(price) {
      return price + " VNĐ";
    },
  },
  mounted() {
    this.showAllHome();
  },
};
</script>

<style scoped>
.home-page {
  font-family: 'Poppins', sans-serif;
}

.container {
  margin: 30px auto;
  padding: 0 15px;
}

.section-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
}

.book-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.book-item {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;
}

.book-item:hover {
  transform: translateY(-5px);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}

.book-item__img img {
  border-radius: 8px;
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.6s ease; 
}

.book-item:hover .book-item__img img {
  transform: scale(1.1); 
}

.book-item__info {
  flex: 1;
}

.book-item__title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.book-item__author {
  font-size: 14px;
  color: #666;
}

.book-item__price {
  font-size: 16px;
  color: rgb(219, 103, 49);
  margin-top: 5px;
  text-align: center;
}

.book-item__btn {
  margin-top: auto;
  background-color: rgb(205, 184, 66);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.book-item__btn:hover {
  background-color: rgb(180, 160, 40);
}


</style>
