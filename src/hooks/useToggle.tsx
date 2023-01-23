import { useState } from 'react'

const useToggle = ():[boolean, () => void] => {
  const [open, setOpen] = useState(false)

  const toggleValue = () => setOpen(!open)

  return [open, toggleValue]
}

export default useToggle