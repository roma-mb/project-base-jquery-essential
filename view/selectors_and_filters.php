<?php require('template\header.php'); ?>

<main>
    <div class="main_div_content">
        <h3><span class="animate">List</span> Examples: </h3>
        <p>Brother h3</p>
        <ul class="example-list-selectors-and-filters">
            <li><b>b</b></li>
            <li class="example-filters-class">.example_filters</li>
            <li id="example-filters-id">.example_filters</li>
            <li class="example-filter-mult"><b>example-filter-mult, b</b></li>
            <li>
                <p data-attr='true'>[data-attr='true']</p>
            </li>
            <li><a title='my-title' href="#">a[title!='my-title']</a></li>
            <li>
                <p class="begin-example">[class^='begin-example']</p>
            </li>
            <li class="end div">[class$='div']</li>
            <li class="combine" data-combine="true">[class*='combine'][data-combine]</li>
        </ul>
    </div>
</main>

<?php require('template\footer.php'); ?>