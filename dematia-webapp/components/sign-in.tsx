import { signIn } from "@/auth"

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button type="submit" className="bg-purple-700 p-2 rounded-lg text-white font-bold">
        Signin with Google
      </button>
    </form>
  )
}