<template>
  <section id="article">
    <article class="pb-5 pt-10">
      <v-container class="content">

        <v-sheet class="pa-5 pa-md-10 rounded-xl" elevation="6">

          <h3 class="text-md-h2 text-h4 font-weight-black mb-5">Servicios</h3>

          <p class="text-md-h4 text-h5">
            Una ventaja competitiva que ofrecemos
          </p>
          <p class="title">
            Integración de todos los servicios técnicos especializados que requieren nuestros productos y soluciones
            para
            garantizar el correcto funcionamiento de los mismos.
          </p>


          <v-list dense>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-icon>
                <v-icon>$vuetify.icons.{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>{{ item.content }}</v-list-item-content>
            </v-list-item>
          </v-list>


        </v-sheet>
      </v-container>
    </article>

    <article class="py-15 mb-5" style="background-color: #f8f9fa">
      <v-container id="grid">

        <v-sheet class="rounded-xl my-7" elevation="3">
          <div class="pa-2 pa-md-5">
            <p class="title">Consultoría de negocios</p>
            <p class="body-1">
              Por medio de la Alianza Estratégica con empresas de consultoría Nacionales e Internacionales, SCEPSA puede
              ofrecer Consultoría en temas de negocios como:
            </p>
          </div>

          <v-list dense>
            <v-list-item v-for="(item, index) in themes" :key="index">
              <v-list-item-icon>
                <v-icon>$vuetify.icons.mdiBookCheck</v-icon>
              </v-list-item-icon>
              <v-list-item-content>{{ item }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>

        <v-sheet class="rounded-xl" elevation="12">

          <v-banner>
            <span class="text-h6">Los servicios que brindamos</span>
          </v-banner>

          <v-img
            :src="require('@/static/stock3.jpg')"
            height="250px"
            gradient="to bottom, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0)"
          >
          </v-img>

          <v-expansion-panels accordion focusable class="rounded-b-xl">
            <v-expansion-panel v-for="(item, index) in services" :key="index">
              <v-expansion-panel-header disable-icon-rotate>
                {{ item.header }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                {{ item.content }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>



        </v-sheet>

        <v-sheet class="rounded-xl my-7" elevation="3">
          <div class="pa-2 pa-md-5">
            <p class="title">
              Cumplimiento de normas Internacionales
            </p>
          </div>
          <v-list>
            <v-list-item v-for="(item, index) in norms" :key="index">
              <v-list-item-icon>
                <v-icon>$vuetify.icons.mdiShieldCheck</v-icon>
              </v-list-item-icon>
              <v-list-item-content class="font-weight-bold">{{ item }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>

      </v-container>
    </article>
  </section>
</template>

<script>
export default {
  name: "servicios",
  data: () => ({
    items: [
      {
        icon: 'mdiArrowExpandLeft',
        content: 'ANTES en Preventa o Proceso de Selección, con modelados funcionales y estudios de adherencia a requerimientos'
      },
      {icon: 'mdiSync', content: 'DURANTE la Implantación, con consultoría, asesoría y capacitación'},
      {
        icon: 'mdiArrowExpandRight',
        content: 'DESPUÉS en Soporte Técnico con el servicio necesario para que las aplicaciones se mantengan en funcionamiento y además permitan crecer y aprovechar nuevas oportunidades'
      }
    ],
    services: [
      {
        header: 'Capacitación',
        content: 'Básica y avanzada. Para los Sistemas SOFTEXPERT®, FutureSQC® y SCEPSA T&T'
      },
      {
        header: 'Consultoría',
        content: 'Para la Implantación desde 1 día hasta un proyecto llave en mano.'
      },
      {
        header: 'Capacitación Teórico-Práctica',
        content: 'Control Estadístico de Procesos Metrología, Sistemas de Calidad, ISO-9000, BSC, Mapeo de Procesos entre otros'
      },
      {
        header: 'Desarrollos a la medida',
        content: 'Calidad, Procesos, ISO9000, Ingeniería y Estadística.'
      },
      {
        header: 'Asesoría',
        content: 'Soporte y Seguimiento en la implantación de todos los sistemas.'
      },
      {
        header: 'Integración Informática',
        content: 'Para Equipo de Medición, Procesos y Laboratorio.'
      },
      {
        header: 'Proyectos llave-en-mano',
        content: 'Integración de Computación Industrial.'
      },
      // 'Instalación de Redes Locales especializadas para plantas y áreas críticas.'
    ],
    themes: [
      'Balanced Scorecard',
      'Planeación Estratégica',
      'BPM (Business Process Management)',
      'GRC (Governance, Risk and Management)',
      'ECM (Enterprise Content Management)',
      'Calidad Automotriz (APQP, PPAP, SPC, FMEA, MSA...)'
    ],
    norms: [
      'ISO9000, ISO14000',
      'ISO/TS16949, ISO/OHSAS18000',
      'COBIT, COSO, ITSM',
      'ISO27000, ISO17025'
    ]
  })
}
</script>

<style lang="scss">

#grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

</style>
