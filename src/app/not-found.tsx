import { NAVIGATION } from "config/navigation-menu";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={NAVIGATION.HOMEPAGE}>Return Home</Link>
    </div>
  );
}
