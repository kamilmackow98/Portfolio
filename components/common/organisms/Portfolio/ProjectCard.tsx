import DiscoLink from '@atoms/DiscoLink'
import { Project } from 'types'
import styles from './ProjectCard.module.css'
import { clsx } from 'clsx'
import Image from 'next/image'
import Tag from '@atoms/Tag/Tag'

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
        styles.container,
        'grid items-center justify-center lg:grid-cols-2 lg:gap-16 xl:gap-32',
        'peer peer-first:mt-24 peer-first:lg:mt-40',
        'sm:px-12 lg:px-0',
      )}
    >
      <div
        className={clsx(
          styles['image-wrapper'],
          'relative flex items-center justify-center',
          'lg:px-0 xl:px-12',
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
            styles['mobile-title'],
            'bottom-0 w-full rounded rounded-t-none px-5 py-3',
            'theme-font--heading font-text--xl font-semibold leading-7',
            'tracking-wide text-white',
            'absolute lg:hidden',
            'overflow-hidden',
          )}
        >
          {title}
        </span>
      </div>
      <div
        className={clsx(
          styles.content,
          'flex flex-col items-start',
          'overflow-hidden',
        )}
      >
        <h3
          className={clsx(
            styles.title,
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
