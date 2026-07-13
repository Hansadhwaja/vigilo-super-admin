import LoginForm from "@/components/Auth/Login/Form/LoginForm"
import type { LoginFormValues } from "@/schemas/auth.schemas"
import { useLoginMutation } from "@/store/api/auth/authApi"
import { setCredentials } from "@/store/slices/auth/authSlice"

import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import { toast } from "sonner"

const LoginPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [login, { isLoading }] = useLoginMutation()

  const handleLogin = async (values: LoginFormValues) => {
    try {
      const response = await login({
        ...values,
        role: "superadmin",
      }).unwrap()

      const { token, user } = response

      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))

      dispatch(setCredentials({ token, user }))

      toast.success(response.message || "Login successful")
      navigate("/", { replace: true })
    } catch (error) {
      console.error(error)
      toast.error("Login failed. Please check your credentials.")
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Global Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-background to-primary/5" />

      <div className="absolute -top-40 -left-40 size-96 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -right-40 -bottom-40 size-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative z-10 grid min-h-screen lg:grid-cols-2">
        {/* Branding Section */}
        <section className="hidden p-12 lg:flex lg:flex-col lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-xl bg-foreground/10 p-1.5 ring-1 ring-border">
              <img
                src="/assets/logo/logo.png"
                alt="Vigilo logo"
                className="size-full object-contain"
              />
            </div>

            <div>
              <h2 className="text-2xl leading-none font-semibold">Vigilo</h2>

              <span className="mt-1 block text-xs font-medium tracking-widest text-primary uppercase">
                Super Admin
              </span>
            </div>
          </div>

          <div className="max-w-lg space-y-6">
            <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-primary">
              Administration Console
            </span>

            <h1 className="text-4xl leading-tight font-semibold xl:text-5xl">
              Smarter security.
              <br />
              Better control.
            </h1>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Manage tenants, subscriptions, platform operations, and security
              activity from one centralized administration platform.
            </p>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vigilo. All rights reserved.
          </p>
        </section>

        {/* Login Section */}
        <section className="flex items-center justify-center p-5 sm:p-8 lg:p-10">
          <div className="w-full max-w-md rounded-2xl border border-border bg-card/60 p-6 text-card-foreground shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10">
            {/* Mobile Branding */}
            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="flex size-12 items-center justify-center rounded-xl bg-muted p-1.5 ring-1 ring-border">
                <img
                  src="/assets/logo/logo.png"
                  alt="Vigilo logo"
                  className="size-full object-contain"
                />
              </div>

              <div>
                <h1 className="text-xl leading-none font-semibold">Vigilo</h1>

                <span className="mt-1 block text-xs font-medium tracking-widest text-primary uppercase">
                  Super Admin
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-tight">
                Welcome back
              </h2>

              <p className="text-muted-foreground">
                Sign in to access the Vigilo administration console.
              </p>
            </div>

            <div className="mt-8">
              <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
            </div>

            <p className="mt-8 text-center text-xs text-muted-foreground lg:hidden">
              © {new Date().getFullYear()} Vigilo. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default LoginPage
