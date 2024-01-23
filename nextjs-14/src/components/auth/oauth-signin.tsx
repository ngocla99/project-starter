"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

const oauthProviders = [
  { name: "Google", strategy: "oauth_google", icon: "google" },
  { name: "Facebook", strategy: "oauth_facebook", icon: "facebook" },
  { name: "Discord", strategy: "oauth_discord", icon: "discord" },
] satisfies {
  name: string
  icon: keyof typeof Icons
  strategy: string
}[]

export function OAuthSignIn() {
  const [isLoading, setIsLoading] = React.useState<string | null>(null)

  async function oauthSignIn(provider: string) {}

  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-4">
      {oauthProviders.map((provider) => {
        const Icon = Icons[provider.icon]

        return (
          <Button
            aria-label={`Sign in with ${provider.name}`}
            key={provider.strategy}
            variant="outline"
            className="w-full bg-background sm:w-auto"
            onClick={() => void oauthSignIn(provider.strategy)}
            disabled={isLoading !== null}
          >
            {isLoading === provider.strategy ? (
              <Icons.spinner
                className="mr-2 size-4 animate-spin"
                aria-hidden="true"
              />
            ) : (
              <Icon className="mr-2 size-4" aria-hidden="true" />
            )}
            {provider.name}
          </Button>
        )
      })}
    </div>
  )
}
