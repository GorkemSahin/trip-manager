import Clock from './svg/clock.svg'
import Document from './svg/document.svg'
import CircledWorld from './svg/world.svg'
import Logo from './svg/logo.svg'
import Plus from './svg/plus.svg'
import Yes from './svg/yes.svg'
import Cross from './svg/cross.svg'
import Hamburger from './svg/hamburger.svg'
import SelectorIcon from './svg/selector.svg'
import Edit from './svg/edit.svg'
import Trash from './svg/trash.svg'
import Next from './svg/next.svg'
import Sad from './svg/error.svg'
import World from './svg/flags/World.svg'
import Placeholder from './svg/flags/Placeholder.svg'

import aw from './svg/flags/Netherlands.svg'
import gr from './svg/flags/Greece.svg'
import fr from './svg/flags/France.svg'
import pt from './svg/flags/Portugal.svg'
import es from './svg/flags/Spain.svg'
import it from './svg/flags/Italy.svg'
import sk from './svg/flags/Slovakia.svg'
import se from './svg/flags/Sweden.svg'
import cn from './svg/flags/China.svg'
import at from './svg/flags/Austria.svg'
import uk from './svg/flags/United Kingdom.svg'

const flags: {
  [key: string]: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
} = {
  aw,
  gr,
  fr,
  pt,
  es,
  it,
  sk,
  se,
  cn,
  at,
  uk,
}

export const getFlag = (value: string) => {
  return flags[value] || Placeholder
}

export {
  Clock,
  Document,
  Edit,
  Trash,
  CircledWorld,
  Logo,
  Plus,
  Yes,
  Cross,
  Hamburger,
  SelectorIcon,
  World,
  Next,
  flags,
  Sad,
}
