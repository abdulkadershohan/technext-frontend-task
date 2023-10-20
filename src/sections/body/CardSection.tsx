import React from "react";
import { Card } from "src/components";
const BASE_URL = 'https://api.spacexdata.com/v3/launches'
export default function CardSection() {
    const [offset, setOffset] = React.useState(1)
    const [limit, setLimit] = React.useState(9)
    const [search, setSearch] = React.useState('')
    const [filterByDate, setFilterByDate] = React.useState('')
    const [filterByStatus, setFilterByStatus] = React.useState('')

    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        setLoading(true)
        fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
    }, [offset, limit])

    return (
        <section
            className="container mx-auto px-4 py-8"

        >
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
                {
                    data.map((item, index) => (
                        <Card key={index} item={item} />
                    ))
                }
            </div>
        </section>
    )
}
