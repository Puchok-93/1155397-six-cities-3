import { TOffer } from './offers';

export type TSortNames = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';

export type TSortDictItem = {
    name: TSortNames;
    handler: (a:TOffer, b:TOffer) => number;
};


export type TSortDictionary =
Record<Exclude<TSortNames, 'Popular'>, (a:TOffer, b:TOffer) => number>
&
Record<Extract<TSortNames, 'Popular'>, null>;
