export const distribucion = [
    {
      name: 'distribucion1',
      label: '9. CANTIDAD DE ENVASES Y EMBALAJES',
      labelsecond: '¿Procuráis reducir la basura asociada al consumo de alimentos?',
      options: [
        {
          label: 'Al menos el 80% de alimentos envasados y frecuentemente en envase individual',
          value: 'nivel1',
          score: 4,
        },
        {
          label:
            'Hasta el 80% de los productos vienen en envases pero evitamos los envases individuales',
          value: 'nivel2',
          score: 8,
        },
        {
            label:
              'Al menos el 50% de los alimentos están envasados y el otro 50% se suministran en envases reutilizables o a granel',
            value: 'nivel3',
            score: 12,
          },
        {
          label:
            'Al menos el 65% de los alimentos son transportados en envases reutilizables, o en formato a granel cuando lo anterior no es posible',
          value: 'nivel4',
          score: 16,
        },
        {
          label:
            'Al menos el 80% de los alimentos son transportados en envases reutilizables, o en formato a granel cuando lo anterior no es posible',
          value: 'nivel5',
          score: 20,
        },
        
      ],
    },
    {
      name: 'distribucion2',
      label: '10. PROPORCIÓN Y TIPO DE P LÁSTICOS UTILIZADOS ',
      labelsecond:
        '¿Procuráis reducir el uso de plásticos?',
      options: [
        {
          label:
            'Al menos el 80% de los productos vienen en envases y embalajes de plástico convencional',
          value: 'nivel1',
          score: 4,
        },
        {
          label:
            'Menos del 80% de los productos vienen en envases y embalajes de plástico convencional',
          value: 'nivel2',
          score: 8,
        },
        {
          label:
            'El 50% de los productos vienen en envases y embalajes de plástico convencional,  y el otro 50% vienen envasados en vidrio, papel o cartón',
          value: 'nivel3',
          score: 12,
        },
        {
          label:
            'El 50% de los productos vienen envasados/ embalados en plástico biodegradable o plásticos recuperados, y el 50% restante está envasado en vidrio, papel o cartón',
          value: 'nivel4',
          score: 16,
        },
        {
          label:
            'Se ha conseguido una reducción del 80% de los envases y embalajes plásticos en el aprovisionamiento de productos',
          value: 'nivel5',
          score: 20,
        },
      ],
    },
    {
      name: 'distribucion3',
      label: '11. PROPORCIÓN DE EMBALAJES ALUMÍNICOS Y ENLATADOS',
      labelsecond: '¿Procuráis sustituir los envases alumínicos teniendo en cuenta la escasez de estos materiales?',
      options: [
        {
          label:
            'Sin ninguna atención a la reducción del uso de latas y uso de formato pequeño',
          value: 'nivel1',
          score: 4,
        },
        {
          label:
            'Sin ninguna atención a la reducción del uso de latas y uso de formato grande',
          value: 'nivel2',
          score: 8,
        },
        {
          label:
            'Se intenta evitar el uso de latas, y si se utilizan sólo son de formato grande',
          value: 'nivel3',
          score: 12,
        },
        {
          label:
            'Uso puntual de productos enlatados de formato grande',
          value: 'nivel4',
          score: 16,
        },
        {
          label:
            'Eliminación completa del uso de latas',
          value: 'nivel5',
          score: 20,
        },
      ],
    },
    {
      name: 'distribucion4',
      label: '12. ENERGÍA UTILIZADA POR LOS VEHÍCULOS IMPLICADOS ',
      labelsecond:
        '¿El transporte de alimentos se realiza en vehículos dependientes de combustibles fósiles?',
      options: [
        {
          label:
            'Uso 100% de transporte convencional, dependiente de combustibles fósiles',
          value: 'nivel1',
          score: 4,
        },
        {
          label:
            'El 75% del transporte es convencional y el 25% restante es transporte eléctrico',
          value: 'nivel2',
          score: 8,
        },
        {
          label:
            'El 50% del transporte es convencional y el 50% restante es eléctrico',
          value: 'nivel3',
          score: 12,
        },
        {
          label:
            'El 25% del transporte es convencional y el 75% restante es eléctrico',
          value: 'nivel4',
          score: 16,
        },
        {
          label:
            'Uso 100% de transporte eléctrico',
          value: 'nivel5',
          score: 20,
        },
      ],
    },
    {
      name: 'distribucion5',
      label: '13.KILOMETRAJE RECORRIDO ',
      labelsecond:
        '¿Cuánta distancia hay desde el lugar en el que se cocina hasta el comedor?',
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
  