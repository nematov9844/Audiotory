import { Box } from "@mui/material";
import Netflix from "../assets/netflix.png";
import Amazon from "../assets/amazon.png";
import Avon from "../assets/avon.png";
import Dell from "../assets/dell.png";
import Auditeria from "../assets/auditeria.png";

export default function Brands() {
    const brandImages = [Netflix, Amazon, Avon, Dell, Auditeria];

    return (
        <Box
            sx={{
                maxWidth: "1440px",
                width: "90%",
                margin: "50px auto",
                display: "grid",
                gridTemplateColumns: {
                    xs: "1fr 1fr",
                    sm: "1fr 1fr 1fr",
                    md: "1fr 1fr 1fr 1fr", 
                    lg: "1fr 1fr 1fr 1fr 1fr" 
                },
                gap: "30px", 
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            {brandImages.map((image, index) => (
                <Box
                    key={index}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "100px",
                        borderRadius: "12px",
                        backgroundColor: "transparent",
                        boxShadow: "0 0px 6px rgba(255, 255, 255, 0.7)",
                        transition: "transform 0.3s ease",
                        "&:hover": {
                            transform: "scale(1.05)", 
                        },
                    }}
                >
                    <Box
                        component="img"
                        src={image}
                        alt={`Brand ${index}`}
                        sx={{
                            maxHeight: "60px",
                            maxWidth: "80%", 
                            objectFit: "contain",
                        }}
                    />
                </Box>
            ))}
        </Box>
    );
}
