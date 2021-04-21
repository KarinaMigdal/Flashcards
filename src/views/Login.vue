<template>
  <div class="login-container">
    <div class="login-box">
      <img  src="../assets/user.svg" alt="user image" class="img-user">
      <h1>Sign in</h1>   
      <main>
        <LoginForm/>
      </main>  
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 440px;
  min-height: 600px;
  background-color:white;
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0.4) 
  );
  border-radius: 20px;
}

.login-box {
  min-height: 400px; 
  width: 100%;
  padding: 70px 50px 70px 50px;
}

.img-user {
  height: 70px;
}

@media screen  and (max-width: 600px) {
  .login-container {
    padding: 0 50px;
    margin: 0;
    border-radius: 0;
    width: 100vw;
    min-width: 320px;
    height: 100vh;
    min-height: 500px;
  }

  .login-box {
    padding: 10px 0 40px 0;
    min-height: 500px;
    min-width: 300px;
  }
}

</style>