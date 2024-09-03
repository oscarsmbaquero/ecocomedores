export const cocina = [
    {
      name: 'campo1_b1',
      label: '14. ENERGÍA UTILIZADA EN COCINADO Y CONSERVACIÓN ',
      labelsecond: '¿Qué energía se utiliza para cocinar y conservar los alimentos?',
      options: [
        {
          label: '100% energía eléctrica mixta y/o gas',
          value: 'nivel1',
          score: 3,
        },
        {
          label:
            '75% electricidad de origen mixto y el 25% restante electricidad verde (origen renovable)',
          value: 'nivel2',
          score: 6,
        },
        {
            label:
              '50% de electricidad mixta y el 50% restante electricidad verde',
            value: 'nivel3',
            score: 9,
          },
        {
          label:
            '25% de electricidad mixta y el 75% restante electricidad verde',
          value: 'nivel4',
          score: 11,
        },
        {
          label:
            '100% energía eléctrica renovable/ verde',
          value: 'nivel5',
          score: 14,
        },
        
      ],
    },
    {
      name: 'campo2_b1',
      label: '15. CERTIFICADO AMBIENTAL DE LA DOTACIÓN ',
      labelsecond:
        '¿Tienen los equipos de la cocina certificado ambiental de dotación?',
      options: [
        {
          label:
            'Ningún equipo certificado',
          value: 'nivel1',
          score: 3,
        },
        {
          label:
            'El 25% del equipamiento está certificado',
          value: 'nivel2',
          score: 6,
        },
        {
          label:
            'El 50% del equipamiento está certificado',
          value: 'nivel3',
          score: 9,
        },
        {
          label:
            'El 75% del equipamiento está certificado',
          value: 'nivel4',
          score: 12,
        },
        {
          label:
            'Todos los equipos certificados',
          value: 'nivel5',
          score: 15,
        },
      ],
    },
    {
      name: 'campo3_b1',
      label: '16. CONTROL DE DESPERDICIO ALIMENTARIOEN COCINA ',
      labelsecond: '¿Hay medidas de control del desperdicio alimentario en cocina?',
      options: [
        {
          label:
            'Ninguna medida de control del desperdicio en cocina y existe desperdicio alimentario semanal por sobreproducción de menús y/o deficiente control de caducidades',
          value: 'nivel1',
          score: 4,
        },
        {
          label:
            'Existe alguna medida de control y se produce desperdicio alimentario mensual por sobreproducción de menús y/o deficiente control de caducidades ',
          value: 'nivel2',
          score: 8,
        },
        {
          label:
            'Existen varias medidas de control y se produce desperdicio alimentario puntual en el curso escolar por sobreproducción de menús y/o deficiente control de caducidades ',
          value: 'nivel3',
          score: 12,
        },
        {
          label:
            'Existen medidas diarias de control en: planificación de compras, gestión de caducidades, previsión de bajas; y el personal de cocina está formado en estas materias',
          value: 'nivel4',
          score: 16,
        },
        {
          label:
            'Se toman todas las medidas anteriores de minimización del desperdicio y además se realizan auditorías trimestrales de medición del volúmen',
          value: 'nivel5',
          score: 20,
        },
      ],
    },
    {
      name: 'campo4_b1',
      label: '17. MATERIAL AUXILIAR UTILIZADO EN COCINA ',
      labelsecond:
        '¿El transporte de alimentos se realiza en vehículos dependientes de combustibles fósiles?',
      options: [
        {
          label:
            '100% de materiales auxiliares de un solo uso',
          value: 'nivel1',
          score: 4,
        },
        {
          label:
            '75% de materiales auxiliares de un solo uso',
          value: 'nivel2',
          score: 8,
        },
        {
          label:
            '50% de materiales auxiliares de un solo uso',
          value: 'nivel3',
          score: 12,
        },
        {
          label:
            '25% de materiales auxiliares de un solo uso',
          value: 'nivel4',
          score: 16,
        },
        {
          label:
            '100% materiales auxiliares lavables reutilizables',
          value: 'nivel5',
          score: 20,
        },
      ],
    },
    {
      name: 'campo5_b1',
      label: '18. MATERIALES DE ENVASADO DE MENUS',
      labelsecond:
        '¿Cómo van envasados los menús?',
      options: [
        {
          label:
            'Distancia de catering a comedor superior a 100 km',
          value: 'nivel1',
          score: 4,
        },
        {
          label:
            'Distancia de catering a comedor superior a 70 km',
          value: 'nivel2',
          score: 8,
        },
        {
          label:
            'Distancia de catering a comedor superior a 50 km',
          value: 'nivel3',
          score: 12,
        },
        {
          label:
            'Distancia de catering a comedor superior a 30 km',
          value: 'nivel4',
          score: 16,
        },
        {
          label:
            'Distancia de catering a comedor superior a 15 km',
          value: 'nivel5',
          score: 20,
        },
      ],
    },
    {
        name: 'campo5_b1',
        label: '19. TIPO DE PRODUCTOS DE LIMPIEZA UTILIZADOS EN COCINA ',
        labelsecond:
          '¿Qué tipo de productos de limpieza se utilizan en cocina?',
        options: [
          {
            label:
              'Distancia de catering a comedor superior a 100 km',
            value: 'nivel1',
            score: 4,
          },
          {
            label:
              'Distancia de catering a comedor superior a 70 km',
            value: 'nivel2',
            score: 8,
          },
          {
            label:
              'Distancia de catering a comedor superior a 50 km',
            value: 'nivel3',
            score: 12,
          },
          {
            label:
              'Distancia de catering a comedor superior a 30 km',
            value: 'nivel4',
            score: 16,
          },
          {
            label:
              'Distancia de catering a comedor superior a 15 km',
            value: 'nivel5',
            score: 20,
          },
        ],
      },
      {
        name: 'campo5_b1',
        label: '20. SEPARACIÓN DE RESIDUOS',
        labelsecond:
          '¿Se separan los residuos en cocina?',
        options: [
          {
            label:
              'Distancia de catering a comedor superior a 100 km',
            value: 'nivel1',
            score: 4,
          },
          {
            label:
              'Distancia de catering a comedor superior a 70 km',
            value: 'nivel2',
            score: 8,
          },
          {
            label:
              'Distancia de catering a comedor superior a 50 km',
            value: 'nivel3',
            score: 12,
          },
          {
            label:
              'Distancia de catering a comedor superior a 30 km',
            value: 'nivel4',
            score: 16,
          },
          {
            label:
              'Distancia de catering a comedor superior a 15 km',
            value: 'nivel5',
            score: 20,
          },
        ],
      },
    // Agrega los otros campos de manera similar
  ];
  