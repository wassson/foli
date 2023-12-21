const SystemAppearanceToggle = () => {
  return (
    <div>
      <div className="dark:hidden">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></circle>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2.75V4.25"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L16.0659 7.93416"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.25 12.0001L19.75 12.0001"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 17.2501L16.0659 16.066"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19.75V21.25"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.9341 16.0659L6.74996 17.25"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.25 12.0001L2.75 12.0001"></path>
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.93405 7.93423L6.74991 6.75003"></path>
          </svg>
      </div>
      <div className="hidden dark:flex">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.25 15.0314C17.7575 15.1436 17.2459 15.2027 16.7209 15.2027C12.8082 15.2027 9.63607 11.9185 9.63607 7.86709C9.63607 6.75253 9.87614 5.69603 10.3057 4.75C7.12795 5.47387 4.75 8.40659 4.75 11.9143C4.75 15.9657 7.9221 19.25 11.8348 19.25C14.6711 19.25 17.1182 17.5242 18.25 15.0314Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
    </div>
  )
}

export default SystemAppearanceToggle