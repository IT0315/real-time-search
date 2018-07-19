import Mock from 'mockjs' // 获取mock对象

const vehicle = Mock.mock(
  '/api/vehicle', 'post', (req, res) => {
    return {
      code: 200,
      data: [{
        id: 1,
        name: '张三的家在安徽',
        color: 1,
        buyTime: '2017-04-01'

      }, {
        id: 2,
        name: '安徽是张三的老家',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 3,
        name: '张三是从安徽出来的',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: '张三离开安徽很长时间了',
        color: 1,
        buyTime: '2017-04-01'
      },
      {
        id: 4,
        name: '张三很想念安徽',
        color: 1,
        buyTime: '2017-04-01'
      }],
      message: '查询成功'
    }
  })
const user = Mock.mock(
  '/api/user', 'get', (req, res) => {
    return {
      code: 200,
      data: {
        id: 1,
        sex: 1,
        age: 25,
        createTime: '2017-04-01'
      },
      message: '查询成功'
    }
  })
export default { vehicle, user }
