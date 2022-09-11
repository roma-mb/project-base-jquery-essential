(function ($) {
    $.fn.normalize_height = function () {
        var element = this;
        console.log(element);
        var maxHeight = {};
        $.each(element.parent(), function (i, e) {
            $(e).find(element).css("height", "auto");
            maxHeight = $(e).find(element).map(function (il, el) {
                return $(el).height();
            }).get();

            // console.log(maxHeight);
            $(e).find(element).height(Math.max.apply(this, maxHeight));
        });

        return this;
    };
}(jQuery));