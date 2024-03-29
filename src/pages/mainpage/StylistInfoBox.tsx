import exampleStylistProfile from '@assets/images/exampleStylistProfile.png';
import {StylistInfo} from '@/models/UserInfo.ts';

type StylistInfoBoxProps = {
  info: StylistInfo,
}
const StylistInfoBox = ({info}: StylistInfoBoxProps) => {
  // eslint-disable-next-line max-len
  return <div className='h-[208px] rounded-lg flex flex-col w-[140px] flex-shrink-0 shadow cursor-pointer'
    onClick={() => {
      window.location.href = '/stylist-info/4';
    }}>
    <img className='w-[140px] h-[140px] flex-shrink-0 rounded-t-lg'
      src={info.profileImage ?? exampleStylistProfile} />
    <div className='w-full h-[68px] flex flex-col pt-[8px] px-[8px]'>

      <p className='text-[12px] font-semibold'>{info.stageName}</p>
      <p className='text-[12px] text-dark_grey'>{info.oneLineIntroduction}</p>
    </div>
  </div>;
};
export default StylistInfoBox;
