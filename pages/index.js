import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='justify-center content-center gap-4 align-items-center my-20 p-12 shadow-lg max-w mx-auto'>
        <div className="grid grid-cols-2">
          <div>
            <h3>Welcome back ✋</h3>
            <div>
              <h4>Please enter your details</h4>
              <button>Login with Apple</button>
            </div>

            <hr />

            <div className='pt-2'>
              <div className='mb-2'>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>
              
              <div className='mb-2'>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Second name</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>
            </div>

            <div className='flex justify-between items-center m-5'>
              <div>
                <input type='checkbox'/> Remember for 30 days
              </div>
              <span className='gap-2'>Forgot password?</span>
            </div>
          </div>
          <Image src='/Fitness_Isometric.svg'
          height={900}
          width={900}
          alt='Your name'
          />
        </div>
      </main>
    </div>
  )
}
