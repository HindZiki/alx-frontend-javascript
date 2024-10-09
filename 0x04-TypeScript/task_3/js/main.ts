/// <reference path="./crud.d.ts" /> // Triple slash directive

// Import types and functions
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create an object of type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and get the new row ID
const newRowID: RowID = CRUD.insertRow(row); // newRowID will be of type RowID

// Create an updated row with age
const updatedRow: RowElement = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };

// Update the row using the new row ID
CRUD.updateRow(newRowID, updatedRow);

// Delete the row using the new row ID
CRUD.deleteRow(newRowID);
