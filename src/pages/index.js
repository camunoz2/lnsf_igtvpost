import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const ID = "17841437153117203"

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Liceo Nibaldo Sepulveda - Links IGTV</h1>
      <p>Hola! aca estan los links para los grupos de whatsapp.</p>
      <p>Saluditos!.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
    </Layout>
  )
}

export default IndexPage
