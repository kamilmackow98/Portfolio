import DiscoLink from '@atoms/DiscoLink'
import Tag from '@components/pages/portfolio/Tag'
import { styled } from '@stitches/react'
import { cx } from 'class-variance-authority'
import Image from 'next/legacy/image'
import { ComponentPropsWithoutRef } from 'react'
import { Project } from 'types'

interface Props extends ComponentPropsWithoutRef<'div'> {
  project: Omit<Project, 'code'>
}

const containerStyles = (classes: string = '') =>
  cx(
    'lg:[&>.group]:even:mr-16 lg:[&>.group]:odd:ml-16',
    'grid items-center justify-center',
    'lg:grid-cols-2',
    'project-card',
    classes,
  )
const Container = styled('div')

const imageWrapperStyles = cx(
  'flex items-center justify-center',
  'project-card__image',
  'xl:px-10 2xl:px-8',
  'relative',
)
const ImageWrapper = styled('div')

const mobileTitleStyles = cx(
  'theme-font--heading font-text--xl font-semibold',
  'leading-7 tracking-wide text-white',
  'rounded rounded-t-none',
  'absolute bottom-0',
  'w-full lg:hidden',
  'overflow-hidden',
  'px-5 py-3',
  'z-10',
  'project-card__mobile-title',
)
const MobileTitle = styled('span')

const contentStyles = cx(
  'flex flex-col items-start group',
  'project-card__content',
)
const Content = styled('div')

const excerptStyles = cx(
  'theme-font--reading font-medium',
  'leading-relaxed',
  'max-w-[480px]',
  'mt-3',
)
const Excerpt = styled('p')

const titleStyles = cx(
  'theme-font--heading font-text--xl font-semibold',
  'tracking-wide text-white',
  'hidden lg:block',
)
const Title = styled('h3')

// TODO : use CSS in JS instead of classes like project-card__content
// TODO : Remove flex-wrap on tags later (once Swiper is used) ?

const ProjectCard = (props: Props) => {
  const { className, ...rest } = props
  const { frontmatter, slug } = props.project
  const { title, excerpt } = frontmatter

  const renderTags = frontmatter.tags ? (
    <ul className="mt-5 flex flex-wrap lg:mt-3">
      {frontmatter.tags.map((tag, idx) => (
        <li key={idx} className="peer peer-first:ml-2.5">
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  ) : null

  return (
    <Container className={containerStyles(className)} {...rest}>
      <ImageWrapper className={imageWrapperStyles}>
        <Image
          className="object-cover object-center"
          src={
            'https://picsum.photos/600/4' +
            Math.floor(Math.random() * (90 - 10) + 10)
          }
          alt="Placeholder"
          height={360}
          width={560}
        />
        <MobileTitle className={mobileTitleStyles}>{title}</MobileTitle>
      </ImageWrapper>
      <Content className={contentStyles}>
        <Title className={titleStyles}>{title}</Title>
        {renderTags}
        <Excerpt
          dangerouslySetInnerHTML={{ __html: excerpt }}
          className={excerptStyles}
        />
        <DiscoLink className="mt-4" href={`portfolio/${slug}`}>
          Read More
        </DiscoLink>
      </Content>
    </Container>
  )
}

export default ProjectCard
