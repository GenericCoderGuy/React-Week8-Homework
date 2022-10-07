import { Link } from 'react-router-dom';


export default function Post(props) {
    return (
        <div className="card">
            <div className="card-header">
                {
                    (!props.preview) ?
                        (
                            <h2 className=''>{props.post.title}</h2>
                        )
                        :
                        <Link className='bg-dark p-2 text-light bg-opacity-25 box border border-light rounded mb-5' to={`/post/${props.post.id}`}>{props.post.title}</Link>
                }
            </div>
            {
                (!props.preview) ?
                    (
                        <div className="card-body">
                            <p>{props.post.body}</p>
                        </div>
                    )
                    :
                    ''
            }
        </div>
    )
}