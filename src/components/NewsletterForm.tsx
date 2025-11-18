'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterForm() {
  return (
    <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
      <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" required />
      <Button type="submit">Subscribe</Button>
    </form>
  )
}

