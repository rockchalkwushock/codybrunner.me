import { FlexContainer, Grid } from '../../commons'

const CertsFlexContainer = FlexContainer.extend`
  align-items: unset;
  text-align: center;
`

const CertsGrid = Grid.extend`
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
`

CertsFlexContainer.displayName = 'CertsFlexContainer'
CertsGrid.displayName = 'CertsGrid'

export { CertsFlexContainer, CertsGrid }
