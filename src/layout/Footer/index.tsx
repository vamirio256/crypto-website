import { Link } from "react-router-dom";
import background from "../../assets/footer-background.svg";
import logo from "../../assets/images/logo.svg";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center text-_light_sub">
            <div className="bg-footer-background bg-_blue text-white w-full flex justify-evenly items-center py-[2.125rem]">
                <div>
                    <h3 className="text-[2rem] font-bold">Earn up to $25 worth of cryptp</h3>
                    <span>Discover how specific cryptocurrencies work</span>
                    <span>— And get a bit of each crypto to try out for yourself.</span>
                </div>
                <button className="px-8 py-4 bg-white text-_light_text font-bold rounded-full">Create Account</button>
            </div>
            <div className="flex justify-evenly items-center w-full my-12">
                <div className="flex flex-col justify-center">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo Website" />
                        <h3>Rockie</h3>
                    </div>
                    <h4>Let's talk!</h4>
                    <p>+12 345 678 9101</p>
                    <p>Info.Avitex@Gmail.com</p>
                    <p>Cecilia Chapman 711-2880 Nulla St.</p>
                    <p>Mankato Mississippi 96522</p>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <h4 className="font-bold text-_light_text">PRODUCTS</h4>
                        <Link to="/login">Spot</Link>
                        <Link to="/login">Inverse Perpetual</Link>
                        <Link to="/login">USDT Perpetual</Link>
                        <Link to="/login">Exchange</Link>
                        <Link to="/login">Launchpad</Link>
                        <Link to="/login">Binance Pay</Link>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-bold text-_light_text">SERIVICES</h4>
                        <Link to="/login">Buy Crypto</Link>
                        <Link to="/login">Markets</Link>
                        <Link to="/login">Tranding Fee</Link>
                        <Link to="/login">Affiliate Program</Link>
                        <Link to="/login">Referral Program</Link>
                        <Link to="/login">API</Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-[2rem] font-bold text-_light_text">Newletters</h3>
                    <p>Subscribe Our Newsletter To Get More</p>
                    <p>Free Design Course And Resource.</p>
                    <form>
                        <input className="border-2 border-solid border-_light_border rounded-full py-3 pl-5 pr-[6.9375rem]"
                            type="text"
                            placeholder="Enter your email">
                        </input>
                        <input className="bg-_blue py-[0.625rem] px-6 text-white rounded-full ml-[-6.5625rem]"
                            type="submit"
                            value={"Submit"} />
                    </form>
                    <div>

                    </div>
                </div>
            </div>
            <div className="text-_light_sub">
                <span>@2022 Rockie.com. </span>
                <span>All Rights Reserved. </span>
                <span>Term Of Service | Privacy Term</span>
            </div>
        </footer>
    )
}

export default Footer;