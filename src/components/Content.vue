<template>
<div class="content">
  <div class="content_left">
    <div class="content_left_data content_left_actives" v-for="(data,index) in dataList" :key="index">{{data}}</div>
  </div>
  <div class="content_reight">
    <div>1</div>
    <div>2</div>
  </div>
</div>
</template>

<script>
const dataList = ['全部商品', '秒杀', '新鲜水果', '休闲食品', '蔬菜', '肉蛋家禽']
export default {
  name: 'Content',
  setup () {
    return {
      dataList
    }
  }
}
</script>

<style scoped lang="scss">
.content{
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top:1.85rem;
  bottom: .5rem;
  &_left{
    overflow-y: scroll;
    width: .76rem;
    background: #F5F5F5;
    &_data{
      line-height: .4rem;
      text-align: center;
      font-size: 14px;
      color: #333;

    }
    &_actives{
      background: #FFF;
    }
  }
  &_reight{
    flex: 1;
    overflow-y: scroll;
  }
}
</style>
