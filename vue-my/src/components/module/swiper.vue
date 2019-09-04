<template>
  <div class="shop">
    <!-- 轮播列表 -->
    <swiper class="swiper" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="slide" v-for="(item,index) of shoplist" :key="index">
        <img class="slide_bg" src="../../static/images/home_bg.png" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "",

  data() {
    return {
      swiperOption: {
        //运动的方向
        direction: "horizontal",
        //自由轮播
        autoplay: {
          disableOnInteraction: false,
          delay: 2500
        },
        //阻止冒泡
        preventLinksPropagation: false,
        // 划过的时间
        speed: 300,
        // 滑动衔接
        loop: true,
        //手指
        grabCursor: true,
        //flex布局
        setWrapperSize: true,
        //点控制切换
        // paginationClickable:true,
        // 鼠标能控制
        // mousewheelControl:true,
        //监视父元素的变化
        // observeParents: true,
        // on: {
        //     //点击
        //   click: () => {
        //     // 通过$refs获取对应的swiper对象
        //     let swiper = this.$refs.mySwiper.swiper;
        //     let i = swiper.activeIndex;
        //     console.log(swiper);
        //   }
        // },

        // on: {
        //   slideChangeTransitionStart: ()=> {
        //     //获取轮播图片下标索引；这里有一个坑，之前网上找到的是用activeIndex，但后来网上说的是这个realIndex，
        //     //原来activeIndex是swiper2.0的；而realIndex是swiper3.0的，（使用realIndex才实现了下标索引）
        //     let swiper = this.$refs.mySwiper.swiper;
        //     console.log(swiper);
        //   }
        // },

        //下标点
        pagination: {
          // 元素
          el: ".swiper-pagination",
          //   点
          //   type: "bullets",
          //  数字
          type: "fraction",
          // 进度条
          //   type: "progressbar",
          // 自定义
          //   type: "custom",
          progressbarOpposite: false, //使进度条分页器与Swiper的direction参数相反
          bulletElement: "li", //设定分页器指示器（小点）的HTML标签。
          dynamicBullets: true, //动态分页器，当你的slide很多时，开启后，分页器小点的数量会部分隐藏。
          dynamicMainBullets: 1, //动态分页器的主指示点的数量
          hideOnClick: false, //默认分页器会一直显示。这个选项设置为true时点击Swiper会隐藏/显示分页器。
          clickable: true //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。

          //显示的个数
          // slidesPerView: 1.8,
          // 建个距离
          // spaceBetween: 0
          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，
          // 也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          // notNextTick: true
          //设定初始化时slide的索引
          // initialSlide: 0,
          // autoplay: {
          //   delay: 3000, //自动切换的时间间隔，单位ms
          //   stopOnLastSlide: false, //当切换到最后一个slide时停止自动切换
          //   stopOnLastSlide: true, //如果设置为true，当切换到最后一个slide时停止自动切换。
          //   disableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay。
          //   reverseDirection: true, //开启反向自动轮播。
          //   waitForTransition: true //等待过渡完毕。自动切换会在slide过渡完毕后才开始计时。
        }
      },
      shoplist: [1, 2, 3, 4, 5, 6, 7, 8]
    };
  },

  components: {
    swiper,
    swiperSlide
  },
  methods: {},
  created() {
    document.title = "乌梅干";
    //轮播限制(初始化)
    // this.swiperOption.autoplay =
    //   this.shoplist.length != 1
    //     ? {
    //         //控制只有一张图片的时候不自动轮播

    //         delay: 1500,

    //         stopOnLastSlide: false,

    //         disableOnInteraction: false
    //       }
    //     : false;
  },
  mounted() {
    //回调的方法
    // let vm = this;
    // this.$refs.mySwiper.swiper.on("slideChangeTransitionStart", function() {
    //   console.log(this)
    // });
  }
};
</script>

<style lang="scss" scoped>
@import "src/style/mixin";
.shop {
  .swiper {
    height: rem(360);
    // background: #f00;
    .slide_bg {
      width: 100%;
    }
    .swiper-pagination {
      text-align: right;
      .swiper-pagination-customs {
        color: #f0f;
      }
    }
  }
}
</style>
