import React, { useState, useEffect } from "react"

const placeHolder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="

interface Props {
    onclick?: (event: React.MouseEvent<HTMLImageElement>) => void
    src: string
    alt: string
}
export const LazyImage:React.FC<Props> = ({ src, alt,onclick }) => {
    const [imageSrc, setImageSrc] = useState(placeHolder)
    const [imageRef, setImageRef] = useState()

    const onLoad = event => {
        event.target.classList.add("loaded")
    }

    const onError = event => {
        event.target.classList.add("has-error")
    }

    useEffect(() => {
        let observer
        let didCancel = false

        if (imageRef && imageSrc !== src) {
            if (IntersectionObserver) {
                observer = new IntersectionObserver(
                    entries => {
                        entries.forEach(entry => {
                            if (
                                !didCancel &&
                                (entry.intersectionRatio > 0 ||
                                    entry.isIntersecting)
                            ) {
                                setImageSrc(src)
                                observer.unobserve(imageRef)
                            }
                        })
                    },
                    {
                        threshold: 0.01,
                        rootMargin: "75%"
                    }
                )
                observer.observe(imageRef)
            } else {
                // Old browsers fallback
                setImageSrc(src)
            }
        }
        return () => {
            didCancel = true
            // on component cleanup, we remove the listner
            if (observer && observer.unobserve) {
                observer.unobserve(imageRef)
            }
        }
    }, [src, imageSrc, imageRef])
    return (
        <React.Fragment>
            <img
              //@ts-ignore
                ref={setImageRef}
                src={imageSrc}
                alt={alt}
                onLoad={onLoad}
                onError={onError}
                className="img"
                onClick={onclick}
            />
            <style jsx>{`
                .img {
                    display: block;
                    width: 100%;
                }
                @keyframes loaded {
                    0% {
                        opacity: 0.1;
                    }
                    100% {
                        opacity: 1;
                    }
                }

                .loaded:not(.has-error) {
                    animation: loaded 300ms ease-in-out;
                }

                .has-error {
                    content: url(${placeHolder});
                }
            `}</style>
        </React.Fragment>
    )
}
