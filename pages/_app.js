import '../styles/globals.css'
import AppProvider from '../components/Context/Context'

function MyApp({ Component, pageProps }) {
 
  return (
   
   <AppProvider>
     <Component {...pageProps}>
    </Component>
   </AppProvider>
   
  )
  
}

export default MyApp
