
// We use PascalCase for React's Function Components
function Message() {
    const name = 'AML Learner'
    
    // JSX: JavaScript XML: (under the hood, this code will be converted to Javascript)
    if (name)
        return <h1>Hello {name}</h1>
    else
        return <h1>Hello World</h1>
}

export default Message;
// to use the component elsewhere, we need to export it from the module

