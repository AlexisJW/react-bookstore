import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <center>
        <h1> Oops! </h1>
        <p> Sorry, an unexpected error has occurred. </p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </center>
    </div>
  );
}
