import User from '../components/User'
import Navbar from '../components/Navbar'
function Users() {
    return ( 
        <div className="px-12 bg-slate-900 min-h-screen ">
            <Navbar />
            <main>
                <User />
            </main>
            
        </div>
     );
}

export default Users;