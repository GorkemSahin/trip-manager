import { ReactComponent as Clock } from './svg/clock.svg'
import { ReactComponent as Document } from './svg/document.svg'
import { ReactComponent as CircledWorld } from './svg/world.svg'
import { ReactComponent as Logo } from './svg/logo.svg'
import { ReactComponent as Plus } from './svg/plus.svg'
import { ReactComponent as Yes } from './svg/yes.svg'
import { ReactComponent as Cross } from './svg/cross.svg'
import { ReactComponent as Hamburger } from './svg/hamburger.svg'
import { ReactComponent as SelectorIcon } from './svg/selector.svg'
import { ReactComponent as Edit } from './svg/edit.svg'
import { ReactComponent as Trash } from './svg/trash.svg'
import { ReactComponent as Next } from './svg/next.svg'
import { ReactComponent as Sad } from './svg/error.svg'
import { ReactComponent as World } from './svg/flags/World.svg'
import { ReactComponent as Placeholder } from './svg/flags/Placeholder.svg'

import { ReactComponent as aw } from './svg/flags/Netherlands.svg'
import { ReactComponent as gr } from './svg/flags/Greece.svg'
import { ReactComponent as fr } from './svg/flags/France.svg'
import { ReactComponent as pt } from './svg/flags/Portugal.svg'
import { ReactComponent as es } from './svg/flags/Spain.svg'
import { ReactComponent as it } from './svg/flags/Italy.svg'
import { ReactComponent as sk } from './svg/flags/Slovakia.svg'
import { ReactComponent as se } from './svg/flags/Sweden.svg'
import { ReactComponent as cn } from './svg/flags/China.svg'
import { ReactComponent as at } from './svg/flags/Austria.svg'
import { ReactComponent as uk } from './svg/flags/United Kingdom.svg'

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
