import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface SocialLoginButtonProps {
  provider: string;
  icon: LucideIcon;
  onClick?: () => void;
}

export const SocialLoginButton = ({ provider, icon: Icon, onClick }: SocialLoginButtonProps) => {
  return (
    <Button
      variant="social"
      className="w-full h-12 text-base font-semibold"
      onClick={onClick}
    >
      <Icon className="w-5 h-5" />
      Continuar con {provider}
    </Button>
  );
};
