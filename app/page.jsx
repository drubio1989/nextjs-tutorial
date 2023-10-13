'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import Feed from "@components/Feed";

const queryClient = new QueryClient()

function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
          Discover & Share
          <br className='max-md:hidden'/>
          <span className='orange_gradient'> AI-Powered Prompts</span>
        </h1>
        <p className='desc text-center'>
          Promptopia is on open-source AI prompting tool for modern world to discover, create, and share prompts
        </p>

        <Feed/>
      </section>
    </QueryClientProvider>
  )
}

export default Home;