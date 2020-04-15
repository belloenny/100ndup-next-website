import * as React from "react"
import Layout from "../../components/Layout"
import Carousel, { Modal, ModalGateway } from "react-images"
import { LazyImage } from "../../components/lazyImage"
import fetch from "isomorphic-unfetch"

interface Photo {
    id: number
    name: string
    url: string
}
interface Project {
    id: number
    Title: string
    created_at: string
    updated_at: string
    photos: Array<Photo>
}

const ProjectPage = props => {
    const [currentImage, setCurrentImage] = React.useState(0)
    const [viewerIsOpen, setViewerIsOpen] = React.useState(false)
    const openLightbox = React.useCallback(index => {
        setCurrentImage(index)
        setViewerIsOpen(true)
    }, [])

    const closeLightbox = () => {
        setCurrentImage(0)
        setViewerIsOpen(false)
    }
    React.useEffect(() => {
        console.log(props.projects)
    })
    const photos: Photo[] = props.photos
    const newPhotos = photos.map(photo => {
        return {
            id: photo.id,
            name: photo.name,
            source: photo.url
        }
    })
    return (
        <Layout>
            <div className="container">
                <h1>{props.Title}</h1>
                <div className="photo-grid">
                    {newPhotos.map((photo, index) => (
                        <LazyImage
                            src={photo.source}
                            alt={photo.name}
                            key={index}
                            onclick={openLightbox.bind(null, index)}
                        />
                    ))}
                </div>
            </div>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={
                                newPhotos &&
                                newPhotos.map(x => ({
                                    ...x
                                }))
                            }
                        />
                    </Modal>
                ) : null}
            </ModalGateway>

            <style jsx>{`
                .container {
                    margin: 200px auto 0 auto;
                    max-width: 1080px;
                }
                .container h1 {
                    text-align: center;
                    font-size: 55px;
                    margin-bottom: 50px;
                }
                .photo-grid {
                    display: grid;
                    gap: 1rem;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                }
                @media screen and (max-width: 991px) { 
                    .container {
                        padding: 0px 20px;
                    }
                }
                @media screen and (max-width: 476px) { 
                   .photo-grid {
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                   }
                }
            `}</style>
        </Layout>
    )
}

ProjectPage.getInitialProps = async context => {
    const data = await fetch(
        `https://morning-shore-31799.herokuapp.com/projects/${context.query.pid}`
    )
    const projects = data.json()
    return projects
}

export default ProjectPage
