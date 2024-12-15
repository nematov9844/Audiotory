import { Box, Typography } from "@mui/material";
import Card1 from '../assets/hard1.png';
import Card2 from '../assets/hard2.png';
import Card3 from '../assets/hard3.png';
import Card4 from '../assets/hard4.png';

export default function CardInfo() {
    const data = [
        {
            id: 1,
            img: Card1,
            title: "Все лучшие новинки нон фикшн книг и образовательные саммари всегда под рукой.",
        },
        {
            id: 2,
            img: Card2,
            title: "Аудиокнига по дороге на работу и обратно, подарит вам почти месяц чтения за год",
        },
        {
            id: 3,
            img: Card3,
            title: "Аудиокниги позволяют «читать» несколько часов в день без отрыва от текущих дел.",
        },
        {
            id: 4,
            img: Card4,
            title: "Лучшие книги и аудиоспектакли в живом исполнении",
        }
    ];

    return (
        <Box sx={{
            maxWidth: "1440px",
            width: "90%",
            margin: "50px auto",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: "20px"
        }}>
            {data.map((item) => (
                <Box
                    key={item.id}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        backgroundColor: "transparent",
                        borderRadius: "12px",
                        padding: "20px",
                        color: "white",
                        boxShadow: "0 0px 3px rgba(255, 255, 255, 0.8)",
                        transition: "transform 0.3s ease",
                        cursor: "pointer",
                        '&:hover': {
                            transform: "translateY(-5px)",
                        },
                    }}
                >
                    <Box
                        component="img"
                        src={item.img}
                        alt="Icon"
                        sx={{
                            width: "50px",
                            height: "50px",
                            objectFit: "contain",
                        }}
                    />
                    <Typography
                        fontFamily={"Ubuntu, sans-serif"}
                        fontSize={{ xs: "14px", sm: "18px" }}
                        fontWeight={500}
                        lineHeight={"24px"}
                    >
                        {item.title}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}
