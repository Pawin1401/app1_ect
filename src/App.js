import Calender from "./class-components";
import { Content, Footer, Header } from "./func-components";
import React from 'react'

function App() {
  return (
   <>
    <Header/>
    <p><center><Calender/></center></p>
    <Content/>
    <Footer/>
   </>
  )
}
export default App;