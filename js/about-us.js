//navbar code 
let openNavElement=document.querySelector('.open');
    let closeNavElement=document.querySelector('.closebtn');
    let sidenavElement=document.querySelector('.sidenav');
    openNavElement.onclick=function(){
      sidenavElement.style.width="200px";
    } 
    closeNavElement.onclick=function(){
      sidenavElement.style.width="0";
    }
    window.onclick=function(event){
      if(event.target !== sidenavElement && event.target !== openNavElement){
        sidenavElement.style.width="0";
      }
    }
    let mainMenu = document.querySelector(".main-menu");
    let topicMainMenu = document.querySelector(".topic-main-menu");
    let topicMainMenuDld = document.querySelector(".topic-main-menu-dld");
    let topicMainMenuDsa=document.querySelector(".topic-main-menu-dsa");

    function showDiscreteTopics() {
      mainMenu.style.display = "none";
      topicMainMenu.classList.add('active-topic');
  }
  function showDldTopics() {
    mainMenu.style.display = "none";
    topicMainMenuDld.classList.add('active-topic-dld');
}
  function showDsaTopics() {
    mainMenu.style.display = "none";
    topicMainMenuDsa.classList.add('active-topic-dsa');
  }
 
  const btn2=document.querySelector(".btn2");
btn2.onclick= function logout(){
  auth.signOut(auth).then(() => {
      // Sign-out successful.
      alert('Signout Successfull');
    }).catch((error) => {
      // An error happened.
      alert("Unsuccessfull"+ error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('email-form');
  const formStatus = document.getElementById('form-status');

  form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
          const response = await fetch('send_email.php', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data)
          });

          const result = await response.json();
          if (result.success) {
              formStatus.textContent = "Email sent successfully!";
              formStatus.style.color = "green";
          } else {
              formStatus.textContent = "Failed to send email. Please try again.";
              formStatus.style.color = "red";
          }
      } catch (error) {
          formStatus.textContent = "An error occurred. Please try again.";
          formStatus.style.color = "red";
      }
  });
});
