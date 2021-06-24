import img from '../Resources/CarWash1.jpeg'

const GenCard = ({ title, img, desc, price }) => {
    return(
        <>
            <div className="flex flex-col flex-nowrap w-3/4 h-96 ml-10 bg-white shadow-lg opacity-75  items-center rounded-t-full rounded-b-full ">
                <img src={img} className="h-24 w-auto m-5 rounded-full shadow-lg"/>
                <div className="w-full overflow-ellipsis">
                    <h1 className="text-2xl text-purple-900 text-center">{title}</h1>
                </div>
                <div className="w-full h-1/3 overflow-y-auto">
                    <p className="p-5 break-all text-center">{desc}</p>
                </div>
                <h2 className="flex text-4xl font-bold text-purple-900">
                    {price}
                </h2>
            </div>
        </>
    )
}

export default GenCard