import classNames from 'classnames'
import { useState } from 'react'
import { BlackCloseIcon } from './Icons'

const ImageSlider = ({slides, side}) => {

const [imageModal, setImageModal] = useState({showModal: false, itemId: null, imageUrl: undefined})

    return <>
      <div className="slider">
        <div className={classNames(side === 'to-left' && 'slide-track-to-left', side === 'to-right' && 'slide-track-to-right', 'flex')}>
          { slides.map(x => (
              <div className="slide" key={x.id} onClick={() =>setImageModal({showModal: true, itemId: x.id, imageUrl: x.imageUrl})}>
                <div className="h-full w-full">
                  <img src={x.imageUrl} height="228" width="328" alt={x.imageUrl} />
                </div>
              </div>
            ))
          }
        </div>
      </div>
      { imageModal.showModal &&
        <div className="fixed inset-0 flex items-center justify-center w-full h-full bg-[rgba(217,_217,_217,_0.5)] z-20"
          onClick={() =>setImageModal({showModal: false, itemId: null, imageUrl:undefined})}
        >
          <div className="relative">
            <img src={imageModal.imageUrl} height="608" width="914" alt="" />
            <div className='absolute right-0 top-0 w-9 h-9 bg-white flex justify-center items-center cursor-pointer'>
              <BlackCloseIcon/>
            </div>
          </div>
        </div>
      }
  </>
}

export default ImageSlider;