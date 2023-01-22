$(document).ready(function() {
    adjustCog();
});

$(window).resize(function() {
    adjustCog();
})

function adjustCog() {
    var type = 1,
        radius = '298px',
        start = -90,
        $elements = $('.cog-ellipse-element'),
        numberOfElements = $elements.length,
        slice = 360 * type / numberOfElements;

        if($(window).width() <= 1280) {
            radius = '220px';
        }

    $elements.each(function(i) {
        var $self = $(this),
            rotate = slice * i + start,
            rotateReverse = rotate * -1;

            if(rotate === -90) {
                $self.find('figcaption').addClass('cog-ellipse-element__subtitle--top');
            } else if (rotate > -90 && rotate < 90) {
                $self.find('figcaption').addClass('cog-ellipse-element__subtitle--right');
            } else if (rotate === 90) {
                $self.find('figcaption').addClass('cog-ellipse-element__subtitle--bottom');
            } else {
                $self.find('figcaption').addClass('cog-ellipse-element__subtitle--left');
            }
            
        
        $self.css({
            'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
        });
    });
}