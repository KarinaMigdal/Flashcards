<template>
    <main>
        <div class="main-content">
            <section>
                <div class="btns-area btns-menu-area">
                    <button 
                    @click=' 
                    createNewFolder(); 
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
            <div class="btns-area folders-area">
                <div 
                v-for="folder in folders" 
                :key="folder.id" 
                class="btn folder-box">
                    <span 
                        class="folder-name" 
                        :class="[{ 'folder-name-visible': !folder.menuIsVisible, 'folder-name-hidden': folder.menuIsVisible}]">
                        {{ folder.name }} 
                    </span>
                    <div 
                    class="folder-menu" 
                    :class="[{' folder-menu-visible': folder.menuIsVisible, 'folder-menu-hidden': !folder.menuIsVisible}]">  
                        <img 
                        src="../assets/delete.svg" 
                        alt="remove folder" 
                        class="icon-medium"
                        @click='removeFolder(folder.id);'>
                        <img 
                        src="../assets/edit.svg" 
                        alt="edit folder" 
                        class="icon-medium" 
                        @click="; 
                        redirect(folder.id);
                        clearFolderMenuVisibility();" >
                    </div>
                    <div 
                    class="folder-menu-btn" 
                    @click='clearFolderMenuVisibility(folder.id); 
                    toogleFolderMenu(folder);'>  
                        <img 
                        src="../assets/list.svg" 
                        alt="menu folder" 
                        class="icon-medium">
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
    name:'Home',
    
    computed: {...mapState([ 'folders', 'newFolder', ])},
    
    methods: {...mapMutations([
        'toogleFolderMenuVisibility', 
        'clearFolderMenuVisibility',
        'createNewFolder',
        'removeFolder',
        
    ]),
        toogleFolderMenu(folder) {
            folder.menuIsVisible = !folder.menuIsVisible;
        },
        removeFolder(folderId) {
            this.deleteFolder(folderId)
        },
        redirect(folderId) {
            this.$router.push(`/folder/${folderId}`)
        },
        ...mapActions([
            'fetchFolders', 'deleteFolder',
        ]),
    },

    created() {
        this.fetchFolders();
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

.folders-area {
    height: 82%;
    flex-wrap: wrap;
}

.folder-box {
    height: 65px;
    width: 32%;
    padding: 15px 0 0 20px;
    margin: 5px;
    cursor: default;
    display: flex;
    position: relative;
    overflow: hidden;
}

.folder-name {
    font-size: 25px;
    width: 200px;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    letter-spacing: 0;
    transition: opacity ease-in-out 0.5s, transform ease-in-out 0.5s ;
}

.folder-name-hidden {
    opacity: 0.3;
    transform: translateX(-80px);
}

.folder-menu-btn {
    position: absolute;
    right: 10px;
}

.folder-menu {
    position: absolute;
    right: 60px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    overflow: hidden;  
    transition: opacity ease-out 0.5s, width ease-out 0.5s,
}

.folder-menu-visible {
    width: 80px;
    opacity: 1;
}

.folder-menu-hidden {
    width: 0;
    opacity:0;
}

/* .icon-home {
    height: 35px;
    cursor: pointer;
} */

.menu-btn:focus, .menu-btn:hover, .folder-name-visible {
    opacity: 1;
}   

/* For mobile: */
@media screen  and (max-width: 1000px) {
    .main-content {
        width: 100%;
        height: 85vh;
    }
   
    .folder-box  { 
        width: 270px;
    }
}
    
@media screen  and (max-width: 625px) {
    .folder-box {
        width: 100%;
    }
    .folder-name {
        width: 80%;
    }   
}

@media screen  and (max-width: 550px) {
    .main-content {
        height: 90vh;
    }
     .folders-area {
        height: 88%;
    }
}

</style>