export default {
  global: {
    componenteFormativo: 'Direccionamiento estratégico',
    // descripcionCurso:
    //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    // fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      // {
      //   nombreRuta: 'introduccion',
      //   icono: 'fas fa-info',
      //   titulo: 'Introducción',
      //   desarrolloContenidos: false,
      // },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Plataforma estratégica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Organización',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Direccionamiento estratégico',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Entorno organizacional',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Mezcla de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Producto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Precio',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Plaza y distribución',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Promoción y publicidad',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Gloria Matilde Lee Mejía',
        cargo: 'Responsable del equipo',
        centro: 'CENTRO DE COMERCIO Y SERVICIOS',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Rafael Nelftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'CENTRO INDUSTRIAL DEL DISEÑO Y LA MANUFACTURA',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Claudia Juliana León Pinto',
        cargo: 'Experta temática',
        centro: 'CENTRO DE SERVICIO EMPRESARIALES Y TURÍSTICOS',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Diseñador instruccional',
        centro: 'CENTRO DE GESTIÓN INDUSTRIAL',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Jesús Libardo Acero cruz',
        cargo: 'Evaluador instruccional',
        centro: 'CENTRO DE DISEÑO Y METROLOGÍA',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Julieth Paola Vital López',
        cargo: 'Corrección de estilo',
        centro: 'CENTRO PARA LA INDUSTRIA DE LA COMUNICACIÓN GRÁFICA',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Integración de recursos y pruebas',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: ['Daniel Ricardo Mutis Gómez'],
        cargo: 'Diseño web y Producción Audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: [
          'Brayan Stiven Pinto Diaz',
          'Edilson Laverde Molina',
          'Ricardo Alfonso Gonzalez Vargas',
        ],
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Armstrong, G. & Kotler, P. (2013). Fundamentos de Marketing. Ed. 11. México. Person Educación.',
    },
    {
      referencia:
        'Chiavenato, I. (2017). Planeación estratégica. Fundamentos y aplicaciones. 3 ed. México. McGraw Hill.',
    },
    {
      referencia:
        'Forero, S. (2017) Fundamentos de mercadeo. Bogotá. Ecoe Ediciones.',
    },
    {
      referencia:
        'Kotler, P. & Amstrong, G. (2017) Fundamentos de marketing. 13 Ed. México. Pearson Education.',
    },
    {
      referencia:
        'Kotler, P; Keller, K. (2016). Dirección de marketing. Ed. 15. México. Pearson.',
    },
    {
      referencia:
        'Prettel, G. (2016). Marketing, una herramienta para el crecimiento. Bogotá. Ediciones de la U',
    },
    {
      referencia:
        'Rodríguez, J. (2017) Cómo aplicarla planeación estratégica a la pequeña y mediana empresas. Ed. 6. México D.F. Cengage Learning',
    },
    {
      referencia:
        'Stanton, W & Etzel, M. & Walker, B. (2007) Fundamentos de marketing. 14 Ed. México. McGraw Hill',
    },
  ],
  glosario: [
    {
      termino:
        'Análisis DOFA (debilidades, amenazas, fortalezas, oportunidades)',
      significado:
        'su objetivo consiste en ayudar a una empresa a encontrar sus factores estratégicos críticos, para usarlos, una vez identificados, y apoyar en ellos los cambios organizacionales: consolidando las fortalezas, minimizando las debilidades, aprovechando las ventajas de las oportunidades y eliminando o reduciendo las amenazas.',
    },
    {
      termino: 'Análisis externo',
      significado:
        'la organización no existe ni puede existir fuera de un ambiente, fuera de ese en-torno que le rodea; así que el análisis externo permite fijar las oportunidades y amenazas que el contexto puede presentarle a una organización.',
    },
    {
      termino: 'Análisis interno',
      significado:
        'el análisis interno permite fijar las fortalezas y debilidades de la organización, realizando un estudio que permite conocer la cantidad y calidad de los recursos y procesos con que cuenta el ente.',
    },
    {
      termino: 'Empresa',
      significado:
        'actividad económica organizada para la producción, transformación, comercialización, administración o custodia de bienes o para la prestación de servicios. Tiene como propósito crear un cliente, en ese sentido la empresa comercial tiene dos funciones cruciales: la comercialización y la innovación.',
    },
    {
      termino: 'Estrategia de mercadeo',
      significado:
        'plan general para usar los elementos de la mezcla de mercadeo con el fin de desarrollar el programa correspondiente.',
    },
    {
      termino: 'Estructura organizacional',
      significado:
        'es la forma en que se dividen, agrupan y coordinan las actividades de la organización en cuanto a las relaciones entre los gerentes y los empleados, entre gerentes y gerentes y entre empleados y empleados.',
    },
    {
      termino: 'Mezcla de mercadotecnia',
      significado:
        'forma parte de un nivel táctico de la mercadotecnia, en el cual, las estrategias se transforman en programas concretos para que una empresa pueda llegar al mercado con un producto satisfactor de necesidades y/o deseos, a un precio conveniente, con un mensaje apropiado y un sistema de distribución que coloque el producto en el lugar correcto y en el momento más oportuno.',
    },
    {
      termino: 'Norma ISO',
      significado:
        'son generadas por la INTERNATIONAL ORGANIZATION FOR STANDARIZATION, cuya sigla es ISO, esta organización está formada por los organismos de normalización de casi todos los países del mundo.',
    },
    {
      termino: 'Norma ISO 9000',
      significado:
        'describe los fundamentos de los sistemas de gestión de la calidad y especifica la terminología para los sistemas de gestión de la calidad',
    },
    {
      termino: 'Planeación estratégica',
      significado:
        'se realiza a nivel de la organización, es decir, considera un enfoque global de la empresa, por lo que se basa en objetivos y estrategias generales, así como en planes estratégicos, que afectan una gran variedad de actividades.',
    },
  ],
  complementario: [
    {
      texto: 'Academia Play',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IZd1CCER98s',
    },
    {
      texto:
        'Chiavenato, 2017, Planeación estratégica. Fundamentos y aplicaciones.',
      tipo: 'Libro',
      descarga: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5345&pg=1',
    },
    {
      texto: 'Forero, S. 2017 Fundamentos de mercadeo',
      tipo: 'Libro',
      descarga: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5045&pg=5',
    },
    {
      texto: 'Kotler,2016, Dirección de marketing',
      tipo: 'Libro',
      descarga: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4273&pg=1',
    },
    {
      texto: 'Kotler & Amstrong, 2017 Fundamentos de marketing',
      tipo: 'Libro',
      descarga: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4393&pg=1',
    },
    {
      texto: 'Prettel,2016, Marketing, una herramienta para el crecimiento.',
      tipo: 'Libro',
      descarga: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=5684&pg=1',
    },
    {
      texto:
        'Rodriguez,2017, Cómo aplicarla planeación estratégica a la pequeña y mediana empresas.',
      tipo: 'Libro',
      descarga: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=3233&pg=1',
    },
  ],
}
