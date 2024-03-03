import axios from 'axios';
import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';
const FaceMatchLogin = () => {
  const toast = useRef(null);
  const webcamRef = useRef();
  const { state } = useLocation();
  const navigate=useNavigate();
  const handleCapture = async () => {
    try {
      const imageSrc = webcamRef.current.getScreenshot();
      const formData = new FormData();
      formData.append('cnic', state?.cnic);
      formData.append('file', dataURItoBlob(imageSrc), 'screenshot.jpg');
      const response = await axios.post('http://localhost:5000/face_match_login', formData);
      if (response.data.success) {
        const result = response.data;
        toast.current.show({severity:'success', detail:'Image Matched', life: 3000});
        setTimeout(() => {
          navigate('/dashboard', { state: response.data.data  });
        }, 3000);
      } else {
        toast.current.show({severity:'error', detail:'Image Not Matched ', life: 3000})
      }
    } catch (error) {
      toast.current.show({severity:'error', detail:error, life: 3000});
    }
  };


  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: mimeString });
  };

  return (
    <>
    <Toast ref={toast} position="top-center"/>
     <div style={{color:"white",backgroundColor:"black",marginTop:"-25px"}}>
            <h1>Welcome, {state?.name}</h1>
            <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={{ width: 1280, height: 533, facingMode: 'user' }}
      />
      <Button 
          label="Capture and Match"
          className="p-button-primary capture-button"
          onClick={handleCapture}
        />
    </div>
        </div>
    
   
        </>
  );
};

export default FaceMatchLogin;
