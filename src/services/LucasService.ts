import { Request, Response } from "express";

export function index(req: Request, res: Response) {
    res.send("Index")
}

export function lucas(req: Request, res: Response) {
    res.send("Lucas")
}