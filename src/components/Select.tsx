interface Props {
    data: any[];
    onChange: (e: any) => void;
    placeholder: string;
    value: string;
}
export default function Select({ data, onChange, placeholder, value }: Props) {
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
                <option className="text-body text-base font-normal">{placeholder}</option>

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
