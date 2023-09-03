import './notfoundpage.css'
import Publicity from '../../components/styled/Publicity'
import error from '../../assets/resources/360_F_124253296_1WFcs6utp8pSaIfdfqvOXnppOJG3jHZa.jpg'

interface ErrorType {
    id: number
    title: string
    content: string
    image: string
    order: string
    background: string
}

const errorData: ErrorType =
{
    id: 1,
    title: "Error 404",
    content: "The Page you are trying to access does not exist",
    image: error,
    order: 'row',
    background: '#a014f1'
}

const NotFoundPage = () => {
    return (
        <main className="not-found-page">
            <Publicity
                id={errorData.id}
                title={errorData.title}
                content={errorData.content}
                image={errorData.image}
                order={errorData.order}
                background={errorData.background}
            />
        </main>
    )
}

export default NotFoundPage
