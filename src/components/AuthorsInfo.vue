<template>
    <div class="main-content">
        <main>
            <header><h1 class="header">About the authors</h1></header>    
            <div class="major-box">
                <section>
                    <div class="author-box">
                        <div class="description-box">
                            <h2>FRONTEND</h2>
                            <h4>Karina Migdał - beginner frontend developer. I'm currently learning Vue.js</h4>
                            <a href="https://www.linkedin.com/in/karina-migda%C5%82-9219221ab/" target="_blank">
                                <img 
                                src="../assets/linkedin.svg" 
                                alt="Linkedin" 
                                class="icon-medium">
                            </a>
                        </div>
                        <div class="foto-box"><img class="foto" src="../assets/frameMe.png "></div>
                    </div>
                </section>
                <section>
                    <div class="author-box">
                        <div class="foto-box"><img class="foto" src="../assets/frameKamil.png "></div>
                        <div class="description-box">
                            <h2>BACKEND</h2>
                            <h4>Kamil Migdał - on a daily basis works as Security Architect Associate in Akamai Technologies.</h4>
                            <a href="https://www.linkedin.com/in/kamilmigdal999/?originalSubdomain=pl" target="_blank">
                            <img 
                            src="../assets/linkedin.svg" 
                            alt="Linkedin" 
                            class="icon-medium">
                            </a>
                        </div>
                    </div> 
                </section>   
            </div>
        </main>
        <footer>
            <div class="footer">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a>
            </div>
        </footer>  
    </div>
    
</template>

<script>
export default {
    name: 'AuthorsInfo'
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

.major-box {
    display: flex;
    justify-content: space-around;

}

.author-box {
    overflow-y: auto;
    display: flex;
}

.description-box {
    display: flex;
    flex-flow: column;
    justify-content: center;
    width: 220px;
    margin: 10px 0;
}

.foto {
    height: 270px;
}

.footer {
    margin-top: 20px;
    opacity: 0.7;
}

@media screen  and (max-width: 1000px) {
    .main-content {
        width: 100%;
        height: 85vh;
    }
    .major-box {
        flex-flow: column;
        align-items: center; 
    }
}  

@media screen  and (max-width: 550px) {
    .main-content {
        height: 90vh;
    }
    .author-box {
        flex-flow: column;
    }
}
</style>