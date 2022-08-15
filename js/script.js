
document.getElementById('submit-btn').addEventListener('click', function () {

    const textWrite = document.getElementById('text-write');
    const newText = textWrite.value;

    const commentContainer = document.getElementById('comment-container');

    const p = document.createElement('p')

    p.innerText = newText;
    commentContainer.appendChild(p)

})