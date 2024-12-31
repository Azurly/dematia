import { signIn } from "@/auth"

export default function SignIn() {
  return (
    <section className="content space-y-7 bg-slate-400 p-12 rounded-lg">
      {
      //Credential
      }
       <form
      action={async (formData) => {
        "use server"
        await signIn("credentials", formData)
      }}
      className="space-x-4"
    >
      <label>
        Email
        <input name="email" type="email"/>
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button className="bg-purple-700 p-2 rounded-lg text-white font-bold">Sign In</button>
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