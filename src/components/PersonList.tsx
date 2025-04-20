import { Name } from './Person.types'
type PersonListProps = {
    names: Name[]
}
// props has names list with first and last properties of type string

export const PersonList = (props: PersonListProps) => {
    return(
        <div>
            {/* Uses .map function to iterate through name list items */}
            {props.names.map(name => {
                return(
                    <h2 key={name.first} >
                        {name.first} {name.last}
                    </h2>
                )
            })}
        </div>
    )
}