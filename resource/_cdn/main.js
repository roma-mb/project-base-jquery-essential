// #### M1 - jQuery Essentials

/*
* [standart] - When it expects it to be the project's native standard library and does not use other
*/
// $(document).ready(function () {
//    $(".jquery_essentials").html("jQuery Started!");
// });

/*
* [stardart-short-form] - Loading before another lib
*/
// $(function () {
//    $(".jquery_essentials").html("Jquery started with trigger!");
// });

/*
* Loading before another lib
*/
// jQuery(function($){
//    $(".jquery_essentials").html("jQuery before another lib!");
// });

/*
* Loading after another lib
*/
// var $j = jQuery.noConflict();
// $j(document).ready(function(){
//    $j(".jquery_essentials").html("jQuery after another lib!");
// });

// #### M1 - Jquery Essentials

// $(function () {
        //     $(".jquery_essentials").html("jQuery Essentials!");
        
        //     console.clear(); //Console was cleared

        //     console.group("Grouped messages.");
        //         console.log("Log");
        //         console.info("Info");
        //         console.warn("Warn");
        //         console.error("Error");
        //     console.groupEnd();

        //     var registration = false; //Variável de teste

        //     console.group("User registration.");
        //         console.info("Registration started."); //Gera Informação

        //         if (registration === true) {
        //             console.log("Success!");
        //         } else {
        //             console.warn("Error");
        //         }
        //     console.groupEnd();
// });

// #### M2 - Selectors and filters

// $(function() {
        // $("b").text("<b>");
    
        // $(".example-filters-class").css("color", "blue");
        
        // $("#example-filters-id").text("Id = example-filters-id");
        
        // $("div *").css("border", "1px solid #ccc");
        
        // $(".jquery, b").css({ background: "white", color: "red",'border-radius': "4px",});
        
        // $("b").add("p").css("font-size", "2em");

        // $("li b").css("color", "red");

        // $("ul > *").css("color", "blue");
    
        // $("li + *").css("background", "yellow");
        
        // $("h3 ~ p").text("h3 ~ p");

        // $("p:not('.p')").css("background", "gray");

        // $("p:first").css("color", "red");

        // $("p").last().css({ background: "white", color: "red",'border-radius': "4px",});

        // $("p:even").css("background", "#eee");

        // $("p:odd").css("background", "#ccc");

        // $("p:eq(1)").text("p:eq(1)");

        // $("p:gt(0)").text("p:gt(0)");

        // $("p:lt(1)").text("p:lt(1)");

        // $(".main_div_content :header").css({
        //         "font-size": "1.4em",
        //         color: "#888"
        // });

        // $(".main_div_content :header span").css("color", "blue");

        // function animate_el(elemento) {
        //         $(elemento).fadeToggle(400, function () {
        //                 animate_el(elemento);
        //         });
        // }

        // animate_el('.main_div_content :header span');

        // var count = 1;
        // setInterval(function () {
        //         $(":animated").text(count);
        //         count++;
        // }, 800);

        // $(":focus").css("background", "green"); "input autofocus"

        // console.log($(":root"));

        // $("[class]").css("background", "#ccc");

        // $("[data-attr='true']").css("background", "#006699");

        // $("a[title!='my-title']").css("background", "red");

        // $("[class^='begin-example']").css("background", "#0099ff");

        // $("[class$='div']").css("color", "#000");

        // $("[class*='b']").css("font-weight", "bold");

        // $("[class~='div']").css("text-transform", "uppercase");

        // $("[class|='example']").css("border-bottom", "3px solid red");

        // $("[class*='combine'][data-combine]").css("color", "pink");
// });

// #### M3 - Manipulators

