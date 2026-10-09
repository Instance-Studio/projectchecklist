export type Item = {
    title: string;
    description: string;
    extra?: string;
    command?: string;
};

export type Category = {
    name: string;
    items: Item[];
};

export type Data = {
    items: Category[];
};
