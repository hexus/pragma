# pragma-fields



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                                                                                                                                | Type      | Default     |
| -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------- | ----------- |
| `fields` | --        | The set of fields to render.                                                                                                                                                               | `Field[]` | `[]`        |
| `path`   | `path`    | The path to the subset of fields to render.  This prop is informational for parent `<pragma-form>` elements, so that they know which fields to provide to the `setFields()` setter method. | `string`  | `undefined` |


## Methods

### `setFields(fields: Field[]) => Promise<void>`

Set the set of fields to render.

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [pragma-group](../pragma-group)
 - [pragma-list-item](../pragma-list-item)
 - [pragma-section](../pragma-section)
 - [pragma-table](../pragma-table)

### Graph
```mermaid
graph TD;
  pragma-group --> pragma-fields
  pragma-list-item --> pragma-fields
  pragma-section --> pragma-fields
  pragma-table --> pragma-fields
  style pragma-fields fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
