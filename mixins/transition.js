export const transition = ({
  property = 'all',
  duration = '150ms',
  ease = 'ease-out',
  delay = '0ms',
} = {}) => `${property} ${duration} ${ease} ${delay}`
