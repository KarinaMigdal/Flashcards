<template>
    <div class="login-container">
        <section>
            <div class="success-box">
                <header>
                    <img src="../assets/checked.svg" 
                    class="icon-checked">
                    <h1>Congratulations!</h1>
                </header>  
                <h4 class="success-message">{{ success.message }}</h4>
                <nav>
                    <router-link 
                    class="accountText" 
                    to="/login">
                        <button
                        type="submit" 
                        class="btn succes-btn">Sign in
                        </button>
                    </router-link>
                    <h5 class="footer-text text-to-register">
                        <router-link class="account-text" to="/register">Sign up</router-link>
                    </h5>
                </nav>
            </div>
        </section>    
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Success',
    computed: {
    ...mapState([ 'success' ]),
  },
}
</script>

<style scoped>
.success-box {
    width: 350px;
    min-height: 300px;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-around;
    padding: 40px 45px;
}

.icon-checked {
    width: 100px;
} 

.success-message {
    margin-bottom: 30px;
}

.succes-btn {
    padding: 20px ;
    width: 260px;
}
</style>