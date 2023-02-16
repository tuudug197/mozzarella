import styles from "./stylesheets/card.module.css"

export const Card = () => {

    return (
        <div className={ styles.container}>
            <h1 className={ styles.title}>Unread: Муурнууд үхээсэй ал. Муур үхээсэй ал.</h1>
        </div>
    )
}