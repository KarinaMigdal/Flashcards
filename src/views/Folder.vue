<template>
    <div class="main-box">
        <Error class="error"/>
        <SideMenu @buttonClicked="onClickChild"/>
        <div class="page-wrap" :class="{ 'page-wrap-moved': isActive, 'activeError': error.isVisible  }">
           <Header/>
            <FolderComp v-show="toogle"/>
            <Flashcard v-show="!toogle"/>
       </div>
    </div> 
</template>

<script>
import SideMenu from '@/components/SideMenu.vue'
import FolderComp from '@/components/FolderComp.vue'
import Flashcard from '@/components/NewFlashCard.vue'
import Error from '@/components/Error.vue'
import Header from '@/components/Header.vue'
import { mapState } from 'vuex'

export default {
    name: 'Main',
    components: { SideMenu, FolderComp, Flashcard, Error, Header } ,
    data () {
        return {
            isActive: false,
        }
    },
    computed: {
    ...mapState(['toogle', 'error']),
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