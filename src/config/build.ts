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
          food: 10
      },
      cost: {
          food: 500
      },
  },
  ];
  
  export default BUILDINGS;