"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Image, Music, Video, Heart, Share2, BookmarkPlus } from "lucide-react"

const contentItems = [
  {
    id: 1,
    type: "video",
    title: "Blockchain Explained",
    username: "crypto_guru",
    price: 0.05,
    thumbnail: "/placeholder.svg?height=200&width=300",
    likes: 1024,
    duration: "10:30",
  },
  {
    id: 2,
    type: "audio",
    title: "Decentralized Finance Podcast",
    username: "defi_expert",
    price: 0.02,
    thumbnail: "/placeholder.svg?height=200&width=300",
    likes: 512,
    duration: "45:00",
  },
  {
    id: 3,
    type: "image",
    title: "NFT Artwork Collection",
    username: "digital_artist",
    price: 0.1,
    thumbnail: "/placeholder.svg?height=200&width=300",
    likes: 2048,
    resolution: "3000x3000",
  },
  {
    id: 4,
    type: "video",
    title: "Smart Contract Tutorial",
    username: "dev_teacher",
    price: 0.08,
    thumbnail: "/placeholder.svg?height=200&width=300",
    likes: 768,
    duration: "15:45",
  },
  {
    id: 5,
    type: "audio",
    title: "Crypto Market Analysis",
    username: "market_analyst",
    price: 0.03,
    thumbnail: "/placeholder.svg?height=200&width=300",
    likes: 384,
    duration: "30:15",
  },
  {
    id: 6,
    type: "image",
    title: "Blockchain Infographic",
    username: "data_visualizer",
    price: 0.01,
    thumbnail: "/placeholder.svg?height=200&width=300",
    likes: 1536,
    resolution: "1920x1080",
  },
]

export default function DarkThemeContentList() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredContent = activeTab === "all" 
    ? contentItems 
    : contentItems.filter(item => item.type === activeTab)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-100">Blockchain Content Marketplace</h1>
        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 lg:w-1/2 lg:mx-auto bg-gray-800">
            <TabsTrigger value="all" className="data-[state=active]:bg-gray-700">All</TabsTrigger>
            <TabsTrigger value="video" className="data-[state=active]:bg-gray-700">Videos</TabsTrigger>
            <TabsTrigger value="audio" className="data-[state=active]:bg-gray-700">Audio</TabsTrigger>
            <TabsTrigger value="image" className="data-[state=active]:bg-gray-700">Images</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-gray-800 border-gray-700">
              <CardHeader className="p-0">
                <div className="relative group">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                    {item.type === "video" && <Video className="w-4 h-4 mr-1" />}
                    {item.type === "audio" && <Music className="w-4 h-4 mr-1" />}
                    {item.type === "image" && <Image className="w-4 h-4 mr-1" />}
                    {item.type}
                  </Badge>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    {item.type === "image" ? item.resolution : item.duration}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2 line-clamp-1 text-gray-100">{item.title}</h2>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Avatar className="w-6 h-6 mr-2">
                      <AvatarImage src={`https://avatar.vercel.sh/${item.username}`} />
                      <AvatarFallback>{item.username[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-400">{item.username}</span>
                  </div>
                  <span className="text-sm text-gray-400 flex items-center">
                    <Heart className="w-4 h-4 mr-1" /> {item.likes}
                  </span>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between items-center">
                <span className="text-lg font-bold text-primary">{item.price} ETH</span>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="bg-gray-700 hover:bg-gray-600 border-gray-600">
                    <Share2 className="w-4 h-4" />
                    <span className="sr-only">Share</span>
                  </Button>
                  <Button size="sm" variant="outline" className="bg-gray-700 hover:bg-gray-600 border-gray-600">
                    <BookmarkPlus className="w-4 h-4" />
                    <span className="sr-only">Save</span>
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">Purchase</Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}