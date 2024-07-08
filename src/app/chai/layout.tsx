export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    // console.log(children)
    console.log("[src/app/chai/layout.tsx] Children", children)
    return (
        <>
            {/* Adding the Layout For the Chai Page */}
            <h2 className="text-center text-bold">Chai's Layout</h2>

            {/* As we have to show the page.tsx Content, we will render the children */}
            {children}
        </>
    )
}