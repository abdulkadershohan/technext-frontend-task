import image from '../assets/svg/Property1.svg'
export default function Card() {
    const data = {
        id: 1,
        image: image,
        date: '25 March 2021',
        title: 'Property 1',
        text: 'Falcon 1',
        status: 'failed',
    }
    return (
        <div
            className='flex flex-col items-center justify-center border-solid border-[1px] border-gray-400 p-8 gap-6 rounded-[8px]'
        >
            <img src={data.image} alt="img"
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
                    >25 March 2021</span>
                </p>
                <h1
                    className='text-gray-900 font-medium leading-[28px] text-2xl'
                >{data.title}</h1>
                <p
                    className='text-gray-700 font-normal leading-5 text-[14px]'
                >
                    {data.text}
                </p>
            </div>

            <div
                className='flex flex-col items-center justify-center gap-2'
            >
                <p
                    className='text-gray-600 font-medium leading-5 text-base'
                >Launch Status:</p>
                <p
                    className={`text-white font-bold leading-3 text-sm ${data.status !== 'failed' ? ' bg-danger' : 'bg-success'} rounded-[4px] px-3 py-1`}
                >failed</p>
            </div>
        </div>
    )
}
