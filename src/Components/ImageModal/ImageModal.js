import React from 'react';
import { Modal, GridListTile, GridListTileBar } from '@material-ui/core'
import './imageModal.css';

const ImageModal = ({ image, open, setOpen }) => {
    return (<Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={() => setOpen(false)}
    >
        <div className="modal">
            <GridListTile >
                <img src={image.url} style={{ maxHeight: '500px' }} />
                {
                    image.title &&
                    <GridListTileBar
                        title={image.title}
                    />

                }
            </GridListTile>
        </div>
    </Modal>);
}

export default ImageModal;