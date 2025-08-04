import { blogs } from '@/content/blog'
import Link from 'next/link'
import React from 'react'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'

const Blogs = () => {
  return (
    <section className='py-10 container mx-auto max-w-7xl px-4'>
        <h2 className="text-3xl font-bold text-center mb-10">
        Latest Blog Posts
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
        {
            blogs.map((blog) => (
                <article key={blog.slug} className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6'>
                    <Link href={`/blog/${blog.slug}`}>
                      <h3 className='text-xl mb-2 font-semibold hover:text-primary transition-colors'>{blog.title}</h3>
                    </Link>
                    <p className='text-gray-600 dark:text-gray-300 mb-4'>{blog.excerpt}</p>
                    <div className='flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4'>
                        <span className='flex items-center'>
                            <FaCalendarAlt className='mr-2'/>
                            {new Date(blog.date).toLocaleDateString()}
                        </span>
                        <span className='flex items-center'>
                            <FaClock className='mr-2'/>
                            {blog.readTime}
                        </span>
                    </div>
                </article>
            ))
        }
      </div>

      <div className='text-center mt-12'>
        <Link href="/blogs" className='inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors '>View All Posts</Link>
      </div>
    </section>
  )
}

export default Blogs
