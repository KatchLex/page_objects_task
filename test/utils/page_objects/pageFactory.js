const HomePage = require("./home_page/home_page");
const AllProductsPage = require("./all_products_page/all_products_page");
const BasePage = require("./base_page/base_page");

class PageFactory {
    static getPage(pageName) {
        switch (pageName) {
            case "Home":
                return new HomePage();
            case "All Products":
                return new AllProductsPage();
            default:
                return new BasePage();        
        };
    };
};

module.exports = PageFactory;