import { useState, useEffect } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  const linkClass = ({ isActive }) =>
    `transition-colors ${
      isActive
        ? "text-foreground"
        : "text-foreground/60 hover:text-foreground/80"
    }`;

  // Watch Firebase auth state
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    if (auth.currentUser) {
      alert("Failed to log out.");
    } else {
      alert("Logged out successfully!");
    }
    navigate("/"); // redirect to home (or login page)
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-medium">
          Nick Choi - Developer Blog
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} className={linkClass}>
              {n.label}
            </NavLink>
          ))}

          {/* Show logout when user exists */}
          {user && (
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1 text-sm text-red-600 hover:text-red-800 transition-colors"
            >
              <LogOut className="h-4 w-4" /> Logout
            </button>
          )}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-input bg-background px-3 py-1.5 text-sm font-medium text-foreground shadow-sm hover:bg-accent hover:text-accent-foreground"
        >
          {isMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b bg-background">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className="text-left text-lg text-foreground/60 hover:text-foreground/80 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {n.label}
                </NavLink>
              ))}

              {/* Mobile logout */}
              {user && (
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    handleLogout();
                  }}
                  className="flex items-center gap-2 text-left text-lg text-red-600 hover:text-red-800 py-2"
                >
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
