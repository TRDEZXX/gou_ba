const person = {
    name: '露露姐姐',
    age: 1000000,
    address: {
      city: 'ChongQing',
      area: 'NanShan'
    },
    title: ['student',{year:2021, title:'GoodStudent'}]
  }


  const {name:name}=person;
  const {age:year}=person;
  const {address:{city}}=person;
  const {address:{area:mountain}}=person;
  const {title:[title1]}=person;
  const {title:[title2]}=person;
  let title3='God';
//   const {title3:title3}=person


  console.log(name) // 露露姐姐
  console.log(year) // 1000000 这里没有写错哈，就是要输出1000000，结合课件
  console.log(city) // ChongQing 
  console.log(mountain) // NanShan //这里没有写错，就是要输出NanShan，结合课件
  console.log(title1) // student
  console.log(title2) // GoodStudent  不会做T.T
  console.log(title3) // God 结合课件   不会做T.T