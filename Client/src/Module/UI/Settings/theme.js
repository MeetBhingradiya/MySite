function theme_toggle()
{
    const img = document.getElementById('theme_img');
    const dark = './Settings/theme-dark.png';
    const light = './Settings/theme-light.png';
    if(img.getAttribute('src') == "./Settings/theme-dark.png")
        {
            img.setAttribute('src',light);
            document.getElementById('body').setAttribute('class','light');
        }
    else 
        {
            img.setAttribute('src',dark);
            document.getElementById('body').setAttribute('class','dark');
        }
}