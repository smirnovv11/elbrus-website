import { Carousel, Image } from 'antd'
import styled from 'styled-components';
import styles from './Gallery.module.css'

const licenses = [
    '/images/gallery/license1.jpg',
    '/images/gallery/license1.jpg',
    '/images/gallery/license1.jpg',
    '/images/gallery/license1.jpg',
]

const photos = [
    '/images/photos/14.jpg.webp',
    '/images/photos/14.jpg.webp',
    '/images/photos/14.jpg.webp',
    '/images/photos/14.jpg.webp',
    '/images/photos/14.jpg.webp',
    '/images/photos/12.jpg.webp',
    '/images/photos/12.jpg.webp',
    '/images/photos/12.jpg.webp',
    '/images/photos/12.jpg.webp',
    '/images/photos/12.jpg.webp',
]

const links = [
    'https://www.youtube.com/embed/f9f4ywtGOkg?si=fjcbfitUBHZxU07T',
    'https://www.youtube.com/embed/f9f4ywtGOkg?si=fjcbfitUBHZxU07T',
    'https://www.youtube.com/embed/f9f4ywtGOkg?si=fjcbfitUBHZxU07T',
]

function chunkArray(arr, chunkSize) {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        result.push(arr.slice(i, i + chunkSize));
    }
    return result;
}

const CarouselWrapper = styled(Carousel)`
    > .slick-dots li button {
        background: rgb(101, 101, 101);
        height: 4px
    }

    > .slick-dots li.slick-active button {
        background: black;
    }
`;

const Gallery = () => {

    let chunkLinense = 4
    let chunkPhotos = 5
    let chunkLinks = 3
    if (window.innerWidth <= 500) {
        chunkPhotos = 1
        chunkLinks = 1
        chunkLinense = 1
    }
    else if (window.innerWidth <= 660) {
        chunkLinense = 1
        chunkPhotos = 2
        chunkLinks = 1
    }
    else if (window.innerWidth <= 1260) {
        chunkLinense = 2
        chunkPhotos = 3
        chunkLinks = 2
    }

    return (
        <>
            <div className={styles.container}>
                <h2>Лицензии</h2>
                <CarouselWrapper autoplay autoplaySpeed={3000} className={styles.carousel}>
                    {chunkArray(licenses, chunkLinense).map((group) => (
                        <div className={styles.slide}>
                            <Image.PreviewGroup preview={{}}>
                            {group.map(l => (
                                <Image src={l}/>
                            ))}
                            </Image.PreviewGroup>
                        </div>
                    ))}
                </CarouselWrapper>
            </div>
            <div className={styles.container}>
                <h2>Фотогалерея</h2>
                <CarouselWrapper autoplay autoplaySpeed={4000} className={styles.carousel}>
                    {chunkArray(photos, chunkPhotos).map((group) => (
                        <div className={styles.slide}>
                            <Image.PreviewGroup preview={{}}>
                            {group.map(p => (
                                <Image src={p}/>
                            ))}
                            </Image.PreviewGroup>
                        </div>
                    ))}
                </CarouselWrapper>
            </div>
            <div className={styles.container}>
                <h2 >СМИ о ЧОО «Эльбрус»</h2>
                <CarouselWrapper autoplay autoplaySpeed={3500} className={styles.carousel}>
                    {chunkArray(links, chunkLinks).map((group) => (
                        <div className={styles.slide}>
                            {group.map(l => (
                                <iframe width="560" height="315" src={l} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            ))}
                        </div>
                    ))}
                </CarouselWrapper>
            </div>
        </>
    )
}

export default Gallery