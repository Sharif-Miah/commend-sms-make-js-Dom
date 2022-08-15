document.getElementById('list-container').addEventListener('click', function (event) {
    event.target.parentNode.removeChild(event.target)
})


document.getElementById('btn-added').addEventListener('click', function () {
    const listContainer = document.getElementById('list-container')

    const li = document.createElement('li')
    li.innerText = 'This is another List tag';
    li.classList = 'item'
    listContainer.appendChild(li)
})