import DiscoLink from '@atoms/DiscoLink'
import { Project } from 'types'
import { clsx } from 'clsx'
import Image from 'next/image'
import Tag from '@components/pages/portfolio/Tag'

interface Props {
  project: Omit<Project, 'code'>
}

const ProjectCard = ({ project }: Props) => {
  const { frontmatter, slug } = project
  const { title, excerpt } = frontmatter

  const renderTags = frontmatter.tags ? (
    <ul className={clsx('mt-5 flex lg:mt-3')}>
      {frontmatter.tags.map((tag, idx) => (
        <li className={clsx('peer peer-first:ml-2.5')} key={idx}>
          <Tag className="px-[18px] py-[7px] tracking-wide">{tag}</Tag>
        </li>
      ))}
    </ul>
  ) : null

  return (
    <div
      className={clsx(
        'grid items-center justify-center lg:grid-cols-2 lg:gap-16 xl:gap-32',
        'peer peer-first:mt-24 peer-first:lg:mt-40',
        'sm:px-12 lg:px-0',
        'project-card',
      )}
    >
      <div
        className={clsx(
          'relative flex items-center justify-center',
          'lg:px-0 xl:px-12',
          'project-card__image',
        )}
      >
        <Image
          src={
            'https://picsum.photos/600/4' +
            Math.floor(Math.random() * (90 - 10) + 10)
          }
          alt="Placeholder"
          objectFit="cover"
          height={320}
          width={500}
        />
        <span
          className={clsx(
            'bottom-0 w-full rounded rounded-t-none px-5 py-3',
            'theme-font--heading font-text--xl font-semibold leading-7',
            'tracking-wide text-white',
            'absolute lg:hidden',
            'overflow-hidden',
            'project-card__mobile-title',
          )}
        >
          {title}
        </span>
      </div>
      <div
        className={clsx(
          'flex flex-col items-start',
          'overflow-hidden',
          'project-card__content',
        )}
      >
        <h3
          className={clsx(
            'theme-font--heading font-text--xl font-semibold',
            'tracking-wide text-white',
            'hidden lg:block',
          )}
        >
          {title}
        </h3>
        {renderTags}
        <p
          dangerouslySetInnerHTML={{ __html: excerpt }}
          className={clsx(
            'theme-font--reading font-medium leading-relaxed',
            'mt-3 max-w-[480px]',
          )}
        />
        <DiscoLink
          className={clsx('mt-4 px-6 py-3.5')}
          href={`portfolio/${slug}`}
          scroll={false}
        >
          Read More
        </DiscoLink>
      </div>
    </div>
  )
}

export default ProjectCard