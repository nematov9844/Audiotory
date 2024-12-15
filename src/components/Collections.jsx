import { Box, Grid, Typography } from '@mui/material';

export default function Collections() {
    return (
        <Box width="90%" maxWidth="1440px" margin="0px auto" marginTop={'50px'}>
            <Box sx={{ display: 'flex', justifyContent: 'start', marginBottom: '20px' }}>
                <Typography variant="h4" color='white'>Подборки</Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box
                        sx={{
                            backgroundImage:
                                'url(https://s3-alpha-sig.figma.com/img/83e1/cf2c/f5678d6117a30a55b1866fdf32823dbe?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k5xXCgqgup0fGv-7osROzuRrybVeW0obs5qMomK0Rt4ElDUmrbYar5uG2HCMQ05kbi5ZHHvSTiT8KW1996rVh01DDbQzT~q-jxMISnQHn2PMv7n5wfAU~~Ph8ikN4Zi0MFf9uZOoBNRhqyrGFQNZv-jUo1e8rkVZoKFPwqJOpxbMqolt3Y13FqWXVnoWHGt4iQ~qZqmXFAw7AiRSxz3wpKfVKQrpvQYK4gWzhpPpcchdXy6ZUDIHhBACdB5dyFkY8TwdPRlOf~A8PeVBgAljs2Ru3WRoDnbV37ROYAzQUrF8k~mpwjgvKvmHqWWa65bfow8Vva6QK5L35cJMM6TDzQ__)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            padding: "20px",
                            height: '163px',
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'end',
                            justifyContent: 'start',
                        }}
                    >
                        <Typography color="white" variant="h6">
                            В дороге
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box
                        sx={{
                            backgroundImage:
                                'url(https://s3-alpha-sig.figma.com/img/b8da/ce1a/690e7ed1c0112990a4b6cc123391c2ff?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZQ-GyCBfFn9teJfQSfcwur4alHw3kTab1O2Vwf88TspK6R8McRSGBg3cLJdRwf7fXt4sFvagS6OT6XH4G44XeWT2neHZDlxRmOjiqGzaKg1cU~fjDiVnQADUZcsypvIS1m1ykX7HH53ql5YQhg1gQshZgsKpVmUWro8x6fsidoY6S6kZW006K1o1-kuqqgDdj6hwyD~nibQPygN4rcP2dXvvG34PLQDdZ5kr0hSPSI~CP0Fsy57Tx7~cLWJMXTadHyyeor0X7EeNiygVxUwwV6mCfNeGvYmQ0-gkuLSH~iTO0rrPcWdCxlCZ3BBRevMF8pQBbay0aK4~j4M~JOeGiA__)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '163px',
                            borderRadius: '20px',
                            display: 'flex',
                            padding: "20px",
                            alignItems: 'end',
                            justifyContent: 'start',
                        }}
                    >
                        <Typography color="white" variant="h6">
                            Для отдыха
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box
                        sx={{
                            backgroundImage:
                                'url(https://s3-alpha-sig.figma.com/img/f0a9/6a60/b8179dc8d66fba6447ad1809f9acf539?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AeirYZWkxwHACIkTd26Y7gW4oq5z~jgxhcbRWpQJSh4bBdXxNzPUSueWKoPr3yy-5ErTCtnBVvsro4WoYFDvnuyEAcM0Oqm~Xx-ppPzPkWBr6O1hkQ5sWhtl9I8I3c-o9SUOC4-4uo2alMKG8LWYun44yqXLF7VaePs0GplTk26TBW9Of1jE17UhfYZ7zvpyQ9rvFye8kOjH~BDA47aEg5HyyK2s6QMuFoDthWcJih2hAkJIaUDKPUZUTMgbLBepb-edTdbl1wL79iQSFTP~HYBDEJqV0EI2PPaH4zwC8kYEiwimYErhB0NCGU6gXnTIotIKljzepxg9IoUc7R-paQ__)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '163px',
                            padding: "20px",
                            borderRadius: '20px',
                            display: 'flex',
                            alignItems: 'end',
                            justifyContent: 'start',
                        }}
                    >
                        <Typography color="white" variant="h6">
                            Для учебы
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Box
                        sx={{
                            backgroundImage:
                                'url(https://s3-alpha-sig.figma.com/img/2d99/cdb8/b198045609bd7e2db9fe28965704c44c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Kz6tiV1Ok7~-yUACIerJ~It7a0qieLimdDKp6m~Z~LEKoACznC8MPbl7wP-AsSGFQ0i1Ek0owd7lF1rWLFQEFBQyMac4UOhZ~QAycjlSKcPcsa3jgSs75ddNY2JcHd0Q12gbxff~vmGhU6757fzk8ENB450b6wXRwOLRudT0pQogiDnL00fIPymL8sGociO2qbPDdzxijemeoamVqV0Gz3d1CnWX6I0Mi~wQDs17glzCDixZHEPPs8LFNbCLb4agbJD2XqcLpJHmoOQQGnU9pDLBmim3regjNY8xAhbOu6TdvxF6TwJaB-HjXIP~I4ELDxIRKAxiUKwGM2dad7aWUw__)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '163px',
                            borderRadius: '20px',
                            display: 'flex',
                            padding: "20px",
                            alignItems: 'end',
                            justifyContent: 'start',
                        }}
                    >
                        <Typography color="white" variant="h6">
                            Для работы
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
