import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import './App.css'
import Box from "@mui/material/Box";

function App() {

  return (
    <div className="App">
      <>
      <Box sx={{
        width: '100%',
        borderBottom: '3px solid lightgrey',
      }}>
        <Navbar />
      </Box>
        <Sidebar />
      </>
    </div>
  )
}

export default App
