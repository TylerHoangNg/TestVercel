<script>
  const today = new Date();
  let year = today.getFullYear();
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="/chain-1.0.0/assets/css/templatemo-chain-app-dev.css"
  />
</svelte:head>

<footer id="newsletter">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 offset-lg-2">
        <div class="section-heading">
          <h4>Join our mailing list to receive the news &amp; latest trends</h4>
        </div>
      </div>
      <div class="col-lg-6 offset-lg-3">
        <form id="search" action="/#" method="GET">
          <div class="row">
            <div class="col-lg-6 col-sm-6">
              <fieldset>
                <input
                  type="address"
                  name="address"
                  class="email"
                  placeholder="Email Address..."
                  autocomplete="on"
                  required
                />
              </fieldset>
            </div>
            <div class="col-lg-6 col-sm-6">
              <fieldset>
                <button type="submit" class="main-button"
                  >Send Now <i class="fa fa-angle-right" /></button
                >
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="copyright-text">
          <p>
            Copyright © {year} Horizan App Dev Company. All Rights Reserved.
            <br />Design:
            <a href="https://google.com/" target="_blank" title="css templates"
              >HoangNg</a
            ><br />
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
