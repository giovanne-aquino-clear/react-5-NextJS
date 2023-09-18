import Link from  "next/link"
import styles from '../styles/layout.module.css'

export default function Layout(props){
    return(
     <div className={styles.layout}>

        <div className={styles.header}>
                <h1>{props.title ?? 'mais um exemplo'}</h1>
                <Link href="/">voltar</Link>
        </div>
        <div className={styles.content}>
        {props.children}
        </div>
    </div>
    )
}