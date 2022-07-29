const Sidebar = ({sidebar}) => {
    return (
        <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
            <li>
                <i className="ri-home-2-line"></i>
                <p>
                    Home
                </p>
            </li>
            <li>
                <i className="ri-shopping-cart-line"></i>
                <p>
                    Products
                </p>
            </li>
            <li>
                <i className="ri-newspaper-line"></i>
                <p>
                    Carerr
                </p>
            </li>
            <li>
                <i className="ri-phone-line"></i>
                <p>
                    Contact Us
                </p>
            </li>
            <li>
                <i className="ri-information-line"></i>
                <p>
                    About Us
                </p>
            </li>
        </div>
    )
}

export default Sidebar