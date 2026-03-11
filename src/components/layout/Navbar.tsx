import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-background/80 flex justify-center">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tight">Creator<span className="text-muted-foreground">Platform</span></span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#features" className="transition-colors hover:text-foreground/80 text-foreground/60">Features</Link>
          <Link href="#pricing" className="transition-colors hover:text-foreground/80 text-foreground/60">Pricing</Link>
          <Link href="/dashboard" className="transition-colors hover:text-foreground/80 text-foreground/60">Dashboard</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/dashboard">
            <Button variant="ghost" size="sm" className="hidden md:flex">Log In</Button>
          </Link>
          <Link href="/dashboard">
            <Button size="sm" className="rounded-full shadow-md">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
