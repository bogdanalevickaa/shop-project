const products = [
    {
        id:1,
        name:"iPhone 7",
        description:"This is iPhone 7",
        type:"phone",
        capacity:256,
        price:800,
        image:"/images/products/iphone.png",
        topNews:true,
    },
    {
        id:2,
        name:"iPhone X",
        description:"This is iPhone X",
        type:"phone",
        capacity:256,
        price:1200,
        image:"/images/products/ipod.png",
    },
    {
        id:3,
        name:"iPhone 8",
        description:"This is iPhone 8",
        type:"phone",
        capacity:256,
        price:800,
        image:"/images/products/iphone.png",
    },
    {
        id:4,
        name:"iPhone 8 plus",
        description:"This is iPhone 8 plus",
        type:"phone",
        capacity:256,
        price:900,
        image:"/images/products/ipod.png",
    },
]
export const getProductsMap = (array) =>{
    return array.reduce((accObj,product)=>({
        ...accObj,
        [product.id]:product
    }),{})
}

export default products