import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Open Sans", "Helvetica", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
})

export default typography
export const rhythm = typography.rhythm
