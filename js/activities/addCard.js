let now = new Date();

const getDataActivity = () => {
    return $.get("http://localhost:8000/api/activity", function(data) {       
        for (let i = 0; i < data.length; i++) {
            const element = [i];
            let title = data[element].activity;
            $(".allCards").append(card(title)) 
        }      
    })
}

const cleanCamp = () => {$("#textarea1").val("")}

const openModal = () => {
    event.preventDefault()
    $('.modal').modal();    
}

const sincCards = () => {
    let card = []
    let cardData = {
        activity: $("#textarea1").val(),
        created_at: "2019-03-05 15:03:08",
    }

    $.post("http://localhost:8000/api/activity", cardData);

}

const addCard = () => {
    sincCards();
    const cardTitle = $("#textarea1").val();
    $(".allCards").prepend(card(cardTitle))
    cleanCamp();
}

const card = (cardTitle) => {
    return `
    <div class="card">       
        <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${cardTitle}<i id="icon-delete" class="material-icons right">delete</i></span>
            <span>${now}</span>
        </div>        
    </div>
    `
};

$(".add-card").click(openModal)

$(".ok-modal-add").click(addCard)

$( document ).ready(getDataActivity)









