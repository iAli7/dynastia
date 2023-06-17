  interface BuildingsUnstrictKeys {
    key: string;
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
        revenue: {
            food: 2
        },
        cost: {
            food: 100
        }
    }
  ];
  
  export default BUILDINGS;
  