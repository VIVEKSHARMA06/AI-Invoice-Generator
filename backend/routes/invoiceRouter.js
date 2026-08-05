import express from "express";
import { clerkMiddleware } from "@clerk/express";
import {
    createInvoice,
    getInvoices,
    updateInvoice,
    deleteInvoice,
    getInvoiceById,
} from "../controllers/invoiceController.js";

const invoiceRouter = express.Router();

// Middleware for authenticating requests
invoiceRouter.use(clerkMiddleware());

// Invoice routes
invoiceRouter.get("/", getInvoices);
invoiceRouter.get("/:id", getInvoiceById);
invoiceRouter.post("/", createInvoice);
invoiceRouter.put("/:id", updateInvoice);
invoiceRouter.delete("/:id", deleteInvoice);

export default invoiceRouter;
