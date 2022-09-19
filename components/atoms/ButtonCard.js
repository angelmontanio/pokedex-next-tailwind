import tw, { styled, css, theme } from 'twin.macro'

const Button = styled.button(({ isLeft, isRight, isSmall }) => [
  // The common button styles added with the tw import
  tw`text-lg w-6 h-6 rounded focus:outline-none`,
  tw`transform transition-transform duration-75`,
  tw`bg-black text-white border-black`,

  // Use the variant grouping feature to add variants to multiple classes
  tw`hocus:(scale-105 text-yellow-400)`,

  // Use props to conditionally style your components
  isLeft && tw`absolute left-1 top-24 `,

  // Combine regular css with tailwind classes within backticks
  isRight && [
    css`
      box-shadow: 0 0.1em 0 0 rgba(0, 0, 0, 0.25);
    `,
    tw`absolute right-1 top-24`,
  ],

  // Conditional props can be added
  isSmall ? tw`text-sm` : tw`text-lg`,

  // The theme import can supply values from your tailwind.config.js
  css`
    color: ${theme`colors.white`};
  `,
])

export default Button