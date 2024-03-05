// lokefStorage.ts

interface Item {
    key: string;
    value: any;
  }
  
  const LokefStorage = {
    setItem: async (key: string, value: any): Promise<void> => {
      return new Promise<void>(async (resolve, reject) => {
        try {
          const db = await openDatabase();
          const transaction = db.transaction(['items'], 'readwrite');
          const store = transaction.objectStore('items');
  
          const newItem: Item = { key, value };
          const addRequest = store.put(newItem);
  
          addRequest.onsuccess = () => {
            resolve();
          };
  
          addRequest.onerror = () => {
            reject(new Error('Error adding item to store'));
          };
        } catch (error) {
          reject(error);
        }
      });
    },
  
    getItem: async (key: string): Promise<any> => {
      return new Promise<any>(async (resolve, reject) => {
        try {
          const db = await openDatabase();
          const transaction = db.transaction(['items'], 'readonly');
          const store = transaction.objectStore('items');
  
          const getRequest = store.get(key);
  
          getRequest.onsuccess = () => {
            const value = getRequest.result ? getRequest.result.value : null;
            resolve(value);
          };
  
          getRequest.onerror = () => {
            reject(new Error('Error getting item from store'));
          };
        } catch (error) {
          reject(error);
        }
      });
    }
  };
  
  async function openDatabase(): Promise<IDBDatabase> {
    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open('lokefStorage', 1);
  
      request.onerror = () => {
        reject(new Error('Error opening database'));
      };
  
      request.onupgradeneeded = event => {
        const db = (event.target as IDBOpenDBRequest).result;
        db.createObjectStore('items', { keyPath: 'key' });
      };
  
      request.onsuccess = event => {
        resolve((event.target as IDBOpenDBRequest).result);
      };
    });
  }
  
  export default LokefStorage;
  