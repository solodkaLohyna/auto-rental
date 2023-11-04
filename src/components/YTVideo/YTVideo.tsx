import styles from "./YTVideo.module.css"

export const YTVideo = () => {
    return (
        <><div className={styles.container}>
            <iframe width="560" height="315"
                src="https://www.youtube.com/embed/x4xJ-4piQxI?si=bhvhqpmDDbnB98M3"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
                frameBorder="0">
            </iframe>
        </div>
        </>
    )
}