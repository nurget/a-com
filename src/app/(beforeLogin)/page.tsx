// tailwind -> 호불호 심하고, 가독성 X
// Styled Component -> Server Component SSR 문제
// sass
// css module -> 간단!
// vanilla extract -> Windows와 문제가 있음
import Main from "@/app/(beforeLogin)/_component/Main";
import {auth} from "@/auth";
import {redirect} from "next/navigation";
export default async function Home() {
    const session = await auth();
    if (session?.user) {
        redirect('/home');
        return null;
    }
    return (
        <Main />
    );
}
