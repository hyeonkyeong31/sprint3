import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { BookStoerThemeProvider } from "./context/themeContext";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <div>오류가 발생했습니다.</div>,
    },
    {
        path: "/books",
        element: <div>도서목록</div>,
    },
]);
function App() {
    return (
        <BookStoerThemeProvider>
            <ThemeSwitcher />
            <Layout>
                <RouterProvider router={router} />
            </Layout>
        </BookStoerThemeProvider>
    );
}

export default App;
