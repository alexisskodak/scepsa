<template>
  <v-app dark>
    <v-app-bar fixed app clipped-left dark hide-on-scroll dense>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-img :src="require('@/static/logo_processed180.png')" max-width="50" max-height="50"></v-img>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary app dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Scepsa
          </v-list-item-title>
          <v-list-item-subtitle>
            Navegación
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list>
        <v-list-item text v-for="(item, index) in items" :to="item.path" :key="index">
          <v-list-item-content>
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="px-0 py-0" fluid>
        <nuxt/>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      drawer: false,
      items: [
        {
          title: 'Inicio',
          path: '/'
        },
        {
          title: 'Soluciones',
          path: '/soluciones'
        },
        {
          title: 'Servicios',
          path: '/servicios'
        },
        {
          title: 'Soporte',
          path: '/soporte'
        },
        {
          title: 'Empresa',
          path: '/empresa'
        },
        {
          title: 'Contacto',
          path: '/contacto'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style lang="scss">
@media screen and (max-width: $background-min-width) {
  #article {
    height: $background-height;
    background: $background;
  }
}

@media screen and (min-width: $background-min-width) {
  #article {
    border-bottom-right-radius: 300%;
    height: 400px;
    background: $background;
  }
}

.content {
  max-width: $content-max-width;
}

article:nth-child(even) {
  background-color: #f8f9fa;
}
</style>
