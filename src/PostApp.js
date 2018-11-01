import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
// import Iframe from 'react-iframe'
// import Post from './posts/Post'
import moment from 'moment'

class PostApp extends Component {
  constructor () {
    super()
    this.state = {
        posts: [],
        item: {},
        iframeClass: 'hide',
        contentClass: '',
    }
    this.getPosts()
  }

  getPosts = () => {
    axios.get('http://www.mocky.io/v2/5bb446bc3300006729cad531')
    .then(response => {
        this.setState({
            posts: response.data
        })
        if(this.state.posts.length > 0) this.showContent(this.state.posts[0])
    })
  }
  showContent = (it) => {
    this.setState({item: it})
  }
  showIframe = () => {
    this.setState({iframeClass: ''})
    this.setState({contentClass: 'hide'})
  }
  

  render () {
    var time = moment.unix(this.state.item.publishedTimeStamp).format('MM-DD-YYYY  , hh : mm ')
    return (
        <div>
            
            <div className="container-fluid main-body">
                <div className="row">
                    <div className="col-md-6">
                        <div class="panel panel-default">
                           
                            {
                                this.state.posts.map((post) => (
                                  
                                    <a className="list-group-item" id="post" onClick={(e)=> this.showContent(post)}>
                                        <h3>{post.title}</h3>
                                        <p>{post.url}</p>
                                        <p class="alert alert-warning">{post.score}</p>
                                    </a>
                                   
                                ))
                            }
                            
                        </div>
                       
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                                <div className={this.state.contentClass}>
                                    <ul id="comments" className="list-group">
                                        <img ref="image" src={ this.state.item.imgUrl} width= "100%" height="100%" alt="face" />
                                        <li className="list-group-item">
                                            <h2>{this.state.item.title}</h2>
                                            
                                            <p>{time}</p> 
                                            <p>{this.state.item.snippet}</p>
                                            <a href="#" onClick={(e)=>this.showIframe()}> Click to Read More </a>
                                            <ul className="list-group">
                                                <a href="http://www.facebook.com/sharer.php?u=https://simplesharebuttons.com" target="_blank">
                                                    <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" />
                                                </a>

                                                <a href="https://twitter.com/share?url=https://simplesharebuttons.com&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons" target="_blank">
                                                    <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" />
                                                </a>
                                                <a href="http://vkontakte.ru/share.php?url=https://simplesharebuttons.com" target="_blank">
                                                    <img src="https://simplesharebuttons.com/images/somacro/vk.png" alt="VK" />
                                                </a>
                                            </ul>
                                        </li>
                                        
                                    </ul>
                                    
                                </div>
                            </div>
                            <div className="col-md-12">
                                <iframe className={this.state.iframeClass} src ={this.state.item.sourceUrl} width="922" height="900" name="myId" display="none" title="news" allowFullScreen/>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
  }
}
export default PostApp
