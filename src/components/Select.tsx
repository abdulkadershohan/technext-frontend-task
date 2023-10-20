import { ISelect } from "src/interfaces/inputSelect"

export default function Select({ data, onChange, placeholder, value }: ISelect) {
    return (
        <div>

            <select className=" border border-gray-400 text-gray-600 
             text-base rounded-lg focus:ring-[#86B7FE]
             focus:border-[#86B7FE] block w-full p-2 
            focus:border-4
            bg-[#fff]
            text-left
            "

                value={value}
                onChange={onChange}
            >
                <option value={''} className="text-body text-base font-normal">{placeholder}</option>

                {
                    data?.map((item, index) => {
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
