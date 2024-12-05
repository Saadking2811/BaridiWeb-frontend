import React from "react";
// Chakra imports
import { Avatar, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Card from '../../../../components/card/Card';
import { UserInfo } from '../../../../redux/userSlice';
import { useSelector } from 'react-redux';
import avatar from '../../navbar/avatar.png';


export default function Profile() {


    const user = useSelector((state: any) => state.user) as UserInfo;

    // Chakra Color Mode
    const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
    // const textColorSecondary = 'gray.400';
    const borderColor = useColorModeValue('white !important', '#111C44 !important');
    return (
        <Card mb={{ base: '0px', lg: '20px' }} alignItems='center' width='552px' height='fit-content' padding='20px'>
            <Flex
                height='100%'
                width='100%'
                direction='column'
                gap='24px'
            >
                <Flex direction='column' justify='space-around' gap='40px' align='center'>
                    <Flex direction='row' align='center' gap='10px' width={'100%'}>
                        <Avatar src={avatar} h='70px' w='70px' border='4px solid' borderColor={borderColor} />
                        <Text color={textColorPrimary} fontWeight='semibold' align={'center'} fontSize='xl' mt='10px' width='80%' display='flex' gap='20px'>
                            Welcome back <Text fontWeight='bold' color={'#22297C'}>{user.fullName}</Text>
                        </Text>
                    </Flex>
                    {user.ccp &&
                        <Text color={textColorPrimary} fontWeight='semibold' align={'center'} fontSize='xl' mt='10px' width='80%' display='flex' gap='20px'>
                            {user.ccp}
                        </Text>
                    }
                </Flex>
                {/* <Flex justify='space-between'>
                    <Text border='2px solid #218225' borderRadius='20px' padding='5px 10px'>
                        - {days} days until for harvest
                    </Text>
                    <Text color='#FC0D0D'>
                        {suggestions === '0' ? 'no new suggestions' : `${suggestions} new suggestion`}
                    </Text>
                </Flex>*/}
            </Flex>
        </Card>
    );
}
