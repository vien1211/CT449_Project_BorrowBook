<template>
  <div id="login" class="w-25" style="box-shadow: 1px 1px 5px 1px rgb(222, 222, 222); height: 350px; ">
    <h2 class="mt-5" style="text-align: center;padding: 10px; color:rgb(205, 184, 66) ">Đăng nhập</h2>
    <Form @submit="submitLogin" :validation-schema="loginFormSchema" style="margin-left: 13px;">
      <div class="form-group" style="width: 95%;">
        <label for="email">E-mail</label>
        <Field
          name="email"
          type="email"
          class="form-control"
          v-model="loginLocal.email"
          
        />
        <ErrorMessage name="email" class="error-feedback" />
      </div>
      <div class="form-group" style="width: 95%;margin-top: 10px">
        <label for="password">Mật khẩu</label>
        <Field
          name="password"
          type="password"
          class="form-control"
          v-model="loginLocal.password"
        />
        <ErrorMessage name="password" class="error-feedback" />
      </div>
      <div class="form-group form-check" style="margin-top: 10px;">
        <input name="favorite" type="checkbox" class="form-check-input" />
        <label for="favorite" class="form-check-label">
          <strong>Lưu mật khẩu</strong>
        </label>
      </div>
      <div class="form-group mt-4" id="btn_login">
        <button class="btn" type="submit" style="background-color: rgb(205, 184, 66); color: white;">Đăng nhập</button>
        <button class="btn" style="border: 1px solid rgb(205, 184, 66);" @click="gotoRegister()">
          
          Đăng ký
        </button>
        
      </div>
      <!-- <button class="btn" style="color: rgb(205, 184, 66);font-size: small;margin-left: 35%;" @click="gotoAdmin()">Bạn là Admin?</button> -->
    </Form>
  </div>
</template>
<style>
#login {
  margin: auto;
  font-family: poppins, sans-serif;
}

#btn_login {
  text-align: center;
  margin: 5px;
}
#btn_login button {
  margin: 0 5px 0 5px;
}
.error-feedback {
  color: red;
}


</style>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  emits: ["submit:login"],
  data() {
    const loginFormSchema = yup.object().shape({
      email: yup
        .string()
        .email("E-mail không đúng.")
        .max(50, "E-mail tối đa 50 ký tự."),
      password: yup.string().min(6, "Mật khẩu phải từ 6 kí tự"),
    });
    return {
      loginLocal: {},
      loginFormSchema,
    };
  },
  methods: {
    submitLogin() {
      console.log("submitLogin", this.loginLocal);
      this.$emit("submit:login", this.loginLocal);
    },
    gotoRegister() {
      this.$router.push("/register");
    },
    gotoAdmin() {
      this.$router.push("/admin");
    },
  },
};
</script>
