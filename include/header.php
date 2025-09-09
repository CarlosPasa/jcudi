<?php
// Definimos el menú con labels y urls
$subjects = [
    [
        "label" => "Web Design",
        "url"   => "#",
        "subitems" => [
            ["label" => "HTML", "url" => "html.php"],
            ["label" => "CSS", "url" => "css.php"],
            ["label" => "jQuery", "url" => "jquery.php"],
            ["label" => "Python", "url" => "python.php"]
        ]
    ],
    [
        "label" => "Apps Design",
        "url"   => "apps.php"
    ],
    [
        "label" => "Marketing",
        "url"   => "marketing.php"
    ],
    [
        "label" => "Research",
        "url"   => "research.php"
    ],
    [
        "label" => "SEO",
        "url"   => "seo.php"
    ]
];
// Esto te da el nombre del archivo actual (ejemplo: "about.php", "index.php", etc.)
$currentPage = basename($_SERVER['PHP_SELF']);
$menu = [
    ["label" => "Home", "url" => "index.php"],
    ["label" => "About", "url" => "about.php"],
    ["label" => "Cursos", "url" => "course.php"],
    ["label" => "Profesores", "url" => "teacher.php"],
    [
        "label" => "Blog",
        "url"   => "#",
        "subitems" => [
            ["label" => "Blog List", "url" => "blog.php"],
            ["label" => "Blog Detail", "url" => "single.php"]
        ]
    ],
    ["label" => "Contact", "url" => "contact.php"]
];

// Botón extra (ejemplo)
$extraButton = [
    "label" => "Join Now",
    "url"   => "#",
    "class" => "btn btn-primary py-2 px-4 ml-auto d-none d-lg-block"
];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>ECOURSES - Online Courses HTML Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="Free HTML Templates" name="keywords">
    <meta content="Free HTML Templates" name="description">

    <!-- Favicon -->
    <link href="../img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
    <!-- Topbar Start -->
    <div class="container-fluid d-none d-lg-block">
        <div class="row align-items-center py-4 px-xl-5">
            <div class="col-lg-3">
                <a href="" class="text-decoration-none">
                    <h1 class="m-0"><span class="text-primary">JC</span>GUIA</h1>
                </a>
            </div>
            <div class="col-lg-3 text-right">
                <div class="d-inline-flex align-items-center">
                    <i class="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                    <div class="text-left">
                        <h6 class="font-weight-semi-bold mb-1">Nosotros</h6>
                        <small>123 Street, New York, USA</small>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 text-right">
                <div class="d-inline-flex align-items-center">
                    <i class="fa fa-2x fa-envelope text-primary mr-3"></i>
                    <div class="text-left">
                        <h6 class="font-weight-semi-bold mb-1">Email</h6>
                        <small>jc@gmail.com</small>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 text-right">
                <div class="d-inline-flex align-items-center">
                    <i class="fa fa-2x fa-phone text-primary mr-3"></i>
                    <div class="text-left">
                        <h6 class="font-weight-semi-bold mb-1">Contactanos</h6>
                        <small>+51 345 6789</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->


    <!-- Navbar Start -->
    <div class="container-fluid">
        <div class="row border-top px-xl-5">
            <div class="col-lg-3 d-none d-lg-block">
                <a class="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none"
                    data-toggle="collapse" href="#navbar-vertical"
                    style="height: 67px; padding: 0 30px;">
                    <h5 class="text-primary m-0"><i class="fa fa-book-open mr-2"></i>Subjects</h5>
                    <i class="fa fa-angle-down text-primary"></i>
                </a>

                <nav class="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
                    id="navbar-vertical" style="width: calc(100% - 30px); z-index: 9;">
                    <div class="navbar-nav w-100">
                        <?php foreach ($subjects as $subject): ?>
                            <?php if (isset($subject["subitems"])): ?>
                                <div class="nav-item dropdown">
                                    <a href="<?= $subject['url'] ?>" class="nav-link" data-toggle="dropdown">
                                        <?= $subject['label'] ?> <i class="fa fa-angle-down float-right mt-1"></i>
                                    </a>
                                    <div class="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                                        <?php foreach ($subject["subitems"] as $item): ?>
                                            <a href="<?= $item['url'] ?>" class="dropdown-item"><?= $item['label'] ?></a>
                                        <?php endforeach; ?>
                                    </div>
                                </div>
                            <?php else: ?>
                                <a href="<?= $subject['url'] ?>" class="nav-item nav-link"><?= $subject['label'] ?></a>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </div>
                </nav>
            </div>
            <div class="col-lg-9">
                <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <a href="" class="text-decoration-none d-block d-lg-none">
                        <h1 class="m-0"><span class="text-primary">E</span>COURSES</h1>
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav py-0">
                            <?php foreach ($menu as $item): ?>
                                <?php if (isset($item["subitems"])): ?>
                                    <!-- Dropdown -->
                                    <div class="nav-item dropdown">
                                        <a href="<?= $item['url'] ?>" 
                                        class="nav-link dropdown-toggle <?= in_array($currentPage, array_column($item['subitems'], 'url')) ? 'active' : '' ?>" 
                                        data-toggle="dropdown">
                                            <?= $item['label'] ?>
                                        </a>
                                        <div class="dropdown-menu rounded-0 m-0">
                                            <?php foreach ($item["subitems"] as $sub): ?>
                                                <a href="<?= $sub['url'] ?>" 
                                                class="dropdown-item <?= $currentPage === $sub['url'] ? 'active' : '' ?>">
                                                    <?= $sub['label'] ?>
                                                </a>
                                            <?php endforeach; ?>
                                        </div>
                                    </div>
                                <?php else: ?>
                                    <!-- Link normal -->
                                    <a href="<?= $item['url'] ?>" 
                                    class="nav-item nav-link <?= $currentPage === $item['url'] ? 'active' : '' ?>">
                                        <?= $item['label'] ?>
                                    </a>
                                <?php endif; ?>
                            <?php endforeach; ?>
                        </div>
                        <!-- Botón extra -->
                        <a href="<?= $extraButton['url'] ?>" class="<?= $extraButton['class'] ?>">
                            <?= $extraButton['label'] ?>
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <!-- Navbar End -->