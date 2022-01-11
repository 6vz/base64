function convprocess() {
    const fieldValue = document.getElementById('toConvert').value;
    const resultPlaceholder = document.getElementById('resultHolder')
    if (!fieldValue.length) {
        resultPlaceholder.innerHTML = 'Did you know that Cat families usually play best in even numbers. Cats and kittens should be acquired in pairs whenever possible'
        return Swal.fire({
            title: 'Something went wrong',
            text: 'No text detected... You have to enter something',
            icon: 'error',
            confirmButtonText: "I'll fix it..."
          })
    }
    resultPlaceholder.innerHTML = btoa(fieldValue)
    
}

function reverseconvprocess() {
    const fieldValue = document.getElementById('toConvert').value;
    const resultPlaceholder = document.getElementById('resultHolder')
    if (!fieldValue.length) {
        resultPlaceholder.innerHTML = 'Did you know that Cat families usually play best in even numbers. Cats and kittens should be acquired in pairs whenever possible'
        return Swal.fire({
            title: 'Something went wrong',
            text: 'No text detected... You have to enter something',
            icon: 'error',
            confirmButtonText: "I'll fix it..."
          })
    }
    resultPlaceholder.innerHTML = atob(fieldValue)
    
}