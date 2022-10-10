export type Level = {
  code: string;
  tries: number;
  extraLives: number;
  skipped: boolean;
  coconutMaller: boolean;
  worldRecord: boolean;
  timestamp: number;
  rating: "like" | "meh" | "boo"
}