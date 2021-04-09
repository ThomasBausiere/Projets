import LogoFb from "../components/Logo/LogoFb";
import LogoGoogle from "../components/Logo/LogoGoogle";
import LogoIn from "../components/Logo/LogoIn";
import LogoYtb from "../components/Logo/LogoYtb";

const Nav =()=>{
    return(
        
    <div className="navigation">
        <div className="logo1"><a title="Youtube" href="https://www.youtube.com" target="_blank"><LogoYtb/></a></div>
        <div className="logo1"><a title="Facebook" href="https://www.facebook.com" target="_blank"> <LogoFb/> </a></div>
        <div className="logo1"><a title="Google" href="https://www.google.com" target="_blank"> <LogoGoogle/></a></div>

    </div>
        
    );
};

export default Nav;