import { Flex, Text } from '@chakra-ui/react'
import type { FlexProps } from '@chakra-ui/react'
import { ButtonLink, Section } from '@/components'
import type { NavLink } from '@/types'

interface HeroProps extends FlexProps {
  header: string
  description: string | React.ReactNode
  cta?: NavLink[]
}
export const Hero: React.FC<HeroProps> = ({
  header,
  description,
  cta,
  ...props
}) => (
  <Section
    pt={[16, 20, 24, 28]}
    pb={[10, null, null, 12]}
    gap={8}
    bg="gray.500"
    {...props}
  >
    <Text
      as="h1"
      textStyle="h1"
      position="relative"
      textTransform="lowercase"
      w="fit-content"
      _after={{
        content: '""',
        position: 'absolute',
        left: '100%',
        bottom: 3,
        width: 16,
        height: 2,
        bg: 'fg',
        sx: {
          '@keyframes blink-cursor': {
            "from, to": { opacity: 0},
            '50%': { opacity: 1 },
          },
        },
        animation: 'blink-cursor 1.5s step-end infinite',
      }}
    >
      {`{${header.replaceAll(' ', '_')}}`}
    </Text>
    <Text color="bg" fontSize="2xl" maxW="container.md">
      {description}
    </Text>
    {cta?.length && (
      <Flex direction={['column', null, null, 'row']} gap={5} justify="start">
        {cta.map(({ name, href }) => (
          <ButtonLink href={href} key={name}>
            {name}
          </ButtonLink>
        ))}
      </Flex>
    )}
  </Section>
)
