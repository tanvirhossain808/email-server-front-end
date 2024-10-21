/* eslint-disable react/prop-types */
const ListsBtn = ({ setSeeLists, text }) => {
    return (
        <div className="mt-10 flex items-center justify-center">
            <button
                onClick={() => setSeeLists((prevState) => !prevState)}
                className=" bg-blue-600 hover:bg-blue-700 p-2 rounded-md text-white"
            >
                {text}
            </button>
        </div>
    )
}

export default ListsBtn
