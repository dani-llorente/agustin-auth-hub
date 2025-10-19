import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SocialLoginButton } from "@/components/SocialLoginButton";
import { Separator } from "@/components/ui/separator";
import { Chrome, Facebook, Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import talleresLogo from "@/assets/talleres-logo.png";
import workshopHero from "@/assets/workshop-hero.jpg";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSocialLogin = (provider: string) => {
    toast.success(`Iniciando sesión con ${provider}...`, {
      description: "Serás redirigido en breve",
    });
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Por favor completa todos los campos");
      return;
    }
    toast.success("Iniciando sesión...", {
      description: "Verificando tus credenciales",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${workshopHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/90 backdrop-blur-sm" />
      </div>

      {/* Login Card */}
      <Card className="w-full max-w-md z-10 shadow-2xl border-2 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <CardHeader className="space-y-4 text-center pb-6">
          <div className="flex justify-center mb-2">
            <img 
              src={talleresLogo} 
              alt="Talleres Agustín Logo" 
              className="w-24 h-24 object-contain"
            />
          </div>
          <div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Talleres Agustín
            </CardTitle>
            <CardDescription className="text-base mt-2">
              Accede a tu cuenta de servicio automotriz
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 pb-8">
          {/* Social Login Buttons */}
          <div className="space-y-3">
            <SocialLoginButton 
              provider="Google" 
              icon={Chrome}
              onClick={() => handleSocialLogin("Google")}
            />
            <SocialLoginButton 
              provider="Facebook" 
              icon={Facebook}
              onClick={() => handleSocialLogin("Facebook")}
            />
          </div>

          {/* Divider */}
          <div className="relative">
            <Separator />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-card px-4 text-sm text-muted-foreground font-medium">
                O continúa con email
              </span>
            </div>
          </div>

          {/* Email/Password Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="correo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 border-2 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="password"
                  placeholder="Tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 h-12 border-2 focus:border-primary"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              variant="accent"
              className="w-full h-12 text-base font-bold"
            >
              Iniciar Sesión
            </Button>
          </form>

          {/* Footer Links */}
          <div className="space-y-3 text-center text-sm">
            <button className="text-primary hover:text-primary/80 font-medium transition-colors">
              ¿Olvidaste tu contraseña?
            </button>
            <div className="text-muted-foreground">
              ¿No tienes cuenta?{" "}
              <button className="text-primary hover:text-primary/80 font-semibold transition-colors">
                Regístrate aquí
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
        <p className="text-white/80 text-sm font-medium backdrop-blur-sm bg-primary/20 px-4 py-2 rounded-full">
          Servicio profesional automotriz desde 1995
        </p>
      </div>
    </div>
  );
};

export default Index;
