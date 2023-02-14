import styles from './stylesheets/home.module.css'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../assets/unread_black.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SearchIcon from '@mui/icons-material/Search'
import figureimg from '../assets/figureimg.png'

export const Home = () => {
    return (
        <>
            <header id={styles['hero']}>
                <navbar id={styles['navbar']}>
                    <MenuIcon id={styles['menu-icon']} />
                    <ul className={styles.navbar}>
                        <li>
                            <img src={logo} id={styles['navbar-logo']} />
                        </li>
                        <li id={styles['search']}>
                            <SearchIcon />
                            <input
                                placeholder="search"
                                id={styles['search-input']}
                            ></input>
                        </li>
                    </ul>
                    <ul>
                        <FacebookIcon />
                        <InstagramIcon />
                        <LinkedInIcon />
                        <TwitterIcon />
                    </ul>
                </navbar>
                <figure id={styles['hero-figure']}>
                    <img id={styles['figure-img']} src={figureimg}></img>
                    <figcaption>
                        <h1 className={ styles.caption}>МЭДҮҮШТЭЙ</h1>
                        <h1 className={ styles.caption}>
                            "THE APPRENTICE" ЦУВРАЛ #10: ШИЛДЭГ ТАВАН
                            ОРОЛЦОГЧИЙН ӨРСӨЛДӨӨН
                        </h1>
                    </figcaption>
                </figure>
                <div>div</div>
            </header>
        </>
    )
}
