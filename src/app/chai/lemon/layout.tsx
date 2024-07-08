export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <>
            <h2>Lemon Tea's Layout Here</h2>
            {children}
        </>
    )

}