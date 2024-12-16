import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Box, Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
const SliderCard = ({ items }) => {
  const [swiperRef, setSwiperRef] = React.useState(null);
  return (
    <Box sx={{ width: '100%', maxWidth: '1440px', margin: '0 auto', marginTop: '20px', height: '400px', position: 'relative' }}>
      <Swiper
        onSwiper={setSwiperRef}
        spaceBetween={50}
        slidesPerView={4}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        loop={true}
        style={{ position: 'relative' }}
      >
        {items?.map((item, index) => (
          <SwiperSlide key={index}>
            <Card style={{ height: '260px' }}>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt={item.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {item.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev swiper-button-custom" style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }}>
        <IconButton onClick={() => swiperRef?.slidePrev()}>
          <ArrowBackIos />
        </IconButton>
      </div>
      <div className="swiper-button-next swiper-button-custom" style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
        <IconButton onClick={() => swiperRef?.slideNext()}>
          <ArrowForwardIos />
        </IconButton>
      </div>
    </Box>
  );
};

export default SliderCard;