// $(function(){
        // var text = $(".main_div_content_head").text();
        // $(".main_div_content_head_sub").text("Text h1 - " + text);

        // var html = $(".main_div_content_head").html();
        // $(".main_div_content p").html(html);

        // $(".main_div_content_examples").append("<p> First </p>");
        // $(".main_div_content_examples").append("<p> Second </p>");
        
        // $(".main_div_content_head_sub").text("Subtitle!");
        // $(".main_div_content_head_sub").appendTo($(".main_div_content_examples"));
        // $("<p>#BoraProgramar!</p>").appendTo($(".main_div_content_examples"));
        
        // $(".main_div_content_examples").prepend("<h3>Results:</h3>");
        
        // $("<p>prependTo:</p>").prependTo($(".main_div_content_examples p:first"));

        // var title = $("title").text();
        // $(".main_div_content_examples").before("<h1>" + title + "</h1>");
        
        // $("<p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>").insertBefore($(".main_div_content_examples"));
        
        // var old_text = "<p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard <b>dummy text ever since the 1500s</b>,\
        // when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic\
        // typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with\
        // desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>";
        
        // $(".main_div_content_examples").after(old_text);
        // $(".main_div_content_examples").after("<a class='link' href='#'>Continue reading ...</a>");
        // $(".link").insertAfter(".main_div_content p:last");

        // $("<p>prependTo:</p>").prependTo($(".main_div_content p:first"));
        // $("p").wrapAll("<div>");
        // $("p").wrapInner("<span>");
        // $("span").unwrap("p");
        // $("span").wrap("<h2>");

        // --------------------------------------------------------------------------------------------------------------------------------------

        // $("<p>Text1</p>").insertAfter($(".main_div_content p:last"));
        // $("<p>Text2</p>").insertAfter($(".main_div_content p:last"));
        // $("<p>Text3</p>").insertAfter($(".main_div_content p:last"));
        // $("<button class=button>Button</button>").insertAfter($(".main_div_content p:last"));

        // $(".main_div_content p").remove();

        // $(".main_div_content").empty();

        // setTimeout(function () {
        //         $(".main_div_content_examples").text("#letsprogram!");
        // }, 2000);

        // $("p").on("click", function () {
        //         $(this).toggleClass("active_manipulators");
        // });

        // var p;

        // $(".button").on("click", function () {
        //         if (p) {
        //                 p.appendTo(".main_div_content");
        //                 p = null;

        //                 return;
        //         } 
                
        //         p = $(".main_div_content_examples").dettach();
        // });

        // var href = 'www.google.com';
        // $(".main_div_content p:last").replaceWith("<p><a target='_blank' href='https://" + href + "'>" + href + "</a></p>");

        // $(".button").remove();
        // $("<p>#letsprogram!</p>").replaceAll("p");

        // --------------------------------------------------------------------------------------------------------------------------------------

        // $("p").css("color", "#006699");

        // $("p").css({
        //         color: '#555',
        //         "border-bottom": "1px solid #ccc"
        // });

        // $("<p class=second id=second_id>Text1</p>").insertAfter($(".main_div_content p:last"));
        // $(".second").attr("id", "second_id_update");
        // console.log($(".second").attr("id"));

        // $("<input type=checkbox checked=checked value=email>Checked!</input>").insertAfter($(".main_div_content p:last"));
        // console.log($("input").prop("checked"));
        // console.warn($("input").attr("checked"));

        // $("input").val("name");
        // console.warn($("input").val());

        // $(".main_div_content_examples").clone().appendTo("div").html("#letsprogram!");

        // $("div").on("click", function () {
        //         $(this).toggleClass("active_manipulators");

        //         //Verifica uma classe
        //         if ($(this).hasClass("main_div_content")) {
        //                 $(this).removeClass("main_div_content");
        //                 $(this).find("p").slideUp();
        //                 $("input").removeAttr("checked");

        //                 return;
        //         } 

        //         $(this).addClass("main_div_content");
        //         $(this).find("p").slideDown();
        //         $("input").attr("checked", "checked");
        // });

        // --------------------------------------------------------------------------------------------------------------------------------------

        // console.group("W");
        // console.log($("div:first").width());
        // console.log($("div:first").innerWidth());
        // console.log($("div:first").outerWidth());
        // console.groupEnd();

        // console.group("H");
        // console.log($("div:first").height());
        // console.log($("div:first").innerHeight());
        // console.log($("div:first").outerHeight());
        // console.groupEnd();

        // $("div").css("float", "left").outerWidth("50%");

        // $(".main_div_content").clone().appendTo("main");
        // $(".main_div_content").clone().appendTo("main");

        // var h = 0;
        // $("div").each(function (i, el) {
        //         if ($(el).outerHeight() > h) {
        //                 h =  $(el).outerHeight();
        //         }
        // }).outerHeight(h);

        // --------------------------------------------------------------------------------------------------------------------------------------

        // var element = $(".main_div_content_examples");
    
        // console.group("OFFSET");
        // console.log(element.offset());
        // console.log("TOP: " + element.offset().top);
        // console.log("LEFT: " + element.offset().left);
        // console.groupEnd();
    
        // var el_off = element.offset();
        // element.after("<p class='offset'>Cords: Top: " + el_off.top + " Left: " + el_off.left + "</p>");
        // $(".offset").offset({top: el_off.top + 30, left: el_off.left + 10});
        
        // console.group("POSITION");
        // console.log(element.position());
        // console.log("TOP: " + element.position().top);
        // console.log("LEFT: " + element.position().left);
        // console.groupEnd();
        
        // $("body").outerWidth(3000).outerHeight(3000);
        // $(window).scroll(function () {
        //     var el = $(this);
        //     console.log("TOP: " + el.scrollTop() + " LEFT: " + el.scrollLeft());
        // });
