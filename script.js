document.querySelector('.file').addEventListener('change', function () {
    const file = this.files[0];

    if (!file.type.match('image/jpeg')) {
        alert('Please upload a JPEG image.');
        this.value = '';
        return;
    }

    if (!file.type.match('image/jpg')) {
        alert('Please upload a JPG image.');
        this.value = '';
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        document.querySelector('.pic').style.backgroundImage = `url('${event.target.result}')`;
    };
    reader.readAsDataURL(file);
});

function displayPromp(){
    document.querySelector('.form').style.display="none";
    document.querySelector('.prank').style.display="flex";
    const input=document.querySelector('#trgtName');
    const output=document.querySelector('#txtContent');
    const name=input.value.trim()||'NO NAME PROVIDED';

    output.textContent=`
        We'll save the login info for ${name} to your
        device's cloud backup, so you wont need to enter it on 
        this device or any device you restore.
    `;
}
function displayForm(){
    document.querySelector('.form').style.display="flex";
    document.querySelector('.prank').style.display="none";
}