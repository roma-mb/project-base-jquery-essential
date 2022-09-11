<?php require('template\header.php'); ?>

<main class="functions_main">
    <div class="ajax_main_div_content">
        <nav class="menu">
            <a class="load_active j_load" href="home">Home</a>
            <a class="j_load" href="team">Equipe</a>
            <a class="j_load" href="contact">Contato</a>
        </nav>

        <div class="ajax_content">
            <img src="/JQUERY_ESSENTIALS/project-base-jquery-essential/resource/_img/load.gif" alt="Loading" title="Loading" />
        </div>

        <br>
        <hr>
        <br>

        <form id="short1_form" action="create_user" method="post" enctype="multipart/form-data">
            <input class="short_1_input" type="text" name="course" value="jQuery Essentials" />
            <input class="short_1_input" type="text" name="module" value="AJAX with jQuery" />
            <button class="shhort_1_button">Send</button>
        </form>

        <div class="short_1_result"></div>
        <span class="getdata">Other</span>

        <br>
        <hr>
        <br>

        <input type="text" class="viacep" name="cep" placeholder="Buscar Cep:" />
        <div class="viacep_result"></div>

        <br>
        <hr>
        <br>

        <form id="refined_form" action="create_user" method="POST" enctype="multipart/form-data">
            <label>
                <span class="refined_field">Nome:</span>
                <input class="refined_input" type="text" name="first_name" placeholder="Seu Nome:" />
            </label>
            <label>
                <span class="refined_field">Sobrenome:</span>
                <input class="refined_input" type="text" name="last_name" placeholder="Último Nome:" />
            </label>
            <label>
                <span class="refined_field">E-mail:</span>
                <input class="refined_input" type="text" name="email" placeholder="Melhor E-mail:" />
            </label>

            <button class="refined_button">Cadastrar-se</button>
        </form>

        <br>
        <hr>
        <br>

        <form id="upload_form" action="create_user" method="POST" enctype="multipart/form-data">
            <label>
                <span class="upload_file">
                    <input class="upload_input" type="file" name="photo" />
                </span>
            </label>
            <label>
                <span class="upload_field">Name:</span>
                <input class="upload_input" type="text" name="first_name" placeholder="Name:" />
            </label>
            <label>
                <span class="upload_field">Last Name:</span>
                <input class="upload_input" type="text" name="last_name" placeholder="Last Name:" />
            </label>
            <label>
                <span class="upload_field">E-mail:</span>
                <input class="upload_input" type="text" name="email" placeholder="E-mail:" />
            </label>

            <button class="upload_button">Cadastrar-se</button>
        </form>

    </div>
</main>

<?php require('template\footer.php'); ?>