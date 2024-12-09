import { CaretDownOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Space } from 'antd'

import type { PaginationProps } from 'antd'
import { Pagination } from 'antd'
import Card from '../Card'

export default function MainPage() {
  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
    console.log(current, pageSize)
  }
  const items: MenuProps['items'] = [
    {
      label: <a href='https://www.antgroup.com'>Lập trình Front End</a>,
      key: '0'
    },
    {
      label: <a href='https://www.aliyun.com'>Lập Trình Back End</a>,
      key: '1'
    },
    {
      label: <a href='https://www.aliyun.com'>VFX Artist</a>,
      key: '2'
    },
    {
      label: <a href='https://www.aliyun.com'>UI/UX Design</a>,
      key: '3'
    }
  ]
  return (
    <div className=' bg-gray-100 max-w-full'>
      <div className='flex items-center justify-center py-5 px-2 mx-[150px]'>
        <div className='flex items-center bg-white rounded-lg py-1 px-2 w-[1290px] mx-8 '>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6 text-[#F26D21] mr-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
          <input type='text' name='' placeholder='Nhập vị trí muốn ứng tuyển' className='w-[378px] outline-none' />
          <div className='border-r-[1px] border-r-gray-300 h-4' />

          {/**mid */}
          <div className='flex items-center w-[379px] ml-5'>
            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Chọn lĩnh vực chuyên môn
                  <CaretDownOutlined className='text-[#F26D21] ml-24' />
                </Space>
              </a>
            </Dropdown>
          </div>

          <div className='flex items-center w-[379px] ml-5'>
            <Dropdown menu={{ items }} trigger={['click']}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Chọn Công Ty
                  <CaretDownOutlined className='text-[#F26D21] ml-24' />
                </Space>
              </a>
            </Dropdown>
          </div>

          <button className='bg-[#F26D21] flex items-center justify-center w-[143px] h-[48px] text-white font-bold rounded gap-2 '>
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
                d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
              />
            </svg>
            <span>Tìm Việc</span>
          </button>
        </div>
      </div>
      <div className='uppercase flex justify-center items-center py-10'>
        <p className='text-3xl font-bold'>
          Tìm <span className='text-[#F26D21]'>Công Việc Mơ Ước Của Bạn </span> <br />
          <p className='flex items-center justify-center'>Tại Ngôi Nhà Mới</p>
        </p>
      </div>

      {/**Card */}
      <div className='grid grid-cols-3 gap-4 mx-[70px] py-5'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className=' flex items-center justify-center py-4'>
        <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={3} total={500} />
      </div>
    </div>
  )
}
