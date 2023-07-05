import {useAppContext} from "./Navbar.jsx";

const UserContainer = () => {
    const {user, setUser } = useAppContext()

    if (!user) {
        return <p>Login, please</p>
    }


    return (
        <div className="user-container" >
            <h5>Hello there, {user.name}!</h5>
            <button className="btn" onClick={() => setUser(null)}>
                Logout
            </button>
        </div>
    );
};

export default UserContainer;