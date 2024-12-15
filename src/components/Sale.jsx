import { Box, Button, Typography } from "@mui/material";
import SaleImg from "../assets/sale.png";

export default function Sale() {
    return (
        <Box
            sx={{
                maxWidth: "1440px",
                width: "90%",
                margin: "50px auto",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" }, // Responsiv moslashuv
                alignItems: "center",
                gap: "20px",
                background: "linear-gradient(90deg,rgba(0, 0, 0, 0.31),rgba(255, 255, 255, 0.2))",
                padding: "20px",
                borderRadius: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            }}
        >
            {/* Rasm qismi */}
            <Box
                component="img"
                src={SaleImg}
                alt="Sale Image"
                sx={{
                    width: { xs: "100%", sm: "200px" },
                    height: "auto",
                    borderRadius: "12px",
                    objectFit: "contain",
                }}
            />

            {/* Matn va tugma qismi */}
            <Box sx={{ flex: 1, textAlign: { xs: "center", sm: "left" } }}>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: "bold",
                        color: "white",
                        marginBottom: "10px",
                    }}
                >
                    Ежедневное преимущество!
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: "grey",
                        marginBottom: "20px",
                        lineHeight: "1.6",
                    }}
                >
                    Даже полтора часа в день (в среднем столько занимает время на дорогу в мегаполисе на работу и домой), посвященных аудиочтению!
                </Typography>
                <Button
                    variant="buttonHeader2"
                    sx={{
                        backgroundColor: "#FF8C00",
                        color: "#fff",
                        fontWeight: "bold",
                        textTransform: "none",
                        "&:hover": {
                            backgroundColor: "#e67e00",
                        },
                    }}
                >
                    Получить скидку
                </Button>
            </Box>
        </Box>
    );
}
