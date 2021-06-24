const FactCard = ({ title, text }) => {
    return (
      <>
          <div className="w-1/2 h-3/4 m-2 bg-white border-2 rounded-xl border-gray-300 p-3 shadow-lg lg:w-2/3 lg:h-4/5">
            <div id="header" class="flex items-center mb-2">
              <h4 className="font-bold text-blue-600">{title}</h4>
            </div>
            <div className="flex flex-wrap h-1/2 overflow-y-auto">
              <q className="italic text-gray-600">
                {text}
              </q>
            </div>
          </div>
      </>
    );
  };
  
  export default FactCard;
  