import {UncontrolledCarousel} from 'reactstrap';
const items = [
    {
        src:'market.png',
        altText:'마켓',
        caption:'market caption',
        header:'market header'
    },
    {
        src:'Plogo.png',
        altText:'편마카세',
        caption:'Plogo caption',
        header:'Plogo header'
    },
    {
        src:'어깡곰.jpg',
        altText:'어깡곰',
        caption:'어깡곰 caption',
        header:'어깡곰 header'
    }
];

function CarouselStrap() {
    return(
        <UncontrolledCarousel items={items}/>
    )
}

export default CarouselStrap;