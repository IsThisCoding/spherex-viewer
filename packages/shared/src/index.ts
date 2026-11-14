export interface Frame {
  id: string;
  mjd: number;
  band: number;      // 1-102
  detector: number;  // 1-6
  flags: number;
  url: string;
}
export {};
