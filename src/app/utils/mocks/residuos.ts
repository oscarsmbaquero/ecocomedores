export const residuos = [
    {
      name: 'campo1_b1',
      label: '28. CONTROL DEL DESPILFARRO ALIMENTARIO EN COMEDOR',
      labelsecond: '¿Hay alguna medida para disminuir el despilfarro alimentario en comedor?',
      options: [
        {
          label: 'Los menús se sirven para todos/as las comensales por igual y no hay monitoreo de ingesta',
          value: 'nivel1',
          score: 3,
        },
        {
          label:
            'Los menús se sirven para todos/as las comensales por igual y sí hay monitoreo de ingesta',
          value: 'nivel2',
          score: 7,
        },
        {
            label:
              'Los menús se sirven para todos/as las comensales por igual, hay monitoreo de ingesta y comunicación con cocina para la evaluación y ajuste de cantidades',
            value: 'nivel3',
            score: 10,
          },
        {
          label:
            'Autoservicio de menús y monitoreo de ingesta, aunque no hay comunicación con cocina para la evaluación y ajuste de cantidades',
          value: 'nivel4',
          score: 13,
        },
        {
          label:
            'Autoservicio de menú, monitoreo de ingesta y comunicación directa con cocina para la evaluación y ajuste de cantidades',
          value: 'nivel5',
          score: 17,
        },
        
      ],
    },
    {
      name: 'campo2_b1',
      label: '29.REUSABILIDAD DEL MENAJE (material auxiliar) UTILIZADO EN COMEDOR ',
      labelsecond:
        '¿Qué proporción del menaje del comedor es reusable?',
      options: [
        {
          label:
            'El 100% del menaje es de usar y tirar',
          value: 'nivel1',
          score: 3,
        },
        {
          label:
            'Sólo una parte del menaje es lavable',
          value: 'nivel2',
          score: 7,
        },
        {
          label:
            'El menaje es lavable salvo servilletas y botellas de agua',
          value: 'nivel3',
          score: 10,
        },
        {
          label:
            'El menaje es lavable salvo las servilletas que son de papel. Se utilizan jarras para servir el agua',
          value: 'nivel4',
          score: 13,
        },
        {
          label:
            'El 100% del menaje es lavable',
          value: 'nivel5',
          score: 17,
        },
      ],
    },
    {
      name: 'campo3_b1',
      label: '30. REDUCCIÓN DEL VOLÚMEN DE RESIDUOS EN COMEDOR ',
      labelsecond: '¿Se procura la reducción de residuos en comedor?',
      options: [
        {
          label:
            'No ponemos atención en la reducción de los residuos producidos',
          value: 'nivel1',
          score: 3,
        },
        {
          label:
            'Se desechan botellas de agua, la bolsita plástica del pan y envases de yogures',
          value: 'nivel2',
          score: 7,
        },
        {
          label:
            'Se desechan envases de yogures, papel y residuos orgánicos',
          value: 'nivel3',
          score: 10,
        },
        {
          label:
            'Tan sólo se desechan residuos orgánicos y papel',
          value: 'nivel4',
          score: 13,
        },
        {
          label:
            'Tan sólo se producen algunos residuos orgánicos y hay actividades de concienciación en el centro sobre la necesidad de no producir residuos',
          value: 'nivel5',
          score: 17,
        },
      ],
    },
    {
      name: 'campo4_b1',
      label: '31. SEPARACIÓN DE RESIDUOS',
      labelsecond:
        '¿Se separan los residuos después de comer?',
      options: [
        {
          label:
            'Utilizamos un único contenedor para todos los residuos',
          value: 'nivel1',
          score: 3,
        },
        {
          label:
            'Separamos los plásticos de lo demás',
          value: 'nivel2',
          score: 7,
        },
        {
          label:
            'Separamos plásticos, papel y lo demás',
          value: 'nivel3',
          score: 10,
        },
        {
          label:
            'Separamos plásticos, papel, fracción orgánica y otros (si los hay)',
          value: 'nivel4',
          score: 13,
        },
        {
          label:
            'Separamos la fracción compostable y la aportamos a un plan de compostaje de centro, de barrio o de municipio',
          value: 'nivel5',
          score: 17,
        },
      ],
    },
    {
      name: 'campo5_b1',
      label: '32. PLANES DE COMPOSTAJE',
      labelsecond:
        '¿Se separa la fracción orgánica? ¿Y se composta?',
      options: [
        {
          label:
            'Ni separamos la fracción orgánica ni compostamos',
          value: 'nivel1',
          score: 3,
        },
        {
          label:
            'Separamos la fracción orgánica aunque no participamos en ningún plan de compostaje',
          value: 'nivel2',
          score: 7,
        },
        {
          label:
            'Participamos en un plan de compostaje municipal',
          value: 'nivel3',
          score: 10,
        },
        {
          label:
            'Participamos en un plan de compostaje en el barrio',
          value: 'nivel4',
          score: 13,
        },
        {
          label:
            'Hay un plan de compostaje en el propio centro',
          value: 'nivel5',
          score: 17,
        },
      ],
    },
    {
        name: 'campo5_b1',
        label: '33. PRODUCTOS DE LIMPIEZA EMPLEADOS ',
        labelsecond:
          '¿Qué tipo de productos de limpieza se utilizan en el comedor?',
        options: [
          {
            label:
              'No ponemos atención en el tipo de productos de limpieza empleados ni en los envases que los contienen',
            value: 'nivel1',
            score: 3,
          },
          {
            label:
              'Compramos los productos de limpieza en formato grande o a granel',
            value: 'nivel2',
            score: 7,
          },
          {
            label:
              'Procuramos utilizar productos de limpieza de baja toxicidad para la salud de las personas y el medio ambiente',
            value: 'nivel3',
            score: 10,
          },
          {
            label:
              'Utilizamos productos de limpieza ecológicos en cualquier formato de envasado',
            value: 'nivel4',
            score: 13,
          },
          {
            label:
              'Utilizamos productos de limpieza ecológicos y de envase grande o a granel',
            value: 'nivel5',
            score: 17,
          },
        ],
      }
  ];
  