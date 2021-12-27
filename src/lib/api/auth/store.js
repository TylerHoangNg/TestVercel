import supabase from "$lib/db";

async function signup(){
    const { user, session, error } = await supabase.auth.signUp({
        email: 'nhh118.5511@gmail.com',
        password: 'example-password',
    })
    console.log(user, session, error)
}

async function signin(){
    const { user, session, error } = await supabase.auth.signIn({
        email: 'example@email.com',
        password: 'example-password',
    })
}