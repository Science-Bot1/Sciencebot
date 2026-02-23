import React from 'react';
import './InfiniteCarousel.css';

/**
 * Carousel image data structure
 * @param id - Unique identifier for the image
 * @param image - Path to the image file
 * @param alt - Alternative text for accessibility
 * @param category - Category label displayed on hover
 */
export interface CarouselImage {
    id: number;
    image: string;
    alt: string;
    category: string;
}

/**
 * Props for the InfiniteCarousel component
 * @param images - Array of carousel images with metadata
 * @param speed - Speed in seconds for one complete cycle (default: 40)
 * @param itemHeight - Height of each item in pixels (default: 150)
 * @param gap - Gap between items in pixels (default: 20)
 */
interface InfiniteCarouselProps {
    images: CarouselImage[];
    speed?: number;
    itemHeight?: number;
    gap?: number;
}

export function InfiniteCarousel({
    images,
    speed = 40,
    itemHeight = 150,
    gap = 20
}: InfiniteCarouselProps) {
    // Duplicate images for seamless infinite loop
    const duplicatedImages = [...images, ...images];

    return (
        <div
            className="infinite-carousel"
            style={{
                '--carousel-height': `${itemHeight}px`,
                '--carousel-gap': `${gap}px`,
                '--carousel-speed': `${speed}s`
            } as React.CSSProperties}
        >
            <div className="carousel-container">
                <div
                    className="carousel-track"
                >
                    {duplicatedImages.map((img, idx) => (
                        <div
                            key={`${img.id}-${idx}`}
                            className="carousel-item"
                        >
                            <div className="carousel-image-wrapper">
                                <img
                                    src={img.image}
                                    alt={img.alt}
                                    loading="lazy"
                                    className="carousel-image"
                                />
                                <div className="carousel-overlay">
                                    <div className="carousel-content">
                                        <span className="carousel-category">{img.category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
