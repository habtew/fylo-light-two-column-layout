const submitBtn1  = document.querySelector('form .button1')
const submitBtn2 = document.querySelector('form .button2')
const regex = /^\w*@\w+.com/gi

submitBtn1.addEventListener('click', (e)=>{
        e.preventDefault()
        const inputVal1 = document.querySelector('form .input1')
        // const p = document.querySelector('.form-section .invalid-email')
        if( !regex.test(inputVal1.value)){
            document.querySelector('form .span1').style.display = 'block'
            inputVal1.value = ''
        }
        else{
            document.querySelector('form span1').style.display = 'none'
            inputVal1.value = ''
        }
    })

// submitBtn.addEventListener('click', (e)=>{
    
submitBtn2.addEventListener('click', (e)=>{
    e.preventDefault()
    const inputVal2 = document.querySelector('form .input2')
    // const p = document.querySelector('.form-section .invalid-email')
    if( !regex.test(inputVal2.value)){
        document.querySelector('form .span2').style.display = 'block'
        inputVal2.value = ''
    }
    else{
        document.querySelector('form .span2').style.display = 'none'
        inputVal2.value = ''
    }
})
