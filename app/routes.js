import Router from "express";
import animalsController from "./controller.js";

const router = Router();

router.get("/", (_, res) => {
  res.send("you're at /api");
});

router.get("/animals", async (req, res) => {
  const animals = await animalsController.index(req.query.sort);
  res.json(animals);
});

export default router;
