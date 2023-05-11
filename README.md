# ThemeJs

<h4>Easy Theme Control</h4>

Live demo: [sadiq-bd.github.io/ThemeJs/](https://sadiq-bd.github.io/ThemeJs/)


    <script src="./src/theme.js" type="text/javascript"></script>
    <script type="text/javascript">
        const theme = new Theme('dark');
        theme.applyElements([
            'body',
            'h4',
            'p',
            'div.container'
        ]);
        theme.init();

    </script>
    
toogle theme

    theme.switch();
    
