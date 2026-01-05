import Image from "next/image";
import heroBg from "@/public/hero2.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="h-full flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroBg}
          alt="GreenMist luxury hotel in misty mountains"
          fill
          placeholder="blur"
          quality={75}
          className="object-cover object-top"
          priority
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/30 to-black/30" />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-light text-stone-50 text-balance">
          Calm Luxury, Curated for Quiet Souls
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-stone-50/75 text-pretty">
          Boutique stays nestled in misty hills, forests, and slow mornings —
          designed for rest, privacy, and presence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            size="lg"
            className="rounded-none py-6 px-8 text-base"
            asChild
          >
            <Link href="/properties">Explore Luxury Properties</Link>
          </Button>

          <Button
            size="lg"
            variant="ghost"
            className="rounded-none py-6 px-8 text-stone-50 border border-stone-50/40 hover:bg-accent/30"
            asChild
          >
            <Link href="/about">Why GreenMist?</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// @import "tailwindcss";

// :root {
//   /* Primary: emerald-600  */
//   --primary: #047857;
//   /* BG - stone-50 */
//   --background: #fafaf9;
//   /* btn text - stone-50 */
//   --btn-text: #fafaf9;
//   /* BG-alt - almost white */
//   --background-card: #f1f1ef;
//   /* BG-alt - stone-50 */
//   --background-alt: #f5f5f4;
//   /* Text - stone-900 */
//   --foreground: #1c1917;
//   /* secondary Text - stone-600 */
//   --foreground-secondary: #57534e;
//   /* Muted text - stone-500 */
//   --foreground-muted: #78716c;
//   /* border - stone-200 */
//   --custom-border: #e7e5e4;
//   --accent: #ecfdf5; /* emerald-50 */
//   --accent-foreground: #065f46; /* emerald-800 */
// }

// @theme inline {
//   --color-background: var(--background);
//   --color-background-alt: var(--background-alt);
//   --color-card: var(--background-card);

//   --color-foreground: var(--foreground);
//   --color-foreground-secondary: var(--foreground-secondary);
//   --color-foreground-muted: var(--foreground-muted);

//   --color-btn-text: var(--btn-text);

//   --color-primary: var(--primary);
//   --color-border: var(--custom-border);

//   --color-accent: var(--accent);
//   --color-accent-foreground: var(--accent-foreground);

//   --font-sans: var(--font-geist-sans);
//   --font-mono: var(--font-geist-mono);
// }

// @media (prefers-color-scheme: dark) {
//   :root {
//     /*
//     Primary:         emerald-500
//     Dark background: stone-950
//     Dark background Alt:      stone-900
//     Dark cards:      stone-900
//     Text:            stone-100
//     Secondary text:  stone-400
//     Muted text:      stone-500
//  */
//     --primary: #047857;
//     --background: #0c0a09;
//     --background-alt: #1c1917;
//     --background-card: #1c1917;
//     --foreground: #f5f5f4;
//     --foreground-secondary: #a8a29e;
//     --foreground-muted: #78716c;
//     --custom-border: #292524;
//     --accent: #064e3b; /* emerald-900 */
//     --accent-foreground: #a7f3d0; /* emerald-200 */
//   }
// }

// body {
//   background: var(--background);
//   color: var(--foreground);
// }
