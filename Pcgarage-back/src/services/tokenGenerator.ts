import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export class TokenGenerator {
  private static expiresIn: number = 120;

  public generate = (input: AuthenticationData): string => {
    const newToken = jwt.sign(
      {
        id: input.id
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN,
      }
    );
    return newToken;
  };

  public verify(token: string) {
    const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
    const result = { id: payload.id, role: payload.role };
    return result;
  }
}

export interface AuthenticationData {
  id: string;
}

export default new TokenGenerator()
