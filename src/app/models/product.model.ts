class Product {
    constructor(
        public id: number = 0,
        public name: string = "",
        public description: string = "",
        public price: number = 0,
        public city: string = "",
        public phone: string = "",
        public publishDate: Date = new Date,
        public image: string = "",
        
    ){}
}

export default Product;