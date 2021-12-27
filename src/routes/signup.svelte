<script>
  import {session} from '$app/stores';
  import supabase from "$lib/db";
  import {goto} from "$app/navigation";

  let email, password, name;

  async function signUp(){
      const { user, session:sesh, error } = await supabase.auth.signUp({
          email: email,
          password : password
      },
      {
        data: { 
          name : name
        }
      })
      if (error) alert(error.message)
      $session = sesh;
      goto("/checkmail");
      location.reload();
  }
  async function signInGoogle(){
    const supabase = createClient('https://pyprvuluxogjtjqfmmjr.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDQwNjA1MiwiZXhwIjoxOTU1OTgyMDUyfQ.I1zzXgootPcEQYTMxTyhCP-nAFu2bBNgxTB8K0mvXwk');
    supabase.auth.signIn({provider: 'google'}, goto('/'));
  }
</script>

<svelte:head>
	<title>Sign up</title>
</svelte:head>

<section class="vh-100" style="background-color: #fff;">
  <div class="container py-5 h-110">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-3 text-center">
            <form on:submit|preventDefault={signUp}>
              <h4 class="mt-1 mb-5 pb-1">Create an acount</h4>
              <!-- the first and last names -->
                <h6 class="text-start">Please sign up for an account</h6>
              <hr />
              <div class="row mb-4">
                <div class="col">
                  <div class="form-outline">
                    <input
                      type="name"
                      placeholder="Name"
                      class="form-control"
                      required
                      bind:value = {name}
                    />
                  </div>
                </div>
              </div>
              <div class="field">
                <!-- svelte-ignore a11y-label-has-associated-control -->
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    required
                    bind:value = {email}
                  />
                </div>
              </div>
              <div class="field">
                <div class="form-outline mb-4">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    required
                    bind:value = {password}
                  />
                </div>
              </div>
              <!--Statements-->
              <div class="form-check d-flex justify-content-center mb-3">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="form2Example3cg"
                />
                <label class="form-check-label" for="form2Example3g">
                  I agree all statements in <a href="#!" class="text-body"
                    ><u>Terms of service</u> and
                    <a href="#!" class="text-body"><u>Privacy Policy</u></a>
                  </a></label
                >
              </div>
              <div class="control">
                <input
                  type="submit"
                  class="btn btn-primary btn-lg btn-block"
                  value="Register"
                />
              </div>
            </form>
            <p class="text-center text-muted mt-4 mb-0">
              Have already an account? <a
                href="/signin"
                class="fw-bold text-body"><u>Login here</u></a
              >
            </p>
            <p>or sign up with:</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f" />
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1" on:click={signInGoogle}>
              <i class="fab fa-google" />
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter" />
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-github" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<style>
  .h-110 {
    height: 120% !important;
  }
</style>
