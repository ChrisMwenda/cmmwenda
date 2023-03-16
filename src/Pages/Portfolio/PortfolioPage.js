import "./Portfolio.css"
import {BsCodeSlash} from "react-icons/bs"
import {RiPenNibFill} from "react-icons/ri"
import { useNavigate } from "react-router-dom"

function PortfolioPage() {
    const navigate = useNavigate();
    const toProjects= ()=>{
        navigate("/projects");
    }

    const toWriting= ()=>{
        navigate("/writing");
    }
    return ( 
        <div className="container main-box">
            <div className="row port-row" >
                <button onClick={toWriting} className="portfolio-card">
                <div className="col">
                     Writing Portfolio <br />
                     <RiPenNibFill />
                </div>
                </button>
                <button onClick={toProjects} className="portfolio-card">
                <div className="col">
                    Projects Portfolio <br/>
                    <BsCodeSlash />
                </div>
                </button>
            </div>
        </div>
     );
}

export default PortfolioPage;