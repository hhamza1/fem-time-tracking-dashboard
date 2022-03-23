import styled from 'styled-components';

export const primary = {
    blue: `hsl(246, 80%, 60%)`,
    lightRed : `hsl(15, 100%, 70%)`,
    softBlue : `hsl(195, 74%, 62%)`,
    lightRedStudy :`hsl(348, 100%, 68%)`,
    limeGreen : `hsl(145, 58%, 55%)`,
    violet : `hsl(264, 64%, 52%)`,
    softOrange : `hsl(43, 84%, 65%)` 
};

export const neutral = {
    veryDarkBlue: `hsl(226, 43%, 10%)`,
    darkBlue: `hsl(235, 46%, 20%)`,
    desaturatedBlue: `hsl(235, 45%, 61%)`,
    paleBlue: `hsl(236, 100%, 87%)`
};


export const ReportSorter = styled.div`
    background-color: ${neutral.darkBlue};
    border-radius: 15px;
    --webkit-filter: drop-shadow(0px 4px 4px rgba(0,0,0, .25));

`;

export const ImgContainer = styled.div`
    max-width: 100%;
    width: 64px;
    height: 64px;
    background-image: url(${props => props.bgImg});
    background-size: contain;
    border-radius: 50%;
    border: 3px solid #fff;

`;