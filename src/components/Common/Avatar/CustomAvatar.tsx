
import { cn } from "@/lib/utils";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface CustomAvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  className?: string;
}

const CustomAvatar = ({
  src,
  alt,
  fallback = "U",
  className,
}: CustomAvatarProps) => {
  return (
    <Avatar className={cn("h-10 w-10", className)}>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
};

export default CustomAvatar;