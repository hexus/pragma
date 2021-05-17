## Pragma Components

## Top-level components

The primary Pragma components for managing a form and automatically rendering fields.

| Component                          | Description
| ---                                | ---
| [`<pragma-form>`](pragma-form)     | Manages a form and its associated fields & data.
| [`<pragma-fields>`](pragma-fields) | Renders a set of form fields recursively.

## Scalar-value field components

Field components that handle scalar values. Good for single-value form inputs.


| Component                            | Data type                      | Description
| ---                                  | ---                            | ---
| [`<pragma-number>`](pragma-number)   | `number`                       | Numeric text input.
| [`<pragma-string>`](pragma-string)   | `string`                       | Single-line freetext input.
| [`<pragma-boolean>`](pragma-boolean) | `boolean`                      | Boolean checkbox input.
| [`<pragma-select>`](pragma-select)   | `scalar`                       | Select drop-down with values derived from a fixed set of options.
| [`<pragma-picker>`](pragma-picker)   | `any`                          | Searchable select drop-down, powered by PapaParse and Choices.js, that loads options from a `src` URL.

## Field grouping components

Field components that render sets of fields. Good for objects and arrays.

| Component                                | Data type                      | Description
| ---                                      | ---                            | ---
| [`<pragma-section>`](pragma-section)     | `Object`                       | Groups a fixed set of fields as a form fieldset.
| [`<pragma-group>`](pragma-group)         | `Object`                       | Groups a fixed set of fields with a label.
| [`<pragma-list>`](pragma-list)           | <code>Object&#124;array</code> | Groups a variable set of fields that share a structure. Allows adding and removing list items that conform to a field template that defines this structure.
| [`<pragma-list-item>`](pragma-list-item) | `any`                          | Renders an item of a `<pragma-list>` with a "Remove" button.
| [`<pragma-table>`](pragma-table)         | <code>Object&#124;array</code> | Renders a variable set of field groups as a `<table>`.