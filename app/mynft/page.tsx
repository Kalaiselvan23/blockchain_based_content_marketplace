"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { DollarSign, Filter, Grid, List, Search, SortAsc, SortDesc } from "lucide-react"

// Mock user data
const userData = {
  name: "CryptoEnthusiast",
  avatar: "https://avatar.vercel.sh/cryptoenthusiast",
}

// Mock NFT data
const userNFTs = [
  {
    id: "1",
    title: "Cosmic Harmony #42",
    image: "/placeholder.svg?height=200&width=200",
    price: 2.5,
    currency: "ETH",
    collection: "Cosmic Collection",
  },
  {
    id: "2",
    title: "Digital Dreamscape #7",
    image: "/placeholder.svg?height=200&width=200",
    price: 1.8,
    currency: "ETH",
    collection: "Dream Series",
  },
  {
    id: "3",
    title: "Neon Nights #15",
    image: "/placeholder.svg?height=200&width=200",
    price: 3.2,
    currency: "ETH",
    collection: "City Vibes",
  },
  {
    id: "4",
    title: "Abstract Thoughts #3",
    image: "/placeholder.svg?height=200&width=200",
    price: 1.5,
    currency: "ETH",
    collection: "Mind Explorers",
  },
  {
    id: "5",
    title: "Pixel Paradise #28",
    image: "/placeholder.svg?height=200&width=200",
    price: 0.8,
    currency: "ETH",
    collection: "8-Bit Wonders",
  },
  {
    id: "6",
    title: "Quantum Quilt #9",
    image: "/placeholder.svg?height=200&width=200",
    price: 4.0,
    currency: "ETH",
    collection: "Cosmic Collection",
  },
]

export default function UserNFTListing() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [searchTerm, setSearchTerm] = useState("")

  const sortedAndFilteredNFTs = userNFTs
    .filter(nft => 
      nft.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nft.collection.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price
      } else {
        return b.price - a.price
      }
    })

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F2937] via-black to-gray-900 text-gray-100 py-8 px-4">
      <motion.div900
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-6xl mx-auto bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center mb-4 sm:mb-0">
              <Avatar className="h-12 w-12 mr-4">
                <AvatarImage src={userData.avatar} />
                <AvatarFallback>{userData.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl font-bold">{userData.name}&apos;s NFT Collection</CardTitle>
                <p className="text-gray-400">Total NFTs: {userNFTs.length}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" onClick={() => setViewMode("grid")}>
                <Grid className={`h-4 w-4 ${viewMode === "grid" ? "text-primary" : "text-gray-400"}`} />
              </Button>
              <Button variant="outline" size="icon" onClick={() => setViewMode("list")}>
                <List className={`h-4 w-4 ${viewMode === "list" ? "text-primary" : "text-gray-400"}`} />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search NFTs..."
                  className="pl-8 bg-gray-700 border-gray-600 text-gray-100"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
              <div className="flex space-x-2">
                <Select>
                  <SelectTrigger className="w-[180px] bg-gray-700 border-gray-600 text-gray-100">
                    <SelectValue placeholder="Filter by collection" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Collections</SelectItem>
                    <SelectItem value="cosmic">Cosmic Collection</SelectItem>
                    <SelectItem value="dream">Dream Series</SelectItem>
                    <SelectItem value="city">City Vibes</SelectItem>
                    <SelectItem value="mind">Mind Explorers</SelectItem>
                    <SelectItem value="8bit">8-Bit Wonders</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="icon" onClick={handleSort}>
                  {sortOrder === "asc" ? (
                    <SortAsc className="h-4 w-4" />
                  ) : (
                    <SortDesc className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
            <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
              {sortedAndFilteredNFTs.map((nft) => (
                <motion.div
                  key={nft.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gray-700 border-gray-600">
                    <CardContent className={`p-0 ${viewMode === "list" ? "flex" : ""}`}>
                      <img
                        src={nft.image}
                        alt={nft.title}
                        className={`w-full object-cover ${viewMode === "grid" ? "h-48" : "h-24 w-24"}`}
                      />
                      <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                        <h3 className="font-semibold text-lg mb-2">{nft.title}</h3>
                        <p className="text-gray-400 text-sm mb-2">Collection: {nft.collection}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-1 text-green-400" />
                            <span className="font-bold">{nft.price} {nft.currency}</span>
                          </div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm">View Details</Button>
                            </DialogTrigger>
                            <DialogContent className="bg-gray-800 text-gray-100">
                              <DialogHeader>
                                <DialogTitle>{nft.title}</DialogTitle>
                                <DialogDescription>
                                  View and manage your NFT details.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <img src={nft.image} alt={nft.title} className="w-full h-64 object-cover rounded-lg" />
                                <p><strong>Collection:</strong> {nft.collection}</p>
                                <p><strong>Price:</strong> {nft.price} {nft.currency}</p>
                                <Button className="w-full">List for Sale</Button>
                                <Button variant="outline" className="w-full">Transfer NFT</Button>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="outline">Load More</Button>
          </CardFooter>
        </Card>
      </motion.div900>
    </div>
  )
}