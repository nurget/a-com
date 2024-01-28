import styles from "./page.module.css";
// tailwind -> 호불호 심하고, 가독성 X
// Styled Component -> Server Component SSR 문제
// sass
// css module -> 간단!
// vanilla extract -> Windows와 문제가 있음
import Image from "next/image";
import Link from "next/link";
import aLogo from '../../public/zlogo.png';
export default function Home() {
    return (
        <>
            <div className={styles.left}>
                <Image src={aLogo} alt="logo"/>
            </div>
            <div className={styles.right}>
                <h1>지금 일어나고 있는 일</h1>
                <h2>지금 가입하세요.</h2>
                {/*
          - next에서는 a 태그 대신 Link 사용
          - a 태그 사용하면 새로고침
        */}
                <Link href="/i/flow/signup" className={styles.signup}>계정 만들기</Link>
                <h3>이미 트위터에 가입하셨나요?</h3>
                <Link href="/login" className={styles.login}>로그인</Link>
            </div>
        </>

    );
}
