const CardWhite = () => {
  return (
    <div className="items-center gap-x-2 w-72 text-black text-sm bg-white rounded-lg shadow-xl cursor-pointer">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center gap-x-1.5">
          <img src="https://github.com/wassson.png" className='w-5 h-5 rounded-full' />
          <p className='text-sm font-medium'>Austin Wasson</p>
        </div>
        <div className="flex items-center gap-x-1.5 text-neutral-400">
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 12C4.75 7.99594 7.99594 4.75 12 4.75V4.75C16.0041 4.75 19.25 7.99594 19.25 12V12C19.25 16.0041 16.0041 19.25 12 19.25V19.25C7.99594 19.25 4.75 16.0041 4.75 12V12Z"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 12.75L10.1837 13.6744C10.5275 14.407 11.5536 14.4492 11.9564 13.7473L14.25 9.75"></path>
          </svg>
        </div>
      </div>
      <div className="mb-1.5 px-2">
        <p className='text-neutral-700'>Est in in ut est proident. Incididunt fugiat ea enim eu cupidatat fugiat.</p>
      </div>
      <div className="px-2 pb-1.5">
        <div className="flex justify-end gap-x-1.5">
          <div className="flex items-center justify-center p-1 text-white rotate-90 bg-black rounded">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.75 19.25L12 4.75L19.25 19.25L12 15.75L4.75 19.25Z"></path>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 15.5V12.75"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardWhite
