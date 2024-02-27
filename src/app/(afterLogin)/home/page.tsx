import style from './home.module.css';
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getPostRecommend} from "@/app/(afterLogin)/home/_lib/getPostRecommend";
import React from "react";
import PostRecommends from "@/app/(afterLogin)/home/_component/PostRecommends";

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
                    <PostRecommends />
                </TabProvider>
            </HydrationBoundary>
        </main>
    );
}
