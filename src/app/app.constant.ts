class Routes {
    constructor() {}
    CATALOGUE_GET = 'categories';
    PRODUCT_GET = 'items';
    ADD_PRODUCT = 'items';
}

class Constant {
    Routes = new Routes();
    constructor() {}
}

const CONSTANT = new Constant();
export default CONSTANT;
