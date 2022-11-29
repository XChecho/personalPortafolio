import Header from "./components/Header"

//Styles Tailwind
import "./output.css";

export default function RootLayout({children,}:{children: React.ReactNode}) {

  return (
    <html>
      <head />
      
      <title>Welcome to my World!</title>
      <body>
        <Header/>
        {children}
        </body>
    </html>
  )
}
