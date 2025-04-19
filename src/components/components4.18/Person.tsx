// The props type is defined as a single 
// param that is of type object,
// with two properties 'first' and 'last'
// that are both of type string
type PersonProps = {
    name : {
        first: string
        last: string
    }
}

// export const Person header for any component
// inside the params field, is the type of props,
// PersonProps ^^
export const Person = (props: PersonProps) => {
    // returns an element with props.name.first and props.name.last 
    return <div>{props.name.first} {props.name.last}</div>
}