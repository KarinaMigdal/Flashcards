<template>
    <div class="main-box">
       <Error class="error"/> 
       <SideMenu @buttonClicked="onClickChild"/>
       <div class="page-wrap" :class="{ 'page-wrap-moved': isActive, 'activeError': error.isVisible }">
            <Header/>
            <Home/> 
       </div>
    </div> 
</template>

<script>
import SideMenu from '@/components/SideMenu.vue'
import Home from '@/components/Home.vue'
import Error from '@/components/Error.vue'
import Header from '@/components/Header.vue'
import { mapState } from 'vuex'


export default {
    name: 'Main',
    components: { SideMenu, Home, Error, Header } ,
    data () {
        return {
            isActive: false,
        }
    },
    computed: {
    ...mapState(['error' ]),
  },

    methods: {
        onClickChild (value) {
           this.isActive = !value
        }
    },
}
</script>

<style>
.main-box {
    width: 1000px;
    height: 600px;
    position: relative;
    background-color: white;
    background: linear-gradient( 
        to right bottom, 
        rgba(255, 255, 255, 0.8), 
        rgba(255, 255, 255, 0.4) 
    );
    border-radius: 20px;
    overflow: hidden;
}

.page-wrap {
    transition: all 0.5s ease 0s;
    width: 1000px;
    padding: 28px 40px 40px 100px;
}

.page-wrap-moved {
    transform: translate3d(300px, 0px, 0px);
    opacity: 0.3;
}

.error {
    position: absolute;
}

@media screen and (max-width: 1000px) {
  .main-box {
        width: 100vw;
        min-height: 100vh;
        position: relative;
        overflow-x: hidden;
        border-radius: 0;
    }

    .page-wrap {
        transition: all 0.5s ease 0s;
        width: auto;
        padding: 30px;
        min-width: 300px;
        height: 100%;      
    }

    .page-wrap-moved {
        transform: translate3d(300px, 0px, 0px);
        opacity: 0.3;
    }
}

@media screen and (max-width: 550px) {
    .main-box {
        overflow-y: auto;  
    }

    .page-wrap {
        padding: 10px 20px 30px 20px;
    }
}
</style>