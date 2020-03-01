# pragma-list



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                    | Type      | Default        |
| ---------- | ---------- | ------------------------------ | --------- | -------------- |
| `disabled` | `disabled` | Whether the field is disabled. | `boolean` | `false`        |
| `field`    | `field`    | Pragma field definition.       | `any`     | `defaultField` |
| `label`    | `label`    | The field's label.             | `string`  | `undefined`    |
| `options`  | `options`  | The field's options.           | `any`     | `{}`           |
| `path`     | `path`     | The field's path.              | `string`  | `undefined`    |
| `value`    | `value`    | The field's value.             | `any`     | `undefined`    |


## Dependencies

### Depends on

- [pragma-list-item](../pragma-list-item)

### Graph
```mermaid
graph TD;
  pragma-list --> pragma-list-item
  pragma-list-item --> pragma-fields
  style pragma-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
