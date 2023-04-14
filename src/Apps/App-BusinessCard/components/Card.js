import CardHead from './card-components/Head'
import CardBody from './card-components/Body'

export default function Card() {
    return (
        <div className="card">
            <div className="card-container">
                <CardHead />
                <CardBody />
            </div>
        </div>
    );
}