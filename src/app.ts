import express from "express";

const app = express();

app.get("/ping", (_req, res)=>{
	return res.send("pong");
});
export default app;
