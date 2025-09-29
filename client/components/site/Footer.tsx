export default function Footer() {
  return (
    <footer className="border-t bg-background/70">
      <div className="container py-8 text-center text-sm text-muted-foreground">
        <p className="font-medium text-foreground">Charminar Family</p>
        <p className="mt-1">Welcome to the Charminar Family experiences.</p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
          <span className="text-xs uppercase tracking-wide text-muted-foreground">
            Credits
          </span>
          <span className="text-foreground">Dev Patel</span>
          <span className="text-foreground">Hana Parvez</span>
          <span className="text-foreground">Pratyush Kaushal</span>
          <span className="text-foreground">Shiven Mahajan</span>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Charminar Family. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
