<template>
    <div class="major-box">
        <div class="flex-box">
            <div class="card-frame">
                <div class="folder-name-box" >
                    <span class="folder-name">{{ folder.name }}</span>
                </div>
            </div>
            <div class="message-area" 
            :class="{'show-message': messages[0].isShowMessage, 'hide-message': messages[0].isHideMessage }" >
                {{ messages[0].message }}
            </div>
        </div>
        <main>        
            <div class="flex-box">
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
                        class="btn flashcard-btn save-btn">
                            <img src="../assets/floppy-disk.svg" 
                            alt="save the flashcard" 
                            class="icon-medium">
                            <span class="tooltiptext">save the flashcard</span>
                        </button>
                        <button 
                        @click="clearFlashcard" 
                        class="btn flashcard-btn remove-btn">
                            <img src="../assets/delete.svg" 
                            alt="remove the flashcard" 
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
        </main>
    </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
    name: 'NewFlashCard',

    computed: {...mapState(['newFlashcard', 'messages', 'folder' ]),
    },

    methods: {...mapMutations([ 'clearFlashcard', 'toogleVisibility' ]),
    ...mapActions(['createFlashcard']),
    
        addFlashcard(flashcard){
            let data = {
                front_text: flashcard.front_text,
                back_text: flashcard.back_text,
            };
            this.createFlashcard(data)
        }
    } 
}
</script>

<style scoped>
.major-box {
    height: 460px;
    width: 860px; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.flex-box {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 10px;
}

.folder-name-box {
    cursor: default;
    font-size: 35px;
    height:100px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.folder-name {
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

.save-btn {
    background-color:#C6EBC9;
}

.save-btn:hover {
    background-color: rgb(142, 204, 163);
}

.remove-btn {
   background-color: #d35d6e;
}

.remove-btn:hover {
   background-color: #d64057;
}


/* For mobile: */
@media screen  and (max-width: 1000px) {
    .major-box, .flex-box {
        width: 100%;
        height: auto;
    }

    .flashcard-textarea-box {
        height: 45vh;
    }

    .message-area {
        height: 106px;
    }
}

@media screen  and (max-width: 860px) {

    .flex-box {
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

    .folder-name-box, .message-area {
        width: 100%;
        height: 60px;
        padding: 0;
    }

    .message-area {
        font-size: 20px;
        width: 100%;
        padding: 0;
        border-radius: 20px;
        margin-top: 10px;
    }

    @media screen  and (max-width: 550px) {
        .flashcard-textarea-box {
            height: 52vh;
        }

        .folder-name-box {
            font-size: 1.3em;
            height: 45px;
        }
    }
}
</style>