// });

// #### M4 - Middlemen

// $(function() {
        // $.each($("p"), function (i, el) {
        //         var el = $(el);
        //         el.html(el.html() + " - " + i);
        //     });
        
        //     $("p").first().css("color", "silver");
        //     $("p").eq(1).css("color", "red");
        //     $("p").eq(2).css("color", "orange");
        //     $("p").last().css("color", "pink");
        
        //     $("p").slice(0, 4).css({
        //         background: "gray",
        //         padding: "10px"
        //     });

        // --------------------------------------------------------------------------------------------------------------------------------------
        
        // IS
        // $("p").on("click", function () {
        //         console.clear();

        //         var is = ($(this).is(".j")) ? true : false;
                
        //         console.log(is);
        
        //         if ($(this).is(":first-of-type")) {
        //                 console.log("FIRST");
        //         }
        // });

        // HAS
        // $("p").has("span").append("<sup>Has SPAN</sup>");

        // NOT
        // $("p").not(":contains('jQuery')").css("color", "red");
        // $("p").not(":eq(2)").css("border", "1px solid red");

        // FILTER
        // $("p").filter(":contains('jQuery')").css({
        //         color: "red",
        //         border: "1px solid red"
        // });

        // $("p").css({
        //         padding: "10px",
        //         background: "#eee"
        // }).filter(function (index) {
        //         console.log(index)
        //         return index % 2 === 0;
        // }).css("background", "#ccc");

        // MAP
        // var mapa = $("p").map(function (indice, elemento) {
        //         console.log($(elemento));
        //         return "<p>" + indice + " - " + $(elemento).text() + "</p>";
        // }).get().join("");

        // $("<div style=text-align:center>" + mapa + "</div>").appendTo("body");

        // --------------------------------------------------------------------------------------------------------------------------------------

        // CHILDREN
        // $(".middlemen_article_content .a").removeClass();
        // $(".middlemen_article").children().css("font-family", "Open Sans, serif");
        // $(".middlemen_article").children(".middlemen_article_content").css("margin-bottom", "30px");
        // $(".middlemen_article_content").children("p").css("font-size", "0.8em");
        // $(".middlemen_article_content").children("p").css("padding", "10px");

        // //SIBLINGS
        // $(".middlemen_article_content p").siblings().css("color", "#777");
        // $(".middlemen_article_content p").siblings(".a").css("color", "#09f");

        // PARENT
        // $(".middlemen_article_content b").parent().css({
        //         padding: "10px",
        //         background: "red"
        // }).parent("div").css({
        //         "paddigin-bottom": "15px",
        //         "border-bottom": "5px solid blue"
        // });

        // //PARENTS
        // $("p").on("click", function () {
                // $(this).parents().toggleClass("middlemen_active");
                // $(this).parents("body").toggleClass("middlemen_active");

                // var data = new Date();
                // $(".date").remove();
                // $(this).parents("div:last").append("<div class='date'>" + data.getUTCDate() + "/" + data.getUTCMonth() + "/" + data.getUTCFullYear() + "</div>");

                // console.log($(this).parents());
                // console.log($(this).closest(".middlemen_article"));
        // });

        // CLOSEST
        // $("b").closest("p").css("border-top", "1px solid #09f");

        // PARENTS UNTIL
        // console.log($(".a").parents(".middlemen_article"));
        // console.log($(".a").parentsUntil(".middlemen_article"));
        // console.log($(".a").parentsUntil("body", "article"));

        // --------------------------------------------------------------------------------------------------------------------------------------

        // FIND
        // $(".middlemen_article_content").find("p").css({
        //         "font-size": "0.875em",
        //         "color": "red"
        // });

        // $(".middlemen_article").find(".middlemen_article_link").on("click", function () {
        //         $(this).parent().find(".middlemen_article_content p").toggleClass("middlemen_active");
        //         return false;
        // });

        // NEXT E NEXT ALL
        // $(".middlemen_article_content p:first").next().addClass("middlemen_active");
        // $(".middlemen_article_content p:first").nextAll().addClass("middlemen_active");

        // //PREV E PREV ALL
        // $(".middlemen_article_content p:last").prev().removeClass("middlemen_active");
        // $(".middlemen_article_content p:last").prevAll().addClass("middlemen_active");

        // //NEXT UNTIL
        // $(".middlemen_article_content p:first").clone().appendTo(".middlemen_article_content");
        // $(".middlemen_article_content p:first").clone().removeClass("middlemen_active").appendTo(".middlemen_article_content");
        // $(".middlemen_article_content p:first").clone().appendTo(".middlemen_article_content");

        // $(".middlemen_article_content p").nextUntil().fadeOut(2000);
        // $(".middlemen_article_content p").nextUntil(".middlemen_active").fadeOut(2000);
        // $(".middlemen_article_content p").nextUntil("", ".middlemen_active").fadeOut(2000);

        // PREV UNTIL
        // $(".middlemen_article_content p:last").prevUntil(".middlemen_active").fadeOut(2000);
        // $(".middlemen_article_content p").prevUntil(".middlemen_active").fadeOut(2000);
        // $(".middlemen_article_content p:last").prevUntil("", ".middlemen_active").fadeOut(2000);
        // $(".middlemen_article_content p:last").prevUntil().fadeOut(2000);

        // --------------------------------------------------------------------------------------------------------------------------------------

        // var el = $(".middlemen_article_chaining");

        // el.css({
        //     "font-family": "Open Sans, serif",
        //     "font-size": "1em",
        //     "margin-bottom": "20px",
        //     "background-color": "#fff",
        //     "color": "#000"
        // }).end().add(".middlemen_article_content_chaining p").css({
        //     "font-size": "0.8em"
        // });
    
        // var btn = "<p class='more load'>Load more...</p>";
        // $(btn).appendTo(el.parent());
    
        // $("body").on("click", ".more", function () {
        //     $(this).stop().fadeOut(1000, function () {
        //         $(".middlemen_article_chaining:last")
        //                 .clone()
        //                 .add(btn)
        //                 .css("display", "none")
        //                 .appendTo($(".middlemen_article_chaining:last").parent())
        //                 .slideDown(300, function () {
        //                     $("html, body").stop().animate({scrollTop: $(this).offset().top}, 1000);
        //                 });
        //     });
    
        //     console.clear();
        //     console.log($(".article").add());
        //     console.log($(".article").addBack());
        // }); 
