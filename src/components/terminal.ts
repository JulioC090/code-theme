import colors from '@/constants/colors';
import { WorkbenchColors } from '@/types';

const terminal: WorkbenchColors = {
  'panel.background': colors.base.background,
  'panel.border': colors.base.border,
  'panelTitle.activeBorder': colors.primary.base,
  'panelTitle.activeForeground': colors.base.foreground,
  'panelTitle.inactiveForeground': colors.input.placeholder,
  'terminal.selectionBackground': colors.accent.base,
  'terminalCursor.background': colors.accent.base,
  'terminalCursor.foreground': colors.primary.base,
  'badge.background': colors.accent.base,
  'badge.foreground': colors.accent.foreground,
  'terminal.border': colors.accent.base,
};

export default terminal;
