import Home from "./views/Home";
import Profile from "./views/Profile";
import Post from "./views/Post";
import Inventory from "./views/Inventory";
import PostSingle from "./views/PostSingle";
import Cars from "./views/Cars";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthContext } from './contexts/AuthProvider';
import { useContext } from 'react';

function App() {
    const { login, logout, user } = useContext(AuthContext)

    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5 bg-opacity-75">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Car Inventory</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to="/inventory">Browse</Link>
                            <Link className="nav-link" to="/car">Showcase</Link>
                        </ul>
                        <div className="d-flex">
                            {
                                (user.loggedIn) ?
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <Link className="nav-link" to="/createpost">Post</Link>
                                        <Link className="nav-link" to="/profile">Profile</Link>
                                        <button onClick={logout} className="btn btn-primary">Logout</button>
                                    </ul>
                                    :
                                    <button onClick={login} className="btn btn-primary">Login</button>
                            }
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/post">
                        <Route path=":id" element={<PostSingle />} />
                    </Route>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/createpost" element={<Post />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/car" element={<Cars />} />
                    {/* <Route path="/car">
                        <Route path=":id" element={<Cars />} />
                    </Route> */}
                </Routes>
            </div>
        </BrowserRouter >
    );
}

export default App;
