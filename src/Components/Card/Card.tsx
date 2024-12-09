import AltaIcon from '~/assets/Group (2).png'
import DownLoadIcon from '~/assets/DownloadIcon.png'
export default function Card() {
  return (
    <div className='col-span-1 bg-white rounded-2xl'>
      <div className='py-2 px-2 flex items-center justify-between'>
        <div className='flex items-center'>
          {' '}
          <img src={AltaIcon} alt='' width={'32px'} height={'35px'} />
          <div className='text-black ml-3'>
            <p className='font-bold'> Thiết kế UX/UI (figma)</p>
            <p className='text-gray-400'>Alta Software</p>
          </div>
        </div>
        <div>
          <img src={DownLoadIcon} alt='' className='w-[36px] h-[36px]' />
        </div>
      </div>
      <div className='px-2 text-black mb-4'>
        Yêu cầu tối thiểu 1 năm kinh <br /> nghiệm ReactJS, Typescript
      </div>
      <hr className='border-t-2 border-dashed border-gray-400 py-3' />

      <div className='flex items-center justify-center pb-4'>
        <div className='flex items-center text-gray-500'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
            />
          </svg>
          <p className='ml-1'>tuyendung@alta.com</p>
        </div>
        <div className='border-r-[1px] border-r-gray-400 h-6 mx-4 ' />
        <div className='flex items-center text-gray-500'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
            />
          </svg>
          <p className='ml-2'>0282 240 9960</p>
        </div>
      </div>
    </div>
  )
}
