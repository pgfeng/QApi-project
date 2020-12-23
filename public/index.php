<?php
require "../server.php";


try {
    \QApi\App::run();
} catch (ErrorException $e) {
}