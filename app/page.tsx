import { Preview } from '../src/components/Preview/Preview'
import { Banner } from '../src/components/Banner/Banner'
import { Working } from '../src/components/Working/Working'
import { Content } from '../src/components/Content/Content'
import { WhyChooseUs } from '../src/components/WhyChooseUs/WhyChooseUs'
import { YTVideo } from '../src/components/YTVideo/YTVideo'

import { instruction } from "../src/components/instruction"
import { tabsContent } from '../src/components/tabsContent'
import { tabsNames } from '../src/components/tabsNames'
import { article } from '../src/components/article'


export default function Home() {

  return (
    <>
      <Preview />
      {/* <Banner /> */}
      {<Working howItWorkObj={instruction} />}
      {<Content cardObj={tabsContent} tabNameObj={tabsNames} />}
      {<WhyChooseUs articleObj={article} />}
      {<YTVideo />}
    </>
  )
}
