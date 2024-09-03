import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import ProductList from "@/components/product/ProductList"

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">
        <section className="bg-cover bg-center bg-foreground py-10 md:py-10">
          <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">Discover the Latest Trends</h1>
            <p className="text-lg md:text-xl text-primary-foreground mb-8">
              Explore our curated collection of stylish and high-quality products.
            </p>
            <Button size="lg" variant="accent">
              Shop Now
            </Button>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <ProductList />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-8 px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="grid gap-4">
            <h3 className="text-lg font-medium">VentiStore</h3>

          </div>
        </div>
      </footer>
    </div>
  )
}
