var type = 1, //circle type - 1 whole, 0.5 half, 0.25 quarter
    radius = '298px', //distance from center
    start = -90, //shift start from 0
    $elements = $('.cog-ellipse__element'),
    numberOfElements = (type === 1) ?  $elements.length : $elements.length - 1, //adj for even distro of elements when not full circle
    slice = 360 * type / numberOfElements;

$elements.each(function(i) {
    var $self = $(this),
        rotate = slice * i + start,
        rotateReverse = rotate * -1;

        if(rotate === -90) {
            $self.find('figcaption').addClass('cog-ellipse__subtitle--top');
        } else if (rotate > -90 && rotate < 90) {
            $self.find('figcaption').addClass('cog-ellipse__subtitle--right');
        } else if (rotate === 90) {
            $self.find('figcaption').addClass('cog-ellipse__subtitle--bottom');
        } else {
            $self.find('figcaption').addClass('cog-ellipse__subtitle--left');
        }
        
    
    $self.css({
        'transform': 'rotate(' + rotate + 'deg) translate(' + radius + ') rotate(' + rotateReverse + 'deg)'
    });
});