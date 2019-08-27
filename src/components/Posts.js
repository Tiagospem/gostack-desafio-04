import React, { Component } from 'react'

class Posts extends Component{
    state = {
        posts: [
            {
                id: 1,
                username: 'Tiagospem',
                date: '27 Ago 2019',
                post: 'Lorem ipsun sit amet dolor...',
                avatar: 'https://avatars0.githubusercontent.com/u/8459781?s=460&v=4',
                comments: [
                    {
                        id: 1,
                        username: 'Diego3g',
                        comment: ' Faaala dev, iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                        avatar: 'https://avatars0.githubusercontent.com/u/2254731?s=460&v=4'
                    },
                    {
                        id: 2,
                        username: 'Filipe Deschamps',
                        comment: 'Full dopamina, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                        avatar: 'https://avatars3.githubusercontent.com/u/4248081?s=460&v=4'
                    }
                ]
            },
            {
                id: 2,
                username: 'Iugo',
                date: '27 Ago 2019',
                post: 'Lorem ipsun sit amet dolor...',
                avatar: 'https://i.pravatar.cc/150?img=1',
                comments: [
                    {
                        id: 1,
                        username: 'Diego3g',
                        comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                        avatar: 'https://i.pravatar.cc/150?img=7'
                    },
                    {
                        id: 2,
                        username: 'Fellipe Teló',
                        comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
                        avatar: 'https://i.pravatar.cc/150?img=3'
                    }
                ]
            }
        ]
    };

    post = (avatar, username, date, post) => {
        return (
            <>
            <div className="header-post">
                <img src={avatar} alt=""/>
                <div>
                    <strong>{username}</strong>
                    <span>{date}</span>
                </div>
            </div>
            <div className="post">
                <span>{post}</span>
            </div>
            </>
        )
    };

    comments = (comments) => {
        return (
        <ul className="comments">
            { comments.map(c => (
                <li key={c.id}>
                    <img src={c.avatar} alt=""/>
                    <p><strong>{c.username}</strong> {c.comment}</p>
                </li>
            ))}
        </ul>
        )
    };

    render() {
        return (
            <section className="box">
                <ul>
                    { this.state.posts.map(post => (
                        <li className="comment" key={post.id}>
                            { this.post(post.avatar, post.username, post.date, post.post) }
                            { this.comments(post.comments) }
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
}

export default Posts;