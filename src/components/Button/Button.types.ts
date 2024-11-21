export interface IButtonProps {
  type: 'big' | 'small';
  isExternal?: boolean;
  onClick?: () => void;
  href?: string;
}
