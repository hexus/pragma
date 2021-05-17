# Pragma Documentation

Pragma is a declarative form builder and state processing library.

## Key concepts

Pragma separates three key concerns for mapping arbitrary JSON data to and from a form.

- **Fields**
  - Building blocks of a form
  - Each field has a `path` that maps to some subset of the form's data structure
  - Defined declaratively using JSON, YAML or (**TODO**) HTML
  - **TODO:** Fields can be inferred from initial form data
- **Layout**
  - The structure and ordering of form fields as a user interface
  - Defined with HTML or inferred by field structure
  - **TODO:** Defined declaratively using JSON or YAML
- **Data**
  - Arbitrary JSON data structure one-way-bound to a form and its fields
  - Updated by a Pragma Form from native DOM events emitted by field components

## Components

A collection of web components are used for associating form state to user interface.

### Top-level components

The primary Pragma components for managing a form and automatically rendering fields. 

| Component                          | Description
| ---                                | ---
| [`<pragma-form>`](pragma-form)     | Manages a form and its associated fields & data.
| [`<pragma-fields>`](pragma-fields) | Renders a set of form fields recursively.

### Scalar-value field components

Field components that handle scalar values. Good for single-value form inputs.


| Component                            | Data type                      | Description
| ---                                  | ---                            | ---
| [`<pragma-number>`](pragma-number)   | `number`                       | Numeric text input.
| [`<pragma-string>`](pragma-string)   | `string`                       | Single-line freetext input.
| [`<pragma-boolean>`](pragma-boolean) | `boolean`                      | Boolean checkbox input.
| [`<pragma-select>`](pragma-select)   | `scalar`                       | Select drop-down with values derived from a fixed set of options.
| [`<pragma-picker>`](pragma-picker)   | `any`                          | Searchable select drop-down, powered by Choices.js, that loads options from a `src` URL.

#### Field grouping components

Field components that render sets of fields. Good for objects and arrays.

| Component                                | Data type                      | Description
| ---                                      | ---                            | ---
| [`<pragma-section>`](pragma-section)     | `Object`                       | Groups a fixed set of fields as a form fieldset.
| [`<pragma-group>`](pragma-group)         | `Object`                       | Groups a fixed set of fields with a label.
| [`<pragma-list>`](pragma-list)           | <code>Object&#124;array</code> | Groups a variable set of fields that share a structure. Allows adding and removing list items that conform to a field template that defines this structure.
| [`<pragma-list-item>`](pragma-list-item) | `any`                          | Renders an item of a `<pragma-list>` with a "Remove" button.
| [`<pragma-table>`](pragma-table)         | <code>Object&#124;array</code> | Renders a variable set of field groups as a `<table>`.
