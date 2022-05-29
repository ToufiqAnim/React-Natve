import { typography } from "../../Theme/Typography";
import { colors } from "../../Theme/Colors";
const BASE = {
  fontFamily: typography.primary,
  fontSize: 16,
  fontWeight: 400,
  color: colors.white,
};
const BASE_BOLD = {
  fontFamily: typography.primaryBold,
  fontSize: 16,
  fontWeight: 500,
  color: colors.black,
};
const BOLD = {
  fontFamily: typography.bold,
  color: colors.white,
  fontWeight: 600,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 24,
  },
  h3: {
    ...BOLD,
    fontSize: 20,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 16,
  },
  h5: {
    ...BASE_BOLD,
    fontSize: 14,
  },
  h6: {
    ...BASE,
    fontSize: 14,
  },
};
