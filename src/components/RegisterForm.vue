<template>
    <form>
        <Form 
        name="login_form" 
        class="form" 
        @submit="register" 
        :validation-schema="schema" 
        v-slot="{ errors }">
            <img src="../assets/email.svg" 
            alt="email icon" 
            class="icon-form">
            <Field 
            name="email"
            type="email" 
            v-model="email" 
            class="input-text" 
            :class="{'ivalid-input': errors.email}"
            placeholder="Email" 
            autocomplete="email"/>

            <div class="form-error">
                {{errors.email}}
            </div>
            <div class="input-box"> 
                <img 
                src="../assets/key.svg" 
                alt="key icon" 
                class="icon-form">

                <img 
                v-if="!isVisible"
                src='../assets/visibility.svg'
                v-bind="isVisible"
                alt="toogle password visibility" 
                class=" icon-password icon-form"
                @click="switchVisibility">
                <img 
                v-if="isVisible"
                src='../assets/invisible.svg'
                v-bind="isVisible"
                alt="toogle password visibility" 
                class="icon-password icon-form"
                @click="switchVisibility">


                <Field 
                name="newPassword"
                :type="passwordFieldType"  
                v-model="newPassword" 
                class="input-text"  
                :class="{'ivalid-input': errors.newPassword}"
                placeholder="Password" 
                autocomplete="new_password"/>
            </div>
            <div class="form-error">
                {{errors.newPassword}}
            </div>
            <div class="input-box">
                <img 
                src="../assets/key.svg" 
                alt="key icon" 
                class="icon-form">

                <img 
                v-if="isVisible"
                src='../assets/invisible.svg'
                v-bind="isVisible"
                alt="toogle password visibility" 
                class=" icon-password icon-form"
                @click="switchVisibility">
                <img 
                v-if="!isVisible"
                src='../assets/visibility.svg'
                v-bind="isVisible"
                alt="toogle password visibility" 
                class=" icon-password icon-form"
                @click="switchVisibility">

                <Field
                name="confirmPassword"
                :type="passwordFieldType" 
                v-model="confirmPassword" 
                class="input-text" 
                :class="{'ivalid-input': errors.confirmPassword}"
                placeholder="Repeat the password" 
                autocomplete="new-password" />
            </div>
            <div class="form-error">
                {{errors.confirmPassword}}
            </div>
            <div class="checkbox">
                <Field 
                name="acceptTerms"
                type="checkbox" 
                :value="false"
                id="privacy_statement" 
                class="input-check checkbox-required" 
                :class="{'ivalid-input': errors.acceptTerms}"
                />
                <label for="privacy_statement">
                    I accept the Privacy Statement* 
                </label>
            </div>

            <div class="form-error">
                {{errors.acceptTerms}}
            </div>
            <div class="form-error" v-show="error.isVisible" >
                {{error.message}}
            </div>
            <button 
            type="submit" 
            class=" btn button-submit">
            Sign up
            </button>
            <nav>
                <h5 class="footer-text text-to-loggin">
                    <router-link class="account-text" to="/login">Sign in</router-link>
                </h5>
            </nav>    
        </Form>
    </form>
</template>

<script>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import { mapState,  mapMutations, mapActions  } from 'vuex'

export default {
    name: 'RegisterForm',
    components: {
        Form,
        Field,
    },
    data() {
        return {
            email: '',
            userName: '',
            newPassword: '',
            confirmPassword: '',
        }
    },
    created() {
        this.clearMessage()
    },
    computed: {
    ...mapState([ 'passwordFieldType', 'isVisible', 'error' ]),
  },

    methods: {
        ...mapMutations([ 'switchVisibility', 'clearMessage' ]),
        ...mapActions([ 'register', ]),
        register() {
            let data = {
                email: this.email,
                password: this.newPassword,
            };
            this.$store.dispatch('register', data)
        }
    },
     setup() {
        const schema = Yup.object().shape({
            email: Yup.string()
                .required('Email is required')
                .email('Email is invalid'),
            newPassword: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
                .required('Confirm Password is required'),
            acceptTerms: Yup.bool()
                .required('Accept Privacy Statement is required')
        });
        return {
            schema,
        };
    }

}
</script>

<style scoped>
.text-to-loggin::before {
    content: "Already have an account? ";
}
</style>