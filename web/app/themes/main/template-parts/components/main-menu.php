<div class="rd-navbar-main-element">
    <div class="rd-navbar-nav-wrap">
        <?php
            wp_nav_menu(array(
                'menu'  => 'main-menu',
                'container'       => '',
                'container_class' => '',
                'container_id'    => '',
                'menu_class'      => 'rd-navbar-nav',
                'link_before' => '<span>',
                'link_after' => '</span>',
                'walker' => new Custom_Walker_Nav_Menu_active
            ));
        ?>
        <!-- RD Navbar Nav-->
<!--        <ul class="rd-navbar-nav">-->
<!--            <li class="rd-nav-item active"><a class="rd-nav-link" href="./">Home</a>-->
<!--            </li>-->
<!--            <li class="rd-nav-item"><a class="rd-nav-link" href="#">Pages</a>-->
<!--                <ul class="rd-menu rd-navbar-megamenu">-->
<!--                    <li class="rd-megamenu-item">-->
<!--                        <h6 class="rd-megamenu-title">Services</h6>-->
<!--                        <ul class="rd-megamenu-list">-->
<!--                            <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="services.html">Services</a></li>-->
<!--                            <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="single-service.html">Single service</a></li>-->
<!--                        </ul>-->
<!--                    </li>-->
<!--                    <li class="rd-megamenu-item">-->
<!--                        <h6 class="rd-megamenu-title">Additional Pages</h6>-->
<!--                        <ul class="rd-megamenu-list">-->
<!--                            <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="404-page.html">404 page</a></li>-->
<!--                            <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="coming-soon.html">Coming soon</a></li>-->
<!--                            <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="counters.html">Counters</a></li>-->
<!--                            <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="icon-lists.html">Icon lists</a></li>-->
<!--                            <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="search-results.html">Search results</a></li>-->
<!--                            <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="privacy-policy.html">Privacy policy</a></li>-->
<!--                            <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="contacts.html">Contacts</a></li>-->
<!--                        </ul>-->
<!--                    </li>-->
<!--                    <li class="rd-megamenu-item">-->
<!--                        <h6 class="rd-megamenu-title">Elements</h6>-->
<!--                        <ul class="rd-megamenu-list">-->
<!--                            <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="typography.html">Typography</a></li>-->
<!--                            <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="buttons.html">Buttons</a></li>-->
<!--                            <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="forms.html">Forms</a></li>-->
<!--                            <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="tabs-and-accordions.html">Tabs and accordions</a></li>-->
<!--                            <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="progress-bars.html">Progress bars</a></li>-->
<!--                            <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="grid-system.html">Grid system</a></li>-->
<!--                            <li class="rd-megamenu-list-item"><a class="rd-megamenu-list-link" href="tables.html">Tables</a></li>-->
<!--                        </ul>-->
<!--                    </li>-->
<!--                </ul>-->
<!--            </li>-->
<!--            <li class="rd-nav-item"><a class="rd-nav-link" href="about-us.html">About Us</a>-->
<!--            </li>-->
<!--            <li class="rd-nav-item"><a class="rd-nav-link" href="shop.html">Shop</a>-->
<!--                <ul class="rd-menu rd-navbar-dropdown">-->
<!--                    <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="shop.html">Shop</a></li>-->
<!--                    <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="single-product.html">Single product</a></li>-->
<!--                    <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="checkout.html">Checkout</a></li>-->
<!--                    <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="cart-page.html">Cart page</a></li>-->
<!--                </ul>-->
<!--            </li>-->
<!--            <li class="rd-nav-item"><a class="rd-nav-link" href="projects.html">Projects</a>-->
<!--                <ul class="rd-menu rd-navbar-dropdown">-->
<!--                    <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="projects.html">Projects</a></li>-->
<!--                    <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="grid-gallery.html">Grid Gallery</a></li>-->
<!--                    <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="project-page.html">Project page</a></li>-->
<!--                </ul>-->
<!--            </li>-->
<!--            <li class="rd-nav-item"><a class="rd-nav-link" href="grid-blog.html">News</a>-->
<!--                <ul class="rd-menu rd-navbar-dropdown">-->
<!--                    <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="grid-blog.html">Grid blog</a></li>-->
<!--                    <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="masonry-blog.html">Masonry blog</a></li>-->
<!--                    <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="blog-post.html">Blog post</a></li>-->
<!--                </ul>-->
<!--            </li>-->
<!--        </ul>-->
    </div>
</div>