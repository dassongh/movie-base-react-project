import { Button } from './ToggleBtn.styled';

export default function ToggleBtn({ isActive, value, onClick, size }) {
  return (
    <Button isactive={isActive} size={size} onClick={onClick}>
      {value}
    </Button>
  );
}
