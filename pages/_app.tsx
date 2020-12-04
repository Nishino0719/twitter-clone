import "tailwindcss/tailwind.css"
import "../styles/tailwind.css"
import '../styles/global.css'
import "../styles/tailwind-util.css"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
