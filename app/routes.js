import Router from "express";

const router = Router();

router.get("/", (_, res) => {
  res.send("you're at /api");
});

export default router;
