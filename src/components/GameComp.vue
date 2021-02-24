<template>
    <main>
        <div class="main-content">
            <GameSettings/>
            <Score/>
            <section>
                <div class="cardContainer" :class="{ 'card-container-active': game.isStarted }">
                    <div class="flip-card" >
                        <div class="flip-card-inner">
                            <div class="flip-card-front">
                                <h1>{{ game.randomFlashcards[game.iterator].front_text }}</h1>  
                            </div>
                            <div class="flip-card-back">
                                <div class="flip-card-header">
                                    <h2 class="front-text">
                                        {{ game.randomFlashcards[game.iterator].front_text }}
                                    </h2> 
                                    <h3 class="folder-name">
                                        {{ game.randomFlashcards[game.iterator].folderName }}
                                    </h3>
                                </div>
                                <div class="back-text-box">
                                    <p class="back-text">{{ game.randomFlashcards[game.iterator].back_text }}</p>
                                </div>
                                    <p class="rate">Rate your answer:</p>
                                <button 
                                class="button-rate thumbs-up"
                                :disabled="game.isRateDisabled" 
                                @click="rate(1)">
                                    <img 
                                    src='../assets/fi-rr-thumbs-up.svg' 
                                    alt="thumbs-up" 
                                    class="icon-game"
                                    :class="{ 'rate-disabled' : thumbUpClicked, 'rate-active' : !thumbUpClicked }">
                                </button>
                                
                                <button 
                                class="button-rate thumbs-down"
                                :disabled="game.isRateDisabled" 
                                @click="rate(0)">
                                    <img 
                                    :class="{ 'rate-disabled' : thumbDownClicked, 'rate-active' : !thumbDownClicked }" 
                                    src='../assets/fi-rr-thumbs-down.svg' 
                                    alt="thumbs-down" 
                                    class=" icon-game">
                                </button>
                
                            </div>
                        </div>
                    </div>
                    <button class='btn buttonGame' @click='nextFlashcard'>NEXT</button>    
                </div> 
            </section>    
        </div>
    </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import GameSettings from '@/components/GameSettings.vue'
import Score from '@/components/Score.vue'

export default {
    name: 'GameComp',
    components: { GameSettings, Score },
    computed: {
        ...mapState([ 'game', 'isRateDisabled', 'thumbUpClicked', 'thumbDownClicked', ])
    },
    methods: {
        ...mapMutations([ 'nextFlashcard', 'rate', ]), 
    },
}
</script>

<style scoped>
.back-text-box {
    width: 100%;
    height: 240px;
    overflow-y: auto;
    overflow-x: hidden;
}

.back-text {
    margin: 0;
    width: 100%;
}

.rate {
    position: absolute;
    bottom: 0px;
    left: 10px;
    font-size: 20px;
    margin: 6px;
}

.thumbs-down {
    right: 10px;
    transition: transform ease-in-out 0.3s;
}

.thumbs-down:hover {
    transform: translateY(5px);
}

.thumbs-up {
    right: 80px;
    transition: transform ease-in-out 0.3s;
}

.thumbs-up:hover {
    transform: translateY(-5px);
}

.button-rate{
    appearance: none ;
    cursor: pointer;
    position: absolute;
    bottom: 0px;
    background-color: transparent;
    border: none;
}

.rate-active {
    opacity: 0.5; 
}

.rate-disabled {
    opacity: 1;
}

.icon-game {
    height: 40px;  
    transition: opacity ease-in-out 0.3s, ;
}

.icon-game:hover {
   opacity: 1;
}

.iconGmeDisable {
  opacity: 1;  
  cursor: default;
  
}

.iconGmeDisable:hover {
    transform: translateY(0px);
}

.flip-card-header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.front-text {
    max-width: 250px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 10px 0;
}

.folder-name {
    max-width: 150px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    margin: 10px 0;
}

.main-content {
    height: 480px;
    width: 860px; 
    display: flex;
    justify-content: center;
}

/* FLIP CARD */
.flip-card {
    background-color: transparent;
    /* The perspective CSS property determines the distance between the z=0 plane and the user in order to give a 3D-positioned element some perspective. */
    perspective: 1200px;
}

.cardContainer {
    transition: transform ease-in-out 1s;
    transform: translateX(-1200px);
}

.card-container-active {
    transform: translateX(-300px);
}

.flip-card-inner {
    width: 400px;
    height: 400px;
    background:rgb(253, 253, 253);
    border: solid black;
    border-color: black;  
    border-width: 3px 3px 5px 5px;
    border-radius:4% 95% 6% 95%/95% 4% 92% 5%; 
    position: relative;
    text-align: center;
    transition: transform 0.6s;
    /* Indicates that the children of the element should be positioned in the 3D-space */
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    top: 15px;
    left: 15px;  
    position: absolute;
    width: 90%;
    height: 90%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-front {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.flip-card-back {
    position: relative;
    transform: rotateY(180deg);
}

.buttonGame {
    margin: 25px 0 0 0;
    font-size: 20px;
    padding: 15px 0px;
}

@media screen and (max-width: 1000px) {
    .main-content {
        width: 100%;
        height: 100%;
    }
}

@media screen and (max-width: 600px) {
    .card-container-active {
        transform: translateX(-120px);
    }
}

@media screen and (max-width: 420px) {
    .flip-card-inner {
        width: 320px;
    }
    .thumbs-down {
        right: -10px;
    }

    .thumbs-up {
        right: 40px; 
    }
}

</style>