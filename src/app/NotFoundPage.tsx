import { NextPage } from "next";
import Link from "next/link";

const NotFoundPage: NextPage = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Oops! Looks like you've encountered a page that doesn't exist.</p>
      <p>
        Go back to{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
