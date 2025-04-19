type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props
    return(
        <div>
            <h2> 
            {props.isLoggedIn 
            ? `Welcome ${props.name}`
            : `You are not logged in ${messageCount}`}
            </h2>
            <h1> You have {messageCount} messages </h1>
        </div>
    );
}

