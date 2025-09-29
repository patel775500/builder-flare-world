import {
  CalendarCheck,
  Brain,
  Music3,
  Flower2,
  ExternalLink,
  Gamepad2,
} from "lucide-react";

const HERO_IMG =
  "https://cdn.builder.io/api/v1/image/assets%2Ff028ffec3e4347b6ae251777e55a11c0%2F0f36f8a0f60b4025b15e479ababf7208?format=webp&width=1200";

export default function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/90 via-accent/70 to-primary/80" />
        <div className="container py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary-foreground drop-shadow-sm">
                Welcome to Charminar Family
              </h1>
              <p className="mt-4 text-base md:text-lg text-primary-foreground/90 max-w-prose">
                A vibrant collection of experiences created by our team. Explore
                Events, Predicts, Music and the upcoming Fragrance.
              </p>
              <div className="mt-8">
                <a
                  href="#experiences"
                  className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-3 text-sm font-semibold text-foreground shadow hover:shadow-md transition-shadow"
                >
                  Explore the experiences
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={HERO_IMG}
                alt="Stylized Charminar illustration"
                className="w-full rounded-xl shadow-xl ring-1 ring-black/10"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="container py-14 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Experiences
        </h2>
        <p className="mt-2 text-muted-foreground max-w-prose">
          We don’t associate with the monument; it’s simply our team name. Pick
          an experience below.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {/* Events */}
          <a
            href="https://zenith-space-charminar-events.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-secondary/30 blur-2xl transition-opacity group-hover:opacity-70" />
            <CalendarCheck className="h-8 w-8 text-secondary" />
            <h3 className="mt-4 text-lg font-semibold">Charminar Events</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Discover and track community events and happenings.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-secondary group-hover:underline">
              Visit <ExternalLink className="h-4 w-4" />
            </span>
          </a>

          {/* Predicts */}
          <a
            href="https://charminarpredicts.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/30 blur-2xl transition-opacity group-hover:opacity-70" />
            <Brain className="h-8 w-8 text-accent" />
            <h3 className="mt-4 text-lg font-semibold">Charminar Predicts</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Insights and predictions crafted by our team.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-accent group-hover:underline">
              Visit <ExternalLink className="h-4 w-4" />
            </span>
          </a>

          {/* Music */}
          <a
            href="https://68da1985681190cfd86986a0--adorable-choux-aa46a2.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/20 blur-2xl transition-opacity group-hover:opacity-70" />
            <Music3 className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-lg font-semibold">Charminar Music</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Tunes and vibes from the Charminar Family.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary group-hover:underline">
              Visit <ExternalLink className="h-4 w-4" />
            </span>
          </a>

          {/* Fragrance */}
          <a
            href="https://illustrious-chaja-9b9a8d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
          >
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-foreground/5 blur-2xl transition-opacity group-hover:opacity-70" />
            <Flower2 className="h-8 w-8 text-foreground/70" />
            <h3 className="mt-4 text-lg font-semibold">Charminar Fragrance</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Explore scents crafted by our team.
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm text-foreground/80 group-hover:underline">
              Visit <ExternalLink className="h-4 w-4" />
            </span>
          </a>

          {/* Arcade - coming soon */}
          <div className="relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm opacity-90">
            <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-muted blur-2xl" />
            <Gamepad2 className="h-8 w-8 text-foreground/80" />
            <h3 className="mt-4 text-lg font-semibold">Charminar Arcade</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Coming soon — mini games like Tic‑Tac‑Toe, Memory Flip, 2048, Snake, and Whack‑a‑Mole.
            </p>
            <span className="mt-4 inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
              Coming soon
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
