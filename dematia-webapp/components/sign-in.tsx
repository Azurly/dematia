import { signIn } from "@/auth"

export default function SignIn() {
  return (
    <section>
      {
      //Credential
      }
       <form
      action={async (formData) => {
        "use server"
        await signIn("credentials", formData)
      }}
    >
      <label>
        Email
        <input name="email" type="email" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button>Sign In</button>
    </form>
      {
      //Google
      }
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
    </section>
  )
}