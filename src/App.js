import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Signin from "./pages/Signin"

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={'首頁'}/>
                <Route path="/signin" element={<Signin />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;