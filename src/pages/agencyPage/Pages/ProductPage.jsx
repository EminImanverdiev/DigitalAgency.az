import React from 'react'
import '../../../components/agencyComponents/ProductPage/Product.css'
import ProductHeader from '../../../components/agencyComponents/ProductPage/ProductHeader'
import ProductLevel from '../../../components/agencyComponents/ProductPage/ProductLevel'
import Projects from '../../../components/agencyComponents/ProductPage/Projects'
import PageFooter from '../../../components/agencyComponents/Footer/PageFooter'

export default function ProductPage() {
  return (
    <section id='product'>
      <ProductHeader/>
      <ProductLevel/>
      <Projects/>
      <PageFooter/>
    </section>
  )
}
