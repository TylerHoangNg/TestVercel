<svelte:head>
	<title>Comfirm Email</title>
</svelte:head>
<section class="vh-100" style="background-color: #fff;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-110">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style="border-radius: 1rem;">
          <div class="card-body p-3 text-center">
            <form class="formtop">
              <span>
                <!-- svelte-ignore a11y-missing-attribute -->
                <img class="logo-svg" src="images/Horizan-animation.svg" />
                <h4 class="mt-1 mb-4 pb-1">Welcome to Horizan</h4>
              </span>
              <hr />
              <h6 class="text-start">Please check your <a href="https://gmail.com">mailbox</a> and go to the <a href="/">homepage</a></h6>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .h-110 {
    height: 110% !important;
  }
  .logo-svg {
    width: 50%;
    height: auto;
  }
</style>
