import React from "react"
import {HomeContainer, ProductsContainer} from "./style"
import Card from "../../components/card/Card"
import palmitos from "../../palmito.json"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer"

export default function HomePage(){
    console.log(palmitos);

    const allProdcts = palmitos.palmitos.map((prodct)=>{
        return(
            <Card
                id={prodct.id}
                image={prodct.image}
                name={prodct.name}
                price={prodct.price}
                description={prodct.description}
                brand={prodct.brand}
            />
        )
    })
    return(
        <HomeContainer>
            <Header/>
           <ProductsContainer>
            {allProdcts}
           </ProductsContainer>
           <Footer/>
        </HomeContainer>
    )

  
}
