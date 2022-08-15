import logo from "../../assets/images/logo.svg"
import { useLocation } from "react-router-dom";
import _ from "lodash";

const Header = () => {
    const location = useLocation();


    const capitalizeFirstLetter = (a: string) => {
        return _.trim(a);
    }
    return (
        <header>
            <div className="flex justify-between h-[50px] font-bold">
                <div className="flex justify-items-start">
                    <div className="flex">
                        <img src={logo} alt="Website Logo" />
                        <h3 className="text-2xl">Rockie</h3>
                    </div>
                    <nav className="header-nav">Homepage</nav>
                    <nav className="header-nav">Buy Crypto</nav>
                    <nav className="header-nav">Markets</nav>
                    <nav className="header-nav">Exchange</nav>
                    <nav className="header-nav">Spot</nav>
                    <nav className="header-nav">BITUSDT</nav>
                    <nav className="header-nav">Pages</nav>
                </div>
                <div className="flex">
                    <nav>Assets</nav>       
                    <nav>Orders & Trades</nav>
                    <nav>EN/USD</nav>
                    <button>Wallet</button>
                </div>
            </div>
            {location.pathname &&
                <div className="bg-_light_bg_sub flex justify-between items-center px-[16rem] py-14">
                    <h2 className="text-[2.5rem] font-bold">{_.capitalize(location.pathname.slice(1))}</h2>
                    <p className="text-_light_sub text-lg">Home / {_.capitalize(location.pathname.slice(1))}</p>
                </div>
            }
        </header>
    )
}

export default Header;