// });

// #### M5 - Events

// $(function() {
        // var content = "<div><h5>Remove Button...</h5><p class='events_j_close events_button'>Remover</p></div>";

        // $(".events_j_button").on("click", function (event) {
        //         console.log(event);
        //         $(this).after(content);
        // });

        // $(".events_j_close").on("click", function(){
        //   console.log("REMOVE");
        // });

        // DELEGATE ON
        // $("body").on("click", ".events_j_close", function () {
        //         // console.log($("REMOVE");
        //         $(this).parent().remove();
        // });

        // DELEGATE + DATA ON
        // $("body").on("click mouseleave", ".events_j_close", {text: "<p class='clear'>## REMOVED ##</p>"}, function (e) {
        //         $(".main_div_content").prepend(e.data.text);
        //         $(this).parent("div").remove();
        // });

        // ONE
        // $(".events_j_button").one("click", function () {
        //         console.log("Primeiro Click");
        // });

        // TRIGGER
        // $(".events_j_button").on("jQ.remove", function () {
        //         $(".clear").remove();
        //                 console.log("jQ.remove Executed!");
        //         }).on("click", function () {
        //                 var cc = $(".clear").length;

        //                 if (cc >= 1) {
        //                         $(this).trigger("jQ.remove");
        //                 }
        // });

        // TRIGGER HANDLER + OFF
        // $(".events_focus p").click(function () {
        //         console.log("CLICK");

        //         var input = $(this).parent().find("input");

        //         input.focus(function () {
        //                 console.log("FOCUSED");
        //         });

        //         input.trigger("focus");
        //         input.triggerHandler("focus");

        //         input.off("focus");
        //         $(this).off("click").on("click", function () {
        //                 console.warn("Other Click");
        //         });
        // });

        // --------------------------------------------------------------------------------------------------------------------------------------

        // CLICK | MOUSEDOWN | MOUSEUP
        // $(".events_j_click").click(function (event) {
        //         $(this).off("click");
        //         console.log(event);
        //         $("<div></div>").appendTo(".main_div_content").html("<div>Event: <b>" + event.type + "</b>");
        // }).mousedown(function (event) {
        //         console.log(event.type);
        // }).mouseup(function (event) {
        //         console.log(event.type);
        // });

        // DBCLICK
        // $(".events_j_dblclick").dblclick(function (event) {
        //         event.preventDefault();
        //         $(this).off(event.type);
        //         console.log(event);
        //         $("<div></div>").appendTo(".main_div_content").html("<div>Event: <b>" + event.type + "</b>");
        // });

        // CONTEXTMENU
        // $(".events_j_contextmenu").contextmenu(function (event) {
        //         event.preventDefault();
        //         console.log(event);
        //         $(this).css("position", "relative").append("<span class='events_menu'>Disabled!</span>");
        //         $(this).find("span").slideDown();

        //         $(this).mouseleave(function (event) {
        //                 console.log(event.type);
        //                 $(this).off(event.type).find("span").slideUp();
        //         });
        // });

        // HOVER | ENTER | LEAVE
        // $(".events_j_hover").hover(function (event) {
        //         console.log(event);
        //         if (!$(".hover").length) {
        //                 console.log('here');
        //                 $("<div class='hover'></div>").appendTo(".main_div_content").html("<div>Event: " + event.type + "</div>");
        //                 return;
        //         }
                   
        //         $(".hover div").append(" | Event: " + event.type);
        // }).mouseenter(function () {
        //         $(this).text("Click Here!");
        // }).mouseleave(function () {
        //         $(this).text("I'am Sad!");
        // }).click(function () {
        //         $(this).text("I'am Happy").off("hover mouseleave mouseenter");
        // });

        // MOVE
        // $(".events_j_mousemove").mousemove(function (event) {
        //         console.info(event);
        //         if (!$(this).hasClass("stop")) {
        //                 $(this).offset({top: event.pageY - $(this).outerHeight() / 2, left: event.pageX - $(this).outerWidth() / 2});
        //         }
        // }).click(function () {
        //         $(this).toggleClass("stop");
        // });

        // OVER | OUT
        // $(".events_j_over").mouseover(function (event) {
        //         console.log("-");
        //         console.log("OVER: " + event.target);
        // }).mouseout(function (event) {
        //         console.log("-");
        //         console.log("OUT: " + event.target);
        // });

        // --------------------------------------------------------------------------------------------------------------------------------------

        // var input = $(".events_j_input");
        
        // KEYPRESS | KEYDOWN
        // input.keypress(function (e) {
        //         console.log("PRESS: " + e.which);
        // }).keydown(function (e) {        
        //         console.log("DOWN: " + e.which);
        //         console.log(e.keyCode);

        //         if (e.metaKey) {
        //                 if (e.which === 85) {
        //                         alert("UpInside!");
        //                 }

        //                 if (e.which === 74) {
        //                         alert("jQuery Essentials");
        //                 }
        //         }
        // }).keyup(function () {
        //         console.log("UP");
        // });
        
        // KEYUP
        // $(".events_j_input").on("keyup", function (e) {
        //         var input = $(this);
        //         // input.val(input.val().toUpperCase());

        //         if (!$(".result").find("h1").length) {
        //                 $(".result").prepend("<h1>" + input.val().toUpperCase() + "</h1>");
        //         } else {
        //                 $(".result h1").text(input.val().toUpperCase());
        //         }
        // });

        // $("textarea").on("keyup", function (e) {
        //         var textarea = $(this);

        //         if (!$(".result").find("div").length) {
        //                 $(".result").append("<div><p>" + textarea.val() + "</p></div>");
        //         } else {
        //                 $(".result div").html("<p>" + textarea.val().replace(/\n/g, "</p><p>") + "</p>");
        //         }
        // });
        
        // RESIZE
        // $(window).resize(function (event) {
        //         console.log($(this).outerWidth());
        //         //console.log(event);
        // });
        
        //SCROLL
        // $("body").height(1500);
        // $(window).scroll(function (event) {
        //         console.log($(this).scrollTop());
        //         //console.log(event);
        // });

        // --------------------------------------------------------------------------------------------------------------------------------------

        // var instruction = $(".form_result b");

        // FOCUS | CHANGE
        // $(".events_j_input_form").focus(function () {
        //     console.log("FOCUS");
        // }).focusin(function () {
        //     instruction.text("Inform the " + $(this).attr("placeholder").replace(":", ""));
        // }).focusout(function () {
        //     if (!$(this).val()) {
        //         instruction.text("Hey, what is the title?");
        //     }
        // }).change(function () {
        //     instruction.text($(this).val());
        // });

        // BLUR
        // $("*").blur(function () {
        //     console.log("BLUR: " + this);
        // }).focusout(function () {
        //     console.log("OUT: " + this);
        // });

        // SELECT
        // $("*").select(function (e) {
        //     console.log(e);
        // });

        // $(".events_j_textarea_form").focus(function () {
        //     $(this).select();
        //     // document.execCommand("copy"); deprecated
        //     navigator.clipboard.writeText($(this).val());
        // });

        // SUBMIT
        // $(".events_j_form").on("submit", function (e) {
        //     e.preventDefault();

        //     var form = $(this);
        //     var data = $(this).serialize();

        //     console.log(data);

        //     // $.post("api.php", {data: data}, function (retorno) {

        //     // });

        //     form.find("button").text("Sending!");
        //     // .attr('disabled', true);
        // });
