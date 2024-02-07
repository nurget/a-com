import style from './message.module.css';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {Room} from "@/app/(afterLogin)/messages/_components/Room";


export default function Home() {
    return (
        <main className={style.main}>
            <div className={style.header}>
                <h3>쪽지</h3>
            </div>
            <Room/>
            <Room/>
            <Room/>
            <Room/>
            <Room/>
            <Room/>
        </main>
    );
}
