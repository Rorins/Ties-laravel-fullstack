<template>
 <header>
      <!--NAVBAR-->
    <nav
      class="
        navbar
        fixed-top
        navbar-expand-lg navbar-light
        justify-content-between
      "
    >
      <div>
        <a class="navbar-brand" href="#"><img src="" alt="" /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>

      <!--RIGHT SIDE NAVBAR-->
      <div class="right_nav">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li>
              <router-link class="btn btn-outline-dark" role="button" :to="{name: 'subscribe'}">Get started</router-link>
            </li>
            <li class="nav-item active">
                  <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'listeners'}">Listeners</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Community
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">About Us </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
name:'Header',
}
</script>

<style scoped lang="scss">
@import '../../sass/front.scss';
/*NAVBAR*/
.navbar {
  background-color: #ebe2db;
  img{
    height: 50px;
  }
}
.right_nav li {
  padding: 0 10px;
}
</style>
