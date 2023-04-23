import Event, { Event as EventType } from '@components/pages/about/Event'
import { cx } from 'class-variance-authority'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Scrollbar, type Swiper as SwiperType } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/scrollbar'
import { getEvents } from '@utils/events'

const eventDateClasses = (isActive: boolean = false) =>
  cx(
    isActive ? 'timeline__event-date--active' : '',
    'timeline__event-date',
    'theme-font--heading',
    'whitespace-nowrap',
    'tracking-wide',
    'font-text--md',
  )

const swiperClasses = cx(
  'w-full sm:hidden',
  'timeline__swiper',
  'text-center',
  'mt-6',
)

const datesContainerClasses = cx(
  'timeline__dates-container',
  'py-8 pr-12 lg:pr-10 xl:pr-12 lg:pl-8',
  'flex-col sm:flex',
  'hidden',
)

const Timeline = () => {
  const events: EventType[] = getEvents()

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
        swiper?.update() // For some reason must be updated twice the 1st time
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
      className={cx(
        eventDateClasses(idx === currentEventIdx),
        'peer peer-first-of-type:mt-6',
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
        className={cx(eventDateClasses(idx === currentEventIdx), 'select-none')}
        onClick={() => handleEventChange(idx)}
        type="button"
      >
        {event.eventDate}
      </button>
    </SwiperSlide>
  ))

  const renderCurrentEvent = (
    <AnimatePresence mode="wait">
      <Event
        className="pt-8 sm:pl-12 lg:pl-10 xl:pl-12"
        key={currentEventIdx}
        {...events[currentEventIdx]}
      />
    </AnimatePresence>
  )

  return (
    <>
      <Swiper
        scrollbar={{ horizontalClass: 'timeline__swiper-scrollbar' }}
        className={swiperClasses}
        modules={[Scrollbar]}
        onSwiper={setSwiper}
        slidesPerView={3}
        roundLengths
        grabCursor
      >
        {renderSwiperDates}
      </Swiper>

      <div className="flex xl:pl-8 2xl:pl-12">
        <div className={datesContainerClasses}>
          <span id="timeline__scroller" style={activeEventStyle} />
          {renderDates}
        </div>

        {renderCurrentEvent}
      </div>
    </>
  )
}

export default Timeline
