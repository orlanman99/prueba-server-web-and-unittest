interface storage{
    get: (list_name: string) => string[];
    add: (list_name: string, item: string) => boolean;
    remove: (list_name: string, item: string) => boolean;
}


export const redisStorage: storage = {
    get: (list_name: string) => [],
    add: (list_name: string, item: string) => false,
    remove: (list_name: string, item: string) => false,
};