import { RequestHandler } from "express";
import Video from "./Videos";

export const getVideos: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    console.error(error);
  }
};

export const getVideo: RequestHandler = async (req, res) => {
  try {
    const videoId = await Video.findById(req.params.id.toString());
    videoId ? res.json(videoId) : res.json({ message: "Video not found." });
  } catch (error) {
    console.error(error);
  }
};

export const createVideo: RequestHandler = async (req, res) => {
  const videoFind = await Video.findOne({ url: req.body.url });
  if (videoFind)
    return res.status(301).json({ message: "The URL already exists" });

  const video = new Video(req.body);
  const savedVideo = await video.save();
  res.json(savedVideo);
};

export const deleteVideo: RequestHandler = async (req, res) => {
  try {
    const videoDeleted = await Video.findByIdAndDelete(
      req.params.id.toString()
    );
    videoDeleted
      ? res.json({ message: "The video was deleted successfully" })
      : res.json({ message: "Video not found." });
  } catch (error) {
    console.error(error);
  }
};

export const updateVideo: RequestHandler = async (req, res) => {
  try {
    const videoUpdate= await Video.findByIdAndUpdate(req.params.id.toString(), req.body, {new:true});
    videoUpdate? res.json(videoUpdate): res.json({message: "Video not found." })
  } catch (error) {
    console.error(error);
  }
};
