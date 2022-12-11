import React from 'react'

const Test = () => {
  return (
  <div className='bg-gradient-to-b from-blue-400 to-blue-1800'>
    <div className="w-full flex flex-row flex-wrap bg-gradient-to-b from-blue-400 to-blue-1800'">
      <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className="w-full bg-indigo-100 h-screen flex flex-row flex-wrap justify-center ">
        <div className="w-full md:w-3/4 lg:w-2/4 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased">
          <div className="bg-white w-full shadow rounded-lg p-5">
            <textarea className="bg-gray-200 w-full rounded-lg shadow border p-2" rows="3" placeholder="Share your thoughts"></textarea>

            <div className="w-full flex flex-row flex-wrap mt-3">

              <div className="w-full">
                <button type="button" className="content-center	 bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg">Submit</button>
              </div>
            </div>
          </div>
          <div className="mt-3 flex flex-col">
            <div className="bg-white mt-3 rounded-lg">
              <div className="w-full text-left text-xl text-gray-700 font-bold font">
                <p className=" text-gray-900 dark:text-white">AUTHOR PLACEHOLDER</p>
              </div>
              <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
                POST PLACEHOLDER
              </div>
              <div className="bg-white w-full shadow rounded-lg p-5">

                <div className="w-full flex flex-row flex-wrap mt-0">
                  <form className='w-full bg-white'>
                    <label for="chat" className="sr-only">Your comment</label>
                    <div class="w-full flex items-center px-3 py-2 rounded-lg">
                      <textarea id="comment" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                      <button type="submit" className="inline-flex justify-center p-2 text-indigo-400 rounded-full cursor-pointer hover:bg-indigo-300 dark:text-blue-500 dark:hover:bg-gray-600">
                        <svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                        <span class="sr-only">Send message</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="border-4 border-gray rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
                <div className="w-full">
                  COMMENT PLACEHOLDER
                </div>
              </div>
            </div>
            <div className="bg-white mt-3">
              <img className="border rounded-t-lg shadow-lg " src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></img>
              <div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
                A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Test





{/* <form>
    <label for="chat" class="sr-only">Your message</label>
    <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
        <textarea id="comment" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
            <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
            <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
            <span class="sr-only">Send message</span>
        </button>
    </div>
</form>  */}

