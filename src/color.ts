export class Color {
  /**
   *
   * @param r red [0, 255]
   * @param g green [0, 255]
   * @param b blue [0, 255]
   */
  constructor(
    public readonly r: number,
    public readonly g: number,
    public readonly b: number
  ) { }

  static clamp(x: number, min: number, max: number): number {
    return Math.min(Math.max(x, min), max);
  }

  static colorClamp(x: number): number {
    return Color.clamp(Math.floor(x), 0, 255);
  }

  static fromHex(hex: string): Color {
    if (hex[0] === "#") {
      hex = hex.slice(1);
    }
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    return new Color(
      parseInt("0x" + hex.slice(0, 2)),
      parseInt("0x" + hex.slice(2, 4)),
      parseInt("0x" + hex.slice(4, 6))
    );
  }

  static decToHex(dec: number): string {
    const hex = dec.toString(16).toUpperCase();
    return hex.length === 1 ? "0" + hex : hex;
  }

  toHex(prefix = true): string {
    const hex =
      Color.decToHex(this.r) + Color.decToHex(this.g) + Color.decToHex(this.b);
    return prefix ? "#" + hex : hex;
  }

  /**
   *
   * @param amount fade amount [-1, 1]
   * @returns faded color
   */
  fade(amount: number): Color {
    if (amount > 0) {
      return new Color(
        Color.colorClamp(this.r * (1 - amount) + 255 * amount),
        Color.colorClamp(this.g * (1 - amount) + 255 * amount),
        Color.colorClamp(this.b * (1 - amount) + 255 * amount)
      );
    } else {
      return new Color(
        Color.colorClamp(this.r * (1 + amount)),
        Color.colorClamp(this.g * (1 + amount)),
        Color.colorClamp(this.b * (1 + amount))
      );
    }
  }
}
