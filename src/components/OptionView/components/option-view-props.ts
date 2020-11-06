export interface OptionViewProps {
  children: React.ReactNode;
  highlighted?: boolean;
  contentName: string;
  loadingText: string;
  completedText: string;
  previewText: string;
  onSelectClick?: (event: React.FormEvent<Element>, done: () => void) => void;
  onPreviewClick?: (event: React.FormEvent<Element>) => void;
}
