import classes from './FrontPage.module.css'
import { useNavigate } from 'react-router-dom'
import cl from '../UI/Pub.module.css'
import CaverButton from '../UI/Buttons/CaverButton'
import IconButtonHome from '../UI/Buttons/IconButtonHome'
import Img from '../Img'

const FrontPage = () => {
    const navigate = useNavigate();
  const imgUrl = "https://sun9-30.userapi.com/impg/VIVKjE7apo2VFuDfDYFDXXY79ayG2HgTmrduJA/8COUusfenc4.jpg?size=617x575&quality=96&sign=0db143698a6c35827f123a9acc36eb75&type=album"
  const imgAlt = "Каверы Подземки"

return (
  
    <div className={cl.tribute_app}>
      <div className={classes.content}>
        <IconButtonHome onClick={() => navigate("/")}>Главная</IconButtonHome>
        <CaverButton onClick={() => navigate("/cavers")}>Каверы</CaverButton>
        {/* <PlayButton  onClick={() => navigate("/playlist")}></PlayButton> */}
        <div className={classes.front_header}>
                    {/* <p>Letov-56</p> */}
                </div>
                <div className={classes.front_media}>
                  <Img imgUrl = {imgUrl} imgAlt={imgAlt}/>
                    {/* <img src={imUrl} width={80} alt="Каверы Подземки" /> */}
                </div>
                <div className={classes.front_body}>
                    <span>Привет! В этом приложении собраны каверы, посвященные дню рождения Егора Летова. </span>
                </div>
      </div>
    </div>
  )
}
  export default FrontPage