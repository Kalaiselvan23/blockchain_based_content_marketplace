import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PlayCircle, } from "lucide-react"

export default function NFTMarketplace() {
  return (
    <main className="flex-1">
      <section className="w-full hero py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                Discover, Collect, and Sell Extraordinary NFTs
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Explore the world's best NFT marketplace. Buy, sell, and discover exclusive digital items.
              </p>
            </div>
            <div className="space-x-4">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">Explore</Button>
              <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400 hover:text-white">Create</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-white">Featured NFTs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Cosmic Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video">
                  <PlayCircle className="absolute inset-0 m-auto h-12 w-12 text-white opacity-80" />
                  <img
                    alt="Cosmic Journey NFT"
                    className="object-cover w-full h-full rounded-md"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-purple-400">0.5 ETH</span>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Bid Now</Button>
              </CardFooter>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Digital Dreamscape</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="Digital Dreamscape NFT"
                  className="object-cover w-full aspect-square rounded-md"
                  src="/placeholder.svg?height=300&width=300"
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-purple-400">0.8 ETH</span>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Buy Now</Button>
              </CardFooter>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Neon Nights</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  alt="Neon Nights NFT"
                  className="object-cover w-full aspect-square rounded-md"
                  src="/placeholder.svg?height=300&width=300"
                />
              </CardContent>
              <CardFooter className="flex justify-between">
                <span className="text-purple-400">1.2 ETH</span>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white">Buy Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-white">Latest from the Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">The Future of NFTs in Gaming</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Explore how NFTs are revolutionizing the gaming industry, creating new opportunities for players and developers alike.
                  </p>
                </CardContent>
                <CardFooter className="flex items-center">
                  <Avatar className="w-9 h-9">
                    <AvatarImage alt="Author" src="/placeholder.svg?height=36&width=36" />
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                  <div className="ml-2">
                    <p className="text-sm font-medium text-white">Alice Brown</p>
                    <p className="text-xs text-gray-400">Posted 2 days ago</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
