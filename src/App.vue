<script>
  // import {Token} from './utils/token'
  import {CardModel} from './model/CardModel'

  let Card = new CardModel()
  // let token = new Token()

  export default {
    created () {
      // 检查Token
      // token.verify()
      // 判断卡片初始化数据是否存在
      Card.initialize()
    }
  }
</script>
