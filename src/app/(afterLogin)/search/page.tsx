import style from '/search.module.css';
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import BackButton from "@/app/(afterLogin)/_component/BackButton";

type Props = {
    searchParams: { q: string };
}
export default function Search({ searchParams } : Props) {
    return (
        <main className={style.main}>
            <div className={style.searchTop}>
                <div className={style.searchZone}>
                    <div className={style.buttonZone}>
                        <BackButton />
                    </div>
                    <div className={style.formZone}>
                        <SearchForm q={searchParams.q} />
                    </div>
                </div>
                {/*<Tab />*/}
            </div>
            검색 페이지
        </main>
    );
}
