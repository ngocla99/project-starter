"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"

import { checkEmailSchema } from "@/lib/validations/auth"
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
import { Icons } from "@/components/icons"

type Inputs = z.infer<typeof checkEmailSchema>

export function ResetPasswordForm() {
  const router = useRouter()
  const [isPending, startTransition] = React.useTransition()

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(checkEmailSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      try {
      } catch (err) {}
    })
  }

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="rodneymullen180@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending}>
          {isPending && (
            <Icons.spinner
              className="mr-2 size-4 animate-spin"
              aria-hidden="true"
            />
          )}
          Continue
          <span className="sr-only">
            Continue to reset password verification
          </span>
        </Button>
      </form>
    </Form>
  )
}
