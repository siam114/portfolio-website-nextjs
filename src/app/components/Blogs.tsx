"use client"
import { blogs } from '@/content/blog'
import Link from 'next/link'
import React from 'react'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/utils/animation';

const Blogs = () => {
  return (
    <section className='py-10 container mx-auto max-w-7xl px-4'>
        <motion.h2 {...fadeInUp} className="text-3xl font-bold text-center mb-10">
        Latest Blog Posts
      </motion.h2>

      <motion.div  variants={staggerContainer}
          initial="initial"
          animate="animate" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
        {
            blogs.map((blog) => (
                <article key={blog.slug} className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6'>
                    <Link href={`/blog/${blog.slug}`}>
                      <motion.h3 whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }} className='text-xl mb-2 font-semibold hover:text-primary transition-colors'>{blog.title}</motion.h3>
                    </Link>
                    <motion.p  initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }} className='text-gray-600 dark:text-gray-300 mb-4'>{blog.excerpt}</motion.p>
                    <motion.div  initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }} className='flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4'>
                        <motion.span  whileHover={{ scale: 1.05 }} className='flex items-center'>
                            <FaCalendarAlt className='mr-2'/>
                            {new Date(blog.date).toLocaleDateString()}
                        </motion.span>
                        <motion.span  whileHover={{ scale: 1.05 }} className='flex items-center'>
                            <FaClock className='mr-2'/>
                            {blog.readTime}
                        </motion.span>
                    </motion.div>
                </article>
            ))
        }
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }} className='text-center mt-12'>
        <Link href="/blogs" className='inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors '>View All Posts</Link>
      </motion.div>
    </section>
  )
}

export default Blogs
