<template>
    <div id="index-login">
        <vue-headful title="Login to Absensi Admin Panel" description="Panel for login administrator" />
        <h1>Login to Absensi Administrator!</h1>
        <form @submit.prevent="handleLoginUser">
            <table class="center">
                <tr>
                    <td>Username</td>
                    <td>
                        <b-form-input @focus="clearAllStatus" @keypress="clearAllStatus" v-model="login.nik" type="text"
                            :class="{'has-error':error && invalidUsername}" />
                    </td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>
                        <b-form-input @focus="clearAllStatus" @keypress="clearAllStatus" v-model="login.password"
                            type="password" :class="{'has-error:':error && invalidPassword}" />
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <p v-if="error && submitting" class="error-message">
                            ❗Please fill out all required fields
                        </p>
                        <p v-if="errorLogin" class="error-message">
                            Username / Password Wrong!
                        </p>
                    </td>

                </tr>
                <tr>
                    <td colspan="2">
                        <b-button variant="success" type="submit">Login</b-button>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div v-if="success && submitting" class="requesting-message">
                            <b-spinner type="border" small></b-spinner> Request
                        </div>
                    </td>

                </tr>
                <tr>
                    <td colspan="2">Copyright(c) 2020 Davin Alfarizky Putra Basudewa</td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>
    import httpmake from '../../library/network/network'
    import qs from 'querystring'
    export default {
        name: 'index-form',
        data() {
            return {
                loginurl: process.env.VUE_APP_APIURL + "/login/administrator",
                submitting: true,
                error: false,
                errorLogin: false,
                success: false,
                errors: [],
                login: {
                    nik: '',
                    password: '',
                },
            }
        },
        methods: {
            async handleLoginUser() {
                this.submitting = true
                this.clearAllStatus()
                if (this.invalidUsername || this.invalidPassword) {
                    this.error = true
                    return
                }
                this.error = false
                this.success = true
                console.log(this.loginurl)

                var data = httpmake.makePOSTrequest(this.loginurl, qs.stringify(this.login))
                data.then((data) => {
                    this.clearAllStatus()
                    console.log(data)
                    if (data.Error === true) {
                        this.errorLogin = true
                        return
                    }
                    this.$cookies.set('token', data.Admin, Infinity)
                    this.$router.push({
                        name: 'Home',
                        query: {
                            redirect: '/'
                        }
                    })
                }).catch((error) => {
                    console.log(error)
                })

            },
            clearAllStatus() {
                this.errorLogin = false
                this.error = false
                this.success = false
            },
        },
        computed: {
            invalidUsername() {
                return this.login.nik === ''
            },
            invalidPassword() {
                return this.login.password === ''
            }
        },
        created() {
            if (this.$cookies.isKey('token')) {
                this.$router.push({
                    name: 'Home',
                    query: {
                        redirect: '/'
                    }
                })
            } else {
                this.$router.push({
                    name: 'Login',
                    query: {
                        redirect: '/login'
                    }
                })
            }
        }
    }
</script>

<style scoped>
    @media only screen and (min-width: 768px) {
        form {
            margin-left: auto;
            margin-right: auto;
            width: 30%;
            height: 200px;
        }


        table {
            padding: 20rem;
            width: 100%;
            height: 50px;
        }
    }


    tr,
    td {
        padding: 0.5rem;
    }


    h1 {
        margin-top: 10rem;
    }

    [class*='-message'] {
        font-weight: 500;
    }

    .error-message {
        color: #d33c40;
    }

    .requesting-message {
        background-color: #3252a9;
        color: rgb(255, 255, 255);
    }
</style>