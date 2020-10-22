export interface OptionViewProps {
  children: React.ReactNode;
  highlighted?: boolean;
  contentName: string;
  loadingText: string;
  completedText: string;
  previewText: string;
  onSelectClick?: (event: React.FormEvent, done: () => void) => void;
  onPreviewClick?: (event: React.FormEvent) => void;
}
