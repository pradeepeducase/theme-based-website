import Header from "../common/components/Header";
import Footer from "../common/components/Footer";
import "../common/fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";


export default function Theme1Layout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header/>
                <main>{children}</main>
                <Footer/>
            </body>
        </html>
    );
}
