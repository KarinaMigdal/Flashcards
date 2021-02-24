<template>
    <div class="container">
        <section>
            <header>
                <img src="../assets/checked.svg" class="icon-checked">
                <h1>
                Congratulations!
                </h1>
            </header>  
            <main><h4>{{ success.message }}</h4></main>
            <nav>
                <router-link 
                class="accountText" 
                to="/login">
                    <button
                    type="submit" 
                    class="btn succes-btn">Sign in
                    </button>
                </router-link>
                <h5 class="footer_text" id="text_to_sign_up" >
            <router-link class="accountText" to="/register">Sign up</router-link></h5>
            </nav>
        </section>    
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Success',
    computed: {
    ...mapState(['success' ]),
  },
}
</script>

<style scoped>
@media screen  and (min-width: 600px) {
    .container {
        min-height: 500px;
    }
}

section {
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

.container > main > h4 {
    margin-bottom: 30px;
}

.succes-btn {
    padding: 20px ;
    width: 260px;
}
</style>