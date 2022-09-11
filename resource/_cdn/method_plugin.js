(function($) {
    $.fn.method_plugin = function (options) {
        $("head").append('<link rel="stylesheet" href="/JQUERY_ESSENTIALS/project-base-jquery-essential/resource/_cdn/methods.css"/>');

        var defaults = {
            title: this.attr("data-title") || "Title here",
            desc: this.attr("data-desc") || "Description here",
            button: this.attr("data-button") || "Close",
            e_speed: 400
        };

        $.extend(defaults, options);

        var metodo_plugin = {
            open: function () {
                metodo_plugin.close();
                $(".main_div_content").prepend("<div class='j_method_plugin'><div class='j_method_plugin_content'></div></div>");
                $(".j_method_plugin_content").html("<h1>" + defaults.title + "</h1>");
                $(".j_method_plugin_content").append("<p>" + defaults.desc + "</p>");
                $(".j_method_plugin_content").append("<button class='j_method_plugin_close'>" + defaults.button + "</button>");
                $(".j_method_plugin").fadeIn(defaults.e_speed).css("display", "flex");
            },
            close: function () {
                $(".j_method_plugin").stop().fadeOut(defaults.e_speed, function () {
                    $(this).remove();
                });
            }
        };

        this.stop().click(function (e) {
            e.preventDefault();
            metodo_plugin.open();
        });

        console.log(this);

        this.parent().on("click", ".j_method_plugin_close", function (e) {

            console.log('here');
            e.preventDefault();
            metodo_plugin.close();
        });

        return this;
    };
}(jQuery));