"use strict";
// lokefStorage.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const LokefStorage = {
    setItem: (key, value) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const db = yield openDatabase();
                const transaction = db.transaction(['items'], 'readwrite');
                const store = transaction.objectStore('items');
                const newItem = { key, value };
                const addRequest = store.put(newItem);
                addRequest.onsuccess = () => {
                    resolve();
                };
                addRequest.onerror = () => {
                    reject(new Error('Error adding item to store'));
                };
            }
            catch (error) {
                reject(error);
            }
        }));
    }),
    getItem: (key) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const db = yield openDatabase();
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
            }
            catch (error) {
                reject(error);
            }
        }));
    })
};
function openDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const request = indexedDB.open('lokefStorage', 1);
            request.onerror = () => {
                reject(new Error('Error opening database'));
            };
            request.onupgradeneeded = event => {
                const db = event.target.result;
                db.createObjectStore('items', { keyPath: 'key' });
            };
            request.onsuccess = event => {
                resolve(event.target.result);
            };
        });
    });
}
exports.default = LokefStorage;
