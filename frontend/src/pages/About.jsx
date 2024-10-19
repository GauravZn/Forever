import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>
      
        <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-16'>

          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />

          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore tenetur quis voluptate deleniti explicabo mollitia officiis quos molestiae corporis ullam nisi quisquam quo debitis odit ea optio nulla temporibus in nostrum dolor, aliquam animi minima nemo. Repellendus voluptatibus earum natus illum repellat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reiciendis amet, soluta suscipit ullam aperiam numquam autem qui quaerat, sunt deserunt asperiores minima dolorem optio nesciunt tenetur aspernatur corrupti sit? At voluptates dolorum, quis praesentium, omnis reprehenderit quidem quibusdam amet eveniet, deserunt possimus iste nam!</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse totam laudantium necessitatibus unde rem libero vitae neque architecto voluptas quos.</p>
          </div>
        </div>

        <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>

          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam porro facilis ipsum.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convinience:</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam porro facilis ipsum.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional customer service:</b>
            <p className='text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam porro facilis ipsum.</p>
          </div>
        </div>

        <NewsletterBox/>
    </div>
  )
}

export default About
