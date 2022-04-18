import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {

    let {title, description}=this.props;
    return (
      <div>
        <div className="card col-3c" style={{width: "18rem"}}>
          <img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/04-17-2022/t_e48d6425e22f448094fc7fbb5ab75ef1_name_imrs_php.jpg&w=1440" className="card-img-top" alt="/"/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href="/newsdetail" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem