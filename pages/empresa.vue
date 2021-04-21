<template>
  <section id="article">
    <article class="pb-5 pt-10">
      <v-container class="content">
        <v-sheet class="pa-5 pa-md-10 rounded-xl" elevation="6">
          <h1 class="text-md-h2 text-h3 font-weight-black mb-5">SCEPSA</h1>
          <h2 class="text-md-h4 text-h5">Empresa líder en México y Latinoamérica</h2>
          <p class="body-1">
            en la implantación de soluciones tecnológicas para la Mejora de los
            Procesos y la única en ofrecer un servicio integral.
          </p>

          <v-divider class="my-5"></v-divider>

          <h2 class="text-md-h4 text-h5">
            Más de 25 años de experiencia
          </h2>
          <p class="body-1">
            Análisis, diseño, implantación, capacitación
            y puesta en marcha de los Productos y Servicios que ofrecemos.
          </p>

          <v-divider class="my-5"></v-divider>

          <p class="body-1">
            En los últimos años gracias a la aceptación de nuestras soluciones, hemos tenido un crecimiento importante
            en la base instalada de clientes, en la presencia en diversas ciudades de México y en la cobertura de otros
            países de Latinoamérica, con la apertura de oficinas propias en Colombia y con el establecimiento de
            distribuidores en otros países.
          </p>

          <v-list dense>
            <v-list-item v-for="(item, index) in objectives" :key="index">
              <v-list-item-icon>
                <v-icon>mdi-check-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-content>{{ item }}</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>

      </v-container>
    </article>

    <article class="pb-5">
      <v-container class="content">
        <v-sheet class="pa-5 pa-md-10 rounded-xl" elevation="6">
          <div id="grid">
            <div v-for="(item, index) in missions" :key="index">
              <h3 class="text-md-h4 text-h5 font-weight-bold mb-5 accent--text">{{ item.name }}</h3>
              <p class="body-1">{{ item.description }}</p>
            </div>
          </div>
        </v-sheet>
      </v-container>
    </article>

    <article class="pb-5">
      <v-container class="content">
        <v-sheet class="pa-5 pa-md-10 rounded-xl" elevation="6">
          <h3 class="text-md-h4 text-h5 font-weight-bold mb-5 accent--text">Valores</h3>
          <v-list dense>
            <v-list-item v-for="(item, index) in values" :key="index">
              <v-list-item-content>
                <span class="font-weight-bold">{{ item.name }}</span>{{ item.description }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-container>
    </article>

    <article class="pb-5">
      <v-container class="content">
        <v-sheet class="pa-5 pa-md-10 rounded-xl" elevation="6">
          <h3 class="text-md-h4 text-h5 font-weight-bold mb-5 accent--text">Responsabilidad</h3>
          <v-list dense>
            <v-list-item v-for="(item, index) in responsibilities" :key="index">
              <v-list-item-content>
                {{item}}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-sheet>
      </v-container>
    </article>
  </section>
</template>

<script>
export default {
  name: "empresa",
  data: () => ({
    objectives: [
      'Disminuir Retrabajos y Reprocesos',
      'Eliminar Desperdicios',
      'Aumentar la Productividad',
      'Apoyar a los procesos de Mejora Continua de la Empresa',
      'Apoyar la certificación y acreditación bajo normas internacionales',
    ],
    missions: [
      {
        name: 'Visión',
        description: 'SCEPSA es una empresa rentable que cuenta con las certificaciones necesarias relacionadas con el desarrollo de Software, posee presencia en las zonas manufactureras más importantes y una red de distribuidores especializados en Metrología, Automatización y Sistemas, lo que aunado a personal capacitado y orgulloso de pertenecer a SCEPSA, le ha permitido consolidar FutureSQC como la marca más reconocida dentro de su categoría a nivel nacional'
      },
      {
        name: 'Misión',
        description: 'Contribuir a que la sociedad reciba bienes y servicios cada vez de mejor calidad, implementando Herramientas Tecnológicas para ayudar a las Empresas a la Mejora de los Procesos y al Aumento de la Productividad y Competitividad.'
      },
    ],
    values: [
      {
        name: 'Calidad',
        description: 'Exceder las expectativas de nuestros clientes internos y externos.'
      },
      {
        name: 'Integridad',
        description: 'Superar lo que se espera de nosotros.'
      },
      {
        name: 'Creatividad',
        description: 'Buscar permanentemente nuevas ideas para crear y mejorar nuestros productos y servicios.'
      },
      {
        name: 'Productividad',
        description: 'Tratar de hacer cada vez más y en el menor tiempo posible con los mismos recursos'
      },
      {
        name: 'Comunicación',
        description: 'Mantener siempre una actitud abierta hacia el intercambio de ideas, inquietudes y deseos.'
      },
      {
        name: 'Conocimiento',
        description: 'Lograr la autorrealización del personal por medio del aprendizaje en equipo.'
      },
    ],
    responsibilities: [
      'Ofrecer productos cada vez con mejor calidad.',
      'Contar con un soporte técnico de primera.',
      'Otorgar la más amplia garantía a todos nuestros productos y servicios.',
      'Escuchar y atender a nuestros clientes y siempre, pensar y tomar en cuenta las necesidades actuales y futuras de la industria.',
      'Aprovechar los avances tecnológicos en favor de los usuarios de nuestros sistemas, productos y servicios.',
      'Contar con una relación costo-beneficio adecuada para que la contratación de nuestra empresa resulte un buen negocio para todos nuestros clientes.',
      'Consolidar y reforzar la posición financiera y crediticia de la compañía para afrontar con éxito los retos a futuro.'
    ]
  })
}
</script>

<style scoped lang="scss">
#grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem
}
</style>
