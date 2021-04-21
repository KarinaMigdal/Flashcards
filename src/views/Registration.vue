<template>
  <div class="login-container">
    <div class="login-box">
      <header>
        <img src="../assets/user.svg" alt="user image" class="img-user">
        <h1>Sign up</h1>
        <h4>It's free and only takes a minute.</h4>
      </header>
      <main>
        <RegisterForm/> 
      </main>
    </div>
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'

export default {
  name: 'Registration',
  components: {
    RegisterForm
  }
}
</script>

<style scoped>
</style>
