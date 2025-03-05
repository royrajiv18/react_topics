/*
    In a controlled component, React state manages all form data, whereas in an uncontrolled component, HTML form element data is solely managed by the DOM.
    With a controlled component, developers have complete control over form input values, deciding what to insert and where.
    Using React state is essential in controlled components to handle dynamic form data. In contrast, it’s optional for uncontrolled components to have state, but they must use React Ref.
    Controlled components offer predictability as the component oversees the state of form elements.
    Uncontrolled components lack predictability since form elements may change or be influenced by external sources over the component’s lifespan.
    Controlled components enable efficient validation tests on each user keystroke, as form component values are securely stored in local state.
    Validation on input data is performed only after form submission in uncontrolled components.
*/
