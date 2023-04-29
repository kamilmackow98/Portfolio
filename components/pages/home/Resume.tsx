import { cx } from 'class-variance-authority'
import ResumeIcon from './ResumeIcon'

const wrapperClasses = cx('resume', 'inline-block', 'mt-10 xs:mt-20')

const Resume = () => {
  return (
    <div className={wrapperClasses}>
      <a
        href="/assets/pdf/Resume.pdf"
        rel="noopener noreferrer"
        className="resume__link"
        target="_blank"
      >
        <ResumeIcon />

        <div className="resume__content">
          <span className="text-sm font-bold">My resume</span>
          <span className="text-sm font-medium">Download</span>
        </div>
      </a>
    </div>
  )
}

export default Resume
