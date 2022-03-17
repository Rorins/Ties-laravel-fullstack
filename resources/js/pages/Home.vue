<template>
  <div>
      <section>
      <div class="hero">
      <div class="container-fluid">
        <div class="row h_400 bg">
          <div class="hero-image d-none d-md-block col-12 col-md-7"></div>
          <div
            class="
              col-12 col-md-5
              bg_colorlight
              d-flex
              align-items-center
              text-center
            "
          >
            <p>
              "Just because no one else can heal your inner self, doesn't mean
              you should do it alone."
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--SECTION ONE-->
    <section class="section-one bg_colordark">
      <div class="container text-center">
        <h2>What you will find here</h2>
        <div class="row h_300 text-center">
          <div class="col-md-4 col-12">
            <h3>Empathy</h3>
            <img src="/storage/Avatars/hug.png" alt="" />
            <p>
              Your emotions are our emotions, you will have a safe enviroment to
              share your deepest struggles.
            </p>
          </div>
          <div class="col-md-4 col-12">
            <h3>Understanding</h3>
            <img src="/storage/Avatars/hug2.png" alt="" />
            <p>
              We want to offer a cozy space free of judgement, you can be you
              without fear.
            </p>
          </div>
          <div class="col-md-4 col-12">
            <h3>Communication</h3>
            <img src="/storage/Avatars/concentration.png" alt="" />
            <p>
              Human warmth and connection is what we aspire to provide through
              our strictly selected listeners.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--SECTION TWO-->
    <section class="section-two bg_colorlight">
      <div class="container">
        <div class="row h_300">
          <div class="col-12 text-center text-xl-start col-xl-6">
            <img src="/storage/Avatars/talking.png" alt="" />
          </div>
          <div class="col-12 col-xl-6">
            <h2>Listeners</h2>
            <p>
              We are not in any way mental health experts and always advice to
              seek professional help when needed. Ties is made of people just
              like you: our listeners are here because they want to be, they
              decided to offer their time freely to help us in our mission to
              bring a sheer of hope into this world, this is why we seek the
              most empathetic and kind individuals around the globe.
            </p>
            <h2 class="text-end">Chat</h2>
            <p>
              We believe technology can connect people, just like words, the
              right ones, can make a difference. This is why we provide online
              chats to interact with our available listeners worldwide. If you
              feel in need, lonely, in crisis, please feel free to chat with us.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--SECTION THREE-->
    <section class="section-three bg_colordark">
      <div class="container">
        <div class="row">
          <div class="col-12 col-xl-6">
            <h2>Community</h2>
            <p>
              Other people may share your same mental state, this is why we
              provided you with a forum to share your hardships with others.
              Offering you a safe space to call home is our mission, posts will
              be moderated before publication to help you feel comfortable.
            </p>
            <h2 class="text-end">Blog</h2>
            <p>
              Follow our mental health posts, we will share tips and interesting
              facts to make sure your stay can be engaging and useful.
            </p>
          </div>
          <div class="col-12 text-center col-xl-6">
            <img src="/storage/Avatars/study.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <!--SECTION FOUR-->
    <div class="section-four footer-top bg_colorlight">
      <div class="container">
        <div class="h-300 text-center">
          <img src="/storage/Avatars/empathy.png" alt="" />
          <p>Now that you know what we are all about, let's get started.</p>
          <router-link class="btn btn-outline-dark" role="button" :to="{name: 'subscribe'}">
              Get started
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:'Home',
}
</script>

<style scoped lang="scss">
@import '../../sass/front.scss';
/*HERO*/
.hero {
  padding-top: 20px;
  p{
    font-size: 30px;
  }
}
.hero-image {
  background-image: url('/storage/Avatars/image-from-rawpixel-id-2887608-jpeg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

/*Section one*/
.section-one{
  padding: 80px 0;
  img{
    width: 200px;
  }
  h2 {
  padding-bottom: 60px;
  font-size: 50px;
}
}

/*SECTION TWO*/
.section-two {
  padding: 80px 0;
  p {
  padding: 40px 0;
}
}

/*SECTION THREE*/
.section-three {
  padding: 80px 0;
  p {
  padding: 40px 0;
}
 img {
  width: 400px;
}
}

/*SECTION FOUR*/
.section-four {
  padding: 80px 0;
  img {
  width: 200px;
  height: 200px;
}
}
</style>
