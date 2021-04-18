<template>
  <section id="article">

    <article class="pb-5 pt-10">
      <v-container class="content white--text">
        <h1 class="text-md-h2 text-h3 font-weight-black mb-5">
          SCEPSA
        </h1>
        <p class="text-md-h4 text-h5">
          Tecnología en Soluciones Integrales para Mejora de Procesos y Gestión de Resultados.
        </p>
      </v-container>
      <v-container class="content">
        <v-sheet class="pa-5 pa-md-10 rounded-xl elevation-6">
          <h2 class="text-md-h3 text-h4 font-weight-black mb-5">
            Soluciones de Software Garantizadas y con Alta Rentabilidad
          </h2>
          <p class="text-md-h4 text-h5">
            Implantaciones exitosas por medio de metodologías probadas en cientos de
            empresas y a un precio razonable.
          </p>

          <p class="text-md-h4 text-h5">
            Explora lo que tenemos para ofrecer, más de 25 años de experiencia nos respaldan.
          </p>

          <v-divider class="my-10"></v-divider>

          <div id="btn-grid">
            <v-btn depressed dark to="/soluciones" aria-label="ir a soluciones">soluciones</v-btn>
            <v-btn depressed dark to="/servicios" aria-label="ir a servicios">servicios</v-btn>
            <v-btn depressed dark to="/soporte" aria-label="ir a soporte">soporte</v-btn>
            <v-btn depressed dark to="/contacto" aria-label="ir a contacto">Contacto</v-btn>
          </div>
        </v-sheet>
      </v-container>

    </article>
    <article class="py-5" style="background-color: #f8f9fa">

      <v-container class="content">
        <v-sheet class="pa-5 pa-md-10 rounded-xl" elevation="6">
          <h3 class="text-md-h3 text-h4 font-weight-black mb-5">Soluciones</h3>
          <h4 class="text-md-h4 text-h5 font-weight-black mb-2 accent--text">FutureSQC</h4>
          <p class="body-1">
            CEP/SPC, Adquisición Automática de Datos, OEE, Base de Datos Integrada, Conexión con PLC's, equipo CMM y
            sistemas SCADA, Registros Históricos de Calidad, Alertas Automáticas, Certificados de Calidad, Bitácoras y
            Ayudas visuales de Operarios.
          </p>

          <h4 class="text-md-h4 text-h5 font-weight-black mb-2 accent--text">
            SoftExpert
          </h4>
          <p class="body-1">
            La más completa línea de Software para la Gestión de la Excelencia. Calidad, Ambiental, BPM, Proyectos,
            Riesgos y GRC, Capacitación y Competencias, Salud y Seguridad, Control Documental y mucho más.
          </p>

          <v-divider class="my-10"></v-divider>

          <h3 class="text-md-h3 text-h4 font-weight-black mb-5">Confían en nosotros</h3>
          <v-slide-group
            v-model="model"
            class="py-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item
              v-for="(item, index) in clients"
              :key="index"
              v-slot="{ active, toggle }"
            >
              <v-img width="200px" contain class="ma-5" height="150"
                     :src="require(`@/static/logos/clients/${item.picture}`)"></v-img>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>

      </v-container>
    </article>

  </section>
</template>

<script>

export default {
  components: {},
  data: () => ({
    model: null,
    clients: [
      {name: 'Bimbo', picture: 'bimbo.webp'},
      {name: 'Behr', picture: 'behr.webp'},
      {name: 'Caterpilalr', picture: 'caterpillar.webp'},
      {name: 'Cementos Moctezuma', picture: 'cementos_moctezuma.webp'},
      {name: 'mabe', picture: 'mabe.webp'},
      {name: 'Mercedes', picture: 'mercedes.webp'},
      {name: 'nidec', picture: 'nidec.webp'},
      {name: 'ragasa', picture: 'ragasa.webp'},
    ]
  }),
  async asyncData({$content}) {
    const doc = await $content('index').fetch()
    return {doc}
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
    height: $background-height;
    background: $background;
  }
}

#btn-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}

.content {
  max-width: 992px;
}
</style>
