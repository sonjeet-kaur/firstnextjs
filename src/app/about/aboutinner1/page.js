'use client'
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
 import styles from "../../page.module.css";

const AboutInner1 = () => {
    const router = useRouter();
    const inner = () => {
        router.push("/about/aboutinner2");
    }
    return(
        <>
        <h1 className={styles.maindiv}>
            AboutInner1 Page
        </h1>
         <Button className={styles.btn} onClick={inner}>
                           
         AboutInner2
       </Button>
       </>
    )
}
export default AboutInner1;