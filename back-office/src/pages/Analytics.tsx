import { Heading, Flex } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'

import { Layout, Widget, TotalRevenue, Charts, Table } from '../components'

const customerList = [
  {
    id: 1,
    name: 'Brittan Rois',
    email: 'brois0@unicef.org',
    location: 'Bator',
    phone: '+62 745 807 7685',
    total_spend: '$557248.44',
    total_orders: 24011
  },
  {
    id: 2,
    name: 'Matthew Junifer',
    email: 'mjunifer1@buzzfeed.com',
    location: 'Bromma',
    phone: '+46 993 722 3008',
    total_spend: '$599864.94',
    total_orders: 60195
  },
  {
    id: 3,
    name: 'Finlay Baylay',
    email: 'fbaylay2@purevolume.com',
    location: 'Atalaia',
    phone: '+55 232 355 3569',
    total_spend: '$171337.47',
    total_orders: 96328
  },
  {
    id: 4,
    name: 'Beryle Monelli',
    email: 'bmonelli3@amazonaws.com',
    location: 'Martingança',
    phone: '+351 734 876 8127',
    total_spend: '$335862.78',
    total_orders: 78768
  },
  {
    id: 5,
    name: 'Ilario Shoppee',
    email: 'ishoppee4@webmd.com',
    location: 'Lincoln',
    phone: '+54 410 442 6083',
    total_spend: '$719845.14',
    total_orders: 26045
  },
  {
    id: 6,
    name: 'Guglielma Haking',
    email: 'ghaking5@icio.us',
    location: 'Sangzhou',
    phone: '+86 722 902 9706',
    total_spend: '$621446.73',
    total_orders: 90771
  },
  {
    id: 7,
    name: 'Celle Acum',
    email: 'cacum6@scribd.com',
    location: 'Huzhen',
    phone: '+86 805 547 3640',
    total_spend: '$640651.30',
    total_orders: 97842
  },
  {
    id: 8,
    name: 'Ailey Haig',
    email: 'ahaig7@live.com',
    location: 'Gizel’',
    phone: '+7 623 158 0485',
    total_spend: '$473255.45',
    total_orders: 85298
  },
  {
    id: 9,
    name: 'Ebonee Robardet',
    email: 'erobardet8@google.co.jp',
    location: 'Uyugan',
    phone: '+63 406 595 5538',
    total_spend: '$513918.18',
    total_orders: 38959
  },
  {
    id: 10,
    name: 'Nancy Hallatt',
    email: 'nhallatt9@tamu.edu',
    location: 'Liuhao',
    phone: '+86 194 283 7223',
    total_spend: '$862509.17',
    total_orders: 48049
  },
  {
    id: 11,
    name: 'Savina Gardener',
    email: 'sgardenera@mozilla.com',
    location: 'Bosanski Brod',
    phone: '+387 494 626 9847',
    total_spend: '$385914.28',
    total_orders: 24961
  },
  {
    id: 12,
    name: 'Walliw Berard',
    email: 'wberardb@state.tx.us',
    location: 'Athy',
    phone: '+353 884 996 4703',
    total_spend: '$33957.23',
    total_orders: 24986
  },
  {
    id: 13,
    name: 'Bernita Moniker',
    email: 'bmonikerc@g.co',
    location: 'Conceição da Abóboda',
    phone: '+351 122 281 8005',
    total_spend: '$165782.42',
    total_orders: 38671
  },
  {
    id: 14,
    name: 'Devlen MacGibbon',
    email: 'dmacgibbond@mashable.com',
    location: 'Manjakandriana',
    phone: '+261 550 422 8564',
    total_spend: '$733558.04',
    total_orders: 5702
  },
  {
    id: 15,
    name: "Terri O'Nion",
    email: 'tonione@msn.com',
    location: 'Hadžići',
    phone: '+387 213 246 0301',
    total_spend: '$327313.11',
    total_orders: 7145
  },
  {
    id: 16,
    name: 'Anselm Cavilla',
    email: 'acavillaf@live.com',
    location: 'Redcliff',
    phone: '+263 941 369 6625',
    total_spend: '$533334.93',
    total_orders: 33108
  },
  {
    id: 17,
    name: 'Frances Wyndham',
    email: 'fwyndhamg@nbcnews.com',
    location: 'Hekou',
    phone: '+86 922 171 8017',
    total_spend: '$799425.62',
    total_orders: 85286
  },
  {
    id: 18,
    name: 'Bennett Skermer',
    email: 'bskermerh@reverbnation.com',
    location: 'Sinop',
    phone: '+55 598 223 7882',
    total_spend: '$251319.17',
    total_orders: 45914
  },
  {
    id: 19,
    name: 'Valentine Lambertazzi',
    email: 'vlambertazzii@eepurl.com',
    location: 'Kolodenka',
    phone: '+380 633 380 2502',
    total_spend: '$640365.13',
    total_orders: 83235
  },
  {
    id: 20,
    name: 'Tremayne Tolchar',
    email: 'ttolcharj@auda.org.au',
    location: 'Guofu',
    phone: '+86 445 679 1332',
    total_spend: '$917855.01',
    total_orders: 51836
  }
]
const customerTableHead = ['', 'name', 'email', 'phone', 'total orders', 'total spend', 'location']

const renderHead = (item: any, index: any) => <th key={index}>{item}</th>

const renderBody = (item: any, index: any) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.total_orders}</td>
    <td>{item.total_spend}</td>
    <td>{item.location}</td>
  </tr>
)

// chart options
const chartOptions = {
  options: {
    color: ['#6ab04c', '#2980b9'],
    chart: {
      height: 350,
      zoom: {
        enabled: true
      }
    }
  },
  series: [
    {
      name: 'All Tasks',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'My Tasks',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ]
}
export default function Analytics() {
  const data = [
    {
      name: 'name...',
      description: 'description...',
      revenue: 1000
    },
    {
      name: 'name...',
      description: 'description...',
      revenue: 1000
    },
    {
      name: 'name...',
      description: 'description...',
      revenue: 1000
    }
  ]
  return (
    <Layout isHeaderVisible>
      <Heading as="h2" fontSize="24px">
        Analytics
      </Heading>
      <Flex flexWrap="wrap" justifyContent={'space-between'}>
        {data?.map((el: any) => (
          <Widget data={el} />
        ))}

        <TotalRevenue />
        <Charts type={'line'} options={chartOptions} />
        <Charts type={'bar'} options={chartOptions} />
        <Charts type={'area'} options={chartOptions} />
      </Flex>

      {/* <Table
        limit="10"
        headData={customerTableHead}
        renderHead={(item: any, index: any) => renderHead(item, index)}
        bodyData={customerList}
        renderBody={(item: any, index: any) => renderBody(item, index)}
      /> */}
    </Layout>
  )
}
