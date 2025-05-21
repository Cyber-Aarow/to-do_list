export function setProjectButton(projectButton, onClick) {
    projectButton.addEventListener('click', onClick);
}

export function setOrderButton(orderButton, onClick){
    const newOrderButton = orderButton.cloneNode(true);
    orderButton.parentNode.replaceChild(newOrderButton, orderButton);
    newOrderButton.addEventListener('click', onClick);
    return newOrderButton;
}

export function updateOrderButtonText(orderButton, order){
    orderButton.textContent = order === 'date' ? 'Order: Date' : 'Order: Priority';
}