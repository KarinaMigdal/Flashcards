<template>
    <main>
        <div class="main-content">
            <header><h1 class="header">About the app</h1></header>
            <article>
                <h2>What are flashcards?</h2>
                <h4>Flashcards are small note cards used for testing and improving memory through practiced information retrieval. Flashcards are typically two-sided, with the prompt on one side and the information about the prompt on the other. This may include names, vocabulary, concepts, or procedures. </h4>
                <h2>What are the benefits?</h2>
                <h4>
                Using flashcards can be a very effective self-testing approach. Even the act of making flashcards is a way to “work” the information, challenging you to think about which information to have on one side and the related description on the other. Traditional use of flashcards is for memorization only. It is important to use the flashcards multiple times. </h4>
                <h2>About the app</h2>
                <h4>The Flashcards application is a great alternative for people who want to have their flashcards always at hand. Are you waiting in line? Do you have a break between classes? Or maybe you just don't like to waste your time? 
                Sign up and start training your memory. 
                In Flashcards App you can make your own folders, give them a category name and complete with flashcards.
                Done?
                Enter Game Mode to start learning. Remember - regularity matters. Use whenever you want - on your computer or on your cellphone.
                </h4>
            </article>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Appinfo',
}
</script>

<style scoped>
.main-content {
    height: 460px;
    width: 860px; 
    display: flex;
    flex-direction: column;
    overflow-y: auto;
}


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