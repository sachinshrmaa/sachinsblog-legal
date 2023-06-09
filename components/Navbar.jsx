import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link href="/" className="navbar-brand" id="logo">
          SACHINSBLOG <span className="text-muted ms-2">Legal Help</span>
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link href="https://sachinsblog.in" className="nav-link">
              Blog
            </Link>
            <Link
              href="https://thebasics.sachinsblog.in"
              className="nav-link ms-md-3"
            >
              Masterclass
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
