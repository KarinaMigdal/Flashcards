<template>
    <div class="main-box">
        <Error class="error"/>
        <SideMenu @buttonClicked="onClickChild"/>
        <div class="page-wrap" :class="{ 'page-wrap-moved': isActive, 'activeError': error.isVisible }">
            <Header/>
            <GameComp/>
       </div>
    </div> 
</template>

<script>
import SideMenu from '@/components/SideMenu.vue'
import GameComp from '@/components/GameComp.vue'
import Error from '@/components/Error.vue'
import Header from '@/components/Header.vue'


import { mapState, mapActions, } from 'vuex'


export default {
    name: 'Main',
    components: { SideMenu, GameComp, Error, Header, } ,
    data () {
        return {
            isActive:false,
        }
    },
    computed: {
    ...mapState([ 'error' ]),
  },

    methods: { ...mapActions([ 'fetchFolders', ]),
        onClickChild (value) {
           this.isActive = !value
        }
    },
        created() {
        this.fetchFolders();
    },
}
</script>

<style scoped>
</style>