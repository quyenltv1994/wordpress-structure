<?php
    $logo = get_field('logo', 'option');
?>
<!-- RD Navbar Panel-->
<div class="rd-navbar-panel">
    <!-- RD Navbar Toggle-->
    <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
    <!-- RD Navbar Brand-->
    <div class="rd-navbar-brand">
        <a class="brand" href="<?= home_url() ?>">
            <img class="brand-logo-dark" src="<?= $logo ?>" alt="" width="180" height="49"/>
        </a>
    </div>
</div>