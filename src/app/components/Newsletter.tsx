import React from 'react'

const Newsletter = () => {
  return (
    <section className="py-10 bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden animate-slide-up">
      <div className='p-8 md:p-12'>
        <div className='max-w-7xl mx-auto'>
            <div>
                <h3 className='text-2xl mb-4 font-bold'>Subscribe to My Newsletter</h3>
                <p className='text-gray-600 dark:text-gray-300 md:w-2/3'>Get the latest updates on my projects and tech insights deliverd straight to your inbox</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
