import AzureImg from "../assets/azure.png";
import BoisImg from "../assets/bois.png";
import CoeerImg from "../assets/coeer.png";
import EclatImg from "../assets/eclat.png";
import EtoileImg from "../assets/etoile.png";
import FleurImg from "../assets/fleur.png";
import JardinImg from "../assets/jardin.png";
import LuneImg from "../assets/lune.png";

export default function AdminDashboard() {
    return (
        <div className="admin-dashboard-container">
            <div className="admin-dashboard-content">
                <div className="products-box">

                    <div className="azure-fragrance-div">
                        <img className="azure-fragrance" src={AzureImg} alt="Azure fragrance" />
                        <div className="edit-btn">Edit</div>
                        <div className="delete-btn">Delete</div>
                    </div>

                    <div className="bois-fragrance-div">
                        <img className="bois-fragrance" src={BoisImg} alt="Bois fragrance" />
                        <div className="edit-btn">Edit</div>
                        <div className="delete-btn">Delete</div>
                    </div>

                    <div className="coeer-fragrance-div">
                        <img className="coeer-fragrance" src={CoeerImg} alt="Coeer fragrance" />
                        <div className="edit-btn">Edit</div>
                        <div className="delete-btn">Delete</div>
                    </div>

                    <div className="eclat-fragrance-div">
                        <img className="eclat-fragrance" src={EclatImg} alt="Eclat fragrance" />
                        <div className="edit-btn">Edit</div>
                        <div className="delete-btn">Delete</div>
                    </div>

                    <div className="etoile-fragrance-div">
                        <img className="etoile-fragrance" src={EtoileImg} alt="Etoile fragrance" />
                        <div className="edit-btn">Edit</div>
                        <div className="delete-btn">Delete</div>
                    </div>

                    <div className="fleur-fragrance-div">
                        <img className="fleur-fragrance" src={FleurImg} alt="Fleurfragrance" />
                        <div className="edit-btn">Edit</div>
                        <div className="delete-btn">Delete</div>
                    </div>

                    <div className="jardin-fragrance-div">
                        <img className="jardin-fragrance" src={JardinImg} alt="Jardin fragrance" />
                        <div className="edit-btn">Edit</div>
                        <div className="delete-btn">Delete</div>
                    </div>

                    <div className="lune-fragrance-div">
                        <img className="lune-fragrance" src={LuneImg} alt="Lune fragrance" />
                        <div className="edit-btn">Edit</div>
                        <div className="delete-btn">Delete</div>
                    </div>
                </div>
            </div>
        </div>
    )
}