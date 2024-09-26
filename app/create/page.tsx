"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Upload, Image, Music, Video, Sparkles, DollarSign } from "lucide-react"

export default function CreateNFT() {
    const [isUploading, setIsUploading] = useState(false)
    const [nftType, setNftType] = useState("image")
    const [dragActive, setDragActive] = useState(false)
    const [fileName, setFileName] = useState("")
    const inputRef = useRef(null)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsUploading(true)

        // Simulate upload process
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsUploading(false)

    }

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true)
        } else if (e.type === "dragleave") {
            setDragActive(false)
        }
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFileName(e.dataTransfer.files[0].name)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#1F2937] via-black to-gray-900 text-gray-100 py-8 px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card className="max-w-2xl mx-auto bg-gray-800/50 border-gray-700 backdrop-blur-sm">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                            Create Your NFT Masterpiece
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <motion.div
                                    className="space-y-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <Label htmlFor="nftType" className="text-lg">Choose Your NFT Type</Label>
                                    <Select onValueChange={setNftType} defaultValue={nftType}>
                                        <SelectTrigger className="w-full bg-gray-700 border-gray-600">
                                            <SelectValue placeholder="Select NFT type" />
                                        </SelectTrigger>
                                        <SelectContent className="bg-gray-700 border-gray-600">
                                            <SelectItem value="image">Image</SelectItem>
                                            <SelectItem value="audio">Audio</SelectItem>
                                            <SelectItem value="video">Video</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </motion.div>

                                <motion.div
                                    className="space-y-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Label htmlFor="title" className="text-lg">Give Your NFT a Catchy Title</Label>
                                    <Input
                                        id="title"
                                        placeholder="Enter NFT title"
                                        required
                                        className="bg-gray-700 border-gray-600 text-gray-100"
                                    />
                                </motion.div>

                                <motion.div
                                    className="space-y-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <Label htmlFor="description" className="text-lg">Describe Your Masterpiece</Label>
                                    <Textarea
                                        id="description"
                                        placeholder="Tell the world about your NFT"
                                        required
                                        className="bg-gray-700 border-gray-600 text-gray-100"
                                    />
                                </motion.div>

                                <motion.div
                                    className="space-y-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <Label htmlFor="price" className="text-lg">Set Your Price</Label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <Input
                                            id="price"
                                            type="number"
                                            step="0.001"
                                            min="0"
                                            placeholder="0.00"
                                            required
                                            className="bg-gray-700 border-gray-600 text-gray-100 pl-10"
                                        />
                                        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">ETH</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="space-y-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Label htmlFor="file" className="text-lg">Upload Your Masterpiece</Label>
                                    <div
                                        className={`flex items-center justify-center w-full ${dragActive ? 'border-purple-500' : 'border-gray-600'
                                            } transition-colors duration-300`}
                                        onDragEnter={handleDrag}
                                        onDragLeave={handleDrag}
                                        onDragOver={handleDrag}
                                        onDrop={handleDrop}
                                    >
                                        <label
                                            htmlFor="file"
                                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600 transition-colors"
                                        >
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <AnimatePresence>
                                                    {!fileName && (
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.5 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, scale: 0.5 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            {nftType === "image" && <Image className="w-12 h-12 mb-3 text-gray-400" />}
                                                            {nftType === "audio" && <Music className="w-12 h-12 mb-3 text-gray-400" />}
                                                            {nftType === "video" && <Video className="w-12 h-12 mb-3 text-gray-400" />}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                                <p className="mb-2 text-sm text-gray-400">
                                                    <span className="font-bold">Click to upload</span> or drag and drop
                                                </p>
                                                <p className="text-xs text-gray-400">
                                                    {nftType === "image" && "PNG, JPG or GIF (MAX. 100MB)"}
                                                    {nftType === "audio" && "MP3 or WAV (MAX. 100MB)"}
                                                    {nftType === "video" && "MP4 or WebM (MAX. 100MB)"}
                                                </p>
                                            </div>
                                            {fileName && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-sm text-purple-400 mt-2"
                                                >
                                                    File selected: {fileName}
                                                </motion.p>
                                            )}
                                            <Input
                                                id="file"
                                                type="file"
                                                className="hidden"
                                                required
                                                onChange={handleChange}
                                                ref={inputRef}
                                            />
                                        </label>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-center space-x-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <Switch id="terms" required />
                                    <Label htmlFor="terms">I agree to the terms and conditions</Label>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                <Button
                                    type="submit"
                                    className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                                    disabled={isUploading}
                                >
                                    {isUploading ? (
                                        <>
                                            <Upload className="mr-2 h-4 w-4 animate-spin" />
                                            Minting Your NFT...
                                        </>
                                    ) : (
                                        <>
                                            <Sparkles className="mr-2 h-4 w-4" />
                                            Mint Your NFT Masterpiece
                                        </>
                                    )}
                                </Button>
                            </motion.div>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}