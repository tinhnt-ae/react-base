import Chip from "@mui/material/Chip";

// type
type Props = {
  name: string;
  onDelete: () => void;
  color?: "primary" | "info" | "warning" | "error";
  size?: "small" | "medium";
};

export default function CSChip({
  color,
  size,
  name,
  onDelete,
}: Props) {
  return (
    <Chip label={name} size={size} color={color} onDelete={onDelete}/>
  );
}
