export default function setupBaseUI() {
    const setProjectButton = (projectButton) =>{
        projectButton.addEventListener('click', () => {
            rightHolder = document.querySelector('#right-holder');
            lists = rightHolder.querySelectorAll('ul');
            lists.forEach(list => {
                list.replaceChildren();
            });
        });
    };

    return{
        setProjectButton
    };
}