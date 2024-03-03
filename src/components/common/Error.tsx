import { useRouteError } from "react-router-dom";

interface RouteError {
    statusText?: string;
    message?: string;
}

export default function Error() {
    const error = useRouteError() as RouteError;
    return (
        <div>
            <h1>oops! something wrong!</h1>
            <p>{error.statusText || error.message}</p>
        </div>
    );
}
