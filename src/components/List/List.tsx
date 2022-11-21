import { ReactNode } from "react"

interface IList<T> {
    mass: T[],
    render: (item: T) => ReactNode
}

export default function List<T>({ mass, render }: IList<T>) {
    return (
        <>
            {mass.map(render)}
        </>
    )
}