<template>
    <div class="container">
        <div class="main">
            <main>
              <img  src="../assets/user.svg" alt="user image" class="img_user">
              <h1>Sign in</h1>   
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

<style >

.container {
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

.main {
  min-height: 400px; 
  width: 100%;
  padding: 70px 50px 70px 50px;
}

@media screen  and (max-width: 600px) {
  .container {
    padding: 0 50px;
    margin: 0;
    border-radius: 0;
    width: 100vw;
    min-width: 320px;
    height: 100vh;
    min-height: 500px;
  }
  .main {
    padding: 10px 0 40px 0;
    min-height: 500px;
    min-width: 300px;
  }
}


/* loading button: */
.loading {
    position: relative;
    pointer-events: none;
    opacity:0.5;
}

.loading::after {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid rgba(0, 0, 0, 0.2);
    border-right-color: rgba(0,0,0,0.7);
    transform: translate(-50%, -50%) rotate(0deg);
    content:"";
    animation: rotateSingleLoading 0.3s infinite linear;
    z-index: 10;
}

@keyframes rotateSingleLoading {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}
</style>