// });

// #### M6 - Efects

// $(function() {
        // var btn = $(".efects_button");
        // var timeEffet = 6000;

        // btn.on("click", function (e) {
        //         e.preventDefault();

        //         $(".hide").stop().hide(timeEffet);

        //         $(".show").stop().show(timeEffet, function () {
        //                 console.log("Ok!");
        //         });

        //         $(".toggle")stop().toggle(timeEffet);
        // });

        // --------------------------------------------------------------------------------------------------------------------------------------

        // var btn = $(".efects_fade_button");
        // var effect_time = 300;

        // btn.on("click", function (e) {
        //         e.preventDefault();

        //         var fade = $(".efects_fade");
        //         var fade_close = $(".efects_fade_close");

        //         fade.fadeIn(effect_time, function () {
        //                 fade_close.on("click", function () {
        //                         fade.fadeOut(effect_time, function () {
        //                                 // $(this).remove();
        //                         });
        //                 });
        //         }).css("display", "flex");

        //         fade.find("p").on("click", function (e) {
        //                 if (e.target === this) {
        //                         $(this).find("b").stop().fadeToggle(effect_time);
        //                 }
        //         });

        //         fade.find("b").on("click", function () {
        //                 if ($(this).hasClass("efetcs_active")) {
        //                         $(this).fadeTo(effect_time, 0.5, function () {
        //                                 console.log($(this));
        //                                 $(this).removeClass("efetcs_active");
        //                         });
        //                 } else {
        //                         $(this).fadeTo(effect_time, 1, function () {
        //                                 console.log($(this));
        //                                 $(this).addClass("efetcs_active");
        //                         });
        //                 }
        //         });
        // });

        // --------------------------------------------------------------------------------------------------------------------------------------

        // var speed = 1000;

        // $(".expand").on("click", function () {
        //     $(".slide_content").stop().slideDown(speed, function () {

        //     });
        // });
    
        // $(".close").on("click", function () {
        //     $(".slide_content").stop().slideUp(speed, function () {
               
        //     });
        // });
    
        // $(".toggle").on("click", function () {
        //     $(".slide_content").stop().slideToggle(speed, function () {

        //     });
        // });
    
        // $(".slide h4").on("click", function () {
        //         // $(this).parent().find(".slide_content").slideToggle();
        //         // $(".slide_content").stop().slideUp(speed);
        //         // $(this).parent().find(".slide_content").slideToggle();
        // });
        
        // --------------------------------------------------------------------------------------------------------------------------------------

        // $(".custom_start").on("click", function (e) {
        //         e.preventDefault();
        
        // //        $(".slide_animate").animate({"top": 150}, 1000)
        // //        .animate({"left": 150}, 1000)
        // //        .animate({"top": 0}, 1000)
        // //        .animate({"left": 0}, 1000);
        
        //         $(".slide_animate").animate({"top": 150}, 1000, function () {
        //         })
        //         .queue(function () {
        //                 $(this).css("background", "red").dequeue();
        //         })
        //         .animate({"left": 150}, 1000)
        //         .queue(function () {
        //                 $(this).css("background", "purple").dequeue();
        //         })
        //         .animate({"top": 0}, 1000)
        //         .delay(1000)
        //         .queue(function () {
        //                 $(this).css("background", "pink").dequeue();
        //         })
        //         .animate({"left": 0}, 1000)
        //         .queue(function () {
        //                 $(this).css("background", "#09f").dequeue();
        //         });
        // });
        
        // $(".custom_stop").on("click", function (e) {
        //         e.preventDefault();

        //         // $(".slide_animate").stop();
        //         $(".slide_animate").stop(true, true); // (clearQueue, jumpToEnd)
        // });

        // $(".custom_clear").on("click", function (e) {
        //         e.preventDefault();

        //         console.log($(".slide_animate").queue());
        //         $(".slide_animate").clearQueue();
        //         console.log($(".slide_animate").queue());
        // });

        // $(".custom_finish").on("click", function () {
        //         $(".slide_animate").finish();
        // });
