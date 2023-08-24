import { v2 as cloudinary } from "cloudinary";
import config from "./config";

cloudinary.config({
    cloud_name: config.cloudinary.cloud,
    api_key: config.cloudinary.apiKey,
    api_secret: config.cloudinary.apiSecret,
    secure: true
})

export const uploadImage = async (path: string) => {
    return await cloudinary.uploader.upload(path, {
        folder: 'Movies'
    })
}

export const deleteImage = async (publicId: string) => {
    return await cloudinary.uploader.destroy(publicId)
}
