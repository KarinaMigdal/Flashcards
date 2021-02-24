<template>
    <main>
        <div class="main-content">
            <header><h1>Settings</h1></header>
            <section>
                <div class="row">
                    <span>Click to delete your account</span>
                    <div class="img"><img src="../assets/delete.svg" alt="recycle bin" @click="showMessage"  class="icon-settings"></div> 
                </div>
                <div class="row alert" v-if="isVisibleMessage">
                    <span>Are you sure?</span> 
                    <div class="ok" @click="removeAccount">OK</div>
                </div>  
            </section>             
        </div>
    </main>
</template>

<script>
import { mapActions } from 'vuex'


export default {
    name: 'SettingsComp',
    data(){
        return {
            isVisibleMessage: false,
        }
    },
      methods: {
        ...mapActions([ 'removeAccount', ]),
        showMessage(){
            this.isVisibleMessage = true;
        },
    },
}
</script>

<style scoped>
.main-content {
    height: 460px;
    width: 860px; 
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
}

span {
    font-size: 19px;
}

h1 {
    text-transform: uppercase;
    margin-bottom: 20px;
}

.ok {
    margin-left: 10px;
    border: 1px solid rgb(201, 201, 201) ;
    padding: 5px 10px;
    width: 60px;
    cursor: pointer;
    transition: border 0.2s;
    border-radius: 10px;
}

.ok:hover {
    border: 1px solid rgb(49, 49, 49) ;
}

.img {
    display: inline-block;
    cursor: pointer;
}

.icon-settings {
    height: 30px;
    margin-left: 5px;
}

.row {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    border: 1px solid rgb(201, 201, 201) ;
    padding: 10px;
    overflow: hidden;
    border-radius: 20px;
}

.alert {
    border: 3px solid rgb(235, 113, 113) ;
}

@media screen  and (max-width: 1000px) {
    .main-content {
        width: 100%;
        height: 85vh;
    }
}  

@media screen  and (max-width: 550px) {
    .main-content {
        height: 90vh;
    }
}
</style>