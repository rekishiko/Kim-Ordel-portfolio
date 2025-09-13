

  underConst.addEventListener("click", openPopUp);
  
  returnbtn.addEventListener("click", closePopup);

  const underConst= document.querySelector(".underConst");

  function openPopUp(){
    fetch('somePage.html')
  .then(response => {
    // When the page is loaded convert it to text
    return response.text()
  })
  .then(html => {
    // Initialize the DOM parser
    const popUpHtml = html

  })
  .catch(error => {
     console.error('Failed to fetch page: ', error)
  })
  }

