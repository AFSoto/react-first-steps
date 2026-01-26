
export interface Hero{
    id: number;
    name: string;
    owner: owner;
};

// type owner = 'DC' | 'Marvel';

export enum owner {
    DC,
    Marvel,
}



export const heroes:Hero[] = [
  {
    id: 1,
    name: 'Batman',
    owner: owner.DC,
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: owner.Marvel,
  },
  {
    id: 3,
    name: 'Superman',
    owner: owner.DC,
  },
  {
    id: 4,
    name: 'Flash',
    owner: owner.DC,
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: owner.Marvel,
  },
];

// console.log({heroes});

// export default heroes;