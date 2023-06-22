"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { Button } from 'react-bootstrap'
import Link from 'next/link'
import Login from './login/page'
import About from './about/page'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const clickEvent =(data) => {
    alert(data);
  }
  const LoginPage = () => {
    router.push("/login")
  }
  const aboutPage = () => {
    router.push("/about")
  }
  
  const SecondCom = () => {
    return(
    <h2 className={styles.maindiv}>
      second component 
    </h2>
    )
  }
  return (
    // <main className={styles.main}>
    //   <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>src/app/page.js</code>
    //     </p>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{' '}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore the Next.js 13 playground.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
    <main>
       <SecondCom />
      <div className={styles.maindiv}>
        Welcome in Next Js Project
      </div>
      <div>
     <UserData name={"new"}/>
     <UserData name={"first"}/>
     <UserData name={"no.1"}/>
     <UserData name={"important"}/>
  
     </div>
    <div>
    {/* <Button className={styles.btn} onClick={() => clickEvent ("hello new app")}>

      click Event
     </Button> */}
     {/* <Link href="/about">About Page</Link> */}
     <Button className={styles.btn} onClick={LoginPage}>

Login Page
</Button>
<Button className={styles.btn} onClick={aboutPage}>

About Page
</Button>
     </div>
    
     </main>
     
  )
}

const UserData = (value) => {
  return (
  <h2 className={styles.maindiv}>
    It is my {value.name} next js Project
  </h2>
  )
}
