import Link from "next/link";
export default function Navigator(props){
   return(
    <div>
        <Link href={props.destiny }>
            <div className={styles.navegador}>
                {props.text}
            </div>
        </Link>
        
    </div>
)
}
   