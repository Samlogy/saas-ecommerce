const chartConfig = {
  chart: {
    height: 350,
    width: 450,
    fontFamily: 'Poppins, sans-serif',
    zoom: { enabled: true }
  },
  theme: {
    monochrome: { enabled: false },
    shadeIntensity: 0.5
  }
}

const series: any = [] // get it from api
const COLORS: string[] = [
  '#30AADD',
  '#77D970',
  '#37E2D5',
  '#590696',
  '#C70A80',
  '#FBCB0A',
  '#00FFAB',
  '#FF4949',
  '#FF8D29',
  '#4700D8',
  '#F806CC'
]
export default function useChart(type: string) {
  let chartOptions: any
  const generatePieChartOptions = (data: any, colors: string[]) => {
    const obj = {
      options: {
        chart: {
          ...chartConfig.chart
        }
      },
      theme: {
        ...chartConfig.theme
      },
      series: [40, 70, 20, 90, 36, 80],
      labels: ['Apple', 'Mango', 'Orange', 'Watermelon', 'kiwi', 'strawgerry']
    }
    return obj
  }
  const generateLineChartOptions = (data: any, colors: string[]) => {
    const obj = {
      options: {
        chart: {
          stacked: type === 'stacked' ? true : false,
          ...chartConfig.chart
        }
      },
      theme: {
        ...chartConfig.theme
      },
      series: [
        {
          name: 'PRODUCT A',
          data: [44, 55, 41, 67, 22, 43, 21, 49]
        },
        {
          name: 'PRODUCT B',
          data: [13, 23, 20, 8, 13, 27, 33, 12]
        },
        {
          name: 'PRODUCT C',
          data: [11, 17, 15, 15, 21, 14, 15, 13]
        }
      ]
    }
    return obj
  }

  if (type === 'line' || type === 'stacked') {
    chartOptions = generateLineChartOptions(series, COLORS)
  }
  if (type === 'pie') {
    chartOptions = generatePieChartOptions(series, COLORS)
  }

  return chartOptions
}
