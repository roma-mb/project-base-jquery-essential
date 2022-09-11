(function () {
    $.fn.viacep = function (target, callback) {
        var input = this;
        input.on("keyup", function (e) {
            e.preventDefault();
            var cep = input.val();
            var len = cep.length;
            var url = "https://viacep.com.br/ws/" + cep + "/json";

            if (len === 8) {
                $(target).html("<p class='load'>Loading...</p>");
                $.getJSON(url, function (response) {
                    if (!response.erro) {
                        var viacep = "<p>";
                        viacep += response.localidade + "/" + response.uf + "<br>";
                        viacep += response.logradouro + "<br>";
                        viacep += response.bairro;
                        viacep += "</p>";

                        $(".load").fadeOut(200, function () {
                            $(this).remove();
                            $(target).html(viacep);
                        });
                        callback(response);

                        return;
                    } 

                    if ($(".load").length) {
                        $(".load").fadeOut(200, function () {
                            $(this).remove();
                            $(target).html("<p>Erro!</p>");
                        });
                        return;
                    } 

                    $(target).html("<p>Erro!</p>");
                    
                    callback({
                        erro: "Address not found!"
                    });
                    
                });
            }
        });

        return this;
    };
}(jQuery));