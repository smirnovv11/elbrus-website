import { Carousel, Image } from 'antd'
import styled from 'styled-components';
import styles from './Gallery.module.css'

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
    return (
        <>
            <div className={styles.container}>
                <h2>Лицензии</h2>
                <CarouselWrapper autoplay autoplaySpeed={3000} className={styles.carousel}>
                    <div className={styles.slide}>
                        <Image.PreviewGroup preview={{}}>
                            <Image src="/images/gallery/license1.jpg" />
                            <Image src="/images/gallery/license1.jpg"/>
                            <Image src="/images/gallery/license1.jpg"/>
                            <Image src="/images/gallery/license1.jpg"/>
                        </Image.PreviewGroup>
                    </div>
                </CarouselWrapper>
            </div>
            <div className={styles.container}>
                <h2>Фотогалерея</h2>
                <CarouselWrapper autoplay autoplaySpeed={4000} className={styles.carousel}>
                    <div className={styles.slide}>
                        <Image.PreviewGroup preview={{}}>
                            <Image src="/images/photos/14.jpg.webp"/>
                            <Image src="/images/photos/14.jpg.webp"/>
                            <Image src="/images/photos/14.jpg.webp"/>
                            <Image src="/images/photos/14.jpg.webp"/>
                            <Image src="/images/photos/14.jpg.webp"/>
                        </Image.PreviewGroup>
                    </div>
                    <div className={styles.slide}>
                        <Image.PreviewGroup preview={{}}>
                            <Image src="/images/photos/12.jpg.webp"/>
                            <Image src="/images/photos/12.jpg.webp"/>
                            <Image src="/images/photos/12.jpg.webp"/>
                            <Image src="/images/photos/12.jpg.webp"/>
                            <Image src="/images/photos/12.jpg.webp"/>
                        </Image.PreviewGroup>
                    </div>
                </CarouselWrapper>
            </div>
            <div className={styles.container} style={{alignItems: 'center'}}>
                <h2 >СМИ о ЧОО «Эльбрус»</h2>
                <div className={styles.videos}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/f9f4ywtGOkg?si=fjcbfitUBHZxU07T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/f9f4ywtGOkg?si=fjcbfitUBHZxU07T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
        </>
    )
}

export default Gallery