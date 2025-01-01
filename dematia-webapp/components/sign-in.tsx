"use client"
import { signIn } from "@/auth"

export default function SignIn() {
  
  const credentialsAction = (formData: FormData) => {
    console.log(formData);
    signIn("credentials", formData)
  }

  return (
    <section className="content space-y-7 bg-slate-400 p-12 rounded-lg flex flex-col items-center">
      {
      //Credential
      }
       <form
        action={credentialsAction}
        className="space-y-4 flex flex-col"
      >
        <label htmlFor="credentials-email">
          Email
        </label>
        <input type="email" id="credentials-email" name="email" />
        <label htmlFor="credentials-password">
          Password
        </label>
        <input type="password" id="credentials-password" name="password" />
        <button type="submit" value="Sign In" className="p-1 bg-violet-700 rounded-lg text-white">Sign In</button>
      </form>
      <label>- or -</label>
      {
      //Google
      }
      <button onClick={() => signIn("google")} className="p-1 bg-violet-700 rounded-lg text-white">Sign in with Google</button>
    </section>
  )
}