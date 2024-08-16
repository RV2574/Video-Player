import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const videosArr = [
   'https://videos.pexels.com/video-files/2098989/2098989-uhd_2560_1440_30fps.mp4',
   'https://videos.pexels.com/video-files/4709320/4709320-uhd_2560_1440_30fps.mp4',
   'https://videos.pexels.com/video-files/5738165/5738165-uhd_2560_1440_30fps.mp4',
   'https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4',
   'https://videos.pexels.com/video-files/3194277/3194277-hd_1920_1080_30fps.mp4',
   'https://videos.pexels.com/video-files/2260990/2260990-uhd_2560_1440_24fps.mp4',
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
      <video
  controls
  controlsList="nodownload"
  src={videoSrc}
  style={{ width: '100%' }}
  onError={() => alert('Video not found or unable to load.')}
  muted={false}
/>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Videos</Heading>
          <Text>
            This is a sample video for testing and demo. This is called
            description.
          </Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p="8"
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'purple'}
            onClick={() => setVideoSrc(item)}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;