// });

// #### M7 - Functions & Plugins

// $(function() {
//         // normalizeH_test("div .functions_div");
        // normalizeH_test("div .functions_p");

        // normalizeH(".normalize");

        // $(window).resize(function(){
        //         normalizeH(".normalize");
        // });

        // function normalizeH_test(element) {
        //         $(element).css("height", "auto");
        //         var maxHeight = $(element).map(function (i, e) {
        //                 return $(e).height();
        //         }).get();

        //         $(element).height(Math.max.apply(this, maxHeight));
        //         // console.log(maxHeight);
        // }

        // function normalizeH(element) {
        //         var maxHeight = {};
        //         $.each($(element).parent(), function (i, e) {
        //                 $(e).find(element).css("height", "auto");
        //                 maxHeight = $(e).find(element).map(function(il, el){
        //                         return $(el).height();
        //                 }).get();
                        
        //                 $(e).find(element).height(Math.max.apply(this, maxHeight));
        //                 console.log(maxHeight);
        //         });
        // }

        // --------------------------------------------------------------------------------------------------------------------------------------

        // $(".normalize").normalize_height();

        // $(window).resize(function () {
        //         $(".normalize").normalize_height();
        // });

        // --------------------------------------------------------------------------------------------------------------------------------------

        // $(".j_method_plugin_open").method_plugin();
