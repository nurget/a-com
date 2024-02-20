import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const {
    // api 라우트
    handlers: {GET, POST},
    auth,
    // 로그인 하는용
    signIn,
} = NextAuth({
    pages: {
        signIn: '/i/flow/login',
        newUser: '/i/flow/signUp',
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const authResponse = await fetch(`${process.env.AUTH_URL}/api/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        id: credentials.username,
                        password: credentials.password
                    }),
                })

                if (!authResponse.ok) {
                    return null
                }

                const user = await authResponse.json()
                console.log('user', user);

                return {
                    email: user.id,
                    name: user.nickname,
                    image: user.image,
                    ...user,
                }
            },
        }),
    ]
});