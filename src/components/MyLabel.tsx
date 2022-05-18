import './my-label.css';

export interface MyLabelProps {
  /**
   * The label to display
   */
  label: string;
  /**
   * The size of the label
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * Display the label in all caps
   */
  allCaps?: boolean;
  /**
   * The text color of the label
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * The custom font color of the label
   */
  fontColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  color = 'primary',
  fontColor,
  label = 'No label',
  size = 'normal',
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
