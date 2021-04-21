<template> 
    <div class="main-box">
       <Error class="error"/> 
       <SideMenu @buttonClicked="onClickChild"/>
       <div class="page-wrap" :class="{ 'page-wrap-moved': isActive, 'activeError': error.isVisible }">
            <Header/>
            <AuthorsInfo/>
       </div>
    </div> 
</template>

<script>
import SideMenu from '@/components/SideMenu.vue'
import Error from '@/components/Error.vue'
import AuthorsInfo from '@/components/AuthorsInfo.vue'
import Header from '@/components/Header.vue'
import { mapState } from 'vuex'

export default {
    name: 'Main',
    components: { SideMenu, Error, AuthorsInfo, Header,  } ,
    data () {
        return {
            isActive:false,
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

<style scoped>
</style>