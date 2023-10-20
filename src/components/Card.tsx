import moment from 'moment'
import { ICard } from 'src/interfaces/home'


export default function Card({ item }: ICard) {
    const { links, mission_name, launch_date_local, rocket, launch_success } = item || {}
    const image = links?.mission_patch_small || ''
    const { rocket_name } = rocket || {}
    const launch_date = moment(launch_date_local).format('DD MMMM YYYY') || ''

    return (
        <div
            className='flex flex-col items-center justify-center border-solid border-[1px] border-gray-400 p-8 gap-6 rounded-[8px]'
        >
            <img src={image} alt="img"
                className='h-[124px] w-[124px] object-cover'
            />
            <div
                className='flex flex-col items-center justify-center gap-2'
            >
                <p
                    className='text-gray-400 font-normal leading-6 text-base'
                >Launch Date:
                    <span
                        className='text-gray-800'
                    >{launch_date}</span>
                </p>
                <h1
                    className='text-gray-900 font-medium leading-[28px] text-2xl'
                >{mission_name}</h1>
                <p
                    className='text-gray-700 font-normal leading-5 text-[14px]'
                >
                    {rocket_name}
                </p>
            </div>

            <div
                className='flex flex-col items-center justify-center gap-2'
            >
                <p
                    className='text-gray-600 font-medium leading-5 text-base'
                >Launch Status:</p>
                <p
                    className={`text-white font-bold leading-3 text-sm ${launch_success ? 'bg-success' : ' bg-danger'} rounded-[4px] px-3 py-1`}
                >{launch_success ? "success " : 'failed'}</p>
            </div>
        </div>
    )
}
