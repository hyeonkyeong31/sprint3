import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { BookStoerThemeProvider } from "./context/themeContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/common/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <Home />
            </Layout>
        ),
        errorElement: <Error />,
    },
    {
        path: "/books",
        element: (
            <Layout>
                <div>도서목록</div>
            </Layout>
        ),
    },
]);
function App() {
    return (
        <BookStoerThemeProvider>
            <RouterProvider router={router} />
        </BookStoerThemeProvider>
    );
}

export default App;
