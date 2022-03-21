import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <p>Umich Student Network</p>
            <div>
                <Link to="/login">
                    <button variant="outlined">
                        Login
                    </button>
                </Link>
            </div>
            <div>
                <Link to="/createaccount">
                    <button variant="outlined">
                        Create Account
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;