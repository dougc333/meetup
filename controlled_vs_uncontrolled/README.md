# Controlled vs. UnControlled React Components

Controlled => Custom hooks. The better programmers use custom hooks
Uncontrolled => Controlled. Cant get uncontrolled to rerender. Replace with
controlled. 

A controlled React Component has state in it and the state changes to rerender
the component like this:

const controlledComp = ()=>{
const [theme, setTheme] = React.useState("light")

    useEffect(()=>{
    	console.log(theme) //remove the useEffect after debugging. for stale
    	closure
    },[theme])

    function handleClick(){
    	theme==="light" ? setTheme("dark") : setTheme("light")
    	//console.log(theme) this may be out of sync
    }

    return(
    <SomeChildComponent color={theme} />
      <button onClick={handleClick}>SwitchTheme</button>
    )

}

An uncontrolled component may look like below but it wont work because the
children wont rerender when the theme color changes.

const unControlledComp = ()=>{
let theme = "light"

function handleClick(){
theme==="light" ? theme = "dark" : theme = "light"
console.log(`handleClick theme:${theme}`)  
 }
//the prolemb is the change in theme doesnt cause a rerender of the child components.
//why? because react has no way to know about a state change. This is uncontrolled.
return(
<SomeChildComponent color={theme} />
<button onClick={handleClick}>SwitchTheme</button>
)

}

NOTE: I didnt debug this code, I wrote this after spending 3h trying different
combinations and every possibility between controlled/uncontrolled to get
parent/child to rerender. The renders never propagated consistently from parent
to child in parent uncontrolled components. Parent=App.jsx or App.tsx,
child=EChartReact component.

Change controlled to custom hook exercise. This is different than putting state in the parent and using that to rerender the child components
