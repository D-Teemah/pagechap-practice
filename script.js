const light = document.querySelector('.bottom-light');
const dark = document.querySelector('.bottom-dark');
const p = document.querySelectorAll('p');
const burger = document.querySelector('.menu-icon')
const close = document.querySelector('.side-img')
const mobile =  document.querySelector('.mobile-menu')

console.log(p)

let icon = light
console.log(icon)

if (icon == light){
    
    light.addEventListener('click', function(){
    document.querySelector('body').style.background = 'white'
    for(i = 0; i<p.length; i++){
        p[i].style.color = 'black'
    }
    light.style.display = 'none'
    dark.style.display = 'inline'
    mobile.style.backgroundColor = 'white'
    mobile.style.fontColor = 'black'
})

} else (icon == dark)
{
    dark.addEventListener('click', function(){
        document.querySelector('body').style.background = '#000A0F'
        for(i = 0; i<p.length; i++){
            p[i].style.color = 'white'
        }
        dark.style.display = 'none'
        light.style.display = 'inline'
        mobile.style.backgroundColor = '#000A0F'
        mobile.style.fontColor = 'white'
    
})
}

let icon2 = burger

if(icon2 == burger){

    burger.addEventListener('click', function(){
        mobile.style.visibility = 'visible'
        burger.style.visibility = 'hidden'
    })

}else(icon2 == close)
{
    close.addEventListener('click', function(){
        mobile.style.visibility = 'hidden'
        burger.style.visibility = 'visible'
    })
    
}