export const comedor = [
    {
      name: 'comedor1',
      label: '21.VARIEDAD DE ALIMENTOS EN EL MENÚ ',
      labelsecond: '¿Cuántos ingredientes diferentes se utilizan en los menús?',
      options: [
        {
          label: 'Menos de 20 alimentos diferentes en el menú escolar a lo largo del curso',
          value: 'nivel1',
          score: 3,
        },
        {
          label:
            'Al menos 30 alimentos diferentes en el menú escolar del curso',
          value: 'nivel2',
          score: 6,
        },
        {
            label:
              'Al menos 40 alimentos diferentes en el menú escolar del curso',
            value: 'nivel3',
            score: 9,
          },
        {
          label:
            'Al menos 50 alimentos diferentes en el menú escolar del curso',
          value: 'nivel4',
          score: 11,
        },
        {
          label:
            'Al menos 60 alimentos diferentes en el menú de un curso escolar',
          value: 'nivel5',
          score: 14,
        },
        
      ],
    },
    {
      name: 'comedor2',
      label: '22. TEMPORALIDAD EN EL MENÚ',
      labelsecond:
        '¿Varía el menú en función de la época del año?',
      options: [
        {
          label:
            'No existe variación en el menú a lo largo del curso escolar',
          value: 'nivel1',
          score: 3,
        },
        {
          label:
            'La variación del menú a lo largo del curso es de un 25%',
          value: 'nivel2',
          score: 6,
        },
        {
          label:
            'La variación del menú a lo largo del curso es de un 50%',
          value: 'nivel3',
          score: 9,
        },
        {
          label:
            'La variación del menú a lo largo del curso es de un 75%',
          value: 'nivel4',
          score: 12,
        },
        {
          label:
            'Existen ruedas de menú de 5 semanas con dos temporadas (calor y frío)',
          value: 'nivel5',
          score: 15,
        },
      ],
    },
    {
      name: 'comedor3',
      label: '23. ADECUACIÓN A LA CULTURA GASTRONÓMICA REGIONAL ',
      labelsecond: '¿Se incorporan recetas propias de la dieta mediterránea y extremeña?',
      options: [
        {
          label:
            'No se pone ninguna atención a la adecuación cultural de los menús',
          value: 'nivel1',
          score: 3,
        },
        {
          label:
            'Al menos el 60% de los menús se alinean con la dieta mediterránea',
          value: 'nivel2',
          score: 6,
        },
        {
          label:
            'Al menos el 80% de los menús se alinean con la dieta mediterránea pero sin ninguna receta propiamente extremeña',
          value: 'nivel3',
          score: 9,
        },
        {
          label:
            'Al menos el 80% de los menús se alinean con la dieta mediterránea y al menos el 20% de ellos son recetas propiamente extremeñas ',
          value: 'nivel4',
          score: 11,
        },
        {
          label:
            'Se cumple el escenario anterior y, además, hay un plan educativo para la puesta en valor de la gastronomía regional como patrimonio cultural',
          value: 'nivel5',
          score: 14,
        },
      ],
    },
    {
      name: 'comedor4',
      label: '24. MEDIDAS DE AUMENTO DE VERDURAS Y HORTALIZAS ',
      labelsecond:
        '¿Qué contenido de verduras y hortalizas hay en el menú?',
      options: [
        {
          label:
            'Escasa presencia de verduras y hortalizas',
          value: 'nivel1',
          score: 3,
        },
        {
          label:
            'El menú diario por comensal tiene un contenido de al menos 100g en verduras y hortalizas',
          value: 'nivel2',
          score: 6,
        },
        {
          label:
            'El menú diario por comensal tiene un contenido de al menos 150g en verduras y hortalizas',
          value: 'nivel3',
          score: 9,
        },
        {
          label:
            'El menú diario por comensal tiene un contenido de al menos 200g en verduras y hortalizas',
          value: 'nivel4',
          score: 11,
        },
        {
          label:
            'El menú diario por comensal tiene un contenido de al menos 250g en verduras y hortalizas',
          value: 'nivel5',
          score: 14,
        },
      ],
    },
    {
      name: 'comedor5',
      label: '25. MEDIDAS DE REDUCCIÓN Y MEJORA DE LA CALIDAD DE LA PROTEÍNA ANIMAL ',
      labelsecond:
        '¿Cuánta carne y de qué tipo de manejo ganadero se consume?',
      options: [
        {
          label:
            'Ningún día sin consumo de proteína animal',
          value: 'nivel1',
          score: 3,
        },
        {
          label:
            'Al menos 1 día sin consumo de proteína animal',
          value: 'nivel2',
          score: 6,
        },
        {
          label:
            'Al menos 2 días sin consumo de proteína animal',
          value: 'nivel3',
          score: 9,
        },
        {
          label:
            'Al menos 3 días sin consumo de carne pero sin atención en el origen de la carne',
          value: 'nivel4',
          score: 11,
        },
        {
          label:
            'Al menos 3 días a la semana sin consumo de carne y la que se consume procede de ganadería extensiva',
          value: 'nivel5',
          score: 14,
        },
      ],
    },
    {
        name: 'comedor6',
        label: '26. TIPO DE ELECTRICIDAD EN FUNCIONAMIENTO COMEDOR ',
        labelsecond:
          '¿Qué tipo de energía se usa en el comedor?',
        options: [
          {
            label:
              '100% energía eléctrica mixta y/o gas',
            value: 'nivel1',
            score: 3,
          },
          {
            label:
              '75% de energía mixta y el 25% restante es de origen renovable',
            value: 'nivel2',
            score: 6,
          },
          {
            label:
              '50% de energía mixta y el 50% restante es renovable',
            value: 'nivel3',
            score: 9,
          },
          {
            label:
              '25% de energía mixta y el 75% energía renovable',
            value: 'nivel4',
            score: 11,
          },
          {
            label:
              '100% energía eléctrica renovable',
            value: 'nivel5',
            score: 14,
          },
        ],
      },
      {
        name: 'comedor7',
        label: '27. CERTIFICACIÓN AMBIENTAL DE DOTACIÓN DE COMEDOR ',
        labelsecond:
          '¿Los equipos utilizados en comedor tienen certificado ambiental?',
        options: [
          {
            label:
              'Ningún equipo de comedor está certificado',
            value: 'nivel1',
            score: 3,
          },
          {
            label:
              '25% del equipamiento de comedor está certificado',
            value: 'nivel2',
            score: 6,
          },
          {
            label:
              '50% del equipamiento de comedor está certificado',
            value: 'nivel3',
            score: 9,
          },
          {
            label:
              '75% del equipamiento de comedor está certificado',
            value: 'nivel4',
            score: 11,
          },
          {
            label:
              'Se da la condición del escenario anterior y, además, se realiza auditoría trimestral de control de consumos y actividades formativas de concienciación en ahorro de energía',
            value: 'nivel5',
            score: 14,
          },
        ],
      },
    // Agrega los otros campos de manera similar
  ];
  