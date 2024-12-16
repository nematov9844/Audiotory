import { Grid, Card, CardContent, CardMedia, Typography, Box, Button } from "@mui/material";

export default function Cards({ data, title, btn }) {

    return (
        <Box sx={{
            maxWidth: "1440px", width: '90%', margin: "20px auto"
        }}>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "20px", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <Typography sx={{ fontSize: "34px", lineHeight: "36.77px", fontWeight: 500, color: "white" }}>{title}</Typography>
                <Button variant="buttonHeader2">{btn}</Button>
            </Box>
            <Grid container spacing={3}>
                {data?.map((item) => (
                    <Grid item xs={12} sm={4} md={3} lg={2.4} key={item.id}>
                        <Card sx={{ height: "340px", width: { md: "210px" }, margin: "0 auto", bgcolor: "transparent", boxShadow: "0 0 2px grey", borderRadius: "10px" }}>
                            <CardMedia
                                component="img"
                                height="213"
                                width={"100%"}
                                image={item.img}
                                alt={item.title}
                                sx={{ borderRadius: "10px" }}
                            />
                            <CardContent>
                                <Typography variant="cardTitle" sx={{
                                    fontSize: { sm: "12px", md: "14px", lg: "16px" },
                                    lineHeight: { xs: "36px", sm: "48px", md: "60px" },
                                }} component="div">
                                    {item.author}
                                </Typography>
                                <Typography variant="cardDesc" sx={{
                                    fontSize: { sm: "16px", md: "18px", lg: "21px" },
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
