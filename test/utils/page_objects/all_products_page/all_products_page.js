const BasePage = require("../base_page/base_page");
const Element = require("../base_elements/base_element");

class AllProductsPage extends BasePage {
    constructor() {
      super();
      this.url = "https://www.westerndigital.com/search";
      this.searchPageTitle = new Element("All Products Title", ".title--mixed-case.color-almost-black");  
    };
    open() {
      return super.open(this.url);
    };
};

module.exports = AllProductsPage;