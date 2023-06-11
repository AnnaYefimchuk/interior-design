import NotFound from '../../images/NotFound.png';

export default function NoFound() {
    return (
        <div className="blog-block">
            <img className='' src={NotFound} alt='Not Found' />
        </div>
    );
}