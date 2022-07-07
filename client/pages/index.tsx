import {
  About,
  AppStore,
  BackTop,
  Hero,
  Layout,
  ProductsOnTrend,
  Promotion,
  QuestionsAnswers,
  Services,
  Testimonials
} from '../components'
import heroImage from '../public/images/home.png'
import productImage from '../public/images/product.png'

export default function Home() {
  const questionsanswersdata = [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo'
    }
  ]
  const productsData = [
    {
      id: 1,
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 45,
      rate: 4.2,
      reviews: 34,
      currency: '£'
    },
    {
      id: 2,
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 45,
      rate: 4.2,
      reviews: 34,
      currency: '£'
    },
    {
      id: 3,
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 45,
      rate: 4.2,
      reviews: 34,
      currency: '£'
    },
    {
      id: 4,
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 45,
      rate: 4.2,
      reviews: 34,
      currency: '£'
    }
  ]
  const servicesData = [
    {
      image: heroImage.src,
      title: 'Fiability',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      image: heroImage.src,
      title: 'Speed',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      image: heroImage.src,
      title: 'Quality',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  ]
  const reviewsData = [
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
      rate: 2.5,
      name: 'jane',
      avatar: productImage.src
    },
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
      rate: 4,
      name: 'bob',
      avatar: productImage.src
    },
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
      rate: 5,
      name: 'jone',
      avatar: productImage.src
    }
  ]
  const aboutData = {
    image: heroImage.src,
    title: 'Best Food In The Country',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente commodi facilis, minus earum labore vero animi necessitatibus tempora? Assumenda, itaque ad eveniet explicabo quia vero porro quos voluptatum ipsum velit.'
  }

  return (
    <Layout isHeaderVisible isFooterVisible>
      <BackTop />

      <Hero />
      <About data={aboutData} />
      <Services data={servicesData} />
      <ProductsOnTrend data={productsData} />
      <Promotion />
      <Testimonials data={reviewsData} />
      <QuestionsAnswers data={questionsanswersdata} />
      <AppStore />
    </Layout>
  )
}
