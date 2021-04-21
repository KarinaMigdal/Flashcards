<template>
    <main>
        <div class="main-content">
            <section>
                <div class="btns-area btns-menu-area">
                    <button 
                    @click='createNewFolder(); 
                    redirect("000")'
                    class="btn menu-btn new-folder-btn">
                        <img 
                        class="icon-medium" 
                        src="../assets/fi-rr-folder-add.svg">
                    </button>
                    <router-link to="/game">
                        <button 
                        class="btn menu-btn play-btn">Play
                        </button>
                    </router-link>
                </div>
            </section>
            <FolderElement/>
        </div>
    </main>
</template>

<script>
import { mapMutations,} from 'vuex';
import FolderElement from '@/components/FolderElement.vue';

export default {
    name:'Home',
    components: { FolderElement, },

    methods: {...mapMutations([ 'createNewFolder', ]),

        redirect(folderId) {
            this.$router.push(`/folder/${folderId}`)
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
}

.btns-area {
    width: 100%;
    overflow-y: auto;
    display: flex;
    align-content: flex-start;
}

.btns-menu-area {
    flex-wrap: nowrap;
}

.menu-btn {
    color: #000;
    height: 65px;
    margin: 5px;
    padding: 10px;
    border: 1px solid rgb(196, 196, 196);
    background-color:#a7d8ab;  
    opacity: 0.8;
    transition: opacity ease-in-out 0.2s;
    white-space: nowrap;
}

.play-btn {
    width: 170px;
    font-size: 30px;
}

.new-folder-btn {
    width: 85px;
}

.menu-btn:focus, .menu-btn:hover {
    opacity: 1;
}   

/* For mobile: */
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