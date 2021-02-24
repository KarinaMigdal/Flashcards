<template>
    <form>
        <Form name="login_form" class="form" @submit="register" :validation-schema="schema" v-slot="{ errors }">

            <img src="../assets/email.svg" alt="email icon" class="icon-mail-alt icon">
            <Field 
            name="email"
            type="email" 
            id="email"
            v-model="email" 
            class="input-text" 
            :class="{'ivalid-input': errors.email}"
            placeholder="Email" 
            autocomplete="email" />

            <div class="form-error">
                {{errors.email}}
            </div>
            <div class="input"> 
                <img 
                src="../assets/key.svg" 
                alt="key icon" 
                class="icon-key icon">

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
                name="newPassword"
                :type="passwordFieldType"  
                id="newPassword" 
                v-model="newPassword" 
                class="input-text"  
                :class="{'ivalid-input': errors.newPassword}"
                placeholder="Password" 
                autocomplete="new_password"/>
            </div>
            <div class="form-error">
                {{errors.newPassword}}
            </div>
            <div class="input">
                <img src="../assets/key.svg" alt="key icon" class="icon-key icon">

                <img 
                v-if="isVisible"
                src='../assets/invisible.svg'
                v-bind="isVisible"
                alt="key" 
                class=" icon-password icon"
                @click="switchVisibility">
                <img 
                v-if="!isVisible"
                src='../assets/visibility.svg'
               
                v-bind="isVisible"
                alt="key" 
                class=" icon-password icon"
                @click="switchVisibility">

                <Field
                name="confirmPassword"
                :type="passwordFieldType" 
                id="new_password_conf" 
                v-model="confirmPassword" 
                class="input-text" 
                :class="{'ivalid-input': errors.confirmPassword}"
                placeholder="Repeat the password" 
                autocomplete="new-password" />
            </div>
            <div class="form-error">
                {{errors.confirmPassword}}
            </div>
            <!-- Anti-spam: honeypot method -->
            <span class="honey-row">
                <label for="honey">If you are human, don't fill that</label>
                <Field 
                type="text" 
                name="honey" 
                id="honey" 
                v-model="honey" />
            </span>

            <div class="checkbox">
                <Field 
                name="acceptTerms"
                type="checkbox" 
                :value="true"
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
            class=" btn buttonSubmit">
            Sign up
            </button>
            <h5 class="footer_text" id="text_to_sign_in" ><router-link class="accountText" to="/login">Sign in</router-link></h5>
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
            honey: '',
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

<style>
</style>