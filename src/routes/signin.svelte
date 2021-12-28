
<script>
  import {session} from '$app/stores';
  import supabase from "$lib/db";
  import {goto} from '$app/navigation';

  let email, password;

  async function signIn(){
      const { user, session:sesh, error } = await supabase.auth.signIn({
          email,
          password
      })
      if (error) alert(error.message)
      $session = sesh;
      goto("/");
      location.reload();
  }

</script>

<svelte:head>
	<title>Sign in</title>
</svelte:head>

<section class="vh-100" style="background-color: #fff;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-110">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem;">
            <div class="card-body p-3 text-center">
              <form class="formtop" on:submit|preventDefault={signIn}>
                <span>
                  <!-- svelte-ignore a11y-missing-attribute -->
                  <img class="logo-svg" src="images/Horizan-animation.svg"/>
                  <h4 class="mt-1 mb-4 pb-1">Welcome to Horizan</h4>
                </span>
                  <h6 class="text-start">Please sign in your account</h6>
                <hr />
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
                  <!-- svelte-ignore a11y-label-has-associated-control -->
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
                <!-- Checkbox -->
                <div class="form-check d-flex justify-content-start mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  <label class="form-check-label" for="form1Example3">
                    &nbsp;&nbsp;Remember password
                  </label>
                  <div class="col">
                    <!-- Simple link -->
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>
                <div class="control">
                  <input
                    type="submit"
                    class="btn btn-primary btn-lg btn-block"
                    value="Login"
                  />
                </div>
              </form>
              <p>
                Do not have an account ?
                <a href="/signup">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <style>
    .h-110{
      height:110%!important
    }
    .logo-svg{
      width: 50%;
      height: auto;
    }
  
  </style>