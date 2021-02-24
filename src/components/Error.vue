<template>
    <div class='error-box' v-if="error.isVisible">
        <section>
            <span class="cross" @click="closeError(error)"></span>
            <img src="../assets/error.svg" class="error-icon" alt="error-icon">
            <h1>Oops!</h1>
            <h4>Something went wrong!</h4>
            <span class="message">{{ error.message }}</span>
        </section>
    </div>

   
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: "Error",
    computed: {...mapState([ 'error', ]),
    },
    methods:{
        closeError(error){
            error.isVisible = false;
            error.message = '';
        },
    },
}
</script>

<style scoped>
.error-box {
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 20;
    height: 400px;
    width: 350px;
    background-color: white;
    border-radius: 20px;
    border: 1px solid rgb(230, 230, 230);
    display: flex;
    flex-flow: column;
    justify-content: center;
}

.message {
    width: auto;
    margin: 10px 40px;
}

.error-icon {
    height: 60px;
}

 /* Cross */
.cross {
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 35px;
    height: 35px;
    opacity: 0.3;
    transition: opacity 0.5s;
}

.cross:hover {
    opacity: 1;
}

.cross:before, .cross:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 30px;
    width: 2px;
    background-color: #333;
}

.cross:before {
    transform: rotate(45deg);
}

.cross:after {
    transform: rotate(-45deg);
}
</style>