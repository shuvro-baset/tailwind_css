// change the banner text when buy now button is clicked;
document.getElementById('btn-by-now').addEventListener('click', function(){
    var penguinTxt = document.getElementById('penguin-text');
    penguinTxt.innerText = 'I am penguin';
    console.log(penguinTxt);
})

