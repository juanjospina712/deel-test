## What is the difference between Component and PureComponent? give an example where it might break my app.
* A regular component will re-render even if its prop or state has not changed, a pure component will only render if the props or state of that component have changed
## Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
* The context could be changed from any other component in the render tree, so we could have unexpected component re renders with unwanted consecuences 
## Describe 3 ways to pass information from a component to its PARENT.
* Using a function passed down from in a prop
* Using recoil
* Using the context API
## Give 2 ways to prevent components from re-rendering.
* Using a pure component and making sure it recieves only the needed props
* the component structure is very important, to make sure only the children that have recieved changes are re rendering
## What is a fragment and why do we need it? Give an example where it might break my app.
*  When returning nodes from our components, React always expects only one parent node, so we use React.Fragment or <> to be able to return multiple nodes/elements without having to add an extra div.
## Give 3 examples of the HOC pattern.
* So the https://github.com/acdlite/recompose library was one of the libraries I used the most to get state into functional components before the hook pattern started to become the standars.

The basic idea is to enchance a child component with props and state from a parent which is the higher component.

* NewComp = withReducer(Comp)
* NewComp = pure(Comp)
* NewComp = withQuery(Comp)

<NewComp />

## What's the difference in handling exceptions in promises, callbacks and async...await.
* For promises you use a .catch(() => {}) for callback and Async Await you could wrap a try catch around to handle any errors.
## How many arguments does setState take and why is it async.
* It can take two arguments, the initial or previous value and the new value we are setting.
## List the steps needed to migrate a Class to Function Component.
* Remove the render and constructor functions, and migrate all of the methods, state and lifecycle events into hooks.
## List a few ways styles can be used with components.
* We could use styles in the style attribute as style={{ propertyName: value }}
* we could use a global css file by importing it as import './file.css';
* we could use styled component and creating encapsulated React components just for the view 
## How to render an HTML string coming from the server.
* We would user RenderToString in the server and send over the string render tree then the app should user a Hydrate to update in browser. We could also send state over as a global variable and hydrate the app when it will render.