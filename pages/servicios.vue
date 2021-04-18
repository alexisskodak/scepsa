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

          <v-divider class="my-5"></v-divider>
        </v-sheet>
      </v-container>
    </article>

    <article class="py-5 mb-5" style="background-color: #f8f9fa">
      <v-container class="content" id="grid">
        <v-sheet class="pa-5 pa-md-10 rounded-xl" elevation="6">
          <p class="title">Los servicios que brindamos</p>
          <v-list dense>
            <v-list-item v-for="(item, index) in services" :key="index">
              <v-list-item-icon>
                <v-icon>$vuetify.icons.mdiCheckCircle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>{{ item }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
        <v-sheet class="pa-5 pa-md-10 rounded-xl" elevation="6">
          <p class="title">Consultoría de negocios</p>
          <p class="body-1">
            Por medio de la Alianza Estratégica con empresas de consultoría Nacionales e Internacionales y aunado a
            la
            red de asociados y partners de negocios, SCEPSA puede ofrecer Consultoría en temas de negocios como:
          </p>

          <v-list dense>
            <v-list-item v-for="(item, index) in themes" :key="index">
              <v-list-item-icon>
                <v-icon>$vuetify.icons.mdiBookCheck</v-icon>
              </v-list-item-icon>
              <v-list-item-content>{{ item }}</v-list-item-content>
            </v-list-item>
          </v-list>

          <p class="title">
            Y por supuesto todos los temas relativos al Cumplimiento de Normas Internacionales
          </p>
          <v-list>
            <v-list-item v-for="(item, index) in norms" :key="index">
              <v-list-item-icon>
                <v-icon>$vuetify.icons.mdiShieldCheck</v-icon>
              </v-list-item-icon>
              <v-list-item-content>{{ item }}</v-list-item-content>
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
      'Capacitación básica y avanzada para los Sistemas SOFTEXPERT®, FutureSQC® y SCEPSA T&T',
      'Consultoría para la Implantación, desde 1 día hasta un proyecto llave en mano.',
      'Capacitación Teórico-Práctica y Consultoría en Control Estadístico de Procesos Metrología, Sistemas de Calidad, ISO-9000, BSC, Mapeo de Procesos entre otros',
      'Desarrollos a la medida de sus necesidades en temas como: Calidad, Procesos, ISO9000, Ingeniería y Estadística.',
      'Asesoría, Soporte y Seguimiento en la implantación de todos los sistemas.',
      'Integración Informática de su Equipo de Medición, Procesos y Laboratorio.',
      'Proyectos llave-en-mano de Integración de Computación Industrial.',
      'Instalación de Redes Locales especializadas para plantas y áreas críticas.'
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
  grid-template-columns: repeat(auto-fit, minmax(296px, 1fr));
  gap: 3rem;
}

.content {
  max-width: $content-max-width;
}
</style>
