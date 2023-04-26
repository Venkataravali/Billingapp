import { Link } from "react-router-dom";

const Publicheader = () =>{

  const logout = () => {
    localStorage.clear();
    window.location.reload();
   }

    return(
        <section>
      
      <nav className="navbar navbar-expand-lg bg-dark p-3 sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand text-white " href="#"><i className="fa fa-lg"></i>My Billing</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">
                
                <li className="nav-item ps-4">
                  <Link className="nav-link text-white" to="/"><i className="fa fa-home m-1"></i>Home</Link>
                </li>
                
                <li className="nav-item ps-4">
                  <Link className="nav-link text-white" to="/manageproduct"><i className="fa fa-headset m-1"></i>Manage Product</Link>
                </li>
                
                <li className="nav-item ps-4">
                  <Link className="nav-link text-white" to="/registration"><i className="fa fa-plus m-1"></i>New Registration </Link>
                </li>
        
                <li className="nav-item ps-4">
                  <Link className="nav-link text-white" to="/bill"><i className="fa fa-table m-1"></i>Manage Bill</Link>
                </li>
                <li className="nav-item ps-4">
                  <Link className="nav-link text-white" to="/edit"><i className="fa fa-edit m-1"></i>Edit</Link>
                </li>

                <li className="nav-item ps-4">
                  <Link className="nav-link text-danger" onClick={logout}><i className="fa fa-power-off m-1"></i>Admin Logout</Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
</section>
)
}

export default Publicheader;

//links added in left 