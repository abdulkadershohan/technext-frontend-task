import { useState } from 'react'
import { filterByDateSelect } from '../demo-data/filter'
export default function Select() {
    const [value, setValue] = useState('')
    return (
        <div>

            <select className=" border border-gray-400 text-gray-600 
             text-base rounded-lg focus:ring-[#86B7FE]
             focus:border-[#86B7FE] block w-full p-2.5
            focus:border-4
            text-left
            "
                placeholder='Choose a country'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
                <option selected value={''} className="text-body text-base font-normal">By Launch Date</option>

                {
                    filterByDateSelect.map((item, index) => {
                        return (
                            <option key={index}
                                value={item.value}
                                className="text-body text-base font-normal">{item.name}</option>
                        )
                    })
                }

            </select>

        </div>
    )
}
