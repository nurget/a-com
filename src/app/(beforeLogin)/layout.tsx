import {ReactNode} from "react";
import {inspect} from "util";
import styles from '@/app/(beforeLogin)/_component/main.module.css';

type Props = { children: ReactNode, modal: ReactNode };
export default function Layout({ children, modal } : Props) {
    return (
        <div className={styles.container}>
            {children}
            {modal}
        </div>
    )
}

// 주소가 localhost:3000 일 때 children -> page.tsx가 되고, modal -> @modal/default.tsx(얘를 안만들면 404가 났기 때문에 만들어준 거)
// 주소가 localhost:3000/i/flow/login 일 때 children -> i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx