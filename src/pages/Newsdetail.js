import styles from './stylesheets/newsdetail.module.css'
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../assets/unread_black.png'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SearchIcon from '@mui/icons-material/Search'
import newspic from '../assets/newspic.png'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
export const Newsdetail = () => {
    return (
        <div>
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
            <div className={styles.container}>
                <div className={styles.date}>
                    <a
                        href="https://unread.today/category/explained"
                        className={styles.tailbarlink}
                    >
                        ТАЙЛБАРЛАХ НЬ
                    </a>
                    2 САРЫН 4, 2023 <span className={styles.dot} />
                    10 МИН
                </div>
                <h1 className={styles.title}>
                    1930-2023: “Home entertainment”-ийн хөгжлийг тайлбарлах нь
                </h1>
                <img src={newspic} className={styles.pic1}></img>
                <div className={styles.socialbar}>
                    <div className={styles.author}>
                        <div className={styles.authorbox}></div>
                        <div className={styles.authorpost}>
                            <span>Нийтэлсэн:</span>
                            <a className={styles.authorname}>jinkenmongolhun</a>
                        </div>
                    </div>
                    <div className={styles.handalt}>
                        <p>Хандалт / Сэтгэгдэл:</p>
                        <div className={styles.icons}>
                            <RemoveRedEyeIcon /> 2333
                            <ChatBubbleIcon /> 0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
