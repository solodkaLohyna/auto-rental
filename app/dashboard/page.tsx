import { Banner } from '@/src/components/Banner/Banner'

import { Preview } from '@/src/components/Preview/Preview'
import { Working } from '@/src/components/Working/Working'
import { Content } from '@/src/components/Content/Content'
import { WhyChooseUs } from '@/src/components/WhyChooseUs/WhyChooseUs'
import { YTVideo } from '@/src/components/YTVideo/YTVideo'
import { GeneralInformation } from '@/src/components/GeneralInformation/GeneralInformation'
import { Footer } from '@/src/components/Footer/Footer'

import { instruction } from "@/src/components/instruction"
import { tabsContent } from '@/src/components/tabsContent'
import { tabsNames } from '@/src/components/tabsNames'
import { article } from '@/src/components/article'


export const Page = () => {
  return (
    <>
      <Preview />
      {/* <Banner /> */}
      <Working howItWorkObj={instruction} />
      <Content cardObj={tabsContent} tabNameObj={tabsNames} />
      <WhyChooseUs articleObj={article} />
      <YTVideo />
      <Footer />
    </>
  )
}