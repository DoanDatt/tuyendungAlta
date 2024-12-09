import group from '~/assets/Group.png'
import SquareIcon from '~/assets/squareIcon.png'
import feathers from '~/assets/Group (1).png'
import CircleIcon from '~/assets/Group (2).png'
import UnigonsIcon from '~/assets/Layer_1.png'
import NoteIcon from '~/assets/NoteIcon.png'

export default function Header() {
  return (
    <div className='py-[20px] flex items-center justify-between mx-32'>
      <div className='flex items-center justify-start gap-5 '>
        <img src={SquareIcon} alt='' className='w-[52.01px] h-[52px]' />
        <img src={group} alt='' className='w-[90.79px] h-[52px] ' />
        <img src={feathers} alt='' className='w-[64.75px] h-[52px]' />
        <img src={CircleIcon} alt='' className='w-[42.63px] h-[52px]' />
        <img src={UnigonsIcon} alt='' className='w-[51.06px] h-[52px]' />
      </div>
      <div className='flex'>
        <div className='flex items-center justify-center text-[#F26D21] font-bold mr-5  cursor-pointer'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6 mr-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
            />
          </svg>
          <span>Xem JD yêu cầu tuyển dụng</span>
        </div>
        <div className='flex items-center justify-center font-bold cursor-pointer'>
          <img src={NoteIcon} alt='' className='w-[19.15px] h-[21px] mr-2' />
          <span>Đăng ký trực tuyến</span>
        </div>
      </div>
    </div>
  )
}
