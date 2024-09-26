"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, Heart, Share2, Repeat2, DollarSign, Clock, BarChart2 } from "lucide-react"

const nftData = {
  id: "1",
  title: "Cosmic Harmony #42",
  description: "A mesmerizing blend of celestial bodies and abstract forms, capturing the essence of universal balance.",
  image: "/placeholder.svg?height=400&width=400",
  creator: {
    name: "AstroArtist",
    avatar: "https://avatar.vercel.sh/astroartist",
  },
  owner: {
    name: "GalacticCollector",
    avatar: "https://avatar.vercel.sh/galacticcollector",
  },
  price: 2.5,
  currency: "ETH",
  likes: 1024,
  views: 5678,
  created: "2023-06-15T10:30:00Z",
  attributes: [
    { trait_type: "Background", value: "Deep Space" },
    { trait_type: "Rarity", value: "Legendary" },
    { trait_type: "Series", value: "Cosmic Collection" },
  ],
}

export default function NFTViewPage() {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(nftData.likes)

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1)
    } else {
      setLikes(likes + 1)
    }
    setIsLiked(!isLiked)
  }

  const handlePurchase = () => {
    // toast({
    //   title: "Purchase Initiated",
    //   description: "Connecting to your wallet...",
    //   duration: 5000,
    // })
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    // toast({
    //   title: "Link Copied",
    //   description: "NFT link copied to clipboard!",
    //   duration: 3000,
    // })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-100 py-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-4xl mx-auto bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
              {nftData.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <motion.img
                src={nftData.image}
                alt={nftData.title}
                className="w-full rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              />
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  size="sm"
                  className={`${isLiked ? 'text-red-500' : 'text-gray-400'} hover:text-red-500`}
                  onClick={handleLike}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  {likes}
                </Button>
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p className="text-gray-300">{nftData.description}</p>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-sm text-gray-400">Creator</h3>
                  <div className="flex items-center mt-1">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={nftData.creator.avatar} />
                      <AvatarFallback>{nftData.creator.name[0]}</AvatarFallback>
                    </Avatar>
                    <span>{nftData.creator.name}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400">Owner</h3>
                  <div className="flex items-center mt-1">
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src={nftData.owner.avatar} />
                      <AvatarFallback>{nftData.owner.name[0]}</AvatarFallback>
                    </Avatar>
                    <span>{nftData.owner.name}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Price</h3>
                <div className="flex items-center">
                  <DollarSign className="h-6 w-6 mr-2 text-green-400" />
                  <span className="text-2xl font-bold">{nftData.price} {nftData.currency}</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600" onClick={handlePurchase}>
                Purchase NFT
              </Button>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Eye className="h-6 w-6 mx-auto text-blue-400" />
                  <span className="text-sm text-gray-400">Views</span>
                  <p className="font-semibold">{nftData.views}</p>
                </div>
                <div>
                  <Clock className="h-6 w-6 mx-auto text-yellow-400" />
                  <span className="text-sm text-gray-400">Created</span>
                  <p className="font-semibold">{new Date(nftData.created).toLocaleDateString()}</p>
                </div>
                <div>
                  <Repeat2 className="h-6 w-6 mx-auto text-purple-400" />
                  <span className="text-sm text-gray-400">Transfers</span>
                  <p className="font-semibold">2</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Tabs defaultValue="attributes" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="attributes">Attributes</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>
              <TabsContent value="attributes" className="mt-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {nftData.attributes.map((attr, index) => (
                    <div key={index} className="bg-gray-700 p-3 rounded-lg">
                      <h4 className="text-sm text-gray-400">{attr.trait_type}</h4>
                      <p className="font-semibold">{attr.value}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="history" className="mt-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="https://avatar.vercel.sh/johndoe" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">Transferred to GalacticCollector</p>
                        <p className="text-sm text-gray-400">2023-06-20 14:30 UTC</p>
                      </div>
                    </div>
                    <Badge>Transfer</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="https://avatar.vercel.sh/astroartist" />
                        <AvatarFallback>AA</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">Minted by AstroArtist</p>
                        <p className="text-sm text-gray-400">2023-06-15 10:30 UTC</p>
                      </div>
                    </div>
                    <Badge variant="outline">Minted</Badge>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}