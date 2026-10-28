import type { JwtPayload } from "jsonwebtoken";
import type { Role } from "../../domain/rol.js";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload & { id: string; role: Role };
    }
  }
}

export {};
