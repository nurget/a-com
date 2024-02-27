export async function getPostRecommend() {
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