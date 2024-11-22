import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Initialize App
const app = express();
const PORT = process.env.PORT || 8000;

// env configuration
dotenv.config();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to fetch exchange rates
app.get("/api/v1/rates", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${process.env.API_URL}`, {
      params: { apikey: process.env.API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching rates", error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
