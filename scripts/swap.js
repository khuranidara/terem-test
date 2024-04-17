document.querySelector('.btn-success').addEventListener('click', swapBlock);
const itemListParent = document.querySelector('.page__section--three-columns');
let isOriginalOrder = true;
function swapBlock() {
    const itemList = document.querySelectorAll('.page__block');
    if(isOriginalOrder) {
        itemListParent.insertBefore(itemList[1], itemList[0]);
    } else {
        itemListParent.insertBefore(itemList[0], itemList[1].nextSibling);
    }
    isOriginalOrder = !isOriginalOrder;
}
