<template>
    <form>
        <Form name="login_form" class="form" @submit="login" :validation-schema="schema" v-slot="{ errors }">
            <img src="../assets/user1.svg" alt="user image"  class="icon-user icon">
            <Field 
            v-model="email"
            name="email"
            type="email" 
            class="input-text" 
            :class="{'invalid-input': errors.user_email}"
            placeholder="User email" 
            autocomplete="email" 
            maxlength="40"/>
            
            <div class="form-error">
                {{errors.user_email}}
            </div>
            <div class="input">
                <img src="../assets/key.svg" alt="key" class="icon-user icon">
                <img 
                v-if="!isVisible"
                src='../assets/visibility.svg'
                v-bind="isVisible"
                alt="key" 
                class=" icon-password icon"
                @click="switchVisibility">
                <img 
                v-if="isVisible"
                src='../assets/invisible.svg'
                v-bind="isVisible"
                alt="key" 
                class=" icon-password icon"
                @click="switchVisibility">

                <Field
                v-model="password"
                name="password"
                :type="passwordFieldType" 
                class="input-text" 
                :class="{'invalid-input': errors.user_password}"
                placeholder="Password" 
                autocomplete="current-password" 
                maxlength="40"/>

            </div>
            <div class="form-error">
                {{errors.user_password}}
            </div>

            <div class="checkbox">
                <input
                v-model="stayLogged"
                @click="toogle"
                type="checkbox" 
                class="input-check checkbox-required" >
                
                <label for="keep_signed">Keep me signed in</label>
            </div>
            <div class="form-error" v-show="error.isVisible">
                {{error.message}}
            </div>
            <button 
            type="submit" 
            class="btn buttonSubmit">Sign in</button>
            <h5 class="footer_text" id="text_to_sign_up" >
            <router-link class="accountText" to="/register">Sign up</router-link></h5>
        </Form>
    </form>
</template>

<script>
import { Form, Field } from 'vee-validate';
// Yup is a JavaScript schema builder for value parsing and validation. Define a schema, transform a value to match,
import * as Yup from 'yup';
import { mapMutations, mapState, mapActions } from 'vuex'

export default {
    name: 'LoginForm',
    components: {
        Form,
        Field,
    },
    
    data() {
        return {
            email: '',
            password: '',
            stayLogged: false,
        }
    },
    computed: {
    ...mapState(['passwordFieldType', 'isVisible', 'error']),
    },
    created() {
        this.clearMessage()
    },
   
    methods: {
        ...mapMutations(['switchVisibility', 'clearMessage',]), 
        ...mapActions(['login']), 
        
        toogle: function() {
             this.keep_logged= !this.keep_logged
        },
        login() {
            let data = {
                email: this.email,
                password: this.password,
                stayLogged: this.stayLogged,
            };
            this.$store.dispatch('login', data)
        },
    },  


    setup() {
        const schema = Yup.object().shape({
            user_email: Yup.string()
                .required('Email is required'),
            user_password: Yup.string()
                .required('Password is required'),
        });

        return {
            schema,
        };
    },
}

</script>

<style>
.input {
    position: relative;
}
.img_user {
    height: 70px;
}
.icon {
    margin-top: 12px;
    display: block;
    position: absolute;
    opacity: 0.7;
    height: 16px;
    width: 16px;
}

.icon-password {
    right: 5px;
    height: 19px;
    width: 19px;
    cursor: pointer;
    z-index: 10;

}

.input-text {
    display: block;
    position: relative;
    font-family: 'Quicksand', sans-serif;
    border: none;
    border-bottom: 1px solid rgb(134, 134, 134);
    background-color: rgb(245, 245, 245, 0);
    width:  100%;
    margin: 10px 0px;
    padding: 12px 20px;
    text-indent: 14px;
    font-size: 15px;
    transition: border-bottom 0.4s ease-in;
}

a {
    text-decoration: none;
}

.input-text:hover {
    border: none;
    border-bottom: 1px solid rgb(70, 70, 70);
    
}

.input-text:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid black;
}

.honey-row {
    display:none;
}

.checkbox {
    margin: 20px 45px;
}

.checkbox label {
    margin-left: 5px; 
}


.buttonSubmit {
    margin: 25px auto;
    padding: 15px 0px;
}

.buttonOnFocus {
    background-color: rgb(221, 96, 96);
}

/* Bottom text: */
.footer_text{
    color: rgb(87, 87, 87);
    cursor: default;
}

#text_to_sign_in::before {
    content: "Already have an account? ";
}

#text_to_sign_up::before {
    content: "Don't have an account? ";
}

.accountText, .accountText:visited {
    color: black;
    transition: color 0.3s ease-in-out;
    text-decoration: none!important;
}

.accountText:hover, .accountText:visited:hover{
    color:  rgb(236, 108, 108);
    cursor: pointer;
}

.form-error {
    list-style-type: none;
    padding-inline-start: 0;
    margin-top: 0;
    color:  rgb(248, 10, 10);
}

.form-message {
    list-style-type: none;
    padding-inline-start: 0;
    margin-top: 0;
}

/* For mobile: */
@media screen  and (max-width: 600px) {
  
    .input-text {
        margin: 10px auto;
        width: 100%;
        min-width: 240px;
    }
}
</style>