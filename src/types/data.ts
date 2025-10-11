export type Item = {
    title: string;
    description: string;
};

export type Category = {
    name: string;
    items: Item[];
};

export type Data = {
    items: Category[];
};
