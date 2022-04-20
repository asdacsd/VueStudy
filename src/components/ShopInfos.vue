<template>
  <router-link :to="`/shop/${item._id}`"
               v-for="item in nearbyList" :key="item._id">
  <div
    class="item"
  >
    <img :src="item.imgUrl" class="item__img" alt="">
    <div class="content">
      <div class="content__title">{{ item.name }}</div>
      <div class="content__tags">
        <span class="content__tag">月售: {{ item.sales }}</span>
        <span class="content__tag">起送: {{ item.expressLimit }}</span>
        <span class="content__tag">基础运费: {{ item.expressPrice }}</span>
      </div>
      <p class="content__highlight">{{ item.slogan }}</p>
    </div>
  </div>
  </router-link>
</template>

<script>

export default {
  name: 'ShopInfos',
  props: ['nearbyList']
}

</script>

<style scoped lang="scss">
@import '../style/viriables.scss';
.item {
  display: flex;
  padding-top: .12rem;

  &__img {
    margin-right: .16rem;
    width: .56rem;
    height: .56rem;
  }
}

.content {
  flex: 1;
  padding-bottom: .12rem;
  border-bottom: 1px solid $content-bgColor;

  &__title {
    line-height: .22rem;
    font-size: .16rem;
    color: $content-fontcolor;
  }

  &__tags {
    margin-top: .08rem;
    line-height: .18rem;
    font-size: .13rem;
    color: $content-fontcolor;
  }

  &__tag {
    margin-right: .16rem;
  }

  &__highlight {
    margin: .08rem 0 0 0;
    line-height: .18rem;
    font-size: .13rem;
    color: #E93B3B;
  }
}

</style>
