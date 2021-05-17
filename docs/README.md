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

## [Components](components)

Pragma includes [a collection of web components](components) that are used for associating form state to and from user interface.
