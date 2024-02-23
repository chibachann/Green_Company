import * as React from "react"
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"
import Card from "../components/Card/card";
import Video from "../components/Video/video";


import * as styles from "../components/index.module.css"

const HomePage = () => {
  return (
    <Layout>
      {/* ビデオと言いつつ、再生できなくて画像に逃げています。ごめんなさい。*/}
      <Video>
        <h2>事業内容</h2>
        <p>私たちの使命は、植物の力を最大限に活用し、地球環境への負荷を減らしながら、</p>
        <p>人々の生活を豊かにすることです。新しい塗料の開発から、持続可能な素材や技術の探求に至るまで、</p>
        <p>私たちはあらゆる可能性を検討し、革新的な解決策を提供し続けます。</p>
      </Video>
      <div className={styles.cardContainer}>
      <Card 
          image={<StaticImage src="../images/image1.png" alt="自然の力を活かした革新への取り組み" />} 
          title="自然の力を活かした革新への取り組み" 
          text="私たちの周囲には、解決を待つ無数の課題が存在します。グリーンハーモニー株式会社では、これらの課題に対し、自然の知恵を取り入れた斬新なアプローチで応えていきます。私たちは、植物の持つ”特殊”な”機能”を活用し、環境問題の解決から日常生活における小さな困りごとまで、あらゆる難題に挑戦します。"
        />
        <Card 
          image={<StaticImage src="../images/image2.png" alt="環境に優しい新素材・新技術の開発" />} 
          title="環境に優しい新素材・新技術の開発" 
          text="植物科学と最先端技術の融合により、持続可能な新素材・新技術の開発に取り組んでいます。これには、大気浄化能力を持つ緑化素材や、生分解性を有する植物由来プラスチックの開発が含まれます。私たちの目指すのは、自然と人間の共生を促進する製品と解決策を提供することです。"
        />
        <Card 
        image={<StaticImage src="../images/image3.png" alt="お客様と共に創り上げる共同研究開発" />} 
        title="お客様と共に創り上げる共同研究開発" 
        text="グリーンハーモニー株式会社では、お客様の具体的なニーズに応えるため、様々な評価軸を持ちながら共同研究開発を行います。お客様の抱える課題に寄り添い、独自の視点で新たな解決策を模索します。私たちは、持続可能な未来を共に創造するパートナーでありたいと考えています。"
        />
      </div>
    </Layout>
  );
};

export default HomePage;