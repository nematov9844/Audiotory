import { Grid, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useAxios } from "../hooks/useAxios";

export default function Selector() {
    const [data,setData] = useState([])
    const [popular,setPopular] = useState([])
    const { getData } = useAxios()
    useEffect(()=>{
        getData("category").then(res => setData(res.data))
        getData("popular").then(res => setPopular(res.data))
    },[])
    return (
        <Box sx={{
            maxWidth: "1440px", width: '90%',margin: "50px auto 0 auto"
        }}>
            <Box sx={{ display: "flex",flexDirection:{xs:"column" ,md:"row"},gap:"20px" ,justifyContent: "start", alignItems: "center", marginBottom: "20px" }}>
                <Typography sx={{fontSize:"34px",lineHeight:"36.77px",fontWeight:500,color:"white"}}>Новинки</Typography>
                <Typography sx={{fontSize:"34px",lineHeight:"36.77px",fontWeight:500,color:"rgba(236, 143, 50, 1)"}}>Популярное</Typography>
                <Typography sx={{fontSize:"34px",lineHeight:"36.77px",fontWeight:500,color:"rgba(236,143,50,1)"}}>Выбор редакции</Typography>
            </Box>
            <Grid container spacing={3}>
                {data?.map((item) => (
                    <Grid item xs={12} sm={4} md={3} lg={2.4}  key={item.id}>
                        <Card  sx={{ height: "340px", width:{md:"210px"}, margin:"0 auto" ,bgcolor:"transparent",boxShadow:"0 0 2px grey", borderRadius:"10px"} }>
                            <CardMedia
                                component="img"
                                height="213"
                                width={"100%"}
                                image={item.img}
                                alt={item.title}
                                sx={{borderRadius:"10px"}}
                            />
                            <CardContent>
                                <Typography variant="cardTitle"   sx={{
                            fontSize: { sm: "12px", md: "14px", lg: "16px" },
                            lineHeight: { xs: "36px", sm: "48px", md: "60px" },
                        }} component="div">
                                    {item.author}
                                </Typography>
                                <Typography  variant="cardDesc"   sx={{
                            fontSize: {  sm: "16px", md: "18px", lg: "21px" },
                            lineHeight: { xs: "36px", sm: "48px", md: "60px" },
                        }}>
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                {popular?.map((item) => (
                    <Grid item xs={12} sm={4} md={3} lg={2.4}  key={item.id}>
                        <Card  sx={{ height: "340px", width:{md:"210px"}, margin:"0 auto" ,bgcolor:"transparent",boxShadow:"0 0 2px grey", borderRadius:"10px"} }>
                            <CardMedia
                                component="img"
                                height="213"
                                width={"100%"}
                                image={item.img}
                                alt={item.title}
                                sx={{borderRadius:"10px"}}
                            />
                            <CardContent>
                                <Typography variant="cardTitle"   sx={{
                            fontSize: { sm: "12px", md: "14px", lg: "16px" },
                            lineHeight: { xs: "36px", sm: "48px", md: "60px" },
                        }} component="div">
                                    {item.author}
                                </Typography>
                                <Typography  variant="cardDesc"   sx={{
                            fontSize: {  sm: "16px", md: "18px", lg: "21px" },
                            lineHeight: { xs: "36px", sm: "48px", md: "60px" },
                        }}>
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box >
    );
}
