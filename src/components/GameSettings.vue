<template>
    <section>
        <div class="game-settings" 
        :class="{ 'game-settings-hide': game.isStarted, 'game-settings-active': !game.isStarted}">
            <div class="flex-box">
                <div class="minor-box">
                    <h2 :class="{ message: game.settingsError }">Check folder to play:</h2>
                    <div class="checkbox-area">
                        <div class="checkbox">
                            <input
                            type="checkbox" 
                            id="selectAll"
                            v-model="selectAll"
                            @click="select(folders)">
                            <label for="selectAll">Check all</label>
                        </div>
                        <div 
                        v-for="folder in folders" 
                        :key="folder.id">   
                            <div class="checkbox" v-if="(folder.flashcards.length > 0)" >
                                <input
                                v-model="selected" 
                                @change='updateCheckall(folders)'
                                type="checkbox" 
                                :value="folder"
                                :id="folder.id">
                                <label 
                                :for="folder.id">{{ folder.name }}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="minor-box">
                    <h2>Select the number of flashcards:</h2>
                    <select v-model="gameLimit" class="select">
                        <option :value="5">5
                        </option>
                        <option :value="10">10
                        </option>
                        <option :value="15">15
                        </option>
                        <option :value="20">20
                        </option>
                    </select>
                </div>
            </div>
            <div class="flex-box">
                <button class="btn buttonGame" @click="redirect">
                    <img 
                    src="../assets/home.svg" 
                    alt="Back to menu" 
                    class="icon-flashcard">
                    <span class="tooltiptext">back to main menu</span>
                </button>
                <button @click='playGame' class='btn buttonGame'>PLAY</button>
            </div>    
        </div>
    </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name:'GameSettings',
    data(){
        return {
            gameLimit: 5,
            selected: [],
            selectAll: false,
        }
    },
    computed: {
        ...mapState([ 'folders', 'game', ])
    },
    methods: {
        ...mapMutations([ 'play', 'gameErrorShow', 'gameErrorHide', 'setLimit' ]),
        redirect() {
            this.$router.push("/")
        },

        select(folders) {
            this.selected = [];
            if (!this.selectAll) {
                for (let i in folders) {
                    if (folders[i].flashcards.length > 0){
                        this.selected.push(folders[i]);
                    }    
                }
            }
        },

        updateCheckall: function(folders){
            const num = (folders.filter(folder => folder.flashcards.length > 0)).length;
            this.gameErrorHide();
            if (num == this.selected.length){
                this.selectAll = true;
            }
            else {
                this.selectAll = false;
            }
        },

        playGame(){
            console.log(this.gameLimit)
            if(this.selected.length !== 0) {
                const tab = [];
                for (const folder of this.selected) {
                    for (const flashcard of folder.flashcards) {
                        flashcard.folderName = folder.name;
                        tab.push(flashcard)
                    }
                }
                const obj = { flashcards: tab}
                this.setLimit(this.gameLimit)
                this.play(obj)
            }
            else {
                this.gameErrorShow();
            }
        },

    }
}
</script>

<style scoped>
.icon-flashcard {
    height: 30px;
}

.message {
    color: crimson;
}

.game-settings-hide {
    transform: translateX(1200px);
}

.game-settings-active {
    transform: translateX(170px);
}

.game-settings {
    transition: transform ease-in-out 1s;
}

.flex-box {
    display: flex;
}

.minor-box {
    width: 240px;
    margin: 0 20px;
}

.checkbox-area {
    max-height: 300px;
    overflow-y: scroll;
}

.select {
    font-family: 'Quicksand', sans-serif;
    background: transparent ; 
    border-color: transparent transparent #fff transparent;
    border-radius: 10px;
    border: 1px solid rgb(196, 196, 196);
    font-size: 20px;
    width: 100%;
    padding: 10px;
    transition: border ease-in-out 0.2s;
}

.select option {
    background: rgba(180, 180, 180, 0.24);
}


.select:focus, .select:hover {
    border: 1px solid rgb(117, 117, 117);
    outline: none;
}

.buttonGame {
    width: 45%;
    font-size: 20px;
    padding: 15px 0px;
    margin: 25px auto;
}


.checkbox {
    margin: 20px 20px;
    width: 180px;
    display: flex;
    justify-content: start;
}
.checkbox label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

@media screen and (max-width: 1000px) {
    
    .game-settings-active {
        transform: translateX(200px);
    }
}

@media screen and (max-width: 600px) {
    .flex-box {
        flex-wrap: wrap;
    }
    .minor-box {
        min-width: 200px;
        margin: 0;
    }
    .buttonGame {
        width: 100%;
        margin: 6px auto;
    }
    .game-settings-active {
        transform: translateX(190px);
    }
}

@media screen and (max-width: 420px) {
    .game-settings-active {
    transform: translateX(150px); 
    } 
}

</style>