# pragma-form



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute | Description                                   | Type                           | Default     |
| ----------- | --------- | --------------------------------------------- | ------------------------------ | ----------- |
| `defaults`  | --        | Default properties for different field types. | `{ [key: string]: any; }`      | `{}`        |
| `fields`    | --        | Pragma fields to maintain.                    | `Field[]`                      | `[]`        |
| `functions` | --        | Functions to provide to form expressions.     | `{ [key: string]: Function; }` | `{}`        |
| `name`      | `name`    | The name of the Pragma form.                  | `string`                       | `undefined` |
| `state`     | `state`   | Form state data.                              | `any`                          | `{}`        |


## Methods

### `getForm() => Promise<FormProcessor>`



#### Returns

Type: `Promise<FormProcessor>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
