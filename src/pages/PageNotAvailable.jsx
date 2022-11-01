import { Link } from "react-router-dom";

function PageNotAvailable () {
    return ( 
        <div className="font-['Hind_Madurai'] px-12 bg-slate-900 flex flex-col items-center justify-center h-screen text-gray-400">
            <h1 className="text-gray-300 font-bold font-['Dosis'] text-9xl tracking-wide my-6">404</h1>
            <p className="max-w-xl text-center my-5">You got lost... I have no idea how the heck you got here, but you should go home as soon as possible. These streets a'int safe.</p>
            <Link to="/" className="transition-all border-emerald-600 border-2 text-emerald-600 uppercase px-5 py-3 my-2 rounded hover:bg-emerald-600 hover:text-gray-200 font-medium hover:font-['Dosis'] hover:outline-offset-4">take me home</Link>
        </div>
     );
}

export default PageNotAvailable ;