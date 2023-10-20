import React from "react";
import { Card } from "src/components";
import { filterSearchContext } from "src/context/filterSearchContext";
const BASE_URL = 'https://api.spacexdata.com/v3/launches'
export default function CardSection() {
    const { search, check } = React.useContext(filterSearchContext) as any

    const [offset, setOffset] = React.useState(1)
    const [limit, setLimit] = React.useState(9)

    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        setLoading(true)
        let query = `?limit=${limit}&offset=${offset}`
        if (search !== "") {
            query += `&rocket_name=${search}`
        }
        if (check) {
            query += `&upcoming=true`
        }
        console.log(query)
        try {
            fetch(`${BASE_URL}${query}`)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                    setLoading(false)
                })
        }
        catch (error) {
            console.log(error)
            setData([])
        }
    }, [offset, limit, search, check])

    return (
        <section
            className="container mx-auto px-4 py-8"

        >
            {search}
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
                {
                    data.map((item, index) => (
                        <Card key={index} item={item} />
                    ))
                }
            </div>

            <nav
                className="flex items-center justify-center mt-8"
            >
                <ul className="flex items-center -space-x-px h-10 text-base">
                    <li>
                        <p
                            className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg  hover:text-[#fff] bg-white   cursor-pointer "
                            onClick={() => {
                                if (offset > 1) {
                                    setOffset(offset - 1)
                                }

                            }}
                        >
                            <span className="sr-only">Previous</span>
                            <svg className="w-3 h-3  text-primary " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                            </svg>
                        </p>
                    </li>
                    <li>
                        <p

                            className={styleActive}
                        //  onClick={() => setOffset(1)}

                        >{offset}</p>
                    </li>
                    <li>
                        <p
                            className={style}
                            onClick={() => setOffset((prev) => prev + 1)}

                        >{offset + 1}</p>
                    </li>

                    <li>
                        <p
                            className={style}
                            onClick={() => setOffset((prev) => prev + 2)}

                        >{offset + 2}</p>
                    </li>
                    <li>
                        <p

                            className={style}
                            onClick={() => setOffset((prev) => prev + 3)}
                        >{offset + 3}</p>
                    </li>
                    <li>
                        <p

                            className={style}
                        >...</p>
                    </li>
                    <li>
                        <p
                            className={style}
                            onClick={() => setOffset((prev) => prev + 10)}
                        >{offset + 10}</p>
                    </li>
                    <li>
                        <p
                            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg    text-[#fff] cursor-pointer"
                            onClick={() => setOffset(offset + 1)}
                        >
                            <span className="sr-only">Next</span>
                            <svg className="w-3 h-3 text-primary " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                            </svg>
                        </p>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

const style = `flex items-center justify-center px-4 h-10 leading-tight 
text-primary bg-white border
 border-gray-300
  hover:text-[#fff]
   hover:bg-primary cursor-pointer
   text-[14px] font-normal`
const styleActive = `flex items-center justify-center px-4 h-10 leading-tight 
text-primary bg-white border
 border-gray-300
  text-[#fff]
   bg-primary
   text-[14px] font-normal`