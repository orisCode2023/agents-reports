import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDb from "./config/mongoConnection.js";
import authRouter from "./routes/auth.route.js";
import reportRouter from "./routes/report.route.js";
import adminRouter from "./routes/admin.route.js";
import protectRoute from "./middleware/protectRoute.js";
import protectRouteAdmin from "./middleware/protectRouteAdmin.js";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/auth/", authRouter);
app.use("/reports/", protectRoute, reportRouter);
// app.use('/admin/users', protectRouteAdmin, adminRouter);
app.use("/admin/users", adminRouter);

app.listen(PORT, () => {
  connectDb();
  console.log(`You on port ${PORT}`);
});
