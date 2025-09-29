import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Header({ className }: { className?: string }) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className,
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-secondary to-accent shadow-inner" />
          <span className="text-lg font-extrabold tracking-tight">
            Charminar Family
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#experiences" className="hover:text-primary transition-colors">
            Experiences
          </a>
        </nav>
      </div>
    </header>
  );
}
