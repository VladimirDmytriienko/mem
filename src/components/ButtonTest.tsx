"use client"
import { toast } from "sonner"
 
import { Button } from "@/components/ui/button"

export default function ButtonTest() {
  return (
    <Button
    variant="outline"
    onClick={() =>
      toast("the project created", {
        description: "Sunday, january 14, 2024 at 2:08 AM",
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      })
    }
  >
    Some info
  </Button>
  )
}
