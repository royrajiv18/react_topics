/*
Props drilling is when data has to be passed down through many layers of components
*/

/////////////App comp////////////
    import Parent from "./Parent";
    const [user] = useState({name: "John", age: 30})

    return (
        <div>
            <h1>App</h1>
            <Parent user={user}/>
        </div>
    )
    export default App;
/////////////Parent comp////////////
import Child from "./Child";
const Parent = ({user})=> {
    return (
    <div>
        <h1>Parent</h1>
    <Child user={user}/>
    </div>
    )
}
export default Parent
/////////////Child comp////////////
import GrandChild from "./GrandChild"
const Child = ({user})=> {
    return (
        <div>
            <h1>Child</h1>
    <GrandChild user={user}/>
    </div>
)
}
export default Child;

/////////////GrandChild comp////////////

const GrandChild = ({user})=> {
    return (
        <div>
            <h1>GrandChild</h1>
            <p>Hello {user.name} age: {user.age}</p>
        </div>
    )
}
