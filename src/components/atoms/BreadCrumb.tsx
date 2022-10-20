import Link from "next/link";
import { useRouter } from "next/router";

function Breadcrumbs() {
  const { pathname } = useRouter();
  return (
    <nav className="w-full px-0 text-xs py-2 mt-2 bg-[#F5F5F5] shadow-none">
      <Link
        href="/"
        className={
          pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"
        }
      >
        Home
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        href="/products"
        className={
          pathname.startsWith("/products")
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Phones & Tablets
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        href="/products/1"
        className={
          pathname === "/products/1"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Mobile Phones
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        href="/products/1"
        className={
          pathname === "/products/1"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Smartphones
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        href="/products/1"
        className={
          pathname === "/products/1"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Android Phones
      </Link>
      <span className="breadcrumb-arrow">&gt;</span>
      <Link
        href="/products/1"
        className={
          pathname === "/products/1"
            ? "breadcrumb-active"
            : "breadcrumb-not-active"
        }
      >
        Galaxy A51 6.5-Inch(4GB,128GB ROM) Android10.0,(48MP +12MP + 5MP + 5MP)
        + 32MPDualSIM - Prism Crush Black
      </Link>
    </nav>
  );
}
export default Breadcrumbs;
