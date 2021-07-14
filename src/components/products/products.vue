

<template>
  <div class="products">
    <div class="card-columns">
    <div class="card" style="width: 18rem;"  v-for="(product) in productoss" v-bind:key="product.ite">
        
        <div class="card-body">
            <img :src="product.img" class="card-img-top">
            <h5 class="card-title">{{product.name}}</h5>
            <p class="card-text">{{product.price}}</p>
            <a type="button" class="btn btn-outline-primary btn-block">ver mas</a>
        </div>
    </div>
</div>
  </div>
</template>

<script>

export default {
  name: 'Products',
  props: {
    productoss:{
        default:()=>{return [
        {
            name:'Portátil Huawei ',
            description:'Matebook 13',
            img:'./img/pcgamer.jpg',
            price:'3379900',
        },
        {
            name:'Portátil Asus ',
            description:'X409ma-bv155t',
            img:'./img/pc1.png',
            price:'1219900'
        },
        {
            name:'Portatil Dell',
            description:'Inspiron 3493',
            img:'/img/dell.JPG',
            price:'1899900'
        },
        {
            name:'Portátil Hp',
            description:'255 G7 Amd Athlon',
            img:'/img/hp.JPG',
            price:'1339900'
        },
        {	
            name:'Portátil Acer',
            description:'34fr',
            img:'/img/acer.JPG',
            price:'1759900'
        },
        {
            name:'Lenovo Ideapad',
            description:'L340 I5 9300h',
            img:'/img/lenovo.JPG',
            price:'3299999'
        },
        {
            name:'Macbook',
            description:'Air 2020',
            img:'/img/makbuk.JPG',
            price:'4394000'
        }
    ]}
    }
  }
}
</script>