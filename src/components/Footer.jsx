import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: "transparent",
                color: "white",
                padding: "40px 5%",
                maxWidth: "1440px",
                margin: "0 auto",
                borderTop: "1px solid #333",
            }}
        >
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
                    gap: "20px",
                }}
            >
                {/* Left Title */}
                <Box>
                    <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{ fontSize: "20px", marginBottom: "10px" }}
                    >
                        АУДИТЕРИЯ
                    </Typography>
                </Box>

                {/* Жанры Section */}
                <Box>
                    <Typography
                        variant="h6"
                        sx={{ fontSize: "18px", fontWeight: "600", marginBottom: "12px" }}
                    >
                        Жанры
                    </Typography>
                    <Link href="#" underline="none" color="gray" display="block" mb={1}>
                        Нонфикш
                    </Link>
                    <Link href="#" underline="none" color="gray" display="block" mb={1}>
                        Психология
                    </Link>
                    <Link href="#" underline="none" color="gray" display="block" mb={1}>
                        Бизнес
                    </Link>
                    <Link href="#" underline="none" color="gray" display="block" mb={1}>
                        Финансы
                    </Link>
                    <Link href="#" underline="none" color="gray" display="block">
                        Все жанры
                    </Link>
                </Box>

                {/* Категории Section */}
                <Box>
                    <Typography
                        variant="h6"
                        sx={{ fontSize: "18px", fontWeight: "600", marginBottom: "12px" }}
                    >
                        Категории
                    </Typography>
                    <Link href="#" underline="none" color="gray" display="block" mb={1}>
                        Популярное
                    </Link>
                    <Link href="#" underline="none" color="gray" display="block" mb={1}>
                        Новинки
                    </Link>
                    <Link href="#" underline="none" color="gray" display="block">
                        Выбор редакции
                    </Link>
                </Box>

                {/* Разделы Section */}
                <Box>
                    <Typography
                        variant="h6"
                        sx={{ fontSize: "18px", fontWeight: "600", marginBottom: "12px" }}
                    >
                        Разделы
                    </Typography>
                    <Link href="#" underline="none" color="gray" display="block" mb={1}>
                        Как купить
                    </Link>
                    <Link href="#" underline="none" color="gray" display="block" mb={1}>
                        Часто задаваемые вопросы
                    </Link>
                    <Link href="#" underline="none" color="gray" display="block" mb={1}>
                        Сотрудничество
                    </Link>
                    <Link href="#" underline="none" color="gray" display="block">
                        Контакты
                    </Link>
                </Box>
            </Box>

            {/* Bottom Section */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    marginTop: "30px",
                    borderTop: "1px solid #333",
                    paddingTop: "20px",
                }}
            >
                <Typography sx={{ fontSize: "14px", color: "gray" }}>
                    © 2022, «Аудитерия». Все права защищены.
                </Typography>
                <Box sx={{ display: "flex", gap: "20px" }}>
                    <Link href="#" underline="none" color="gray" sx={{ fontSize: "14px" }}>
                        Политика конфиденциальности
                    </Link>
                    <Link href="#" underline="none" color="gray" sx={{ fontSize: "14px" }}>
                        Лицензионное соглашение
                    </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>VISA</Typography>
                    <Box
                        sx={{
                            width: "20px",
                            height: "20px",
                            backgroundColor: "gray",
                            borderRadius: "50%",
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}
