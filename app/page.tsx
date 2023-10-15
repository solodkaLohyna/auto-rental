import {Preview} from '../src/components/Preview/Preview'
import {Banner} from '../src/components/Banner/Banner'
import {Working} from '../src/components/Working/Working'
import {instruction} from "../src/components/instruction"
import { tabsContent } from '../src/components/tabsContent'
import { tabsNames } from '../src/components/tabsNames'
import { Content } from '../src/components/Content/Content'

export default function Home() {
  
  return (
    <>
    <Preview />
    <Banner />
    {<Working howItWorkObj = {instruction}/>}
    {<Content cardObj = {tabsContent} tabNameObj = {tabsNames}/>}
    </>
  )
}
