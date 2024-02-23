import * as React from "react"
import * as styles from "./video.module.css"
import { StaticImage } from "gatsby-plugin-image";

{/* ビデオと言いつつ、再生できなくて画像に逃げています。ごめんなさい。*/}

const VideoBackground = ({ title, children }) => (
  <div className={styles.videoBackground}>
    <StaticImage
      src="../../images/image3.png"
      alt="image"
      layout="fullWidth"
      placeholder="blurred"
      className={styles.video}
    />
    <div className={styles.contentOverlay}>
      {children}
    </div>
  </div>
);

export default VideoBackground;
