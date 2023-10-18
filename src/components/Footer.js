import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Divider from '@mui/material/Divider';
import { Facebook, Instagram, Twitter, LinkedIn, YouTube, LocationOn} from '@mui/icons-material';


  
function Footer() {

    return (
        <footer>
            <Box sx={{backgroundColor: "#343839", pt:7, pb:7,}}>
                <Container maxWidth="lg">
                    <Grid container 
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Grid item xs={12} sm={2}>
                            <Link to='home'>
                                <Typography variant="h3" color="#2ed87b" gutterBottom>
                                    BİLETAL
                                </Typography>
                            </Link>
                        </Grid>

                        <Divider orientation="vertical" sx={{backgroundColor: "#9d9d9d"}} flexItem/>

                        <Grid item xs={12} sm={8}>
                            <Typography variant="subtitle1" color="#9d9d9d" gutterBottom>
                                Bubilet, organizatörler tarafından düzenlenen farklı 
                                kategorilerdeki etkinlikleri, dijital medya platformlarını 
                                kullanarak milyonlara ulaştıran yeni nesil online bilet satış 
                                sitesidir.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Divider sx={{backgroundColor: "#9d9d9d", mt:5, mb:5}}/>

                    <Grid container 
                        direction="row"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        rowSpacing={{xs:5}}
                    >
                        <Grid item xs={12} sm={3}>
                            <Typography variant="h6" color="#2ed87b" gutterBottom>
                                KURUMSAL
                            </Typography>
                            <Typography variant="body2" color="#9d9d9d" gutterBottom>
                                HAKKIMIZDA
                            </Typography>
                            <Typography variant="body2" color="#9d9d9d" gutterBottom>
                                GİZLİLİK
                            </Typography>
                            <Typography variant="body2" color="#9d9d9d" gutterBottom>
                                KULLANICI SÖZLEŞMESİ
                            </Typography>
                            <Typography variant="body2" color="#9d9d9d" gutterBottom>
                                KULLANIM KOŞULLARI
                            </Typography>
                            <Typography variant="body2" color="#9d9d9d" gutterBottom>
                                KVKK
                            </Typography>
                            <Typography variant="body2" color="#9d9d9d" gutterBottom>
                                BUBİLET PANEL
                            </Typography>
                            <Typography variant="body2" color="#9d9d9d" gutterBottom>
                                İLETİŞİM
                            </Typography>
                            <Typography variant="body2" color="#9d9d9d" gutterBottom>
                                ÇEREZ POLİTİKASI
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3} >
                            <Typography variant="h6" color="#2ed87b" gutterBottom>
                                KATEGORİLER
                            </Typography>
                            <Typography variant="body2" color="#9d9d9d" gutterBottom>
                                <Link to='concert'>
                                    KONSER
                                </Link>
                            </Typography>
                            <Typography variant="body2" color="#9d9d9d" gutterBottom>
                                <Link to='theatre'>
                                    TİYATRO
                                </Link>
                            </Typography>
                            <Typography variant="body2" color="#9d9d9d" gutterBottom>
                                <Link to='festival'>
                                    FESTİVAL
                                </Link>
                            </Typography>
                            <Typography variant="body2" color="#9d9d9d" gutterBottom>
                                <Link to='standup'>
                                    STAND UP
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Typography variant="h6" color="#2ed87b" gutterBottom>
                                FOLLOW US
                            </Typography>
                            <Link to="https://www.facebook.com/">
                                <Facebook sx={{ fontSize: 40, color:"#fff" }} />
                            </Link>
                            <Link to="https://www.instagram.com/">
                                <Instagram sx={{ fontSize: 40, color:"#fff" }} />
                            </Link>
                            <Link to="https://www.twitter.com/">
                                <Twitter sx={{ fontSize: 40, color:"#fff" }} />
                            </Link>
                            <Link to="https://www.youtube.com/">
                                <YouTube sx={{ fontSize: 40, color:"#fff" }} />
                            </Link>
                            <Link to="https://www.linkedin.com/">
                                <LinkedIn sx={{ fontSize: 40, color:"#fff" }} />
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;