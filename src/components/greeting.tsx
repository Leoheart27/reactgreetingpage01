import { greetingProps } from "@/props/greetingProps"

export const greeting = ({time, greet}: greetingProps) => {

    return (
        <>
            <h1 className="text-9xl">{time}</h1>
            <p className="text-2xl font-bold">{greet}</p>
        </>
    )
}