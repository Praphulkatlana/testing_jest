import Greet from "./greet";
import {screen,render}from"@testing-library/react"


test('greeet renders correctly', () => {
    render(<Greet/>)
    const textMessage =screen.getByText("hello")
    expect(textMessage).toBeInTheDocument()
})

test('greeet renders name correctly', () => {
    render(<Greet name="lucky"/>)
    const textMessage =screen.getByText("hello lucky")
    expect(textMessage).toBeInTheDocument()
})