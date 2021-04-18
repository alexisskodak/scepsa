<template>
  <section id="article">

    <article class="pb-5 pt-10">

      <v-container class="content">
        <v-sheet class="pa-10 rounded-xl" elevation="6">

          <h3 class="text-md-h2 text-h4 font-weight-black mb-5">Soluciones</h3>

          <h4 class="text-md-h4 text-h5 font-weight-black mb-2 accent--text">FutureSQC</h4>
          <p class="body-1">
            Sistema de Información de Manufactura - CEP/SPC, Registros de Calidad, Adquisición Automática de Datos, OEE,
            Trazabilidad, Bitácoras de Operador, Alertas Inmediatas, Conexión con PLC's, integración de equipos
            complejos
            de medición como CMM, Espectrofotómetros, Equipos de medición óptica, sistemas SCADA y más...
          </p>

          <v-divider class="my-5"></v-divider>

          <h4 class="text-md-h4 text-h5 font-weight-black mb-2 accent--text">
            SoftExpert
          </h4>
          <p class="body-1">
            SoftExpert Excellence Suite es la solución más completa y modular para atender colaborativamente las
            solicitudes críticas para lograr la Excelencia Organizacional, la Mejora de los Procesos y el Cumplimiento
            de
            Normas y Estándares.
          </p>
          <p class="body-1">
            Temas como Calidad, BPM, Riesgos, Proyectos, Ambiental, Salud y Seguridad, Capacitación y Competencias,
            Auditoría, Activos y Mantenimiento, así como normas y estándares internacionales como ISO9000, FDA,
            IATF16949,
            COBIT, COSO, GRC, MSA, APQP, FMEA, PMBoK, HACCP y muchos más, son atendidos de manera profesional.
          </p>

        </v-sheet>
      </v-container>
    </article>

  </section>
</template>

<script>
export default {
  name: "soluciones"
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

.content {
  max-width: $content-max-width;
}
</style>
