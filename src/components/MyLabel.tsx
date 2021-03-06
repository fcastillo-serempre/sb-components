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
  /**
   * The custom background color of the label
   */
  backgroundColor?: string;
}

export const MyLabel = ({
  allCaps = false,
  backgroundColor,
  color = 'primary',
  fontColor,
  label = 'No label',
  size = 'normal',
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default MyLabel;
