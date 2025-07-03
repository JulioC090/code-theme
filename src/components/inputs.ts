import colors from '@/constants/colors';
import { WorkbenchColors } from '@/types';

const inputs: WorkbenchColors = {
  'input.foreground': colors.base.foreground,
  'input.background': colors.input.background,
  'inputOption.activeBackground': colors.accent.base,
  'inputOption.activeForeground': colors.accent.foreground,
  'input.border': colors.input.border,
  'input.placeholderForeground': colors.input.placeholder,

  'checkbox.background': colors.input.background,
  'checkbox.foreground': colors.primary.base,

  'settings.dropdownBackground': colors.input.background,
  'settings.dropdownForeground': colors.input.foreground,
  'settings.dropdownListBorder': colors.input.background,
  'settings.modifiedItemIndicator': colors.primary.base,
};

export default inputs;
