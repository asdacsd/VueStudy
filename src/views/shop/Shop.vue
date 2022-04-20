<template>
  <div class="wrapper">
    <div class="search">
      <div class="search_back iconfont"
           @click="back">&#xe6f2;
      </div>
      <div class="search_content">
        <span class="search_content_icon iconfont">&#xe62d;</span>
        <input class="search_content_input"
               placeholder="please input name"/>
      </div>
    </div>
    <ShopOne :item="nearbyList"></ShopOne>
    <Content></Content>
  </div>
</template>

<script>
import ShopOne from '@/components/ShopOne'
import Content from '@/components/Content'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { get } from '@/utils/request'

const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const route = useRoute()
  const id = route.params.id
  const getNearbyList = async () => {
    const result = await get(`/api/shop/${id}`)
    console.log(id)
    if (result?.errno === 0) {
      nearbyList.value = result.data
      console.log(result?.data)
    }
  }
  return { nearbyList, getNearbyList }
}
const routerBack = () => {
  const router = useRouter()
  const back = () => {
    router.push({ name: 'MyEcharts' })
  }
  return back
}
export default {
  name: 'Shop',
  components: { ShopOne, Content },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    const back = routerBack()
    getNearbyList()
    return { nearbyList, back }
  }
}
</script>

<style scoped lang="scss">
@import '../../style/viriables.scss';

.wrapper {
  padding: 0.18rem;
}

.search {
  margin: 0.2rem 0 0.04rem 0;
  display: flex;
  line-height: .32rem;
  //height: 1rem;
  //background: #fff;
  &_back {
    width: .3rem;
    //background: #000;
    font-size: .24rem;
  }

  &_content {
    margin-left: 0.1rem;
    flex: 1;
    //background-color: #FF55FF;
    background-color: $search-bgColor;
    border-radius: .16rem;
    display: flex;

    &_icon {
      width: .44rem;
      height: .32rem;
      line-height: .32rem;
      //margin-left: .05rem;
      //background-color: blue;
      text-align: center;
    }

    &_input {
      display: block;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      font-size: .14rem;

      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
