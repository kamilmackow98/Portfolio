import DiscoLink from '@atoms/DiscoLink'
import Tag from '@components/pages/portfolio/Tag'
import BlurData from '@data/image/blur.json'
import { styled } from '@stitches/react'
import { cx } from 'class-variance-authority'
import Image from 'next/image'
import { ComponentPropsWithoutRef, useState } from 'react'
import { Project } from 'types'

interface Props extends ComponentPropsWithoutRef<'div'> {
  project: Omit<Project, 'code'>
}

const Container = styled('div')
const containerClasses = (classes: string = '') =>
  cx(
    'lg:[&>.group]:even:mr-16 lg:[&>.group]:odd:ml-16',
    'grid items-center justify-center',
    'lg:grid-cols-2',
    'project-card',
    classes,
  )

const ImageWrapper = styled('div')
const imageWrapperClasses = cx(
  'xxs:h-[242.5px] xs:h-[280px] sm:h-[300px] xl:h-[337.5px] 2xl:h-[360px]',
  'flex items-center justify-center',
  'project-card__image',
  'max-w-full w-full',
  'xl:px-10',
  'relative',
)

const imageCoverClasses = cx('project-card__cover xl:mx-10 rounded')

const imageClasses = cx('h-full w-full')

const MobileTitle = styled('span')
const mobileTitleClasses = cx(
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

const Content = styled('div')
const contentClasses = cx(
  'flex flex-col items-start group',
  'project-card__content',
)

const Excerpt = styled('p')
const excerptClasses = cx(
  'theme-font--reading font-medium',
  'leading-relaxed',
  'max-w-[480px]',
  'mt-3',
)

const Title = styled('h3')
const titleClasses = cx(
  'theme-font--heading font-text--xl font-semibold',
  'tracking-wide text-white',
  'hidden lg:block',
)

// TODO : use CSS in JS instead of classes like project-card__content
// TODO : Remove flex-wrap on tags later (once Swiper is used) ?

const ProjectCard = (props: Props) => {
  const { className, ...rest } = props
  const { frontmatter, slug } = props.project
  const { title, excerpt } = frontmatter

  const [imgSrc, setImgSrc] = useState(`/static/projects/${slug}/thumbnail.jpg`)

  const renderTags = frontmatter.tags ? (
    <ul className="mt-5 flex flex-wrap lg:mt-3">
      {frontmatter.tags.map((tag, idx) => (
        <li key={idx} className="peer peer-first:ml-2.5">
          <Tag>{tag}</Tag>
        </li>
      ))}
    </ul>
  ) : null

  function handleError() {
    setImgSrc('/assets/images/picture-not-available.jpg')
  }

  return (
    <Container className={containerClasses(className)} {...rest}>
      <ImageWrapper className={imageWrapperClasses}>
        <span className={imageCoverClasses} />
        <Image
          blurDataURL={BlurData.data}
          alt={`${title} thumbnail`}
          className={imageClasses}
          onError={handleError}
          placeholder="blur"
          sizes="100vw" // TODO : Check docs
          quality={100}
          src={imgSrc}
          height={560}
          width={360}
        />
        <MobileTitle className={mobileTitleClasses}>{title}</MobileTitle>
      </ImageWrapper>
      <Content className={contentClasses}>
        <Title className={titleClasses}>{title}</Title>
        {renderTags}
        <Excerpt
          dangerouslySetInnerHTML={{ __html: excerpt }}
          className={excerptClasses}
        />
        <DiscoLink
          href={`portfolio/${slug}`}
          className="mt-4"
          variant="primary"
          rounded="tl-br"
          size="xs"
        >
          Read More
        </DiscoLink>
      </Content>
    </Container>
  )
}

export default ProjectCard
