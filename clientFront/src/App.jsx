import {BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Home Page</h1>} />
                <Route path="/login" element={<h1>Login</h1>} />
                <Route path="/register" element={<h1>Register</h1>} />
                <Route path="/task" element={<h1>Tasks</h1>} />
                <Route path="/add-task" element={<h1>New Tasks</h1>} />
                <Route path="/tasks/:id" element={<h1>Browser Tasks</h1>} />
                <Route path="/profile" element={<h1>Profile</h1>} />

            </Routes>
        </BrowserRouter>
    )
}
export default App;