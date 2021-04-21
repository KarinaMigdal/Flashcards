<template>
    <div>
        <aside>
            <div class="bm-menu" :class="{ active: isActiveBM }" >
                <nav>
                    <div class="bm-item-list">
                        <router-link to="/">
                            <div class="menu-option">
                                <img class="bm-icon" 
                                src="../assets/home.svg" 
                                alt="home image">
                                <span>Home</span>
                            </div>
                        </router-link>
                        <router-link to="/about-app">
                            <div class="menu-option">
                                <img class="bm-icon" 
                                src="../assets/document.svg" 
                                alt="user image">
                                <span>About the app</span>
                            </div>
                        </router-link>
                        <router-link to="/about-authors">
                            <div class="menu-option">
                                <img class="bm-icon" 
                                src="../assets/group.svg" 
                                style="height: 40px" 
                                alt="user image">
                                
                                <span>About the authors</span>
                            </div>
                        </router-link>
                        <router-link to="/settings">
                            <div class="menu-option">
                                <img class="bm-icon" 
                                src="../assets/settings.svg" 
                                alt="user image">
                                <span>Settings</span>
                            </div>
                        </router-link>

                        <div class="menu-option" @click="logOut">
                            <img class="bm-icon" 
                            src="../assets/sign-out.svg" 
                            alt="user image">
                            <span>Log out</span>
                        </div>
                    </div>
                </nav>
                <span class="close" @click="onClick"></span>
            </div>
            <div class="bm-button" @click="onClick" >
                <span class="bm-bars" style="top: 0%;"></span>
                <span class="bm-bars" style="top: 40%;"></span>
                <span class="bm-bars" style="top: 80%;"></span>
            </div>
        </aside>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'SideMenu',
    data() {
        return {
            isActiveBM: true,
        }
    },
  
    methods: {...mapActions([ 'logOut' ]),
        onClick() {
            this.isActiveBM = !this.isActiveBM;
            this.$emit("buttonClicked", this.isActiveBM)
        },
    },
}
</script>

<style scoped>
    
    .bm-menu {
        border-radius: 20px;
        background-color: #f0f0f0;
        height: 100%;
        left: 0;
        overflow-x: hidden;
        border: 1px solid rgb(224, 224, 224);
        position: absolute;
        top: 0;
        transition: .5s;
        width: 300px;
        z-index: 1000;
    }

    .active {
        width: 0px;
    }

    .bm-item-list{
        padding: 30px 0;
        color: #b8b7ad;
        font-size: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

   .bm-icon {
        height: 35px; 
   }
  
    .menu-option  {
        display: flex;
        align-items: center;
        width: 250px;
        padding: 20px 20px;
        transition: opacity 0.3s;
        opacity: 0.7;
        cursor: pointer;
    }

    .menu-option:hover {
        opacity: 1;
    }

    .menu-option span {
        text-decoration: none;
        color: black;
        width: 200px;
        
    }

    /* Cross */
    .close {
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 20px;
        width: 28px;
        height: 28px;
        opacity: 0.3;
        transition: opacity 0.5s;
    }

    .close:hover {
        opacity: 1;
    }

    .close:before, .close:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 20px;
        width: 2px;
        background-color: #333;
    }

    .close:before {
        transform: rotate(45deg);
    }

    .close:after {
        transform: rotate(-45deg);
    }

    /* Burger menu */
    .bm-button {
        cursor: pointer;
        height: 30px;
        left: 30px;
        position: absolute;
        top: 42px;
        width: 36px;
        opacity: 0.8;
        transition: opacity 0.3s;
        z-index: 20;
    }

    .bm-button:hover {
        opacity: 1;
    }

    .bm-bars {
        height: 20%;
        left: 0;
        position: absolute;
        right: 0;
        background: #373a47;
    }

    @media screen and (max-width: 1000px) {
        .bm-menu {
            position: fixed;
            width: 300px;
        }

        .active {
            width: 0px;
        }

         .close:before, .close:after {
            height: 40px;
            width: 3px;
        }

        .close {    
            right: 20px;
            top: 15px;
        }      
    }

     @media screen and (max-width: 550px) {
         .bm-button {
            position: fixed;
            opacity: 0.3;
            top: 15px;
            left:20px 
         }
     }

    @media screen and (max-width: 450px) {
        .bm-menu {
            width: 100vw;
        } 
        .active {
            width: 0px;

        }
        .bm-button {
            left:20px
        }
    }

</style>