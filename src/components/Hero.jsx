import { Box, Button, Typography } from "@mui/material";

export default function Hero() {
    return (
        <Box
            sx={{
                display: "flex",
                width: "90%",
                maxWidth:"1440px",
                margin:"0 auto",
                height: "80vh",
                maxHeight: "600px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: { xs: "right", md: "center" },
                backgroundImage:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)), url(https://s3-alpha-sig.figma.com/img/6258/f4f8/dcb61ba869da9f9101516f9d2ac44259?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1TZlDh4kxeF4A6iYWND1zzH2aD6sZ9CadikziT2mzQ9OnIscnU5LMd5OGqAY9r933vv53gyef64yNaptyVpr6fBpJ0amnHcFYzNo~i9CFQ9mFlY2DgiuHtcbBl00wxr0wropcLxS1H3R4GEMlawPTPgiHlxOW7ZPQ4wRk9Uo~Pmfv5Vc-ndZ07Qb3f00x9jfr9cDXZm5DqhkUnffIusUO9t1VUh2jmsLu5jq4~uyY3q6pZo6p4ESH4WZt-W3EhmgEfnRI3EpjTxm15gzTqhQWen4VoCEg~qP1DoVqhm9vhlhazoDBEJ0yHiwe5KWwCRaPoZPr5DvpwcFuCOU4Zolg__)",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1440px",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: "20px",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", md: "70%" },
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        alignItems: { xs: "center", md: "start" },
                    }}
                >
                    <Typography
                        variant="heroTitle"
                        sx={{
                            fontSize: { xs: "28px", sm: "36px", md: "42px", lg: "62px" },
                            fontWeight: 700,
                            lineHeight: { xs: "36px", sm: "48px", md: "60px" },
                        }}
                    >
                        Книги, которые вам хочется слушать
                    </Typography>
                    <Typography
                        variant="heroDesc"
                        sx={{
                            fontSize: { xs: "16px", sm: "18px", md: "20px" },
                            lineHeight: { xs: "24px", sm: "28px", md: "32px" },
                        }}
                    >
                        Лучшая подборка аудиокниг по психологиии саморазвитию за все годы
                        издательства...
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: { xs: "100%", md: "50%" },
                        display: "flex",
                        justifyContent: { xs: "center", md: "end" },
                    }}
                >
                    <Button
                        variant="buttonHeader2"
                        sx={{ width: "180px", padding: "10px 20px" }}
                    >
                        Выбрать книгу
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
