import '../styles.css';
import { useState } from 'react';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ViewModuleSharpIcon from '@mui/icons-material/ViewModuleSharp';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


export default function Widget2() {
    const [images, setImages] = useState(['./Img1.png', './Img1.png', './Img1.png']);

    function handleChange(e) {
        if(e.target.files.length !== 0)
        {
            const fileList = [...e.target.files];
            const imgList = fileList.map((ele) => URL.createObjectURL(ele));
            setImages([...images, ...imgList]);
            e.target.value = null;
        }
    }

    return (    
        <div className='flex flex-col container mr-4 md:mr-10 lg:mr-12 py-0.5 px-1.5 rounded-xl'>
            <div className='flex mt-3 mb-5'>  
                <div className='flex-1 icon-container'>
                    <HelpOutlineOutlinedIcon className='help-icon'/>
                </div>

                <div className='flex gallery-btn'>
                <div className='gallery px-6 py-2.5 ml-4 lg:ml-2 rounded-xl text-xs lg:text-sm xl:text-base'>
                    <div className='gallery font-semibold'>Gallery</div>
                </div>
                </div>

                <div className='flex w-1/5 mr-2 lg:w-1/4'>
                <div className='add add-shadow flex rounded-full h-8 px-3 lg:px-4 self-center'>
                    <label className='cursor-pointer self-center'>
                        <input className='hidden' type='file' id='img' name='img' accept='image/*' multiple onChange={handleChange}></input>
                        <span className='add font-semibold'>+ ADD IMAGE</span>
                    </label>    
                </div>
                </div>

                <div className='flex abc'>
                <div className='arrow-container flex-auto self-center rounded-full max-w-fit mr-3 lg:mr-6'>
                        <ArrowCircleLeftIcon className='arrow rounded-full'/>
                </div>

                <div className='arrow-container flex-auto self-center rounded-full max-w-fit'>
                        <ArrowCircleRightIcon className='arrow rounded-full'/>
                </div>
                </div>
            
            </div>

            <div className='flex mb-3'>
                <div className='flex-auto icon-container mt-12'>
                    <ViewModuleSharpIcon className='rotate-90 grid-icon'/>
                </div> 


                <div className='image-container flex flex-row flex-wrap justify-start ml-4 lg:ml-2 mt-3'>
                    {images.length!==0 && images.map((url, idx) => {
                        return (
                            <div key={idx} className='image-card flex rounded-2xl justify-center'>
                                <img 
                                className='h-32 w-full rounded-2xl'
                                src={url} 
                                alt='uploaded img'/>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
}