import React from "react"
import FacebookLogin from "react-facebook-login"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const ID = "17841437153117203"
  const responseFacebook = response => {
    console.log(response)
  }

  const componentClicked = () => {
    console.log("clicked")
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Liceo Nibaldo Sepulveda - Links IGTV</h1>
      <p>Hola! aca estan los links para los grupos de whatsapp.</p>
      <p>Saluditos!.</p>
      <FacebookLogin
        appId="2740574122713857"
        autoLoad="true"
        fields="name,email,picture,videos"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </Layout>
  )
}

export default IndexPage
