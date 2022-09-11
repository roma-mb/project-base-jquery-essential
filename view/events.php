<?php require('template\header.php'); ?>

<main>
    <div class="main_div_content">

        <h5>Examples:</h5>

        <p class="events_j_button events_button">jQuery Essentials</p>

        <div class="events_focus" style="margin-top: 20px">
            <p cla>Focus!</p>
            <input type="text" name="nome" placeholder="focus" />
        </div>

        <br>
        <hr>
        <br>

        <p class="events_j_click events_button">click</p>
        <p class="events_j_dblclick events_button">dblclick</p>
        <p class="events_j_contextmenu events_button">contextmenu</p>
        <p class="events_j_hover events_button">hover</p>
        <p class="events_j_mousemove events_button">mousemove</p>

        <div class="events_j_over over">
            <p>
                Menu! <a href="#">Com Link!</a>
            </p>
        </div>

        <br>
        <hr>
        <br>

        <input class="events_j_input" type="text" name="titulo" />
        <textarea class="events_j_textarea" name="desc" rows="3"></textarea>

        <div class="result"></div>

        <br>
        <hr>
        <br>

        <div class="form_result">Instruções: <b></b></div>

        <form class="events_j_form" action="" method="post">
            <input class="events_j_input_form" type="text" name="title" placeholder="Title:" />
            <textarea class="events_j_textarea_form" placeholder="Description:" name="desc" rows="3"></textarea>
            <div class="events_j_submit">
                <button class="events_j_button">Send!</button>
            </div>
        </form>

    </div>
</main>

<?php require('template\footer.php'); ?>