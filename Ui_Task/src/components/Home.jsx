import { useNavigate } from "react-router-dom";


function Home() {
    const showAnimation = true;

    const navigate = useNavigate()

    const handleButon=()=>{
        navigate('/')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {showAnimation && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-75 flex items-center justify-center z-50">
                    <div className="flex flex-col items-center">
                        <svg
                            className="h-24 w-24 text-green-500 animate-tick mb-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 2a8 8 0 015.657 13.657l-7.07 7.072a1 1 0 01-1.414 0l-7.071-7.072A8 8 0 1110 2zm-1.414 12.243l5.657-5.657a.5.5 0 00-.707-.707l-4.95 4.95-1.414-1.414a.5.5 0 00-.707.707l2.121 2.121a.5.5 0 00.708 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <div className="text-green-500 font-bold text-xl mb-4">Online course form successfully submitted</div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleButon}>Home Page</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
