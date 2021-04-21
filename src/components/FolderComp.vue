<template>
    <main>
        <div class="main-content">
            <section>
                <div class="main-menu">
                    <div class="folder-name-box">
                        <input 
                        v-model="folder.name"
                        @change="saveFolder(folder.name);"
                        class="folder-name input-style"
                        :class="{'invalid-input': !isValid}" 
                        type="text"
                        maxlength="30"
                        placeholder="Folder Name...">
                    </div>
                
                    <div class="btns-area">
                        <button 
                        @click="createFlashcard(folder.name)"
                        class="btn menu-btn">
                            <img 
                            src="../assets/add.svg" 
                            alt="save flashcard" 
                            class="icon-medium">
                            <span class="tooltiptext">add a new flashcard</span>
                        </button>

                        <button 
                        @click="removeFlashcard(selected)"
                        class="btn menu-btn">
                            <img 
                            src="../assets/delete.svg" 
                            alt="recycle bin" 
                            class="icon-medium">
                            <span class="tooltiptext">remove all selected flashcards</span>
                        </button>
                        
                        <button 
                        @click="redirect('/')" 
                        class="btn menu-btn">
                            <img 
                            src="../assets/home.svg" 
                            alt="Back to menu" 
                            class="icon-medium">
                            <span class="tooltiptext">Back to main menu</span>
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div class="table-box">
                    <table>
                        <thead>
                            <tr>
                                <th style="width:70px" v-show="!(folder.flashcards.length === 0)">
                                    <input 
                                    v-model="selectAll"
                                    @click="select(folder.flashcards)"
                                    type="checkbox" 
                                    class="table-checkbox check-all">
                                    <span>All</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="flashcard in folder.flashcards" 
                            :key="flashcard.id">
                                <td style="width:70px">
                                    <input 
                                    :id="flashcard.id"
                                    :value="flashcard" 
                                    v-model="selected" 
                                    @change='updateCheckall(folder.flashcards)'
                                    type="checkbox" 
                                    class="table-checkbox">
                                </td>
                                <td>{{ flashcard.front_text }}</td>
                                <td>{{ flashcard.back_text }}</td>
                                <td style="width:70px">
                                    <img 
                                    @click="editFlashcard(flashcard); 
                                    toogleVisibility();" 
                                    src="../assets/edit.svg" 
                                    alt="edit flashcard" 
                                    class="icon-table"></td>
                                <td style="width:70px">
                                    <img 
                                    @click='deleteFlashcard(flashcard)'
                                    src="../assets/delete.svg" 
                                    alt="remove flashcard" 
                                    class="icon-table">
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    </main>
</template>

<script>
import { mapState, mapMutations, mapActions} from 'vuex';
export default {
    name: 'FolderComp',
    data(){
        return {
            isValid: true,
            // access to route parameters inside of a component:
            id : this.$route.params.id,
            selected: [],
            selectAll: false,
        }
    },

    computed: {
        ...mapState([ 'folder', ]),
    },

    methods: { 
        ...mapMutations(['editFlashcard', 'toogleVisibility' ]), 
        ...mapActions(['handleFolderName', 'downloadFlashcards', 'removeFlashcard',]),

        redirect(path) {
            this.$router.push(`${path}`)
        },

        deleteFlashcard(flashcard){
            this.selected = [];
            this.selected.push(flashcard);
            this.removeFlashcard(this.selected);
            this.selected = [];
        },

        createFlashcard(name){
            if(name.length > 0){
                this.toogleVisibility();
            }
            else {
                this.isValid = false;
            }
        },
        
        select(flashcards){
            this.selected = [];
            if (!this.selectAll) {
                for (let i in flashcards) {
                    this.selected.push(flashcards[i]);
                }
            }
        },

         updateCheckall(flashcards){
            if (flashcards.length === this.selected.length){
                this.selectAll = true;
            }
            else {
                this.selectAll = false;
            }
        },

        saveFolder(folderName){
            if (folderName.length > 0) {
                this.isValid = true;
                this.handleFolderName()
            }
            else {
                this.isValid = false;
            }
        },
    },

    created() {
        this.downloadFlashcards(this.id);
    },
}
</script>

<style scoped>
.main-menu {
    display: flex;
    margin-bottom: 10px ;
}

.folder-name-box {
    width: 400px;
}

.folder-name {
    height: 65px;
    width: 300px;
}

.input-style:hover {
    width: 350px;
}

.btns-area {
    margin-left: 30px;
    width: 540px;
    height: 65px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
}

.menu-btn {
    width: 130px;
    height: 65px;
    position: relative;
}

.menu-btn:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}


/* TABLE  */
.table-box {
    height: 400px;
    position: relative;
    border-radius: 20px;
}

table {
    border-collapse: separate;
    width: 100%;   
}

tbody  {
    display: block;
    height: 350px;
    overflow-y: auto;
}

tbody tr {
    display: table;
    width: 100%;
    table-layout: fixed; 
}

thead {
    display: table;

}

thead tr th {
    padding: 5px 10px;
    position: relative;
}

thead tr th span {
    position: absolute;
    top: 7px;
    margin-left: 5px;
    font-size: 14px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
}

tbody tr td {
    padding: 5px 10px;
    border-bottom: 1px solid #dadada;
    opacity: 0.7;
    transition: opacity 0.2s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

tbody tr td:nth-child(2n) {
    max-width: 150px;
}

tbody tr td:nth-child(1n) {
    max-width: 50px;
}

.icon-table {
    opacity: 0.7;
    height: 25px;
    cursor: pointer;
    transition: opacity ease-in-out 0.3s;
}

tbody:hover > tr:hover td, .icon-table:hover {
    opacity: 1;
} 

.check-all {
    border: 2px solid black;
}

@media screen  and (max-width: 1000px) {
    .main-content {
        width: 100%;
    }

    .table-box {
        height: calc(86vh - 95px);
    }

    tbody  {
        height: 70vh;
    }
}

@media screen  and (max-width: 860px) {
    .main-content {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }

    .main-menu {
        flex-flow: column nowrap;
        align-items: center;
        margin-bottom: 5px;
    }

    .folder-name-box {
        width: 90%;
        margin-bottom: 5px;
    }

    .folder-name {
        width: 90%;
        height: 100%;
        font-size: 20px;
        padding: 5px;
        margin: 0;
    }

    .input-style:hover {
        width: 100%;
    }

    .btns-area {
        width: 100%;
        margin: 0;
    }
    
    .table-box {
        height: calc(83vh - 95px);
    }

    thead tr th:nth-child(1) {
        width: 72px;
    }

    tbody tr td:nth-child(3) {
        max-width: 300px;
    }

    thead tr th:nth-child(4), thead tr th:nth-child(5) {
        width: 51px;
    } 

    tbody  {
        height: 65vh;
    }
}

@media screen  and (max-width: 550px) {
    .main-content {
        height: auto;
    }

    .menu-btn {
        width: 23%;
        min-width: 75px;
    }

    .table-box {
        height: calc(87vh - 95px);
    }

    thead tr th:nth-child(3), tbody tr td:nth-child(3) {
        display: none;
    }

    tbody  {
        height: 68vh;
    }
}

</style>