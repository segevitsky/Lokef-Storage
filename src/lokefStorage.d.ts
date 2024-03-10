interface Item {
    key: string;
    value: any;
}
declare const LokefStorage: {
    setItem: (key: string, value: any) => Promise<void>;
    getItem: (key: string) => Promise<any>;
    getAll: () => Promise<Item[]>;
    getRangeData: (lowerRange: string, upperRange: string) => Promise<Item[]>;
};
export default LokefStorage;
