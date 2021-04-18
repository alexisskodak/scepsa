<template>
  <section id="article">
    <article class="pb-5 pt-10">
      <v-container class="content">

        <v-sheet class="pa-5 pa-md-10 rounded-xl" elevation="6">
          <h1 class="text-md-h2 text-h4 font-weight-black mb-5">Soporte Técnico</h1>
          <h2 class="text-md-h4 text-h5 font-weight-black mb-5">Accesos Directos</h2>
          <p class="body-1">
            Nuestros sistemas de Soporte Técnico, Uso Interno y Demostraciones están disponibles desde esta página.
          </p>

          <div id="grid">
            <v-card outlined v-for="(item, index) in items" :key="index">
              <v-img :src="require(`@/static/logos/${item.image}`)" max-height="100px" contain></v-img>
              <v-card-title>{{ item.name }}</v-card-title>
              <v-card-subtitle>{{item.description}}</v-card-subtitle>
              <v-card-actions>
                <v-btn depressed color="primary" :href="item.link">acceder</v-btn>
              </v-card-actions>
            </v-card>

          </div>

        </v-sheet>

      </v-container>
    </article>
  </section>

</template>

<script>
export default {
  name: "soporte",
  data: () => ({
    items: [
      {
        name: 'Belenus',
        description: 'Sistema de Soporte Técnico de SCEPSA',
        image: 'belenus.jpeg',
        link: 'http://www.scepsa.net/belenus/login.aspx'
      },
      {
        name: 'VTiger',
        description: 'VTiger - CRM Interno de SCEPSA',
        image: 'vtiger.jpg',
        link: 'http://www.scepsa.net:8888/'
      },
      {
        name: 'SoftExpert',
        description: 'SoftExpert Interno de SCEPSA',
        image: 'softexpert.jpg',
        link: 'https://scepsa.net/softexpert/login'
      },
      {
        name: 'SoftExpert Demo',
        description: 'SoftExpert versión 2.1 DEMO',
        image: 'softexpert_demo.jpg',
        link: 'https://demoes20.softexpert.com/softexpert/login'
      },
      {
        name: 'SCEPSA T&T',
        description: 'SCEPSA T&T versión Beta',
        image: 'scepsatt.jpg',
        link: 'http://scepsa.net/belenusbeta/'
      }
    ]
  })
}
</script>

<style scoped lang="scss">
@media screen and (max-width: $background-min-width) {
  #article {
    height: $background-height;
    background: $background;
  }
}

@media screen and (min-width: $background-min-width) {
  #article {
    border-bottom-right-radius: 300%;
    height: $background-height;
    background: $background;
  }
}

#grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

</style>
