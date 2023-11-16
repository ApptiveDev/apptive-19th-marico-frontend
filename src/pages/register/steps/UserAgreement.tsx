import {useEffect, useRef, useState} from 'react';
import Checkbox from '@components/input/Checkbox.tsx';

const UserAgreement = () => {
  const strokeRef = useRef<SVGPathElement>(null);

  const [agreedAll, setAgreedAll] = useState(false);
  const [tosAgreed, setTosAgreed] = useState(false);
  const [prvPolicyAgreed, setPrvPolicyAgreed] = useState(false);

  useEffect(() => {
    setPrvPolicyAgreed(agreedAll);
    setTosAgreed(agreedAll);
  }, [agreedAll]);

  useEffect(() => {
    if (!prvPolicyAgreed || !tosAgreed) {
      setAgreedAll(false);
    } else if (prvPolicyAgreed && tosAgreed) {
      setAgreedAll(true);
    }
  }, [prvPolicyAgreed, tosAgreed]);

  let agreeAllClass = 'flex items-center rounded-md' +
    ' w-full h-[48px] font-semibold cursor-pointer select-none ';
  agreeAllClass += agreedAll ? 'text-white bg-primary' : 'text-black bg-light_grey';
  return (<>
    <div className='p-6'>
      <p className='text-[24px] font-semibold'>마리코 서비스 이용약관에</p>
      <p className='text-[24px] font-semibold'>동의해 주세요.</p>
    </div>
    <div className='mt-[40px] h-[256px] w-full flex flex-col items-center'>
      <div className={agreeAllClass}
        onClick={() => {
          setAgreedAll(!agreedAll);
        }}
      >
        <div className='flex ml-[16px] mr-[12px] items-center
        justify-center h-[24px] w-[24px]'>
          <svg width='14' height='10' viewBox='0 0 14 10' fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M12.3327 1L4.99935 8.33333L1.66602 5' stroke={agreedAll ? 'white' : 'black'}
              strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'
              ref={strokeRef} />
          </svg>
        </div>
        <p className='text-[16px]'>전체 약관 동의합니다</p>
      </div>
      <div className='flex w-full items-center flex-col mt-[8px]'>
        <div className='w-full h-[40px] pl-[16px] flex items-center'>
          <Checkbox initialState={tosAgreed} onChange={(checked) => {
            setTosAgreed(checked);
          }} />
          <div className='border border-primary text-primary
          text-[12px] w-[33px] rounded-full flex justify-center items-center ml-[8px]'>
            필수
          </div>
        </div>
        <div className='w-full h-[40px] pl-[16px] flex items-center'>
          <Checkbox initialState={prvPolicyAgreed} onChange={(checked) => {
            setPrvPolicyAgreed(checked);
          }} />
          <div className='border border-primary text-primary
          text-[12px] w-[33px] rounded-full flex justify-center items-center ml-[8px]'>
            필수
          </div>
        </div>
      </div>
    </div>
  </>);
};
export default UserAgreement;