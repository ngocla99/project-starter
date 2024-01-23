import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { authSchema } from "@/lib/validations/auth"
import { useAuth } from "@/providers/auth-provider"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const Login = () => {
  const { setToken } = useAuth()
  const navigate = useNavigate()
  const form = useForm({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const handleLogin = () => {
    setToken("this is a test token")
    navigate("/", { replace: true })
  }

  const onSubmit = () => {
    handleLogin()
  }

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="nemo@nemo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="**********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>
          Sign in
          <span className="sr-only">Sign in</span>
        </Button>
      </form>
    </Form>
  )
}

export default Login
