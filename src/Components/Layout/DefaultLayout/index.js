import Header from "./Header";
import Sidebar from "./Sidebar";
import './DefaultLayout.scss'

function DefaultLayout({children}) {
    return ( 
        <div className="wrapper">
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout;