<template>
<section class="d-flex justify-content-center bg_colorlight">
        <div class="user-info bg_colordark text-center" >
        <h1>Tell us a bit about you</h1>
        <h3>How can we call you</h3>
          <div class="selected-avatar center" >
              <img
                :src="`/storage/Avatars/${currentAvatar}.png`"
                alt=""
              />
            </div>
        <input type="text" placeholder="Nickname" />

        <!--AVATAR CHOICE-->
        <h4>Pick an avatar icon you think suits you better</h4>
        <h5>Click here when you're all set</h5>
        <button type="button" class="btn btn-outline-dark btn btn-light">
          Continue
        </button>

          <VueSlickCarousel v-if="avatars.length > 0" v-bind="settings">
          <div v-for="(avatar,index) in avatars" :key="`avatar${index}`">
            <div @click="setAvatar(index)" class='avatar'>
                <img :src="`/storage/Avatars/${avatar}.png`" alt="avatar">
            </div>
          </div>
          </VueSlickCarousel>

      </div>
  </section>
</template>

<script>
//IMPORTS
import VueSlickCarousel from 'vue-slick-carousel';
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
name:'Subscribe',
components:{
    VueSlickCarousel,
},
data(){
  return{
    //AVATARS
    avatars:[
      '0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'
    ],
  //CAROUSEL SETTINGS
    settings:{
    arrows: true,
    dots: false,
    rows:1,
    slidesToShow: 6,
    infinite: true,
    focusOnSelect:true,
    speed: 500,
    },
  //CURRENT AVATAR
   currentAvatar: 0,
  }
},
methods:{
//CURRENT AVATAR SET WITH INDEX
setAvatar(avatarIndex) {
    this.currentAvatar = avatarIndex;
    },
}
};
</script>

<style scoped lang="scss">
@import '../../sass/front.scss';

/*SECTION*/
.user-info {
  margin: 100px 0;
  width: 70%;
  border: 3px solid #ddd3c9;
  border-radius: 20px;
  padding: 40px 50px;
}
.user-info h4 {
  padding: 20px;
}

/*AVATAR*/
.avatar,
.selected-avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: white;
  margin: 20px auto;
}
.avatar {
  margin: 10px;
}

.avatar img:hover {
  filter: grayscale(0.8);
  cursor: pointer;
}

.user-info img {
  height: 100%;
  object-fit: cover;
}
</style>
