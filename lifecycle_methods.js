/*
React lifecycle methods are special functions that provide granular level control to developers to 
hook into specific points in a component lifecycle.

3 main phases of lifecycle methods - 

MOUNTING
    - constructor               (Initialize state, bind methods)
    - getDerivedStateFromProps  (Update state bases on props before rendering)
    - render                    (Return JSX for the component)
    - componentDidMount         (Perform side effect like API calls)

UPDATING
    - getDerivedStateFromProps  (Update state based on props during updates)
    - shouldComponentUpdate     (Decide if a re-render is necessary)
    - render                    (Return updated JSX for the component)
    - getSnapshotBeforeUpdate   (Capture information before the DOM updates)
    - ComponentDidUpdate        (Perform actions after the DOM updates)


UNMOUNTING
    - componentWillUnmount      (Clean up resources, subscriptions, event listeners)
*/
