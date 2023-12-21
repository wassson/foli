import AnnouncementGray from '@/components/announcement/AnnouncementGray'
import AvatarCircle from '@/components/avatar/AvatarCircle'
import AvatarRounded from '@/components/avatar/AvatarRounded'
import AvatarSquare from '@/components/avatar/AvatarSquare'
import ButtonArrow from '@/components/button/ButtonArrow'
import ButtonGray from '@/components/button/ButtonGray'
import CardDark from '@/components/card/CardDark'
import CardWhite from '@/components/card/CardWhite'
import NavLogo from '@/components/NavLogo'
import SystemAppearanceToggle from '@/components/SystemAppearanceToggle'

export default function Home() {
  return (
    <main className='min-w-screen min-h-screen dark:bg-neutral-950'>
      <nav className='flex justify-between pl-1.5 pr-2.5 py-1.5'>
        <div className="flex items-center gap-x-1">
          <NavLogo />
          {/* <h4>foli</h4> */}
        </div>
        <div className='flex items-center gap-x-3'>
          <SystemAppearanceToggle />
        </div>
      </nav>
      <section className="mt-24">
        <div className="flex justify-center mb-3">
          <AnnouncementGray />
        </div>
        <div className="flex justify-center mb-12">
          <h1 className='w-1/2 text-center text-5xl font-semibold'>Free, beautiful, monocromatic tailwind components</h1>
        </div>
        <div className="flex items-center justify-center gap-x-3 mb-3">
          <ButtonArrow />
          <ButtonGray />
        </div>
        <div className="flex items-center justify-center gap-x-3 mb-3">
          <AvatarCircle />
          <AvatarRounded />
          <AvatarSquare />
        </div>
        <div className="flex items-center justify-center gap-x-3 mb-3">
          <CardWhite />
        </div>
        <div className="flex items-center justify-center gap-x-3 mb-3">
          <CardDark />
        </div>
      </section>
    </main>
  )
}
