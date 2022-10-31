import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
    return ( 
        <div className="font-['Hind_Madurai'] bg-slate-900 h-screen text-gray-200 px-10 md:px-24 py-6">
            <Navbar />
            <main className="h-[75vh] flex flex-col items-center justify-center md:items-start">
                <h1 className="text-5xl md:text-6xl font-semibold my-6 md:max-w-4xl">You mean you just want users? Like, just actual users?</h1>
                <p className="text-xl md:text-2xl my-5 max-w-3xl">We're widely known for the amount of users we have currently using our software. You can have access to all of them... for free</p>
                <Link to="/users" className="transition-all border-emerald-600 border-2 text-emerald-600 uppercase px-5 py-3 my-5 rounded hover:outline-dashed hover:outline-offset-4">view our users</Link>
            </main>
        </div>
     );
}

export default Home;