import throttle from 'lodash.throttle';
const FEED_KEY = "feedback-form-state";
const formData = { };
const formEl = document.querySelector('.feedback-form');
init_Start_Form();
formEl.addEventListener("submit", onFormElSubmit);
formEl.addEventListener("input",throttle(onFormElInput, 500));

//При изменениях в полях
function onFormElInput(event)
{
    const formData = {
        email : "",
        message : ""
    }
    formData.email = formEl.email.value;
    formData.message = formEl.message.value;
    localStorage.setItem(FEED_KEY, JSON.stringify(formData));
   
};

//При нажатии Submit
function onFormElSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    
    const email = formElements.email.value;
    const message = formElements.message.value;
    if ((email === "") | (message === "")) { alert("Все поля должны быть заполнены!") }
    else {
   
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, nameF) => {
                        formData[nameF] = value;            
        });
        console.log(formData);
        formEl.reset();
        localStorage.removeItem(FEED_KEY);
    }
   
}

function init_Start_Form()
{
    if (localStorage.getItem(FEED_KEY)) {
        const fealds_form = JSON.parse(localStorage.getItem(FEED_KEY));
        formEl.email.value = fealds_form.email;
        formEl.message.value = fealds_form.message;
    
}
 
}