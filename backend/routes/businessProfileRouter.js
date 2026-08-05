import express from "express";
import multer from "multer";
import path from "path";
import {
    createBusinessProfile,
    getMyBusinessProfile,
    updateBusinessProfile,
} from "../controllers/businessProfileController.js";

import { clerkMiddleware } from "@clerk/express";

const businessProfileRouter = express.Router();

businessProfileRouter.use(clerkMiddleware());

// multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(process.cwd(), "uploads"));
    },
    filename: (req, file, cb) => {
        const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, `business-${unique}${ext}`);
    },
});

const upload = multer({ storage });

//create
businessProfileRouter.post(
    "/",
    upload.fields([
        { name: "logo", maxCount: 1 },
        { name: "stamp", maxCount: 1 },
        { name: "signature", maxCount: 1 },
    ]),
    createBusinessProfile,
);

// to update
businessProfileRouter.put(
    "/:id",
    upload.fields([
        { name: "logo", maxCount: 1 },
        { name: "stamp", maxCount: 1 },
        { name: "signature", maxCount: 1 },
    ]),
    updateBusinessProfile,
);

businessProfileRouter.get("/:id", getMyBusinessProfile);

export default businessProfileRouter;
