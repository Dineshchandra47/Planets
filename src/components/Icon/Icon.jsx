import IcoMoon from "react-icomoon";
import iconSet from "../../selection.json";

export const Icon = ({ name, size, color, customStyle }) => {
  return (
    <IcoMoon
      iconSet={iconSet}
      disableFill="ture"
      icon={name}
      size={size}
      color={color}
      style={customStyle}
    />
  );
};
