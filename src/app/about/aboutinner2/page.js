'use client'
import styles from "../../page.module.css";
import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const AboutInner2 = () => {
    const router = useRouter();
    const home = () => {
        router.push("/");
    }
    return(
        <>
        <h1 className={styles.maindiv}>
            AboutInner2 Page
        </h1>
          <Button className={styles.btn} onClick={home}>
                           
          Home
        </Button>
        </>
    )
}
export default AboutInner2;