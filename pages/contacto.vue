<template>
  <section id="article">
    <article class="pb-5 pt-10">
      <v-container class="content">

        <h1 class="text-md-h4 text-h5 font-weight-bold white--text mb-5">
          ¡No dude en ponerse en contacto con nosotros!
        </h1>

        <v-sheet class="pa-5 pa-md-10 rounded-xl" elevation="6">
          <p class="title">
            La forma más sencilla de ponerse en contacto con nosotros es utilizando este formulario.
          </p>
          <v-form>
            <div id="inline-form">
            <v-text-field v-model="fullname" label="Nombre completo" counter="25" :rules="nameRules"></v-text-field>
            <v-text-field v-model="phone" label="Teléfono" :rules="phoneRules"></v-text-field>
            </div>
            <v-text-field v-model="email" label="Email" type="email" :rules="emailRules"></v-text-field>
            <v-text-field v-model="subject" label="Objeto" counter="32" :rules="subjectRules"></v-text-field>
            <v-textarea v-model="body" rows="4" label="Mensaje" :rules="bodyRules" counter="250"></v-textarea>
            <v-btn outlined color="primary" @click="handleForm">Send</v-btn>
          </v-form>
        </v-sheet>
      </v-container>
    </article>
  </section>
</template>

<script>
export default {
  name: "contacto",
  data: () => ({
    valid: true,
    fullname: '',
    phone: '',
    email: '',
    subject: '',
    body: '',
    msg: '',
    snackbar: false,
    nameRules: [
      v => (v && v.length <= 25) || 'Name must be less than 25 characters',
    ],
    phoneRules: [
      v => (v.length <= 10) || 'Phone number must be less than 15 characters',
    ],
    subjectRules: [
      v => !!v || 'Subject is required',
      v => (v && v.length <= 25) || 'Subject must be less than 25 characters',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    bodyRules: [
      v => (v.length <= 250) || 'Message must be less than 250 characters',
    ],
  }),
  methods: {
    handleResponse: function (res) {
      this.msg = res
      this.snackbar = true
    },
    handleForm: async function (data) {
      const BASE_URL = 'http://127.0.0.1:4000'
      const requestOptions = {
        method: 'POST',
        body: JSON.stringify(data)
      }
      try {
        const response = await fetch(BASE_URL, requestOptions)
        const msg = await response.json()
        this.handleResponse(msg)
      } catch (e) {
        this.handleResponse(e)
      }
    }
  }
}
</script>

<style lang="scss">
#inline-form {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
}
</style>
