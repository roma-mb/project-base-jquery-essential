<?php

$getPost = filter_input_array(INPUT_POST, FILTER_DEFAULT);
$post = array_map("strip_tags", $getPost);

$action = $post['action'];
$response = array();
unset($post['action']);
usleep(400000);

if (in_array("", $post)) {
    $response["error"][] = "All data must be provided.";
}

if (!filter_var($post['email'], FILTER_VALIDATE_EMAIL)) {
    $response["error"][] = "Provide a valid email.";
}

if ($action === 'create_user' && empty($response['error'])) {
    $user = new stdClass();
    $user->first_name = $post['first_name'];
    $user->last_name = $post['last_name'];
    $user->email = $post['email'];

    $response['first_name'] = $user->first_name;
    //$response['redirect'] = "https://weww.google.com";
}

echo json_encode($response);
