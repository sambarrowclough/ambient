import Header from '../components/Header'
import Head from '../components/Head'
import React, { useEffect, useRef, useState } from 'react'
import { styled } from '@stitches/react'
import { violet, blackA } from '@radix-ui/colors'
import * as SliderPrimitive from '@radix-ui/react-slider'

const StyledSlider = styled(SliderPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
  touchAction: 'none',
  width: 200,
  marginTop: '20px',
  marginLeft: '20px',

  '&[data-orientation="horizontal"]': {
    height: 20,
  },

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    width: 20,
    height: 100,
  },
})

const StyledTrack = styled(SliderPrimitive.Track, {
  backgroundColor: blackA.blackA10,
  position: 'relative',
  flexGrow: 1,
  borderRadius: '9999px',

  '&[data-orientation="horizontal"]': { height: 3 },
  '&[data-orientation="vertical"]': { width: 3 },
})

const StyledRange = styled(SliderPrimitive.Range, {
  position: 'absolute',
  backgroundColor: 'white',
  borderRadius: '9999px',
  height: '100%',
})

const StyledThumb = styled(SliderPrimitive.Thumb, {
  all: 'unset',
  display: 'block',
  width: 15,
  height: 15,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  borderRadius: 10,
  '&:hover': { backgroundColor: violet.violet2 },
  '&:focus': { boxShadow: `0 0 0 3px ${blackA.blackA8}` },
})

const SliderDemo = ({ audioRef }) => {
  useEffect(() => {
    console.log(audioRef.current)
  }, [audioRef])
  return (
    <StyledSlider
      onValueChange={(e) => {
        audioRef.current.volume = e[0] / 100
      }}
      defaultValue={[50]}
      max={100}
      step={0.01}
      aria-label="Volume"
    >
      <StyledTrack>
        <StyledRange />
      </StyledTrack>
      <StyledThumb />
    </StyledSlider>
  )
}

const PauseIcon = () => (
  <svg width="120" height="120" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.04995 2.74998C6.04995 2.44623 5.80371 2.19998 5.49995 2.19998C5.19619 2.19998 4.94995 2.44623 4.94995 2.74998V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74998ZM10.05 2.74998C10.05 2.44623 9.80371 2.19998 9.49995 2.19998C9.19619 2.19998 8.94995 2.44623 8.94995 2.74998V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74998Z"
      fill="#fff"
      fill-rule="evenodd"
      clip-rule="evenodd"
    ></path>
  </svg>
)

const PlayIcon = () => (
  <svg width="120" height="120" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z"
      fill="#fff"
      fill-rule="evenodd"
      clip-rule="evenodd"
    ></path>
  </svg>
)

const SpeakerIcon = () => (
  <svg
    style={{ position: 'relative', marginLeft: '20px', marginTop: '20px', cursor: 'pointer' }}
    width="24"
    height="24"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.46968 1.05085C7.64122 1.13475 7.75 1.30904 7.75 1.5V13.5C7.75 13.691 7.64122 13.8653 7.46968 13.9492C7.29813 14.0331 7.09377 14.0119 6.94303 13.8947L3.2213 11H1.5C0.671571 11 0 10.3284 0 9.5V5.5C0 4.67158 0.671573 4 1.5 4H3.2213L6.94303 1.10533C7.09377 0.988085 7.29813 0.966945 7.46968 1.05085ZM6.75 2.52232L3.69983 4.89468C3.61206 4.96294 3.50405 5 3.39286 5H1.5C1.22386 5 1 5.22386 1 5.5V9.5C1 9.77615 1.22386 10 1.5 10H3.39286C3.50405 10 3.61206 10.0371 3.69983 10.1053L6.75 12.4777V2.52232ZM10.2784 3.84804C10.4623 3.72567 10.7106 3.77557 10.833 3.95949C12.2558 6.09798 12.2558 8.90199 10.833 11.0405C10.7106 11.2244 10.4623 11.2743 10.2784 11.1519C10.0944 11.0296 10.0445 10.7813 10.1669 10.5973C11.4111 8.72728 11.4111 6.27269 10.1669 4.40264C10.0445 4.21871 10.0944 3.97041 10.2784 3.84804ZM12.6785 1.43044C12.5356 1.2619 12.2832 1.24104 12.1147 1.38386C11.9462 1.52667 11.9253 1.77908 12.0681 1.94762C14.7773 5.14488 14.7773 9.85513 12.0681 13.0524C11.9253 13.2209 11.9462 13.4733 12.1147 13.6161C12.2832 13.759 12.5356 13.7381 12.6785 13.5696C15.6406 10.0739 15.6406 4.92612 12.6785 1.43044Z"
      fill="#fff"
      fill-rule="evenodd"
      clip-rule="evenodd"
    ></path>
  </svg>
)

const Index = () => {
  const videoRef = useRef()
  const audioRef = useRef()
  const [playing, setPlaying] = useState()
  const [showVolume, setShowVolume] = useState()
  useEffect(() => {
    if (playing) {
      videoRef.current.play()
    } else {
      videoRef.current.pause()
    }
    videoRef.current.muted = 'muted'
    videoRef.current.loop = 'true'
    videoRef.current.onended = function () {
      this.load()
      this.play()
    }
  }, [videoRef, playing])
  useEffect(() => {
    if (playing) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
    audioRef.current.controls = 'true'
    audioRef.current.loop = 'loop'
    audioRef.current.autoplay = 'true'
  }, [audioRef, playing])
  return (
    <>
      <Head />

      {/* <Header /> */}
      <div class="video-container">
        <video ref={videoRef}>
          <source
            src="https://qukdxrbnhfegteifevik.supabase.in/storage/v1/object/public/videos/production ID_5100156.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
        }}
        onClick={() => {
          setPlaying((p) => !p)
        }}
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </div>

      <div className="flex">
        <div onClick={() => setShowVolume((p) => !p)}>
          <SpeakerIcon />
        </div>
        {showVolume && <SliderDemo audioRef={audioRef} />}
      </div>
      <audio style={{ display: 'none' }} ref={audioRef}>
        <source
          src="https://qukdxrbnhfegteifevik.supabase.in/storage/v1/object/public/videos/rain.ten.mp3"
          type="audio/mpeg"
        ></source>
      </audio>
    </>
  )
}

export default Index
