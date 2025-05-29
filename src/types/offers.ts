export type Location = {
    latitude: number;
    longitude: number;
    zoom: number;
};

export type City = {
    name: string;
    location: Location;
};

export type Host = {
    name: string;
    avatarUrl: string;
    isPro: boolean;
};

export type Offer = {
    id: string;
    title: string;
    type: string;
    price: number;
    isFavorite: boolean;
    isPremium: boolean;
    rating: number;
    description: string;
    bedrooms: number;
    goods: string[];
    images: string[];
    maxAdults: number;
    location: Location;
    city: City;
    host: Host;
};

export type Offers = Offer[];
