function sendSubmission() {

	const emailInput = document.getElementById('emailForm'),
	 nameInput = document.getElementById('nameForm'), 
	 phoneInput = document.getElementById('phoneForm'),
	 answer1Input = document.getElementById('answer1Form'),
	 answer2Input = document.getElementById('answer2Form'),
	 answer3Input = document.getElementById('answer3Form'),
	 answer4Input = document.getElementById('answer4Form'),
	  email = emailInput.value,
	  name = nameInput.value,
	  phone = phoneInput.value,
	  answer1 = answer1Input.value,
	  answer2 = answer2Input.value,
	  answer3 = answer3Input.value,
	  answer4 = answer4Input.value;


	fetch('https://win-with-us-email.herokuapp.com/api/contest', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      email,
      name,
      phone,
      answer1,
      answer2,
      answer3,
      answer4
    })
  })
	.then(response => response)
    .then(res => {
      if (res.ok) {
        openModal('Amazing! You are participating now!');  
      }else{
        openModal('There was an error sending your submission. Please, try again.') 
      }
    })
    .catch(error => openModal('There was an error sending your submission. Please, try again.'))
	}

	function openModal(message) {
		// Get the modal
		var modal = document.getElementById("myModal");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];

		var modalP = document.getElementById('modal-text');
		modalP.innerHTML = message;
		modal.style.display = "block";
	}