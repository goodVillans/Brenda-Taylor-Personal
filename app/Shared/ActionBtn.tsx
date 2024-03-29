
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SelectedPage } from './types'

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionBtn = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
        className=' rounded-md bg-claret px-10 py-2 hover:bg-lavender hover:text-claret text-white font-semibold transition duration-500'
        onClick={() => setSelectedPage(SelectedPage.Contact)}
        href={`#${SelectedPage.Contact}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionBtn