import './featureInfo.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeatureInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className='featureTitle'>Revenue</span>
            <div className="featuredMoneyContainer">
                <span className='featuredMoney'>$2.415</span>
                <span className='featuredMoneyRate'>-11.4 <ArrowDownwardIcon  className='featuredIcon negative'/></span>

            </div>
            <span className='featuredSub'>
                Compared to last month

            </span>
        </div>
        <div className="featuredItem">
            <span className='featureTitle'>Sales</span>
            <div className="featuredMoneyContainer">
                <span className='featuredMoney'>$4.415</span>
                <span className='featuredMoneyRate'>-1.4 <ArrowDownwardIcon  className='featuredIcon negative'/></span>

            </div>
            <span className='featuredSub'>
                Compared to last month

            </span>
        </div>
        <div className="featuredItem">
            <span className='featureTitle'>Cost</span>
            <div className="featuredMoneyContainer">
                <span className='featuredMoney'>$2.225</span>
                <span className='featuredMoneyRate'>+11.4 <ArrowUpwardIcon className='featuredIcon positive'/></span>

            </div>
            <span className='featuredSub'>
                Compared to last month

            </span>
        </div>

    </div>
  )
}
