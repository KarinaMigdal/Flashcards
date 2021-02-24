<template>
    <main>
        <div class="main-content">
            <div class="row">
                <div class="card-frame">
                    <div class="folder-name" >
                        <span>{{ folder.name }}</span>
                    </div>
                </div>
                <div class="message-area" 
                :class="{'show-message': messages[0].isShowMessage, 'hide-message': messages[0].isHideMessage }" >
                    {{ messages[0].message }}
                </div>
            </div>
            <div class="row">
                <div class="input-box"> 
                    <input 
                    v-model="newFlashcard.front_text" 
                    type="text" 
                    maxlength="60" 
                    class="flashcard-name input-style" 
                    placeholder="Name">
                </div>
                <section>
                    <div class="buttons-area">
                        <button 
                        @click="addFlashcard(newFlashcard);" 
                        id="save-btn" 
                        class="btn flashcard-btn">
                            <img src="../assets/floppy-disk.svg" 
                            alt="save flashcard" 
                            class="icon-medium">
                            <span class="tooltiptext">save the flashcard</span>
                        </button>
                        <button 
                        @click="clearFlashcard" 
                        id="remove-btn" 
                        class="btn flashcard-btn">
                            <img src="../assets/delete.svg" 
                            alt="recycle bin" 
                            class="icon-medium">
                            <span class="tooltiptext">clear the flashcard</span>
                        </button>

                        <button 
                        @click="toogleVisibility(); 
                        clearFlashcard();" 
                        class="btn flashcard-btn">
                            <img src="../assets/home.svg" 
                            alt="Back to menu" 
                            class="icon-medium">
                            <span class="tooltiptext">back to folder</span>
                        </button>
                    </div>
                </section>  
            </div>
            <div class="card-frame color-transitions flashcard-textarea-box">
                <textarea 
                v-model="newFlashcard.back_text" 
                maxlength="2500"   
                class="input-text">
                </textarea>
            </div>
        </div>
    </main>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
export default {
    name: 'NewFlashCard',
    computed: {...mapState(['newFlashcard', 'folders', 'currentFolderIndex', 'messages', 'folder' ]),
    },

    methods: {...mapMutations(['showMessage', 'showPage', 'clearPageVisibility', 'saveFlashcard', 'clearFlashcard', 'toogleVisibility' ]),
    ...mapActions(['addFlashcardFetch']) ,
        addFlashcard(flashcard){
            let data = {
                front_text: flashcard.front_text,
                back_text: flashcard.back_text,
            };
            this.addFlashcardFetch(data)
        }
    } 
}
</script>

<style scoped>


.main-content {
    height: 460px;
    width: 860px; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.row {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 10px;
}

.folder-name {
    cursor: default;
    font-size: 35px;
    height:100px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.folder-name span{
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.input-box {
    width: 500px;
}

.flashcard-name{
    width: 400px;
}

.flashcard-name:hover {
    width: 480px;
}

/* MESSAGE */
.hide-message {
    transform: scale(0);
}

.show-message {
    transform: scale(1);
}

 .message-area {
    border: 1px solid black;
    width: 310px;
    height: 100%;
    font-size: 26px; 
    background-color:#C6EBC9;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    cursor: default;
    overflow: hidden;
    border-radius: 20px;
    transition: transform ease-out 0.5s;

}

.buttons-area {
    width: 290px;
    height: 65px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}

/* TEXTAREA */
.flashcard-textarea-box {
    height: 250px;
    padding: 20px;
    }

textarea {
    width: 98%;
    height: 95%;
    color: rgb(100, 100, 100);
    text-indent: 0;
    padding: 0px;
    border: none;
    resize: none;
    font-size: 16px;
    margin: 0;
    overflow-y: auto;
}

textarea:hover {
    border: none;
}

textarea:focus {
    border: none;
    color: rgb(0, 0, 0);
}

.color-transitions {
    opacity: 0.7;
    transition: opacity 0.2s;
}

.color-transitions:hover  {
    opacity: 1;
}

/* BUTTONS  */

.flashcard-btn {
    width: 85px;
    height: 100%;
    position: relative;
}

.flashcard-btn:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.flashcard-btn:focus  {
    border: 1px solid black;
}

#save-btn {
    background-color:#C6EBC9;
}

#save-btn:hover {
    background-color: rgb(142, 204, 163);
}

#remove-btn {
   background-color: #d35d6e;
}

#remove-btn:hover {
   background-color: #d64057;
}


/* For mobile: */
@media screen  and (max-width: 1000px) {
    .main-content, .row {
        width: 100%;
        height: auto;
    }

    .flashcard-textarea-box {
        height: 45vh;
    }
    
}

@media screen  and (max-width: 860px) {

    .row {
        flex-direction: column;
        flex-wrap: wrap;
    }

    .buttons-area {
        justify-content: center;
        order: 0;
        width: 100%;
        margin: 10px 0;
    }

    .flashcard-btn {
        margin: 0 10px;
    }

    .input-box {
        order: 1;
        width: 100%;
    }

    .flashcard-name {
        width: 90%;
    }

    .flashcard-name:hover {
        width: 100%;
    }

    .folder-name, .message-area {
        width: 100%;
        height: 60px;
        padding: 0;
    }

    .message-area {
        font-size: 20px;
        width: 100%;
        padding: 0;
        border-radius: 7px;
        margin-top: 10px;
    }



    @media screen  and (max-width: 550px) {
        .flashcard-textarea-box {
            height: 52vh;
        }

        .folder-name {
            font-size: 1.3em;
            height: 45px;
        }
    }
}
</style>