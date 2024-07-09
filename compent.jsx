/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3SjITiiixh9
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="w-full max-w-md p-6 space-y-4 bg-card rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary">Iniciar sesión</h1>
          <p className="text-muted-foreground">Ingresa tus credenciales para acceder a tu cuenta.</p>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Correo electrónico</Label>
            <Input id="email" type="email" placeholder="ejemplo@dominio.com" required />
          </div>
          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input id="password" type="password" required />
          </div>
          <div className="flex items-center justify-between">
            <Button type="submit" className="w-full">
              Iniciar sesión
            </Button>
          </div>
        </form>
        <div className="text-center">
          <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
    </div>
  )
}