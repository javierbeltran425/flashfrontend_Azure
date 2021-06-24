const Card = ({ title, img, desc, price }) => {

    return (
        <>
        <div className="w-80 h-80 bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
              <div className="flex items-center mb-4">
                <img className="w-20 rounded-full border-2 border-gray-300"
                  src={img}
                />
                <div className="leading-5 ml-6 sm">
                  <h4 className="text-xl font-semibold">
                    {title}
                  </h4>
                  <h5 className="font-semibold text-blue-600">
                    {price}
                  </h5>
                </div>
              </div>
              <div>
                <q className="italic text-gray-600 overflow-y-auto">
                  {desc}
                </q>
              </div>
            </div>
        </>
    );
}

export default Card