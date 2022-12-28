import Event, { Event as EventType } from '@components/pages/about/Event'
import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Scrollbar, type Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/scrollbar'

interface Props {
  events: EventType[]
}

const eventDateStyle = (isActive: boolean = false) => {
  return [
    isActive && 'timeline__dates-container__event-date--active',
    'timeline__dates-container__event-date',
    'theme-font--heading',
    'whitespace-nowrap',
    'tracking-wide',
    'font-text--md',
  ]
}

const Timeline = (props: Props) => {
  const { events } = props

  const [scrollerTopDistance, setScrollerTopDistance] = useState<number>(0)
  const [currentEventIdx, setCurrentEventIdx] = useState<number>(0)
  const [swiper, setSwiper] = useState<SwiperType>()

  const activeEventStyle = {
    transform: `translate3d(0, ${scrollerTopDistance}rem, 0)`,
  }

  const handleEventChange = (idx: number) => {
    setScrollerTopDistance(idx * 2.9)
    setCurrentEventIdx(idx)

    if (swiper) {
      if (idx === 0 || idx === 1) {
        swiper.slideTo(0)
      } else if (idx === 2) {
        swiper.slideTo(1)
      } else {
        swiper.slideTo(2)
      }
    }
  }

  useEffect(() => {
    let isUpdated = false

    function updateSwiperOnResize() {
      if (!isUpdated && document.body.clientWidth < 640) {
        swiper?.scrollbar.updateSize()
        swiper?.update()
        isUpdated = true
      } else if (isUpdated && document.body.clientWidth >= 640) {
        isUpdated = false
      }
    }

    window.addEventListener('resize', updateSwiperOnResize, true)

    return () =>
      window.removeEventListener('resize', updateSwiperOnResize, true)
  }, [swiper])

  const renderDates = events.map((event, idx) => (
    <button
      onClick={() => handleEventChange(idx)}
      className={clsx(
        eventDateStyle(idx === currentEventIdx),
        'peer peer-first:mt-6',
        'text-right',
      )}
      key={event.id}
      type="button"
    >
      {event.eventDate}
    </button>
  ))

  const renderSwiperDates = events.map((event, idx) => (
    <SwiperSlide className="pb-4" key={idx}>
      <button
        className={clsx(eventDateStyle(idx === currentEventIdx), 'select-none')}
        onClick={() => handleEventChange(idx)}
        type="button"
      >
        {event.eventDate}
      </button>
    </SwiperSlide>
  ))

  const renderCurrentEvent = (
    <AnimatePresence mode="wait">
      <Event key={currentEventIdx} {...events[currentEventIdx]} />
    </AnimatePresence>
  )

  return (
    <>
      <Swiper
        className={clsx('text-center', 'w-full sm:hidden', 'timeline__swiper')}
        scrollbar={{
          horizontalClass: 'timeline__swiper-scrollbar',
        }}
        modules={[Scrollbar]}
        onSwiper={setSwiper}
        slidesPerView={3}
        roundLengths
        grabCursor
      >
        {renderSwiperDates}
      </Swiper>

      <div className={clsx('flex', 'xl:pl-8 2xl:pl-12')}>
        <div
          className={clsx(
            'timeline__dates-container',
            'py-8 pr-12 lg:pl-8',
            'flex-col sm:flex',
            'hidden',
          )}
        >
          {renderDates}
          <span id="scroller" style={activeEventStyle} />
        </div>
        <div className="sm:pl-12">{renderCurrentEvent}</div>
      </div>
    </>
  )
}

export default Timeline
