import { Grid } from '@chakra-ui/react'
import CardMenu from './cardMenu'
import { ListCardMenu } from '../../../constants'

const DashboarMenu = () => {
    return (
        <>
            <Grid
                templateColumns="repeat(4,minmax(0,1fr))"
                gridAutoFlow="row"
                listStyleType="none"
                m="0"
                p="0"
                gap={6}
            >
                {ListCardMenu.map((card, index) => (
                    <CardMenu
                        isHidden={card.isHidden}
                        key={index}
                        src={card.src}
                        title={card.title}
                        description={card.description}
                        titleButtom={card.titleButtom}
                        url={card.url}
                    />
                ))}
            </Grid>
        </>
    )
}

export default DashboarMenu
