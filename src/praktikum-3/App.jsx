import React from 'react'

const Button = (props) => {
    return(
        <button className={`h-10 px-6 font-semibold rounded-md bg-${props.variant} text-white`}
        type="submit">{ props.text }</button>
    )
}

function App() {

    return(
        <div className="flex justify-center bg-blue-600 min-h-screen items-center">
            <div className="flex gap-x-3">
                <Button variant="red-700" text="Login"></Button>
                <Button variant="black-500" text="Register"></Button>
            </div>
        </div>
    )
}

export default App