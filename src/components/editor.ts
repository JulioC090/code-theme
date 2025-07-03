import colors from '@/constants/colors';
import { WorkbenchColors } from '@/types';

const editor: WorkbenchColors = {
  'editor.background': colors.base.background,
  'editor.foreground': colors.base.foreground,
  'editorLineNumber.foreground': colors.accent.base,
  'editorLineNumber.activeForeground': colors.primary.base,
  'editorCursor.foreground': colors.primary.base,
  'editorCursor.background': colors.primary.base,
  'editor.selectionBackground': colors.accent.base,
  'editor.inactiveSelectionBackground': colors.accent.hover,
  'editor.selectionHighlightBackground': colors.accent.base,
  'editor.findMatchBackground': colors.accent.hover,
  'editor.wordHighlightBackground': colors.accent.hover,
  'editor.wordHighlightStrongBackground': colors.accent.base,
  'editor.wordHighlightStrongBorder': colors.primary.base,
  'editor.hoverHighlightBackground': colors.accent.hover,
  'editor.lineHighlightBorder': colors.base.border,
  'editorGroup.border': colors.accent.base,
};

export default editor;
