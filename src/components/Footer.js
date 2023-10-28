import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import { Facebook, Instagram, Twitter, LinkedIn, YouTube, LocationOn } from '@mui/icons-material';

function Footer() {

    return (
        <footer>
            <Box sx={{ backgroundColor: "#034f84", pt: 7, pb: 7, }}>
                <Container maxWidth="lg">
                    <Grid container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={12} sm={3}>
                            <Link to='/'>
                                <Typography variant="h3" color="#7BD8C0" gutterBottom>
                                    BİLETAL
                                </Typography>
                            </Link>
                        </Grid>

                        <Divider orientation="vertical" sx={{ backgroundColor: "#7BD8C0" }} flexItem />

                        <Grid item xs={12} sm={8}>
                            <Typography variant="subtitle1" color="#fff" gutterBottom>
                                Bubilet, organizatörler tarafından düzenlenen farklı
                                kategorilerdeki etkinlikleri, dijital medya platformlarını
                                kullanarak milyonlara ulaştıran yeni nesil online bilet satış
                                sitesidir.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{ backgroundColor: "#7BD8C0", mt: 5, mb: 5 }} />

                    <Grid container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        rowSpacing={{ xs: 5 }}
                    >
                        <Grid item xs={12} sm={3}>
                            <Typography variant="h6" color="#7BD8C0" gutterBottom>
                                KURUMSAL
                            </Typography>
                            <Typography variant="body2" color="#fff" gutterBottom>
                                HAKKIMIZDA
                            </Typography>
                            <Typography variant="body2" color="#fff" gutterBottom>
                                GİZLİLİK
                            </Typography>
                            <Typography variant="body2" color="#fff" gutterBottom>
                                KULLANICI SÖZLEŞMESİ
                            </Typography>
                            <Typography variant="body2" color="#fff" gutterBottom>
                                KULLANIM KOŞULLARI
                            </Typography>
                            <Typography variant="body2" color="#fff" gutterBottom>
                                KVKK
                            </Typography>
                            <Typography variant="body2" color="#fff" gutterBottom>
                                BUBİLET PANEL
                            </Typography>
                            <Typography variant="body2" color="#fff" gutterBottom>
                                İLETİŞİM
                            </Typography>
                            <Typography variant="body2" color="#fff" gutterBottom>
                                ÇEREZ POLİTİKASI
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} >
                            <Typography variant="h6" color="#7BD8C0" gutterBottom>
                                KATEGORİLER
                            </Typography>

                            <Link to='/concert'>
                                <Typography variant="body2" color="#fff" gutterBottom>
                                    KONSER
                                </Typography>
                            </Link>
                            <Link to='/theatre'>
                                <Typography variant="body2" color="#fff" gutterBottom>
                                    TİYATRO
                                </Typography>
                            </Link>
                            <Link to='/festival'>
                                <Typography variant="body2" color="#fff" gutterBottom>
                                    FESTİVAL
                                </Typography>
                            </Link>
                            <Link to='/standup'>
                                <Typography variant="body2" color="#fff" gutterBottom>
                                    STAND UP
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography variant="h6" color="#7BD8C0" gutterBottom>
                                FOLLOW US
                            </Typography>
                            <Link to="https://www.facebook.com/">
                                <Facebook sx={{ fontSize: 40, color: "#fff" }} />
                            </Link>
                            <Link to="https://www.instagram.com/">
                                <Instagram sx={{ fontSize: 40, color: "#fff" }} />
                            </Link>
                            <Link to="https://www.twitter.com/">
                                <Twitter sx={{ fontSize: 40, color: "#fff" }} />
                            </Link>
                            <Link to="https://www.youtube.com/">
                                <YouTube sx={{ fontSize: 40, color: "#fff" }} />
                            </Link>
                            <Link to="https://www.linkedin.com/">
                                <LinkedIn sx={{ fontSize: 40, color: "#fff" }} />
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;