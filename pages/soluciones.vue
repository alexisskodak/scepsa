<template>
  <section id="article">

    <article class="pb-5 pt-10">

      <v-container class="content">

        <h3 class="text-md-h2 text-h4 font-weight-black white--text mb-5">Soluciones</h3>

        <v-sheet class="rounded-xl" elevation="6">

          <div class="pa-5 px-md-10">
            <h4 class="text-md-h4 text-h5 font-weight-black mb-2 accent--text">FutureSQC</h4>
            <p class="text-h6">
              Sistema de Información de Manufactura - CEP/SPC
            </p>
            <v-list dense color="transparent">
              <v-list-item v-for="item in futuresqc" :key="item">
                <v-list-item-icon>
                  <v-icon>$vuetify.icons.mdiCheck</v-icon>
                </v-list-item-icon>
                <v-list-item-content class="body-1 font-weight-bold">{{ item }}</v-list-item-content>
              </v-list-item>
            </v-list>
          </div>

          <v-img
            :src="require('@/static/futuresqc.png')"
            class="rounded-b-xl"
            contain
          >
          </v-img>

        </v-sheet>
      </v-container>
    </article>

    <article class="pb-5 pt-10">
      <v-container class="content">
        <v-sheet class="rounded-xl" elevation="6">

          <div class="pt-10 px-10 pb-5">
            <h4 class="text-md-h4 text-h5 mb-2 font-weight-black accent--text">
              SoftExpert
            </h4>
            <p class="text-h6">
              Calidad, BPM, Riesgos, Proyectos, Ambiental, Salud y Seguridad
            </p>
          </div>

          <v-img
            :src="require('@/static/factory.png')"
            width="100%"
            class="align-end pa-5 pa-md-10 rounded-b-xl"
            gradient="to top, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0)"
          >
            <p class="text-h6 white--text">
              Capacitación y Competencias, Auditoría, Activos y Mantenimiento
            </p>
            <p class="text-h6 white--text">
              Normas y estándares internacionales como ISO9000, FDA,
              IATF16949,
              COBIT, COSO, GRC, MSA, APQP, FMEA, PMBoK, HACCP y muchos más, son atendidos de manera profesional.
            </p>
          </v-img>

        </v-sheet>
      </v-container>
    </article>

  </section>
</template>

<script>
export default {
  name: "soluciones",
  data: () => ({
    futuresqc: [
      'Registros de Calidad',
      'Adquisición Automática de Datos, OEE',
      'Trazabilidad',
      'Bitácoras de Operador',
      'Alertas Inmediatas',
      'Conexión con PLCs',
      'integración de equipos complejos de medición como CMM, Espectrofotómetros, Equipos de medición óptica, sistemas SCADA y más'
    ]
  })
}
</script>

<style lang="scss">

</style>
