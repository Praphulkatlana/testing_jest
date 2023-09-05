type GreetProp={
    name?:string
}
const Greet = ({name}:GreetProp) => {
  return (
    <div>hello {name}</div>
  )
}

export default Greet