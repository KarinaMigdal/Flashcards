<template>
    <header>
        <div class="head">
            <h1 class="logo">FLASHCARDS</h1>
            <img src="../assets/lightbulb.svg" alt="lightbulb logo"  class="icon-main"> 
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',

}
</script>

<style scoped>
.head {
    display: flex;
    justify-content: space-between;
    height: 50px;
    margin-bottom: 10px;  
    position: relative;   
}

h1 {
    margin: 0;
    font-size: 42px;
    width: auto;
}

.logo {
    text-align: left; 

}

.icon-main {
    height: 50px;
}

@media screen and (max-width: 1000px) {
    .logo {
        margin-left: 40px;  
    }
}


@media screen and (max-width: 550px) {
    .head {
        height: auto;
        margin-bottom: 10px; 
    }

    .logo {
        font-size: 32px;
        margin-bottom: 0;
    }

    .icon-main {
        height: 40px;
    }
}
</style>