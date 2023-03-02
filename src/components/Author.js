import styles from "./stylesheets/author.module.css"

export const Author = () => {

    return (
        <figure className={ styles.container}>
            <div className={ styles.photoContainer}>
                <img src="https://cdn.racingnews365.com/Riders/Verstappen/_570x570_crop_center-center_none/f1_2022_mv_red_lg.png?v=1647864833" 
                    id={ styles["profile-photo"]} />
            </div>
            <figcaption>
                <p className={ styles.name}>Max Verstappen</p>
                <p className={ styles.date}>2 сарын 28, 2023</p>
            </figcaption>
        </figure>

    )
}