// });

// #### M8 - Ajax & Json

$(function() {
        // var content = $(".ajax_content");
        // var defaults = content.html();
        // var template = "external/load.html";
        // content.load(template + " #home");
    
        // $("body").on("click", ".j_load", function (e) {
        //     e.preventDefault();
        //     if ($(this).hasClass("load_active")) {
        //         return;
        //     } 

        //     $(".j_load").removeClass("load_active");
        //     $(this).addClass("load_active");
    
        //     var load_file = $(this).attr("href");
        //     content.html(defaults).delay(400).fadeOut(100, function () {
        //         content.load(template + " #" + load_file, function (response, status, jqXHR) {
        //             console.log(response, status, jqXHR);
        //         }).fadeIn();
        //     });
        // });

        // --------------------------------------------------------------------------------------------------------------------------------------

        // var url = "external/server_short_1.php";

        // $("#short1_form").submit(function (e) {
        //     e.preventDefault();

        //     var form_data = $("#short1_form").serialize();
    
        //     $.post(url, form_data, function (response) {
        //         responseThis(response, ".short_1_result");
        //     }, "json");
        // });
    
        // $(".getdata").click(function (e) {
        //     e.preventDefault();
        //     $.get(url, {user: "User A"}, function (response) {
        //         responseThis(response, ".short_1_result");
        //     }, 'json');
        // });
    
        // function responseThis(response, target) {
        //     console.clear();
        //     console.log(response);

        //     if (!response.success) {
        //         $(target).prepend("<p>Error!</p>");
        //         return;
        //     }

        //     var return_response = "<h1>" + response.course + "</h1>";
        //     return_response += "<p>" + response.module + "</p>";
        //     return_response += response.student ? "<p>" + response.student + "</p>" : "";
        //     return_response += response.user ? "<p>" + response.user + "</p>" : "";

        //     $(target).prepend(return_response);               
        // }

        // --------------------------------------------------------------------------------------------------------------------------------------

        // $.getScript("../resource/_cdn/short2_viacep.js", function () {
        //         $(".viacep").viacep(".viacep_result", function (data) {
        //                 $.each(data, function (i, e) {
        //                 //console.log(i + ": " + e);
        //                 });
        //         });
        // });

        // --------------------------------------------------------------------------------------------------------------------------------------

        // $("#refined_form").submit(function (e) {
        //         e.preventDefault();
        //         var form = $(this);
        //         var action = form.attr("action");
        //         var form_data = form.serialize() + "&action=" + action;
        
        //         $.ajax({
        //             url: "external/server_refined.php",
        //             type: "POST",
        //             data: form_data,
        //             dataType: "JSON",
        //             beforeSend: function (xhr) {
        //                 $(".refined_error, .refined_success").fadeOut(400, function () {
        //                     $(this).remove();
        //                 });

        //                 form.find("button").after("<span class='refined_load'>Loading...</span>");
        //             },
        //             success: function (response, textStatus, jqXHR) {
        //                 if (response.error) {
        //                     form.prepend("<span class='refined_error'>" + response.error + "</span>");
        //                 } else {
        //                     form.prepend("<span class='refined_success'>Registration successfully completed. Welcome " + response.first_name + "!</span>");
        //                     form.trigger("reset");
        //                 }
        
        //                 if (response.redirect) {
        //                     setTimeout(function () {
        //                         window.location.href = response.redirect;
        //                     }, 3000);
        //                 }
        //             },
        //             error: function (jqXHR, textStatus, errorThrow) {
        //                 form.prepend("<span class='refined_error'>Error: " + errorThrow + "</span>");
        //             },
        //             complete: function (jqXHR, textStatus) {
        //                 form.find(".refined_load").fadeOut(function () {
        //                     $(this).remove();
        //                 });
        //             }
        //         });
        //     });

        // --------------------------------------------------------------------------------------------------------------------------------------

        $("#upload_form").submit(function (e) {
                e.preventDefault();
                var form = $(this);
        //        var form_data = form.serialize();
        
        //        $.post("upload.php", form_data, function (response) {
        //            console.log(response);
        //        });
        
                form.ajaxSubmit({
                    url: "external/server_upload.php",
                    beforeSubmit: function () {
                        $(".upload_success, .upload_load").fadeOut(function () {
                            $(this).remove();
                        });
                    },
                    uploadProgress: function (event, position, total, percent) {
                        if (form.find(".upload_load").length) {
                            form.find(".upload_load b").text(percent + "%");
                        } else {
                            form.find(".upload_button").after("<span class='upload_load'><b>" + percent + "%</b> - Please waiting...!</span>");
                        }
                    },
                    success: function () {
                        form.find(".upload_load").fadeOut(function () {
                            $(this).remove();
                        });
                        form.trigger("reset");
                    }
                });
            });
});