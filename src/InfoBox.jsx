
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormSharpIcon from '@mui/icons-material/ThunderstormSharp';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Alert from '@mui/material/Alert';

export default function InfoBox({ info }) {

  let COLD_URL = "https://media.istockphoto.com/id/533292615/photo/alley-in-snowy-morning.jpg?s=612x612&w=0&k=20&c=LKQgMoqdgHP5PkelvEMdwXhCMG_M1XhGoFT27-Hjrk4=";
  let HOT_URL = "https://media.istockphoto.com/id/1226628621/photo/summer-background-orange-sky-with-clouds-and-bright-sun.jpg?s=612x612&w=0&k=20&c=CWg58-taK46CyW3vcGnKlG0wkjiNhfzsPKZp_zVpAFc=";
  let RAIN_URL = "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <br></br><br></br>
      <div className='cardContainer '>
        <Card sx={{ maxWidth: 340 }}>
          
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.humadity > 80
                ? RAIN_URL
                : info.temp > 15
                  ? HOT_URL
                  : COLD_URL
            }
            title="Weather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
                info.humadity > 80
                  ? <ThunderstormSharpIcon />
                  : info.temp > 15
                    ? <WbSunnyIcon />
                    : <SevereColdIcon />
              }
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
              <p>Tempreture = {info.temp}&deg;C</p>
              <p>Humidity = {info.humadity}</p>
              <p>MinTempreture = {info.tempMin}&deg;C</p>
              <p>MaxTempreture = {info.tempMax}&deg;C</p>
              <p>windSpeed = {info.windSpeed}</p>
              <p>The weather can be described as <i>{info.weather} </i>
                & feels like {info.feelsLike}&deg;C</p>
            </Typography>
          </CardContent>

        </Card>
      </div>
    </div>
  )
}