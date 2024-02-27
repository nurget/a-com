import style from './home.module.css';
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import Post from "@/app/(afterLogin)/_component/Post";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {revalidatePath} from "next/cache";

async function getPostRecommend() {
    const res = await fetch(`http://localhost:9090/api/postRecommends`, {
        next: {
            tags: ['posts', 'recommends'],
        },
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    // revalidatePath('/home') -> 페이지 전체를 새로고침 한다
    return res.json();
}

export default async function Home() {
    const queryClient = new QueryClient();
    // queryKey가 있으면 queryFn을 실행해라
    await queryClient.prefetchQuery({queryKey: ['posts', 'recommends'], queryFn: getPostRecommend});
    const dehydratedState = dehydrate(queryClient);

    return (
        <main className={style.main}>
            <HydrationBoundary state={dehydratedState}>
                <TabProvider>
                    <Tab/>
                    <PostForm/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </TabProvider>
            </HydrationBoundary>
        </main>
    );
}
