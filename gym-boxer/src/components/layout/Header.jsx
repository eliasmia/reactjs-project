import { NavLink } from "react-router-dom";

const Header = () => {
  return (
   // ================= Header Section ==================
    <header className="header">
        <div className="header-top">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="top-contact">
                            <ul>
                                <li><a href="#"><i className="fas fa-envelope mr-1"></i> example@gmail.com</a></li>
                                <li><a href="#"><i className="fas fa-phone-alt mr-1"></i> (016) 269-039-999</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6 col-xl-6 col-lg-6 col-md-6">
                        <div className="top-social">
                            <ul>
                                <li><a href="#" title=""><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" title=""><i className="fab fa-google-plus-g"></i></a></li>
                                <li><a href="#" title=""><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#" title=""><i className="fab fa-dribbble"></i></a></li>
                                <li><a href="#" title=""><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#" title=""><i className="fab fa-tumblr"></i></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        {/* End Header Top */}
        
        <div className="navbar-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 mob-p-0">
                        <nav className="main-navbar p-0">
                            <div className="logo">
                                <a className="navbar-brand " href="index.html"></a>
                            </div>
                            <div className="navigation">
                                <ul id="onepage-nav" className="mainnav">
                                    <li><NavLink className="scroll active" to="/">Home</NavLink></li>
                                    <li><NavLink className="scroll" to="#about">About</NavLink></li>
                                    <li><NavLink className="scroll" to="#trainer">Trainer</NavLink></li>
                                    <li><NavLink className="scroll" to="#schedules">schedules</NavLink></li>
                                    <li><NavLink className="scroll" to="#pricing">Pricing</NavLink></li>
                                    <li><NavLink className="scroll" to="#gallery_section">Gallery</NavLink></li>
                                    <li><NavLink className="scroll" to="#blog">Blog <i className="fas fa-chevron-down fa-xs"></i></NavLink>
                                        <ul className="sub-menu">
                                            <li><NavLink className="" to="blog.html">Blogs List</NavLink></li>
                                            <li><NavLink className="" to="blog-right-sidebar.html">Blog Right Sidebar</NavLink></li>
                                            <li><NavLink className="" to="blog-left-sidebar.html">Blog Left Sidebar</NavLink></li>
                                            <li><NavLink className="" to="blog-single.html">Blogs Single</NavLink></li>
                                        </ul>
                                    </li>
                                    <li><NavLink className="scroll" to="#contact">Contact</NavLink></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>                   
            </div>
        </div>
        {/* End Navbar Wrapper */}
    </header>
  );
};

export default Header;