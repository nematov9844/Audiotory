import { Box } from '@mui/material'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Cards from './components/Cards'
import { useEffect, useState } from 'react'
import { useAxios } from './hooks/useAxios'
import Selector from './components/Selector'
import Collections from './components/Collections'
import CardInfo from './components/CardInfo'
import Brands from './components/Brands'
import Sale from './components/Sale'
import Footer from './components/Footer'
function App() {
  const [data,setData] = useState([])
  const [items,setItems] = useState([])
  const [value,setValue] = useState([])
  const { getData } = useAxios()
  useEffect(() => {
    getData("popular").then(res => setData(res.data))
    getData("new").then(res => setItems(res.data))
    getData("category").then(res => setValue(res.data))
  }, [])
  return (
    <Box sx={{ position: "relative" }}>
      <Box className="background" sx={{
        height:"100%",
        width: '100%',
        backgroundImage: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(https://s3-alpha-sig.figma.com/img/18f6/0071/a458d1b65fd57b9af219c67851928e99?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dL9l85ZEsyw50NjUPULOXSu92iUETtaHDgusn4XkZv~fkNuuu6goGP~hu1OdcQVTnvFtwpq9qBC61GZi0yXRcEaxhZ0G1yss5YK7BndXDu6-t385eMrRxRH4F5yyrG3b-wpb4Qtu-tYH-wC5wLXsc1-CGuDnOSzc-6T~XxxYGkvGx3~Cr6Bcg2TCtA71Oit37F~BN4FBsQr9-w2~zMOFdaFzcI4k5puHTe~Qc09nj9k3v1C9nHWbg0ddjMqcfcgfCJV~AtMm1s4vl9LH24XWzhlRf1a1NvEyndoxAVR8N1Jnt1eYpoDrXgSqON1Q161JIG0vJGuaABBVsKcSEMLjDw__)', // Foydalanuvchi rasm URL-si
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        // transform: 'rotate(-10deg)',
        zIndex: "-1",
        position: "absolute",
        top: "0px",
        left: "0"

      }}>

      </Box>
      <Header />
      <Hero />
      <Cards data={items} title={"Новинки "} btn={"Смотреть все"} />
      <Cards data={data} title={"Популярное"} btn={"Смотреть все"} />
      <Cards data={value} title={"Выбор редакции"} btn={"Смотреть все"} />
      <Selector/>
      <Collections/>
    <CardInfo/>
    <Brands/>
    <Sale/>
    <Footer/>
    </Box>
  )
}

export default App
