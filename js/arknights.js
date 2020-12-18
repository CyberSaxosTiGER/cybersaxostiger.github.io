var index = /** @class */ (function () {
    function index() {
        var _this = this;
        this.index = [];
        this.headerLink = document.getElementsByClassName("headerlink");
        this.tocLink = document.getElementsByClassName("toc-link");
        this.postContent = document.getElementById("post-content");
        this.article = document.getElementsByTagName("article")[0];
        if (this.article) {
            this.article.addEventListener("scroll", function () {
                for (var i = 0; i < _this.headerLink.length; i++) {
                    var link = _this.headerLink.item(i);
                    if (link) {
                        _this.index.push(link.getBoundingClientRect().top);
                    }
                }
                for (var i in _this.index) {
                    var item = _this.tocLink.item(Number(i));
                    item.classList.remove('active');
                }
                for (var i in _this.index) {
                    var item = _this.tocLink.item(Number(i));
                    if (_this.index[i] > 0) {
                        item.classList.add('active');
                        break;
                    }
                }
                _this.index = [];
            });
        }
    }
    return index;
}());
new index();
