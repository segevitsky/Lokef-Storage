# LokefStorage

[![npm version](https://badge.fury.io/js/lokef-storage.svg)](https://badge.fury.io/js/lokef-storage)


Lokef Storage meaning Not Fun Storage in Hebrew is An asynchronous localStorage alternative using IndexedDB.
It actually turns our cucumbersome syntax of IndexedDB to be the exactly the same as localStorage giving us the advantages
of asynchronous actions 💪💪💪

It's way more secure and we can save everything not only strings ! Hell Yeah! Follow for more progress
don't be ashamed to contact @ segevitsky@gmail.com

## Installation

You can install `lokef-storage` via npm:

```bash
npm install lokef-storage


## Usage

`LokefStorage` provides asynchronous methods for interacting with IndexedDB, so you'll need to use `async/await` or promise chaining to handle the asynchronous behavior.

```javascript
import LokefStorage from 'lokef-storage';

(async () => {
  try {
    // Set an item
    await LokefStorage.setItem('key', 'value');
    console.log('Item set successfully');

    // Get an item
    const value = await LokefStorage.getItem('key');
    console.log('Retrieved value:', value);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();


(async () => {
  try {
    const allItems = await LokefStorage.getAll();
    console.log('All items:', allItems);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();


(async () => {
  try {
    const rangeData = await LokefStorage.getRangeData('key1', 'key3');
    console.log('Range data:', rangeData);
  } catch (error) {
    console.error('Error:', error.message);
  }
})();

API
setItem(key: string, value: any): Promise<void>
Sets the value of the specified key in the storage.

key: The key of the item.
value: The value to store.
getItem(key: string): Promise<any>
Retrieves the value of the specified key from the storage.

key: The key of the item to retrieve.
License
This project is licensed under the MIT License - see the LICENSE file for details.


This README.md file provides information about how to install and use your `LokefStorage` library, as well as an overview of its API and license information. You can customize it further to include additional details or sections as needed. Let me know if you need further assistance!
