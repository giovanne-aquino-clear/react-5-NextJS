import Link from "next/link";
import styles from '../styles/navigator.module.css'
export default function Navigator(props){
   return(
    <div>
        <Link href={props.destiny }>
            <div className={styles.navigator} style={{
                backgroundColor: props.color ?? 'background-color: #541e9b'
            }}>
                {props.text}
            </div>
        </Link>
        
    </div>
)
}
   