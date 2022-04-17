var afFeedbackType = null;
var afFeedbackReason = '';

function afPositiveFeedback() {
    afFeedbackType = "POSITIVE"
    swal.fire({
        html: `<div class="afp-text-start">
     <h4 class="" style="color:black;font-family:Arial">How helpful was it?</h4>
 
     
 <div class="afp-m-1 afp-text-primary afp-d-flex afp-align-items-center" onclick="afFeedbackForm('Article Changed Life')">
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
   <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
 </svg>
              <small class="afp-my-3 afp-ms-3 afp-fs-6 afp-fw-light" style="font-family:Arial">This article changed my life!</small>
             </div>
 
 <div class="afp-m-1 afp-text-primary afp-d-flex afp-align-items-center" onclick="afFeedbackForm('Informative Article')">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
   <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
 </svg>
              <small class="afp-my-3 afp-ms-3 afp-fs-6 afp-fw-light" style="font-family:Arial">This article was informative.</small>
             </div>
 
 <div class="afp-m-1 afp-text-primary afp-d-flex afp-align-items-center" onclick="afFeedbackForm('Medical Question')">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
   <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
 </svg>
              <small class="afp-my-3 afp-ms-3 afp-fs-6 afp-fw-light" style="font-family:Arial">I have a medical question.</small>
             </div>
 
 </div>`,
        showConfirmButton: false
    })
}

function afNegativeFeedback() {
    afFeedbackType = "NEGATIVE"
    swal.fire({
        html: `<div class="afp-text-start">
     <h4 class="" style="color:black;font-family:Arial">How can we improve it?</h4>
 
     
 <div class="afp-m-1 afp-text-primary afp-d-flex afp-align-items-center" onclick="afFeedbackForm('Incorrect Information')">
               <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
   <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"></path>
 </svg>
              <small class="afp-my-3 afp-ms-3 afp-fs-6 afp-fw-light" style="font-family:Arial">This article contains incorrect information.</small>
             </div>
 
 <div class="afp-m-1 afp-text-primary afp-d-flex afp-align-items-center" onclick="afFeedbackForm('Missing Information')">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-hand-thumbs-down" viewBox="0 0 16 16">
   <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z"/>
 </svg>
              <small class="afp-my-3 afp-ms-3 afp-fs-6 afp-fw-light" style="font-family:Arial">This article doesn’t have the information I’m looking for.</small>
             </div>
 
 <div class="afp-m-1 afp-text-primary afp-d-flex afp-align-items-center"  onclick="afFeedbackForm('Medical Question')">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
   <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
   <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
 </svg>
              <small class="afp-my-3 afp-ms-3 afp-fs-6 afp-fw-light" style="font-family:Arial">I have a medical question.</small>
             </div>
 
 </div>`,
        showConfirmButton: false
    })
}

function afFeedbackForm(reason) {
    afFeedbackReason = reason;
    var afForm = `<div><textarea id="afFeedbackMessage" placeholder="Please tell us more about your reason." class="afp-fs-6 afp-form-control afp-rounded-0 afp-shadow-none" rows="4" style="font-family:Arial"></textarea>
<small class="afp-text-muted" style="font-size:medium;font-family:Arial">Note: Gilmore Health isn’t a healthcare provider. We can’t respond to health questions or give you medical advice.</small>
<input id="afUserEmail" placeholder="Your email" class="afp-my-2 afp-form-control afp-rounded-0 afp-shadow-none" style="font-family:Arial">
<input id="afUserName" placeholder="Your name" class="afp-my-2 afp-form-control afp-rounded-0 afp-shadow-none" style="font-family:Arial">

<div class="afp-btn afp-btn-primary afp-px-5 afp-rounded-0 afp-fs-6" style="font-family:Arial" onclick="afSendFeedback()">Done</div> <br>
<small style="font-size:medium;font-family:Arial" class="afp-text-muted"> Your &nbsp;<a href="/privacy"> privacy </a>&nbsp; is important to us.</small>
</div>`;
    var medicalQuestionMarkup = `<div><p>We’re unable to offer personal health advice,  &nbsp;but we’ve partnered with JustAnswer who offers on-demand doctors to answer your medical questions 24/7.  &nbsp;Talk online now with a doctor and get fast 1-on-1 answers from the comfort of your couch.</p>
        <div class="afp-text-center"><img src="`+ afpData.afp_path + `/just-answer-logo.png">
	<br>
            <div class="afp-btn afp-btn-primary mt-2 afp-shadow-none afp-rounded-0">Ask a doctor now.</div>
        </div>
        <small class="afp-text-muted mt-1" style="font-size:medium;font-family:Arial">Note: Gilmore Health isn’t a healthcare provider. We can’t respond to health questions or give you medical advice.</small>
    </div>`;
    Swal.fire({
        html: `<div class="afp-text-start" >
			<h4 class="" style="color:black;font-family:Arial">How helpful was it?</h4>
			<div>
			<p class="afp-p-2 afp-mb-0 afp-fs-6 afp-bg-light">Reason : &nbsp; ` + reason + `</p>
			<p style="text-align:right;font-size:small;cursor:pointer" onclick="afFeedbackType=='POSITIVE'?afPositiveFeedback():afNegativeFeedback()">change</p>
			
			`+ (reason == "Medical Question" ? medicalQuestionMarkup : afForm) + `
		</div>
</div>`,
        showConfirmButton: false
    })
}

function afSendFeedback() {
    var message = document.getElementById('afFeedbackMessage').value;
    var email = document.getElementById('afUserEmail').value;
    var name = document.getElementById('afUserName').value;
    var data = {
        'action': 'af_send_email',
        'message': message,
        'email': email,
        'name': name,
        'type': afFeedbackType,
        'reason': afFeedbackReason
    };
    jQuery.post(afpData.afpAjaxURL, data, function (response) {
        console.log(response)
        if (response == "SUCCESS") {
            swal.fire({
                html: `<div>
	  <h4 class="" style="color:black">We appreciate your helpful feedback!</h4>
<p style="font-family:Arial" >Let’s be friends – join our Facebook community.</p>
							<a class="afp-btn afp-btn-primary afp-px-5 afp-shadow-none afp-text-decoration-none afp-rounded-0 afp-text-center" style="font-family:Arial" href="https://www.facebook.com/gilmorehealth/"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg> Join Us</a>
					</div>`,
                showConfirmButton: false,
            })
        }
    });

}