'use server'

import { permanentRedirect, redirect } from "next/navigation"

export async function createUserName() {
    // do some stuff and post username...

    // redirect('/login')
    permanentRedirect('/login')
    // localhost:3000/profile/{username}
  }