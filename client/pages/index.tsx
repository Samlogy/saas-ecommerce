import {
  About,
  AppStore,
  BackTop,
  Hero,
  Layout,
  ProductSection,
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
      name: 'Automatic Watch',
      images: [heroImage.src, productImage.src, heroImage.src, productImage.src],
      quantity: 1,
      price: 350,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
      delivery: '2-3 business days',
      reviews: 34,
      rate: 4
    },
    {
      id: 2,
      name: 'Automatic Watch',
      images: [heroImage.src, productImage.src, heroImage.src, productImage.src],
      quantity: 1,
      price: 350,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
      delivery: '2-3 business days',
      reviews: 34,
      rate: 4
    },
    {
      id: 3,
      name: 'Automatic Watch',
      images: [heroImage.src, productImage.src, heroImage.src, productImage.src],
      quantity: 1,
      price: 350,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
      delivery: '2-3 business days',
      reviews: 34,
      rate: 4
    },
    {
      id: 4,
      name: 'Automatic Watch',
      images: [heroImage.src, productImage.src, heroImage.src, productImage.src],
      quantity: 1,
      price: 350,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
      delivery: '2-3 business days',
      reviews: 34,
      rate: 4
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
  const promotionData = {
    text: 'With our app you can view the route of your order, from our local headquarters to the place where you are. Look for the app now!',
    title: 'Deal of The Day',
    image: heroImage.src,
    dueDate: '2023-06-07T14:00'
  }

  return (
    <Layout isHeaderVisible isFooterVisible>
      <BackTop />

      <Hero />
      <About data={aboutData} />
      <Services data={servicesData} />
      <ProductSection title={'Check out our products'} data={productsData} />
      <Promotion data={promotionData} />
      <ProductSection title={'Deal Of the Day'} data={productsData} />
      <Testimonials data={reviewsData} />
      <QuestionsAnswers data={questionsanswersdata} />
      <AppStore />
    </Layout>
  )
}
