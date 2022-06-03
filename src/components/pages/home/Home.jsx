import FeatureInfo from '../../featuredInfo/FeatureInfo';
import'./Home.css';
import { userData } from '../../../dumyData';
import Chart from '../../chart/Chart';
import WidegetLg from '../../widegetLg/WidegetLg';
import WidgetSm from '../../widegetSm/WidegetSm';
export default function Home() {
  return (
    <div className="home">
      <FeatureInfo/>
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidegetLg/>
        </div>
    </div>

  )
}

