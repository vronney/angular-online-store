export  class Product {
    constructor(
        // "?", meaning is optional - can have data or not
        public id?: number,
        public image?: string,
        public name?: string,
        public category?: string,
        public description?: string,
        public price?: number) { }
}
