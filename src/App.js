import { Home, Newsdetail } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/newsdetail" element={<Newsdetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
