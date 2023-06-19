  interface BuildingsUnstrictKeys {
    key: string,
    description: string,
    revenue: {
      food: number;
    },
    cost: {
        food: number
    };
  }
  
  const BUILDINGS: BuildingsUnstrictKeys[] = [
    {
        key: "Avcı Kulübesi",
        description: "Avcı kulübesi alarak saniyede kazandığınız yemeği arttırabilirsiniz",
        revenue: {
            food: 2
        },
        cost: {
            food: 100
        },
    },
    {
      key: "Balıkçı Kulübesi",
      description: "Balıkçı kulübesi alarak saniyede kazandığınız yemeği arttırabilirsiniz",
      revenue: {
          food: 12
      },
      cost: {
          food: 400
      },
  },
  ];
  
  export default BUILDINGS;