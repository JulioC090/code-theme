import colors from '@/constants/colors';
import { WorkbenchColors } from '@/types';

const sideBar: WorkbenchColors = {
  'sideBar.background': colors.base.background,
  'sideBar.border': colors.base.border,
  'sideBarTitle.foreground': colors.base.foreground,
  'sideBarSectionHeader.background': colors.widget.background,
  'sideBarSectionHeader.foreground': colors.widget.foreground,
  'sideBarSectionHeader.border': colors.widget.border,

  'list.hoverBackground': colors.accent.hover,
  'list.hoverForeground': colors.accent.foreground,
  'list.focusBackground': colors.accent.base,
  'list.focusForeground': colors.accent.foreground,
  'list.dropBackground': colors.base.background,
  'list.activeSelectionBackground': colors.accent.base,
  'list.activeSelectionForeground': colors.accent.foreground,
  'list.inactiveSelectionBackground': colors.accent.base,
  'list.inactiveSelectionForeground': colors.accent.foreground,
  'list.highlightForeground': colors.primary.base,
};

export default sideBar;
