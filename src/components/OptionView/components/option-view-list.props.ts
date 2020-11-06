export interface OptionContent {
  id?: string;
  children?: React.ReactNode;
  highlighted?: boolean;
  contentName: string;
}

export interface OptionViewListProps {
  data: OptionContent[];
  loadingText: string;
  completedText: string;
  previewText: string;
  onSelectClick?: (element: OptionContent, done: () => void) => void;
  onPreviewClick?: (element: OptionContent) => void;
}
