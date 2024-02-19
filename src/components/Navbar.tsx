import '../styles/Navbar.scss';
import { MenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar__elements">
                <span className="navbar__elements--right">Home</span>
                <span  className="navbar__elements--right">
                    <MenuComponent items = {menuItems} showItemOnClick={true} />
                </span>
            </div>
        </div>
    )
}

const menuItems: MenuItemModel[] = [
    {
        items: [
            { text: 'logout' }
        ],
        text: 'Login'
    },
]



export default Navbar