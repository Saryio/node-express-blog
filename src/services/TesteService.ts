import { Request, Response } from "express";

export function bomdia(req: Request, res: Response) {
    res.send( req.params.uid || 'iaiao' )
}