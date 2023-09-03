<?php
/**
* Plugin Name: Awesome Feedbacks
 * Author: Vipul
* Version: 1.23
**/
add_action( 'wp_enqueue_scripts', 'loadStylesheetsAwesomeFeedbacks' );
function loadStylesheetsAwesomeFeedbacks() 
{
    wp_register_style('afp_styles', plugin_dir_url( __FILE__ )  . '/styles/afp_styles.css');
    wp_enqueue_style('afp_styles'); 
    wp_register_script('afp_sweetalert', '/wp-content/plugins/awesome-feedbacks/js/sweetalert2.all.min.js');
    wp_enqueue_script('afp_sweetalert'); 
	
    wp_register_script('afp_main', '/wp-content/plugins/awesome-feedbacks/js/afp_main.js',array('jquery'));
    wp_enqueue_script('afp_main',);  
    $script_data = array(
        'afp_path' => plugin_dir_url( __FILE__ ),
        'afpAjaxURL' =>admin_url( 'admin-ajax.php' ) 
        
    );  
   
	wp_localize_script( 'afp_main',  'afpData', $script_data);
}


add_action( 'the_content', 'showAwesomeFeedbacksButton' );
function showAwesomeFeedbacksButton ( $content ) {
    return $content .= '
    
    <div style="display: flex;align-items:center;font-family: Arial, Helvetica, sans-serif;">
    <p style="margin: 0;">FEEDBACK: </p>

    <div type="button" id="af_negative_feedback" onclick="afNegativeFeedback()" class="afp-btn afp-mx-1 afp-btn-outline-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"></path>
</svg>
              </div>
    <div type="button" id="af_positive_feedback" onclick="afPositiveFeedback()" class="afp-btn afp-mx-1 afp-btn-outline-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"></path>
</svg>
              </div>
</div>';
}

add_action( 'wp_ajax_af_send_email', 'afpSendEmail' );
add_action( 'wp_ajax_nopriv_af_send_email', 'afpSendEmail' );

function afpSendEmail(){
	$message = '<div style="font-family: Arial, Helvetica, sans-serif;">
    <h1 style="text-align: center;background-color: #0f75bd;color: white;padding: 5px;">Feedback</h1>
    <div style="padding-left:10%;">
        <p style="font-weight: bold;">From</p>
        <p style="margin: 5px auto 5px auto;">Name : '.$_POST['name'] . '</p>
        <p style="margin:  5px auto 5px auto;">Email :'.$_POST['email'] . '</p>

        <p style="font-weight: bold;">Feedback Details</p>
        <p style="margin: 5px auto 5px auto;">Type :'.$_POST['type'] . '</p>
        <p style="margin:  5px auto 5px auto;">Reason : '.$_POST['reason'] . '</p>
        <p style="margin:  5px auto 5px auto;">Message : '.$_POST['message'] . '</p>
    </div>
</div>';
	//$email = $_POST['email'];
	//$name = $_POST['name'];
	//$type = $_POST['type'];
	//$reason = $_POST['reason'];
	$to = get_option('admin_email'); 
	 
	$headers = array(
    //'From: Info <info@gilmorehealth.com>;',
    'Content-Type: text/html; charset=UTF-8',
);
	
	//apply_filters( 'wp_mail_from', "info@gilmorehealth.com" );
	if( wp_mail( $to, $_POST['type'] . " Feeback", $message , $headers)) {
		
		echo "SUCCESS";
	}else {
		echo "FAIL";
	}
	wp_die();
}