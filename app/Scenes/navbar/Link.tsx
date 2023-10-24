import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "@/app/Shared/types"

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Link = ({page, selectedPage, setSelectedPage}: Props) => {

    const pageLowerCase = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  
    return (
    <AnchorLink
        className={`${selectedPage === pageLowerCase ? 'text-claret' : ''} 
        transition-duration-500 hover:text-lavender 
        `}
        href={`${pageLowerCase}`}
        onClick={() => setSelectedPage(pageLowerCase)}
    >
        {page}
    </AnchorLink>
  )
}

export default Link