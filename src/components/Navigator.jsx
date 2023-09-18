import Link from "next/link";
import styles from '../styles/navigator.module.css'
export default function Navigator(props){
   return(
    <div>
        <Link href={props.destiny }>
            <div className={styles.navigator}>
                {props.text}
            </div>
        </Link>
        
    </div>
)
}
   