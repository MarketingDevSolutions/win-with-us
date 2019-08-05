function closeModal() {
	// Get the modal
		var modal = document.getElementById("myModal");
		 modal.style.display = "none";
}

window.onclick = function(event) {
	var modal = document.getElementById("myModal");

	  if (modal.style.display === 'block') {
	    closeModal();
	  }
	}