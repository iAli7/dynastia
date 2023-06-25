export interface BuildingsUnstrictKeys {
  key: string,
  description: string,
  revenue: {
    food: number;
  },
  cost: {
    gold: number
  };
}

const BUILDINGS: BuildingsUnstrictKeys[] = [
  {
    key: "hunter.build",
    description: "Avcı kulübesi alarak saniyede kazandığınız yemeği arttırabilirsiniz",
    revenue: {
      food: 2
    },
    cost: {
      gold: -40
    },
  },
  {
    key: "fish.build",
    description: "Balıkçı kulübesi alarak saniyede kazandığınız yemeği arttırabilirsiniz",
    revenue: {
      food: 10
    },
    cost: {
      gold: -100
    },
  },
];

export default BUILDINGS;