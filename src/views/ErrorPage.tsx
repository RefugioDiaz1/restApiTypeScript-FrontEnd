import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error("Route error:", error);

  if (isRouteErrorResponse(error)) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Oops! ¡Algo salió mal!</h1>
        <p className="mt-4">{error.status} - {error.statusText}</p>
        <pre className="mt-2 whitespace-pre-wrap text-sm text-red-700">{error.data}</pre>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Error inesperado</h1>
      <p className="mt-4">{String(error)}</p>
    </div>
  );
}
