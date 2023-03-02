import styles from './stylesheets/home.module.css'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../assets/unread_black.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SearchIcon from '@mui/icons-material/Search'
import figureimg from '../assets/figureimg.png'
import { Card } from '../components/Card'
import { Mini } from '../components/Mini'
import { Author } from '../components/Author'

export const Home = () => {
    return (
        <>
            <header id={styles['hero']}>
                <navbar id={styles['navbar']}> 
                    <MenuIcon id={styles['menu-icon']} />
                    <ul>
                        <img src={logo} id={styles['navbar-logo']} />
                    </ul>
                    <ul id={styles['search']}>
                        <SearchIcon />
                        <input
                            placeholder="search"
                            id={styles['search-input']}
                        ></input>
                    </ul>
                    <ul>
                        <FacebookIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                        <TwitterIcon />
                    </ul>
                </navbar>
                <figure id={styles['hero-figure']}>
                    <div className={styles.imageContainer}>
                        <img id={styles['figure-img']} src={figureimg}></img>
                    </div>
                    <figcaption>
                        <h1 className={styles.caption} id={styles['fancy']}>
                            МЭДҮҮШТЭЙ
                        </h1>
                        <h1 className={styles.caption}>
                            "THE APPRENTICE" ЦУВРАЛ #10: ШИЛДЭГ ТАВАН
                            ОРОЛЦОГЧИЙН ӨРСӨЛДӨӨН
                        </h1>
                        <Author />
                    </figcaption>
                </figure>
            </header>
            <main id={styles['main']}>
                <div id={styles['carousel-container']}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div id={ styles["newsfeed"]}>
                    <Mini />
                </div>
            </main>
        </>
    )
}
