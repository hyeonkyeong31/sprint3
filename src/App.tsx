import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { BookStoerThemeProvider } from "./context/themeContext";
import ThemeSwitcher from "./components/header/ThemeSwitcher";

function App() {
    return (
        <BookStoerThemeProvider>
            <ThemeSwitcher />
            <Layout>
                <Home />
            </Layout>
        </BookStoerThemeProvider>
    );
}

export default App;
