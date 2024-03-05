declare const LokefStorage: {
    setItem: (key: string, value: any) => Promise<void>;
    getItem: (key: string) => Promise<any>;
};
export default LokefStorage;
