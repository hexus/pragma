/**
 * A Pragma field.
 *
 * TODO: All TODO items on these properties should be part of a class instead of an interface.
 */
export type Field = {
  /**
   * The path of the field.
   */
  path: string,

  /**
   * The field's name; the leaf of the field's path.
   *
   * TODO: Derived from the field's path.
   */
  name?: string,

  /**
   * The path of the field's parent, if any.
   *
   * Overrides the parent that would otherwise be determined from the `path`.
   */
  parent?: string,

  /**
   * The type of the field.
   *
   * Determines the type of value to read and store.
   *
   * TODO: Defaults to `'number'`.
   */
  type?: string,

  /**
   * The tag name to use for this field.
   */
  tag?: string,

  /**
   * Input options.
   *
   * A free-form object for different field tags to interpret and utilise.
   */
  options?: {
    [key: string]: any
  };

  /**
   * The field's label.
   *
   * TODO: Default's to a sentence-case translation of the field's key.
   */
  label?: string;

  /**
   * The field's description.
   */
  description?: string;

  /**
   * Whether to prevent storing the field's value in data AND prevent updating
   * any of its children.
   *
   * TODO: Defaults to `false`.
   */
  omit?: boolean;

  /**
   * Whether to prevent storing the field's value in data.
   *
   * TODO: Defaults to `false`.
   */
  virtual?: boolean;

  /**
   * Whether the field is visible.
   *
   * String values are interpreted as expressions.
   *
   * TODO: Defaults to `true`.
   */
  visible?: boolean|string;

  /**
   * Whether the field is disabled.
   *
   * String values are interpreted as expressions.
   *
   * TODO: Defaults to `true` if `expression` is set, otherwise defaults to `false`.
   */
  disabled?: boolean|string;

  /**
   * The field's value.
   */
  value?: any;

  /**
   * The field's default value.
   *
   * TODO: Defaults appropriately for the field's `type`.
   */
  default?: any;

  /**
   * Whether to merge the field's value with its default value if the values
   * are non-scalar.
   */
  merge?: boolean;

  /**
   * An expression used to compute the field's value.
   *
   * TODO: Implies `disabled` when set.
   */
  expression?: string;

  /**
   * The field's value validation function.
   *
   * TODO: Defaults appropriately for the field's `type`.
   */
  validator?: string;

  /**
   * The path of a field to inherit from.
   */
  extends?: string;

  /**
   * The path of a field that has been inherited from.
   */
  extended?: string;

  /**
   * The path of a field to mirror.
   *
   * TODO: Implement
   */
  mirror?: string;

  /**
   * Child fields.
   */
  children?: Array<Field>;

  /**
   * The path of a template field that all child fields should extend.
   *
   * Can be a `Field` or a `path` to a field.
   */
  template?: Field|string;

  /**
   * A map or list of child keys that cannot be removed at runtime.
   */
  fixed?: { [key: string]: string } | Array<string>;
};

/**
 * Default field definition.
 */
export const defaultField: Field = {
  path: null,
  name: null,
  value: null,
  options: {},
  visible: true,
  disabled: false
};
