import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {GridList, GridTile} from 'material-ui/GridList';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import Button from '@material-ui/core/Button';


export default class ImageResults extends Component {
    constructor(props){
        super(props);

        this.state ={
            open: false,
            currentImg: ''
        }
    }

    handleOpen = (img)=>{
        this.setState({
            open: true,
            currentImg:img
        })
    }

    handleClose = ()=>{
        this.setState({
            open: false
        })
    }

    render() {
        let imageListContent;
        const {images} = this.props
        if(images){
            imageListContent = (
                <GridList cols={3}>
                    {images.map(img=>(
                        <GridTile
                            title={img.tags}
                            key={img.id}
                            subtitle={
                                <span>
                                    by <strong>{img.user}</strong> 
                                    <div>
                                        view: <strong>{img.views}</strong> downloads: <strong>{img.downloads}</strong>
                                    </div>
                                </span>
                                
                            }
                            actionIcon={
                                <Button onClick={()=> this.handleOpen(img.largeImageURL)}>
                                    <ZoomIn color ="white"/> 
                                </Button>
                            }
                        >
                            <img src ={img.largeImageURL} alt=""/>
                        </GridTile>
                    ))}
                </GridList>
            )
        }else{
            imageListContent = null;
        }
        const actions = [
        <Button variant="contained" color='primary' onClick={this.handleClose}>Close</Button>
        ]
        return (
            <div>
                {imageListContent}
                <Dialog
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}>
                <img src ={this.state.currentImg} alt="" style={{width:'100%'}}/>
                </Dialog>
            </div>
        )
    }
}

ImageResults.propTypes = {
    images: PropTypes.array.isRequired 
}