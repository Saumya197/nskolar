import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import introvideo from '../../../assets/videos/intro.mp4'


const CoursePage = () => {

    const LectureTitle = "Lecture Title"
    const [lectureNumber, setLectureNumber] = useState(0);

    const lectures = [{
        _id: "abcd",
        title: "sample1",
        description: "Falana dhimkana",
        video:{
            url: 'sadsad',

            }
        },
        {
            _id: "abcd2",
            title: "sample2",
            description: "Falana dhimkana",
            video:{
                url: 'sadsad',
    
            }
        },
        {
            _id: "abcd3",
            title: "sample3",
            description: "Falana dhimkana",
            video:{
                url: 'sadsad',
    
            }
        }]

  return (
    <Grid minH={"90vh"} templateColumns={['1fr','3fr 1fr']}>
        <Box>

        <video
            width={"100%"}
            controls controlsList="nodownload noremoteplayback"
            disablePictureInPicture
            disableRemotePlayback src = {introvideo}>
                
            </video>

        <Heading m="4" children = {`#${lectureNumber+1} ${lectures[lectureNumber].title}`}/>
        <Heading m="4" children = "Description" />
        <Text m="4" children = "Andimandisandi" />
        </Box>
        <VStack>
            {
                lectures.map((element,index) => (
                    <button
                    onClick={() => setLectureNumber(index)}
                    key = {element._id}
                    style = {{
                        width:"100%",
                        padding:"1rem",
                        textAlign:"center",
                        margin:0,
                        borderBottom:"1px solid rgba(0,0,0,0.2)"
                    }}>
                        <Text noOfLines={1}>
                            #{index+1} {element.title}
                        </Text>
                    </button>
                ))
            }
        </VStack>

    </Grid>
  )
}

export default CoursePage