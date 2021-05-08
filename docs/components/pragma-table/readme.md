# pragma-table



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                      | Type      | Default        |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------ | --------- | -------------- |
| `disabled`  | `disabled`   | Whether the field is disabled.                                                                   | `boolean` | `false`        |
| `field`     | `field`      | Pragma field definition.                                                                         | `any`     | `defaultField` |
| `label`     | `label`      | The field's label.                                                                               | `string`  | `undefined`    |
| `path`      | `path`       | The field's path.                                                                                | `string`  | `undefined`    |
| `showLabel` | `show-label` | Whether to show labels for each row.  Displayed in an extra column on the far left of the table. | `boolean` | `false`        |


## Dependencies

### Depends on

- [pragma-fields](../pragma-fields)

### Graph
```mermaid
graph TD;
  pragma-table --> pragma-fields
  style pragma-table fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
